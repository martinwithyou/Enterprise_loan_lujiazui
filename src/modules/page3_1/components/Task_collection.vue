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
	height:180px;
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
<el-form :model="ruleForm" ref="ruleForm" label-width="150px" class="demo-ruleForm">
	
<el-row class="change_row_size">
  <el-col :span="6">
  	<div class="grid-content bg-purple">
  		<el-form-item label="用户名">
            <el-input v-model="ruleForm.userName" placeholder="用户名" class="new_input_style"></el-input>
        </el-form-item>
  	</div>
  </el-col>
  <el-col :span="6">
  	<div class="grid-content bg-purple-light">
  		<el-form-item label="用户工号">
            <el-input v-model="ruleForm.jobNumber" placeholder="部门负责人" class="new_input_style"></el-input>
        </el-form-item>
  	</div>
  </el-col>
    <el-col :span="6">
  	<div class="grid-content bg-purple-light">
  		<el-form-item label="组织机构编码">
            <el-input v-model="ruleForm.organCode" placeholder="组织机构编码" class="new_input_style"></el-input>
        </el-form-item>
  	</div>
  </el-col>
    </el-col>
    <el-col :span="6">
  	<div class="grid-content bg-purple-light">
  		<el-form-item label="组织机构名称">
            <el-input v-model="ruleForm.organName" placeholder="组织机构名称" class="new_input_style"></el-input>
        </el-form-item>
  	</div>
  </el-col>
  <el-col :span="6">
  	<div class="grid-content bg-purple">
  		<el-form-item label="用户属性">
            <el-select v-model="ruleForm.belongTo" class="new_input_style" placeholder="请填写是否生效">
               <el-option label="公司总部" value="1"></el-option>
               <el-option label="线下门店" value="2"></el-option>
            </el-select>
        </el-form-item>
  	</div>
  </el-col>
  <el-col :span="6">
  	<div class="grid-content bg-purple-light">
  		<el-form-item label="用户状态">
            <el-select v-model="ruleForm.state" class="new_input_style" placeholder="用户状态">
               <el-option label="正常" value="1"></el-option>
               <el-option label="禁用" value="0"></el-option>
            </el-select>
        </el-form-item>
  	</div>
  </el-col>
</el-row>

<el-row>
    <el-col :span="24">
  	<div class="grid-content bg-purple-light" style="padding-left:150px;">
  		<el-button type="primary" @click="search_the_user" >搜索</el-button>
  		<el-button type="primary" @click="btn_operation(button.btnCode)" v-for="button in buttons">{{button.btnName}}</el-button>
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
            prop="userName"
            label="用户名"
            width="200">
            </el-table-column>
    
            <el-table-column
            prop="nickName"
            label="用户昵称"
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="organCode"
            label="组织机构编码"
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="organName"
            label="组织机构名称"
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
            :formatter="belongToFormat"
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="state"
            label="用户状态"
            :formatter="stateFormat"
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="phone"
            label="手机"
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="email"
            label="邮箱"
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="id"
            label="备注"
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
  title="添加用户"
  :visible.sync="dialogVisible_eighth"
  :modal-append-to-body="false"
  :close-on-click-modal="false">
  
<el-form :model="search_form"  ref="ruleForm" label-width="100px" class="demo-ruleForm">
<el-row>
  <el-col :span="12">
  <div class="grid-content bg-purple-dark">
  	<el-form-item label="用户名" >
        <el-input v-model="search_form.userName" class="new_input_style"></el-input>
    </el-form-item>
  </div>
  </el-col>

  <el-col :span="12">
  <div class="grid-content bg-purple-dark">
  	<el-form-item label="用户密码" >
        <el-input v-model="search_form.userPwd" class="new_input_style"></el-input>
    </el-form-item>
  </div>
  </el-col>

</el-row>

