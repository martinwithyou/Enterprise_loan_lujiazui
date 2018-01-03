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

    label {
        display: inline !important;
        font-size: 16px;
    }

    ul.menuTree {
        list-style: none;
        margin: 5px 20px;
    }

    li.menuTree {
        margin: 0 0 5px 0;
        width: 300px;
        height: auto;
        float: left;
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
  		<el-form-item label="角色名称">
            <el-input v-model="ruleForm.menuName" placeholder="角色名称" class="new_input_style"></el-input>
        </el-form-item>
  	</div>
  </el-col>
</el-row>

<el-row>
    <el-col :span="24">
  	<div class="grid-content bg-purple-light" style="padding-left:150px;">
  		<el-button type="primary" @click="search_this">搜索</el-button>
  		<el-button type="primary" @click="add_this">权限配置</el-button>
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
            prop="roleCode"
            label="角色编号"
            width="300">
            </el-table-column>
    
            <el-table-column
            prop="roleName"
            label="角色名称"
            width="300">
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
  size="large"
  :close-on-click-modal="false">
  <div style="width:100%;height:5500px;">
  	
 <el-tree
  :data="data2"
  show-checkbox
  default-expand-all
  node-key="id"
  ref="tree"
  highlight-current
  :props="defaultProps">
</el-tree>


<div class="buttons">
  <el-button @click="getCheckedNodes">确认</el-button>
  <!--<el-button @click="getCheckedKeys">通过 key 获取</el-button>
  <el-button @click="setCheckedNodes">通过 node 设置</el-button>
  <el-button @click="setCheckedKeys">通过 key 设置</el-button>
  <el-button @click="resetChecked">清空</el-button>-->
</div>

  </div>
</el-dialog>
<!----------------------------->

  </div>
</template>


<script>
  import $ from 'jquery'
  export default {
  
    data() {
    	
      return {
      	data2: [],
      	recive:[],
      	defaultProps: {
          children: 'children',
          label: 'label'
        },
        dialogVisible_eighth:false,
        
        location:"您的位置    >  系统配置   >  权限配置",
        
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
     getCheckedNodes() {
        console.log(this.$refs.tree.getCheckedNodes());
        var resoult=this.$refs.tree.getCheckedNodes();
        var this_data=JSON.stringify(resoult);
        
        this.criteria.data=this_data;

        this.criteria.roleCode=this.highlightId.roleCode;
    	this.criteria.authorization=localStorage.tokens;
        this.url=localStorage.localhost+'/sysMenu/permissionRoleMenuBtnEle1';
        this.$http.post(this.url,this.criteria,{emulateJSON: true}).then(function(res){
//      alert("123")
        this.dialogVisible_eighth=false;
        },function(res){
                    	
        console.log('ajax failed');
                        
        }); 
      },
      getCheckedKeys() {
        console.log(this.$refs.tree.getCheckedKeys());
      },
      setCheckedNodes() {
        this.$refs.tree.setCheckedNodes([{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 9,
          label: '三级 1-1-1'
        }]);
      },
      setCheckedKeys() {
        this.$refs.tree.setCheckedKeys([3]);
      },
      resetChecked() {
        this.$refs.tree.setCheckedKeys([]);
      },
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
//  	    	console.log(this.highlightId);
    	    	this.criteria.authorization=localStorage.tokens;
                this.url=localStorage.localhost+'/sysMenu/treeMeunEle';
                this.$http.post(this.url,this.criteria,{emulateJSON: true}).then(function(res){
                this.data2=res.body.data.data;  
                this.add_this_back();
//              this.dialogVisible_eighth=false;
                },function(res){
                    	
                console.log('ajax failed');
                        
                });              
    	    },
    	    add_this_back:function(){
    	    	this.criteria.authorization=localStorage.tokens;
    	    	this.criteria.roleCode=this.highlightId.roleCode;
    	    	//roleCode
                this.url=localStorage.localhost+'/sysMenu/getMenuTreeByRoleCodeEle';
                this.$http.post(this.url,this.criteria,{emulateJSON: true}).then(function(res){
                this.recive=res.body.data.data;  
                this.$refs.tree.setCheckedNodes(this.recive);
                },function(res){
                    	
                console.log('ajax failed');
                        
                });   
    	    },
    	    stateFormat:function(row, column) {
            	
            var	this_new=row.state;
            	if(this_new = 1){
            		this_new='可用';
            	}else if(this_new = 0){
            		this_new='不可用';
            	}
            
             return this_new;
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

                	this.url=localStorage.localhost+'/sysRole/querySysRoleListByPage';
             
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
                search_this:function(){
    	           
                	this.url=localStorage.localhost+'/sysRole/querySysRoleListByPage';
             
                	this.criteria.pageIndex=this.currentPage;
                	
                	this.criteria.pageSize=this.pagesize;

                	this.criteria.authorization=localStorage.tokens;
                	
                	this.criteria.roleName=this.ruleForm.menuName;

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
