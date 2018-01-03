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
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm">
	
<el-row class="change_row_size">
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  	    <el-form-item label="企业名称">
            <el-input v-model="ruleForm.firmName" placeholder="企业名称" class="new_input_style"></el-input>
        </el-form-item>
    </div>
  </el-col>
  <el-col :span="8">
  	<div class="grid-content bg-purple-light">
  		<el-form-item label="企业证件号">
            <el-input v-model="ruleForm.firmNo" placeholder="企业名称" class="new_input_style"></el-input>
        </el-form-item>
  	</div>
  </el-col>
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="订单状态">
            <select id="select_choice"  placeholder="订单状态" class="select_style" ></select>
        </el-form-item>
  	</div>
  </el-col>
</el-row>

<el-row class="change_row_size">
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  	    <el-form-item label="申请人">
            <el-input v-model="ruleForm.createrName" placeholder="申请人" class="new_input_style"></el-input>
        </el-form-item>
    </div>
  </el-col>  
   <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="当前处理人">
            <el-input v-model="ruleForm.updaterName" placeholder="当前处理人" class="new_input_style"></el-input>
        </el-form-item>
  	</div>
  </el-col>
    <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="阶段名称">
            <select id="select_choice_process"  placeholder="阶段名称" class="select_style" ></select>
        </el-form-item>
  	</div>
  </el-col>
</el-row>

<el-row class="change_row_size">
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="申请开始日期">
            <el-date-picker
            v-model="ruleForm.applyStartDate"
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
            v-model="ruleForm.applyEndDate"
            type="date"
            placeholder="申请结束日期">
            </el-date-picker>
        </el-form-item>
  	</div>
  </el-col>
  <el-col :span="8">
  	<div class="grid-content bg-purple" style="text-align:left;padding-left:50px;">
 
        <el-button type="primary" @click="btn_operation(button.btnCode)" v-for="button in buttons">{{button.btnName}}</el-button>
  	  
  	</div>
  </el-col>
</el-row>


</el-form>
</div>
		
