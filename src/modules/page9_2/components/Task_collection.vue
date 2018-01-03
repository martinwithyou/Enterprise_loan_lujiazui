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
.form_area_new{
	width:18%;
	height:450px;
	padding-top:20px;
	background-color: #ffffff;
	margin-bottom:20px;
	float:left;
	border:2px solid #f2f2f2;
	margin-right:10px;
}
.form_area_new_right{
	width:80%;
	height:450px;
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
.title{
	height:40px;
	line-height:40px;
	text-align: left;
	padding-left:20px;
	background-color:#f2f2f2;
}
.title_more{
	height:30px;
	line-height:30px;
	text-align: left;
	border-bottom:2px solid #f2f2f2;
	padding-left:20px;
	font-size: 14px;
	}
.title_more:hover{
	box-shadow: 0px 0px 5px #E3E3E3;
	cursor: pointer;
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
<div class="form_area_new">
<div class="title"> 数据字典</div>
<div class="title_more" @click="btn_operation(button.dictTypeCode)" v-for="button in buttons">{{button.dictTypeName}}</div>
</div>
<div class="form_area_new_right">
	        <el-table
            height="350"
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
            prop="dictDataCode"
            label="字典代码 "
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="dictDataName"
            label="字典名称"
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="dictTypeCode"
            label="字典类型"
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="state"
            :formatter="dateFormat"
            label="是否可用">
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
            <div>
            	<el-button type="primary" @click="add_one">新增</el-button>
            	<el-button type="primary" @click="n_one">修改</el-button>
            </div>
</div>
<!----------------------------->


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
  	<el-form-item label="代码">
        <el-input v-model="search_form.value1" class="new_input_style"></el-input>
    </el-form-item>
  </div>
  </el-col>
</el-row>
<el-row>
  <el-col :span="24">
  <div class="grid-content bg-purple-dark">
  	<el-form-item label="名称">
        <el-input v-model="search_form.value2" class="new_input_style"></el-input>
    </el-form-item>
  </div>
  </el-col>
</el-row>
<el-row>
  <el-col :span="24">
  <div class="grid-content bg-purple-dark">
  	<el-form-item label="是否可用">
  	<el-select v-model="search_form.value3" placeholder="是否可用">
      <el-option label="是" value="1"></el-option>
      <el-option label="否" value="0"></el-option>
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
            <el-button type="primary" @click="commit">确 定</el-button>
        </span>
  </div>
  </el-col>
</el-row>

  
</el-form>
</el-dialog>
<!----------------------------->

<!----------------------------->
<el-dialog
  title="修改部门"
  :visible.sync="dialogVisible_n"
  :modal-append-to-body="false"
  size="tiny"
  :close-on-click-modal="false">
  
<el-form :model="search_form"  ref="ruleForm" label-width="100px" class="demo-ruleForm">
<el-row>
  <el-col :span="24">
  <div class="grid-content bg-purple-dark">
  	<el-form-item label="代码">
        <el-input v-model="search_form.value1" :disabled="true" class="new_input_style"></el-input>
    </el-form-item>
  </div>
  </el-col>
</el-row>
<el-row>
  <el-col :span="24">
  <div class="grid-content bg-purple-dark">
  	<el-form-item label="名称">
        <el-input v-model="search_form.value2"  class="new_input_style"></el-input>
    </el-form-item>
  </div>
  </el-col>
</el-row>
<el-row>
  <el-col :span="24">
  <div class="grid-content bg-purple-dark">
  	<el-form-item label="是否可用">
  	<el-select v-model="search_form.value3" placeholder="是否可用">
      <el-option label="是" value="1"></el-option>
      <el-option label="否" value="0"></el-option>
    </el-select>
    </el-form-item>
  </div>
  </el-col>
</el-row>
<el-row>
  <el-col :span="24" style="padding-left:100px;">
  <div class="grid-content bg-purple-dark">
  	    <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible_n = false">取 消</el-button>
            <el-button type="primary" @click="commit">确 定</el-button>
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
        
        dialogVisible_n:false,
        
        location:"您的位置    >  系统配置   >  数据字典",
        
        ruleForm:{
        	ruleForm:'',
        	pid:'',
        	menuName:'',
        	value3:''
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
        
        buttons:[],
        dictTypeCode:''

      }
      
    },
  	mounted(){
  		
  		this.$nextTick(function() {  
  		
  			this.loadData();
  			
  			this.load_button();
  			
  		})
  	},
    methods: {
    	      n_one:function(){
    	   	this.dialogVisible_n=true;
    	   	console.log(this.highlightId);
    	   	this.search_form.value1=this.highlightId.dictDataCode;
    	   	this.search_form.value2=this.highlightId.dictDataName;
    	   	this.search_form.value3=this.highlightId.state;
    	   	
    	    },
    	        commit(){
    	   	        var button_post_data={};
    	        	button_post_data.authorization=localStorage.tokens;
    	       	    button_post_data.dictDataCode =this.search_form.value1;
    	       	    button_post_data.dictDataName=this.search_form.value2;
    	       	    button_post_data.state=this.search_form.value3;
    	       	    button_post_data.id=this.highlightId.id;
    	       	    if(this.search_form.value3 =='不可用'){
    	       	    	button_post_data.state=0;
    	       	    }else{
    	       	    	button_post_data.state=1;
    	       	    }

    	       	    button_post_data.dictTypeCode=this.dictTypeCode;
    	       	    //alert(button_post_data);
    	       	    var url=localStorage.localhost+'/dictDataCommFacade/editSysDictData';
    	       	    
    	       	    this.$http.post(url,button_post_data,{emulateJSON: true}).then(function(res){
                    this.dialogVisible_eighth=false;
                    this.dialogVisible_n=false;
                    this.search_form.value1='';
                    this.search_form.value2='';
                    },function(res){
                    	
                    console.log('ajax failed');
                    console.log(res);
                        
                    });   
    	   },
    	   add_one:function(){
    	   	this.dialogVisible_eighth=true;
    	   	
    	   	
    	   },

    	   commit_add_one:function(){
    	   	
    	   },
    	   dateFormat:function(row, column) {
    	   	var val=row.state;
//          console.log(row.state);
            	if(val == 1){
            		val='可用';
            	}else{
            		val='不可用';
            	}
           
             return val;
            }, 
    	        btn_operation: function(dictTypeCode){
    	        	console.log(dictTypeCode);
    	        	this.dictTypeCode=dictTypeCode;
    	        	var button_post_data={};
    	        	
    	        	button_post_data.authorization=localStorage.tokens;
    	       	    button_post_data.dictTypeCode=dictTypeCode;
    	       	    var url=localStorage.localhost+'/dictDataCommFacade/getSysDictDataList';
    	       	    
    	       	    this.$http.post(url,button_post_data,{emulateJSON: true}).then(function(res){
                    this.tableData=res.body.data.list;
                    this.totalCount=res.body.data.total;
                    },function(res){
                    	
                    console.log('ajax failed');
                    console.log(res);
                        
                    });   
    	        },
    	        load_button:function(){
    	       	
    	       	var button_post_data={};
    	       	
    	       	var current_token=localStorage.tokens;
                	
                    button_post_data.authorization=current_token;

    	       	    console.log(localStorage);
    	       	    
    	       	    var url=localStorage.localhost+'/dictDataCommFacade/getSysDictType';
    	       	    
    	       	    this.$http.post(url,button_post_data,{emulateJSON: true}).then(function(res){
                    console.log(res.body.data.list);	
                    this.buttons=res.body.data.list;
//                  alert("123");
                    },function(res){
                    	
                    console.log('ajax failed');
                    console.log(res);
                        
                    });    
    	       	  
    	       },
    	        addNewDepartment: function(){
    	        	
    	        	this.dialogVisible_eighth=true;
    	        },
                //从服务器读取数据
                loadData: function(criteria, pageNum, pageSize){ 
                	//172.16.4.107:9494
                	//localStorage.localhost="http://172.16.5.166:9095";
                	
                	this.url=localStorage.localhost+'/sysMenu/querySysMenuListByPage'
                	
                	this.criteria=this.ruleForm;
               
                	this.criteria.pageIndex=this.currentPage;
                	
                	this.criteria.pageSize=this.pagesize;

                	this.criteria.authorization=localStorage.tokens;

                	console.log(this.criteria);
                	//设置token结束*************************************

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
