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
	height:220px;
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
		
<!---------------------------------------------------------->
<div class="vue_location">
	<div class="page_location_icon"></div>
	<div class="page_location_content" v-text="location"></div>
</div>
<!----------------------------------------------------------->

<div class="form_area">
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm">
	
<el-row class="change_row_size">
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  	    <el-form-item label="企业名称">
            <el-input v-model="ruleForm.firmName" class="new_input_style"></el-input>
        </el-form-item>
    </div>
  </el-col>
  <el-col :span="8">
  	<div class="grid-content bg-purple-light">
  		<el-form-item label="合同编号">
            <el-input v-model="ruleForm.contractNo" class="new_input_style"></el-input>
        </el-form-item>
  	</div>
  </el-col>
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="协议编号">
            <el-input v-model="ruleForm.agreementNo" class="new_input_style"></el-input>
        </el-form-item>
  	</div>
  </el-col>
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  	    <el-form-item label="合同状态">
           <select id="select_choice"  placeholder="订单状态" class="select_style" ></select>
        </el-form-item>
    </div>
  </el-col>
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="签收开始日期">
            <el-date-picker
            v-model="ruleForm.startDate"
            type="date"
            placeholder="签收开始日期">
            </el-date-picker>
        </el-form-item>
  	</div>
  </el-col>
  
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="签收结束日期">
            <el-date-picker
            v-model="ruleForm.endDate"
            type="date"
            placeholder="签收结束日期">
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
</el-row>

<el-row>
  <el-col :span="12">
  	<div class="grid-content bg-purple" style="padding-left:150px;">
  		   <el-button type="primary" @click="btn_operation(button.btnCode)" v-for="button in buttons">{{button.btnName}}</el-button>
  		<!--<el-button type="success">查看</el-button>
  		<el-button type="success" @click="show_list">投资人列表</el-button>
  		<el-button type="info">搜索</el-button>-->
  	</div>
  </el-col>
</el-row>

</el-form>
</div>
		
<!-----------------table开始--------------------------------------------------------->
            <el-table
            height="220"
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
            prop="firmName"
            label="企业名称"
            width="200">
            </el-table-column>
    
            <el-table-column
            prop="processDefName"
            label="流程名称"
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="contractNo"
            label="合同编号"
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="agreementNo"
            label="协议编号"
            width="200">
            </el-table-column>
    
            <el-table-column
            prop="financeProductName"
            label="产品名称"
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="deadlineName"
            label="合同期限"
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="contractAmount"
            label="合同金额（万元）"
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="loanAmount"
            label="放款金额（万元）"
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="contractDate"
            label="签约日期"
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="loanDate"
            label="放款日期"
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="loanDate"
            label="开始日期"
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="id"
            label="结束日期"
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="createrName"
            label="申请人"
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="itemStatusName"
            label="合同状态"
            width="200">
            </el-table-column>
            
            <el-table-column 
            label="还款计划表"
            width="200">
            <template scope="scope">
            	
            <el-button
            size="small"
            type="text"
            @click="handleDelete_new(scope.$index, scope.row)">点击预览</el-button>
           </template>
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


<!-------------------------投资人弹出框开始----------------------------------------------------------->
<el-dialog
  title="投资人列表"
  :visible.sync="dialogVisible_second"
  :modal-append-to-body="false"
  size="large"
  :close-on-click-modal="false">
  
            <el-table
            id="p_table"
            height="200"
            border
            ref="testTable"       
            :data="t_tableData"
            :default-sort = "{prop: 'id', order: 'ascending'}"
            :row-class-name = "tableRowClassName"
            style="width: 100%">
            
            <el-table-column
            prop="agreementNo"
            label="出借协议编号"
            width="200">
            </el-table-column>
    
            <el-table-column
            prop="lenderName"
            label="出借人姓名"
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="lenderCretNo"
            label="身份证号码"
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="lenderUserName"
            label="用户名"
            width="200">
            </el-table-column>
    
            <el-table-column
            prop="lendAmount"
            label="出借金额"
            width="300">
            </el-table-column>
            
            <el-table-column
            prop="lendDeadline"
            label="出借期限（月）"
            width="200">
            </el-table-column>
    
            </el-table> 
  <el-row style="text-align:center;">
     <el-button type="primary" style="margin-top:20px;"  @click="print">打印</el-button>
  </el-row>
  
  <!--<span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible_second = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible_second = false">确 定</el-button>
  </span>-->
