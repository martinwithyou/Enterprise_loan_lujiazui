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
<div class="vue_location">
	<div class="page_location_icon"></div>
	<div class="page_location_content" v-text="location"></div>
</div>
<div class="form_area">
<el-form :model="ruleForm"  ref="ruleForm" label-width="150px" class="demo-ruleForm">
	
<el-row class="change_row_size">
  <el-col :span="6">
  	<div class="grid-content bg-purple">
  		<el-form-item label="角色名称">
            <el-input v-model="ruleForm.groupName" placeholder="角色名称" class="new_input_style"></el-input>
        </el-form-item>
  	</div>
  </el-col>
  <el-col :span="6">
  	<div class="grid-content bg-purple-light">
  		<el-form-item label="角色编码">
            <el-input v-model="ruleForm.groupId" placeholder="角色编码" class="new_input_style"></el-input>
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
            prop="groupName"
            label="角色名称"
            width="200">
            </el-table-column>
    
            <el-table-column
            prop="groupId"
            label="角色编码"
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="procDefName"
            label="流程名称">
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
  title="配置流程角色"
  :visible.sync="dialogVisible_eighth"
  :modal-append-to-body="false"
  size="large"
  :close-on-click-modal="false">
<el-row>
  <el-col :span="24">
    <div style="width:100%;height:300px;border:2px solid #f2f2f2;">
    	<div style="width:45%;height:100%;border-right:1px solid #d9d9d9;float:left;">
        <el-table
    		height="250"
            ref="multipleTable"
            :data="tableData3"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange">
            <!--<el-table-column
            type="selection"
            width="55">
            </el-table-column>--> 
            <el-table-column
           prop="userName"
           label="用户名"
            width="200">
           </el-table-column>
          <el-table-column
          prop="organName"
          label="用户部门"
          width="200">
          </el-table-column>
          <el-table-column
          prop="address"
          label="角色名称"
          width="200">
          </el-table-column>
            <el-table-column
           prop="jobNumber"
           label="用户工号"
           width="200">
           </el-table-column>
          <el-table-column
          prop="belongTo"
          label="用户属性"
          :formatter="dateFormat"
          width="200">
          </el-table-column>
          <el-table-column
          prop="state"
          label="用户状态"
          :formatter="dateFormat_new"
          width="200">
          </el-table-column>
          </el-table>
    	</div>
    	<div style="width:8%;height:100%;border:1px solid #d9d9d9;float:left;text-align:center;">
    		<el-button type="primary" @click="peizhi" style="margin-top:100px;margin-bottom:20px;">同步</el-button>
    		<!--<el-button type="primary" style="margin-top:20px;margin-bottom:20px;margin-left:0px;">取消</el-button>-->
    	</div>
    	<div style="width:45%;height:100%;border-left:1px solid #d9d9d9;float:left;">
    	    <div>
    	    	用户名<input v-model="user"/>
    	                部门<input  v-model="group"/>
    	    	<el-button type="primary" @click="get_new_user">搜索</el-button>
    	    </div>
    		<el-table
    		height="250"
            ref="multipleTable"
            :data="tableData4"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange">
            <el-table-column
            type="selection"
            width="55">
            </el-table-column>
            <el-table-column
           prop="userName"
           label="用户名"
            width="200">
           </el-table-column>
          <el-table-column
          prop="organName"
          label="用户部门"
          width="200">
          </el-table-column>
          <el-table-column
          prop="address"
          label="角色名称"
          width="200">
          </el-table-column>
            <el-table-column
           prop="jobNumber"
           label="用户工号"
           width="200">
           </el-table-column>
          <el-table-column
          prop="belongTo"
          label="用户属性"
          :formatter="dateFormat"
          width="200">
          </el-table-column>
          <el-table-column
          prop="state"
          label="用户状态"
          :formatter="dateFormat_new"
          width="200">
          </el-table-column>
          </el-table>
    	</div>
    </div>
  </el-col>
