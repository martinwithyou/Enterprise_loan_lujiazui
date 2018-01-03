<style scoped>
  .main-sidebar {
    position: fixed;
    top: 0px;
    left:0px;
    width: 150px;
    background-color:#20A0FF;
    z-index: 8000;
    overflow-y: auto;
    bottom: 0;
    color:#ffffff !important;
  }
  .sidebar-scroll {
    min-height: -moz-calc(100% - 120px);
    min-height: -webkit-calc(100% - 120px);
    min-height: calc(100% - 120px);
  }
  .main-sidebar-l .main-sidebar {
    -webkit-transition: all .28s ease-out;
    transition: all .28s ease-out;
    will-change: transform
  }

  .main-sidebar-l.sidebar-mini .main-sidebar {
    overflow-x: hidden;
  }

  .main-sidebar-l.sidebar-mini .main-sidebar {
    -webkit-transform: translateX(-170px) translateY(0) translateZ(0);
    -ms-transform: translateX(-170px) translateY(0);
    transform: translateX(-170px) translateY(0) translateZ(0)
  }

  .main-sidebar-l .main-sidebar .sidebar-content {
    -webkit-transition: all .28s ease-out;
    transition: all .28s ease-out;
    will-change: transform
  }

  .main-sidebar-l.sidebar-mini .main-sidebar .sidebar-content {
    width: 230px;
  }

  .main-sidebar-l.sidebar-mini .main-sidebar .sidebar-content {
    -webkit-transform: translateX(170px) translateY(0) translateZ(0);
    -ms-transform: translateX(170px) translateY(0);
    transform: translateX(170px) translateY(0) translateZ(0)
  }

  .main-sidebar-l.sidebar-mini .main-sidebar:hover,
  .main-sidebar-l.sidebar-mini .main-sidebar:hover .sidebar-content {
    -webkit-transform: translateX(0) translateY(0) translateZ(0);
    -ms-transform: translateX(0) translateY(0);
    transform: translateX(0) translateY(0) translateZ(0)
  }

  .main-sidebar-l .main-sidebar .sidebar-mini-hide {
    -webkit-transition: opacity .28s ease-out;
    transition: opacity .28s ease-out
  }

  .main-sidebar-l.sidebar-mini .main-sidebar .sidebar-mini-hide {
    opacity: 0;
  }

  .main-sidebar-l.sidebar-mini .main-sidebar .sidebar-mini-hidden {
    display: none
  }

  .main-sidebar-l.sidebar-mini .main-sidebar .nav-main > li.open > ul {
    display: none
  }

  .main-sidebar-l.sidebar-mini .main-sidebar:hover .sidebar-mini-hide {
    opacity: 1
  }

  .main-sidebar-l.sidebar-mini .main-sidebar:hover .nav-main > li.open > ul {
    display: block
  }

  .side-content {
    margin: 0 auto;
    padding: 0px 20px 14px;
    max-width: 100%;
    overflow-x: hidden;
    position: relative;
  }

  .nav-main {
    margin: 0 -20px;
    padding: 0;
    list-style: none;
    padding-top:35px;
  }

  .nav-main a.router-link-active, .nav-main a.router-link-active:hover {
    color: #fff !important;
    background-color: #387AB7;
  }

  .nav-main a {
    display: block;
    padding: 10px 20px;
    color: #666666;
    font-size: 14px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .nav-main .nav-main-heading {
    padding: 10px 20px 10px;
    font-size: 14px;
    font-weight: 300;
    color: #ffffff !important;
    position: relative;
    overflow: hidden;
    opacity: 0.8;
  }

  .nav-main a.nav-submenu {
    position: relative;
    display: block;
    padding: 9px 0 9px 20px;
    width: 210px;
    height: 21px;
    line-height: 21px;
  }

  .sidebar-mini-hide {
    float: left;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 150px;
    font-size:14px !important;
    color:#ffffff !important;
  }

  .sidebar-mini-hide.active_icon {
    width: 110px !important;
  }

  .sidebar-mini-hide.endtime_icon {
    width: 95px !important;
  }

  .nav-main a:hover {
    background-color: rgba(217, 222, 228, 0.5);
    color: #387AB7;
  }

  .nav-main li:not(.nav-main-heading) {
    position: relative;
  }

  .nav-main a > i {
    float: left;
    margin-right: 5px;
    font-size: 18px;
  }

  /* 菜单底部 */
  .nav-feed-back {
    overflow: hidden;
    position: relative;
    height: 120px;
    padding: 16px;
    margin: auto;
    box-sizing: border-box;
  }

  .feed-back {
    position: absolute;
    bottom: 16px;
  }

  .feed-back li {
    font-size: 13px;
    padding: 5px 0;
    color: #333333;
  }

  .feed-back a {
    color: #489cff;
  }
  .sidebar-title:hover{
  	background-color: #1d8ce0;
  	cursor:pointer;
  }
  .main-container {
    position: absolute;
    top: 5px;
    left: 20px;
    right: 0;
    bottom: 0;
    overflow: hidden;
    -webkit-transition: all .28s ease-out;
    transition: all .28s ease-out;
    will-change: transform;
    border:0px solid #d9d9d9 !important;
    overflow-y: auto;
  }
.select{
	background-color:#0066ff;
}
.main-wrapper {
    width: 100%;
    height: 100%;
    padding: 0;
  }
  .main-header {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100px;
    padding: 0;
    background-color: #09C;
    z-index: 8000;
    min-width: 860px;
    background-color:#20A0FF;
  }
  .home-page-center {
    height: 100%;
  }
  .single-page-center {
    padding: 8px;
    box-sizing: border-box;
  }
  .home-section-wrap {
    padding: 8px;
    position: relative;
  }
  .home-section-wrap-bottom {
    min-height: -moz-calc(100% - 130px);
    min-height: -webkit-calc(100% - 130px);
    min-height: calc(100% - 130px);
    margin: 8px;
    background-color: #fff;
  }
  .page-center-wrap-bottom {
    min-height: -moz-calc(100% - 16px);
    min-height: -webkit-calc(100% - 16px);
    min-height: calc(100% - 16px);
    background-color: #fff;
  }
  .page-center-wrap-bottom .home-section-env, .home-section-wrap-bottom .home-section-env, .home-section-wrap-right .home-section-env {
    padding: 8px !important;
  }
  .home-section-wrap-right {
    min-height: -moz-calc(50% - 32px);
    min-height: -webkit-calc(50% - 32px);
    min-height: calc(50% - 32px);
    margin: 8px;
    background-color: #fff;
  }
  .home-section-env {
    background-color: #fff;
    padding: 16px;
    position: relative;
    border-radius: 4px;
  }
  .top-menu-item {
    color: #fff;
    float: right;
    height: 100px;
    margin-right: 35px;
    font-size: 14px !important;
    padding: 0 16px;
  }
  .top-menu-item:hover {
    background-color: rgb(90, 197, 232);
  }
  .logo_area{
  	width:180px;
  	height:100px;
  	float:left;
  	line-height:100px;
  	background-color:#20A0FF;
  }
  .menu_bar{
  	width:1200px;
  	height:100px;
  	float:left;
  	border:0px solid #333333;
  	background-color:#20A0FF;
  }
  .menu_bar_part{
  	width:118px;
  	height:100px;
  	float:left;
  	border:0px solid #008000;
  	color:#ffffff !important;
  	text-align: center;
  	line-height:95px;
  	font-weight:700 !important;
  	font-size:14px !important;
  }
  .new_menu_bar_part{
  	line-height:100px;
  }
  .show_icon{
  	display:block;
  }
  .menu_bar_part:hover{
  	background-color:#1d8ce0;
  	cursor:pointer;
  }
  .sidebar-mini-hide{
  	color:#ffffff !important;
  	font-weight:300;
  }
  .nav-submenu{
  	display: inline-block;
  	width:100%;
  	height:100%;
  }
  .sidebar-mini-hide{
  	font-size:14px !;
  }
  .more_font{
  	font-weight:700 !important;
  }
  .select{
  	background-color: #0066FF;
  }
  .page1_icon{
  	width:34px;
  	height:28px;
  	margin-top:20px;
  	margin-bottom:10px;
  	margin-left:40px;
  	background-image: url(../../assets/header_icon/my_desk.png);
  }
  .page2_icon{
  	width:31px;
  	height:31px;
  	margin-top:20px;
  	margin-bottom:10px;
  	margin-left:40px;
  	background-image: url(../../assets/header_icon/give_task.png);
  }
  .page3_icon{
  	width:30px;
  	height:32px;
  	margin-top:20px;
  	margin-bottom:10px;
  	margin-left:40px;
  	background-image: url(../../assets/header_icon/group_manage.png);
  }
  .page4_icon{
  	width:29px;
  	height:29px;
  	margin-top:20px;
  	margin-bottom:10px;
  	margin-left:40px;
  	background-image: url(../../assets/header_icon/job_manage.png);
  }
  .page5_icon{
  	width:31px;
  	height:31px;
  	margin-top:20px;
  	margin-bottom:10px;
  	margin-left:40px;
  	background-image: url(../../assets/header_icon/task_manage.png);
  }
  .page6_icon{
  	width:31px;
  	height:31px;
  	margin-top:20px;
  	margin-bottom:10px;
  	margin-left:40px;
  	background-image: url(../../assets/header_icon/task_manage.png);
  }
  .page7_icon{
  	width:31px;
  	height:31px;
  	margin-top:20px;
  	margin-bottom:10px;
  	margin-left:40px;
  	background-image: url(../../assets/header_icon/progress.png);
  }
  .page8_icon{
  	width:31px;
  	height:31px;
  	margin-top:20px;
  	margin-bottom:10px;
  	margin-left:40px;
  	background-image: url(../../assets/header_icon/hetong_manage.png);
  }
  .page9_icon{
  	width:31px;
  	height:31px;
  	margin-top:20px;
  	margin-bottom:10px;
  	margin-left:40px;
  	background-image: url(../../assets/header_icon/progress.png);
  }
  .page10_icon{
  	width:31px;
  	height:31px;
  	margin-top:20px;
  	margin-bottom:10px;
  	margin-left:40px;
  	background-image: url(../../assets/header_icon/hetong_manage.png);
  }
  .index_operation_area{
  	width:200px;
  	height:50px;
  	float:right;
  	margin-top:25px;
  	margin-right:20px;
  }
  .index_operation_area_part{
  	width:28px;
  	height:28px;
  	float:right;
  	margin-right:20px;
  	margin-top:10px;
  }
  .operation_index{
  	background-image: url(../../assets/operation/index.png);
  }
  .operation_login{
  	background-image: url(../../assets/operation/login.png);
  }
  .operation_logout{
  	background-image: url(../../assets/operation/logout.png);
  }
.index_operation_area_part:hover{
	cursor:pointer;
	box-shadow: 0px 0px 5px #d9d9d9;
}
.system_logo{
	width:166px;
	height:39px;
	background-image: url(../../assets/system_logo.png);
	margin-top:30px;
	margin-left:10px;
}
@media only screen and (min-width: 1300px) and (max-width: 1600px) {
	.menu_bar{
  	width:1000px;
  	height:100px;
  	float:left;
  	border:0px solid #333333;
  	background-color:#20A0FF;
  }
  .menu_bar_part{
  	width:100px;
  	height:100px;
  	float:left;
  	border:0px solid #008000;
  	color:#ffffff !important;
  	text-align: center;
  	line-height:95px;
  	font-weight:700 !important;
  	font-size:14px !important;
  }
  .page1_icon{
  	width:34px;
  	height:28px;
  	margin-top:20px;
  	margin-bottom:-20px;
  	margin-left:27px;
  	background-image: url(../../assets/header_icon/my_desk.png);
  }
  .page2_icon{
  	width:31px;
  	height:31px;
  	margin-top:20px;
  	margin-bottom:-20px;
  	margin-left:27px;
  	background-image: url(../../assets/header_icon/give_task.png);
  }
  .page3_icon{
  	width:30px;
  	height:32px;
  	margin-top:20px;
  	margin-bottom:-20px;
  	margin-left:25px;
  	background-image: url(../../assets/header_icon/group_manage.png);
  }
  .page4_icon{
  	width:29px;
  	height:29px;
  	margin-top:20px;
  	margin-bottom:-20px;
  	margin-left:27px;
  	background-image: url(../../assets/header_icon/job_manage.png);
  }
  .page5_icon{
  	width:31px;
  	height:31px;
  	margin-top:20px;
  	margin-bottom:-20px;
  	margin-left:27px;
  	background-image: url(../../assets/header_icon/task_manage.png);
  }
  .page6_icon{
  	width:31px;
  	height:31px;
  	margin-top:20px;
  	margin-bottom:-20px;
  	margin-left:27px;
  	background-image: url(../../assets/header_icon/task_manage.png);
  }
  .page7_icon{
  	width:31px;
  	height:31px;
  	margin-top:20px;
  	margin-bottom:-20px;
  	margin-left:27px;
  	background-image: url(../../assets/header_icon/progress.png);
  }
  .page8_icon{
  	width:31px;
  	height:31px;
  	margin-top:20px;
  	margin-bottom:-20px;
  	margin-left:27px;
  	background-image: url(../../assets/header_icon/hetong_manage.png);
  }
  .page9_icon{
  	width:31px;
  	height:31px;
  	margin-top:20px;
  	margin-bottom:-20px;
  	margin-left:27px;
  	background-image: url(../../assets/header_icon/progress.png);
  }
  .page10_icon{
  	width:31px;
  	height:31px;
  	margin-top:20px;
  	margin-bottom:-20px;
  	margin-left:27px;
  	background-image: url(../../assets/header_icon/hetong_manage.png);
  }
  .index_operation_area{
  	width:150px;
  	height:50px;
  	float:right;
  	margin-top:25px;
  	margin-right:20px;
  }
  .index_operation_area_part{
  	width:28px;
  	height:28px;
  	float:right;
  	margin-right:20px;
  	margin-top:10px;
  }
  
}
.page_font_style{
	color:#666666 !important;
}
.el-dropdown-link-better{
	display:inline-block;
	width:100%;
	height:100%;
}
.el-dropdown-item-self{
	/*border:1px solid #333333;*/
}
</style>
<template>
  <div class="main-wrapper main-sidebar-l" :class="{'sidebar-mini':menuIsFold}">
    <header class="main-header">
    	
    	<div class="logo_area">
    		<div class="system_logo"></div>
    	</div>
    	<!--<div class="menu_bar">
          <div class="menu_bar_part new_menu_bar_part" v-for="table in tables"  @click="turn_router(table.sn, table.id)">
           	<span class="more_font" v-text="table.menuName"></span>
          </div>
    	</div>-->
    	<div class="menu_bar">
    		<el-dropdown trigger="click" class="menu_bar_part new_menu_bar_part" v-for="table in tables" >
        <span class="el-dropdown-link el-dropdown-link-better" v-text="table.menuName" @click="turn_router(table.sn, table.id)"></span>
          <el-dropdown-menu slot="dropdown">
          	<div v-for="page in pages" @click="turn_page(page.sn, page.pid,page.id)">
            <el-dropdown-item class="el-dropdown-item-self"  v-text="page.menuName">黄金糕</el-dropdown-item>
            </div>
          </el-dropdown-menu>
        </el-dropdown>
    	</div>
    	
    	
    	
    	
    	
    	
    	
    	
      <div class="index_operation_area">
      	<div class="index_operation_area_part operation_logout" title="退出登录" @click="operation_logout"></div>
      	
      	<router-link to="/login">
      	  <div class="index_operation_area_part operation_login" title="重新登录" @click="operation_login"></div>
      	</router-link>
      	
      	<a href="#/home/page1_1">
      	<div class="index_operation_area_part operation_index" title="跳转到首页"></div>
      	</a>
      	
      </div>
    
      
    </header>
    	
    <!---------------------------------------------------------------->
    <!--<nav class="main-sidebar" style="margin-top:100px;">
    <div class="sidebar-scroll">
      <div class="sidebar-content">
        <div class="side-content">
          <ul class="nav-main">
          	<li  v-for="page in pages"  class="nav-main-heading sidebar-title" @click="turn_page(page.sn, page.pid,page.id)">
                <span class="sidebar-mini-hide" v-text="page.menuName"></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>-->
<!---------------------------------------------------------------->
    <c-main></c-main>
  </div>
</template>
<script>
  import {mapGetters, mapActions} from 'vuex'
  import menuConfig from 'config/menu'
  import CMenu from 'components/CMenu'
  import CMain from 'components/CMain'
  import $ from 'jquery'
  export default {
  	data(){
  		return{
  			second:false,
  			title:"雪橙金服",
  			menus: menuConfig,
  			page1:"我的工作台",
  			page2:'任务分配',
  			page3:'组织机构管理',
  			page4:'客户管理',
  			page5:'业务管理',
  			page6:'工作流管理',
  			page7:'流程任务查询',
  			page8:'合同管理',
  			page9:'系统配置',
  			page10:'报表管理',
  			tables:[],
  			pages:[],
  			father_page:''
  		}
  	},
    computed: mapGetters([
      'menuIsFold',
      'tokens'
    ]),
    components: {
      CMenu,
      CMain
    },
    watch: {
      tokens: function (val) {
        if (val == '') {
          this.$router.push('/');
        }
      }
    },
    mounted(){
  		
  		this.$nextTick(function() { 
  			
  			this.show_role_menu();
  		  
        this.turn_page1();
        
  		})
  	},
    methods:{
      handleSelect:function(){
      	
      },
    	show_role_menu:function(){

    		var role_menu=this.$store.state.role_menu;	
    		
    		var resoult=$("body").attr("menu_role");

    		  resoult=eval('(' + resoult + ')'); 
    		
    		this.tables=resoult;
   
    	},
    	
    	turn_page1:function(){
    		
    		this.url=localStorage.localhost + '/user/getChildMeunByPid';

      	var current_token=localStorage.tokens;
      	
      	var data={};
      	     
        data.authorization=current_token;
      	data.roleCode=localStorage.roleCode;
      	data.pid=1;
      	   
      	this.$http.post(this.url, data, {emulateJSON: true}).then(function(res){
          
          this.$store.state.pageMenu=res.data;
          
          this.pages=res.body.data
          
          this.father_page=res.body.data[0].sn;
          
          console.log(this.father_page);
          
      	},function(res){
      	   	
      	   	console(res);
      	   	
      	});
    		
    	},
    	
    	turn_page:function(sn, pid,id){
    		
//  		alert("111111");
    		
    		this.$router.push('/home/page'+this.father_page+'_'+sn);
    		
    		localStorage.Menu_id=id;
    		
    	},
    	
    	turn_router:function(sn , id){
    		
   		 this.father_page=sn;
//  		
//  		this.$router.push('/home/page'+sn+'_1');
//  		
    		this.url=localStorage.localhost + '/user/getChildMeunByPid';

      	var current_token=localStorage.tokens;
      	
      	var data={};
      	     
        data.authorization=current_token;
        
      	data.roleCode=localStorage.roleCode;
      	
      	data.pid=id;
      	   
      	this.$http.post(this.url, data, {emulateJSON: true}).then(function(res){

        this.$store.state.pageMenu=res.data;
          
        this.pages=res.data.data

      	},function(res){
      	   	
      	   	console(res);
      	   	
      	});
    		
    		
    		
    	},

    	operation_logout:function(){
    		
    		this.$store.state.login.tokens=''
    		
    		console.log(this.$store.state.login.tokens);
    		
    		this.$router.push('/login');
    		 
    	},
    	
    	operation_login:function(){
    		
    		this.$store.state.login.tokens=''
    		
    	},
    	handleClose:function(){
    		
    	}

    	
    }
     
  }
</script>
