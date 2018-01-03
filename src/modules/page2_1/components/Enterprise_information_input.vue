<style scoped>
.is-foucus{
	border:5px solid #0000FF !important;
}  
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
.form_area{
	width:100%;
	height:170px;
	padding-top:20px;
	background-color: #ffffff;
	margin-bottom:20px;
	float:left;
}
.new_input_style{
	border-radius: 0px !important;
	width:190px !important;
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
	.change_row_size{
		width:95%;
	}
}
.select_style{
	width:190px;
	height:36px;
	border:1px solid #bfcbd9;
	color:#999999;
}
</style>  
<template>
	<div>
<!----------------------------->
		<div class="vue_location">
			<div class="page_location_icon"></div>
			<div class="page_location_content" v-text="location"></div>
		</div>
<!----------------------------->

<div class="form_area">
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm">
	
<el-row class="change_row_size">
  <el-col :span="6">
  	<div class="grid-content bg-purple">
  	    <el-form-item label="流程名称">
           <select id="select_choice_process" placeholder="流程名称" class="select_style" ></select>
        </el-form-item>
    </div>
  </el-col>
  <el-col :span="6">
  	<div class="grid-content bg-purple-light">
  		<el-form-item label="企业名称">
            <el-input v-model="ruleForm.value2"  placeholder="企业名称" class="new_input_style"></el-input>
        </el-form-item>
  	</div>
  </el-col>
  <el-col :span="6">
  	<div class="grid-content bg-purple">
  		<el-form-item label="阶段名称">
            <select id="select_choice" placeholder="阶段名称" class="select_style" ></select>
        </el-form-item>
  	</div>
  </el-col>
  <el-col :span="6">
  	<div class="grid-content bg-purple">
  	    <el-form-item label="申请人">
            <el-input v-model="ruleForm.value4" placeholder="申请人" class="new_input_style"></el-input>
        </el-form-item>
    </div>
  </el-col>
</el-row>


<el-row>
	
   <!--<el-col :span="6">
  	<div class="grid-content bg-purple">
  		<el-form-item label="当前处理人">
            <el-input v-model="ruleForm.value5" placeholder="当前处理人" class="new_input_style"></el-input>
        </el-form-item>
  	</div>
  </el-col>-->
  
  <el-col :span="6">
  	<div class="grid-content bg-purple">
  		<el-form-item label="签收开始日期">
            <el-date-picker
            v-model="ruleForm.value6"
            type="date"
            placeholder="签收开始日期">
            </el-date-picker>
        </el-form-item>
  	</div>
  </el-col>
  
  <el-col :span="6">
  	<div class="grid-content bg-purple">
  		<el-form-item label="签收结束日期">
            <el-date-picker
            v-model="ruleForm.value7"
            type="date"
            placeholder="签收结束日期">
            </el-date-picker>
        </el-form-item>
  	</div>
  </el-col>
  <el-col :span="8">
  	<div class="grid-content bg-purple-light" style="padding-left:150px;">
  		<!--<el-button type="primary" @click="give_out_task" >任务分配</el-button>-->
  		<el-button type="primary" @click="btn_operation(button.btnCode)" v-for="button in buttons">{{button.btnName}}</el-button>
  	</div>
  </el-col>
</el-row>


</el-form>
</div>
		
<!-----------------table开始--------------------------------------------------------->
            <el-table
            height="280"
            border
            ref="testTable"       
            :data="tableData"
            :default-sort = "{prop: 'id', order: 'ascending'}"
            @selection-change="handleSelectionChange"   
            @row-click="handleclick"
            :row-class-name = "tableRowClassName"
            style="width: 100%">
    
           <el-table-column
            type="selection">
           </el-table-column>
            
            <el-table-column
            prop="agreementNo"
            label="协议编号"
            width="250">
            </el-table-column>
    
            <el-table-column
            prop="processDefName"
            label="流程名称"
            width="200">
            </el-table-column>
    
            <el-table-column
            prop="firmName"
            label="企业名称"
            width="300">
            </el-table-column>
            
            <el-table-column
            prop="firmCertNo"
            label="企业证件号码"
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="firmName"
            label="产品名称"
            width="300">
            </el-table-column>
            
            <el-table-column
            prop="applyAmount"
            label="申请金额（万元）"
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="deadlineName"
            label="借款期限"
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="createrName"
            label="申请人"
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="organName"
            label="申请所在部门"
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="currProcStatusName"
            label="阶段名称"
            width="300">
            </el-table-column>
    
            </el-table> 
            
            <div align="right">
              <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage"
                  :page-sizes="[10, 20, 30, 40]"
                  :page-size="pagesize"
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="totalCount">
              </el-pagination>
            </div>
<!------------table end-------------------------------------------------------------->

