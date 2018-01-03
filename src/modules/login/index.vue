<style scoped>
   .icon_area_new{
  	width:24px;
  	height:32px;
  	float:Left;
  	margin-top:18px;
  	margin-left:-25px;
  	color:#999999;
   }
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
  	background-image:url(../../assets/bj.png);
  	background-size:cover;
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
  	padding-right:16px;
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
  	margin-right:10px;
  }
  .form_bottom{
  	width:366px;
  	height:153px;
  	position:absolute;
  	bottom:0;
  	background-image: url(../../assets/bottom.png);
  }
  .buttom_position{
  	width:110px;
  	height:35px;
  	margin-bottom:10px;
  }
  .buttom_position:hover{
  	cursor:pointer;
  	border-radius: 5px;
  }
  .role_1{
  	background-image: url(../../assets/role_choice/b1.png);
  	background-size: cover;
  }
  .role_2{
  	background-image: url(../../assets/role_choice/b2.png);
  	background-size: cover;
  }
  .role_3{
  	background-image: url(../../assets/role_choice/b3.png);
  	background-size: cover;
  }
  .role_4{
  	background-image: url(../../assets/role_choice/b4.png);
  	background-size: cover;
  }
  .role_5{
  	background-image: url(../../assets/role_choice/b5.png);
  	background-size: cover;
  }
  .role_6{
  	background-image: url(../../assets/role_choice/b6.png);
  	background-size: cover;
  }
  .role_7{
  	background-image: url(../../assets/role_choice/b7.png);
  	background-size: cover;
  }
  .role_8{
  	background-image: url(../../assets/role_choice/b8.png);
  	background-size: cover;
  }
  .role_9{
  	background-image: url(../../assets/role_choice/b9.png);
  	background-size: cover;
  }
  .role_10{
  	background-image: url(../../assets/role_choice/b10.png);
  	background-size: cover;
  }
  .role_11{
  	background-image: url(../../assets/role_choice/b11.png);
  	background-size: cover;
  }
  .tip_for_selelct_role{
  	width:100%;
  	height:30px;
  	line-height:30px;
  	text-align: right;
  	color:#999999;
  	margin-top:50px;
  	font-size:14px;
  }
  .system_logo{
	width:166px;
	height:39px;
	border:0px solid #333333;
	background-image: url(../../assets/system_logo.png);
	float:right;
	margin-top:30px;
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
  /*button_area_css*/
  .button_area_css:hover{cursor:pointer}
  .button_area_css{width:110px;height:35px;background-color: #1C8DE0;color:#ffffff;line-height:35px;text-align:center;float:left;margin-top:10px;margin-right:10px;border-radius:5px;}
@media only screen and (min-width: 1300px) and (max-width: 1600px) {
	.form_bottom{
  	width:200px;
  	height:153px;
  	position:absolute;
  	bottom:0;
  	background-image: url(../../assets/bottom.png);
  	display:none;
  }
  .login-form{
  	width:130%;
  	height:400px;
  }
}
</style>
<template>
<div>
	
  <div class="login_background"></div>
	
  <div class="login"  v-show="form_2">
    <el-row>
      <el-col :span="13">&nbsp;</el-col>
      <el-col :span="5" >
      	<div class="login-form" style="">
      	<div class="form_title">
      		<div class="system_logo"></div>
      	</div>
      	<div class="system_name" v-text="system_title"></div>
      	<div class="form_input_area" id="show_form_input_area">
      		 <div class="button_area_css" v-for="table in tables"  @click="login(table.roleCode)">{{table.roleName}}</div>
      	</div>
        <div class="tip_for_selelct_role">请选择角色进入</div>       
        <div class="form_bottom"></div>
        </div>
      </el-col>
    </el-row>
  </div>
  
  <div class="login" v-show="form_1">
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
      			<el-button type="primary"  @click="clickFn" style="width:80%;float:left;">登录</el-button>
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
  			
      	form_1:true,
      	
      	form_2:false,
      	
      	form_title:"雪橙金服",
      	
      	system_title:"企业进件管理系统",
      	
      	dialogVisible:false,
  			
      	error_tip:'',
      	
        user: {
        	
          name: '',
          
          pass: ''
          
        },
        
        url:'',
        
        getBackData:'',
        
        tables:''
        
      }
  	},
    computed: mapGetters([
      'tokens'
    ]),
    watch: {
      tokens: function (val) {
        //this.$router.push('/login');
        // this.$router.push('/home/page1_1');
      }
    },
    mounted(){
  		
  		this.$nextTick(function() { 
  			
  			this.origin_localhost();

  		})
  	},
    methods: {
    	
      login(roleCode) {

      localStorage.roleCode = roleCode;
      
      console.log("--------------------------------------------------");
      console.log(localStorage);
      console.log(roleCode);
      console.log("--------------------------------------------------");
      
      var url=localStorage.localhost + '/user/getMenuListByRole';
      
      var tokens= localStorage.tokens;

      var data={};
      	     
          data.authorization = tokens;

      	  data.roleCode =roleCode;
      
      this.$http.post(url, data, {emulateJSON: true}).then(function(res){
      	   	
      	console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    		
    		var role_menue=res.body.data;
    		$("body").attr("menu_role",JSON.stringify(role_menue));
    		this.$store.state.role_menu=res.body.data;
    		console.log(this.$store.state.role_menu);
    		console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    		
    		this.$router.push('/home/page1_1')
      	 
      	},function(res){
      	   	
      	   	console(res);
      	   	
      	});
      //setInterval(this.$router.push('/home/page1_1'),500);
      
      },
          
    show_role_for_select(roleCode){

    	var tokens= localStorage.tokens;

        localStorage.roleCode=roleCode;
        
      var data={};
      	     
          data.authorization = tokens;

      	  data.roleCode =roleCode;
      	 
      	 var url=localStorage.localhost + '/user/getMenuListByRole';
         
         $.ajax({
         	type:"post",
         	url:url,
         	async:false,
         	data:data,
         	success:function(res){
         		
         	this.$store.state.role_menu=res.data;
         	
         	localStorage.role_menu=res.data;
         	
         	console.log(">>>>>>>>>>>>>>");
         	alert("/user/getMenuListByRole");
    		  console.log(res.data);
    		  console.log(">>>>>>>>>>>>>>");


         	},
         	error:function(res){
         		
         		alert("ajax error")
         		
         	}
         });
    
     },
      getData() {
      	
      	this.url=localStorage.localhost + '/user/getUserRoles';
      	
      	var current_token=localStorage.tokens;
      	
      	var data={};
      	     
        data.authorization=current_token;
      	
      	this.$http.post(this.url, data, {emulateJSON: true}).then(function(res){
      	   	
      	  this.tables=res.body.data;
      	 
      	},function(res){
      	   	
      	   	console(res);
      	   	
      	});
        	

      
    },

    clickFn:function(){

         var url = localStorage.localhost + '/user/login';
        
        this.$http.post(url, {jobNumber: this.user.name, userPwd: this.user.pass}, {emulateJSON: true}).then(function(res){
        	
        	if( res.body.resultCode == localStorage.success_code ){
       		
        		  this.$store.state.login.tokens=res.body.data;
        		  
        		  //将tokens存进去localstorage开始
        		  localStorage.tokens=res.body.data;
        		  //将tokens存进去localstorage结束
        		  
        		  //this.$router.push('/login'); 
        		  this.form_1=false;
      	
      	      this.form_2=true;
      	      
      	      this.getData();
        		  
        	}else{
        		
        		  this.error_tip=res.body.resultMessage;
        		  this.dialogVisible=true;
        	}
        	
        }, function(error){
        	
        	console.log(error);
        	console.log("login error");
        	
        });
        
      },
      delete_name:function(){
      	
      	this.user.name='';
      	
      },
      delete_pass:function(){
      	
      	this.user.pass='';
      	
      },
      origin_localhost:function(){
      	//localStorage.localhost="http://172.18.100.196:7070";
      	//localStorage.localhost="http://172.18.100.196:7072";
      	//localStorage.localhost="http://172.16.21.128:9094";
        //localStorage.localhost="http://172.18.100.127:9095";
      	//localStorage.localhost="http://172.18.100.196:7072";
      	localStorage.localhost="http://172.16.4.250:9094";
      	//localStorage.localhost="http://172.16.20.147:9094";
      	//172.18.100.196:7070
      	//localStorage.localhost="http://172.16.4.107:9094";
      	localStorage.success_code="000000";
      	
      },
      handleClose:function(){
      	
      }
    
    
  }
  }
</script>
