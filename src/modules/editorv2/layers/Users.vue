<template>
  <div class="users-wrapper">
    <div class="filter">
      <i class="fas fa-search"></i>
      <input type="text" class="form-control" placeholder="Search">
    </div>
    <span class="user-item" v-bind:class="{'active': index === selected}" v-for="(item, index) in users" :key="index" @click="makeActive(item, index)">
      <span class="image" v-if="item.account_profile !== null">
        <img :src="config.BACKEND_URL + item.account_profile.url">
      </span>
      <span class="image" v-else>
        <i class="fas fa-user-circle text-primary"></i>
      </span>
      <label class="title">
        {{item.username}}
      </label>
      <i class="fas fa-circle pull-right" style="padding-right: 5px; line-height: 30px; font-size: 6px;" v-bind:class="{'text-primary': item.login_status === true}"></i>
    </span>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
.users-wrapper{
  width: 100%;
  float: left;
  min-height: 50px;
  overflow-y: hidden;
}

.filter{
  height: 30px;
  width: 100%;
  float: left;
  position: relative;
}

.filter .fa-search{
  position: absolute;
  line-height: 30px;
  z-index: 1;
  right: 0%;
  font-size: 14px;
  padding-right: 5px;
  color: #555;
}

.filter i:hover{
  color: $primary;
  cursor: pointer;
}
.filter .form-control{
  height: 30px !important;
  border-radius: 0px !important;
  position: absolute;
  z-index: 0;
  padding-left: 6px !important;
  font-size: 11px !important;
  width: 100% !important;
}

.user-item{
  width: 100%;
  float: left;
  height: 30px;
  line-height: 30px;
}

.user-item:hover{
  cursor: pointer;
  color: $primary;
  border-bottom: solid 1px #ccc;
}

.user-item .title:hover{
  cursor: pointer;
}

.user-item .image{
  float: left;
}

.user-item .image img{
  width: 25px;
  height: 16.5px;
  border-radius: 50%;
  padding: 0px 5px;
}

.user-item .image i{
  font-size: 16px;
  float: left;
  line-height: 30px;
  padding: 0px 5px;
}

.user-item .title{
  float: left;
}

.active{
  background: $gray;
  color: $primary;
}
</style>
<script>
import CONFIG from 'src/config.js'
import GLOBAL from 'src/modules/editorv2/global.js'
export default {
  mounted(){
    this.retrieve()
  },
  data () {
    return{
      users: null,
      config: CONFIG,
      global: GLOBAL,
      selected: null
    }
  },
  methods: {
    retrieve(){
      let parameter = {
        condition: [{
          value: 'DESIGNER',
          column: 'account_type',
          clause: '='
        }]
      }
      this.APIRequest('accounts/retrieve', parameter).then(response => {
        if(response.data.length > 0){
          this.users = response.data
        }else{
          this.users = null
        }
      })
    },
    makeActive(item, index){
      GLOBAL.template.contents.overlay.title = 'designer'
      GLOBAL.template.contents.overlay.description = item.username
      GLOBAL.template.contents.overlay.payload = 'account_id'
      GLOBAL.template.contents.overlay.payload_value = item.id
      this.selected = index
    }
  }
}
</script>