</el-dialog>	
<!-------------------------投资人弹出框结束----------------------------------------------------------->
  
<!--------------------------------------------------------------------------------------------->
<el-dialog
  title="查看"
  :visible.sync="dialogVisible"
  size="large"
  :modal-append-to-body="false"
  :close-on-click-modal="false">
  <!---------------------------->
<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
  
<el-row>
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  	    <el-form-item label="密码" prop="pass">
      <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
      </el-form-item>
  </div>
  </el-col>
  <el-col :span="8">
  	<div class="grid-content bg-purple-light">
  		  <el-form-item label="年龄" prop="age">
       <el-input v-model.number="ruleForm2.age"></el-input>
      </el-form-item>
  	</div>
  </el-col>
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  		  <el-form-item label="确认密码" prop="checkPass">
       <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
      </el-form-item>
  	</div>
  </el-col>
</el-row>  
</el-form>

  <!---------------------------->
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>
<!--------------------------------------------------------------------------------------------->
	</div>
</template>


<script>
  import $ from 'jquery'
  export default {
    data() {
    	
      return {
      	ruleForm2:{
      		pass:'',
      		checkPass:'',
      		age:''
      	},
      	options_left:false,
      	t_tableData:[],
      	dialogVisible:false,
      	dialogVisible_second:false,
      	
        task:"任务转移",
        search:"搜索",
        location:"您的位置    >  合同管理    >  合同查询",
        form:{
        	name:'',
        	region:''
        },
         ruleForm: {
          firmName:'',
          contractNo:'',
          agreementNo:'',
          itemStatusCode:'',
          startDate:'',
          endDate:'',
          applystartDate:'',
          applyendDate:''
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
        url:'https://jsonplaceholder.typicode.com/albums',

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
        
        buttons:[]
        
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
    	
    print:function(){
    	    	
    var headhtml = "<html><head><title></title></head><body>";
    var foothtml = "</body>";
    // 获取div中的html内容
    var newhtml = $("#p_table").html();
    // 获取div中的html内容，jquery写法如下
    // var newhtml= $("#" + printpage).html();

    // 获取原来的窗口界面body的html内容，并保存起来
    var oldhtml = document.body.innerHTML;

    // 给窗口界面重新赋值，赋自己拼接起来的html内容
    document.body.innerHTML = headhtml + newhtml + foothtml;
    // 调用window.print方法打印新窗口
    window.print();

    // 将原来窗口body的html值回填展示
    document.body.innerHTML = oldhtml;
    return false;
    },
    	    origin_select_data: function(){
	        
            var selelct_url=localStorage.localhost+'/gotoContractQuery'
                	
            this.criteria={};
                	
            var current_token=localStorage.tokens;
                	
            this.criteria.authorization=current_token;
            
            this.$http.post(selelct_url,this.criteria,{emulateJSON: true}).then(function(res){
                console.log(res);
               for(var i=0; i<res.body.data.contractStatusList.length;i++){
               	
               	  $("#select_choice").append('<option value="'+res.body.data.contractStatusList[i].dictDataCode+'">'+res.body.data.contractStatusList[i].dictDataName+'</option>');
               }
               
            },function(res){
                    	
              console.log('ajax failed');
              console.log(res);
                        
            });       
            },
            show_model:function(){
            	
            },
    	    btn_operation:function(btnCode){
    	    	console.log(btnCode)
    	    	if( btnCode=="view_involist_btn"){
    	    		
    	    		this.get_list();
    	    		            //view_btn
    	    	}else if( btnCode == "view_btn" ){
    	    		
 	    		this.show_details();
    	    		
    	    	}else if(btnCode=="query_btn"){
    	    		this.view_btn();
    	    	}
    	    },
    	    show_details:function(){
    	    this.dialogVisible=true;
    	    var post={};
    	    post.contractNo=this.highlightId.contractNo;
    	    post.authorization=localStorage.tokens;	
    	    this.url=localStorage.localhost+"/getContractQueryFacade";
    	    this.$http.post(this.url,post,{emulateJSON: true}).then(function(res){	
            console.log(res.body.data.contractQuery[0]);	
         
            },function(res){
                    	
              console.log('ajax failed');
              console.log(res);
                        
            });   
            
    	    },
    	    view_btn:function(){
    	    	 
            this.url=localStorage.localhost+'/getContractQueryFacade'
                	
            this.criteria={};
            
            this.criteria.firmName=this.ruleForm.firmName;
            this.criteria.contractNo=this.ruleForm.contractNo;
            this.criteria.agreementNo=this.ruleForm.agreementNo;
            
            this.criteria.itemStatusCode=$('#select_choice').val();
            
            this.criteria.startDate=this.ruleForm.startDate;
             var s_time = new Date(this.criteria.startDate);
             var y = s_time.getFullYear();
             var m = s_time.getMonth()+1;
                 if(m<10){
                 	m='0'+m;
                 }
             var d = s_time.getDate();
                 if(d<10){
                 	d='0'+d;
                 }
             this.criteria.startDate=y+'-'+m+'-'+d;
             
            this.criteria.endDate=this.ruleForm.endDate;
            var s_time = new Date(this.criteria.endDate);
             var y = s_time.getFullYear();
             var m = s_time.getMonth()+1;
                 if(m<10){
                 	m='0'+m;
                 }
             var d = s_time.getDate();
                 if(d<10){
                 	d='0'+d;
                 }
             this.criteria.endDate=y+'-'+m+'-'+d;
             
            this.criteria.applystartDate=this.ruleForm.applystartDate;
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
             
            this.criteria.applyendDate=this.ruleForm.applyendDate;
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
             
            this.criteria.pageIndex=this.currentPage;
                	
            this.criteria.pageSize=this.pagesize;
             	
            var current_token=localStorage.tokens;
                	
            this.criteria.authorization=current_token;

            this.$http.post(this.url,this.criteria,{emulateJSON: true}).then(function(res){	
            	
            this.tableData=res.body.data.contractQuery;
//          console.log(res.body.data.contractQuery);
            this.totalCount=res.body.data.total;   	
//                      alert('.....SS')
            },function(res){
                    	
              console.log('ajax failed');
              console.log(res);
                        
            });       
            
            
    	    },
    	    get_list:function(){
    	    	this.dialogVisible_second=true;
    	    	this.t_loadData();
    	    },
    	       //从服务器读取数据
            t_loadData: function(){ 
                	
            this.url=localStorage.localhost+'/getInvestorList'
                	
            this.criteria={};
                	
            this.criteria.applyNo=this.highlightId.applyNo;
            
            this.criteria.pageIndex=this.currentPage;
                	
            this.criteria.pageSize=this.pagesize;
             	
            var current_token=localStorage.tokens;
                	
            this.criteria.authorization=current_token;

            this.$http.post(this.url,this.criteria,{emulateJSON: true}).then(function(res){	
//          	console.log(res);
            this.t_tableData=res.body.data.investorList;
//          console.log(res.body.data.contractQuery);
//          this.totalCount=res.body.data.total;   	
                        
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
    	      show_list:function(){
    	      	
    	          this.dialogVisible_second=true;
    	          
              },
    	      handleDelete_new: function(index, row) {
                           console.log(index, row);
                           alert(index);
                },
            //从服务器读取数据
            loadData: function(){ 
                	
            this.url=localStorage.localhost+'/getContractQueryFacade'
                	
            this.criteria={};
                	
            this.criteria.pageIndex=this.currentPage;
                	
            this.criteria.pageSize=this.pagesize;
             	
            var current_token=localStorage.tokens;
                	
            this.criteria.authorization=current_token;

            this.$http.post(this.url,this.criteria,{emulateJSON: true}).then(function(res){	
            	console.log(res);
            this.tableData=res.body.data.contractQuery;
            console.log(res.body.data.contractQuery);
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
                    this.highlightId = row;
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

//              //搜索
//              search: function(){
//                  this.loadData(this.criteria, this.currentPage, this.pagesize);
//              },

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
