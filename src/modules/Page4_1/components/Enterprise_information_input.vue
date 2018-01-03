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
.part_title{
	line-height:50px;
	border:0px solid #3074BD;
	padding-left:20px;
	color:#1d8ec0;
	font-weight:600;
	font-size:14px !important;
}
.part_title_submit{
	line-height:50px;
	border:0px solid #3074BD;
	padding-left:20px;
	color:#1d8ec0;
	font-weight:600;
	font-size:14px !important;
	text-align: center;
}
.part_title_new{
	width:100%;
	line-height:50px;
	border:0px solid #3074BD;
	padding-left:20px;
	color:#1d8ec0;
	font-weight:600;
}
.part_title_new_upload{
	width:50%;
	line-height:50px;
	border:0px solid #3074BD;
	padding-left:20px;
	color:#1d8ec0;
	font-weight:600;
}
.new_input_style_long{
	border-radius: 0px !important;
	width:330px !important;
}
.new_input_style{
	border-radius: 0px !important;
	width:190px !important;
}
.submit_action_right_now{
	width:300Px;
}
.this_part_background{
	background-color: #ffffff;
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
.form_area{
	width:100%;
	height:150px;
	padding-top:20px;
	background-color: #ffffff;
	margin-bottom:20px;
	float:left;
}
.select_style{
	width:190px;
	height:36px;
	border:1px solid #bfcbd9;
	color:#999999;
}
</style>  
<template>
	<div class="this_part_background"> 
		
<!-- vue path start--------------------------->
<div class="vue_location">
	<div class="page_location_icon"></div>
	<div class="page_location_content" v-text="location"></div>
</div>
<!---vue path end-------------------------->
        
<!--------------表单录入---------------------------------------------->
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm">


<div class="part_title" v-text="basic_info"></div>
<!--------------------表单第一行开始---------------------------->
<el-row>
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="主体企业" prop="value1">
         <el-select v-model="ruleForm.isMain" @change="changeValue" placeholder="请选择" class="new_input_style">
            <el-option label="是" value="1"></el-option>
            <el-option label="否" value="0"></el-option>
         </el-select>
        </el-form-item>
  	</div>
  </el-col>
  
  <el-col :span="8">
  	<div class="grid-content bg-purple-light">
  		<el-form-item label="主体企业" prop="value2" v-show="options_left">
            <el-input v-model="ruleForm.firmName_show" placeholder="请选择" class="new_input_style"></el-input>
            <span class="el-icon-search" @click="show_model"></span>
        </el-form-item>
  	</div>
  </el-col>
  
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="主体企业证件号" prop="value3" v-show="options_left">
            <el-input v-model="ruleForm.firmNo" placeholder="请填写主体企业证件号" class="new_input_style"></el-input>
        </el-form-item>
  	</div>
  </el-col>
  
</el-row>
<!-------------表单第二行开始--------------------------->
<el-row>
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="企业名称" prop="value4">
            <el-input v-model="ruleForm.firmName" placeholder="请填写企业名称" class="new_input_style"></el-input>
        </el-form-item>
  	</div>
  </el-col>
  
  <el-col :span="8">
  	<div class="grid-content bg-purple-light">
  		<el-form-item label="企业证件类型" prop="value5">
            <select id="select_choice" class="select_style" @click="changeValue_type"></select>
        </el-form-item>
  	</div>
  </el-col>
  
  <el-col :span="8">
  		<div class="grid-content bg-purple">
  		<el-form-item label="组织机构代码" prop="value6" v-show="options_right_2">
            <el-input v-model="ruleForm.firmCertNo" placeholder="请填写组织机构代码" class="new_input_style"></el-input>
        </el-form-item>
        
        <el-form-item label="社会信用代码" prop="value6" v-show="options_right_1">
            <el-input v-model="ruleForm.firmCertNo" placeholder="请填写社会信用代码" class="new_input_style"></el-input>
        </el-form-item>
  	</div>
  </el-col>
</el-row>

<!----------------表单第三行开始------------------------------------->

<el-row>
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  	    <el-form-item label="法人名称" prop="value7">
            <el-input v-model="ruleForm.corporateName" placeholder="请填写法人名称" class="new_input_style"></el-input>
        </el-form-item>
    </div>
  </el-col>
  <el-col :span="8">
  	<div class="grid-content bg-purple-light">
  		<el-form-item label="法人证件号码" prop="value8">
            <el-input v-model="ruleForm.corporateCertValue" placeholder="请填写法人证件号码" class="new_input_style"></el-input>
        </el-form-item>
  	</div>
  </el-col>
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="法人手机号码" prop="value9">
            <el-input v-model="ruleForm.corporateMobile" placeholder="请填写法人手机号码" class="new_input_style"></el-input>
        </el-form-item>
  	</div>
  </el-col>
</el-row>

<!-----------------------表单第四行开始--------------------------------------------->
<el-row>
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="企业经营地址" prop="value10">
            <el-input v-model="ruleForm.firmAdress" placeholder="请填写企业经营地址" class="new_input_style"></el-input>
        </el-form-item>
  	</div>
  </el-col>
  <el-col :span="8">&nbsp;</el-col>
  <el-col :span="8">
  	<div class="grid-content bg-purple-light">
  		<el-form-item label="法人居住地址" prop="value11">
            <el-input v-model="ruleForm.corporateAddress" placeholder="请填写法人居住地址" class="new_input_style"></el-input>
        </el-form-item>
  	</div>
  </el-col>
</el-row>

<div class="part_title" v-text="card_info"></div>


<!-----------------------表单第五行开始--------------------------------------------->

<el-row>
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="账户类型" prop="value12">
         <select id="acct_type"  class="select_style">
         	<option>请选择</option>
         </select>
        </el-form-item>
  	</div>
  </el-col>
  
  <el-col :span="8">
  	<div class="grid-content bg-purple-light">
  		<el-form-item label="开户银行" prop="value13">
         <select id="bank_type" class="select_style">
         	<option>请选择</option>
         </select>
        </el-form-item>
  	</div>
  </el-col>
  
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="对公账号" prop="value14">
            <el-input v-model="ruleForm.bankAcct" placeholder="填写对公账号" class="new_input_style"></el-input>
        </el-form-item>
  	</div>
  </el-col>
</el-row>
<!-----------------------表单第五行开始--------------------------------------------->

<el-row>
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="开户省" prop="value15">
         <select id="province_type" @change="get_cities" class="select_style">
         	<option>请选择</option>
         </select>
        </el-form-item>
  	</div>
  </el-col>
  
  <el-col :span="8">
  	<div class="grid-content bg-purple-light">
  		<el-form-item label="开户城市" prop="value16">
         <select id="city_type" class="select_style" >
         	<option>请选择</option>
         </select>
        </el-form-item>
  	</div>
  </el-col>
  
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="开户支行" prop="value17">
            <el-input v-model="ruleForm.bankBranchName" placeholder="填写开户支行" class="new_input_style"></el-input>
        </el-form-item>
  	</div>
  </el-col>
</el-row>


<div class="part_title" v-text="enclosure_info"></div>

<div class="part_title_new_upload" v-text="">
<!----------------------------------------------------------->
<div slot="tip" class="el-upload__tip">企业资料上传清单：营业执照，开户许可证， 法人身份证，公司章程， 企业及法人征信。</div>
<div slot="tip" class="el-upload__tip">财务资料上传清单：财务报表，财务科目明细， 银行流水。</div>
<div slot="tip" class="el-upload__tip">其他：经营地址证明，推荐单位意见表，现场照片。</div>

<el-upload
	ref="upload"
    class="upload-demo"
    :action="post_action"
    :data="post_data"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :file-list="fileList"
    :auto-upload="false">
     <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
     <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
     <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
 </el-upload>


<!----------------------------------------------------------->
</div>


<div class="part_title_submit" v-text="">
   <el-button type="success" @click="submitForm('ruleForm')" class="submit_action_right_now">立即提交</el-button>
</div>


</el-form>

<!------------------------------------------------------------>

<div>
<el-dialog
  title="提示"
  :visible.sync="dialogVisible_ten"
  size="large"
  :modal-append-to-body="false"
  :close-on-click-modal="false">
 <div class="form_area">

<el-form :model="s_ruleForm"  ref="ruleForm" label-width="150px" class="demo-ruleForm">
	
<el-row class="change_row_size">
	
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  	    <el-form-item label="企业名称">
            <el-input v-model="s_ruleForm.firmName" class="new_input_style"></el-input>
        </el-form-item>
    </div>
  </el-col>
  
  <el-col :span="8">
  	<div class="grid-content bg-purple-light">
  		<el-form-item label="企业证件号">
            <el-input v-model="s_ruleForm.firmCertNo" class="new_input_style"></el-input>
        </el-form-item>
  	</div>
  </el-col>
  
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="银行卡号">
            <el-input v-model="s_ruleForm.bankAcct" class="new_input_style"></el-input>
        </el-form-item>
  	</div>
  </el-col>
  
</el-row>

<el-row class="change_row_size">
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="录入开始日期">
            <el-date-picker
            class="new_input_style"
            v-model="s_ruleForm.startDate"
            type="date"
            placeholder="录入开始日期">
            </el-date-picker>
        </el-form-item>
  	</div>
  </el-col>
  
    <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="录入结束日期">
            <el-date-picker
            class="new_input_style"
            v-model="s_ruleForm.endDate"
            type="date"
            placeholder="录入结束日期">
            </el-date-picker>
        </el-form-item>
  	</div>
  </el-col>
  
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  	    <el-form-item label="法人姓名">
            <el-input v-model="s_ruleForm.corporateName" class="new_input_style"></el-input>
        </el-form-item>
    </div>
  </el-col>
  
  </el-row>


<el-row class="change_row_size">
	
    <el-col :span="8">
  	<div class="grid-content bg-purple">
  	    <el-form-item label="法人手机号码">
            <el-input v-model="s_ruleForm.corporateMobile" class="new_input_style"></el-input>
        </el-form-item>
    </div>
  </el-col>
  
    <el-col :span="8">
  	<div class="grid-content bg-purple" style="text-align:left;padding-left:50px;">
        <el-button type="info" @click="search_form" v-text="search_char"></el-button>
  	</div>
  </el-col>
  
</el-row>

</el-form>
</div>
<!------------------------------------------------------------------------->
           <el-table
            height="200"
            border
            stripe
            ref="testTable"       
            :data="s_tableData"
            :default-sort = "{prop: 'id', order: 'ascending'}"
            @selection-change="handleSelectionChange"   
            @row-click="handleclick"
            :row-class-name = "tableRowClassName"
            style="width: 100%">
    
            <el-table-column
              type="selection">
            </el-table-column>
            
            <el-table-column
            prop="firmNo"
            label="企业编号"
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="firmName"
            label="企业名称"
            width="200">
            </el-table-column>
    
            <el-table-column
            prop="isMain"
            label="主体企业"
            :formatter="isMaindateFormat"
            width="200">
            </el-table-column>
             <!--isMaindateFormat-->
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
            prop="corporateName"
            label="法人姓名"
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="corporateCertValue"
            label="法人证件号码"
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="corporateMobile"
            label="法人手机号码"
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="bankName"
            label="开户银行"
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="bankAcct"
            label="银行卡号"
            width="200">
            </el-table-column>
           
            <el-table-column
            prop="createTime"
            label="创建日期"
            :formatter="dateFormat"
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="createrName"
            label="客户经理"
            width="200">
            </el-table-column>
    
            <el-table-column
            prop="organName"
            label="创建渠道"
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
<!-------------------------------------------------------------------------->
  
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible_ten = false">取 消</el-button>
    <el-button type="primary" @click="select_table_choice">确 定</el-button>
  </span>
</el-dialog>
</div>


<!----------------------------------------------------------->
<el-dialog
  title="提示"
  :visible.sync="dialogVisible_evel"
  size="tiny"
  :modal-append-to-body="false"
  :close-on-click-modal="false">
  <span>企业信息录入成功</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible_evel = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible_evel = false">确 定</el-button>
  </span>
</el-dialog>

<el-dialog
  title="提示"
  :visible.sync="dialogVisible_tew"
  size="tiny"
  :modal-append-to-body="false"
  :close-on-click-modal="false">
  <span>企业信息录入失败</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible_tew = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible_tew = false">确 定</el-button>
  </span>
</el-dialog>

<el-dialog
  title="提示"
  :visible.sync="dialogVisible_three"
  size="tiny"
  :modal-append-to-body="false"
  :close-on-click-modal="false">
  <span>请将表单填写</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible_three = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible_three = false">确 定</el-button>
  </span>
</el-dialog>
<!--dialogVisible_tew-->
<!------------------------------------------------------------>
  </div>
</template>


<script>
  import $ from 'jquery' 
  
  export default {
 
    data() {

      return {
      	dialogVisible_three:false,
      	
      	dialogVisible_tew:false,
      	
      	dialogVisible_evel: false,
      	
        post_data:{},
        
        post_action:'',
      	//post_action:'http://172.16.4.7:9094/enterpriseFacade/uploadAttachment',
      	
      	modify:false,
      
      	get_company_code:'',
      	//表格当前页数据
        s_tableData: [],

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
      	   	
      	selections:[],
      	
      	search_char:'搜索',
        dialogVisible_ten:false,
      	options_right_1:true,
      	options_right_2:false,
        options_left:false,
        
        location:"您的位置    >  客户管理    >  企业信息录入",
        
        basic_info:"基本信息",
        
        card_info:"银行卡信息",
        
        enclosure_info:"附件信息",
        
        
        fileList: [],
        
        isMain:'',
        //*******************************************************
        ruleForm: {
        	
          isMain:'',
          firmName_show:'',
          mainFirmId:'',
          firmNo:'',
          
          firmName:'',
          firmCertTypeCode:'',
          firmCertTypeName:'',
          firmCertNo:'',
          
          corporateName:'',
          corporateCertValue:'',
          corporateMobile:'',
          
          firmAdress:'',
          corporateAddress:'',
          
          acctTypeCode:'',
          acctTypeName:'',
          bankCode:'',
          bankName:'',
          bankAcct:'',
          
          provinceCode:'',
          provinceName:'',
          cityCode:'',
          cityName:'',
          bankBranchName:'',
          
        },
        s_ruleForm:{
          bankAcct:'',
          corporateMobile:'',
          corporateName:'',
          endDate:'',
          firmCertNo:'',
          firmName:'',
          startDate:''
        },
        rules: {
          isMain: [
            { required: true, message: '请填写内容', trigger: 'change' }
          ]
        }
        
      }
      
    },
  	mounted(){
  		
  		this.$nextTick(function() {  
  		
  			this.origin_select_data_code();
  			
  			this.origin_select_acct_type();
  			
  			this.origin_select_bank_type();
  			
  			this.origin_select_province_type();
  			
  			this.get_company_code_fun();
  			
  			
  			
  			//增加查询信息，已经移走。
  			//this.origin_query();
  			
  		})
  	},
    methods: {
    	    origin_data: function(){
            	
            this.post_action=localStorage.localhost+'/enterpriseFacade/uploadAttachment';
            
            this.post_action=this.post_action + '?authorization='+localStorage.tokens+ '&firmNo='+this.get_company_code+'&attcBusiDataCode=1';
            
    	    },
 
            submitUpload() {
                this.$refs.upload.submit();
            },
            handleRemove(file, fileList) {
               console.log(file, fileList);
            },
            handlePreview(file) {
               console.log(file);
            },
       
//  	    origin_query: function(){
//  		
//  		this.ruleForm=this.$store.state.ruleForm;
//  
//  		this.ruleForm.firmName_show=this.$store.state.ruleForm.mainFirmName;
//  	
//  		this.ruleForm.mainFirmId=this.$store.state.ruleForm.mainFirmCertNo;
//  		
//  		alert("success");
//  		console.log(this.ruleForm);
//  		
//  		if(this.$store.state.ruleForm.acctTypeCode!==""){
//  			
//  			this.modify=true;
//  		}
//  	  },
    
    	    get_company_code_fun:  function(){
            	
            //localStorage.localhost="http://172.16.5.166:9095";
	        
            var selelct_url=localStorage.localhost+'/enterpriseFacade/gotoAdd'
                	
            this.criteria={};
                	
            var current_token=localStorage.tokens;
                	
            this.criteria.authorization=current_token;
             
            this.$http.post(selelct_url,this.criteria,{emulateJSON: true}).then(function(res){
               
            this.get_company_code=res.body.data.firmNo;
            
            console.log(this.get_company_code);
            this.origin_data();
            
            },function(res){
                    	
              console.log('ajax failed');
              console.log(res);
                        
            });       
            },
    	   get_cities: function(){
    	   	
    	   	this.origin_select_city_type();
    	   },
    	    origin_select_city_type: function(){
            	
            //localStorage.localhost="http://172.16.5.166:9095";
	        
            var selelct_url=localStorage.localhost+'/sysCommons/getCitysByPrinvinceCode'
                	
            this.criteria={};
                	
            var current_token=localStorage.tokens;
                	
            this.criteria.authorization=current_token;
            
            this.criteria.prinvinceCode=$("#province_type").val();
             
            this.$http.post(selelct_url,this.criteria,{emulateJSON: true}).then(function(res){
               
               this.selections=res.body.data;
               
                $("#city_type").html(" ");
                
               for(var i=0; i<res.body.data.length;i++){
               	 
               	  $("#city_type").append('<option value="'+res.body.data[i].regionCode+'">'+res.body.data[i].regionName+'</option>');
               }
               
            },function(res){
                    	
              console.log('ajax failed');
              console.log(res);
                        
            });       
            },
            
    	    origin_select_province_type: function(){
            	
            //localStorage.localhost="http://172.16.5.166:9095";
	        
            var selelct_url=localStorage.localhost+'/sysCommons/getProvinces'
                	
            this.criteria={};
                	
            var current_token=localStorage.tokens;
                	
            this.criteria.authorization=current_token;
             
            this.$http.post(selelct_url,this.criteria,{emulateJSON: true}).then(function(res){
               
               this.selections=res.body.data;
               
               for(var i=0; i<res.body.data.length;i++){
               	
               	  $("#province_type").append('<option value="'+res.body.data[i].regionCode+'">'+res.body.data[i].regionName+'</option>');
               }
               
               
               
            },function(res){
                    	
              console.log('ajax failed');
              console.log(res);
                        
            });       
            },
            
    	    origin_select_bank_type: function(){
            	
            //localStorage.localhost="http://172.16.5.166:9095";
	        
            var selelct_url=localStorage.localhost+'/dictDataCommFacade/getSysDictDataList'
                	
            this.criteria={};
                	
            var current_token=localStorage.tokens;
                	
            this.criteria.authorization=current_token;
            
            this.criteria.dictTypeCode="BANK";
                                   
//           console.log(this.criteria);
             
            this.$http.post(selelct_url,this.criteria,{emulateJSON: true}).then(function(res){
                    	
//             console.log(res);
               
               this.selections=res.body.data.list;
               
               for(var i=0; i<res.body.data.list.length;i++){
               	
               	  $("#bank_type").append('<option value="'+res.body.data.list[i].dictDataCode+'">'+res.body.data.list[i].dictDataName+'</option>');
               }
               
            },function(res){
                    	
//            console.log('ajax failed');
//            console.log(res);
                        
            });       
            },
    	
    	    origin_select_acct_type: function(){
            	
            //localStorage.localhost="http://172.16.5.166:9095";
	        
            var selelct_url=localStorage.localhost+'/dictDataCommFacade/getSysDictDataList'
                	
            this.criteria={};
                	
            var current_token=localStorage.tokens;
                	
            this.criteria.authorization=current_token;
            
            this.criteria.dictTypeCode="FIRM_ACCT_TYPE";
                                   
//           console.log(this.criteria);
             
            this.$http.post(selelct_url,this.criteria,{emulateJSON: true}).then(function(res){
                    	
//             console.log(res);
               
               this.selections=res.body.data.list;
               
               for(var i=0; i<res.body.data.list.length;i++){
               	
               	  $("#acct_type").append('<option value="'+res.body.data.list[i].dictDataCode+'">'+res.body.data.list[i].dictDataName+'</option>');
               }
               
            },function(res){
                    	
//            console.log('ajax failed');
//            console.log(res);
                        
            });       
            },
    	   origin_select_data_code: function(){
            	//getAllProcStatusList
            	//acct_type
            //localStorage.localhost="http://172.16.5.166:9095";
	        
            var selelct_url=localStorage.localhost+'/dictDataCommFacade/getSysDictDataList'
                	
            this.criteria={};
                	
            var current_token=localStorage.tokens;
                	
            this.criteria.authorization=current_token;
            
            this.criteria.dictTypeCode="FIRM_CERT_TYPE";
                                   
//           console.log(this.criteria);
             
            this.$http.post(selelct_url,this.criteria,{emulateJSON: true}).then(function(res){
                    	
//             console.log(res);
               
               this.selections=res.body.data.list;
               
               for(var i=0; i<res.body.data.list.length;i++){
               	
               	  $("#select_choice").append('<option value="'+res.body.data.list[i].dictDataCode+'">'+res.body.data.list[i].dictDataName+'</option>');
               }
               
            },function(res){
                    	
//            console.log('ajax failed');
//            console.log(res);
                        
            });       
            },
            
    	    select_table_choice:function(){
    	    	
 	    	   console.log(this.highlightId);
    	    	
    	    	this.ruleForm.firmName_show=this.highlightId.firmName;
    	    	this.ruleForm.mainFirmId=this.highlightId.id;
    	    	
    	    	this.ruleForm.firmNo=this.highlightId.firmCertNo;
    	    	
    	    	this.dialogVisible_ten=false;
    	    },
    	    search_form: function(){
    	   	//console.log(this.s_ruleForm);
    	   	 var s_time = new Date(this.s_ruleForm.startDate);
    	   	 
             var y = s_time.getFullYear();
             var m = s_time.getMonth()+1;
                 if(m<10){
                 	m='0'+m;
                 }
             var d = s_time.getDate();
                 if(d<10){
                 	d='0'+d;
                 }
             this.s_ruleForm.startDate=y+'-'+m+'-'+d;
             
            var n_time = new Date(this.s_ruleForm.endDate);
    	   	 
             var y = n_time.getFullYear();
             var m = n_time.getMonth()+1;
                 if(m<10){
                 	m='0'+m;
                 }
             var d = n_time.getDate();
                 if(d<10){
                 	d='0'+d;
                 }
             this.s_ruleForm.endDate=y+'-'+m+'-'+d;
             
    	   	this.criteria=this.s_ruleForm;
    	   	
    	   	//localStorage.localhost="http://172.16.5.166:9095";
                	
            this.url=localStorage.localhost+'/enterpriseFacade/getEnterprise'
                	
    	    this.criteria.pageIndex=this.currentPage;
                	
            this.criteria.pageSize=this.pagesize;
            
            var current_token=localStorage.tokens;
                	
            this.criteria.authorization=current_token;
            
            //console.log(this.criteria);
            
            this.$http.post(this.url,this.criteria,{emulateJSON: true}).then(function(res){
                    	
//            console.log(res);
        
              this.s_tableData=res.body.data.enterpriseList;
              
              this.totalCount=res.body.data.total;
                        
            },function(res){
                    	
//            console.log('ajax failed');
//            console.log(res);
                        
            });
            
            this.s_ruleForm.bankAcct='';
            this.s_ruleForm.corporateMobile='';
            this.s_ruleForm.corporateName='';
            this.s_ruleForm.endDate='';
            this.s_ruleForm.firmCertNo='';
            this.s_ruleForm.firmName='';
            this.s_ruleForm.startDate='';
            
    	   },
    	   //从服务器读取数据
           loadData: function(){ 
        	
            // localStorage.localhost="http://172.16.5.166:9095";
                	
            this.url=localStorage.localhost+'/enterpriseFacade/getEnterprise'
                	
            this.criteria={};
                	
            this.criteria.pageIndex=this.currentPage;
                	
            this.criteria.pageSize=this.pagesize;
                	
            var current_token=localStorage.tokens;
                	
            this.criteria.authorization=current_token;

            this.$http.post(this.url,this.criteria,{emulateJSON: true}).then(function(res){
                    	
//            console.log(res);
        
              this.s_tableData=res.body.data.enterpriseList;
              
              this.totalCount=res.body.data.total;
                        
            },function(res){
                    	
//            console.log('ajax failed');
//            console.log(res);
                        
            });       
            
            }, 
             //时间格式化  
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
            
            //时间格式化  
            isMaindateFormat:function(row, column) { 
            	
            var a={};
            	
            if(row.isMain=="1"){
             	a="是"
             }else{
             	a="否"
             }
            
             return a ;
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
//                              console.log('failed');
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
//                      console.log('failed');
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

    	    origin_select_data: function(){

            // localStorage.localhost="http://172.16.5.166:9095";
	        
            var selelct_url=localStorage.localhost+'/dictDataCommFacade/getSysDictDataList'
                	
            this.criteria={};
                	
            var current_token=localStorage.tokens;
                	
            this.criteria.authorization=current_token;
            //dictTypeCode：ITEM_STATUS
            this.criteria.dictTypeCode="ITEM_STATUS";
            
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
    	show_model(){
           this.dialogVisible_ten=true;
           this.loadData();
    	},
    	changeValue_type(){
//  		alert($("#select_choice").val());
    	if($("#select_choice").val()=="1"){
     		
     		this.options_right_1=true;
     		this.options_right_2=false;
     		
     	}else{
     		this.options_right_1=false;
     		this.options_right_2=true;
     	}
     	
    	},
        changeValue(){
     	console.log(this.ruleForm.isMain);
     	if(this.ruleForm.isMain=="1"){
     		
     		this.options_left=false;
     		
     	}else{
     		this.options_left=true;
     	}
     },
    //*********************************************************************************************************
      submitForm(formName) {
        
       
            //alert('submit!');
//        if(
//        this.ruleForm.isMain!==''&&
//        this.ruleForm.firmName_show!==''&&
//        this.ruleForm.mainFirmId!==''&&
//        this.ruleForm.firmNo!==''&&
//        
//        this.ruleForm.firmName!==''&&
//        this.ruleForm.firmCertTypeCode!==''&&
//        this.ruleForm.firmCertTypeName!==''&&
//        this.ruleForm.firmCertNo!==''&&
//        
//        this.ruleForm.corporateName!==''&&
//        this.ruleForm.corporateCertValue!==''&&
//        this.ruleForm.corporateMobile!==''&&
//        
//        this.ruleForm.firmAdress!==''&&
//        this.ruleForm.corporateAddress!==''&&
//        
//        this.ruleForm.acctTypeCode!==''&&
//        this.ruleForm.acctTypeName!==''&&
//        this.ruleForm.bankCode!==''&&
//        this.ruleForm.bankName!==''&&
//        this.ruleForm.bankAcct!==''&&
//        
//        this.ruleForm.provinceCode!==''&&
//        this.ruleForm.provinceName!==''&&
//        this.ruleForm.cityCode!==''&&
//        this.ruleForm.cityName!==''&&
//        this.ruleForm.bankBranchName!==''
//        ){
          	
          this.postForm();
          this.submitUpload();
            
//        }else{
//          	this.dialogVisible_three=true;
//        }
           
          
    },
    postForm(){
       
       if(this.modify==true){
       	
       	var jsonObj=this.ruleForm;
    	
    	var current_token=localStorage.tokens;	
        jsonObj.authorization=current_token;
    	
        jsonObj.firmCertTypeCode=$("#select_choice").val();
        jsonObj.firmCertTypeName=$("#select_choice").find("option:selected").text();
        
        jsonObj.acctTypeCode=$("#acct_type").val();
        jsonObj.acctTypeName=$("#acct_type").find("option:selected").text();
        
        jsonObj.bankCode=$("#bank_type").val();
        jsonObj.bankName=$("#bank_type").find("option:selected").text();
        
        jsonObj.provinceCode=$("#province_type").val();
        jsonObj.provinceName=$("#province_type").find("option:selected").text();
        
        jsonObj.cityCode=$("#city_type").val();
        jsonObj.cityName=$("#city_type").find("option:selected").text();
      
    	
    	jsonObj.isMain=this.ruleForm.isMain;
    	jsonObj.firmNo=this.$store.state.firmNo;
    	
    	 console.log(".................");
    	console.log(this.$store.state.firmNo);
    	console.log(jsonObj);
    	 console.log(".................");
    	 
    	this.url=localStorage.localhost+"/enterpriseFacade/updateEnterprise";
    	
    	this.$http.post(this.url,jsonObj,{emulateJSON: true}).then(
            (response)=>{
                console.log(response); 
                this.resetForm();
                if(response.body.code=="000000"){
                	alert("success");
                }else{
                	 alert(response.body.msg);
                }
            },
            (error)=>{
                console.log(error );
                console.log("请求失败。。。。");
                
            });
       	
       }else{
       
    	var jsonObj=this.ruleForm;
    	
    	var current_token=localStorage.tokens;	
        jsonObj.authorization=current_token;
    	
        jsonObj.firmCertTypeCode=$("#select_choice").val();
        jsonObj.firmCertTypeName=$("#select_choice").find("option:selected").text();
        
        jsonObj.acctTypeCode=$("#acct_type").val();
        jsonObj.acctTypeName=$("#acct_type").find("option:selected").text();
        
        jsonObj.bankCode=$("#bank_type").val();
        jsonObj.bankName=$("#bank_type").find("option:selected").text();
        
        jsonObj.provinceCode=$("#province_type").val();
        jsonObj.provinceName=$("#province_type").find("option:selected").text();
        
        jsonObj.cityCode=$("#city_type").val();
        jsonObj.cityName=$("#city_type").find("option:selected").text();
      
    	
    	jsonObj.isMain=this.ruleForm.isMain;
    	jsonObj.firmNo=this.get_company_code;
    	
    	console.log(jsonObj);
    	
    	this.url=localStorage.localhost+"/enterpriseFacade/addEnterprise";
    	
    	this.$http.post(this.url,jsonObj,{emulateJSON: true}).then(
            (response)=>{
                console.log(response); 
                
                this.get_company_code=response.body.data.firmNo;
                console.log(this.get_company_code);
                this.resetForm();
                if(response.body.resultCode=="000000"){
                	this.dialogVisible_evel=true;
                }else{
                	this.dialogVisible_tew=true;
                }
            },
            (error)=>{
                console.log(error );
                console.log("请求失败。。。。");
                
            }
        );
        
       }
    },
    handleRemove(file, fileList) {
        
        console.log(file, fileList);
    },
    handlePreview(file) {
        console.log(file);
    },
    resetForm(){
    	this.fileList=[];
    	
    	this.ruleForm={
        	
          isMain:'',
          firmName_show:'',
          mainFirmId:'',
          firmNo:'',
          
          firmName:'',
          firmCertTypeCode:'',
          firmCertTypeName:'',
          firmCertNo:'',
          
          corporateName:'',
          corporateCertValue:'',
          corporateMobile:'',
          
          firmAdress:'',
          corporateAddress:'',
          
          acctTypeCode:'',
          acctTypeName:'',
          bankCode:'',
          bankName:'',
          bankAcct:'',
          
          provinceCode:'',
          provinceName:'',
          cityCode:'',
          cityName:'',
          bankBranchName:'',
          
       };
    }
    //*********************************************************************************************************
    }
  }
</script>