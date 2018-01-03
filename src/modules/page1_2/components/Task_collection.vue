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
.part_boardcast{
	width:99%;
	height:50px;
	background-color:#ffffff;
	float:left;
	margin-bottom:20px;
	box-shadow: 0px 0px 3px #d9d9d9;
	padding-top:20px;
}
.part_boardcast_bottom{
	width:99%;
	height:350px;
	background-color:#ffffff;
	float:left;
	margin-bottom:20px;
	box-shadow: 0px 0px 3px #d9d9d9;
}
.position_right{
	text-align: left;
}
.content_operation_day{  
    width:100%;
    background-color:#ffffff; 
}  
#main_operation_day{   
    width:100%;
    float:left;
    background-color:#ffffff;
    border:0px solid #008000;  
}  
.el-select .el-input {
    width: 110px;
}
.el-table .info-row {
    background: #c9e5f5;
}   
#top {
    background:#20A0FF;
    padding:5px;
    overflow:hidden;
}
.el-table .info-row {
    background: #c9e5f5;
}
.el-table .positive-row {
    background: #e2f0e4;
}
.select_bar{
	width:100%;
	height:150px;
	padding:20px;
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
.position_right{
	padding-left:100px;
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
		
		<!------------------------------>
		<div class="part_boardcast">
			
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  
            <!--<el-row>
                <el-col :span="6">
                	<div class="grid-content bg-purple">
                		<el-form-item label="企业名称">
                            <el-input v-model="ruleForm.firmName" class="new_input_style" placeholder="请填写企业名称"></el-input>
                        </el-form-item>
                	</div>
                </el-col>
                <el-col :span="6">
                	<div class="grid-content bg-purple-light">
                		<el-form-item label="企业证件号码">
                            <el-input v-model="ruleForm.firmCertNo" class="new_input_style" placeholder="请填写企业证件号码"></el-input>
                        </el-form-item>
                	</div>
                </el-col>
                <el-col :span="6">
                	<div class="grid-content bg-purple">
                      <el-form-item label="流程状态">
                      	  <select id="select_choice" class="select_style"></select>
                      </el-form-item>
                	</div>
                </el-col>
                <el-col :span="6">
                	<div class="grid-content bg-purple-light">
                		<el-form-item label="申请人">
                            <el-input v-model="ruleForm.createrName" class="new_input_style" placeholder="请填写申请人"></el-input>
                        </el-form-item>
                	</div>
                </el-col>
            </el-row>-->
       
            <el-row>
                <!--<el-col :span="6">
                	<div class="grid-content bg-purple">
                		<el-form-item label="开始日期">
                		<el-date-picker
                        v-model="ruleForm.startTime"
                        type="date"
                        placeholder="请选择开始日期">
                        </el-date-picker>
                        </el-form-item>
                	</div>
                </el-col>
                <el-col :span="6">
                	<div class="grid-content bg-purple-light">
                		<el-form-item label="结束日期">
                		<el-date-picker
                        v-model="ruleForm.endTime"
                        type="date"
                        placeholder="请选择结束日期">
                        </el-date-picker>
                        </el-form-item>
                	</div>
                </el-col>-->
                <el-col :span="12">
                	<div class="grid-content bg-purple-light position_right">
                		<el-button type="primary" @click="btn_operation(button.btnCode)" v-for="button in buttons">{{button.btnName}}</el-button>
                	</div>
                </el-col>
            </el-row>
        </el-form>
        
        
		</div>
		<!------------------------------>
		
		<!------------------------------>
		<div class="part_boardcast_bottom">
			
			<el-table
            height="450"
            border
            stripe
            ref="testTable"       
            :data="tableData_3"
            :default-sort = "{prop: 'id', order: 'ascending'}"
            @selection-change="handleSelectionChange"   
            @row-click="handleclick"
            :row-class-name = "tableRowClassName"
            style="width: 100%">
    
            <el-table-column
              type="selection">
            </el-table-column>
            
            <el-table-column
            prop="loanApplyNo"
            label="进件编号"
            width="200">
            </el-table-column>
    
            <el-table-column
            prop="processDefName"
            label="流程名称"
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="firmName"
            label="企业名称"
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="firmCertTypeName"
            label="企业证件类型"
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="firmCertNo"
            label="企业证件号码"
            width="200">
            </el-table-column>
    
            <el-table-column
            prop="financeProductName"
            label="产品名称"
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="applyAmount"
            label="申请金额（万元）"
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="deadlineName"
            label="期限"
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="interestRates"
            label="利率"
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="createrName"
            label="申请人"
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="createTime"
            label="申请时间"
            :formatter="dateFormat"
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="currProcStatusName"
            label="流程状态"
            width="200">
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
		</div>
		<!------------------------------>
<!------------------------------------------->
<el-dialog
  title="提示"
  :visible.sync="dialogVisible"
  size="tiny"
  :modal-append-to-body="false"
  :close-on-click-modal="false">
  <span v-text="resoult_tip"></span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>
<!------------------------------------------->
		
  </div>
</template>


<script>
  import $ from 'jquery' 
  export default {
    data() {

      return {
      	dialogVisible:false,
        
        resoult_tip:'',
        
        location:"您的位置    >  我的工作台    >  任务领取",

        ruleForm: {
         startTime:'',
         endTime:'',
         createrName:'',
         firmName:'',
         firmCertNo:'',
         region:''
        },
        
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
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
//************************************************************************
        //表格当前页数据
        tableData_3: [],

        //多选数组
        multipleSelection: [],

        //请求的URL
        url:'',

        //搜索条件
        criteria:{},

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
        
        buttons:[],
        
        selections:[]

      }
      
    },
  	mounted(){
  		
  		this.$nextTick(function() {  
  		
  			this.loadData_without_search();
  			
  			this.load_button();
  			
  			this.origin_select_data();
  			
  		})
  	},
    methods: {
            origin_select_data: function(){
            	//getAllProcStatusList
             //localStorage.localhost="http://172.16.5.166:9095";
	        
            var selelct_url=localStorage.localhost+'/dictDataCommFacade/getAllProcStatusList'
                	
            this.criteria={};
                	
            var current_token=localStorage.tokens;
                	
            this.criteria.authorization=current_token;

            this.$http.post(selelct_url,this.criteria,{emulateJSON: true}).then(function(res){
                    	
               console.log(res);
               
               this.selections=res.body.data.list;
               
               for(var i=0; i<res.body.data.list.length;i++){
               	
               	  $("#select_choice").append('<option value="'+res.body.data.list[i].dictDataCode+'">'+res.body.data.list[i].dictDataName+'</option>');
               }
               
            },function(res){
                    	
              console.log('ajax failed');
              console.log(res);
                        
            });       
            },
            btn_operation: function(btnCode){
            	
            	console.log(btnCode);
            	
            	if( btnCode=="query_btn" ){
            		
            		this.query_btn_data();
            		
            	}else if( btnCode=="cliam_btn"){
            		
            		this.cliam_btn_data();
            	}
            	
            },
            query_btn_data: function(){
            	
            //localStorage.localhost="http://172.16.5.166:9095";
	        
            this.url=localStorage.localhost+'/wf/getToCliamTaskList';
            
            //this.criteria.startTime=this.ruleForm.startTime;
            //this.criteria.endTime=this.ruleForm.endTime;
            this.criteria.createrName=this.ruleForm.createrName;
            this.criteria.firmName=this.ruleForm.firmName;
            this.criteria.firmCertNo=this.ruleForm.firmCertNo;
            //select_choice
            this.ruleForm.region=$("#select_choice").val();
            
            this.criteria.currProcStatusCode=this.ruleForm.region;
            
             var s_time = new Date(this.ruleForm.startTime);
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
             
             var e_time = new Date(this.ruleForm.endTime);
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

            console.log(this.criteria);
            
            this.$http.post(this.url,this.criteria,{emulateJSON: true}).then(function(res){
                    	
            console.log(res);
               
            this.tableData_3=res.body.data.toCliamTaskList;
               
            this.totalCount=res.body.data.total;
            
            this.ruleForm.startTime='';
            this.ruleForm.endTime='';
            this.ruleForm.createrName='';
            this.ruleForm.firmName='';
            this.ruleForm.firmCertNo='';
            this.ruleForm.region='';
            
//          this.resoult_tip=res.body.data.resultMessage;
//          
//          this.dialogVisible=true;
             
            },function(res){
                    	
              console.log('ajax failed');
              console.log(res);
                        
            });       
            
            	
            },
            cliam_btn_data: function(){
            	
            //localStorage.localhost="http://172.16.5.166:9095";
	        
            this.url=localStorage.localhost+'/wf/toCliamTasks'
             	
            var the_length=this.multipleSelection.length;
             
            this.criteria.toDoTaskParamList=[];
            
            for(var i=0;i<the_length;i++){
            	
            this.criteria['toDoTaskParamList[' + i +'].loanId'] = this.multipleSelection[i].loanId;
            this.criteria['toDoTaskParamList[' + i +'].loanApplyNo'] = this.multipleSelection[i].loanApplyNo;
            this.criteria['toDoTaskParamList[' + i +'].processInstanceId'] = this.multipleSelection[i].processInstanceId;
            this.criteria['toDoTaskParamList[' + i +'].taskId'] = this.multipleSelection[i].taskId;
            this.criteria['toDoTaskParamList[' + i +'].currProcStatusCode'] = this.multipleSelection[i].currProcStatusCode;
            
            }

            var current_token=localStorage.tokens;
              	
            this.criteria.authorization=current_token;

            console.log(this.criteria);
            
            this.$http.post(this.url,this.criteria,{emulateJSON: true}).then(function(res){
                    	
            console.log(res);
               
            this.resoult_tip=res.body.resultMessage;
            
            this.dialogVisible=true;
            //alert("success");
            this.loadData_without_search();
               
            },function(res){
                    	
              console.log('ajax failed');
              console.log(res);
                        
            });       
            },
            //从服务器读取数据
            loadData_without_search: function(){ 
        	
	        //localStorage.localhost="http://172.16.5.166:9095";
	        
            this.url=localStorage.localhost+'/wf/getToCliamTaskList'
                	
            this.criteria={};
                	
            var current_token=localStorage.tokens;
                	
            this.criteria.authorization=current_token;

            this.criteria.pageIndex=this.currentPage;
             
             this.criteria.pageSize=this.pagesize;
             
            this.$http.post(this.url,this.criteria,{emulateJSON: true}).then(function(res){
                    	
               console.log(res);
               
               this.tableData_3=res.body.data.toCliamTaskList;
               
               this.totalCount=res.body.data.total;
//             alert("success");
               
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
    	       	    
    	       	    var url=localStorage.localhost + '/user/getMeunBtnByRoleAndMenuId';
    	       	    
    	       	    this.$http.post(url,button_post_data,{emulateJSON: true}).then(function(res){
                    	
                    this.buttons=res.data.data;

                    },function(res){
                    	
                    console.log('ajax failed');
                    console.log(res);
                        
                    });    
    	       	  
    	       },
             dateFormat:function(row, column) { 
            	
             var time = new Date(row.createTime);
             var y = time.getFullYear();
             var m = time.getMonth()+1;
             var d = time.getDate();
             var h = time.getHours();
             var mm = time.getMinutes();
             var s = time.getSeconds();
             return y+'-'+m+'-'+d+' '+h+':'+mm+':'+s;
            }, 
                //多选响应
                handleSelectionChange: function(val) {
                    this.multipleSelection = val;
//                  var last_index=this.multipleSelection.legth-1
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
                },        

    //*********************************************************************************************************
   }
  }
</script>