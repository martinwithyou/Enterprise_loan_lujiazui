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
  <el-col :span="6">
  	<div class="grid-content bg-purple">
  		<el-form-item label="菜单名称">
            <el-input v-model="ruleForm.menuName" placeholder="菜单名称" class="new_input_style"></el-input>
        </el-form-item>
  	</div>
  </el-col>
  <el-col :span="6">
  	<div class="grid-content bg-purple-light">
  		<el-form-item label="父菜单名称">
            <el-input v-model="ruleForm.pidName" placeholder="父菜单名称" class="new_input_style"></el-input>
        </el-form-item>
  	</div>
  </el-col>
  <el-col :span="6">
  	<div class="grid-content bg-purple">
  		<el-form-item label="是否生效">
            <el-select v-model="ruleForm.valid" class="new_input_style" placeholder="请填写是否生效">
               <el-option label="是" value="1"></el-option>
               <el-option label="否" value="0"></el-option>
            </el-select>
        </el-form-item>
  	</div>
  </el-col>
</el-row>

<el-row>
    <el-col :span="24">
  	<div class="grid-content bg-purple-light" style="padding-left:150px;">
  		<!--<el-button type="primary" @click="btn_operation(button.btnCode)" v-for="button in buttons">{{button.btnName}}</el-button>
  		<el-button type="primary">查找</el-button>-->
  		<!--<el-button type="success" @click="addNewDepartment">菜单按钮添加添加</el-button>
  		<el-button type="success" @click="addNewDepartment">菜单按钮添加修改</el-button>-->
  		<el-button type="primary" @click="search_this">搜索</el-button>
  		<!--<el-button type="primary" >添加</el-button>-->
  		<el-button type="primary" @click="add_this">修改</el-button>
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
            prop="menuName"
            label="菜单名称"
            width="200">
            </el-table-column>
    
            <el-table-column
            prop="url"
            label="菜单URL"
            width="400">
            </el-table-column>
            
            <el-table-column
            prop="pidName"
            label="父菜单名称"
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="valid"
            label="是否可用"
            :formatter="stateFormat"
            width="200">
            </el-table-column>
    
           <el-table-column
            prop="creater"
            label="创建人">
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
  title="添加菜单"
  :visible.sync="dialogVisible_eighth"
  :modal-append-to-body="false"
  size="tiny"
  :close-on-click-modal="false">
  
<el-form :model="search_form"  ref="ruleForm" label-width="100px" class="demo-ruleForm">
<el-row>
  <el-col :span="24">
  <div class="grid-content bg-purple-dark">
  	<el-form-item label="菜单名称">
        <el-input v-model="search_form.value1" class="new_input_style"></el-input>
    </el-form-item>
  </div>
  </el-col>
</el-row>
<!--<el-row>
  <el-col :span="24">
  <div class="grid-content bg-purple-dark">
  	<el-form-item label="SN">
        <el-input v-model="search_form.value2" class="new_input_style"></el-input>
    </el-form-item>
  </div>
  </el-col>
</el-row>-->
<el-row>
  <el-col :span="24">
  <div class="grid-content bg-purple-dark">
  	<el-form-item label="是否生效">
        <el-select v-model="search_form.value3" class="new_input_style" placeholder="请选择是否生效">
           <el-option label="是" value="1"></el-option>
          <el-option label="否" value="0"></el-option>
        </el-select>
    </el-form-item>
  </div>
  </el-col>
