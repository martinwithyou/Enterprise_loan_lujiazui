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
	height:120px;
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
<el-form :model="ruleForm"  ref="ruleForm" label-width="150px" class="demo-ruleForm">
<el-row class="change_row_size">
  <el-col :span="24">
  	<div class="grid-content bg-purple-light">
  		<el-form-item label="角色名称">
            <el-input v-model="ruleForm.value2" placeholder="角色名称" class="new_input_style"></el-input>
        </el-form-item>
  	</div>
  </el-col>
</el-row>
<el-row>
  <el-col :span="24">
  	<div class="grid-content bg-purple-light" style="padding-left:150px;">
  		<el-button type="primary" @click="search_data">查找</el-button>
  		<el-button type="success" @click="reset_form">清空</el-button>
  		<el-button type="primary"  @click="btn_operation(button.btnCode)" v-for="button in buttons">{{button.btnName}}</el-button>
  	</div>
  </el-col>
</el-row>
</el-form>
</div>

<!----------------------------->
            <el-table
            height="450"
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
            prop="roleName"
            label="角色名称"
            width="200">
            </el-table-column>
    
            <el-table-column
            prop="roleCode"
            label="角色编码"
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="memo"
            label="备注"
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="state"
            label="是否有效"
            :formatter="stateFormat"
            width="200">
            </el-table-column>
    
            <el-table-column
            prop="creater"
            label="创建者">
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

<!----------------------------->
<el-dialog
  title="添加角色"
  :visible.sync="dialogVisible_eighth"
  :modal-append-to-body="false"
  size="tiny"
  :close-on-click-modal="false">
  
<el-form :model="search_form"  ref="ruleForm" label-width="100px" class="demo-ruleForm">
<el-row>
  <el-col :span="24">
  <div class="grid-content bg-purple-dark">
  	<el-form-item label="角色名称">
        <el-input v-model="search_form.roleName" class="new_input_style"></el-input>
    </el-form-item>
  </div>
  </el-col>
</el-row>
<el-row>
  <el-col :span="24">
  <div class="grid-content bg-purple-dark">
  	<el-form-item label="角色编码">
        <el-input v-model="search_form.roleCode" class="new_input_style"></el-input>
    </el-form-item>
  </div>
  </el-col>
</el-row>
<el-row>
  <el-col :span="24">
  <div class="grid-content bg-purple-dark">
    <el-form-item label="备注">
        <el-input v-model="search_form.memo" class="new_input_style"></el-input>
    </el-form-item>
  </div>
  </el-col>
</el-row>
<el-row>
  <el-col :span="24">
  <div class="grid-content bg-purple-dark">

  </div>
  </el-col>
</el-row>
<el-row>
  <el-col :span="24" style="padding-left:100px;">
  <div class="grid-content bg-purple-dark">
  	    <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible_eighth = false">取 消</el-button>
            <el-button type="primary" @click="submit_new_role">确 定</el-button>
        </span>
  </div>
  </el-col>
</el-row>

  
</el-form>
</el-dialog>
<!----------------------------->

<!----------------------------->
<el-dialog
  title="编辑角色"
  :visible.sync="dialogVisible_ninth"
  :modal-append-to-body="false"
  size="tiny"
  :close-on-click-modal="false">
  
<el-form :model="m_form"  ref="ruleForm" label-width="100px" class="demo-ruleForm">
<el-row>
  <el-col :span="24">
  <div class="grid-content bg-purple-dark">
  	<el-form-item label="角色编码">
        <el-input v-model="m_form.roleCode" :disabled="true" class="new_input_style"></el-input>
    </el-form-item>
  </div>
  </el-col>
</el-row>

<el-row>
  <el-col :span="24">
  <div class="grid-content bg-purple-dark">
  	<el-form-item label="角色名称">
        <el-input v-model="m_form.roleName" class="new_input_style"></el-input>
    </el-form-item>
  </div>
  </el-col>
</el-row>

<el-row>
  <el-col :span="24">
  <div class="grid-content bg-purple-dark">
  	<el-form-item label="状态">
     <el-select v-model="m_form.state" placeholder="状态">
       <el-option label="是" value="0"></el-option>
       <el-option label="否" value="1"></el-option>
     </el-select>
    </el-form-item>
  </div>
  </el-col>
</el-row>

<el-row>
  <el-col :span="24">
  <div class="grid-content bg-purple-dark">
    <el-form-item label="备注">
        <el-input v-model="m_form.memo" class="new_input_style"></el-input>
    </el-form-item>
  </div>
  </el-col>
</el-row>
<el-row>
  <el-col :span="24" style="padding-left:100px;">
  <div class="grid-content bg-purple-dark">
  	<span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible_ninth = false">取 消</el-button>
        <el-button type="primary" @click="submit_edit_role">确 定</el-button>
    </span>
  </div>
  </el-col>
</el-row>
</el-form>
</el-dialog>
<!----------------------------->
<!----------------------------->
<el-dialog
  title="提示"
  :visible.sync="dialogVisible"
  width="30%"
  :modal-append-to-body="false"
  :close-on-click-modal="false">
  <span>请将表单填写完成</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>
<!----------------------------->
  </div>
</template>