<el-row>
    <el-col :span="12">
  <div class="grid-content bg-purple-dark">
  	<el-form-item label="用户昵称">
        <el-input v-model="search_form.nickName" class="new_input_style"></el-input>
    </el-form-item>
  </div>
  </el-col>

  <el-col :span="12">
  <div class="grid-content bg-purple-dark">
  	<el-form-item label="用户工号" >
        <el-input v-model="search_form.jobNumber" class="new_input_style"></el-input>
    </el-form-item>
  </div>
  </el-col>
</el-row>  

<el-row>
    <el-col :span="12">
  	<div class="grid-content bg-purple-light">
  		<el-form-item label="用户属性">
            <el-select v-model="search_form.belongTo" class="new_input_style" placeholder="请选择用户属性">
               <el-option label="公司总部" value="1"></el-option>
               <el-option label="线下门店" value="2"></el-option>
            </el-select>
        </el-form-item>
  	</div>
  </el-col>
  
  <el-col :span="12">
  	<div class="grid-content bg-purple-light">
  		<!--<el-form-item label="用户状态">
            <el-select v-model="search_form.state" class="new_input_style" placeholder="用户状态">
               <el-option label="正常" value="1"></el-option>
               <el-option label="禁用" value="0"></el-option>
            </el-select>
        </el-form-item>-->
        <el-form-item label="邮箱">
        <el-input v-model="search_form.email" class="new_input_style"></el-input>
        </el-form-item>
  	</div>
  </el-col>
</el-row>

<el-row>
    <el-col :span="12">
  <div class="grid-content bg-purple-dark">
  	<el-form-item label="手机">
        <el-input v-model="search_form.phone" class="new_input_style"></el-input>
    </el-form-item>
  </div>
  </el-col>
  
  <el-col :span="12">
  <div class="grid-content bg-purple-dark">
  	
  </div>
  </el-col>
  
</el-row>

<el-row>


  <el-col :span="24" style="padding-left:100px;">
  <div class="grid-content bg-purple-dark">
  	    <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible_eighth = false">取 消</el-button>
            <el-button type="primary" @click="submit_add_user">确 定</el-button>
        </span>
  </div>
  </el-col>
</el-row>

  
</el-form>
</el-dialog>
<!----------------------------->
<!----------------------------->
<el-dialog
  title="修改用户资料"
  :visible.sync="dialogVisible_ninth"
  :modal-append-to-body="false"
  :close-on-click-modal="false">
  
<el-form :model="m_form" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
<el-row>
  <el-col :span="12">
  <div class="grid-content bg-purple-dark">
  	<el-form-item label="用户名" prop="desc">
        <el-input v-model="m_form.userName" class="new_input_style"></el-input>
    </el-form-item>
  </div>
  </el-col>
</el-row>

<el-row>
    <el-col :span="12">
  <div class="grid-content bg-purple-dark">
  	<el-form-item label="用户昵称">
        <el-input v-model="m_form.nickName" class="new_input_style"></el-input>
    </el-form-item>
  </div>
  </el-col>

  <el-col :span="12">
  <div class="grid-content bg-purple-dark">
  	<el-form-item label="用户工号" prop="desc">
        <el-input v-model="m_form.jobNumber" :disabled="true" class="new_input_style"></el-input>
    </el-form-item>
  </div>
  </el-col>
</el-row>  

<el-row>
    <el-col :span="12">
  	<div class="grid-content bg-purple-light">
  		<el-form-item label="用户属性" prop="desc">
            <el-select v-model="m_form.belongTo" class="new_input_style" placeholder="请选择用户属性">
               <el-option label="公司总部" value="1"></el-option>
               <el-option label="线下门店" value="2"></el-option>
            </el-select>
        </el-form-item>
  	</div>
  </el-col>
  
  <el-col :span="12">
  	<div class="grid-content bg-purple-light">
  		<el-form-item label="用户状态" prop="desc">
            <el-select v-model="m_form.state" class="new_input_style" placeholder="用户状态">
               <el-option label="可用" value="1"></el-option>
               <el-option label="禁用" value="0"></el-option>
            </el-select>
        </el-form-item>
  	</div>
  </el-col>
