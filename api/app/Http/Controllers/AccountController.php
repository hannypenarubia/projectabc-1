<?php

namespace App\Http\Controllers;

use App\Account;
use App\AccountInformation;
use App\BillingInformation;
use App\AccountProfile;
use App\Checkout;
use App\Product;
use App\CheckoutItem;
use App\Plan;
use App\Rating;
use App\NotificationSetting;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Carbon\Carbon;
use App\Jobs\Email;
class AccountController extends APIController
{
    function __construct(){  
      $this->model = new Account();
      $this->validation = array(  
        "email" => "unique:accounts",
        "username"  => "unique:accounts"
      );
      $this->notRequired = array(
        'order_suffix'
      );
    }

    public function create(Request $request){
     $request = $request->all();
     $referralCode = $request['referral_code'];
     $dataAccount = array(
      'code'  => $this->generateCode(),
      'password'        => Hash::make($request['password']),
      'status'          => 'NOT_VERIFIED',
      'email'           => $request['email'],
      'username'        => $request['username'],
      'account_type'    => $request['account_type'],
      'order_suffix'    => 'IDF-',
      'created_at'      => Carbon::now()
     );
     $this->model = new Account();
     $this->insertDB($dataAccount);
     $accountId = $this->response['data'];

     if($accountId){
       $this->createDetails($accountId, $request['account_type']);
       //send email verification here
       app('App\Http\Controllers\EmailController')->verification($accountId);
       if($referralCode != null){
          app('App\Http\Controllers\InvitationController')->confirmReferral($referralCode);
       }
     }
    
     return $this->response();
    }

    public function createDetails($accountId, $type){
      $info = new AccountInformation();
      $info->account_id = $accountId;
      $info->created_at = Carbon::now();
      $info->save();

      $billing = new BillingInformation();
      $billing->account_id = $accountId;
      $billing->created_at = Carbon::now();
      $billing->save();

      if($type == 'PARTNER' || $type == 'partner'){
        $product = new Product();
        $product->account_id = $accountId;
        $product->code = $this->generateProductCode();
        $product->title = 'id_printing';
        $product->description = 'Auto created service...';
        $product->status = 'pending';
        $product->created_at = Carbon::now();
        $product->save();
      }
    }

    public function generateProductCode(){
      $code = substr(str_shuffle("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"), 0, 32);
      $codeExist = Product::where('id', '=', $code)->get();
      if(sizeof($codeExist) > 0){
        $this->generateProductCode();
      }else{
        return $code;
      }
    }

    public function generateCode(){
      $code = 'IDF-'.substr(str_shuffle("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"), 0, 28);
      $codeExist = Account::where('id', '=', $code)->get();
      if(sizeof($codeExist) > 0){
        $this->generateCode();
      }else{
        return $code;
      }
    }

    public function verify(Request $request){
      $data = $request->all();
      $this->model = new Account();
      $this->retrieveDB($data);
      dispatch(new Email($this->response['data'][0], 'verification')); // Send Email
      return $this->response();
    }

    public function updateByVerification(Request $request){
      $data = $request->all();
      $this->model = new Account();
      $this->updateDB($data);
      return $this->response();
    }

    public function requestReset(Request $request){
      $data = $request->all();
      $result = Account::where('email', '=', $data['email'])->get();
      if(sizeof($result) > 0){
         app('App\Http\Controllers\EmailController')->resetPassword($result[0]['id']);
        return response()->json(array('data' => true));
      }else{
        return response()->json(array('data' => false));
      }
    }

    public function update(Request $request){ 
      $data = $request->all();
      $result = Account::where('code', '=', $data['code'])->where('username', '=', $data['username'])->get();
      if(sizeof($result) > 0){
        $updateData = array(
          'id'        => $result[0]['id'],
          'password'  => Hash::make($data['password'])
        );
        $this->model = new Account();
        $this->updateDB($updateData);
        if($this->response['data'] == true){
          dispatch(new Email($result[0], 'reset_password'));
          return $this->response();
        }else{
          return response()->json(array('data' => false));
        }
      }else{
        return response()->json(array('data' => false));
      }
    }
    public function hashPassword($password){
      $data['password'] = Hash::make($password);
      return $data;
    }
    public function customValidate($text){
      $validation = array('email' => 'required|email'); 
      return $this->validateReply($text, $validation);
    }

    public function validateReply($text, $validation){
      $validator = Validator::make($text, $validation);
      if($validator->fails()){
        return false;
      }
      else
        return true;
    }

