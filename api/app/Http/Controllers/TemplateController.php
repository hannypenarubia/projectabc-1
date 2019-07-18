<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Template;
use App\Guide;
use App\ActiveTemplate;
class TemplateController extends APIController
{
  function __construct(){
  	$this->model = new Template();
    $this->notRequired = array(
      'purchased'
    );
  }

  public function create(Request $request){
    $data = $request->all();
    $data['code'] = $this->generateCode();
    $this->model = new Template();
    $this->insertDB($data);
    return $this->response();
  }

  public function retrieve(Request $request){
    $data = $request->all();
    $this->model = new Template();
    $this->retrieveDB($data);
    $result = $this->response['data'];
    return $this->response();
  }

  public function generateCode(){
    $code = substr(str_shuffle("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"), 0, 64);
    $codeExist = Template::where('code', '=', $code)->get();
    if(sizeof($codeExist) > 0){
      $this->generateCodee();
    }else{
      return $code;
    }
  }
}
