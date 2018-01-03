<style scoped>  
.vue_location{
  	width:100%;
  	height:30px;
  	border-bottom:1px solid #f2f2f2;
  	padding-left:20px;
  	line-height:30px;
  	color:#666666;
  	background: #f2f2f2;
  	font-size:14px !important;
  	float:left;
}
.part_title{
	width:100%;
	height:50px;
	line-height:50px;
	border:0px solid #3074BD;
	padding-left:20px;
	color:#1d8ec0;
	font-weight:600;
}
.part_title_new{
	width:100%;
	line-height:50px;
	border:0px solid #3074BD;
	padding-left:20px;
	color:#1d8ec0;
	font-weight:600;
}
.new_input_style{
	border-radius: 0px !important;
	width:230px !important;
}
.new_input_style_long{
	border-radius: 0px !important;
	width:330px !important;
}
.part_boardcast{
	width:70%;
	height:1100px;
	float:left;
	border:0px solid #333333;
}
.part_boardcast_right_special{
	width:28%;
	height:710px;
	background-color:#ffffff;
	float:right;
	box-shadow: 0px 0px 3px #d9d9d9;
	margin-right:5px;
}
.part_boardcast_title{
	width:100%;
	height:50px;
	border-bottom:0px solid #3074BD;
	line-height:50px;
	padding-left:20px;
	font-size:14px !important;
	float:left;
	font-weight:700;
}
.part_boardcast_title_tip{
	width:100%;
	height:50px;
	border-bottom:2px solid #f2f2f2;
	line-height:50px;
	padding-left:20px;
	font-size:14px !important;
	float:left;
	font-weight:700;
}
.part_boardcast_title_welcome{
	width:50%;
	height:50px;
	float:left;
	border-bottom:0px solid #3074BD;
	line-height:50px;
	padding-left:20px;
	font-size:14px !important;
}
.part_boardcast_title_welcome_new{
	width:40%;
	height:50px;
	float:left;
	border-bottom:0px solid #3074BD;
	line-height:50px;
	padding-left:20px;
	font-size:14px !important;
}
.part_boardcast_left{
	height:100%;
	width:40%;
	float:left;
	box-shadow:0px 0px 3px #d9d9d9;
}
.part_boardcast_right{
	height:100%;
	width:40%;
	float:right;
}
.part_boardcast_left_a{
	width:65%;
	height:100%;
	float:left;
	background-color: #58B7FF;
	line-height:150px;
	text-align:center;
	color:#ffffff;
	font-size: 16px;
	font-weight: 700;
}
.part_boardcast_left_b{
	width:35%;
	height:100%;
	float:left;
	background-color: #20A0FF;
	line-height:150px;
	text-align:center;
	color:#ffffff;
	font-size: 16px;
	font-weight: 700;
}
.part_boardcast_left_c{
	width:65%;
	height:100%;
	float:left;
	background-color: #1D8CE0;
	line-height:150px;
	text-align:center;
	color:#ffffff;
	font-size: 16px;
	font-weight: 700;
}
.part_boardcast_left_d{
	width:35%;
	height:100%;
	float:left;
	background-color: #0066FF;
	line-height:150px;
	text-align:center;
	color:#ffffff;
	font-size: 16px;
	font-weight: 700;
}
.part_boardcast_middle{
	background: #f2f2f2;
	height:150px;
	width:100%;
	float:left;
	margin-top:20px;
}
.part_boardcast_bottom{
	height:350px;
	width:100%;
	float:left;
	margin-top:20px;
	margin-bottom:20px;
}
.part_boardcast_bottom_half{
	background: #ffffff;
	height:350px;
	width:100%;
	box-shadow: 0px 0px 3px #d9d9d9;
	float:left;
	margin-bottom:20px;
}
.part_boardcast_title_tip_waiting{
	background: #ffffff;
	height:240px;
	width:100%;
	float:left;
	overflow-y: auto;
}
.part_boardcast_title_tip_more{
	width:100px;
	height:35px;
	border:0px solid #d9d9d9;
	float:Left;
	padding-left:20px;
	line-height:35px;
	color:#20A0FF;
	font-size:14px;
	margin-top:10px;
}
.part_boardcast_title_tip_more:hover{
	color:#1D8CE0;
	cursor:pointer;
}
.waiting_task_totole_number{
	width:50px;
	height:50px;
	float:right;
	border:0px solid #333333;
	margin-right:20px;
	line-height:50px;
	text-align: center;
	font-weight:300;
	color:brown;
}
.tips_title{
	width:100px;
	height:100%;
	float:left;
}
.tips_title_action{
	width:100px;
	height:100%;
	float:right;
	color:#999999;
}
.tips_title_action:hover{
	cursor:pointer;
}
.char_area{
	width:93%;
	height:450px;
	float:left;
	margin-top:20px;
	margin-bottom:20px;
	border-top:2px solid #d9d9d9;
	border-bottom:2px solid #d9d9d9;
	padding-left:15px;
	padding-right:15px;
	padding-top:15px;
}
.tip_submit_position{
	margin-top:20px;
	float:right;
	margin-right:20px;
}
.page_location_icon{
	width:14px;
	height:20px;
	background-image: url(../../../assets/page_position.png);
	float:left;
	margin-top:5px;
}
.page_location_content{
	float:left;
	width:500px;
  	height:30px;
  	padding-left:10px;
  	line-height:30px;
  	color:#666666;
  	font-size:14px !important;
}
@media only screen and (min-width: 1300px) and (max-width: 1600px) {
	.char_area{
	width:93%;
	height:250px;
	float:left;
	margin-top:20px;
	margin-bottom:20px;
	border-top:2px solid #d9d9d9;
	border-bottom:2px solid #d9d9d9;
	padding-left:15px;
	padding-right:15px;
	padding-top:15px;
  }
}
</style>  
<template>
	<div> 
		<!-- vue path start--------------------------->
		<div class="vue_location">
			<div class="page_location_icon"></div>
			<div class="page_location_content" v-text="location"></div>
		</div>
		<!---vue path end-------------------------->
        <div class="part_boardcast">
        	
        	<div style="width:100%;height:170px;background-color:#ffffff;box-shadow: 0px 0px 3px #d9d9d9;">
        	    <div class="part_boardcast_title" v-text="boardcast_title_content"></div>
        	    <div class="part_boardcast_title_welcome_new" v-text="boardcast_title_content_welcome"></div>
        	    <div class="part_boardcast_title_welcome_new" v-text="boardcast_title_content_data_time"></div>
        	    <div class="part_boardcast_title_welcome" style="width:100%;">
        		    <el-row>
                        <el-col :span="8">
                    	    <div class="grid-content bg-purple" v-text="current_role"></div>
                        </el-col>
                        <el-col :span="8">
                    	    <div class="grid-content bg-purple-light" v-text="current_name"></div>
                        </el-col>
                        <el-col :span="8">
                    	    <div class="grid-content bg-purple" v-text="current_jobNumber"></div>
                        </el-col>
                    </el-row>
        	    </div>
        	</div>
        	

 <!-------------------------------------------------------------------------------------------->
        <div class="part_boardcast_middle">
        	<div class="part_boardcast_left">
        		<div class="part_boardcast_left_a">
        			{{waiting_task}}
        		</div>
        		<div class="part_boardcast_left_b">
        			{{waiting_task_number}}
        		</div>
        	</div>
        	<div class="part_boardcast_right">
        		<div class="part_boardcast_left_c">
        			{{deleting_task}}
        		</div>
        		<div class="part_boardcast_left_d">
        			{{deleting_task_number}}
        		</div>
        	</div>
        </div>
