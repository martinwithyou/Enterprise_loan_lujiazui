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
<el-form :model="ruleForm"   label-width="150px" class="demo-ruleForm">
	
<el-row class="change_row_size">
   <el-col :span="8">
  	<div class="grid-content bg-purple">
  	    <el-form-item label="进件渠道">
           <select id="select_choice"  placeholder="进件渠道" class="select_style" ></select>
        </el-form-item>
    </div>
   </el-col>
   
    <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="添加开始日期">
            <el-date-picker
            v-model="ruleForm.createStartTime"
            type="date"
            placeholder="添加开始日期">
            </el-date-picker>
        </el-form-item>
  	</div>
  </el-col>
  
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="添加结束日期">
            <el-date-picker
            v-model="ruleForm.createEndTime"
            type="date"
            placeholder="添加结束日期">
            </el-date-picker>
        </el-form-item>
  	</div>
  </el-col>
  
    <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="申请开始日期">
            <el-date-picker
            v-model="ruleForm.applystartDate"
            type="date"
            placeholder="申请开始日期">
            </el-date-picker>
        </el-form-item>
  	</div>
  </el-col>
  
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="申请结束日期">
            <el-date-picker
            v-model="ruleForm.applyendDate"
            type="date"
            placeholder="申请开始日期">
            </el-date-picker>
        </el-form-item>
  	</div>
  </el-col>
  <el-col :span="8">
  	<div class="grid-content bg-purple-light" style="padding-left:150px;">
  		<el-button type="primary" @click="btn_operation(button.btnCode)" v-for="button in buttons">{{button.btnName}}</el-button>
  		<!--<el-button type="primary">查找</el-button>
  		<el-button type="primary">清空</el-button>
  		<el-button type="primary">添加</el-button>
  		<el-button type="warning">修改</el-button>
  		<el-button type="success" @click="addNewDepartment">菜单按钮添加添加</el-button>
  		<el-button type="success" @click="addNewDepartment">菜单按钮添加修改</el-button>-->
  	</div>
  </el-col>
</el-row>
</el-form>
</div>

<!----------------------------->
            <el-table
            height="250"
            border
            stripe
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
            prop="id"
            label="序号"
            width="200">
            </el-table-column>
    
            <el-table-column
            prop="channelName"
            label="渠道方名称 "
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="customerManager"
            label="客户经理 "
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="customerManagerNo"
            label="客户经理工号 "
            width="200">
            </el-table-column>
    
            <el-table-column
            prop="handinTime"
            label="交件时间"
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="applyDate"
            label="申请时间"
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="contractDate"
            label="签约时间"
            width="200">
            </el-table-column>
            <el-table-column
            prop="loanDate"
            label="放款时间 "
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="firmName"
            label="企业名称 "
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="firmNo"
            label="企业唯一识别号 "
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="currProcStatusName"
            label="当前审批状态 "
            width="400">
            </el-table-column>
            
            <el-table-column
            prop="firstTrialName"
            label="初审姓名 "
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="firstTrialNo"
            label="初审工号 "
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="apprAmt"
            label="审批金额"
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="deadLineName"
            label="审批期限"
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="repayRate"
            label="借款费率"
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="agreementNo"
            label="借款编号 "
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="contractNo"
            label="合同编号 "
            width="200">
            </el-table-column>
            </el-table> 
            
            
            <!------------------------------------------------------------>
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

<!----------------------------->
<el-dialog
  title="添加部门"
  :visible.sync="dialogVisible_eighth"
  :modal-append-to-body="false"
  size="tiny"
  :close-on-click-modal="false">
  
<el-form :model="search_form"  ref="ruleForm" label-width="100px" class="demo-ruleForm">
<el-row>
  <el-col :span="24">
  <div class="grid-content bg-purple-dark">
  	<el-form-item label="组织部门名称">
        <el-input v-model="search_form.value1" class="new_input_style"></el-input>
    </el-form-item>
  </div>
  </el-col>
</el-row>
<el-row>
  <el-col :span="24">
  <div class="grid-content bg-purple-dark">
  	<el-form-item label="部门负责人">
        <el-input v-model="search_form.value2" class="new_input_style"></el-input>
    </el-form-item>
  </div>
  </el-col>
</el-row>
<el-row>
  <el-col :span="24">
  <div class="grid-content bg-purple-dark">
  	<el-form-item label="是否生效">
        <el-select v-model="search_form.value3" class="new_input_style" placeholder="请选择是否生效">
           <el-option label="是" value="true"></el-option>
          <el-option label="否" value="false"></el-option>
        </el-select>
    </el-form-item>
  </div>
  </el-col>
</el-row>
<el-row>
  <el-col :span="24">
  <div class="grid-content bg-purple-dark">
  	<el-form-item label="部门列表">
        <el-select v-model="search_form.value4" class="new_input_style" placeholder="请选择部门列表">
           <el-option label="部门A" value="true"></el-option>
           <el-option label="部门B" value="false"></el-option>
           <el-option label="部门C" value="true"></el-option>
           <el-option label="部门D" value="false"></el-option>
        </el-select>
    </el-form-item>
  </div>
  </el-col>
