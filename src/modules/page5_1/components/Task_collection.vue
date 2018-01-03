<style scoped>  
.submit_action_right_now{
	width:300Px;
	margin:0px auto;
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
.form_area{
	width:100%;
	height:200px;
	padding-top:20px;
	background-color: #ffffff;
	float:left;
	margin-bottom:20px;
}
.add_apply{
	width:99%;
	height:50px;
	line-height:30px;
	padding-top:20px;
	background-color: #ffffff;
	margin-bottom:20px;
	float:left;
	padding-left:20px;
	padding-right:200px;
}
.position_right{
	float:right;
	margin-right:100px;
}
.select_bar{
	width:100%;
	margin-top:20px;
}
.new_input_style{
	border-radius: 0px !important;
	width:190px !important;
}
.part_title{
	line-height:50px;
	border:0px solid #3074BD;
	padding-left:20px;
	color:#1d8ec0;
	font-weight:600;
	font-size:14px !important;
}
.el-dialog__footer{
	text-align: center !important;
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
.good_tips{
	width:91px;
	height:23px;
	background-image: url(../../../assets/good_tips.png);
	float:left;
	margin-right:10px;
}
.select_style{
	width:190px;
	height:36px;
	border:1px solid #bfcbd9;
	color:#999999;
}
.icon_style{
	width:36px;
	height:36px;
	float:right;
	border:0px solid red;
	position:absolute;
	top:10px;
	right:5px;
}
.icon_style:hover{
	cursor:pointer;
}
</style>  
<template>
	<div> 
		<div class="vue_location">
			<div class="page_location_icon"></div>
			<div class="page_location_content" v-text="location"></div>
		</div>
		<div class="add_apply el-upload__tip" slot="tip" style="font-size:14px;">
			<div class="good_tips"></div>
			第一步：点击添加贷款申请， 然后订单状态改为新建;
			第二步：选中订单状态为新建，点击申请，贷款发起成功; 
		</div>
<div class="form_area">
<div class="select_bar">
<el-form :model="ruleForm"  ref="ruleForm" label-width="100px" class="demo-ruleForm">
	
<el-row>
	
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  	    <el-form-item label="企业名称" prop="name">
            <el-input v-model="ruleForm.firmName" placeholder="选择企业名称" class="new_input_style"></el-input>
        </el-form-item>
    </div>
  </el-col>
  
  <el-col :span="8">
  	<div class="grid-content bg-purple-light">
  		<el-form-item label="企业证件号码" >
            <el-input v-model="ruleForm.firmCertNo" placeholder="选择企业证件号码" class="new_input_style"></el-input>
        </el-form-item>
  	</div>
  </el-col>
  
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="订单状态" >
            <select class="select_style" id="m_select_choice">
            	<option></option>
            </select>
        </el-form-item>
  	</div>
  </el-col>
  
</el-row>


<el-row>
	<el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="开始日期" prop="name">
            <el-date-picker
            v-model="ruleForm.createStartTime"
            type="date"
            class="new_input_style"
            placeholder="选择开始日期">
            </el-date-picker>
        </el-form-item>
  	</div>
  </el-col>
  
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="结束日期" prop="name">
            <el-date-picker
            v-model="ruleForm.createEndTime"
            type="date"
            class="new_input_style"
            placeholder="请选择结束日期">
            </el-date-picker>
        </el-form-item>
  	</div>
  </el-col>
  
  <el-col :span="8">
  	<div class="grid-content bg-purple" style="float:right;padding-right:110px;">
    </div>
  </el-col>
  
</el-row>

<el-row style="padding-left:100px;">
    <el-col :span="24">
  	<div class="grid-content bg-purple">
  	  <el-button type="primary" @click="btn_operation(button.btnCode)" v-for="button in buttons">{{button.btnName}}</el-button>
    </div>
    </el-col>
</el-row>

</el-form>

</div>
</div>
<!-------------------表单结束----------------------->

<!-------------------表格开始------------------------------>
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
            prop="applyNo"
            label="申请编号"
            width="250">
            </el-table-column>
            
            <el-table-column
            prop="processDefName"
            label="流程名称"
            width="200">
            </el-table-column>
    
            <el-table-column
            prop="firmName"
            label="企业名称"
            width="300">
            </el-table-column>
    
            <el-table-column
            prop="firmCertNo"
            label="企业证件号码"
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
            prop="applyAmount"
            label="借款金额（万元）"
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="deadlineName"
            label="借款期数"
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
            prop="contractDate"
            label="签约时间"
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="itemStatusName"
            label="订单状态"
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="currentNode"
            label="当前节点"
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="currProcStatusName"
            label="流程状态"
            width="400">
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
<!--------------------表格结束---------------------------->

<!-------------------模态框开始----------------------------------->
<el-dialog
  title="申请中"
  :visible.sync="dialogVisible_sixth"
  :modal-append-to-body="false"
  size="tiny"
  :close-on-click-modal="false">
  <span v-text="dialogVisible_sixth_content"></span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible_sixth = false">取 消</el-button>
    <el-button type="primary" @click="apply_submit">确 定</el-button>
  </span>
</el-dialog>


<el-dialog
  title="删除提示"
  :visible.sync="dialogVisible_forth"
  :modal-append-to-body="false"
  size="tiny"
  :close-on-click-modal="false">
  <span>请确定删除这条记录？</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible_forth = false">取 消</el-button>
    <el-button type="primary" @click="submit_delete">确 定</el-button>
  </span>
</el-dialog>


<el-dialog
  title="查看页面模态框"
  :visible.sync="dialogVisible_fifth"
  :modal-append-to-body="false"
  size="large"
  :close-on-click-modal="false">
  
<el-form :model="newForm" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm">
	
  <div class="part_title" v-text="basic_info"></div>
  
  <el-row>
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="申请编号" >
  		    <el-input v-model="newForm.applyNo" :disabled="true"  class="new_input_style"></el-input>
  		</el-form-item>
  	</div>
  </el-col>
  <el-col :span="8">
  	<div class="grid-content bg-purple-light">
  	</div>
  </el-col>
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  	</div>
  </el-col>
</el-row>

  <el-row>
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="申请日期">
  		    <el-input v-model="newForm.applyDate" :disabled="true"  class="new_input_style"></el-input>
  		</el-form-item>
  	</div>
  </el-col>
  <el-col :span="8">
  	<div class="grid-content bg-purple-light">
  		<el-form-item label="发起人">
  		    <el-input v-model="newForm.createName" :disabled="true"   class="new_input_style"></el-input>
  		</el-form-item>
  	</div>
  </el-col>
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="进件渠道">
  		    <el-input v-model="newForm.organName" :disabled="true"  class="new_input_style"></el-input>
  		</el-form-item>
  	</div>
  </el-col>
</el-row>

  <el-row>
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="企业名称" >
  		    <el-input v-model="newForm.firmName" :disabled="true"  class="new_input_style"></el-input>
  		</el-form-item>
  	</div>
  </el-col>
  <el-col :span="8">
  	<div class="grid-content bg-purple-light">
  		<el-form-item label="企业证件类型">
  		    <el-input v-model="newForm.firmCertTypeName" :disabled="true"  class="new_input_style"></el-input>
  		</el-form-item>
  	</div>
  </el-col>
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="企业证件号码" >
  		    <el-input v-model="newForm.firmCertNo" :disabled="true"  class="new_input_style"></el-input>
  		</el-form-item>
  	</div>
  </el-col>
</el-row>

  <el-row>
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="主体企业" >
  		    <el-input v-model="newForm.mainFirmName" :disabled="true"  class="new_input_style"></el-input>
  		</el-form-item>
  	</div>
  </el-col>
  <el-col :span="8">
  	<div class="grid-content bg-purple-light">
  		<el-form-item label="主体企业证件类型" >
  		    <el-input v-model="newForm.mainFirmCertTypeName" :disabled="true"  class="new_input_style"></el-input>
  		</el-form-item>
  	</div>
  </el-col>
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="主体企业证件号码" >
  		    <el-input v-model="newForm.mainFirmCertNo" :disabled="true"  class="new_input_style"></el-input>
  		</el-form-item>
  	</div>
  </el-col>
</el-row>

  <el-row>
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  	  	<el-form-item label="产品名称" >
  		    <el-input v-model="newForm.financeProductName" :disabled="true"  class="new_input_style"></el-input>
  		</el-form-item>
  	</div>
  </el-col>
  <el-col :span="8">
  	<div class="grid-content bg-purple-light">
  		<el-form-item label="借款金额" >
  		    <el-input v-model="newForm.applyAmount" :disabled="true"  class="new_input_style"></el-input>
  		</el-form-item>
  		<span>万元</span>
  	</div>
  </el-col>
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="期数" >
  		    <el-input v-model="newForm.deadlineName" :disabled="true"  class="new_input_style"></el-input>
  		</el-form-item>
  	</div>
  </el-col>
</el-row>

  <el-row>
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="还款方式" >
  		    <el-input v-model="newForm.repayTypeName" :disabled="true"  class="new_input_style"></el-input>
  		</el-form-item>
  	</div>
  </el-col>
  <el-col :span="8">
  	<div class="grid-content bg-purple-light">
  		<el-form-item label="发生方式" >
  		    <el-input v-model="newForm.creditWayName" :disabled="true"  class="new_input_style"></el-input>
  		</el-form-item>
  	</div>
  </el-col>
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  	    <el-form-item label="企业保证金" >
  		    <el-input v-model="newForm.firmDeposit" :disabled="true"  class="new_input_style"></el-input>
  		</el-form-item>
  	</div>
  </el-col>
</el-row>
  
<el-row style="display:none;">
  <el-col :span="6">
  	<div class="grid-content bg-purple">
  		<el-form-item label="担保企业名称" >
  		    <el-input v-model="newForm.value21" placeholder="担保企业名称" class="new_input_style"></el-input>
  		</el-form-item>
  	</div>
  </el-col>
  <el-col :span="6">
  	<div class="grid-content bg-purple-light">
  		<el-form-item label="担保企业证件类型">
  		    <el-input v-model="newForm.value22" placeholder="担保企业证件类型" class="new_input_style"></el-input>
  		</el-form-item>
  	</div>
  </el-col>
  <el-col :span="6">
  	<div class="grid-content bg-purple">
  	    <el-form-item label="社会信用代码">
  		    <el-input v-model="newForm.value23" placeholder="社会信用代码" class="new_input_style"></el-input>
  		</el-form-item>
  	</div>
  </el-col>
    <el-col :span="6">
  	<div class="grid-content bg-purple">
  	    <el-form-item label="组织机构代码">
  		    <el-input v-model="newForm.value24" placeholder="组织机构代码" class="new_input_style"></el-input>
  		</el-form-item>
  	</div>
  </el-col>
</el-row>


<div class="part_title" >担保人信息</div>
    <el-table
      :data="w_tableData"
      style="width: 100%">

      <el-table-column
        prop="guarantorName"
        label="担保人姓名"
        width="180">
      </el-table-column>
     
       <el-table-column
        prop="guarantorIdcard"
        label="担保人证件号码"
        width="180">
      </el-table-column>
      <el-table-column
        prop="guarantorMobile"
        label="担保人手机号">
      </el-table-column>

      <el-table-column
        prop="guarantorAddress"
        label="担保人地址"
        width="180">
      </el-table-column>
    </el-table>
 
<div class="part_title" >担保企业信息</div>
     <el-table
      :data="c_tableData"
      style="width: 100%">
      
      
      <el-table-column
        prop="guarFirmName"
        label="担保企业姓名"
        width="180">
      </el-table-column>
     
       <el-table-column
        prop="guarFirmCertName"
        label="担保企业证件类型"
        width="180">
      </el-table-column>
      <el-table-column
        prop="guarFirmCertNo"
        label="担保企业证件号码">
      </el-table-column>

    </el-table>
    
    <div class="part_title" v-text="enclosure_info"></div>

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
      </template>
      </el-table-column>
    </el-table>

</el-form>  

<el-row style="text-align: center;">
    <el-button type="success" @click="submit_form" class="submit_action_right_now">确 定</el-button>
    <div>
    	<div slot="tip" class="el-upload__tip">提交保存后，该订单状态变为新建订单，勾选新建订单，可直接提交贷款申请。</div>
    </div>
</el-row>

</el-dialog>
<!-------------------模态框结束----------------------------------->

<el-dialog
  title="添加贷款申请"
  :visible.sync="dialogVisible_thirdth_new"
  :modal-append-to-body="false"
  size="large"
  :close-on-click-modal="false">
  
<el-form :model="add_newForm"  ref="ruleForm" label-width="150px" class="demo-ruleForm">
	
  <div class="part_title" v-text="basic_info"></div>
  
  <el-row>
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="申请编号" >
  		    <el-input v-model="add_newForm.applyNo" :disabled="true"  class="new_input_style"></el-input>
  		</el-form-item>
  	</div>
  </el-col>
  <el-col :span="8">
  	<div class="grid-content bg-purple-light">
  	</div>
  </el-col>
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  	</div>
  </el-col>
</el-row>

  <el-row>
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="申请日期">
  		    <el-input v-model="add_newForm.applyDate" :disabled="true"  class="new_input_style"></el-input>
  		</el-form-item>
  	</div>
  </el-col>
  <el-col :span="8">
  	<div class="grid-content bg-purple-light">
  		<el-form-item label="发起人">
  		    <el-input v-model="add_newForm.createName" :disabled="true"   class="new_input_style"></el-input>
  		</el-form-item>
  	</div>
  </el-col>
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="进件渠道">
  		    <el-input v-model="add_newForm.organName" :disabled="true"  class="new_input_style"></el-input>
  		</el-form-item>
  	</div>
  </el-col>
</el-row>

  <el-row>
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="企业名称"  >
  		    <el-input v-model="add_newForm.firmName"   class="new_input_style"></el-input>
  		    <div class="icon_style el-icon-circle-check" @click="show_add_model"></div>
  		</el-form-item>
  	</div>
  </el-col>
  <el-col :span="8">
  	<div class="grid-content bg-purple-light">
  		<el-form-item label="企业证件类型">
  		    <el-input v-model="add_newForm.firmCertTypeName"   :disabled="true" class="new_input_style"></el-input>
  		</el-form-item>
  	</div>
  </el-col>
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="企业证件号码" >
  		    <el-input v-model="add_newForm.firmCertNo"   :disabled="true" class="new_input_style"></el-input>
  		</el-form-item>
  	</div>
  </el-col>
</el-row>

  <el-row>
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="主体企业" >
  		    <el-input v-model="add_newForm.mainFirmName"   class="new_input_style"></el-input>
  		</el-form-item>
  	</div>
  </el-col>
  <el-col :span="8">
  	<div class="grid-content bg-purple-light">
  		<el-form-item label="主体企业证件类型" >
  		    <el-input v-model="add_newForm.mainFirmCertTypeName"   :disabled="true" class="new_input_style"></el-input>
  		</el-form-item>
  	</div>
  </el-col>
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="主体企业证件号码" >
  		    <el-input v-model="add_newForm.mainFirmCertNo"  :disabled="true" class="new_input_style"></el-input>
  		</el-form-item>
  	</div>
  </el-col>
</el-row>

  <el-row>
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  	  	<el-form-item label="产品名称" >
  		    <select id="add_product_name" class="select_style"></select>
  		</el-form-item>
  	</div>
  </el-col>
  <el-col :span="8">
  	<div class="grid-content bg-purple-light">
  		<el-form-item label="借款金额" >
  		    <el-input v-model="add_newForm.applyAmount"   class="new_input_style"></el-input>
  		</el-form-item>
  		<span>万元</span>
  	</div>
  </el-col>
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="期数" >
  		    <select id="add_dead_line" class="select_style"></select>
  		</el-form-item>
  	</div>
  </el-col>
</el-row>

  <el-row>
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="还款方式" >
  		    <select id="add_repay_way" class="select_style"></select>
  		</el-form-item>
  	</div>
  </el-col>
  <el-col :span="8">
  	<div class="grid-content bg-purple-light">
  		<el-form-item label="发生方式" >
  		    <select id="add_in_way" class="select_style"></select>
  		</el-form-item>
  	</div>
  </el-col>
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  	    <el-form-item label="企业保证金" >
  		    <el-input v-model="add_newForm.firmDeposit"   class="new_input_style"></el-input>
  		</el-form-item>
  	</div>
  </el-col>
</el-row>
</el-form>  

<el-form :model="add_guarantee_form"  ref="ruleForm" label-width="150px" class="demo-ruleForm">
<div class="part_title">
担保人信息
<el-button type="text" style="margin-left:20px;margin-right:20px;" @click="show_promise_man">+ 添加担保人 </el-button>
<el-button type="text" @click="show_promise_enterprise">+ 添加担保企业 </el-button>
</div>

<el-row v-show="promise_man" style="width:85%;">
  <el-col :span="12">
  	<div class="grid-content bg-purple">
  		<el-form-item label="担保人姓名" >
  		    <el-input v-model="add_guarantee_form.loanGuarantorPersonalParamList[0].guarantorName" placeholder="担保人姓名" class="new_input_style"></el-input>
  		</el-form-item>
  	</div>
  </el-col>
  <el-col :span="12">
  	<div class="grid-content bg-purple">
  		<el-form-item label="担保人证件号码" >
  		    <el-input v-model="add_guarantee_form.loanGuarantorPersonalParamList[0].guarantorIdcard" placeholder="担保人证件号码" class="new_input_style"></el-input>
  		</el-form-item>
  	</div>
  </el-col>

  <el-col :span="12">
  	<div class="grid-content bg-purple-light">
  		<el-form-item label="担保人手机号" >
  		    <el-input v-model="add_guarantee_form.loanGuarantorPersonalParamList[0].guarantorMobile" placeholder="担保人手机号" class="new_input_style"></el-input>
  		</el-form-item>
  	</div>
  </el-col>
  <el-col :span="12">
  	<div class="grid-content bg-purple">
  	    <el-form-item label="担保人地址" >
  		    <el-input v-model="add_guarantee_form.loanGuarantorPersonalParamList[0].guarantorAddress" placeholder="担保人地址" class="new_input_style"></el-input>
  		</el-form-item>
  	</div>
  </el-col>
  
</el-row>

<el-row v-show="promise_enterprise" style="width:85%;">
  <el-col :span="12">
  	<div class="grid-content bg-purple">
  		<el-form-item label="担保企业名称" >
  		    <el-input v-model="add_guarantee_form.loanGuarantorFirmParamList[0].guarFirmName" placeholder="担保企业名称" class="new_input_style"></el-input>
  		</el-form-item>
  	</div>
  </el-col>
  <el-col :span="12">
  	<div class="grid-content bg-purple-light">
  		<el-form-item label="企业证件类型" prop="value5">
            <select id="s_select_choice" class="select_style"></select>
        </el-form-item>
  	</div>
  </el-col>
  <el-col :span="12">
  	<div class="grid-content bg-purple">
  	    <el-form-item label="担保企业证件号">
  		    <el-input v-model="add_guarantee_form.loanGuarantorFirmParamList[0].guarFirmCertNo" placeholder="社会信用代码" class="new_input_style"></el-input>
  		</el-form-item>
  	</div>
  </el-col>
    <el-col :span="12">
  	<div class="grid-content bg-purple">
  	   
  	</div>
  </el-col>
</el-row>

</el-form>

<el-upload
	ref="upload"
    class="upload-demo"
    :action="post_action"
    :data="post_data"
    :file-list="fileList"
    :auto-upload="false">
     <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
     <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
     <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
 </el-upload>

<el-row style="text-align: center;">
    <el-button type="success" @click="submit_form_add" class="submit_action_right_now">确 定</el-button>
    <div>
    	<div slot="tip" class="el-upload__tip">提交保存后，该订单状态变为新建订单，勾选新建订单，可直接提交贷款申请。</div>
    </div>
</el-row>

</el-dialog>
<!-------------------模态框结束----------------------------------->

<!--------------------------------------------------------------->
<el-dialog
  title="添加页面，搜索企业名称"
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
            v-model="s_ruleForm.new_startDate"
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
            v-model="s_ruleForm.new_endDate"
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
        <el-button type="info" @click="search_form_for_add" v-text="search_char"></el-button>
  	</div>
  </el-col>
  
</el-row>

</el-form>
</div>
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
  <span slot="footer" class="dialog-footer">
    <el-button @click="goback_add_a_new">取 消</el-button>
    <el-button type="primary" @click="select_table_choice">确 定</el-button>
  </span>
</el-dialog>

<!--------------------编辑模态框开始----------------------------------------->
<el-dialog
  title="编辑页面"
  :visible.sync="dialogVisible_eight"
  :modal-append-to-body="false"
  size="large"
  :close-on-click-modal="false">
  
  
  <el-form :model="e_newForm"  ref="ruleForm" label-width="150px" class="demo-ruleForm">
	
  <div class="part_title" v-text="basic_info"></div>
  
  <el-row>
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="申请编号" >
  		    <el-input v-model="e_newForm.applyNo" :disabled="true"  class="new_input_style"></el-input>
  		</el-form-item>
  	</div>
  </el-col>
  <el-col :span="8">
  	<div class="grid-content bg-purple-light">
  	</div>
  </el-col>
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  	</div>
  </el-col>
</el-row>

  <el-row>
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="申请日期">
  		    <el-input v-model="e_newForm.applyDate" :disabled="true"  class="new_input_style"></el-input>
  		</el-form-item>
  	</div>
  </el-col>
  <el-col :span="8">
  	<div class="grid-content bg-purple-light">
  		<el-form-item label="发起人">
  		    <el-input v-model="e_newForm.createName" :disabled="true"   class="new_input_style"></el-input>
  		</el-form-item>
  	</div>
  </el-col>
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="进件渠道">
  		    <el-input v-model="e_newForm.organName" :disabled="true"  class="new_input_style"></el-input>
  		</el-form-item>
  	</div>
  </el-col>
</el-row>

  <el-row>
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="企业名称"  >
  		    <el-input v-model="e_newForm.firmName"   class="new_input_style"></el-input>
  		    <div class="icon_style el-icon-circle-check" @click="show_add_model_edit"></div>
  		</el-form-item>
  	</div>
  </el-col>
  <el-col :span="8">
  	<div class="grid-content bg-purple-light">
  		<el-form-item label="企业证件类型">
  		    <select id="e_select_choice" class="select_style"></select>
  		</el-form-item>
  	</div>
  </el-col>
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="企业证件号码" >
  		    <el-input v-model="e_newForm.firmCertNo"   class="new_input_style"></el-input>
  		</el-form-item>
  	</div>
  </el-col>
</el-row>

  <el-row>
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="主体企业" >
  		    <el-input v-model="e_newForm.mainFirmName"   class="new_input_style"></el-input>
  		</el-form-item>
  	</div>
  </el-col>
  <el-col :span="8">
  	<div class="grid-content bg-purple-light">
  		<el-form-item label="主体企业证件类型" >
  		    <el-input v-model="e_newForm.mainFirmCertTypeName"   class="new_input_style"></el-input>
  		</el-form-item>
  	</div>
  </el-col>
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="主体企业证件号码" >
  		    <el-input v-model="e_newForm.mainFirmCertNo"  class="new_input_style"></el-input>
  		</el-form-item>
  	</div>
  </el-col>
</el-row>

  <el-row>
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  	  	<el-form-item label="产品名称" >
  		    <select id="e_product_name" class="select_style"></select>
  		</el-form-item>
  	</div>
  </el-col>
  <el-col :span="8">
  	<div class="grid-content bg-purple-light">
  		<el-form-item label="借款金额" >
  		    <el-input v-model="e_newForm.applyAmount"   class="new_input_style"></el-input>
  		</el-form-item>
  		<span>万元</span>
  	</div>
  </el-col>
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="期数" >
  		    <select id="e_dead_line" class="select_style"></select>
  		</el-form-item>
  	</div>
  </el-col>
</el-row>

  <el-row>
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="还款方式" >
  		    <select id="e_repay_way" class="select_style"></select>
  		</el-form-item>
  	</div>
  </el-col>
  <el-col :span="8">
  	<div class="grid-content bg-purple-light">
  		<el-form-item label="发生方式" >
  		    <select id="e_in_way" class="select_style"></select>
  		</el-form-item>
  	</div>
  </el-col>
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  	    <el-form-item label="企业保证金" >
  		    <el-input v-model="e_newForm.firmDeposit"   class="new_input_style"></el-input>
  		</el-form-item>
  	</div>
  </el-col>
</el-row>
</el-form>  

<div class="part_title" >担保人信息</div>
<div class="part_title">
<el-button type="primary" @click="handleEdit_w_tableData">修改</el-button>
<el-button type="primary" @click="handleEdit_w_tableData_new">新增</el-button>
<el-button type="primary" @click="handleCurrentChange_w_tableData">删除</el-button>
</div>

    <el-table
      :data="w_tableData"
      @selection-change="handleSelectionChange"   
      @row-click="handleclick"
      style="width: 100%">
      
        <el-table-column
        type="selection">
        </el-table-column>
            
      <el-table-column
        prop="guarantorName"
        label="担保人姓名"
        width="180">
      </el-table-column>
     
       <el-table-column
        prop="guarantorIdcard"
        label="担保人证件号码"
        width="180">
      </el-table-column>
      <el-table-column
        prop="guarantorMobile"
        label="担保人手机号">
      </el-table-column>

      <el-table-column
        prop="guarantorAddress"
        label="担保人地址"
        width="180">
      </el-table-column>
      
    </el-table>
 
<div class="part_title" >担保企业信息</div>

<div class="part_title">
    <el-button type="primary" @click="handleEdit_s_tableData">修改</el-button>
    <el-button type="primary" @click="handleEdit_s_tableData_add">增加</el-button>
    <el-button type="primary" @click="handleCurrentChange_s_tableData">删除</el-button>
</div>

     <el-table
      :data="c_tableData"
      @selection-change="handleSelectionChange"   
      @row-click="handleclick"
      style="width: 100%">
      
      <el-table-column
        type="selection">
      </el-table-column>


      <el-table-column
        prop="guarFirmName"
        label="担保企业姓名"
        width="180">
      </el-table-column>
     
       <el-table-column
        prop="guarFirmCertName"
        label="担保企业证件类型"
        width="180">
      </el-table-column>
      
      <el-table-column
        prop="guarFirmCertNo"
        label="担保企业证件号码">
      </el-table-column>
      
    </el-table>
    
<div class="part_title" v-text="enclosure_info"></div>

<div class="part_title">
<el-button type="primary" @click="view_enclosure_info">预览</el-button>
<el-button type="primary" @click="delete_enclosure_info">删除</el-button>
<el-upload
	ref="upload"
    class="upload-demo"
    :action="post_action"
    :data="post_data"
    :file-list="fileList"
    :auto-upload="false">
     <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
     <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
     <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
 </el-upload>
 
</div>
    <el-table
      :data="enclosure_tableData"
      height="200"
      @selection-change="handleSelectionChange"   
      @row-click="handleclick"
      style="width: 100%">
      
      <el-table-column
        type="selection">
      </el-table-column>
      
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
        label="创建人">
      </el-table-column>
      
    </el-table>

<div class="part_title">
	
</div>

 
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible_eight = false">取 消</el-button>
    <el-button type="primary" @click="submit_form_edit">确 定</el-button>
  </span>
</el-dialog>

<el-dialog
  title="提示"
  :visible.sync="dialogVisible_third_new"
  :modal-append-to-body="false"
  size="tiny"
  :close-on-click-modal="false">
  
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
  <el-form-item label="担保人姓名">
    <el-input v-model="formInline.guarantorName" ></el-input>
  </el-form-item>
    <el-form-item label="担保人证件号码">
    <el-input v-model="formInline.guarantorIdcard" ></el-input>
  </el-form-item>
    <el-form-item label="担保人手机号">
    <el-input v-model="formInline.guarantorMobile" ></el-input>
  </el-form-item>
    <el-form-item label="担保人地址">
    <el-input v-model="formInline.guarantorAddress"></el-input>
  </el-form-item>
</el-form>

  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible_third_new = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible_third_submit">确 定</el-button>
  </span>
</el-dialog>

<el-dialog
  title="提示"
  :visible.sync="dialogVisible_third_new"
  :modal-append-to-body="false"
  size="tiny"
  :close-on-click-modal="false">
  
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
  <el-form-item label="担保人姓名">
    <el-input v-model="formInline.guarantorName" ></el-input>
  </el-form-item>
    <el-form-item label="担保人证件号码">
    <el-input v-model="formInline.guarantorIdcard" ></el-input>
  </el-form-item>
    <el-form-item label="担保人手机号">
    <el-input v-model="formInline.guarantorMobile" ></el-input>
  </el-form-item>
    <el-form-item label="担保人地址">
    <el-input v-model="formInline.guarantorAddress"></el-input>
  </el-form-item>
</el-form>

  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible_third_new = false">取 消</el-button>
    <el-button type="success" @click="dialogVisible_third_submit_new">确 定</el-button>
  </span>
</el-dialog>

<el-dialog
  title="提示"
  :visible.sync="dialogVisible_third_delete"
  :modal-append-to-body="false"
  size="tiny"
  :close-on-click-modal="false">
  <span>请确认删除该条信息</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible_third_delete = false">取 消</el-button>
    <el-button type="primary" @click="submit_delete_personal_information">确 定</el-button>
  </span>
</el-dialog>

<el-dialog
  title="提示"
  :visible.sync="dialogVisible_firm_delete"
  :modal-append-to-body="false"
  size="tiny"
  :close-on-click-modal="false">
  <span>请确认删除该条信息</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible_firm_delete= false">取 消</el-button>
    <el-button type="primary" @click="submit_delete_firm_information">确 定</el-button>
  </span>
</el-dialog>

<el-dialog
  title="提示"
  :visible.sync="dialogVisible_third_firm"
  :modal-append-to-body="false"
  size="tiny"
  :close-on-click-modal="false">

 <el-form :inline="true" :model="firm_formInline" class="demo-form-inline">
   <el-form-item label="担保企业名称">
    <el-input v-model="firm_formInline.guarFirmName" ></el-input>
  </el-form-item>
  <el-form-item label="担保企业证件类型">
   <!-- <el-input v-model="firm_formInline.guarFirmCertCode"></el-input>-->
     <select id="guarFirmCertCode_for_choice_only"></select>
  </el-form-item>
  <el-form-item label="担保企业证件号码">
    <el-input v-model="firm_formInline.guarFirmCertNo" ></el-input>
  </el-form-item>
</el-form>

  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible_third_firm= false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible_third_firm_submit">确 定</el-button>
  </span>
</el-dialog>

<el-dialog
  title="提示"
  :visible.sync="dialogVisible_third_firm_add"
  :modal-append-to-body="false"
  size="tiny"
  :close-on-click-modal="false">

 <el-form :inline="true" :model="firm_formInline" class="demo-form-inline">
   <el-form-item label="担保企业名称">
    <el-input v-model="firm_formInline.guarFirmName" ></el-input>
  </el-form-item>
  <el-form-item label="担保企业证件类型">
   <!-- <el-input v-model="firm_formInline.guarFirmCertCode"></el-input>-->
     <select id="guarFirmCertCode_for_choice_onlyOne"></select>
  </el-form-item>
  <el-form-item label="担保企业证件号码">
    <el-input v-model="firm_formInline.guarFirmCertNo" ></el-input>
  </el-form-item>
</el-form>

  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible_third_firm_add= false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible_third_firm_submit_add">确 定</el-button>
  </span>
</el-dialog>

<el-dialog
  title="编辑页面，搜索企业名称"
  :visible.sync="dialogVisible_ten_new"
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
        <el-button type="info" @click="search_form_for_add" v-text="search_char"></el-button>
  	</div>
  </el-col>
  
</el-row>

</el-form>
</div>
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
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible_ten_new = false">取 消</el-button>
    <el-button type="primary" @click="select_table_choice_new">确 定</el-button>
  </span>
</el-dialog>

<!--------------------编辑模态框结束----------------------------------------->
<!------------------>
<el-dialog
  title="提示"
  :visible.sync="dialogVisible_tip"
  width="30%"
  :modal-append-to-body="false"
  :close-on-click-modal="false">
  <span>请选择表内信息，查看详情。。。</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible_tip = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible_tip = false">确 定</el-button>
  </span>
</el-dialog>
<!------------------>
<!------------------>
<el-dialog
  title="提示"
  :visible.sync="dialogVisible_tip_must"
  width="30%"
  :modal-append-to-body="false"
  :close-on-click-modal="false">
  <span>请将基本信息填写完整</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible_tip_must = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible_tip_must = false">确 定</el-button>
  </span>
</el-dialog>
<!------------------>
  </div>
</template>


<script>
  import $ from 'jquery'
  export default {
    data() {
    	
      return {
      	dialogVisible_third_firm_add:false,
      	dialogVisible_third_new :false,
      	dialogVisible_tip_must:false,
      	dialogVisible_tip:false,
      	firm_formInline:{
      		
      	guarFirmCertCode:'',
      	
      	guarFirmCertName:'',
      	
      	guarFirmCertNo:'',
      	
      	guarFirmName:'',
      	
      	id:''
      	
      	},
      	formInline:{
      		guarantorAddress:'',

            guarantorIdcard:'',

            guarantorMobile:'',

            guarantorName:'',
            
            id:''
      	},
      	
      	search_char:'搜索',
      	
      	fileList:[],
        
        post_data:{},
        
     post_action:'http://172.18.100.196:7072/enterpriseFacade/uploadAttachment',
//        post_action:'http://172.16.4.250:9094/workFlow/uploadAttachment'
      	enclosure_tableData:[],
      	
      	w_tableData:[],
      	
      	c_tableData:[],
      	
      	s_tableData:[],
      	
      	e_tableData:[],
      	dialogVisible_third_firm:false,
      	
      	dialogVisible_firm_delete:false,
      	
      	dialogVisible_third_delete:false,
      	
      	dialogVisible_ten:false,
      	
      	dialogVisible_ten_new:false,
      	
      	dialogVisible_first:false,
      	
      	dialogVisible_third:false,
      	
      	dialogVisible_forth:false,
      	
      	dialogVisible_fifth:false,
      	
      	dialogVisible_sixth:false,
      	
      	dialogVisible_eight:false,
      	
      	dialogVisible_sixth_content:'',
      	
      	dialogVisible_thirdth_new:false,
      	
      	promise_man:true,
      	
      	promise_enterprise:true,
      	
      	basic_info:"基本信息",
      	
        delete_m:"修改",
        
        location:"您的位置    >  业务管理    >  企业贷款申请",
        
        task:"添加贷款申请",
        
        search:'搜索',
        
        enclosure_info:'附件信息',
                	 
        ruleForm:{
        	
        	 firmName:'',
        	 firmCertNo:'',
        	 itemStatusCode:'',
        	 createStartTime:'',
        	 createEndTime:''
        },
        
        newForm:{
         applyNo:'',
         applyDate:'',
         createName:'',
         organName:'',
         firmName:'',
         firmCertTypeName:'',
         firmCertNo:'',
         mainFirmName:'',
         mainFirmCertTypeName:'',
         mainFirmCertNo:'',
         financeProductName:'',
         applyAmount:'',
         deadlineName:'',
         repayTypeName:'',
         creditWayName:'',
         firmDeposit:''
        },
        
        add_newForm:{
         applyNo:'',
         applyDate:'',
         createName:'',
         organName:'',
         firmName:'',
         firmCertTypeName:'',
         firmCertNo:'',
         mainFirmName:'',
         mainFirmCertTypeName:'',
         mainFirmCertNo:'',
         financeProductName:'',
         applyAmount:'',
         deadlineName:'',
         repayTypeName:'',
         creditWayName:'',
         firmDeposit:''
         
        },
        
         e_newForm:{
         applyNo:'',
         applyDate:'',
         createName:'',
         organName:'',
         firmName:'',
         firmCertTypeName:'',
         firmCertNo:'',
         mainFirmName:'',
         mainFirmCertTypeName:'',
         mainFirmCertNo:'',
         financeProductName:'',
         applyAmount:'',
         deadlineName:'',
         repayTypeName:'',
         creditWayName:'',
         firmDeposit:''
         
        },
        
        add_guarantee_form:{
        	
        loanGuarantorPersonalParamList:[{
            guarantorAddress:'',
            guarantorIdcard:'',
            guarantorMobile:'',
            guarantorName:''
         }],
         
         loanGuarantorFirmParamList:[{
         	guarFirmCertNo:'',
         	guarFirmCertName:'',
         	guarFirmName:''
         }]
         
        },
        
        s_ruleForm:{
          bankAcct:'',
          corporateMobile:'',
          corporateName:'',
          endDate:'',
          firmCertNo:'',
          firmName:'',
          startDate:'',
          new_endDate:'',
          new_startDate:''
        },
        rules: {
          value1: [
            { required: true, message: '请填写内容', trigger: 'change' }
          ],
          value2: [
            { required: true, message: '请填写内容', trigger: 'blur' }
          ],
          value3: [
            { required: true, message: '请填写内容', trigger: 'blur' }
          ],
          value4: [
            { required: true, message: '请填写内容', trigger: 'blur' }
          ],
          value5: [
            { required: true, message: '请填写内容', trigger: 'blur' }
          ],
          value6: [
            { required: true, message: '请填写内容', trigger: 'blur' }
          ],
          value7: [
            { required: true, message: '请填写内容', trigger: 'blur' }
          ],
          value8: [
            { required: true, message: '请填写内容', trigger: 'blur' }
          ],
          value9: [
            { required: true, message: '请填写内容', trigger: 'blur' }
          ],
          value10: [
            { required: true, message: '请填写内容', trigger: 'blur' }
          ],
          value11: [
            { required: true, message: '请填写内容', trigger: 'blur' }
          ],
          value12: [
            { required: true, message: '请填写内容', trigger: 'blur' }
          ],
          value13: [
            { required: true, message: '请填写内容', trigger: 'blur' }
          ],
          value14: [
            { required: true, message: '请填写内容', trigger: 'blur' }
          ],
          value15: [
            { required: true, message: '请填写内容', trigger: 'blur' }
          ],
          value16: [
            { required: true, message: '请填写内容', trigger: 'blur' }
          ],
          value17: [
            { required: true, message: '请填写内容', trigger: 'blur' }
          ]
        },
        
        fileList2:[],
        
        app:"申请",
      	
        //表格当前页数据
        tableData: [],

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
        
        applyNo:0,

        //当前页码
        currentPage: 1,

        //查询的页码
        start: 1,

        //默认数据总数
        totalCount: 1000,
        
        buttons:[],
        
        flag:true,
        
        id:'',
        
        menuId:''
       
      }
      
    },

  	mounted(){
  		
  		this.$nextTick(function() {
  		
  		    this.origin_select_data_code();
  		    
  			this.search_form();
  			
  			this.load_button();
  			
  			this.origin_data();
  		
  		})
  	},
      methods: {
      	    goback_add_a_new(){
      	    	this.alogVisible_ten = false;
      	    	this.dialogVisible_thirdth_new=true;
      	    },
      	    
      	    view_enclosure_info(){
      	    	
      	    this.url=localStorage.localhost+'/firmLoanApplyFacade/previewAttachment'
              
            this.criteria={};
            
            this.criteria.id=this.highlightId.id;
            
            var current_token=localStorage.tokens;
                	
            this.criteria.authorization=current_token;
            
            this.$http.post(this.url,this.criteria,{emulateJSON: true}).then(function(res){
            	
            var the_resoult_url=res.body.data.url;
                   
            window.open(the_resoult_url);
    
            this.update_btn();
                        
            },function(res){
      
            });
            
      	    },
      	    //update_btn
      	    delete_enclosure_info(){
      	    	
      	    this.url=localStorage.localhost+'/firmLoanApplyFacade/deleteAttachment'
              
            this.criteria={};
            
            this.criteria.id=this.highlightId.id;
            
            var current_token=localStorage.tokens;
                	
            this.criteria.authorization=current_token;
            
            this.$http.post(this.url,this.criteria,{emulateJSON: true}).then(function(res){
      
            this.update_btn();
                        
            },function(res){
      
            });
            
      	    },
      	    dialogVisible_third_firm_submit(){
      	    	
      	    this.url=localStorage.localhost+'/firmLoanApplyFacade/updateFirmLoanGuarFirm'
              
            this.criteria=this.firm_formInline
            
            var current_token=localStorage.tokens;
                	
            this.criteria.authorization=current_token;
            
            this.$http.post(this.url,this.criteria,{emulateJSON: true}).then(function(res){
        
            this.dialogVisible_third_firm=false;
            
            this.update_btn();
                        
            },function(res){
      
            });
      	    	
      	    },
      	    dialogVisible_third_firm_submit_add(){
      	    	
      	    this.url=localStorage.localhost+'/firmLoanApplyFacade/saveFirmLoanGuarFirm'
            this.criteria={};  
            this.criteria=this.firm_formInline;
            this.firm_formInline.id='';
            var current_token=localStorage.tokens;
            this.criteria.guarFirmCertCode=$("#guarFirmCertCode_for_choice_onlyOne").val();
            this.criteria.guarFirmCertName=$("#guarFirmCertCode_for_choice_onlyOne").find("option:selected").text();
            this.criteria.loanApplyNo=this.highlightId.applyNo;
            this.criteria.authorization=current_token;
            
            this.$http.post(this.url,this.criteria,{emulateJSON: true}).then(function(res){
        
            this.dialogVisible_third_firm_add=false;
                //dialogVisible_third_firm_add
                //dialogVisible_third_firm_add
            
            this.update_btn();
                        
            },function(res){
      
            });
      	    	
      	    },
      	    handleEdit_s_tableData_add(){
//    	    	alert('11111');
      	    	this.dialogVisible_third_firm_add=true;
      	    	
      	    	this.currentRow =this.highlightId;
            	console.log(this.currentRow);
            	this.firm_formInline.guarFirmCertNo=this.currentRow.guarFirmCertNo;
//          	this.firm_formInline.guarFirmCertName=this.currentRow.guarFirmCertName;
//          	this.firm_formInline.guarFirmCertNo=this.currentRow.guarFirmCertNo;
            	this.firm_formInline.guarFirmName=this.currentRow.guarFirmName;
            	this.firm_formInline.id=this.currentRow.id;
            	
            	this.criteria={};
            	
                this.url=localStorage.localhost+'/dictDataCommFacade/getSysDictDataList'
              
                var current_token=localStorage.tokens;
                	
                this.criteria.authorization=current_token;
                
                this.criteria.dictTypeCode="FIRM_CERT_TYPE";
                                   
             
                this.$http.post(this.url,this.criteria,{emulateJSON: true}).then(function(res){
                    	
               
                $("#guarFirmCertCode_for_choice_onlyOne").html("");
               
                for(var i=0; i<res.body.data.list.length;i++){
               	
               	  $("#guarFirmCertCode_for_choice_onlyOne").append('<option value="'+res.body.data.list[i].dictDataCode+'">'+res.body.data.list[i].dictDataName+'</option>');
              
                }
               
               },function(res){
                    	
                   console.log(res);
                   console.log("ajax failer");
               }); 
      	    },
            handleEdit_s_tableData(){
            	
            	this.dialogVisible_third_firm=true;
            	
            	this.currentRow =this.highlightId;
            	console.log(this.currentRow);
            	this.firm_formInline.guarFirmCertNo=this.currentRow.guarFirmCertNo;
//          	this.firm_formInline.guarFirmCertName=this.currentRow.guarFirmCertName;
//          	this.firm_formInline.guarFirmCertNo=this.currentRow.guarFirmCertNo;
            	this.firm_formInline.guarFirmName=this.currentRow.guarFirmName;
            	this.firm_formInline.id=this.currentRow.id;
            	
            	this.criteria={};
            	
                this.url=localStorage.localhost+'/dictDataCommFacade/getSysDictDataList'
              
                var current_token=localStorage.tokens;
                	
                this.criteria.authorization=current_token;
                
                this.criteria.dictTypeCode="FIRM_CERT_TYPE";
                                   
             
                this.$http.post(this.url,this.criteria,{emulateJSON: true}).then(function(res){
                    	
               
                $("#guarFirmCertCode_for_choice_only").html("");
               
                for(var i=0; i<res.body.data.list.length;i++){
               	
               	  $("#guarFirmCertCode_for_choice_only").append('<option value="'+res.body.data.list[i].dictDataCode+'">'+res.body.data.list[i].dictDataName+'</option>');
              
                }
               
               },function(res){
                    	
                   console.log(res);
                   console.log("ajax failer");
               });       
   
            
            
            	
            },
            handleCurrentChange_w_tableData() {
            	
            	this.dialogVisible_third_delete=true;

            },
            submit_delete_personal_information(){
            	            	
            this.currentRow =this.highlightId;
            
            console.log(this.currentRow);
                             	
            this.url=localStorage.localhost+'/firmLoanApplyFacade/deleteFirmLoanGuarPen'
              
            var current_token=localStorage.tokens;
                	
            this.criteria.authorization=current_token;
            
            this.criteria.id=this.currentRow.id;
            
            this.$http.post(this.url,this.criteria,{emulateJSON: true}).then(function(res){
        
            this.dialogVisible_third_delete=false;
            this.update_btn();
                        
            },function(res){
      
            });
            
            },
            dialogVisible_third_submit(){
            	
            this.url=localStorage.localhost+'/firmLoanApplyFacade/updateFirmLoanGuarPen'
              
            this.criteria=this.formInline
            
            this.criteria.guarFirmCertCode=$("#guarFirmCertCode_for_choice_only").val();
            
            console.log(this.criteria.guarFirmCertCode);
            
      	    this.criteria.guarFirmCertName=$("#guarFirmCertCode_for_choice_only").find("option:selected").text();
      	    
      	    console.log($("#guarFirmCertCode_for_choice_only"));
      	    
            var current_token=localStorage.tokens;
                	
            this.criteria.authorization=current_token;
            
            this.$http.post(this.url,this.criteria,{emulateJSON: true}).then(function(res){
        
            this.dialogVisible_third=false;
            this.dialogVisible_third_new=true;
            this.update_btn();
            // alert('111111');            
            },function(res){
      
            });
            
            },
            dialogVisible_third_submit_new(){
            	
            this.url=localStorage.localhost+'/firmLoanApplyFacade/saveFirmLoanGuarPen'
              
            this.criteria=this.formInline
      	    
      	    this.criteria.loanApplyNo=this.highlightId.applyNo;
      	    
            var current_token=localStorage.tokens;
                	
            this.criteria.authorization=current_token;
            
            this.$http.post(this.url,this.criteria,{emulateJSON: true}).then(function(res){
        
            this.dialogVisible_third=false;
            this.dialogVisible_third_new=false;
            this.update_btn();
            alert('alert');            
            },function(res){
      
            });
            
            },
            dialogVisible_third_add_submit(){
            
            this.currentRow =this.highlightId;
            console.log("======this.currentRow: " + this.currentRow.applyNo);
            
            this.url=localStorage.localhost+'/firmLoanApplyFacade/saveFirmLoanGuarPen';
            
            this.criteria=this.formAddInline;
            
            this.criteria.loanApplyNo=this.currentRow.applyNo;
            
            var current_token=localStorage.tokens;
            
            this.criteria.authorization=current_token;
            
            this.$http.post(this.url,this.criteria,{emulateJSON: true}).then(function(res){
        
            this.dialogVisible_addGuarantorForm=false;
            this.update_btn();
                        
            },function(res){
      
            });
            },
            handleEdit_w_tableData(){
               this.currentRow =this.highlightId;
               
               this.dialogVisible_third=true;

               this.formInline.guarantorAddress=this.currentRow.guarantorAddress;
               this.formInline.guarantorIdcard=this.currentRow.guarantorIdcard;
               this.formInline.guarantorMobile=this.currentRow.guarantorMobile;
               this.formInline.guarantorName=this.currentRow.guarantorName;
               this.formInline.id=this.currentRow.id;
               
            },
            handleEdit_w_tableData_new(){
               
               this.dialogVisible_third_new=true;

//              alert("123");
            },
            
            submit_delete_firm_information(){
            	
            this.currentRow =this.highlightId;

            console.log(this.currentRow);
                             	
            this.url=localStorage.localhost+'/firmLoanApplyFacade/deleteFirmLoanGuarFirm'
              
            var current_token=localStorage.tokens;
                	
            this.criteria.authorization=current_token;
            
            this.criteria.id=this.currentRow.id;
            
            this.$http.post(this.url,this.criteria,{emulateJSON: true}).then(function(res){
        
            this.dialogVisible_firm_delete=false;
            this.update_btn();
            
            },function(res){
      
            });
            
            },
      	    handleCurrentChange_s_tableData(){
      	   
      	     this.dialogVisible_firm_delete=true;
            
      	    },
      	    submit_form_edit: function(){
      	    	
      	    this.dialogVisible_eight=false;
      	    	
      	    var e_post_data={};
      	        
      	        e_post_data=this.e_newForm;
      	        
      	         e_post_data.firmDeposit=this.e_newForm.firmDeposit;
      	         
      	         e_post_data.id=this.id;
        	    //firmDeposit
      	        
      	        e_post_data.authorization=localStorage.tokens;
      	        //.financeProductCode
      	        e_post_data.financeProductCode=$("#e_product_name").val();
      	        e_post_data.financeProductName=$("#e_product_name").find("option:selected").text();
      	        
      	        e_post_data.deadlineCode=$("#e_dead_line").val();
      	        e_post_data.deadlineName=$("#e_dead_line").find("option:selected").text();
      	        
      	        e_post_data.repayTypeCode=$("#e_repay_way").val();
      	        e_post_data.repayTypeName=$("#e_repay_way").find("option:selected").text();
      	        
      	        e_post_data.creditWayCode=$("#e_in_way").val();
      	        e_post_data.creditWayName=$("#e_in_way").find("option:selected").text();
      	        
      	    var e_url=localStorage.localhost+'/firmLoanApplyFacade/saveFirmLoanApply';
      	    
            this.$http.post(e_url,e_post_data,{emulateJSON: true}).then(function(res){ 
            //   alert('success');
            this.search_form();
            },function(res){  	
                console.log('ajax failed');
                console.log(res);      
             });
             

             
      	    },
      	    select_table_choice:function(){
    	    	
 	    	    console.log(this.highlightId);
    	    
    	    	this.dialogVisible_ten=false;
    	    	
    	    	this.dialogVisible_thirdth_new=true;
    	    	
    	    	if(this.highlightId.isMain == 1){
    	    		
    	    	this.add_newForm.firmName=this.highlightId.firmName;
    	    	this.add_newForm.firmCertTypeName=this.highlightId.firmCertTypeName;
    	    	this.add_newForm.firmCertNo=this.highlightId.firmCertNo;
    	    	this.add_newForm.firmNo=this.highlightId.firmNo;
    	    	
    	    	this.add_newForm.mainFirmCertTypeName=this.highlightId.firmCertTypeName;
    	    	this.add_newForm.mainFirmName=this.highlightId.firmName;
    	    	this.add_newForm.mainFirmCertNo=this.highlightId.firmCertNo;
    	    	
    	    	}else if(this.highlightId.isMain == 0){
    	    		
    	        this.add_newForm.firmName=this.highlightId.firmName;
    	    	this.add_newForm.firmCertTypeName=this.highlightId.firmCertTypeName;
    	    	this.add_newForm.firmCertNo=this.highlightId.firmCertNo;
    	    	
    	    	this.add_newForm.mainFirmCertTypeName=this.highlightId.mainFirmCertTypeName;
    	    	this.add_newForm.mainFirmName=this.highlightId.mainFirmName;
    	    	this.add_newForm.mainFirmCertNo=this.highlightId.mainFirmCertNo;
    	    	this.add_newForm.firmNo=this.highlightId.firmNo;
    	
    	    	}
    	    },
    	    select_table_choice_new:function(){
    	    	
 	    	    console.log(this.highlightId);
    	    
    	    	this.dialogVisible_ten_new=false;
    	    	
    	    	this.dialogVisible_eight=true;
    	    	
    	    	if(this.highlightId.isMain == 1){
    	    		
    	    	this.e_newForm.firmName=this.highlightId.firmName;
    	    	this.e_newForm.firmCertTypeName=this.highlightId.firmCertTypeName;
    	    	this.e_newForm.firmCertNo=this.highlightId.firmCertNo;
    	    	this.e_newForm.firmNo=this.highlightId.firmNo;
    	    	
    	    	this.e_newForm.mainFirmCertTypeName=this.highlightId.firmCertTypeName;
    	    	this.e_newForm.mainFirmName=this.highlightId.firmName;
    	    	this.e_newForm.mainFirmCertNo=this.highlightId.firmCertNo;
    	    	
    	    	}else if(this.highlightId.isMain == 0){
    	    		
    	        this.e_newForm.firmName=this.highlightId.firmName;
    	    	this.e_newForm.firmCertTypeName=this.highlightId.firmCertTypeName;
    	    	this.e_newForm.firmCertNo=this.highlightId.firmCertNo;
    	    	
    	    	this.e_newForm.mainFirmCertTypeName=this.highlightId.mainFirmCertTypeName;
    	    	this.e_newForm.mainFirmName=this.highlightId.mainFirmName;
    	    	this.e_newForm.mainFirmCertNo=this.highlightId.mainFirmCertNo;
    	    	this.e_newForm.firmNo=this.highlightId.firmNo;
    	
    	    	}
            
    	    },
      	    search_form_for_add: function(){
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
                    	

        
              this.s_tableData=res.body.data.enterpriseList;
              
              this.totalCount=res.body.data.total;
                        
            },function(res){
                    	
                        
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
      	    show_add_model:function(){
      	        	
      	        this.dialogVisible_thirdth_new=false;
      	        	
      	        this.dialogVisible_ten=true
      	        	
      	        this.search_form_for_add();
      	        	
      	    },
      	    show_add_model_edit:function(){
      	        	
      	        this.dialogVisible_eight=false;
      	        	
      	        this.dialogVisible_ten_new=true
      	        	
      	        this.search_form_for_add();
      	        	
      	    },
      	    apply_submit:function(){
      	        	
      	        if(this.flag ==false ){
      	        		
      	            this.dialogVisible_sixth=false;
      	            
      	        	this.update_btn();	
      	        		
      	        }else if( this.flag == true){
      	        	
      	        	this.dialogVisible_sixth=false;
      	        	
      	        	var e_post_data={};
      	        	
      	        	    e_post_data.authorization=localStorage.tokens;
                        
                        e_post_data.loanApplyNo=this.highlightId.applyNo;
                        
                        e_post_data.loanId=this.highlightId.id;
                        
                        var e_url=localStorage.localhost+'/wf/toStartFirmLoan';
                     
                        this.$http.post(e_url,e_post_data,{emulateJSON: true}).then(function(res){
                        //	alert("success");
                        },function(res){
                        	
                        });

      	        	
      	        }
      	    },
      	    apply_get_documeny: function(){
      	       	//调取附件表格内容
                 var e_post_data={};
                    
                 var current_token=localStorage.tokens;
                	
                    e_post_data.authorization=current_token;
                        
                    e_post_data.loanApplyNo=this.highlightId.applyNo;
                        
                    e_post_data.attcBusiTypeCode='1,2';
                        
                    var e_url=localStorage.localhost+'/enterpriseFacade/queryAttachment';
                     
                    this.$http.post(e_url,e_post_data,{emulateJSON: true}).then(function(res){

                    var the_resoult=res.body.data.sysAttachmentVoList;
                                                 //sysAttachmentVoList
                    var flag;
                     
                    console.log(res.body.data.total);
                     
                    this.dialogVisible_sixth=true;
                     
                    if(res.body.data.total>=1){

                     	this.dialogVisible_sixth_content="确认提交贷款申请";
                     	
                        this.flag=true;
                     	
                    }else if(res.body.data.total == 0){

                     	this.dialogVisible_sixth_content="请上传附件信息";
                 
                        this.flag=false;
                        
                    }

                    
                    },function(res){
                    	
                    console.log('ajax failed');
                    console.log(res);
                        
                    });
      	    },
      	    
      	    origin_data: function(){
            	
            var current_token=localStorage.tokens;
                	
            this.post_data.authorization=current_token;
            this.post_action='';
            this.post_action=localStorage.localhost+'/enterpriseFacade/uploadAttachment';
            this.post_action=this.post_action + '?authorization='+localStorage.tokens+ '&applyNo='+this.applyNo+'&attcBusiDataCode=2';
              
      	    },
      	    
      	    submitUpload() {
      	    	
            this.$refs.upload.submit();
            
            },
      	    submit_form_add: function(){
      	    	
//    	  if(
//    	  this.add_newForm.applyNo!==''&&
//        this.add_newForm.applyDate!==''&&
//        this.add_newForm.createName!==''&&
//        this.add_newForm.organName!==''&&
//        this.add_newForm.firmName!==''&&
//        this.add_newForm.firmCertTypeName!==''&&
//        this.add_newForm.firmCertNo!==''&&
//        this.add_newForm.mainFirmName!==''&&
//        this.add_newForm.mainFirmCertTypeName!==''&&
//        this.add_newForm.mainFirmCertNo!==''&&
//        this.add_newForm.financeProductName!==''&&
//        this.add_newForm.applyAmount!==''&&
//        this.add_newForm.deadlineName!==''&&
//        this.add_newForm.repayTypeName!==''&&
//        this.add_newForm.creditWayName!==''&&
//        this.add_newForm.firmDeposit!==''
//        ){
      	    
      	     var e_post_data={};
      	        
      	        e_post_data=this.add_newForm;
      	        
      	        e_post_data.authorization=localStorage.tokens;
      	        //.financeProductCode
      	        e_post_data.financeProductCode=$("#add_product_name").val();
      	        e_post_data.financeProductName=$("#add_product_name").find("option:selected").text();
      	        
      	        e_post_data.deadlineCode=$("#add_dead_line").val();
      	        e_post_data.deadlineName=$("#add_dead_line").find("option:selected").text();
      	        
      	        e_post_data.repayTypeCode=$("#add_repay_way").val();
      	        e_post_data.repayTypeName=$("#add_repay_way").find("option:selected").text();
      	        
      	        e_post_data.creditWayCode=$("#add_in_way").val();
      	        e_post_data.creditWayName=$("#add_in_way").find("option:selected").text();
      	        
      	    var e_url=localStorage.localhost+'/firmLoanApplyFacade/saveFirmLoanApply';
      	    
            this.$http.post(e_url,e_post_data,{emulateJSON: true}).then(function(res){ 
            this.search_form();
            },function(res){  	
                console.log('ajax failed');
                console.log(res);      
             });
             

 	        var garante_data={};
 	        //this.add_newForm.applyNo
 	            garante_data.applyNo=this.add_newForm.applyNo;
 	            
 	            garante_data.authorization=localStorage.tokens;
 	            
 	        var the_length=this.add_guarantee_form.loanGuarantorFirmParamList.length;
 	            
            console.log(this.add_guarantee_form);
 	            
 	        for(var i=0;i<the_length;i++){
 	        	
 	        	garante_data['loanGuarantorPersonalParamList[' + i +'].guarantorAddress']=this.add_guarantee_form.loanGuarantorPersonalParamList[i].guarantorAddress;
 	        	garante_data['loanGuarantorPersonalParamList[' + i +'].guarantorIdcard']=this.add_guarantee_form.loanGuarantorPersonalParamList[i].guarantorIdcard;
 	        	garante_data['loanGuarantorPersonalParamList[' + i +'].guarantorMobile']=this.add_guarantee_form.loanGuarantorPersonalParamList[i].guarantorMobile;
 	        	garante_data['loanGuarantorPersonalParamList[' + i +'].guarantorName']=this.add_guarantee_form.loanGuarantorPersonalParamList[i].guarantorName;
 	        	
 	        	garante_data['loanGuarantorFirmParamList[' + i +'].guarFirmCertCode']=$("#s_select_choice").val();
 	        	garante_data['loanGuarantorFirmParamList[' + i +'].guarFirmCertName']=$("#s_select_choice").find("option:selected").text();
 	        	garante_data['loanGuarantorFirmParamList[' + i +'].guarFirmName']=this.add_guarantee_form.loanGuarantorFirmParamList[i].guarFirmName;
 	        	garante_data['loanGuarantorFirmParamList[' + i +'].guarFirmCertNo']=this.add_guarantee_form.loanGuarantorFirmParamList[i].guarFirmCertNo;
 	        
 	        }

 	        var g_url=localStorage.localhost+'/firmLoanApplyFacade/editFirmLoanGuar';
 	        
            this.$http.post(g_url,garante_data,{emulateJSON: true}).then(function(res){ 
                
            },function(res){  	
                console.log('ajax failed');
                console.log(res);      
             });
             
             
            this.dialogVisible_thirdth_new=false;
//    	    }else{
//    	    	this.dialogVisible_tip_must=true;
//    	    	
//    	    }
      	   
      	    },
      	       
      	    get_documeny: function(){
      	       	//调取附件表格内容
                 var e_post_data={};
                    
                 var current_token=localStorage.tokens;
                	
                     e_post_data.authorization=current_token;
                        
                     e_post_data.loanApplyNo=this.highlightId.applyNo;
                        
                    e_post_data.attcBusiTypeCode='2';
                        
                    var e_url=localStorage.localhost+'/enterpriseFacade/queryAttachment';
                     
                    this.$http.post(e_url,e_post_data,{emulateJSON: true}).then(function(res){
                    
                    this.enclosure_tableData= res.body.data.sysAttachmentVoList;
                    
                    },function(res){
                    	
                    console.log('ajax failed');
                    console.log(res);
                        
                    });
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

      	   btn_operation(btnCode){
      	   	
      	   	console.log(btnCode);
      	   	
      	   	if(btnCode=="delete_btn"){

                if(this.highlightId == -1){
                	this.dialogVisible_tip=true;
                }else{
//              	this._delete_btn();
                    if(this.highlightId.itemStatusName !=='新建'){
                		alert('订单状态不支持');
                	}else{
                		this._delete_btn();
                	}
                }
      	   		
      	   		
      	   	}else if(btnCode=="update_btn"){
      	   		
      	   		if(this.highlightId == -1){
                	this.dialogVisible_tip=true;
                }else{
//              	this.update_btn();
                    if(this.highlightId.itemStatusName !=='新建'){
                		alert('订单状态不支持');
                	}else{
                		this.update_btn();
                	}
                }

      	   		
      	   	}else if(btnCode=="query_btn"){

      	   		this.query_btn();
      	   		
      	   	}else if(btnCode=="view_btn"){
      	   		
      	   		if(this.highlightId == -1){
                	this.dialogVisible_tip=true;
                }else{
                	this.view_btn();
                }
      	   	    
      	   	
      	   	}else if(btnCode=="add_apply_btn"){
      	   		
//    	   		if(this.highlightId == -1){
//              	this.dialogVisible_tip=true;
//              }else{
//              	this.add_apply_btn();
//              }
                this.add_apply_btn();
      	   
      	   		
      	   	}else if(btnCode="apply_btn"){
      	   		
      	   	    if(this.highlightId == -1){
                	this.dialogVisible_tip=true;
                }else{
                	if(this.highlightId.itemStatusName !=='新建'){
                		alert('订单状态不支持');
                	}else{
                		this.apply_btn();
                	}
                	
                }
      	   		
      	   	}
      	   
      	   },
      	   
      	   
      	   apply_btn:function(){
      	   
      	   	this.apply_get_documeny();
      	   	
      	   },
      	   
      	   add_apply_btn:function(){
      	   	
      	   	this.dialogVisible_thirdth_new=true;
      	   	   
      	   	this.url=localStorage.localhost+'/firmLoanApplyFacade/InitAddFirmLoanApply'
                	
            this.criteria={};
            
            var current_token=localStorage.tokens;
                	
            this.criteria.authorization=current_token;
            
            this.$http.post(this.url,this.criteria,{emulateJSON: true}).then(function(res){
                    	
            var resoult=res.body.data.addFirmLoanInitVoList[0];

            this.add_newForm.applyDate=resoult.applyDate;
            this.add_newForm.applyNo=resoult.applyNo;
            this.add_newForm.createName=resoult.createName;
            this.add_newForm.organName=resoult.organName;
              
            this.get_product_name();  
            this.get_dead_line();
            this.get_back_method();
            this.get_in_way();
            this.origin_select_data_code_new();
            
//          this.origin_data();
            
            },function(res){
                    	
              console.log('ajax failed');
              console.log(res);
                        
            });
      	   	   
      	   },
      	   
      	    origin_select_data_code_new: function(){
         
            var selelct_url=localStorage.localhost+'/dictDataCommFacade/getSysDictDataList'
                	
            this.criteria={};
                	
            var current_token=localStorage.tokens;
                	
            this.criteria.authorization=current_token;
            
            this.criteria.dictTypeCode="FIRM_CERT_TYPE";
                                   
             
            this.$http.post(selelct_url,this.criteria,{emulateJSON: true}).then(function(res){
              $("#s_select_choice").html(' ');
              $("#e_select_choice").html(' ');     	
               
              console.log(res.body.data.list);
               
               for(var i=0; i<res.body.data.list.length;i++){

               	  $("#s_select_choice").append('<option value="'+res.body.data.list[i].dictDataCode+'">'+res.body.data.list[i].dictDataName+'</option>');
               	  $("#e_select_choice").append('<option value="'+res.body.data.list[i].dictDataCode+'">'+res.body.data.list[i].dictDataName+'</option>');
               }
               
            },function(res){
                    	
                        
            });       
            },
    	   get_product_name: function(){
	        
            var selelct_url=localStorage.localhost+'/dictDataCommFacade/getSysDictDataList'
                	
            this.criteria={};
                	
            var current_token=localStorage.tokens;
                	
            this.criteria.authorization=current_token;
            
            this.criteria.dictTypeCode="FIRM_LOAN_PRODUCT";
             
            this.$http.post(selelct_url,this.criteria,{emulateJSON: true}).then(function(res){
               
               this.selections=res.body.data.list;
               
                $("#add_product_name").html(" ");
                
               for(var i=0; i<res.body.data.list.length;i++){
               	 
               	  $("#add_product_name").append('<option value="'+res.body.data.list[i].dictDataCode+'">'+res.body.data.list[i].dictDataName+'</option>');
               	  $("#e_product_name").append('<option value="'+res.body.data.list[i].dictDataCode+'">'+res.body.data.list[i].dictDataName+'</option>');
               
               }
               
            },function(res){
                    	
              console.log('ajax failed');
              console.log(res);
                        
            });       
            },
      	   

      	   get_dead_line: function(){
	        
            var selelct_url=localStorage.localhost+'/dictDataCommFacade/getSysDictDataList'
                	
            this.criteria={};
                	
            var current_token=localStorage.tokens;
                	
            this.criteria.authorization=current_token;
            
            this.criteria.dictTypeCode="DEADLINE";
             
            this.$http.post(selelct_url,this.criteria,{emulateJSON: true}).then(function(res){
               
               this.selections=res.body.data.list;
               
                $("#add_dead_line").html(" ");
                
               for(var i=0; i<res.body.data.list.length;i++){
               	 
               	  $("#add_dead_line").append('<option value="'+res.body.data.list[i].dictDataCode+'">'+res.body.data.list[i].dictDataName+'</option>');
                  $("#e_dead_line").append('<option value="'+res.body.data.list[i].dictDataCode+'">'+res.body.data.list[i].dictDataName+'</option>');
               }
               
            },function(res){
                    	
              console.log('ajax failed');
              console.log(res);
                        
            });       
            },
            
            get_back_method: function(){
	        
            var selelct_url=localStorage.localhost+'/dictDataCommFacade/getSysDictDataList'
                	
            this.criteria={};
                	
            var current_token=localStorage.tokens;
                	
            this.criteria.authorization=current_token;
            
            this.criteria.dictTypeCode="REPAY_WAY";
             
            this.$http.post(selelct_url,this.criteria,{emulateJSON: true}).then(function(res){
               
               this.selections=res.body.data.list;
               
                $("#add_repay_way").html(" ");
                
               for(var i=0; i<res.body.data.list.length;i++){
               	 
               	  $("#add_repay_way").append('<option value="'+res.body.data.list[i].dictDataCode+'">'+res.body.data.list[i].dictDataName+'</option>');
               	  $("#e_repay_way").append('<option value="'+res.body.data.list[i].dictDataCode+'">'+res.body.data.list[i].dictDataName+'</option>');
               }
               
            },function(res){
                    	
              console.log('ajax failed');
              console.log(res);
                        
            });       
            },
      	   //get_in_way
      	    get_in_way: function(){
	        
            var selelct_url=localStorage.localhost+'/dictDataCommFacade/getSysDictDataList'
                	
            this.criteria={};
                	
            var current_token=localStorage.tokens;
                	
            this.criteria.authorization=current_token;
            
            this.criteria.dictTypeCode="IN_WAY";
             
            this.$http.post(selelct_url,this.criteria,{emulateJSON: true}).then(function(res){
               
               this.selections=res.body.data.list;
               
                $("#add_in_way").html(" ");
                
               for(var i=0; i<res.body.data.list.length;i++){
               	 
               	  $("#add_in_way").append('<option value="'+res.body.data.list[i].dictDataCode+'">'+res.body.data.list[i].dictDataName+'</option>');
               	  $("#e_in_way").append('<option value="'+res.body.data.list[i].dictDataCode+'">'+res.body.data.list[i].dictDataName+'</option>');
               }
               
            },function(res){
                    	
              console.log('ajax failed');
              console.log(res);
                        
            });       
            },
      	   
      	    _delete_btn: function(){
      	   	  this.dialogVisible_forth=true;
      	   },
      	   _delete_btn: function(){
      	   	  this.dialogVisible_forth=true;
      	   },
      	   
      	   submit_delete: function(){
      	   	   //this.highlightId
      	   	   
      	   	this.url=localStorage.localhost+'/firmLoanApplyFacade/deleteFirmLoanApply'
                	
            this.criteria={};
            
            var current_token=localStorage.tokens;
                	
            this.criteria.authorization=current_token;
            
            this.criteria.id=this.highlightId.id;
            
            console.log(this.criteria);
            
            this.$http.post(this.url,this.criteria,{emulateJSON: true}).then(function(res){
              alert(res.body.resultMessage);      	
              this.dialogVisible_forth=false;
              
              this.search_form();
                        
            },function(res){
                    	
              console.log('ajax failed');
              console.log(res);
                        
            });
            
      	   	
      	   },
      	   
      	   update_btn: function(){
      	   	
      	   	console.log(this.applyNo);
      	   	
      	   	this.dialogVisible_eight=true;
      	   	
      	   	//**************************************************************************
      	   	var current_token=localStorage.tokens;
                	
            this.criteria.authorization=current_token;
      
            this.criteria.applyNo=this.applyNo;
            
            this.url=localStorage.localhost+'/firmLoanApplyFacade/showFirmLoanDetail'
            
            this.$http.post(this.url,this.criteria,{emulateJSON: true}).then(function(res){
                    	
            var resoult=res.body.data.basicApplyBasicInfo[0];
            
            console.log(resoult);
            
            this.e_newForm.applyNo=resoult.applyNo;
            this.e_newForm.applyDate=resoult.applyDate;
            this.e_newForm.createName=resoult.createrName;
            this.e_newForm.organName=resoult.organName;
            this.e_newForm.firmName=resoult.firmName;
            
            this.e_newForm.firmCertTypeName=resoult.firmCertTypeName;
            this.e_newForm.firmCertNo=resoult.firmCertNo;
            this.e_newForm.mainFirmName=resoult.mainFirmName;
            this.e_newForm.mainFirmCertTypeName=resoult.mainFirmCertTypeName;
            this.e_newForm.mainFirmCertNo=resoult.mainFirmCertNo;
            
            this.e_newForm.financeProductName=resoult.financeProductName;
            this.e_newForm.applyAmount=resoult.applyAmount;
            this.e_newForm.deadlineName=resoult.deadlineName;
            this.e_newForm.repayTypeName=resoult.repayTypeName;
            this.e_newForm.creditWayName=resoult.creditWayName;
            
            this.e_newForm.firmDeposit=resoult.firmDeposit;
                                      
            this.id=resoult.id;
            
            console.log(this.e_newForm);

            var gurantor=res.body.data.loanGuarantorPersonalVoList;
           
            this.w_tableData=gurantor;
           
            this.c_tableData=res.body.data.loanGuarantorVoList;
              
            //获取附件信息
            this.get_documeny();
            
            this.origin_data();
                        
            },function(res){
                    	
              console.log('ajax failed');
              console.log(res);
                        
            });
            
            this.get_product_name();  
            this.get_dead_line();
            this.get_back_method();
            this.get_in_way();
            this.origin_select_data_code_new();
            
            
        
//          this.origin_data();
      	   },
      	   
      	   query_btn: function(){
      	   	
      	   	this.url=localStorage.localhost+'/firmLoanApplyFacade/findFirmLoanApplyList'
                	
            this.criteria=this.ruleForm;
            
            this.criteria.itemStatusCode=$("#m_select_choice").val();
            
             var s_time = new Date(this.criteria.createStartTime);
             
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
             
             var e_time = new Date(this.criteria.createEndTime);
             
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
                    	
              this.tableData=res.body.data.firmContractInfoVoList;
              
              this.totalCount=res.body.data.total;
                        
            },function(res){
                    	
              console.log('ajax failed');
              console.log(res);
                        
            });
      	   	
      	   },
      	   view_btn: function(){
      	   	
      	   	this.dialogVisible_fifth=true;
      	   	  
      	   	var current_token=localStorage.tokens;
                	
            this.criteria.authorization=current_token;
      
            this.criteria.applyNo=this.highlightId.applyNo;
            
            this.url=localStorage.localhost+'/firmLoanApplyFacade/showFirmLoanDetail'
            
            this.$http.post(this.url,this.criteria,{emulateJSON: true}).then(function(res){
                    	
            var resoult=res.body.data.basicApplyBasicInfo[0];
            
            this.newForm.applyNo=resoult.applyNo;
            this.newForm.applyDate=resoult.applyDate;
            this.newForm.createName=resoult.createrName;
            this.newForm.organName=resoult.organName;
            this.newForm.firmName=resoult.firmName;
            
            this.newForm.firmCertTypeName=resoult.firmCertTypeName;
            this.newForm.firmCertNo=resoult.firmCertNo;
            this.newForm.mainFirmName=resoult.mainFirmName;
            this.newForm.mainFirmCertTypeName=resoult.mainFirmCertTypeName;
            this.newForm.mainFirmCertNo=resoult.mainFirmCertNo;
            
            this.newForm.financeProductName=resoult.financeProductName;
            this.newForm.applyAmount=resoult.applyAmount;
            this.newForm.deadlineName=resoult.deadlineName;
            this.newForm.repayTypeName=resoult.repayTypeName;
            this.newForm.creditWayName=resoult.creditWayName;
            
          
            this.newForm.firmDeposit=resoult.firmDeposit;

            var gurantor=res.body.data.loanGuarantorPersonalVoList;
           
            this.w_tableData=gurantor;
           
            this.c_tableData=res.body.data.loanGuarantorVoList;
              
            //获取附件信息
            this.get_documeny();
                        
            },function(res){
                    	
              console.log('ajax failed');
              console.log(res);
                        
            });
            
      	   },
      	   
      	    origin_select_data_code: function(){
	        
            var selelct_url=localStorage.localhost+'/dictDataCommFacade/getSysDictDataList'
                	
            this.criteria={};
                	
            var current_token=localStorage.tokens;
                	
            this.criteria.authorization=current_token;
            
            this.criteria.dictTypeCode="ITEM_STATUS";
             
            this.$http.post(selelct_url,this.criteria,{emulateJSON: true}).then(function(res){
               
               for(var i=0; i<res.body.data.list.length;i++){
               	
               	  $("#m_select_choice").append('<option value="'+res.body.data.list[i].dictDataCode+'">'+res.body.data.list[i].dictDataName+'</option>');
               }
               
            },function(res){
                    	
                        
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
      	        submit_form: function(){
      	        	this.dialogVisible_fifth=false;
//    	        	this.dialogVisible_sixth=true;
      	        },
      	        show_promise_man: function(){
      	        	this.promise_man=true;
      	        },
      	        show_promise_enterprise: function(){
      	        	this.promise_enterprise=true;
      	        },
                show_details: function(){
                	
                	this.dialogVisible_fifth=true;
                	
                },
                modify_details: function(){
                	
                	this.dialogVisible_fifth=true;
                	
                },
                delete_details: function(){
                	
                	this.dialogVisible_third=true;
                	
                },
                add_apply_form: function(){
                	
                	this.dialogVisible_fifth=true;
                },
                
            search_form: function(){
            
            this.criteria={};
   
            this.url=localStorage.localhost+'/firmLoanApplyFacade/findFirmLoanApplyList'
                	
    	    this.criteria.pageIndex=this.currentPage;
                	
            this.criteria.pageSize=this.pagesize;
            
            var current_token=localStorage.tokens;
                	
            this.criteria.authorization=current_token;
            
            this.$http.post(this.url,this.criteria,{emulateJSON: true}).then(function(res){
        
              this.tableData=res.body.data.firmContractInfoVoList;
              
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
                    this.applyNo = row.applyNo;
                },
                //编辑
  
                //单行删除
                handleDelete: function(index, row) {
                    var array = [];
                    array.push(row.id);
                    this.$http.post('newstu/delete',{"array":array},{emulateJSON: true}).then(function(res){
                        this.search_form();
                    },function(){
                        console.log('failed');
                    });
                },
                add: function(){
                        this.$prompt('请输入名称', '提示', {
                          confirmButtonText: '确定',
                          cancelButtonText: '取消',
                        }).then(({ value }) => {
                            if(value==''||value==null)
                                return;
                            this.$http.post(this.url,{"name":value},{emulateJSON: true}).then(function(res){
                                this.search_form();
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
                        this.search_form();
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
                    this.search_form();
                },
                //页码变更
                handleCurrentChange: function(val) {
                    this.currentPage = val;
                    this.search_form();
                }    

    }
  }
</script>