    public function retrieve(Request $request){
      $data = $request->all();
      $this->model = new Account();
      $result = $this->retrieveDB($data);

      if(sizeof($result) > 0){
        $i = 0;
        foreach ($result as $key) {
          $accountId = $result[$i]['id'];
          $result[$i]['account_information_flag'] = false;
          $result[$i]['account_profile_flag'] = false;
          $accountInfoResult = AccountInformation::where('account_id', '=', $accountId)->get();
          $accountProfileResult = AccountProfile::where('account_id', '=', $accountId)->orderBy('created_at', 'DESC')->get();
          $result[$i]['account_information'] = (sizeof($accountInfoResult) > 0) ? $accountInfoResult[0] : null;
          $result[$i]['account_profile'] = (sizeof($accountProfileResult) > 0) ? $accountProfileResult[0] : null;
          $result[$i]['login_status'] = app('App\Http\Controllers\AccountLoginStatusController')->getStatus($accountId);
          $result[$i]['checkout'] = $this->getCheckoutItem($accountId);
          $result[$i]['plan'] = $this->getCurrentPlan($accountId, $result[$i]['created_at']);
          $result[$i]['notification_settings'] = $this->getNotificationSettings($accountId);
          $i++;
        }
        return response()->json(array('data' => $result));
      }else{
        return $this->response();
      }
    }

    public function retrievePartners(Request $request){
      // retrieve all partners
      // check plan
      // check trial plan
      $data = $request->all();
      $filter = $data['filter'];
      $search = $data['search'].'%';
      $result = null;

      if($filter == 'name'){
        $result = DB::table('accounts as T1')
              ->leftJoin('billing_informations as T2', 'T2.account_id', '=', 'T1.id')
              ->where('T2.company', 'like', $search)
              ->where('T1.account_type', '=', 'PARTNER')
              ->where('T1.status', '=', 'VERIFIED')
              ->orderBy('T2.company', 'asc')
              ->get(['T1.*']);
      }else{
        $result = DB::table('accounts as T1')
              ->leftJoin('billing_informations as T2', 'T2.account_id', '=', 'T1.id')
              ->where('T2.city', 'like', $search)
              ->where('T1.account_type', '=', 'PARTNER')
              ->where('T1.status', '=', 'VERIFIED')
              ->orderBy('T2.city', 'asc')
              ->get(['T1.*']);
      }

      $response = array(
        'data'  => array(),
        'error' => null,
        'timestamp' => Carbon::now()
      );

      if(sizeof($result) > 0){
        $i = 0;
        foreach ($result as $key) {
          $accountId = $result[$i]->id;
          $accountDate = Carbon::createFromFormat('Y-m-d H:i:s', $result[$i]->created_at);
          $current = Carbon::now();
          $diff = $accountDate->diffInDays($current, false);
          if($diff < 30){
            $temp = array(
              'account' => $this->retrieveAccountDetails($accountId),
              'rating'  => $this->getRatingsPartners($accountId)
            );
            $response['data'][] = $temp;            
          }else if($this->checkPlan($accountId) == true){
            $temp = array(
              'account' => $this->retrieveAccountDetails($accountId),
              'rating'  => $this->getRatingsPartners($accountId)
            );
            $response['data'][] = $temp;
          }else{
            //
          }
          $i++;
        }
      }
      return response()->json($response);
    }

    public function getNotificationSettings($accountId){
      $result = NotificationSetting::where('account_id', '=', $accountId)->get();
      return (sizeof($result) > 0) ? $result[0] : null;
    }

    public function checkPlan($accountId){
      $result = Plan::where('account_id', '=', $accountId)->whereDate('end', '>=', Carbon::now())->get();
      return (sizeof($result) > 0) ? true : false;
    }

    public function getRatingsPartners($accountId){
      $rating = Rating::where('payload', '=', 'partner')->where('payload_value', '=', $accountId)->get();
      $avg = 0;
      $totalRating = 0;
      $size = sizeof($rating);
      if(sizeof($rating) > 0){
        $i = 0;
        foreach ($rating as $key) {
          $totalRating += intval($rating[$i]['value']);
          $i++;
        }
      }
      $avg = ($size > 0) ? floatval($totalRating / $size) : $totalRating;
      return array(
        'total' => $totalRating,
        'size'  => $size,
        'avg'   => $avg
      );
    }

    public function getCheckoutItem($accountId){
      $checkout = Checkout::where('account_id', '=', $accountId)->where('status', '=', 'added')->first();
      if($checkout){
        return CheckoutItem::where('checkout_id', '=', $checkout->id)->count();
      }else{
        return 0;
      }
    }

    public function getCurrentPlan($accountId, $createdAt){
      $current = Carbon::now();
      $dayInMonth = Carbon::parse($createdAt)->daysInMonth;
      $accountDate = Carbon::createFromFormat('Y-m-d H:i:s', $createdAt);
      $diff = $accountDate->diffInDays($current, false);
      if($diff >= $dayInMonth){
        $result = Plan::where('account_id', '=', $accountId)->whereDate('end', '>=', Carbon::now())->where('status', '=', 'completed')->orderBy('created_at', 'asc')->first();
        if($result){
          return array(
            'title' => $result->title,
            'end_human' => Carbon::createFromFormat('Y-m-d H:i:s', $result->end)->copy()->tz('Asia/Manila')->format('F j, Y')
          );
        }else{
          return array(
            'title' => 'Expired',
            'end_human' => null
          );
        }
      }else{
        return array(
          'title' => 'Trial',
          'end_human' => Carbon::createFromFormat('Y-m-d H:i:s', $createdAt)->addMonth()->copy()->tz('Asia/Manila')->format('F j, Y')
        );
      }
    }

}