</el-row>
<!--<el-row>
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
</el-row>-->
<el-row>
  <el-col :span="24" style="padding-left:100px;">
  <div class="grid-content bg-purple-dark">
  	    <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible_eighth = false">取 消</el-button>
            <el-button type="primary" @click="submit_edit">确 定</el-button>
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
  export default {
  
    data() {
    	
      return {
      	
        dialogVisible_eighth:false,
        
        location:"您的位置    >  系统配置   >  菜单管理",
        
        ruleForm:{
        	ruleForm:'',
        	pidName:'',
        	menuName:'',
        	valid:''
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
  			
//			window.setTimeout(this.load_button,1000);
  			
  		})
  	},
    methods: { 
    	    submit_edit:function(){
    	    	   
    	    	    this.url=localStorage.localhost+'/sysMenu/updateMenuById';
             
                    this.criteria.id=this.highlightId.id;
                    
                    this.criteria.menuName=this.search_form.value1;
                    
                   
                    if(this.search_form.value3=='有效'){
    	    		this.highlightId.valid=1;
    	    	    }else{
    	    		this.highlightId.valid=0;
    	    	    }
                    this.criteria.valid=this.search_form.value3;
                    
                	this.criteria.authorization=localStorage.tokens;

                    this.$http.post(this.url,this.criteria,{emulateJSON: true}).then(function(res){
                    	
                    this.dialogVisible_eighth=false;
                        
                    },function(res){
                    	
                    console.log('ajax failed');
                        
                    });                 
    	    },
    	    add_this:function(){
    	    	this.dialogVisible_eighth=true;
    	    	console.log(this.highlightId);
    	    	this.search_form.value1=this.highlightId.menuName;
    	    	//valid
    	    	if(this.highlightId.valid==1){
    	    		this.highlightId.valid='有效';
    	    	}else{
    	    		this.highlightId.valid='无效';
    	    	}
    	    	this.search_form.value3=this.highlightId.valid;
    	    },
    	    stateFormat:function(row, column) {
            	
            var	this_new=row.valid;
            	if(this_new == 1){
            		this_new='可用';
            	}else if(this_new == 0){
            		this_new='不可用';
            	}
            
             return this_new;
             }, 
    	        search_this:function(){
    	           
                	this.url=localStorage.localhost+'/sysMenu/querySysMenuListByPage';
             
                	this.criteria.pageIndex=this.currentPage;
                	
                	this.criteria.menuName=this.ruleForm.menuName;
                	
                	this.criteria.pidName=this.ruleForm.pidName;
                	
                	this.criteria.valid=this.ruleForm.valid;
                	
                	this.criteria.pageSize=this.pagesize;

                	this.criteria.authorization=localStorage.tokens;

                    this.$http.post(this.url,this.criteria,{emulateJSON: true}).then(function(res){
                    	
                    console.log(res);
                    	
                    this.tableData = res.body.data.list;
                        
                    console.log(res.body.data.list);
                        
                    this.totalCount=res.body.data.total;
                        
                    },function(res){
                    	
                    console.log('ajax failed');
                        
                    });                 
                
                },
    	        load_button:function(){
    	       	
    	       	var button_post_data={};
    	       	
    	       	var current_token=localStorage.tokens;
                	
                    button_post_data.authorization=current_token;
    	       	
    	       	    button_post_data.roleCode=localStorage.roleCode;
    	       	    
    	       	    button_post_data.menuId=localStorage.Menu_id;
    	       	    
    	       	    console.log(localStorage);
    	       	    
//  	       	    var url='http://172.16.4.107:9094' + '/sysMenu/permissionRoleMenuBtn';
//  	       	    
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

                	this.url=localStorage.localhost+'/sysMenu/querySysMenuListByPage';
             
                	this.criteria.pageIndex=this.currentPage;
                	
                	this.criteria.pageSize=this.pagesize;

                	this.criteria.authorization=localStorage.tokens;

                    this.$http.post(this.url,this.criteria,{emulateJSON: true}).then(function(res){
                    	
                    console.log(res);
                    	
                    this.tableData = res.body.data.list;
                        
                    console.log(res.body.data.list);
                        
                    this.totalCount=res.body.data.total;
                        
                    },function(res){
                    	
                    console.log('ajax failed');
                        
                    });                 
                },
                new_loadData: function(criteria,pageNum, pageSize){
                	this.$http.get({
                		method:'get',
                		url:this.url,
                		data:{parameter:criteria, pageNum:pageNum, pageSize:pageSize},
                		headers: {"X-Requested-With": "XMLHttpRequest"},
                        emulateJSON: true
                	}).then(function(res){
                       
                        this.tableData=res.data;
                        
                	},function(error){
                		
                		console.log(error);
                	})
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