</el-row>
</el-dialog>
<!----------------------------->
<!---------------------------->
<el-dialog
  title="提示"
  :visible.sync="dialogVisible"
  :modal-append-to-body="false"
  width="30%"
  :close-on-click-modal="false">
  <span>操作成功</span>
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
       const cityOptions = ['上海', '北京', '广州', '深圳'];
      return {
      	dialogVisible:false,
      	tableData3:[],
      	tableData4:[],
      	checkAll: false,
        checkedCities: ['上海', '北京'],
        checkedCities_right:[],
        cities: cityOptions,
        cities_right: cityOptions,
        isIndeterminate: true,
      	
        dialogVisible_eighth:false,
        
        location:"您的位置    >  系统配置   >  流程配置",
        user:'',
        group:'',
        ruleForm:{
        	groupName:'',
        	groupId:''
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
  			
  		})
  	},
    methods: { 
    	    peizhi:function(){
    	    	
    	    	    this.url=localStorage.localhost+'/wf/synchroUserToActivity';
             
                	this.criteria.groupId=this.highlightId.groupId;

                	this.criteria.authorization=localStorage.tokens;

                	
                	this.criteria.activityUserVoList=[];
                	
                	for(var i=0;i<this.multipleSelection.length;i++){
                		this.criteria['activityUserVoList[' + i +'].jobNumber'] = this.multipleSelection[i].jobNumber;
                        this.criteria['activityUserVoList[' + i +'].nickName'] = this.multipleSelection[i].nickName;
                	}

                    console.log(this.criteria);
                	
                    this.$http.post(this.url,this.criteria,{emulateJSON: true}).then(function(res){
                    	
//                  alert("同步成功。。。");
                    this.dialogVisible_eighth=false;
                    this.dialogVisible=true;
                    this.loadData();
                        
                    },function(res){
                    	
                    console.log('ajax failed');
                        
                    });    
    	    },
    	    dateFormat:function(row, column) { 
            	
            var res=row.belongTo;
            if(res == 1){
            	res='公司总部';
            }else if(res == 2){
            	res='线下门店';
            }
            
             return res;
            },
            
            dateFormat_new:function(row, column) { 
            	
            var res=row.state;
            if(res == 1){
            	res='可用';
            }else if(res == 0){
            	res='不可用';
            }
            
             return res;
            },
    	        get_new_user:function(){
    	            
                	this.url=localStorage.localhost+'/sysUser/selectSysUserByPage';
             
                	this.criteria.pageIndex=this.currentPage;
                	
                	this.criteria.pageSize=this.pagesize;

                	this.criteria.authorization=localStorage.tokens;
                	
                	this.criteria.userName=this.user;
                	
                	this.criteria.organName=this.group;

                    this.$http.post(this.url,this.criteria,{emulateJSON: true}).then(function(res){
                    	
                    this.tableData4 = res.body.data.list;
                        
                    this.totalCount=res.body.data.total;
                        
                    },function(res){
                    	
                    console.log('ajax failed');
                        
                    });                 
               },
               search_more_user:function(){
               	    this.url=localStorage.localhost+'/wf/getActivityGroupUserList';
             
                	this.criteria.pageIndex=this.currentPage;
                	
                	this.criteria.pageSize=this.pagesize;
                	
                	this.criteria.groupId=this.highlightId.groupId;

                	this.criteria.authorization=localStorage.tokens;

                    this.$http.post(this.url,this.criteria,{emulateJSON: true}).then(function(res){
//                  	alert('success');
                    this.tableData3 = res.body.data.activityUserList;
                        
                    this.totalCount=res.body.data.total;
                        
                    },function(res){
                    	
                    console.log('ajax failed');
                        
                    });               
               },
    	       search_user:function(){
    	           
                	this.url=localStorage.localhost+'/sysUser/selectSysUserByPage';
             
                	this.criteria.pageIndex=this.currentPage;
                	
                	this.criteria.pageSize=100000;

                	this.criteria.authorization=localStorage.tokens;

                    this.$http.post(this.url,this.criteria,{emulateJSON: true}).then(function(res){
                    	
                    this.tableData4 = res.body.data.list;
                        
                    this.totalCount=res.body.data.total;
                        
                    },function(res){
                    	
                    console.log('ajax failed');
                        
                    });                 
                
                },
    	  handleCheckAllChange(val) {
           this.checkedCities = val ? cityOptions : [];
           this.isIndeterminate = false;
          },
          handleCheckedCitiesChange(value) {
           let checkedCount = value.length;
          this.checkAll = checkedCount === this.cities.length;
          this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
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
    	    	
    	    	console.log(this.highlightId);
//  	        console.log(this.multipleSelection);
                var a=[];
                    a.push(this.highlightId)
    	        this.tableData3=a;
    	        this.dialogVisible_eighth=true;
    	        this.search_user();
    	        this.search_more_user();
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
    	        search_this:function(){
    	           
                	this.url=localStorage.localhost+'/wf/getALLActivityGroupList';
             
                	this.criteria.pageIndex=this.currentPage;
                	
                	this.criteria.pageSize=this.pagesize;
                	
                	this.criteria.groupName=this.ruleForm.groupName;
                	
                    this.criteria.groupId=this.ruleForm.groupId;

                	this.criteria.authorization=localStorage.tokens;

                    this.$http.post(this.url,this.criteria,{emulateJSON: true}).then(function(res){
                    	
                    this.tableData = res.body.data.activityGroupVoList;
                        
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
    	        	console.log(this.highlightId);
    	        	console.log(this.multipleSelection);
    	        },
                //从服务器读取数据
                loadData: function(){ 

                	this.url=localStorage.localhost+'/wf/getALLActivityGroupList';
             
                	this.criteria.pageIndex=this.currentPage;
                	
                	this.criteria.pageSize=this.pagesize;

                	this.criteria.authorization=localStorage.tokens;

                    this.$http.post(this.url,this.criteria,{emulateJSON: true}).then(function(res){
                    	
//                  console.log(res);
                    	
                    this.tableData = res.body.data.activityGroupVoList;
                        
//                  console.log(res.body.data.list);
                        
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