</el-row>
<el-row>
  <el-col :span="24" style="padding-left:100px;">
  <div class="grid-content bg-purple-dark">
  	    <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible_eighth = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible_eighth = false">确 定</el-button>
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
      	
        dialogVisible_eighth:false,
        
        location:"您的位置    >  报表管理   >  申请审核明细表",
        
        ruleForm:{
            createStartTime:'',
            createEndTime:'',
            applystartDate:'',
            applyendDate:''
        },
        search_form:{
        	value1:'',
        	value2:'',
        	value3:'',
        	value4:''
        },
        //表格当前页数据
        tableData: [],

        //多选数组
        multipleSelection: [],

        //请求的URL
        url:'',

        //搜索条件
        criteria: {},

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
        
        buttons:[]

      }
      
    },
  	mounted(){
  		
  		this.$nextTick(function() {  
  		
  			this.loadData();
  			this.origin_select_data();
            this.load_button();
  			
  		})
  	},
    methods: {  
    	    btn_operation: function(btnCode){
//  	    	console.log(btnCode);
    	    	if(btnCode=="query_btn"){
    	    		this.query_btn();
    	    	}else if(btnCode=="export_btn"){
    	    		var url=localStorage.localhost+'/reportManageFacade/applyApproveDetailExport';
    	    		window.location.href=url;
    	    	}
    	    },
    	    query_btn: function(){
    	    	this.search_data();
    	    },
    	    search_data: function(){
    	    	
                	this.url=localStorage.localhost+'/reportManageFacade/getApplyApproveDetail';
                	
                    this.criteria={};
                    
                    this.criteria=this.ruleForm;
                    
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
                   
                    var s_time = new Date(this.criteria.createEndTime);
                    var y = s_time.getFullYear();
                    var m = s_time.getMonth()+1;
                    if(m<10){
                 	   m='0'+m;
                    }
                    var d = s_time.getDate();
                    if(d<10){
                 	   d='0'+d;
                    }
                   this.criteria.createEndTime=y+'-'+m+'-'+d;
                   
                    var s_time = new Date(this.criteria.applystartDate);
                    var y = s_time.getFullYear();
                    var m = s_time.getMonth()+1;
                    if(m<10){
                 	   m='0'+m;
                    }
                    var d = s_time.getDate();
                    if(d<10){
                 	   d='0'+d;
                    }
                   this.criteria.applystartDate=y+'-'+m+'-'+d;
                   
                    var s_time = new Date(this.criteria.applyendDate);
                    var y = s_time.getFullYear();
                    var m = s_time.getMonth()+1;
                    if(m<10){
                 	   m='0'+m;
                    }
                    var d = s_time.getDate();
                    if(d<10){
                 	   d='0'+d;
                    }
                   this.criteria.applyendDate=y+'-'+m+'-'+d;

                    this.criteria.iPiecesChannel=$("#select_choice").val();
                    
                	this.criteria.pageIndex=this.currentPage;
                	
                	this.criteria.pageSize=this.pagesize;

                	this.criteria.authorization=localStorage.tokens;

                    this.$http.post(this.url,this.criteria,{emulateJSON: true}).then(function(res){

                    this.tableData = res.body.data.list;
                        
                    console.log(res.body.data.list);
                        
                    this.totalCount=res.body.data.total;
                        
                    },function(res){
                    	
                    console.log('ajax failed');
                        
                    });                 
    	    },
    	    origin_select_data: function(){
	        
            var selelct_url=localStorage.localhost+'/reportManageFacade/gotoReportManage'
                	
            this.criteria={};
                	
            var current_token=localStorage.tokens;
                	
            this.criteria.authorization=current_token;
            
            this.$http.post(selelct_url,this.criteria,{emulateJSON: true}).then(function(res){
//              console.log(res);
               for(var i=0; i<res.body.data.organList.length;i++){
               	
               	  $("#select_choice").append('<option value="'+res.body.data.organList[i].companyCode+'">'+res.body.data.organList[i].companyName+'</option>');
               }
               
            },function(res){
                    	
              console.log('ajax failed');
              console.log(res);
                        
            });       
            },
    	    load_button:function(){
    	       	
    	       	var button_post_data={};
    	       	
    	       	var current_token=localStorage.tokens;
                	
                    button_post_data.authorization=current_token;
    	       	
    	       	    button_post_data.roleCode=localStorage.roleCode;
    	       	    
    	       	    button_post_data.menuId=localStorage.Menu_id;
    	       	    
    	       	    console.log(localStorage);
    	       	    
    	       	    var url=localStorage.localhost+ '/user/getMeunBtnByRoleAndMenuId';
    	       	    
    	       	    this.$http.post(url,button_post_data,{emulateJSON: true}).then(function(res){
                    	
                    this.buttons=res.data.data;

                    },function(res){
                    	
                    console.log('ajax failed');
                    console.log(res);
                        
                    });    
    	       	  
    	       },
    	        addNewDepartment: function(){
    	        	
    	        	this.dialogVisible_eighth=true;
    	        },
                //从服务器读取数据
                loadData: function(){ 
                	
                	this.url=localStorage.localhost+'/reportManageFacade/getApplyApproveDetail'
               
                	this.criteria.pageIndex=this.currentPage;
                	
                	this.criteria.pageSize=this.pagesize;

                	this.criteria.authorization=localStorage.tokens;

                    this.$http.post(this.url,this.criteria,{emulateJSON: true}).then(function(res){
                    	
                   
                    	
                    this.tableData = res.body.data.list;
                        
                    console.log(res.body.data.list);
                        
                    this.totalCount=res.body.data.total;
                        
                    },function(res){
                    	
                    console.log('ajax failed');
                        
                    });                 
                },
                //多选响应
                handleSelectionChange: function(val) {
                    this.multipleSelection = val;
//                  var last_index=this.multipleSelection.legth-1;
//                  this.highlightId = this.multipleSelection[last_index];
                },

                //点击行响应
                handleclick: function(row, event, column){
                    this.highlightId = row.id;
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
                search: function(){
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

                //改变当前点击的行的class，高亮当前行
                tableRowClassName: function(row, index){
                   if(row.id == this.highlightId)
                   {
                      return 'info-row';
                   }
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