<!----------------------------->
<el-dialog
  title="任务分配"
  :visible.sync="dialogVisible_seventh"
  :modal-append-to-body="false"
  size="large"
  :close-on-click-modal="false">
  
<el-form :model="search_form" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
<el-row>
  <el-col :span="24">
  <div class="grid-content bg-purple-dark">
  	<el-form-item label="用户部门">
        <select id="group" class="select_style" @change="select_depart">
        	<option>请选择</option>
        </select>
    </el-form-item>
  </div>
  </el-col>
</el-row>
<el-row>
  <el-col :span="24">
  <div class="grid-content bg-purple-dark">
  	<el-form-item label="所属组别">
        <select id="depart" class="select_style" @change="get_employees">
        	<option>请选择</option>
        </select>
    </el-form-item>
  </div>
  </el-col>
</el-row>
<el-row>
  <el-col :span="24">
  <div class="grid-content bg-purple-dark">
  	<el-form-item label="员工姓名工号">
  	<select id="employee" class="select_style"></select>
  	</el-form-item>
  </div>
  </el-col>
</el-row>
<el-row>
  <el-col :span="6" style="padding-left:100px;">
  <div class="grid-content bg-purple-dark">
  	    <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible_seventh = false">取 消</el-button>
            <el-button type="primary" @click="submit_employees_info">确 定</el-button>
        </span>
  </div>
  </el-col>
</el-row>

  
</el-form>
</el-dialog>
<!----------------------------->

  </div>
</template>