<!--------------------------------------------------------------------------------------------> 

<!-------------------------------------------------------------------------------------------->
        <div class="part_boardcast_bottom">
        	<div class="part_boardcast_bottom_half">
        		<div class="part_boardcast_title_tip">
        			{{ waiting_task }}
        			<div class="waiting_task_totole_number" v-text="waiting_task_totole_number"></div>
        		</div>
        		<div class="part_boardcast_title_tip_waiting">
                <!------------------------------------------->
                 <el-table
                 height="240"
                  border
                  stripe
                 :data="tableData1"
                 style="width: 100%">
                 
                <el-table-column
                 prop="processDefName"
                 label="流程名称 "
                width="180">
               </el-table-column>
               
               <el-table-column
                 prop="firmName"
                 label="企业名称 "
                width="280">
               </el-table-column>
               
                 <el-table-column
                prop="firmCertNo"
                label="企业证件号码"
                width="180">
               </el-table-column>
               
                 <el-table-column
                 prop="deadlineName"
                 label="期数"
                width="180">
               </el-table-column>
               
                <el-table-column
                 prop="applyAmount"
                 label="申请金额（万元）"
                width="180">
               </el-table-column>
               
                <el-table-column
                 prop="createrName"
                 label="申请人"
                width="180">
               </el-table-column>
               
                <el-table-column
                prop="createTime"
                label="申请时间"
                :formatter="dateFormat"
                width="180">
               </el-table-column>
               
                       
                <el-table-column
                prop="organName"
                label="申请人所在部门"
                width="280">
               </el-table-column>

               </el-table>
                <!-------------------------------------------> 
        		</div>
        		
        		<!--<a href="/home/page1_2">-->
        		    <div class="part_boardcast_title_tip_more"  @click="turn_page2_1" v-text="see_more" ></div>
        		<!--</a>-->
        	</div>
        	<div class="part_boardcast_bottom_half">
        		<div class="part_boardcast_title_tip">
        			{{ deleting_task }}
        		    <div class="waiting_task_totole_number" v-text="waiting_task_totole_number_deal"></div>
        		</div>
        		<div class="part_boardcast_title_tip_waiting">
        	    <!------------------------------------------------------>
                 <el-table
                  height="240"
                  border
                  stripe
                 :data="tableData2"
                 style="width: 100%">
                 
                <el-table-column
                 prop="processDefName"
                 label="流程名称 "
                width="180">
               </el-table-column>
               
               <el-table-column
                 prop="firmName"
                 label="企业名称 "
                width="280">
               </el-table-column>
               
                 <el-table-column
                prop="firmCertNo"
                label="企业证件号码"
                width="180">
               </el-table-column>
               
                 <el-table-column
                 prop="deadlineName"
                 label="期数"
                width="180">
               </el-table-column>
               
                <el-table-column
                 prop="applyAmount"
                 label="申请金额（万元）"
                width="180">
               </el-table-column>
               
                <el-table-column
                 prop="createrName"
                 label="申请人"
                width="180">
               </el-table-column>
               
                <el-table-column
                prop="createTime"
                label="申请时间"
                :formatter="dateFormat"
                width="180">
               </el-table-column>
               
                       
                <el-table-column
                prop="organName"
                label="申请人所在部门"
                width="280">
               </el-table-column>

               </el-table>
        	    <!------------------------------------------------------->
        		</div>
        		<div class="part_boardcast_title_tip_more" @click="turn_page6_1"  v-text="see_more"></div>
        	</div>
        </div>