<!-----------------table开始--------------------------------------------------------->
            <el-table
            height="250"
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
            prop="applyNo"
            label="申请编号"
            width="300">
            </el-table-column>
            
            <el-table-column
            prop="processDefName"
            label="流程名称"
            width="300">
            </el-table-column>
            
            <el-table-column
            prop="firmName"
            label="企业名称"
            width="300">
            </el-table-column>
            
            <el-table-column
            prop="finaceProductName"
            label="产品名称"
            width="200">
            </el-table-column>
            
             <el-table-column
            prop="deadlineName"
            label="申请期数"
            width="200">
            </el-table-column>
            <el-table-column
            prop="applyAmount"
            label="申请金额"
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="currProcStatusName"
            label="阶段名称"
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="updaterName"
            label="当前处理人"
            width="300">
            </el-table-column>
            
            <el-table-column
            prop="currOrganName"
            label="当前处理人所在部门"
            width="200">
            </el-table-column>
            <el-table-column
            prop="createrName"
            label="申请人"
            width="300">
            </el-table-column>
            <el-table-column
            prop="applyOrganName"
            label="申请人所在部门"
            width="200">
            </el-table-column>
            <el-table-column
            prop="applyDate"
            label="申请时间"
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="itemStatusName"
            label="订单状态"
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
<!--<el-dialog
  title="任务分配"
  :visible.sync="dialogVisible_seventh"
  :modal-append-to-body="false"
  size="large">
  
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
      	dialogVisible_seventh:false,
      	buttons:[],
      	
        task:"任务转移",
        search_new:"搜索",
        location:"您的位置    >  流程任务查询    >  未归档任务查询",
        search_form:{
        	value1:'',
        	value2:'',
        	value3:'',
        	value4:''
        },
        ruleForm: {
          firmName:'',
          firmCertNo:'',
          itemStatusCode:'',
          createrName:'',
          updaterName:'',
          currProcStatusCode:'',
          applyStartDate:'',
          applyEndDate:''
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
  			this.origin_select_data_po();
  		})
  	
  	},
    methods: {
            origin_select_data_po: function(){
	        
            var selelct_url=localStorage.localhost+'/dictDataCommFacade/getSysDictDataList'
                	
            this.criteria={};
                	
            var current_token=localStorage.tokens;
                	
            this.criteria.authorization=current_token;
            
            this.criteria.dictTypeCode='PROC_STATUS'

            this.$http.post(selelct_url,this.criteria,{emulateJSON: true}).then(function(res){
             console.log(res);
                $("#select_choice_process").append('<option></option>');
                for(var i=0; i<res.body.data.list.length;i++){
               	  
               	  $("#select_choice_process").append('<option value="'+res.body.data.list[i].dictDataCode+'">'+res.body.data.list[i].dictDataName+'</option>');
               }
                
            
            },function(res){
                    	
              console.log('ajax failed');
              console.log(res);
                        
            });       
            },
    	    origin_select_data: function(){
	        
            var selelct_url=localStorage.localhost+'/dictDataCommFacade/getSysDictDataList'
                	
            this.criteria={};
                	
            var current_token=localStorage.tokens;
                	
            this.criteria.authorization=current_token;
            
            this.criteria.dictTypeCode='ITEM_STATUS';
            
            this.$http.post(selelct_url,this.criteria,{emulateJSON: true}).then(function(res){
               $("#select_choice").append('<option></option>');
               for(var i=0; i<res.body.data.list.length;i++){
               	 
               	  $("#select_choice").append('<option value="'+res.body.data.list[i].dictDataCode+'">'+res.body.data.list[i].dictDataName+'</option>');
               }
               
            },function(res){
                    	
              console.log('ajax failed');
              console.log(res);
                        
            });       
            },
    	    delive_task:function(){
    	    	alert("deliver");
    	    },
    	    btn_operation: function(btnCode){
    	    	console.log(btnCode);
    	    	if( btnCode == "query_btn"){
    	    		this.search_data();
    	    	}
    	    },
    	    search_data:function(){
    	   
    	    this.url=localStorage.localhost+'/ArchiveTaskFacade/getUnArchiveTaskList'
                	
            this.criteria={};
             
            this.criteria.firmName=this.ruleForm.firmName;
            this.criteria.firmCertNo=this.ruleForm.firmCertNo;
            this.criteria.itemStatusCode=$("#select_choice").val();
            
            this.criteria.createrName=this.ruleForm.createrName;
            this.criteria.updaterName=this.ruleForm.updaterName;
            this.criteria.currProcStatusCode=$("#select_choice_process").val();
            
            this.criteria.applyStartDate=this.ruleForm.applyStartDate;
            var s_time = new Date(this.criteria.applyStartDate);
             var y = s_time.getFullYear();
             var m = s_time.getMonth()+1;
                 if(m<10){
                 	m='0'+m;
                 }
             var d = s_time.getDate();
                 if(d<10){
                 	d='0'+d;
                 }
            this.criteria.applyStartDate=y+'-'+m+'-'+d;
             
            this.criteria.applyEndDate=this.ruleForm.applyEndDate;
             var e_time = new Date(this.criteria.applyEndDate);
             var y = e_time.getFullYear();
             var m = e_time.getMonth()+1;
                 if(m<10){
                 	m='0'+m;
                 }
             var d = e_time.getDate();
                 if(d<10){
                 	d='0'+d;
                 }
            this.criteria.applyEndDate=y+'-'+m+'-'+d;

            this.criteria.pageIndex=this.currentPage;
                	
            this.criteria.pageSize=this.pagesize;
                	
            var current_token=localStorage.tokens;
                	
            this.criteria.authorization=current_token;

            this.$http.post(this.url,this.criteria,{emulateJSON: true}).then(function(res){
                  
            this.tableData=res.body.data.list;
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
    	       	    
//  	       	    console.log(localStorage);
    	       	    
    	       	    var url=localStorage.localhost + '/user/getMeunBtnByRoleAndMenuId';
    	       	    
    	       	    this.$http.post(url,button_post_data,{emulateJSON: true}).then(function(res){
                    	
                    this.buttons=res.data.data;

                    },function(res){
                    	
                    console.log('ajax failed');
                    console.log(res);
                        
                    });    
    	       	  
    	       },
    	    //从服务器读取数据
            loadData: function(){ 
                	
            this.url=localStorage.localhost+'/ArchiveTaskFacade/getUnArchiveTaskList'
                	
            this.criteria={};
                	
            this.criteria.pageIndex=this.currentPage;
                	
            this.criteria.pageSize=this.pagesize;
             	
            var current_token=localStorage.tokens;
                	
            this.criteria.authorization=current_token;

            this.$http.post(this.url,this.criteria,{emulateJSON: true}).then(function(res){
            // console.log(res);       	
            this.tableData=res.body.data.list;
            this.totalCount=res.body.data.total;   	
                        
            },function(res){
                    	
              console.log('ajax failed');
              console.log(res);
                        
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
                new_search: function(){
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
                    this.loadData();
                },

                //页码变更
                handleCurrentChange: function(val) {
                    this.currentPage = val;
                    this.loadData();
                }
    }
  }
</script>
