<style scoped>  
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
.select_bar{
	width:100%;
	height:150px;
	padding:20px;
	float:left;
	margin-bottom:20px;
	background-color: #ffffff;
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
	.change_row_size_more{
		width:110%;
	}
	.select_bar{
		height:150px;
	}
}
.part_title{
	line-height:50px;
	border:0px solid #3074BD;
	padding-left:20px;
	color:#1d8ec0;
	font-weight:600;
	font-size:14px !important;
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
<!--删除模态框开始-->
<!----------------------------->
<el-dialog
  title="提示"
  :visible.sync="dialogVisible_success"
  size="tiny"
  :modal-append-to-body="false"
  :close-on-click-modal="false">
  <span>删除成功</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible_success = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible_success = false">确 定</el-button>
  </span>
</el-dialog>
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
<el-dialog
  title="提示"
  :visible.sync="dialogVisible_second"
  :modal-append-to-body="false"
  size="tiny"
  :close-on-click-modal="false">
  <span>请确定删除这条记录？</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible_second = false">取 消</el-button>
    <el-button type="primary" @click="submit_delete">确 定</el-button>
  </span>
</el-dialog>		
<!----------------------------->
<!---删除模态框结束-------------------------->

<!-----修改模态框开始-------------------------->
<el-dialog
  title="修改企业信息"
  :visible.sync="dialogVisible_forth"
  :modal-append-to-body="false"
  size="large"
  :close-on-click-modal="false">
 
<!--------------表单录入---------------------------------------------->
<el-form :model="m_ruleForm"  ref="ruleForm" label-width="150px" class="demo-ruleForm">


<div class="part_title" v-text="basic_info"></div>
<!--------------------表单第一行开始---------------------------->
<el-row>
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="主体企业" prop="value1">
         <el-select v-model="m_ruleForm.isMain" :disabled="the_flag" @change="changeValue" placeholder="请选择" class="new_input_style">
            <el-option label="是" value="1"></el-option>
            <el-option label="否" value="0"></el-option>
         </el-select>
        </el-form-item>
  	</div>
  </el-col>
  
  <el-col :span="8">
  	<div class="grid-content bg-purple-light">
  		<el-form-item label="主体企业" prop="value2" v-show="options_left">
            <el-input v-model="m_ruleForm.firmName_show" :disabled="the_flag" placeholder="请填写主体企业" class="new_input_style"></el-input>
            <span class="el-icon-search" :disabled="the_flag" @click="show_model"></span>
        </el-form-item>
  	</div>
  </el-col>
  
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="主体企业证件号" prop="value3" v-show="options_left">
            <el-input v-model="m_ruleForm.firmNo" :disabled="the_flag" placeholder="请填写主体企业证件号" class="new_input_style"></el-input>
        </el-form-item>
  	</div>
  </el-col>
  
</el-row>
<!-------------表单第二行开始--------------------------->
<el-row>
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="企业名称" prop="value4">
            <el-input v-model="m_ruleForm.firmName" :disabled="the_flag" placeholder="请填写企业名称" class="new_input_style"></el-input>
        </el-form-item>
  	</div>
  </el-col>
  
  <el-col :span="8">
  	<div class="grid-content bg-purple-light">
  		<el-form-item label="企业证件类型" prop="value5">
            <select id="m_select_choice" :disabled="the_flag" class="select_style"></select>
        </el-form-item>
  	</div>
  </el-col>
  
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="社会信用代码" prop="value6" v-show="options_right_2">
            <el-input v-model="m_ruleForm.firmCertNo" :disabled="the_flag" placeholder="请填写社会信用代码" class="new_input_style"></el-input>
        </el-form-item>
        
        <el-form-item label="组织机构代码" prop="value6" v-show="options_right_1">
            <el-input v-model="m_ruleForm.firmCertNo" :disabled="the_flag" placeholder="组织机构代码" class="new_input_style"></el-input>
        </el-form-item> 
  	</div>
  </el-col>
</el-row>

<!----------------表单第三行开始------------------------------------->

<el-row>
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  	    <el-form-item label="法人名称" prop="value7">
            <el-input v-model="m_ruleForm.corporateName" :disabled="the_flag" placeholder="请填写法人名称" class="new_input_style"></el-input>
        </el-form-item>
    </div>
  </el-col>
  <el-col :span="8">
  	<div class="grid-content bg-purple-light">
  		<el-form-item label="法人证件号码" prop="value8">
            <el-input v-model="m_ruleForm.corporateCertValue" :disabled="the_flag" placeholder="请填写法人证件号码" class="new_input_style"></el-input>
        </el-form-item>
  	</div>
  </el-col>
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="法人手机号码" prop="value9">
            <el-input v-model="m_ruleForm.corporateMobile" :disabled="the_flag" placeholder="请填写法人手机号码" class="new_input_style"></el-input>
        </el-form-item>
  	</div>
  </el-col>
</el-row>

<!-----------------------表单第四行开始--------------------------------------------->
<el-row>
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="企业经营地址" prop="value10">
            <el-input v-model="m_ruleForm.firmAdress" :disabled="the_flag" placeholder="请填写企业经营地址" class="new_input_style"></el-input>
        </el-form-item>
  	</div>
  </el-col>
  <el-col :span="8">&nbsp;</el-col>
  <el-col :span="8">
  	<div class="grid-content bg-purple-light">
  		<el-form-item label="法人居住地址" prop="value11">
            <el-input v-model="m_ruleForm.corporateAddress" :disabled="the_flag" placeholder="请填写法人居住地址" class="new_input_style"></el-input>
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
         <select id="m_acct_type" :disabled="the_flag" class="select_style"></select>
        </el-form-item>
  	</div>
  </el-col>
  
  <el-col :span="8">
  	<div class="grid-content bg-purple-light">
  		<el-form-item label="开户银行" prop="value13">
         <select id="m_bank_type" :disabled="the_flag" class="select_style"></select>
        </el-form-item>
  	</div>
  </el-col>
  
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="对公账号" prop="value14">
            <el-input v-model="m_ruleForm.bankAcct" :disabled="the_flag" placeholder="填写对公账号" class="new_input_style"></el-input>
        </el-form-item>
  	</div>
  </el-col>
</el-row>
<!-----------------------表单第五行开始--------------------------------------------->

<el-row>
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="开户省" prop="value15">
         <select id="m_province_type" @change="get_cities" :disabled="the_flag" class="select_style"></select>
        </el-form-item>
  	</div>
  </el-col>
  
  <el-col :span="8">
  	<div class="grid-content bg-purple-light">
  		<el-form-item label="开户城市" prop="value16">
         <select id="m_city_type" class="select_style" :disabled="the_flag"></select>
        </el-form-item>
  	</div>
  </el-col>
  
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="开户支行" prop="value17">
            <el-input v-model="m_ruleForm.bankBranchName" :disabled="the_flag" placeholder="填写开户支行" class="new_input_style"></el-input>
        </el-form-item>
  	</div>
  </el-col>
</el-row>

<!----------------------------------------------------------->


</el-form>

<div class="part_title" v-text="enclosure_info"></div>
<el-upload
	ref="upload"
    class="upload-demo"
    :action="post_action"
    :data="post_data"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :file-list="fileList"
    :auto-upload="false">
     <el-button slot="trigger" size="small" type="primary" :disabled="flag">选取文件</el-button>
     <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
     <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
     <div slot="tip" class="el-upload__tip">企业资料上传清单：营业执照，开户许可证， 法人身份证，公司章程， 企业及法人征信。</div>
     <div slot="tip" class="el-upload__tip">财务资料上传清单：财务报表，财务科目明细， 银行流水。</div>
     <div slot="tip" class="el-upload__tip">其他：经营地址证明，推荐单位意见表，现场照片。</div>

</el-upload>



<!----------------------------------------------------------->
   <el-table
      :data="enclosure_tableData"
      height="200"
      style="width: 100%">
      
      <el-table-column
        prop="rowId"
        label="序号"
        width="80">
      </el-table-column>
      
      <el-table-column
        prop="attcName"
        label="附件名称"
        width="180">
      </el-table-column>
      
      <el-table-column
        prop="attcSuffix"
        label="后缀"
        width="180">
      </el-table-column>
      
      <el-table-column
        prop="createTime"
        label="创建时间"
        :formatter="dateFormat"
        width="180">
      </el-table-column>
      
      <el-table-column
        prop="creater"
        label="创建人"
        width="180">
      </el-table-column>
      
       <el-table-column label="操作">
      <template scope="scope">
        <el-button
          size="small"
          type="primary"
          @click="handleEdit(scope.$index, scope.row)">预览</el-button>
          
        <el-button
          size="small"
          type="danger"
          :disabled="flag"
          @click="deleteEdit(scope.$index, scope.row)">删除</el-button>
          
      </template>
      </el-table-column>
    </el-table>
<!------------------------------------------------------------>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible_forth = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible_forth = false">确 定</el-button>
  </span>
</el-dialog>
<!-----修改模态框结束---------------------------------->










<!--------查看模态框开始------------------------------------------->
<!-------------------------------------------------------------->
<el-dialog
  title="查看企业信息"
  :visible.sync="dialogVisible_third"
  :modal-append-to-body="false"
  size="large"
  :close-on-click-modal="false">
<!----------------------------------------------------------->
<el-form :model="ruleForm"  ref="ruleForm" label-width="150px" class="demo-ruleForm">
	
<div class="part_title" v-text="basic_info"></div>
<!--------------------表单第一行开始---------------------------->
<el-row>
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="主体企业">
            <el-input v-model="ruleForm.isMain"  :disabled="true"  class="new_input_style"></el-input>
        </el-form-item>
  	</div>
  </el-col>
  
  <el-col :span="8">
  	<div class="grid-content bg-purple-light">
  		<el-form-item label="主体企业">
            <el-input v-model="ruleForm.firmName_show"  :disabled="true" class="new_input_style"></el-input>
        </el-form-item>
  	</div>
  </el-col>
  
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="主体企业证件号">
            <el-input v-model="ruleForm.firmNo"  :disabled="true" class="new_input_style"></el-input>
        </el-form-item>
  	</div>
  </el-col>
  
</el-row>
<!-------------表单第二行开始--------------------------->
<el-row>
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="企业名称" >
            <el-input v-model="ruleForm.firmName"  :disabled="true" class="new_input_style"></el-input>
        </el-form-item>
  	</div>
  </el-col>
  
  <el-col :span="8">
  	<div class="grid-content bg-purple-light">
  		<el-form-item label="企业证件类型" >
            <el-input id="select_choice" :disabled="true" class="select_style"></el-input>
        </el-form-item>
  	</div>
  </el-col>
  
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="社会信用代码"  >
            <el-input v-model="ruleForm.firmCertNo" :disabled="true" class="new_input_style"></el-input>
       </el-form-item>
  	</div>
  </el-col>
</el-row>

<!----------------表单第三行开始------------------------------------->

<el-row>
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  	    <el-form-item label="法人名称" >
            <el-input v-model="ruleForm.corporateName" :disabled="true" class="new_input_style"></el-input>
        </el-form-item>
    </div>
  </el-col>
  <el-col :span="8">
  	<div class="grid-content bg-purple-light">
  		<el-form-item label="法人证件号码" >
            <el-input v-model="ruleForm.corporateCertValue" :disabled="true" class="new_input_style"></el-input>
        </el-form-item>
  	</div>
  </el-col>
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="法人手机号码">
            <el-input v-model="ruleForm.corporateMobile"  :disabled="true" class="new_input_style"></el-input>
        </el-form-item>
  	</div>
  </el-col>
</el-row>

<!-----------------------表单第四行开始--------------------------------------------->
<el-row>
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="企业经营地址" >
            <el-input v-model="ruleForm.firmAdress" :disabled="true" class="new_input_style"></el-input>
        </el-form-item>
  	</div>
  </el-col>
  <el-col :span="8">&nbsp;</el-col>
  <el-col :span="8">
  	<div class="grid-content bg-purple-light">
  		<el-form-item label="法人居住地址">
            <el-input v-model="ruleForm.corporateAddress" :disabled="true" class="new_input_style"></el-input>
        </el-form-item>
  	</div>
  </el-col>
</el-row>

<div class="part_title" v-text="card_info"></div>


<!-----------------------表单第五行开始--------------------------------------------->

<el-row>
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="账户类型" >
        <el-input  v-model="ruleForm.acctTypeName" id="acct_type" :disabled="true" class="select_style"></el-input>
        </el-form-item>
  	</div>
  </el-col>
  
  <el-col :span="8">
  	<div class="grid-content bg-purple-light">
  		<el-form-item label="开户银行" >
         <el-input v-model="ruleForm.bankName" id="bank_type" :disabled="true" class="select_style"></el-input>
        </el-form-item>
  	</div>
  </el-col>
  
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="对公账号" >
            <el-input v-model="ruleForm.bankAcct" :disabled="true" class="new_input_style"></el-input>
        </el-form-item>
  	</div>
  </el-col>
</el-row>
<!-----------------------表单第五行开始--------------------------------------------->

<el-row>
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="开户省" prop="value15">
         <el-input v-model="ruleForm.provinceName" id="province_type" :disabled="true" class="select_style"></el-input>
        </el-form-item>
  	</div>
  </el-col>
  
  <el-col :span="8">
  	<div class="grid-content bg-purple-light">
  		<el-form-item label="开户城市" prop="value16">
         <el-input v-model="ruleForm.cityName" :disabled="true" class="select_style" ></el-input>
        </el-form-item>
  	</div>
  </el-col>
  
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="开户支行" prop="value17">
            <el-input v-model="ruleForm.bankBranchName" :disabled="true" class="new_input_style"></el-input>
        </el-form-item>
  	</div>
  </el-col>
</el-row>
</el-form>

<div class="part_title" v-text="enclosure_info"></div>
    <el-table
      :data="enclosure_tableData"
      height="200"
      style="width: 100%">
      
      <el-table-column
        prop="rowId"
        label="序号"
        width="180">
      </el-table-column>
      
      <el-table-column
        prop="attcName"
        label="附件名称"
        width="280">
      </el-table-column>
      
      <el-table-column
        prop="attcSuffix"
        label="后缀"
        width="180">
      </el-table-column>
      
      <el-table-column
        prop="createTime"
        label="创建时间"
        :formatter="dateFormat"
        width="180">
      </el-table-column>
      
      <el-table-column
        prop="creater"
        label="创建人"
        width="180">
      </el-table-column>
      
       <el-table-column label="操作">
      <template scope="scope">
        <el-button
          size="small"
          type="primary"
          name="operations_btn"
          @click="handleEdit(scope.$index, scope.row)">预览</el-button>
      </template>
      </el-table-column>
    </el-table>

  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible_third = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible_third = false">确 定</el-button>
  </span>
</el-dialog>
<!---------------------------------------------------------------->
<!------查看模态框结束------------------------------------------------->






<!-----4.1企业信息查询表单开始-------------------------------------------------------------------->
 <div class="form_area" style="background-color: #ffffff;padding-top:20px;float:left;width:100%;">
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
  
  <el-col :span="8" style="display:none;">
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
  
    <el-col :span="16">
  	<div class="grid-content bg-purple" style="text-align:left;padding-left:50px;">
        <el-button type="info" @click="btn_operation(button.btnCode)" v-for="button in buttons">{{button.btnName}}</el-button>
  	</div>
  </el-col>
  
</el-row>

</el-form>
</div>
<!----4.1企业信息查询表单结束--------------------------------------------------------------------->


<!------4.1企业信息查询表格看开始----------------------------------------------------------------->
<!----------------------------------------------------------------------------------------->
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
<!----------------------------------------------------------------------------------------->
<!------4.1企业信息查询表格结束------------------------------------------------------------------>

            
    
<div>
<el-dialog
  title="提示"
  :visible.sync="dialogVisible_ten"
  size="large"
  :modal-append-to-body="false"
  :close-on-click-modal="false">
 <div class="form_area">
<!------------------------------------------------------------------------->
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
  

  </div>
</template>


<script>
  import $ from 'jquery'
  export default {
    data() {
    	
      return {
      	dialogVisible_success:false,
        dialogVisible_error:false,
      	the_flag:false,
      	
      	flag:false,
      	
      	post_data:{},
        
        post_action:'http://172.18.100.196:7072/enterpriseFacade/uploadAttachment',
      	
      	modify:true,
      
      	get_company_code:'',
      	
      	options_right_1:true,
      	
      	options_right_2:false,
      	
        options_left:false,
      	//附件表格
      	enclosure_tableData:[],
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
        
        location:"您的位置    >  客户管理    >  企业信息查询",
        
        basic_info:"基本信息",
        
        card_info:"银行卡信息",
        
        enclosure_info:"附件信息",
        
        multipleSelection: [],
        
        details_id:'',
        
        dialogVisible_third:false,

        dialogVisible_second:false,
        
        dialogVisible_forth:false,
        
        dialogVisible_ten:false,
        
        search_char:'搜索',
        
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
        m_ruleForm: {
        	
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
        
        buttons:[],
        
        fileList:[]
        

      }
      
    },
  	mounted(){
  		
  		this.$nextTick(function() {  
  		
  			this.search_form();
  			
  			this.load_button();
  			
  		})
  	},
    methods: {
    	select_table_choice:function(){
    	    	
 	    	console.log(this.highlightId);
    	    	
    	    this.ruleForm.firmName_show=this.highlightId.firmName;
    	    this.ruleForm.mainFirmId=this.highlightId.id;
    	    	
    	    this.ruleForm.firmNo=this.highlightId.firmNo;
    	    	
    	    this.dialogVisible_ten=false;
    	},
    	show_model(){
           this.dialogVisible_ten=true;
           this.loadData();
    	},
    	changeValue_type(){
    	if(this.m_ruleForm.firmCertTypeName=="1"){
     		
     		this.options_right_1=true;
     		this.options_right_2=false;
     		
     	}else if(this.m_ruleForm.firmCertTypeName=="0"){
     		
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
    	    handleEdit(index, row){
    	    	
    	    	 var post_data={};
    	       	
    	       	 var current_token=localStorage.tokens;
                	
                 post_data.authorization=current_token;
    	       	
    	       	 post_data.id=row.id;
    	       	                                      
    	       	 var url=localStorage.localhost + '/firmLoanApplyFacade/previewAttachment';
    	       	    
    	       	 this.$http.post(url,post_data,{emulateJSON: true}).then(function(res){
    	       	    	
                   var the_resoult_url=res.body.data.url;
                   
                   window.open(the_resoult_url);
                    
                 },function(res){
                    	
                    console.log('ajax failed');
                    console.log(res);
                        
                    }); 
    	    },
    	    
    	       	deleteEdit(index, row){
    	    	
    	    	 var post_data={};
    	       	
    	       	 var current_token=localStorage.tokens;
                	
                 post_data.authorization=current_token;
    	       	
    	       	 post_data.id=row.id;
    	       	                                      
    	       	 var url=localStorage.localhost + '/firmLoanApplyFacade/deleteAttachment';
    	       	    
    	       	 this.$http.post(url,post_data,{emulateJSON: true}).then(function(res){
    	       	    	
                this.update_btn();
                   
                    
                 },function(res){
                    	
                    console.log('ajax failed');
                    console.log(res);
                        
                    }); 
    	    },
    	    
    	    
    	    btn_operation: function(btnCode){
    	    	
    	    	console.log(btnCode);
    	    	
            if(btnCode=="delete_btn"){
            	
            	this.delete_btn();
            	
            }else if(btnCode=="update_btn"){
            	this.update_btn();
            	
            }else if(btnCode=="query_btn"){
            	this.search_form();
            	
            }else if(btnCode=="view_btn"){
            	this.view_btn();
            	
            }
    	    	
    	    },
    	    update_btn: function(){
    	    	
    	    	this.dialogVisible_forth=true;
    	    	
    	    	 var post_data={};
    	       	
    	       	 var current_token=localStorage.tokens;
                	
                 post_data.authorization=current_token;
    	       	
    	       	 post_data.firmNo=this.highlightId.firmNo;
    	       	                                      
    	       	 var url=localStorage.localhost + '/enterpriseFacade/gotoUpdate';
    	       	    
    	       	 this.$http.post(url,post_data,{emulateJSON: true}).then(function(res){
    	       	    	
    	       	 console.log(res);
    	       	 
                 var the_resoult=res.body.data.enterpriseList[0];
                 //mainFirmName
                 
                 this.m_ruleForm=the_resoult;
                 
                 this.m_ruleForm.firmName_show=the_resoult.mainFirmName;
                 
                 if(the_resoult.isMain=="0"){
                 	
                 	this.m_ruleForm.isMain="否";
                 	
                 }else if(the_resoult.isMain=="1"){
                 	
                 	this.m_ruleForm.isMain="是";
                 	
                 }
                 
                 this.firmNo=this.highlightId.firmNo;
                 
                 //prepend()
                 
                 $("#m_select_choice").prepend('<option selected="selected" value="'+the_resoult.firmCertTypeCode+'">'+the_resoult.firmCertTypeName+'</option>');
                 $("#m_acct_type").prepend('<option selected="selected" value="'+the_resoult.acctTypeCodeCode+'">'+the_resoult.acctTypeName+'</option>');
                 $("#m_bank_type").prepend('<option selected="selected"value="'+the_resoult.bankCode+'">'+the_resoult.bankName+'</option>');
                 $("#m_province_type").prepend('<option selected="selected" value="'+the_resoult.provinceCode+'">'+the_resoult.provinceName+'</option>');
    	       	 $("#m_city_type").prepend('<option selected="selected" value="'+the_resoult.cityCode+'">'+the_resoult.cityName+'</option>');
    	       	 
    	       	 if(res.body.data.allowModifyAttc==false){
    	       	 	console.log(res.body.data.allowModifyAttc);
//  	       	 	$("el-input").attr("disabled",'true');
                       this.the_flag="true";
                       $(".el-icon-search").css("display","none");
    	       	 }else if(res.body.data.allowModifyAttc==true){
 	       	 	       this.the_flag="false";
                       $(".el-icon-search").css("display","block");
    	       	 }
    	       	 
    	       	 if(res.body.data.allowModifyBase==false){
    	       	 	this.flag="true";
    	       	 }else if(res.body.data.allowModifyBase==true){
    	       	 	this.flag="false";
    	       	 }
    	       	 
    	       	 },function(error){
                 	console.log(error);
                 });

                   //调取附件表格内容
                 var e_post_data={};
                    
                 var current_token=localStorage.tokens;
                	
                     e_post_data.authorization=current_token;
                        
                     e_post_data.firmNo=this.highlightId.firmNo;
                        
                    e_post_data.attcBusiTypeCode='1';
                        
                    var e_url=localStorage.localhost+'/enterpriseFacade/queryAttachment';
                     
                    this.$http.post(e_url,e_post_data,{emulateJSON: true}).then(function(res){
                    
                    this.enclosure_tableData= res.body.data.sysAttachmentVoList;
                    
                    },function(res){
                    	
                    console.log('ajax failed');
                    console.log(res);
                        
                    }); 
                    
                    //执行弹出框的方法开始
                    this.origin_select_data_code();
  			
  			        this.origin_select_acct_type();
  			
  			        this.origin_select_bank_type();
  			
  			        this.origin_select_province_type();
  			
  			        this.get_company_code_fun();
  			
  			        this.origin_data();
                    //执行弹出框方法结束
                    
    	    },
    	    view_btn: function(){
    	    	
    	    	    this.dialogVisible_third=true;
    	    	
    	    	    var post_data={};
    	       	
    	       	    var current_token=localStorage.tokens;
                	
                    post_data.authorization=current_token;
    	       	
    	       	    post_data.firmNo=this.highlightId.firmNo;
    	       	                                      
    	       	    var url=localStorage.localhost + '/enterpriseFacade/getEnterprise';
    	       	    //调取表单内容
    	       	    this.$http.post(url,post_data,{emulateJSON: true}).then(function(res){
    	       	    	
                    var the_resoult=res.body.data.enterpriseList[0];
              
                    this.ruleForm=the_resoult;
                    
                    this.ruleForm.firmName_show=the_resoult.mainFirmName;
    	
    		        this.ruleForm.mainFirmId=the_resoult.mainFirmCertNo;
                    
                    },function(res){
                    	
                    console.log('ajax failed');
                    console.log(res);
                        
                    }); 
                    
                    //调取附件表格内容
                    var e_post_data={};
                    
                    var current_token=localStorage.tokens;
                	
                        e_post_data.authorization=current_token;
                        
                        e_post_data.firmNo=this.highlightId.firmNo;
                        
                        e_post_data.attcBusiTypeCode='1';
                        
                    var e_url=localStorage.localhost+'/enterpriseFacade/queryAttachment';
                     
                    this.$http.post(e_url,e_post_data,{emulateJSON: true}).then(function(res){
    	       	    	
                    console.log(res);
                    
                    this.enclosure_tableData= res.body.data.sysAttachmentVoList;
                    

                    
                    },function(res){
                    	
                    console.log('ajax failed');
                    console.log(res);
                        
                    }); 
    	    },
    	    delete_btn:function(){
    	    	
    	    	this.dialogVisible_second=true;
    	    	
    	    },
    	    
    	    submit_delete:function(){
    	    	
    	    	this.dialogVisible_second=false;
    	    	
    	    	var post_data={};
    	       	
    	       	var current_token=localStorage.tokens;
                	
                    post_data.authorization=current_token;
                    
    	    	    post_data.firmNo=this.highlightId.firmNo;
    	    	    
    	    	var url=localStorage.localhost + '/enterpriseFacade/delEnterprise';
    	       	    
    	       	    console.log(post_data);
    	       	    
    	       	this.$http.post(url,post_data,{emulateJSON: true}).then(function(res){
                 if(res.body.resultCode == '000000'){
                 	this.dialogVisible_success=true;
                 }else{
                 	 this.dialogVisible_error=true;
                 }
               
                this.search_form();

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
    	       	    
    	       	    console.log(localStorage);
    	       	    
    	       	    var url=localStorage.localhost + '/user/getMeunBtnByRoleAndMenuId';
    	       	    
    	       	    this.$http.post(url,button_post_data,{emulateJSON: true}).then(function(res){
                    	
                    this.buttons=res.data.data;

                    },function(res){
                    	
                    console.log('ajax failed');
                    console.log(res);
                        
                    });    
    	       	  
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
                    	
              console.log(res);
        
              this.s_tableData=res.body.data.enterpriseList;
              
              this.totalCount=res.body.data.total;
                        
            },function(res){
                    	
              console.log('ajax failed');
              console.log(res);
                        
            });
            
            this.s_ruleForm.bankAcct='';
            this.s_ruleForm.corporateMobile='';
            this.s_ruleForm.corporateName='';
            this.s_ruleForm.endDate='';
            this.s_ruleForm.firmCertNo='';
            this.s_ruleForm.firmName='';
            this.s_ruleForm.startDate='';
            
    	   },
    	        show_details(){
    	        	console.log(this.highlightId);
    	        	this.dialogVisible=true;
    	        	
    	        },
    	        delete_selection(){
    	        	console.log(this.multipleSelection);
    	        	this.dialogVisible=true;
    	        },
                //从服务器读取数据
                loadData: function(){   
      
                	console.log(this.url);

                    this.$http.get(this.url,{parameter:criteria, pageNum:pageNum, pageSize:pageSize}).then(function(res){
                    	
                    	console.log(res);
                    	
                        this.tableData = res.data;
                        
                        console.log(this.tableData[0]);
                        
                    },function(){
                    	
                        console.log('failed');
                        
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
                	
                	var multiSelect=[];
                	
                	for(var i=0; i<val.length; i++){
                		multiSelect.push(val[i].id);
                	}
                	
                   this.multipleSelection=multiSelect;
                   
//                  this.multipleSelection = val;
//                  var last_index=this.multipleSelection.legth-1;
//                  this.highlightId = this.multipleSelection[last_index];
                    
                   
                },

                //点击行响应
                handleclick: function(row){
//              	console.log(row);
                    this.search_form();
                	this.highlightId=row;
//              	console.log(this.highlightId);
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
                	
                	this.dialogVisible_second=true;
                	
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
                    this.search_form()
                },

                //页码变更
                handleCurrentChange: function(val) {
                    this.currentPage = val;
                    this.search_form();
                },
                handleClose: function(){
                	
                },
                isMaindateFormat:function(row, column){
                	
                	var a={};
            	
                   if(row.isMain=="1"){
             	        a="是"
                   }else{
             	     a="否"
                    }
            
                    return a ;
                },
               
                handleRemove:function(){
                	
                },
                handlePreview:function(){
                	
                },
                enclosure_info:function(){
                	
                },
                card_info:function(){
                	
                },
                enclosure_info:function(){
                	
                },
                basic_info:function(){
                	
                },
                
                
                
 //*****************修改弹出框的方法开始**********************************************
    	    origin_data: function(){
            	
            var current_token=localStorage.tokens;
                	
            this.post_data.authorization=current_token;
            
            this.post_action='';
            
//          this.post_action=
            
            this.post_action=this.post_action + '?authorization='+localStorage.tokens+ '&firmNo='+'666'+'&attcBusiDataCode=1';
            
            
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
    
    	    get_company_code_fun:  function(){
	        
            var selelct_url=localStorage.localhost+'/enterpriseFacade/gotoAdd'
                	
            this.criteria={};
                	
            var current_token=localStorage.tokens;
                	
            this.criteria.authorization=current_token;
             
            this.$http.post(selelct_url,this.criteria,{emulateJSON: true}).then(function(res){
               
            this.get_company_code=res.body.data.firmNo;
              
          
            },function(res){
                    	
              console.log('ajax failed');
              console.log(res);
                        
            });       
            },
    	   get_cities: function(){
    	   	
    	   	this.origin_select_city_type();
    	   },
    	    origin_select_city_type: function(){
	        
            var selelct_url=localStorage.localhost+'/sysCommons/getCitysByPrinvinceCode'
                	
            this.criteria={};
                	
            var current_token=localStorage.tokens;
                	
            this.criteria.authorization=current_token;
            
            this.criteria.prinvinceCode=$("#m_province_type").val();
             
            this.$http.post(selelct_url,this.criteria,{emulateJSON: true}).then(function(res){
               
               this.selections=res.body.data;
               
                $("#m_city_type").html(" ");
                
               for(var i=0; i<res.body.data.length;i++){
               	 
               	  $("#m_city_type").append('<option value="'+res.body.data[i].regionCode+'">'+res.body.data[i].regionName+'</option>');
               }
               
            },function(res){
                    	
              console.log('ajax failed');
              console.log(res);
                        
            });       
            },
            
    	    origin_select_province_type: function(){
	        
            var selelct_url=localStorage.localhost+'/sysCommons/getProvinces'
                	
            this.criteria={};
                	
            var current_token=localStorage.tokens;
                	
            this.criteria.authorization=current_token;
             
            this.$http.post(selelct_url,this.criteria,{emulateJSON: true}).then(function(res){
               
               this.selections=res.body.data;
               
               for(var i=0; i<res.body.data.length;i++){
               	
               	  $("#m_province_type").append('<option value="'+res.body.data[i].regionCode+'">'+res.body.data[i].regionName+'</option>');
               }
               
               
               
            },function(res){
                    	
              
                        
            });       
            },
            
    	    origin_select_bank_type: function(){
            	
	        
            var selelct_url=localStorage.localhost+'/dictDataCommFacade/getSysDictDataList'
                	
            this.criteria={};
                	
            var current_token=localStorage.tokens;
                	
            this.criteria.authorization=current_token;
            
            this.criteria.dictTypeCode="BANK";
             
            this.$http.post(selelct_url,this.criteria,{emulateJSON: true}).then(function(res){

               
               this.selections=res.body.data.list;
               
               for(var i=0; i<res.body.data.list.length;i++){
               	
               	  $("#m_bank_type").append('<option value="'+res.body.data.list[i].dictDataCode+'">'+res.body.data.list[i].dictDataName+'</option>');
               }
               
            },function(res){
                    	
                        
            });       
            },
    	
    	    origin_select_acct_type: function(){
	        
            var selelct_url=localStorage.localhost+'/dictDataCommFacade/getSysDictDataList'
                	
            this.criteria={};
                	
            var current_token=localStorage.tokens;
                	
            this.criteria.authorization=current_token;
            
            this.criteria.dictTypeCode="FIRM_ACCT_TYPE";
                                   
             
            this.$http.post(selelct_url,this.criteria,{emulateJSON: true}).then(function(res){
                    	

               
               this.selections=res.body.data.list;
               
               for(var i=0; i<res.body.data.list.length;i++){
               	
               	  $("#m_acct_type").append('<option value="'+res.body.data.list[i].dictDataCode+'">'+res.body.data.list[i].dictDataName+'</option>');
               }
               
            },function(res){
                    	
                        
            });       
            },
    	   origin_select_data_code: function(){
	        
            var selelct_url=localStorage.localhost+'/dictDataCommFacade/getSysDictDataList'
                	
            this.criteria={};
                	
            var current_token=localStorage.tokens;
                	
            this.criteria.authorization=current_token;
            
            this.criteria.dictTypeCode="FIRM_CERT_TYPE";
             
            this.$http.post(selelct_url,this.criteria,{emulateJSON: true}).then(function(res){
               
               this.selections=res.body.data.list;
               
               for(var i=0; i<res.body.data.list.length;i++){
               	
               	  $("#m_select_choice").append('<option value="'+res.body.data.list[i].dictDataCode+'">'+res.body.data.list[i].dictDataName+'</option>');
               }
               
            },function(res){
                    	
                        
            });       
            },
            
 //*****************修改弹出框的方法结束**********************************************
                
      
    }
  }
</script>