<!-------------------------------------------------------------------------------------------->
        	
        </div>

        <div class="part_boardcast_right_special">
        	<div class="part_boardcast_title_tip">
        		<div class="tips_title">{{tip}}</div>
        		<div class="tips_title_action" @click="add_edit_form">{{edit}}</div>
        	</div>
        	<div class="tip_body">
        		
        		<div class="char_area" v-text="content_submit_for_tips"></div>
        		
        		<el-input type="textarea" v-model="content" placeholder="温馨提示：请填写您的便签..."></el-input>
        		<el-button type="primary" class="tip_submit_position" @click="add_edit_form">提交</el-button>
        		<!--<el-button type="primary" class="tip_submit_position" @click="download">download</el-button>-->
        		
        	</div>
        </div>
        <!------------------------------------------------------------>
  </div>
</template>


<script>
  export default {
    data() {
    	
      return {
      	tableData1:[],
      	
      	tableData2:[],
      	
      	waiting_task_number:'0',
      	
      	deleting_task_number:'0',
      	
      	url:'',
      	
      	edit:"编辑",
    
        location:"您的位置    >  我的工作台   >  待办事项",
        
        boardcast_title_content:"通知",
        
        boardcast_title_content_welcome:'您好，欢迎使用雪橙金服企业进件管理系统',
     
        boardcast_title_content_data_time:'今天是2017年10月05日， 星期四',
        
        current_role:"当前角色：审批员",
        
        current_name:"姓名：方伟",
        
        current_jobNumber:"工号：1234568",
        
        waiting_task:"待签收任务",
        
        deleting_task:"待处理任务",
        
        tip:"便签",
        
        see_more:"更多...",
        
        waiting_task_totole_number:"+45",
        
        waiting_task_totole_number_deal:"",
       
        content:'',
        
        content_submit_for_tips:'',
        
        collect_contenter:'',
        
        criteria:{}
        
      }
      
    },
  	mounted(){
  		
  		this.$nextTick(function() {  
  		
  			this.loadData_without_data();
  			
  			this.show_datatime();
  		})
  	},
    methods: {
    	show_datatime: function(){
    		
    		var time=new Date();
    		
    		var y = time.getFullYear();
            var m = time.getMonth()+1;
            var d = time.getDate();
            var h = time.getHours();
            var mm = time.getMinutes();
            var s = time.getSeconds();
            
            this.boardcast_title_content_data_time="当前时间："+y+'-'+m+'-'+d+' '+h+':'+mm+':'+s;
    		 
    	},
    	turn_page2_1: function(){
    		this.$router.push('/home/page1_2');
    	},
    	turn_page6_1: function(){
    		this.$router.push('/home/page6_1');
    	},
       //从服务器读取数据
        loadData_without_data: function(){ 
        	
	        
            this.url=localStorage.localhost+'/index/'
                	
            this.criteria={};
                	
            var current_token=localStorage.tokens;
                	
            this.criteria.authorization=current_token;
                	
            console.log(this.criteria);

            this.$http.post(this.url,this.criteria,{emulateJSON: true}).then(function(res){
                    	
             this.waiting_task_number=res.body.toCliamTaskCount;
             this.waiting_task_totole_number=res.body.toCliamTaskCount;
             
             this.deleting_task_number=res.body.toCompleteTaskCount;
             this.waiting_task_totole_number_deal=res.body.toCompleteTaskCount;
             
             this.current_role="当前角色："+res.body.userInfo.currRole;
             
             this.current_name="姓名："+res.body.userInfo.nickName; 
             
             this.current_jobNumber="工号："+res.body.userInfo.jobNumber; 
                 	
               //userInfo 
             this.tableData1=res.body.toCliamTaskList;
             
             this.tableData2=res.body.toCompleteTaskList;
            },function(res){
                    	
              console.log('ajax failed');
              console.log(res);
                        
            });       
            
            },
            //时间格式化  
            dateFormat:function(row, column) { 
            var return_val
//          console.log(row.createTime);
            if(row.createTime == ''){
            	return_val=''
            }else{
             var time = new Date(row.createTime);
             var y = time.getFullYear();
             var m = time.getMonth()+1;
             var d = time.getDate();
             var h = time.getHours();
             var mm = time.getMinutes();
             var s = time.getSeconds();
             return_val=y+'-'+m+'-'+d+' '+h+':'+mm+':'+s;
             
            }
             return return_val;
            }, 

    add_edit_form: function(){
    	
    	this.collect_contenter=this.content+this.collect_contenter;
    	
    	this.content_submit_for_tips=this.collect_contenter;
    	
    	this.content='';
    	
    	console.log(this.$store.state.login.tokens);
    	
    	this.$store.state.login.notebook=this.content_submit_for_tips
    	
    	console.log(this.$store.state.login);
    },
    
    origin_data: function(){
    	
    	this.content_submit_for_tips=this.$store.state.login.notebook;
    	
    },
    
    download:function(){
    	
    	var current_token=localStorage.tokens;
                	
        var the_url="http://172.16.4.96:9094/fastdfsFacade/download";
        this.criteria.groupName="group2";
        this.criteria.remoteFileName="M00/00/09/rBJkPlnteXeAS5gtAAO-qax9wOI933.PNG";
        this.criteria.authorization=current_token;
                
    	this.$http.post(the_url,this.criteria,{emulateJSON: true}).then(function(res){
    	      	
    	console.log(res);
    	alert("success");
    	      	
    	},function(error){
    	      	
    	   alert("error");
    	      	
    	});
    	    
    }
      

    }
  }
</script>