<script>
  export default {
    data() {
    	
      return {
      	dialogVisible:false,
      	
      	dialogVisible_ninth:false,
      	
      	buttons:'',
      	
        dialogVisible_eighth:false,
        
        location:"您的位置    >  组织机构管理   >  角色管理",
        
        ruleForm:{
        	value1:'',
        	value2:'',
        	value3:'',
        	value4:''
        },
        search_form:{
        	memo:'',
        	roleCode:'',
        	roleName:''
        },
        m_form:{
        	memo:'',
        	roleCode:'',
        	roleName:'',
        	state:''
        },
        //表格当前页数据
        tableData: [],

        //多选数组
        multipleSelection: [],

        //请求的URL
        url:'',

        //搜索条件
        criteria: {
        	authorization:''
        },
        
        button_criteria: {
        	authorization:''
        },
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
  		
  			this.loadData(this.criteria, this.currentPage, this.pagesize);
  			
  			this.load_button();
  		})
  	},
    methods: {  
    	    stateFormat:function(row, column) { 
            	
            var	this_new=row.state;
            	if(this_new == 1){
            		this_new='可用';
            	}else if(this_new == 0){
            		this_new='不可用';
            	}
            
             return this_new;
            }, 
    	    btn_operation: function(btnCode){

    	      	console.log(btnCode);
    	      	
    	      	if(btnCode == "role_add_btn"){
    	      		
    	      		this.add_new_role();
    	      		
    	      		
    	      	}else  if(btnCode == "role_update_btn"){
    	      		
    	      		this.update_new_role();
    	      		
    	      	}else{
    	      		alert("6");
    	      	}
    	      	
    	      },
    	      add_new_role:function(){
    	      	
    	      	 this.dialogVisible_eighth=true;
    	      },
    	      
    	      submit_new_role:function(){
    	      	
    	      	if(this.search_form.memo!==''&&
                   this.search_form.roleCode!==''&&
                   this.search_form.roleName!==''){
                   	
                this.url=localStorage.localhost+'/sysRole/saveSysRole'
                  
                this.criteria=this.search_form;
    	       	  
    	       	var current_token=localStorage.tokens;
                	
                this.criteria.authorization=current_token;
                
    	        this.$http.post(this.url,this.criteria,{emulateJSON: true}).then(function(res){
    	        	
    	        this.dialogVisible_eighth=false;
    	        	
    	        },function(res){
    	        	console.log("error");
    	        });
    	      		
    	      	}else{
    	      		this.dialogVisible=true;
    	      	}

                    	
               
    	      	
    	      	
    	      },
    	      submit_edit_role:function(){
    	      	
                this.url=localStorage.localhost+'/sysRole/updateSysRole'
                  
                this.criteria=this.m_form;
    	       	  
    	       	var current_token=localStorage.tokens;
                	
                this.criteria.authorization=current_token;
                
    	        this.$http.post(this.url,this.criteria,{emulateJSON: true}).then(function(res){
    	        	
    	        	this.dialogVisible_ninth=false;
    	        	
    	        },function(res){
    	        	console.log("error");
    	        });
                    
                    
    	      },
    	      update_new_role:function(){
    	      	this.dialogVisible_ninth=true;
    	      	
    	      	this.m_form.memo=this.highlightId.memo;
    	      	this.m_form.roleCode=this.highlightId.roleCode;
    	      	this.m_form.roleName=this.highlightId.roleName;
    	      	this.m_form.state=this.highlightId.state;
    	      	this.m_form.id=this.highlightId.id;
    	      	
    	      },
    	       search_data:function(){
    	       	
    	       	var new_criteria =this.ruleForm.value2;
    	       	
    	       	    this.loadData(new_criteria);
    	       	    
    	        },
    	
    	        reset_form: function(){
    	          this.ruleForm.value2="";
                },
    	        addNewDepartment: function(){
    	        	
    	        	this.dialogVisible_eighth=true;
    	        },
    	        load_button:function(){
    	        	
    	        	this.url=localStorage.localhost+'/user/getMeunBtnByRoleAndMenuId'
                    
                    var current_token=localStorage.tokens;
                	
                    this.button_criteria.authorization=current_token;
                    
                    this.button_criteria.roleCode=localStorage.roleCode;
    	       	    
    	       	    this.button_criteria.menuId=localStorage.Menu_id;
                    
                    this.$http.post(this.url,this.button_criteria,{emulateJSON: true}).then(function(res){
                    	
                    	console.log(res);
                    	
                    	this.buttons=res.body.data;
                    	
                    },function(){
                    	
                        console.log('failed');
                        
                    }); 
    	        },
                //从服务器读取数据
                loadData: function(){  

                    this.url=localStorage.localhost+'/sysRole/querySysRoleListByPage'
                    
                    var current_token=localStorage.tokens;
                	
                    this.criteria.authorization=current_token;
                    
                    this.criteria.pageIndex=this.currentPage;
                	
                	this.criteria.pageSize=this.pagesize;
                	
                	this.criteria.roleName =this.ruleForm.value2
                	
                    this.$http.post(this.url,this.criteria,{emulateJSON: true}).then(function(res){
                    	
                    this.tableData = res.body.data.list;
                    
                    this.totalCount=res.body.data.total;
                        
                    },function(){
                    	
                    console.log('failed');
                        
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