<script>
  import $ from 'jquery'
  export default {
    data() {
    	
      return {
      	radio:'',
      	buttons:[],
      	
        task:"任务分配",
        
        search_new:"搜索",
        
        location:"您的位置    >  任务分配    >  待签收任务分配",
        
        dialogVisible_seventh:false,
        
         ruleForm: {
          value1:'',
          value2:'',
          value3:'',
          value4:'',
          value5:'',
          value6:'',
          value7:''
        },
        
        search_form:{
        	value1:'',
        	value2:'',
        	value3:'',
        	value4:''
        },
        
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        },
        
        
        //表格当前页数据
        tableData: [],

        //多选数组
        multipleSelection: [],

        //请求的URL
        url:'',

        //搜索条件
        criteria: '',

        //下拉菜单选项
        select: '',

        //默认每页数据量
        pagesize: 10,

        //默认高亮行数据id
        highlightId: -1,

        //当前页码
        currentPage: 1,

        //查询的页码
        start: 1,

        //默认数据总数
        totalCount: 1000,
        
      }
      
    },
  	mounted(){
  		
  		this.$nextTick(function() {  
  		
  			this.loadData();
  			this.load_button();
  			this.origin_select_data();
  		})
  	
  	},
    methods: {
//  	    handleSelectionChange(val) {
//              this.multipleSelection = val;
//          },
    	    submit_employees_info:function(){
    	    	console.log(this.multipleSelection);
    	    var processInstanceIds=[];
    	       this.criteria={};
    	    for(var i=0;i<this.multipleSelection.length;i++){ 
    	    	                                              //processInstanceId
    	    	//processInstanceIds.push(this.multipleSelection[i].processInstanceId);
    	        // this.criteria['toDoTaskParamList[' + i +'].loanId'] = this.multipleSelection[i].loanId;
    	          this.criteria['processInstanceIds['+ i +']']=this.multipleSelection[i].processInstanceId;
    	    }
    	 
    	    this.criteria.toUserJobNum=$("#employee").val();
    	    
    	    var current_token=localStorage.tokens;
                	
            this.criteria.authorization=current_token;
            var selelct_url=localStorage.localhost+'/wf/allotTaskToOthers'
            this.$http.post(selelct_url,this.criteria,{emulateJSON: true}).then(function(res){
                
              this.dialogVisible_seventh=false;
               
            },function(res){
                    	
              console.log('ajax failed');
              console.log(res);
                        
            });
    	    },
    	    get_employees:function(){
    	    	
    	    var selelct_url=localStorage.localhost+'/wf/getActivityGroupUserList'
                	
            this.criteria={};
                	
            this.criteria.groupId=$("#depart").val();
            
            var current_token=localStorage.tokens;
                	
            this.criteria.authorization=current_token;

            this.$http.post(selelct_url,this.criteria,{emulateJSON: true}).then(function(res){
                
               for(var i=0; i<res.body.data.activityUserList.length;i++){
               	
               	  $("#employee").append('<option value="'+res.body.data.activityUserList[i].jobNumber+'">'+res.body.data.activityUserList[i].nickName+res.body.data.activityUserList[i].jobNumber+'</option>');
               }
               
            },function(res){
                    	
              console.log('ajax failed');
              console.log(res);
                        
            });
    	    },
    	    select_depart:function(){
    	    	
    	    var selelct_url=localStorage.localhost+'/wf/getActivityGroupList'
                	
            this.criteria={};
                	
            this.criteria.organId=$("#group").val();
            
            var current_token=localStorage.tokens;
                	
            this.criteria.authorization=current_token;

            this.$http.post(selelct_url,this.criteria,{emulateJSON: true}).then(function(res){
                
               for(var i=0; i<res.body.data.activityGroupVoList.length;i++){
               	
               	  $("#depart").append('<option value="'+res.body.data.activityGroupVoList[i].groupId+'">'+res.body.data.activityGroupVoList[i].groupName+'</option>');
               }
               
            },function(res){
                    	
              console.log('ajax failed');
              console.log(res);
                        
            });
    	    },
    	    give_out_task:function(){
    	    this.dialogVisible_seventh=true;
    	    	//group
    	     var selelct_url=localStorage.localhost+'/wf/getActivityOrganList'
                	
            this.criteria={};
                	
            var current_token=localStorage.tokens;
                	
            this.criteria.authorization=current_token;

            this.$http.post(selelct_url,this.criteria,{emulateJSON: true}).then(function(res){
                
               for(var i=0; i<res.body.data.activityOrganVoList.length;i++){
               	
               	  $("#group").append('<option value="'+res.body.data.activityOrganVoList[i].organId+'">'+res.body.data.activityOrganVoList[i].organName+'</option>');
               }
               
            },function(res){
                    	
              console.log('ajax failed');
              console.log(res);
                        
            });
            
    	    },
    	    origin_select_data: function(){
	        
            var selelct_url=localStorage.localhost+'/wf/gotoAllotUnCliamTask'
                	
            this.criteria={};
                	
            var current_token=localStorage.tokens;
                	
            this.criteria.authorization=current_token;

            this.$http.post(selelct_url,this.criteria,{emulateJSON: true}).then(function(res){
                    	
              console.log(res.body.data.itemStatusList);
               //processDefNameList

               //this.selections=res.body.data.itemStatusList;
               //select_choice_process
               //procStatusList
                for(var i=0; i<res.body.data.processDefNameList.length;i++){
               	
               	  $("#select_choice_process").append('<option value="'+res.body.data.processDefNameList[i]+'">'+res.body.data.processDefNameList[i]+'</option>');
               }
                
               for(var i=0; i<res.body.data.procStatusList.length;i++){
               	
               	  $("#select_choice").append('<option value="'+res.body.data.procStatusList[i].dictDataCode+'">'+res.body.data.procStatusList[i].dictDataName+'</option>');
               }
               
            },function(res){
                    	
              console.log('ajax failed');
              console.log(res);
                        
            });       
            },
    	    btn_operation:function(btnCode){
    	    	console.log(btnCode);
    	    	if(btnCode == "query_btn"){
    	    		this.search_data();
    	    	}else{
    	    		this.give_out_task();
    	    	}
    	    },
    	    search_data:function(){
    	   

    	    this.url=localStorage.localhost+'/wf/queryAllotTaskList'
                	
            this.criteria={};
             
            this.criteria.processDefName=$("#select_choice_process").val();
            
            this.criteria.firmName=this.ruleForm.value2;
            
            this.criteria.currProcStatusCode=$("#select_choice").val();
            
            this.criteria.createrName=this.ruleForm.value4;
            //unCliamOrCliamed
            this.criteria.unCliamOrCliamed='0';
            //this.criteria.updaterName=this.ruleForm.value5;
            
            this.criteria.createStartTime=this.ruleForm.value6;
            var s_time = new Date(this.criteria.createStartTime);
             var y = s_time.getFullYear();
             var m = s_time.getMonth()+1;
                 if(m<10){
                 	m='0'+m;
                 }
             var d = s_time.getDate();
                 if(d<10){
                 	d='0'+d;
                 }
             this.criteria.createStartTime=y+'-'+m+'-'+d;
             
             this.criteria.createEndTime=this.ruleForm.value7;
             var e_time = new Date(this.criteria.createEndTime);
             var y = e_time.getFullYear();
             var m = e_time.getMonth()+1;
                 if(m<10){
                 	m='0'+m;
                 }
             var d = e_time.getDate();
                 if(d<10){
                 	d='0'+d;
                 }
             this.criteria.createEndTime=y+'-'+m+'-'+d;
            
            
            this.criteria.pageIndex=this.currentPage;
                	
            this.criteria.pageSize=this.pagesize;
                	
            var current_token=localStorage.tokens;
                	
            this.criteria.authorization=current_token;

            this.$http.post(this.url,this.criteria,{emulateJSON: true}).then(function(res){
                  
              console.log(res);
              this.tableData=res.body.data.allotActivityTaskList;
              this.totalCount=res.body.data.total;
                        
            },function(res){
                    	
              console.log('ajax failed');
              console.log(res);
                        
            });       
    	    },
            giveOutTask: function(){
                this.dialogVisible_seventh=true;
            },
            //从服务器读取数据
            loadData: function(){ 

            this.url=localStorage.localhost+'/wf/queryAllotTaskList'
                	
            this.criteria={};
            this.criteria.unCliamOrCliamed='0';   	
            this.criteria.pageIndex=this.currentPage;
                	
            this.criteria.pageSize=this.pagesize;
                	
            var current_token=localStorage.tokens;
                	
            this.criteria.authorization=current_token;

            this.$http.post(this.url,this.criteria,{emulateJSON: true}).then(function(res){
//            console.log(res);
              this.tableData=res.body.data.allotActivityTaskList;
              this.totalCount=res.body.data.total;
                        
            },function(res){
                    	
              console.log('ajax failed');
              console.log(res);
                        
            });       
            
            }, 
                //加载按钮
                load_button:function(){
    	       	
    	       	var button_post_data={};
    	       	
    	       	var current_token=localStorage.tokens;
                	
                  button_post_data.authorization=current_token;
    	       	
    	       	    button_post_data.roleCode=localStorage.roleCode;
    	       	    
    	       	    button_post_data.menuId=localStorage.Menu_id;
    	       	    
    	       	    console.log(localStorage);
    	       	    
    	       	    var url=localStorage.localhost + '/user/getMeunBtnByRoleAndMenuId';
    	       	    
    	       	    this.$http.post(url,button_post_data,{emulateJSON: true}).then(function(res){
                    	
                    this.buttons=res.data.data;

                    },function(res){
                    	
                    console.log('ajax failed');
                    console.log(res);
                        
                    });    
    	       	  
    	       },
              

                //多选响应
                handleSelectionChange: function(val) {
                    this.multipleSelection = val;
                },

                //点击行响应
                handleclick: function(row, event, column, val){

                    this.loadData();
                    
                    this.highlightId = row;
                      
                    console.log(this.highlightId.firmName);
               
                },
                rowClass: function (row, index,column) {
                    return { "background-color": "red" }
                },
                //改变当前点击的行的class，高亮当前行
                tableRowClassName: function(row, index){
                   if(row == this.highlightId)
                   {
                      return 'info-row';
                   }
                },
                //编辑
                handleEdit: function(index, row) {
                    this.$prompt('请输入新名称', '提示', {
                          confirmButtonText: '确定',
                          cancelButtonText: '取消',
                        }).then(({ value }) => {
                            if(value==''||value==null)
                                return;
                            this.$http.post('newstu/update',{"id":row.id,"name":value},{emulateJSON: true}).then(function(res){
                                this.loadData(this.criteria, this.currentPage, this.pagesize);                              
                            },function(){
                                console.log('failed');
                            });
                        }).catch(() => {

                    });
                },


                //单行删除
                handleDelete: function(index, row) {
                    var array = [];
                    array.push(row.id);
                    this.$http.post('newstu/delete',{"array":array},{emulateJSON: true}).then(function(res){
                        this.loadData(this.criteria, this.currentPage, this.pagesize);
                    },function(){
                        console.log('failed');
                    });
                },

                //搜索
                search_criteria: function(){
                    this.loadData(this.criteria, this.currentPage, this.pagesize);
                },

                //添加
                add: function(){
                        this.$prompt('请输入名称', '提示', {
                          confirmButtonText: '确定',
                          cancelButtonText: '取消',
                        }).then(({ value }) => {
                            if(value==''||value==null)
                                return;
                            this.$http.post(this.url,{"name":value},{emulateJSON: true}).then(function(res){
                                this.loadData(this.criteria, this.currentPage, this.pagesize);
                            },function(){
                                console.log('failed');
                            });
                        }).catch(() => {

                    });

                },

                //多项删除
                deletenames: function(){
                    if(this.multipleSelection.length==0)
                        return;
                    var array = [];
                    this.multipleSelection.forEach((item) => {
                        array.push(item.id);
                    })
                    this.$http.post('newstu/delete',{"array":array},{emulateJSON: true}).then(function(res){
                        this.loadData(this.criteria, this.currentPage, this.pagesize);
                    },function(){
                        console.log('failed');
                    });
                },
                //每页显示数据量变更
                handleSizeChange: function(val) {
                    this.pagesize = val;
                    this.loadData(this.criteria, this.currentPage, this.pagesize);
                },

                //页码变更
                handleCurrentChange: function(val) {
                    this.currentPage = val;
                    this.loadData(this.criteria, this.currentPage, this.pagesize);
                }
    }
  }
</script>