</el-row>

<el-row>
    <el-col :span="12">
  <div class="grid-content bg-purple-dark">
  	<el-form-item label="手机">
        <el-input v-model="m_form.phone" class="new_input_style"></el-input>
    </el-form-item>
  </div>
  </el-col>
  
  <el-col :span="12">
  <div class="grid-content bg-purple-dark">
  	<el-form-item label="邮箱">
        <el-input v-model="m_form.email" class="new_input_style"></el-input>
    </el-form-item>
  </div>
  </el-col>
  
</el-row>

<el-row>


  <el-col :span="24" style="padding-left:100px;">
  <div class="grid-content bg-purple-dark">
  	    <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible_ninth = false">取 消</el-button>
            <el-button type="primary" @click="submit_update_user">确 定</el-button>
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
  :visible.sync="dialogVisible_delete"
  size="tiny"
  :modal-append-to-body="false"
  :close-on-click-modal="false">
  <span>这是一段信息</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible_delete = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible_delete = false">确 定</el-button>
  </span>
</el-dialog>
<!----------------------------->

<!----------------------------->
<el-dialog
  title="分配角色"
  :visible.sync="dialogVisible_role"
  :modal-append-to-body="false"
  :close-on-click-modal="false">
  <span>所有角色</span>
  <!--<div id="select_all">
  	
  </div>-->
  <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
  <div style="margin: 15px 0;"></div>
  <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
    <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
  </el-checkbox-group>
  <!--<el-button type="primary" @click="show_what_select">主要按钮</el-button>-->

  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible_role = false">取 消</el-button>
    <el-button type="primary" @click="post_what_you_select">确 定</el-button>
  </span>
</el-dialog>
<!----------------------------->

<!----------------------------->
<el-dialog
  title="分配机构"
  :visible.sync="dialogVisible_organ"
  size="tiny"
  :modal-append-to-body="false"
  :close-on-click-modal="false">

<el-form :model="search_form" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
<el-row>
  <el-col :span="24">
  <div class="grid-content bg-purple-dark">
  	<el-form-item label="">
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
  	<el-form-item label="">
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
  	<el-form-item label="">
  	<select id="employee" class="select_style">
  		<option>请选择</option>
  	</select>
  	</el-form-item>
  </div>
  </el-col>
</el-row>
<el-row>
  <el-col :span="24" style="padding-left:100px;">
  <div class="grid-content bg-purple-dark">
  	<span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="submit_employees_info">确 定</el-button>
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
  :visible.sync="dialogVisible_success"
  size="tiny"
  :modal-append-to-body="false"
  :close-on-click-modal="false">
  <span>增加成功</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible_success = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible_success = false">确 定</el-button>
  </span>
</el-dialog>
<!----------------------------->

<!----------------------------->
<el-dialog
  title="提示"
  :visible.sync="dialogVisible_error"
  size="tiny"
  :modal-append-to-body="false"
  :close-on-click-modal="false">
  <span>增加失败</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible_error = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible_error = false">确 定</el-button>
  </span>
</el-dialog>
<!----------------------------->
<!----------------------------->
<el-dialog
  title="提示"
  :visible.sync="dialogVisible_tip"
  size="tiny"
  :modal-append-to-body="false"
  :close-on-click-modal="false">
  <span>请将表单填写完整</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible_tip = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible_tip = false">确 定</el-button>
  </span>
</el-dialog>
<!----------------------------->

  </div>
</template>


