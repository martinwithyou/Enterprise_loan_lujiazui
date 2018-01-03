<style scoped>
  .login {
    padding-top:100px;
    width:100%;
    height:100%;
    position:absolute;
    z-index:100;
    border:1px solid #333333;
  }
  .login_background{
  	position:absolute;
  	z-index:99;
  	width:100%;
  	height:100%;
  	border:1px solid #3074BD;
  	background-image: url(../../assets/bj.png);
  	background-size: cover;
  }
  .login-form {
    border: 1px solid #eaeefb;
    transition: .2s;
    padding-top:0px;
    background-color: #ffffff;
    padding:16px;
    padding-top:0px;
    height:600px;
  }
  .login_background_left{
  	width:70%;
  	height:100%;
  	float:left;
  	background-color:#1D8CE0;
  }
  .login_background_right{
  	width:30%;
  	height:100%;
  	float:left;
  	background-color:#58B7FF;
  }
  .form_title{
  	width:100%;
  	height:100px;
  	line-height:100px;
  	text-align:right;
  	font-size:20px;
  	font-weight:500;
  	border:0px solid #3074BD;
  }
  .system_name{
  	width:100%;
  	height:50px;
  	line-height:50px;
  	text-align:left;
  	font-weight:400;
  	margin-bottom:20px;
  }
  .form_input_area{
  	width:100%;
  	height:150px;
  }
  .form_input_area_part{
  	width:100%;
  	height:50px;
  }
  .icon_area{
  	width:24px;
  	height:32px;
  	float:Left;
  	margin-top:12px;
  	margin-right:20px;
  	color:#999999;
  }
  .icon_area_new{
  	width:24px;
  	height:32px;
  	float:Left;
  	margin-top:18px;
  	margin-left:-25px;
   }
</style>
<template>
<div>
	
  <div class="login_background">
  </div>
	
  <div class="login">
    <el-row>
      <el-col :span="14">&nbsp;</el-col>
      <el-col :span="5" >
      	<div class="login-form">
      		
      	<div class="form_title">
      		<div class="system_logo"></div>
      	</div>
      	<div class="system_name" v-text="system_title"></div>
      	
      	<div class="form_input_area">
      		
      		
      		<div class="form_input_area_part">
      			<div class="input _area" style="height:100%;width:100%;float:left;border-bottom:2px solid #d9d9d9;">
      				<div class="icon_area">
      					<img src="../../assets/username.png" />
      				</div>
      				<input  v-model="user.name"  placeholder="请输入您的用户名" style="width:80%;height:40px;float:left;margin-top:5px;border:0px solid #ffffff;margin-right:5px;"/>
      				<div class="el-icon-circle-close icon_area_new" @click="delete_name"></div>
      			</div>
      		</div>
      		
      	  <div class="form_input_area_part" style="margin-top:20px;">
      			<div class="input _area" style="height:100%;width:100%;float:left;border-bottom:2px solid #d9d9d9;">
      				<div class="icon_area">
      					<img src="../../assets/password.png" />
      				</div>
      				<input  v-model="user.pass"   placeholder="请输入您的密码" style="width:80%;height:40px;float:left;margin-top:5px;border:0px solid #ffffff;margin-right:5px;"/>
      				<div class="el-icon-circle-close icon_area_new" @click="delete_pass"></div>
      			</div>
      		</div>	

      		<div class="form_input_area_part" style="margin-top:30px;padding-left:24px;">
      			<el-button type="primary"  @click="clickFn" style="width:80%;float:left;">主要按钮</el-button>
      		</div>
      		
      	</div>
             

                     
        <div class="form_bottom"></div>
        
        </div>
      </el-col>
    </el-row>
    
    
<!------------------------------------>
<el-dialog
  title="提示"
  :visible.sync="dialogVisible"
  :modal-append-to-body="false"
  size="tiny"
  :before-close="handleClose">
  <span v-text="error_tip"></span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>
<!------------------------------------>
  </div>


</div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import  bus from 'components/js/public.js'
  import $ from 'jquery'
  
  export default {
  	data(){
  		return {
  			
  			dialogVisible:false,
  			
      	error_tip:'',
      	
      	form_title:"雪橙金服",
      	
      	system_title:"企业进件管理系统",
      	
        user: {
        	
          name: '',
          
          pass: ''
          
        }
        
      }
  	},
    computed: mapGetters([
      'tokens'
    ]),
    watch: {
    	
      tokens: function (val) {
        this.$router.push('/');
        
        console.log(val);
      }
      
    },
    mounted(){
  		
  		this.$nextTick(function() { 
  			
  		  this.origin_localhost();
  		    
  		})
  	},
    methods: {
      clickFn:function(){

//       var url = 'http://172.16.4.107:9094' + '/user/login';
        
        this.$http.post(url, {jobNumber: this.user.name, userPwd: this.user.pass}, {emulateJSON: true}).then(function(res){
        	
        	console.log(res.body.resultCode);
        	
        	console.log(res.body.resultMessage);
        	
        	if( res.body.resultCode == this.$store.state.success_code ){
       		
        		  this.$store.state.login.tokens=res.body.data;
        		  
        		  //将tokens存进去localstorage开始
        		  localStorage.tokens=res.body.data;
        		  //将tokens存进去localstorage结束
        		  
        		  this.$router.push('/login'); 
        		  
        	}else{
        		
        		  this.error_tip=res.body.resultMessage;
        		  
        		  //alert(res.body.resultMessage);
        		  this.dialogVisible=true;
        	}
        	

        	
        }, function(error){
        	
        	console.log(error);
        	
        });
        
      },
      delete_name:function(){
      	
      	this.user.name='';
      	
      },
      delete_pass:function(){
      	
      	this.user.pass='';
      	
      },
      origin_localhost:function(){
      	
      	this.$store.state.localhost="http://172.18.100.196:7070";
      	
      	this.$store.state.success_code="000000";
      	
      },
      handleClose:function(){
      	
      }
      
    }
  }
</script>