<script>
  import $ from 'jquery'
  export default {
    data() {
    	
       const generateData3 = _ => {
       	
       const data = [];
       
        for (let i = 0; i < 5; i++) {
        	
          data.push({
            value: data[i],
            desc: `备选项 ${ i }`
          });
        }
        return data;
      };
      const cityOptions = ['01', '02', '03', '04', '05', '06', '07', '08', '09','10'];	
      return {
      	dialogVisible_tip:false,
      	checkAll: true,
        checkedCities: [],
        cities: cityOptions,
        isIndeterminate: true,
      	data2:[{
          id: '222',
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
      	defaultProps: {
          children: 'children',
          label: 'label'
        },
       
      	data3: generateData3(),
        value4: [],
        
      	dialogVisible_ninth:false,
      	dialogVisible_error:false,
      	dialogVisible_success:false,
      	dialogVisible_delete:false,
      	dialogVisible_role:false,
      	dialogVisible_organ:false,
      	buttons:[],
      	
        dialogVisible_eighth:false,
        
        location:"您的位置    >  组织机构管理   >  用户管理",
        
        ruleForm:{
        	
        	state:'',
        	
        	organName:'',
        	
        	organCode:'',
        	
        	jobNumber:'',
        	
        	belongTo:'',
        	
        	userName:''
        },
        search_form:{
        	userName:'',
        	userPwd:'',
        	nickName:'',
        	jobNumber:'',
        	state:'',
        	belongTo:'',
        	phone:'',
        	email:''
        },
        
       m_form:{
        	userName:'',
        
        	nickName:'',
        	jobNumber:'',
        	state:'',
        	belongTo:'',
        	phone:'',
        	email:''
        },
        //表格当前页数据
        tableData: [],

        //多选数组
        multipleSelection: [],

        //请求的URL
        url:'https://jsonplaceholder.typicode.com/albums',

        //搜索条件
        criteria: {
        	jobNumber:'',
        	userName:'',
        	state:'',
        	organCode:''
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
            { required: true, message: '请填写内容', trigger: 'blur' }
          ]
        },
        
        totle_arr:''

      }
      
    },
  	mounted(){
  		
  		this.$nextTick(function() {  
  		
  		this.loadData(this.criteria, this.currentPage, this.pagesize);
  			
  	    window.setTimeout(this.load_button(),2000);
  	    
  	    this.origin_data();

  		})
  	},
    methods: {
      search_the_user:function(){
      	//alert('123');
      	            this.url=localStorage.localhost+'/sysUser/selectSysUserByPage'
                	
                	this.criteria=this.ruleForm;
                	
                	this.criteria.pageIndex=this.currentPage;
                	
                	this.criteria.pageSize=this.pagesize;
                	
                	//设置token开始*********************************
                	var current_token=localStorage.tokens;
                	
                	this.criteria.authorization=current_token;
                	
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
      belongToFormat:function(row, column) { 
            	
            var	this_new=row.belongTo;
            console.log(this_new);
            	if(this_new == 1){
            		this_new='公司总部';
            	}else if(this_new == 2){
            		this_new='线下门店';
            	}
            
             return this_new;
    }, 
    stateFormat:function(row, column) { 
            	
            var	this_new=row.state;
            	if(this_new == 1){
            		this_new='可用';
            	}else if(this_new == 0){
            		this_new='不可用';
            	}
            
             return this_new;
    }, 
      handleCheckAllChange(event) {
        this.checkedCities = event.target.checked ? cityOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      },
      show_what_select(){
      	console.log( this.checkedCities);
      },
      origin_data(){
      	
      	var origin_data=['01','02','03','05'];
      	
      	this.checkedCities=origin_data;
      	
      },
      organ_user:function(){
    	      	
    	this.dialogVisible_organ=true;
    	this.give_out_task();      	 
      },
      submit_employees_info:function(){

    	    this.criteria.organCode=$("#employee").val();
    	    this.criteria.organName=$("#employee").find("option:selected").text();
            this.criteria.id=this.highlightId.id;
            this.criteria.jobNumber=this.highlightId.jobNumber;
            
            this.criteria.userName=this.highlightId.userName;
            this.criteria.belongTo=this.highlightId.belongTo;
            this.criteria.state=this.highlightId.state;
    	    var current_token=localStorage.tokens;
            this.criteria.authorization=current_token;
            var selelct_url=localStorage.localhost+'/sysUser/updateSysUser'
            console.log(this.highlightId);
            console.log(this.criteria);
            this.$http.post(selelct_url,this.criteria,{emulateJSON: true}).then(function(res){
                
              this.dialogVisible_organ=false;
               
            },function(res){
                    	
              console.log('ajax failed');
              console.log(res);
                        
            });
    	    },
    	    get_employees:function(){
    	    	
    	    var selelct_url=localStorage.localhost+'/sysOrgan/selectOrganChildList'
                	
            this.criteria={};
                	
            this.criteria.organCode=$("#depart").val();
            
            var current_token=localStorage.tokens;
                	
            this.criteria.authorization=current_token;

            this.$http.post(selelct_url,this.criteria,{emulateJSON: true}).then(function(res){
                
               for(var i=0; i<res.body.data.length;i++){
               	  $("#employee").html('');
                  $("#employee").append('<option >请选择</option>');
               	  $("#employee").append('<option value="'+res.body.data[i].organCode+'">'+res.body.data[i].organName+'</option>');
               }
               
            },function(res){
                    	
              console.log('ajax failed');
              console.log(res);
                        
            });
    	    },
    	    select_depart:function(){
    	    	
    	    var selelct_url=localStorage.localhost+'/sysOrgan/selectOrganChildList'
                	
            this.criteria={};
                	
            this.criteria.organCode=$("#group").val();
            
            var current_token=localStorage.tokens;
                	
            this.criteria.authorization=current_token;

            this.$http.post(selelct_url,this.criteria,{emulateJSON: true}).then(function(res){
                
               for(var i=0; i<res.body.data.length;i++){
//             	  $("#depart").html('');
//                $("#depart").append('<option >请选择</option>');
               	  $("#depart").append('<option value="'+res.body.data[i].organCode+'">'+res.body.data[i].organName+'</option>');
               }
               
            },function(res){
                    	
              console.log('ajax failed');
              console.log(res);
                        
            });
    	    },
    	    give_out_task:function(){
    	
    	     var selelct_url=localStorage.localhost+'/sysOrgan/selectOrganChildList'
                	
            this.criteria={};
                	
            var current_token=localStorage.tokens;
                	
            this.criteria.authorization=current_token;
            //organCode
            this.criteria.organCode='XC';
            
            this.$http.post(selelct_url,this.criteria,{emulateJSON: true}).then(function(res){
               $("#group").html('');
               $("#group").append('<option >请选择</option>');
               for(var i=0; i<res.body.data.length;i++){
               	
               	  $("#group").append('<option value="'+res.body.data[i].organCode+'">'+res.body.data[i].organName+'</option>');
               }
               
            },function(res){
                    	
              console.log('ajax failed');
              console.log(res);
                        
            });
            
    	    },
    	    getSecond(){
    		
    		this.criteria={};
    		
    		this.url=localStorage.localhost+'/sysOrgan/selectOrganChildList';
    	       	  
    	    var current_token=localStorage.tokens;
                	
            this.criteria.authorization=current_token;
              
            this.criteria.organCode='XC';
            
    	    this.$http.post(this.url,this.criteria,{emulateJSON: true}).then(function(res){
    	      	
    	      	for(var i=0; i<res.body.data.length;i++){
               	
               	  $("#second_choice").append('<option value="'+res.body.data[i].parentOrganCode+'">'+res.body.data[i].parentOrganCode+'</option>');
                }
    	      	
    	    },function(error){
    	      	
    	      	alert("error");
    	      	
    	    });
    	},
    	abc: function(){
    		
    		this.criteria={};
    		
    		this.url=localStorage.localhost+'/sysOrgan/selectOrganChildList';
    	       	  
    	    var current_token=localStorage.tokens;
                	
            this.criteria.authorization=current_token;
              
            this.criteria.organCode=$("#second_choice").val();
            
    	    this.$http.post(this.url,this.criteria,{emulateJSON: true}).then(function(res){
    	    	
    	      	for(var i=0; i<res.body.data.length;i++){
               	
               	  $("#third_choice").append('<option value="'+res.body.data[i].parentOrganCode+'">'+res.body.data[i].parentOrganCode+'</option>');
                }
    	      	
    	    },function(error){
    	      	
    	      	alert("error");
    	      	
    	    });
    	},
    	abcd: function(){
    		
    		this.criteria={};
    		
    		this.url=localStorage.localhost+'/sysOrgan/selectOrganChildList';
    	       	  
    	    var current_token=localStorage.tokens;
                	
            this.criteria.authorization=current_token;
              
            this.criteria.organCode=$("#third_choice").val();
            
    	    this.$http.post(this.url,this.criteria,{emulateJSON: true}).then(function(res){
    	      	
    	      	for(var i=0; i<res.body.data.length;i++){
               	
               	  $("#forth_choice").append('<option value="'+res.body.data[i].parentOrganCode+'">'+res.body.data[i].parentOrganCode+'</option>');
                }
    	      	
    	    },function(error){
    	      	
    	      	alert("error");
    	      	
    	    });
    	},
    	getData2: function(){
      	    
//    	    this.$store.state.localhost="http://172.16.4.107:9094";
      	    
      	    this.url=localStorage.localhost+'/sysCommons/getOrganTreeAll'
                  
            this.criteria=this.search_form;
    	       	  
    	    var current_token=localStorage.tokens;
                	
            this.criteria.authorization=current_token;
                
    	    this.$http.post(this.url,this.criteria,{emulateJSON: true}).then(function(res){
    	      	
    	      	//alert("success");
    	      	console.log(res);
    	      	//this.data2=res.body.data.typeOrgans;
    	      	console.log(this.data2);
    	      	
    	    },function(error){
    	      	
    	      	alert("error");
    	      	
    	    });
                
        },
        
    	    btn_operation: function(btnCode){

    	      	if(btnCode == "user_add_btn"){
    	      		
    	      		this.add_user();

    	      		
    	      	}else if(btnCode == "user_delete_btn"){
    	      		
    	      		this.delete_user();
    	      		
    	      	}else if(btnCode == "user_update_btn"){
    	      		
    	      		this.update_user();
    	      		
    	      	}else if(btnCode == "user_role_btn"){
    	      		
    	      		this.role_user();
    	      		
    	      	}else if(btnCode == "user_organ_btn"){
    	      		
    	      		this.getData2();
    	      		
    	      		this.organ_user();
    	      		
    	      	}else{
    	      		alert("6");
    	      	}
    	      	
    	      },
    	      submit_add_user:function(){
    	      	if(
    	      		this.search_form.userName==""&&
    	      		this.search_form.userPwd==""&&
    	      		this.search_form.nickName==""&&
    	      		this.search_form.jobNumber==""&&
    	      		this.search_form.state==""&&
    	      		this.search_form.belongTo==""&&
    	      		this.search_form.phone==""&&
    	      		this.search_form.email==""
    	      	){
    	      		this.dialogVisible_tip=true;
    	      		
    	      		
    	      	}else{
    	      	
    	      	
    	       	  
                this.url=localStorage.localhost+'/sysUser/saveSysUser'
                  
                this.criteria=this.search_form;
    	       	  
    	       	var current_token=localStorage.tokens;
                	
                this.criteria.authorization=current_token;
                
    	        this.$http.post(this.url,this.criteria,{emulateJSON: true}).then(function(res){
                    	
                //
                if(res.body.resultCode == '000000'){
                this.dialogVisible_success=true;	
                this.loadData(this.criteria, this.currentPage, this.pagesize);
                
  	            this.load_button();
  	            
  	            this.search_form.userName="";
  	            this.search_form.userPwd="";
  	            this.search_form.nickName="";
  	            this.search_form.jobNumber="";
  	            this.search_form.state="";
  	            this.search_form.belongTo="";
  	            this.search_form.phone="";
  	            this.search_form.email="";
  	            
  	           this.dialogVisible_eighth=false;
  	            
                }else{
                	this.dialogVisible_eighth=false;
                	this.dialogVisible_error=true; 
                	
                }


            
                },function(){
                    	
                    console.log('failed');
                   
                }); 
               } 
    	      },
    	      add_user:function(){
    	      	
    	      	this.dialogVisible_eighth=true;
    	      	
               
                
    	      },
    	      delete_user:function(){
    	      	
    	      	this.dialogVisible_delete=true;
    	      	
    	      },
    	      update_user:function(){
    	      	
    	       console.log(this.highlightId); 
    	       
    	       if(this.highlightId == -1){
    	       	
    	       	this.dialogVisible_ninth=false;
    	       	
    	       }else{
    	       	
    	       	this.m_form.userName=this.highlightId.userName;
    	       	
    	       	this.m_form.id=this.highlightId.id;
                //this.m_form.userPwd=this.highlightId.userPwd;
                this.m_form.nickName=this.highlightId.nickName;
                this.m_form.jobNumber=this.highlightId.jobNumber;
                this.m_form.state=this.highlightId.state;
                var	this_new=this.highlightId.state;
            	if(this_new == 1){
            		this.m_form.state='可用';
            	}else if(this_new == 0){
            		this.m_form.state='不可用';
            	}
                this.m_form.belongTo=this.highlightId.belongTo;
                var	this_new=this.highlightId.belongTo;
            	if(this_new == 1){
            		this.m_form.belongTo='公司总部';
            	}else if(this_new == 2){
            		this.m_form.belongTo='线下门店';
            	}
                this.m_form.phone=this.highlightId.phone;
                this.m_form.email=this.highlightId.email;
                
                this.dialogVisible_ninth=true;
                
                
    	       }

    	      	
    	      },
    	      submit_update_user:function(){
    	      	
    	      	var data=this.m_form;
    	      	   
    	      	if(this.m_form.state == '可用'){
            		this.m_form.state=1;
            		
            	}else if(this.m_form.state=='不可用'){
            		this.m_form.state=0;
            	}
               
            
            	if(this.m_form.belongTo == '公司总部'){
            		this.m_form.belongTo=1;
            	}else if(this.m_form.belongTo == '线下门店'){
            		this.m_form.belongTo=2;
            	}
    	      	var current_token=localStorage.tokens;
                	
                    data.authorization=current_token;
                 
                var url=localStorage.localhost + '/sysUser/updateSysUser';
                 console.log(data);
                    
                this.$http.post(url,data,{emulateJSON: true}).then(function(res){
                    	
                     this.dialogVisible_ninth=false;
                    },function(res){
                    	
                        console.log('failed');
                        
                });   
    	      },
    	      role_user:function(){
    	      	
    	      	this.dialogVisible_role=true;
    	      	
    	      	this.url=localStorage.localhost+'/sysCommons/queryRoleListAll'
    	       	  
    	        var current_token=localStorage.tokens;
                	
                this.criteria.authorization=current_token;
                
    	        this.$http.post(this.url,this.criteria,{emulateJSON: true}).then(function(res){

                var this_arr_roleCode=[];
                var this_arr_roleName=[];
                
                var totle_arr=[];
                
    	      	for(var i=0;i<res.body.data.length;i++){
                    var this_obj={};
                    this_obj.role=res.body.data[i].roleCode;
                    this_obj.name=res.body.data[i].roleName;
                    totle_arr.push(this_obj);
    	      	    this_arr_roleCode.push(res.body.data[i].roleCode);
    	      	    this_arr_roleName.push(res.body.data[i].roleName);
    	      	}
    	      	
    	      	console.log(this_arr_roleCode);
    	      	console.log(this_arr_roleName);
    	      	console.log(totle_arr);
    	      	this.totle_arr=totle_arr;
//  	      	this.checkedCities=this.cities
    	      	this.cities=this_arr_roleName;
  	      	    this.cur_select();
    	        },function(error){
    	      	
    	      	console("error");
    	      	console(error);
    	      	
    	        });
    	        
    	      },
    	      cur_select:function(){
    	      	    var the_post_data={
    	        	jobNumber:'',
    	        	authorization:''
    	             };

    	            the_post_data.jobNumber=this.highlightId.jobNumber;
    	            
    	            var current_token=localStorage.tokens;
                	
                     the_post_data.authorization=current_token;
                
                var this_url=localStorage.localhost+'/sysRole/querySysRoleByJobNumber';
                
                this.$http.post(this_url,the_post_data,{emulateJSON: true}).then(function(res){
    	      	
    	      	console.log(res.body.data);
    	      	
    	      	var the_current_list=res.body.data;
    	      	
    	      	var what_you_select=[];
    	      	
    	      	for(var i=0;i<res.body.data.length;i++){
    	      		what_you_select.push(res.body.data[i].roleName);
    	      	}

                this.checkedCities=what_you_select;
    	      	
    	        },function(error){
    	      	
    	      	console("error");
    	      	console(error);
    	      	
    	        });
    	      },
    	      post_what_you_select:function(){
    	      	var post_data={};
    	      	    post_data.jobNumber=this.highlightId.jobNumber;
    	      	var current_token=localStorage.tokens;
                    post_data.authorization=current_token;
                    
    	      	var have_data_list=this.checkedCities;
    	      	
    	      	var new_code=[];
    	      	console.log(have_data_list);
    	      	console.log(this.totle_arr);
    	      	    
    	      	post_data.RoleCodeVoList=[];
    	      	
    	      	    	for(var k=0;k<have_data_list.length;k++){
    	      	    		for(var i=0;i<this.totle_arr.length;i++){
    	      	    		if(have_data_list[k]==this.totle_arr[i].name){
    	      	    			
    	      	    			//new_code.push(this.totle_arr[i].role);
    	      	    			//this.criteria['toDoTaskParamList['
    	      	    			post_data['RoleCodeVoList[' + k +']']=this.totle_arr[i].role;
    	      	    			
    	      	    		}
    	      	    	}
    	      	    }
  	            post_data.RoleCodeVoList=new_code;
    	      	
    	      	var url=localStorage.localhost+'/sysRole/bindUserRoleList';
     	      	console.log(post_data);
                this.$http.post(url,post_data,{emulateJSON: true}).then(function(res){

    	      	this.dialogVisible_role=false;
    	      	
    	      	this.checkedCities=[];
    	        },function(error){
    	        	
//  	      	this.checkedCities=[];
    	      	console("error");
    	      	console(error);
    	      	
    	        });
    	      	
    	      },

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
    	        addNewDepartment: function(){
    	        	
    	        	this.dialogVisible_eighth=true;
    	        },
    	        search_info:function(){
    	        	
    	        	this.loadData();
    	        },
                //从服务器读取数据
                loadData: function(){ 
                	//172.16.4.107:9494
                	//this.$store.state.localhost="http://172.18.100.196:7070";
                	//this.$store.state.localhost="http://172.16.4.107:9094";
                	
                	this.url=localStorage.localhost+'/sysUser/selectSysUserByPage'
                	
                	this.criteria=this.ruleForm;
                	
                	this.criteria.pageIndex=this.currentPage;
                	
                	this.criteria.pageSize=this.pagesize;
                	
                	//设置token开始*********************************
                	var current_token=localStorage.tokens;
                	
                	this.criteria.authorization=current_token;
                	
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
