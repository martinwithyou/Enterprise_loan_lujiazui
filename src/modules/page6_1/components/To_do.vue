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
.select_style{
	width:190px;
	height:36px;
	border:1px solid #bfcbd9;
	color:#999999;
}
.part_title{
	width:100%;
	height:50px;
	line-height:50px;
	border:0px solid #3074BD;
	color:#1d8ec0;
	font-weight:600;
	background-color: #ffffff;
	float:left;
	margin-bottom:20px;
}
.part_title_new{
	width:100%;
	line-height:50px;
	border:0px solid #3074BD;
	padding-left:20px;
	color:#1d8ec0;
	font-weight:600;
}
.new_input_style{
	border-radius: 0px !important;
	width:190px !important;
}
.new_input_style_long{
	border-radius: 0px !important;
	width:330px !important;
}
.modle_window{
	width:100%;
	height:100%;
	background-color: #f2f2f2;
	position:absolute;
	z-index:1000;
	top:0px;
}
.enterprise_basic_info{
	line-height: 50px;
	width:100%;
    border: 0px solid #3074BD;
    padding-left: 20px;
    color: #1d8ec0;
    font-weight: 600;
    font-size: 14px !important;
	float:left;
}
.enterprise_basic_info_body{
	width:100%;
	min-height:1550px;
	float:left;
}

.el-tabs--border-card>.el-tabs__content{
	padding:0px !important;
}
.el-tabs__content{
	padding:0px !important;
}
.border_totle_content{
	width:100%;
	min-height:1600px;
	position:relative;
	background-color: #ffffff;
}
.border_totle_content_part{
	width:100%;
	border:1px solid #d9d9d9;
	box-shadow: 0px 0px 3px #d9d9d9;
	margin-bottom:20px;
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
.performance_window{
	width:100%;
	height:500px;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
}
  
.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}
  
.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
.button_style{
	margin-bottom:20px;
	margin-left:45%;
}
</style>  
<template>
	<div> 
		
<!-- ---------------------vue path start--------------------------->
<div class="vue_location">
	<div class="page_location_icon"></div>
	<div class="page_location_content" v-text="location"></div>
</div>
<!------------------------vue path end------------------------------>
<!----------------------------->
<el-dialog
  title="提示"
  :visible.sync="dialogVisible_success"
  size="tiny"
  :modal-append-to-body="false"
  :close-on-click-modal="false">
  <span>操作成功</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible_success = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible_success = false">确 定</el-button>
  </span>
</el-dialog>
<!----------------------------->        
<!--------------表单录入---------------------------------------------->
<div class="part_title">
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
<el-row>
  <el-col :span="24">
  	<div class="grid-content bg-purple" style="padding-left:100px;">
  		<!--<el-button type="primary" @click="btn_operation_button">办理</el-button>-->
  		<el-button type="primary" @click="btn_operation(button.btnCode)" v-for="button in buttons">{{button.btnName}}</el-button>
  	</div>
  </el-col>
</el-row>
</el-form>
</div>

<!----------------表格开始--------------------------------------------------->
<!---------------------------------------------------------------->
            <el-table
            height="350"
            border
            stripe   
            :data="tableData"
            :default-sort = "{prop: 'id', order: 'ascending'}"
            @selection-change="handleSelectionChange"   
            @row-click="handleclick"
            style="width: 100%">
    
            <el-table-column
              type="selection">
            </el-table-column>
            
            <el-table-column
            prop="loanApplyNo"
            label="申请编号"
            width="200">
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
            prop="firmCertTypeName"
            label="企业证件类型"
            width="300">
            </el-table-column>
            
            <el-table-column
            prop="firmCertNo"
            label="企业证件号码"
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
            label="期限"
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
            prop="currNode"
            label="当前节点"
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="organName"
            label="营业部名称"
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="procStartCreateTime"
            label="任务创建时间"
            :formatter="dateFormat"
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="currProcStatusName"
            label="流程状态"
            width="300">
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

<!-----------------表格结束-------------------------------------------------->


<!--------------------------------------------------->
<div class="modle_window" v-show="dialogVisible_abc">
	<el-tabs type="border-card">
        <el-tab-pane label="审核页面" v-if="dialogVisible_abc_a">
        	<div class="border_totle_content">
        	    <div class="enterprise_basic_info_body">
        		
        	<el-form :inline="true" :model="details_form" ref="form" label-width="100px" class="demo-ruleForm">
        			
        	<div  class="border_totle_content_part">
        		<div class="enterprise_basic_info">企业基本信息</div>
        		
        		<el-row>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple">
                    		<el-form-item label="企业名称" >
                                <el-input v-model="details_form.firmName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="企业证件类型" >
                                <el-input v-model="details_form.firmCertTypeName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple">
                    		<el-form-item label="社会信用代码" >
                                <el-input v-model="details_form.firmCertNo"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                </el-row>
                
                <el-row>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="法人姓名" >
                                <el-input v-model="details_form.corporateName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple">
                    		<el-form-item label="法人证件号码" >
                                <el-input v-model="details_form.corporateCertValue"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="法人手机号码" >
                                <el-input v-model="details_form.corporateMobile"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                </el-row>
                
                <el-row>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple">
                    		<el-form-item label="账户类型" >
                                <el-input v-model="details_form.acctTypeName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="开户银行" >
                                <el-input v-model="details_form.bankName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple">
                    		<el-form-item label="对公账号" >
                                <el-input v-model="details_form.bankAcct"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                </el-row>
                
                <el-row>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="开户省" >
                                <el-input v-model="details_form.provinceName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple">
                    		<el-form-item label="开户城市" >
                                <el-input v-model="details_form.cityName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="开户支行" >
                                <el-input v-model="details_form.bankBranchName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                </el-row>
            </div>
            
            <div  class="border_totle_content_part">
                <div class="enterprise_basic_info">基本申请信息</div>
                <el-row>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="申请编号" >
                                <el-input v-model="details_form.applyNo"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple">
                    		<el-form-item label="申请日期" >
                                <el-input v-model="details_form.applyDate"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="进件渠道" >
                                <el-input v-model="details_form.organName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="企业名称" >
                                <el-input v-model="details_form.firmName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple">
                    		<el-form-item label="企业证件类型" >
                                <el-input v-model="details_form.basicLoanTypeName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="企业证件号码" >
                                <el-input v-model="details_form.firmCertNo"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                </el-row>
     
                <el-row>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="产品名称" >
                                <el-input v-model="details_form.financeProductName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple">
                    		<el-form-item label="借款金额（万元）" >
                                <el-input v-model="details_form.applyAmount"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="期数" >
                                <el-input v-model="details_form.deadlineName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                </el-row>
                
                <el-row>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="主体企业名称" >
                                <el-input v-model="details_form.mainFirmName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple">
                    		<el-form-item label="主体企业证件类型" >
                                <el-input v-model="details_form.mainFirmCertTypeName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="组织机构代码" >
                                <el-input v-model="details_form.organizationCode"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                </el-row>
                
                <el-row>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="企业保证金" >
                                <el-input v-model="details_form.firmDeposit"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple">
                    		<el-form-item label="还款方式" >
                                <el-input v-model="details_form.repayTypeName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="发生方式" >
                                <el-input v-model="details_form.creditWayName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                </el-row>
            </div>
            
            <div class="border_totle_content_part">
            <div class="enterprise_basic_info">担保人信息列表</div>
            <el-table
            height="200"
            border
            ref="testTable"       
            :data="person_tableData"
            :default-sort = "{prop: 'id', order: 'ascending'}"
            @selection-change="handleSelectionChange"   
            @row-click="handleclick"
            :row-class-name = "tableRowClassName"
            style="width: 100%">
            
            <el-table-column
            prop="guarantorName"
            label="担保人姓名"
            width="200">
            </el-table-column>
    
            <el-table-column
            prop="guarantorIdcard"
            label="担保人卡号"
            width="200">
            </el-table-column>
    
            <el-table-column
            prop="guarantorMobile"
            label="担保人手机号"
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="guarantorAddress"
            label="担保人地址">
            </el-table-column>
            
            
            </el-table> 
            </div>
            
            
            <div class="border_totle_content_part">
            <div class="enterprise_basic_info">担保企业列表</div>
            <el-table
            height="200"
            border
            ref="testTable"       
            :data="firm_tableData"
            :default-sort = "{prop: 'id', order: 'ascending'}"
            @selection-change="handleSelectionChange"   
            @row-click="handleclick"
            :row-class-name = "tableRowClassName"
            style="width: 100%">
            
            <el-table-column
            prop="guarFirmName"
            label="担保企业名称"
            width="200">
            </el-table-column>
    
            <el-table-column
            prop="guarFirmCertNo"
            label="担保企业证件号码"
            width="200">
            </el-table-column>
    
            <el-table-column
            prop="guarFirmCertName"
            label="担保企业证件类型名称"
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="guarFirmAddress"
            label="担保企业地址">
            </el-table-column>

            </el-table> 
            </div>
            
            
            <div  class="border_totle_content_part" v-show="first_operation">
                <div class="enterprise_basic_info">一级审核意见</div>
                
                <el-row>
                <el-col :span="8">
                	<div class="grid-content bg-purple">
                		<el-form-item label="产品名称" >
                            <el-input v-model="details_form.financeProductName"  :disabled="true"></el-input>
                        </el-form-item>
                	</div>
                </el-col>
                <el-col :span="8">
                	<div class="grid-content bg-purple-light">
                		<el-form-item label="审批金额" >
                            <el-input v-model="details_form.apprAmt"  :disabled="true"></el-input>
                        </el-form-item>
                        <span>万元</span>
                	</div>
                </el-col>
                <el-col :span="8">
                	<div class="grid-content bg-purple">
                		<el-form-item label="期限" >
                            <el-input v-model="details_form.deadlineName"  :disabled="true"></el-input>
                        </el-form-item>
                	</div>
                </el-col>
                </el-row>
                
                <el-row>
                <el-col :span="8">
                	<div class="grid-content bg-purple">
                		<el-form-item label="综合费率" >
                            <el-input v-model="details_form.repayRate"  :disabled="true"></el-input>
                        </el-form-item>
                	</div>
                </el-col>
                <el-col :span="8">
                	<div class="grid-content bg-purple-light">
                		<el-form-item label="拒绝原因" >
                            <el-input v-model="details_form.refuseReason"  :disabled="true"></el-input>
                        </el-form-item>
                	</div>
                </el-col>
                <el-col :span="8">
                	<div class="grid-content bg-purple">
                		
                	</div>
                </el-col>
                </el-row>
            </div>
            
            <div  class="border_totle_content_part" v-show="second_operation">
                <div class="enterprise_basic_info">二审审核意见</div>
                
                <el-row>
                <el-col :span="8">
                	<div class="grid-content bg-purple">
                		<el-form-item label="产品名称" >
                            <el-input v-model="details_form.s_financeProductName"  :disabled="true"></el-input>
                        </el-form-item>
                	</div>
                </el-col>
                <el-col :span="8">
                	<div class="grid-content bg-purple-light">
                		<el-form-item label="审批金额" >
                            <el-input v-model="details_form.s_apprAmt"  :disabled="true"></el-input>
                        </el-form-item>
                        <span>万元</span>
                	</div>
                </el-col>
                <el-col :span="8">
                	<div class="grid-content bg-purple">
                		<el-form-item label="期限" >
                            <el-input v-model="details_form.s_deadlineName"  :disabled="true"></el-input>
                        </el-form-item>
                	</div>
                </el-col>
                </el-row>
                
                <el-row>
                <el-col :span="8">
                	<div class="grid-content bg-purple">
                		<el-form-item label="综合费率" >
                            <el-input v-model="details_form.s_repayRate"  :disabled="true"></el-input>
                        </el-form-item>
                	</div>
                </el-col>
                <el-col :span="8">
                	<div class="grid-content bg-purple-light">
                		<el-form-item label="拒绝原因" >
                            <el-input v-model="details_form.s_refuseReason"  :disabled="true"></el-input>
                        </el-form-item>
                	</div>
                </el-col>
                <el-col :span="8">
                	<div class="grid-content bg-purple">
                		
                	</div>
                </el-col>
                </el-row>
            </div>  
               
            <div class="border_totle_content_part" v-show="account_meaning">
            	<div class="enterprise_basic_info">财务审核意见</div>
             <el-row>
                <el-col :span="8">
                	<div class="grid-content bg-purple">
                		<el-form-item label="产品名称" >
                            <el-input v-model="details_form.a_financeProductName"  :disabled="true"></el-input>
                        </el-form-item>
                	</div>
                </el-col>
                <el-col :span="8">
                	<div class="grid-content bg-purple-light">
                		<el-form-item label="审批金额" >
                            <el-input v-model="details_form.a_apprAmt"  :disabled="true"></el-input>
                        </el-form-item>
                        <span>万元</span>
                	</div>
                </el-col>
                <el-col :span="8">
                	<div class="grid-content bg-purple">
                		<el-form-item label="期限" >
                            <el-input v-model="details_form.a_deadlineName"  :disabled="true"></el-input>
                        </el-form-item>
                	</div>
                </el-col>
                </el-row>
                
                <el-row>
                <el-col :span="8">
                	<div class="grid-content bg-purple">
                		<el-form-item label="综合费率" >
                            <el-input v-model="details_form.a_repayRate"  :disabled="true"></el-input>
                        </el-form-item>
                	</div>
                </el-col>
                <el-col :span="8">
                	<div class="grid-content bg-purple-light">
                		<el-form-item label="拒绝原因" >
                            <el-input v-model="details_form.a_refuseReason"  :disabled="true"></el-input>
                        </el-form-item>
                	</div>
                </el-col>
                <el-col :span="8">
                	<div class="grid-content bg-purple">
                		
                	</div>
                </el-col>
                </el-row>

                
            </div> 
            
            
            <div class="border_totle_content_part" style="height:350px;">
            	<div class="enterprise_basic_info">审核轨迹</div>
                <div style="width:90%;height:60px;float:left;padding-left:100px;margin-top:10px;margin-bottom:20px;">
                	<el-steps :space="200" :active="5" finish-status="success">
                    <el-step title="客户经理A"></el-step>
                    <el-step title="一级审批"></el-step>
                    <el-step title="二级审批"></el-step>
                    <el-step title="客户经理"></el-step>
                    <el-step title="财务审核"></el-step>
                    </el-steps>
                </div>
                
            <el-table
            height="200"
            border
            ref="testTable"       
            :data="s_tableData"
            :default-sort = "{prop: 'id', order: 'ascending'}"
            @selection-change="handleSelectionChange"   
            @row-click="handleclick"
            :row-class-name = "tableRowClassName"
            style="width: 100%">
            
            <el-table-column
            prop="taskName"
            label="处理阶段"
            width="200">
            </el-table-column>
    
            <el-table-column
            prop="taskAssignee"
            label="处理人"
            width="200">
            </el-table-column>
    
            <el-table-column
            prop="organName"
            label="所在部门"
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="taskStartTime"
            label="开始时间"
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="taskEndTime"
            label="结束时间"
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="taskCompleteComment"
            label="审批结果"
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="apprComment"
            label="意见详情"
            width="300">
            </el-table-column>
            
            </el-table> 
            
                
            </div>
            
             <div style="width:100%;float:left;text-align:center;">
             	  <el-button type="primary" @click="close_details">关闭</el-button>
             </div>
             
            </el-form>
        	</div>
            </div>
        </el-tab-pane>
     
	   <el-tab-pane label="合同信息"  v-if="dialogVisible_abc_c">
	  	<el-form :inline="true" :model="ht_form" ref="form" label-width="100px" class="demo-ruleForm">
	  	    <div  class="border_totle_content_part">
        		<div class="enterprise_basic_info">合同信息</div>
        		
        		<el-row>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple">
                    		<el-form-item label="放款账户" >
                                <el-input v-model="ht_form.acctTypeName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="协议编号" >
                                <el-input v-model="ht_form.agreementNo"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple">
                    		<el-form-item label="申请日期" >
                                <el-input v-model="ht_form.applyDate"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                </el-row>
                
                <el-row>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="申请编号" >
                                <el-input v-model="ht_form.applyNo"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple">
                    		<el-form-item label="开户行" >
                                <el-input v-model="ht_form.bankName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="企业证件类型" >
                                <el-input v-model="ht_form.firmCertTypeName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                </el-row>
                
                <el-row>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple">
                    		<el-form-item label="合同金额" >
                                <el-input v-model="ht_form.contractAmount"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="合同编号" >
                                <el-input v-model="ht_form.contractNo"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple">
                    		<el-form-item label="产品期限" >
                                <el-input v-model="ht_form.deadlineName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                </el-row>
                
                <el-row>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="产品名称" >
                                <el-input v-model="ht_form.financeProductName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple">
                    		<el-form-item label="企业质保金" >
                                <el-input v-model="ht_form.firmDeposit"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="企业名称" >
                                <el-input v-model="ht_form.firmName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                </el-row>
                
                <el-row>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="最终审批金额" >
                                <el-input v-model="ht_form.lastApproveName"  :disabled="true"></el-input>
                            </el-form-item>
                            <span>万元</span>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple">
                    		<el-form-item label="放款金额" >
                                <el-input v-model="ht_form.loanAmount"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="进件渠道" >
                                <el-input v-model="ht_form.organName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                </el-row>
                
                <el-row>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="还款方式" >
                                <el-input v-model="ht_form.repayTypeName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple">
                    		<el-form-item label="社会信用代码" >
                                <el-input v-model="ht_form.firmCertNo"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    
                </el-row>
            </div>
	    </el-form>
	    
	    <div class="border_totle_content_part">
	    
	    <div class="enterprise_basic_info">您上传的附件</div>
	    
	    	<el-table
            :data="ht_tableData"
            stripe
            style="width: 100%">
    <el-table-column
      prop="rowId"
      label="序号"
      width="180">
    </el-table-column>
    
    <el-table-column
      prop="attcName"
      label="附件名称"
      width="220">
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
      prop="createrName"
      label="创建人">
    </el-table-column>
    
    <el-table-column
      prop="currNode"
      label="操作"
      width="200">
      <template scope="scope">
       <el-button type="primary" size="mini" @click="handleDelete(scope.$index, scope.row)">预览</el-button>
      </template>
    </el-table-column>
           </el-table>
	    </div>
	  </el-tab-pane>
	          
        <el-tab-pane label="附件信息" v-if="dialogVisible_abc_b">
          <div class="performance_window">
          	<el-tabs v-model="activeName" >
                <el-tab-pane label="基本附件" name="first">
                	
          	
    <el-table
    :data="e_tableData"
    @selection-change="handleSelectionChange"   
    @row-click="handleclick"
    style="width: 100%">
    
    <el-table-column
      prop="rowId"
      label="序号"
      width="180">
    </el-table-column>
    
    <el-table-column
      prop="attcName"
      label="附件名称"
      width="220">
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
      prop="createrName"
      label="创建人">
    </el-table-column>
    
    <el-table-column
      prop="currNode"
      label="操作"
      width="200">
      <template scope="scope">
       <el-button type="primary" size="mini" @click="handleDelete(scope.$index, scope.row)">预览</el-button>
      </template>
    </el-table-column>
  </el-table>
<!----------------------------------------------------------->  
                </el-tab-pane>
                <el-tab-pane label="流程附件" name="second">
<!----------------------------------------------------------->
    <el-table
    :data="l_tableData"
    @selection-change="handleSelectionChange"   
    @row-click="handleclick"
    style="width: 100%">
    
    </el-table-column>
    <el-table-column
      prop="rowId"
      label="序号"
      width="180">
    </el-table-column>
    <el-table-column
      prop="attcName"
      label="附件名称"
      width="220">
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
      prop="createrName"
      label="创建人">
    </el-table-column>
    <el-table-column
      prop="currNode"
      label="操作"
      width="200">
      <template scope="scope">
       <el-button type="primary" size="mini" @click="handleDelete(scope.$index, scope.row)">预览</el-button>
      </template>
    </el-table-column>
  </el-table>

                </el-tab-pane>
            </el-tabs>
          </div>
        </el-tab-pane>
       
	   <el-tab-pane label="企业申请信息"    v-if="dialogVisible_abc_d">
	   	<el-form :inline="true" :model="details_form" ref="form" label-width="100px" class="demo-ruleForm">
        			
        	<div  class="border_totle_content_part">
        		<div class="enterprise_basic_info">企业基本信息</div>
        		
        		<el-row>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple">
                    		<el-form-item label="企业名称" >
                                <el-input v-model="details_form.firmName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="企业证件类型" >
                                <el-input v-model="details_form.firmCertTypeName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple">
                    		<el-form-item label="社会信用代码" >
                                <el-input v-model="details_form.firmCertNo"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                </el-row>
                
                <el-row>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="法人姓名" >
                                <el-input v-model="details_form.corporateName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple">
                    		<el-form-item label="法人证件号码" >
                                <el-input v-model="details_form.corporateCertValue"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="法人手机号码" >
                                <el-input v-model="details_form.corporateMobile"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                </el-row>
                
                <el-row>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple">
                    		<el-form-item label="账户类型" >
                                <el-input v-model="details_form.acctTypeName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="开户银行" >
                                <el-input v-model="details_form.bankName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple">
                    		<el-form-item label="对公账号" >
                                <el-input v-model="details_form.bankAcct"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                </el-row>
                
                <el-row>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="开户省" >
                                <el-input v-model="details_form.provinceName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple">
                    		<el-form-item label="开户城市" >
                                <el-input v-model="details_form.cityName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="开户支行" >
                                <el-input v-model="details_form.bankBranchName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                </el-row>
            </div>
            
            <div  class="border_totle_content_part">
                <div class="enterprise_basic_info">基本申请信息</div>
                <el-row>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="申请编号" >
                                <el-input v-model="details_form.applyNo"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple">
                    		<el-form-item label="申请日期" >
                                <el-input v-model="details_form.applyDate"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="进件渠道" >
                                <el-input v-model="details_form.organName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="企业名称" >
                                <el-input v-model="details_form.firmName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple">
                    		<el-form-item label="企业证件类型" >
                                <el-input v-model="details_form.basicLoanTypeName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="企业证件号码" >
                                <el-input v-model="details_form.firmCertNo"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                </el-row>
     
                <el-row>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="产品名称" >
                                <el-input v-model="details_form.financeProductName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple">
                    		<el-form-item label="借款金额（万元）" >
                                <el-input v-model="details_form.applyAmount"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="期数" >
                                <el-input v-model="details_form.deadlineName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                </el-row>
                
                <el-row>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="主体企业名称" >
                                <el-input v-model="details_form.mainFirmName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple">
                    		<el-form-item label="主体企业证件类型" >
                                <el-input v-model="details_form.mainFirmCertTypeName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="组织机构代码" >
                                <el-input v-model="details_form.organizationCode"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                </el-row>
                
                <el-row>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="企业保证金" >
                                <el-input v-model="details_form.firmDeposit"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple">
                    		<el-form-item label="还款方式" >
                                <el-input v-model="details_form.repayTypeName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="发生方式" >
                                <el-input v-model="details_form.creditWayName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                </el-row>
            </div>
            
            <div class="border_totle_content_part">
            <div class="enterprise_basic_info">担保人信息列表</div>
            <el-table
            height="200"
            border
            ref="testTable"       
            :data="person_tableData"
            :default-sort = "{prop: 'id', order: 'ascending'}"
            @selection-change="handleSelectionChange"   
            @row-click="handleclick"
            :row-class-name = "tableRowClassName"
            style="width: 100%">
            
            <el-table-column
            prop="guarantorName"
            label="担保人姓名"
            width="200">
            </el-table-column>
    
            <el-table-column
            prop="guarantorIdcard"
            label="担保人卡号"
            width="200">
            </el-table-column>
    
            <el-table-column
            prop="guarantorMobile"
            label="担保人手机号"
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="guarantorAddress"
            label="担保人地址">
            </el-table-column>
            
            
            </el-table> 
            </div>
            
            
            <div class="border_totle_content_part">
            <div class="enterprise_basic_info">担保企业列表</div>
            <el-table
            height="200"
            border
            ref="testTable"       
            :data="firm_tableData"
            :default-sort = "{prop: 'id', order: 'ascending'}"
            @selection-change="handleSelectionChange"   
            @row-click="handleclick"
            :row-class-name = "tableRowClassName"
            style="width: 100%">
            
            <el-table-column
            prop="guarFirmName"
            label="担保企业名称"
            width="200">
            </el-table-column>
    
            <el-table-column
            prop="guarFirmCertNo"
            label="担保企业证件号码"
            width="200">
            </el-table-column>
    
            <el-table-column
            prop="guarFirmCertName"
            label="担保企业证件类型名称"
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="guarFirmAddress"
            label="担保企业地址">
            </el-table-column>

            </el-table> 
            </div>
        </el-form>   
        
    <div  class="border_totle_content_part">
    <div class="enterprise_basic_info">基本附件</div>      
	 <el-table
    :data="e_tableData"
    @selection-change="handleSelectionChange"   
    @row-click="handleclick"
    style="width: 100%">
    
    <el-table-column
      prop="rowId"
      label="序号"
      width="180">
    </el-table-column>
    
    <el-table-column
      prop="attcName"
      label="附件名称"
      width="220">
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
      prop="createrName"
      label="创建人">
    </el-table-column>
    
    <el-table-column
      prop="currNode"
      label="操作"
      width="200">
      <template scope="scope">
       <el-button type="primary" size="mini" @click="handleDelete(scope.$index, scope.row)">预览</el-button>
      </template>
    </el-table-column>
  </el-table>
	 </div>  
	   
	   
	   </el-tab-pane>
	</el-tabs>
</div>
<!---------------------------------------------------->


<!--------------------------------------------------->
<div class="modle_window" v-show="dialogVisible_operation">
	<el-tabs type="border-card">
        <el-tab-pane label="审核页面" v-if="dialogVisible_abc_a">
        	<div class="border_totle_content">
        	    <div class="enterprise_basic_info_body">
        		
        	<el-form :inline="true" :model="details_form" ref="form" label-width="100px" class="demo-ruleForm">
        			
        	<div  class="border_totle_content_part">
        		<div class="enterprise_basic_info">企业基本信息</div>
        		
        		<el-row>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple">
                    		<el-form-item label="企业名称" >
                                <el-input v-model="details_form.firmName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="企业证件类型" >
                                <el-input v-model="details_form.firmCertTypeName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple">
                    		<el-form-item label="社会信用代码" >
                                <el-input v-model="details_form.firmCertNo"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                </el-row>
                
                <el-row>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="法人姓名" >
                                <el-input v-model="details_form.corporateName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple">
                    		<el-form-item label="法人证件号码" >
                                <el-input v-model="details_form.corporateCertValue"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="法人手机号码" >
                                <el-input v-model="details_form.corporateMobile"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                </el-row>
                
                <el-row>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple">
                    		<el-form-item label="账户类型" >
                                <el-input v-model="details_form.acctTypeName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="开户银行" >
                                <el-input v-model="details_form.bankName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple">
                    		<el-form-item label="对公账号" >
                                <el-input v-model="details_form.bankAcct"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                </el-row>
                
                <el-row>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="开户省" >
                                <el-input v-model="details_form.provinceName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple">
                    		<el-form-item label="开户城市" >
                                <el-input v-model="details_form.cityName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="开户支行" >
                                <el-input v-model="details_form.bankBranchName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                </el-row>
            </div>
            
            <div  class="border_totle_content_part">
                <div class="enterprise_basic_info">基本申请信息</div>
                <el-row>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="申请编号" >
                                <el-input v-model="details_form.applyNo"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple">
                    		<el-form-item label="申请日期" >
                                <el-input v-model="details_form.applyDate"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="进件渠道" >
                                <el-input v-model="details_form.organName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="企业名称" >
                                <el-input v-model="details_form.firmName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple">
                    		<el-form-item label="企业证件类型" >
                                <el-input v-model="details_form.firmCertTypeName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="企业证件号码" >
                                <el-input v-model="details_form.firmCertNo"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                </el-row>
     
                <el-row>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="产品名称" >
                                <el-input v-model="details_form.financeProductName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple">
                    		<el-form-item label="借款金额（万元）" >
                                <el-input v-model="details_form.applyAmount"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="期数" >
                                <el-input v-model="details_form.deadlineName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                </el-row>
                
                <el-row>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="主体企业名称" >
                                <el-input v-model="details_form.mainFirmName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple">
                    		<el-form-item label="主体企业证件类型" >
                                <el-input v-model="details_form.mainFirmCertTypeName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="组织机构代码" >
                                <el-input v-model="details_form.organizationCode"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                </el-row>
                
                <el-row>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="企业保证金" >
                                <el-input v-model="details_form.firmDeposit"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple">
                    		<el-form-item label="还款方式" >
                                <el-input v-model="details_form.repayTypeName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="发生方式" >
                                <el-input v-model="details_form.creditWayName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                </el-row>
            </div>
            
            <div class="border_totle_content_part">
            <div class="enterprise_basic_info">担保人信息列表</div>
            <el-table
            height="200"
            border
            ref="testTable"       
            :data="person_tableData"
            :default-sort = "{prop: 'id', order: 'ascending'}"
            @selection-change="handleSelectionChange"   
            @row-click="handleclick"
            :row-class-name = "tableRowClassName"
            style="width: 100%">
            
            <el-table-column
            prop="guarantorName"
            label="担保人姓名"
            width="200">
            </el-table-column>
    
            <el-table-column
            prop="guarantorIdcard"
            label="担保人卡号"
            width="200">
            </el-table-column>
    
            <el-table-column
            prop="guarantorMobile"
            label="担保人手机号"
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="guarantorAddress"
            label="担保人地址">
            </el-table-column>
            
            
            </el-table> 
            </div>
            
            
            <div class="border_totle_content_part">
            <div class="enterprise_basic_info">担保企业列表</div>
            <el-table
            height="200"
            border
            ref="testTable"       
            :data="firm_tableData"
            :default-sort = "{prop: 'id', order: 'ascending'}"
            @selection-change="handleSelectionChange"   
            @row-click="handleclick"
            :row-class-name = "tableRowClassName"
            style="width: 100%">
            
            <el-table-column
            prop="guarFirmName"
            label="担保企业名称"
            width="200">
            </el-table-column>
    
            <el-table-column
            prop="guarFirmCertNo"
            label="担保企业证件号码"
            width="200">
            </el-table-column>
    
            <el-table-column
            prop="guarFirmCertName"
            label="担保企业证件类型名称"
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="guarFirmAddress"
            label="担保企业地址">
            </el-table-column>

            </el-table> 
            </div>
            
            
            <div  class="border_totle_content_part" v-show="operation_first_operation">
                <div class="enterprise_basic_info">一级审核意见</div>
                
                <el-row>
                <el-col :span="8">
                	<div class="grid-content bg-purple">
                		<el-form-item label="产品名称" >
                            <el-input v-model="details_form.financeProductName"  :disabled="true"></el-input>
                        </el-form-item>
                	</div>
                </el-col>
                <el-col :span="8">
                	<div class="grid-content bg-purple-light">
                		<el-form-item label="审批金额" >
                            <el-input v-model="details_form.apprAmt"  :disabled="true"></el-input>
                        </el-form-item>
                        <span>万元</span>
                	</div>
                </el-col>
                <el-col :span="8">
                	<div class="grid-content bg-purple">
                		<el-form-item label="期限" >
                            <el-input v-model="details_form.deadlineName"  :disabled="true"></el-input>
                        </el-form-item>
                	</div>
                </el-col>
                </el-row>
                
                <el-row>
                <el-col :span="8">
                	<div class="grid-content bg-purple">
                		<el-form-item label="综合费率" >
                            <el-input v-model="details_form.repayRate"  :disabled="true"></el-input>
                        </el-form-item>
                	</div>
                </el-col>
                <el-col :span="8">
                	<div class="grid-content bg-purple-light">
                		<el-form-item label="拒绝原因" >
                            <el-input v-model="details_form.refuseReason"  :disabled="true"></el-input>
                        </el-form-item>
                	</div>
                </el-col>
                <el-col :span="8">
                	<div class="grid-content bg-purple">
                		
                	</div>
                </el-col>
                </el-row>
            </div>
            
            <div  class="border_totle_content_part" v-show="operation_second_operation">
                <div class="enterprise_basic_info">二审审核意见</div>
                
                <el-row>
                <el-col :span="8">
                	<div class="grid-content bg-purple">
                		<el-form-item label="产品名称" >
                            <el-input v-model="details_form.s_financeProductName"  :disabled="true"></el-input>
                        </el-form-item>
                	</div>
                </el-col>
                <el-col :span="8">
                	<div class="grid-content bg-purple-light">
                		<el-form-item label="审批金额" >
                            <el-input v-model="details_form.s_apprAmt"  :disabled="true"></el-input>
                        </el-form-item>
                        <span>万元</span>
                	</div>
                </el-col>
                <el-col :span="8">
                	<div class="grid-content bg-purple">
                		<el-form-item label="期限" >
                            <el-input v-model="details_form.s_deadlineName"  :disabled="true"></el-input>
                        </el-form-item>
                	</div>
                </el-col>
                </el-row>
                
                <el-row>
                <el-col :span="8">
                	<div class="grid-content bg-purple">
                		<el-form-item label="综合费率" >
                            <el-input v-model="details_form.s_repayRate"  :disabled="true"></el-input>
                        </el-form-item>
                	</div>
                </el-col>
                <el-col :span="8">
                	<div class="grid-content bg-purple-light">
                		<el-form-item label="拒绝原因" >
                            <el-input v-model="details_form.s_refuseReason"  :disabled="true"></el-input>
                        </el-form-item>
                	</div>
                </el-col>
                <el-col :span="8">
                	<div class="grid-content bg-purple">
                		
                	</div>
                </el-col>
                </el-row>
            </div>  
               
           <div  class="border_totle_content_part" v-show="operation_second_operation_input">
                <div class="enterprise_basic_info" v-text="title_content"></div>
                
                <el-row>
                <el-col :span="8">
                	<div class="grid-content bg-purple">
                        <!--<el-form-item label="产品名称" >
  		                    <select id="e_product_name" class="select_style"></select>
  		                </el-form-item>-->
  		                <el-form-item label="产品名称" >
                            <el-input v-model="details_form.s_apprAmt_name" :disabled="true"></el-input>
                        </el-form-item>
                	</div>
                </el-col>
                <el-col :span="8">
                	<div class="grid-content bg-purple-light">
                		<el-form-item label="审批金额" >
                            <el-input v-model="details_form.s_apprAmt"></el-input>
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
                		<el-form-item label="综合费率" >
                            <el-input v-model="details_form.s_repayRate" ></el-input>
                        </el-form-item>
                	</div>
                </el-col>
                <el-col :span="8">
                	<div class="grid-content bg-purple-light">
                		<el-form-item label="拒绝原因" >
                            <el-input v-model="details_form.s_refuseReason"  ></el-input>
                        </el-form-item>
                	</div>
                </el-col>
                <el-col :span="8">
                	<div class="grid-content bg-purple">
                		<el-form-item v-show="show_for_second" label="评审会意见" >
                            <el-select v-model="details_form.h_refuseReason" placeholder="请选择">
                            <el-option label="通过" value="通过"></el-option>
                            <el-option label="拒绝" value="拒绝"></el-option>
                            </el-select>
                            <!--<selelct v-model="details_form.h_refuseReason"  v-show="show_for_second">
                            	<op><>
                            </select>-->
                        </el-form-item>
                	</div>
                </el-col>
                </el-row>
                <el-row>
                <el-col :span="24">
                	<div class="grid-content bg-purple">
                		<el-form-item label="     ">
                               <el-input type="textarea" v-model="details_form.a_refuseReason" placeholder="请输入您的审核意见，字数不超过500字（必填！）"   style="width:1000px;"></el-input>
                        </el-form-item>
                        <div style="float:right;margin-right:20px;margin-bottom:20px;">
                        <el-button type="primary" @click="operation_account_meaning_another_comfirm_agree">审核通过</el-button>
                        <el-button type="primary" @click="operation_account_meaning_another_comfirm_confused">拒绝</el-button>
                        <el-button type="primary" v-text="input_content" @click="operation_account_meaning_another_comfirm_back"></el-button>
                        </div>
                	</div>
                </el-col>
                </el-row>
                <el-row>
                	
                <el-upload
                v-show="first_post_action_flag"
	            ref="upload"
                class="upload-demo"
                :action="first_post_action"
                :file-list="fileList"
                :auto-upload="true">
                <el-button slot="trigger" size="small" type="success">选取上传文件</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
                
                <el-upload
                v-show="second_post_action_flag"
	            ref="upload"
                class="upload-demo"
                :action="second_post_action"
                :file-list="fileList"
                :auto-upload="true">
                <el-button slot="trigger" size="small" type="danger">选取上传文件</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
                </el-row>
            </div>  
            <div class="border_totle_content_part" v-show="operation_account_meaning">
            <div class="enterprise_basic_info">财务审核意见</div>
                <el-row>
                <el-col :span="24">
                	<div class="grid-content bg-purple">
                		<el-form-item label="     ">
                               <el-input type="textarea" v-model="details_form.a_refuseReason" placeholder="请输入您的审核意见，字数不超过500字（必填！）"   style="width:1000px;"></el-input>
                        </el-form-item>
                        <div style="float:right;margin-right:20px;margin-bottom:20px;">
                        <el-button type="primary" @click="finanace_agree">审核通过</el-button>
                        <el-button type="primary" @click="finanace_refused">拒绝</el-button>
                        <el-button type="primary" @click="finanace_back">退回上一步</el-button>
                        </div>
                	</div>
                </el-col>
                </el-row>
                <!--<el-row>
                <el-upload
	            ref="upload"
                class="upload-demo"
                :action="finance_post_action"
                :file-list="fileList"
                :auto-upload="true">
                <el-button slot="trigger" size="small" type="primary">上传选取文件</el-button>
  
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
                </el-row>-->
            </div> 
            
            <div class="border_totle_content_part" v-show="operation_account_meaning_another">
            <div class="enterprise_basic_info">审核意见</div>
            <div slot="tip" class="el-upload__tip" style="color:red !important;padding-left:20px;margin-bottom:20px;">退回原因：<span v-text="refuseReason"></span></div>
                
                <el-row>
                <el-col :span="24">
                	<div class="grid-content bg-purple">
                		<el-form-item label="     ">
                               <el-input type="textarea" v-model="details_form.auditOpinion" placeholder="请输入您的审核意见，字数不超过500字（必填！）"   style="width:1000px;"></el-input>
                        </el-form-item>
                        <div style="float:right;margin-right:20px;margin-bottom:20px;">
                        <el-button type="primary" @click="operation_account_meaning_another_comfirmBack">提交</el-button>
                        <el-button type="primary" @click="operation_account_meaning_another_cancle_comfirmBack">取消</el-button>
                        <el-button type="primary" @click="close_details_operation">返回</el-button>
                        </div>
                	</div>
                </el-col>
                </el-row>
                
                <el-row>
                <el-upload
	            ref="upload"
                class="upload-demo"
                :action="apply_post_action"
                :file-list="fileList"
                :auto-upload="true">
                <el-button slot="trigger" size="small" type="success">选取文件</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
                </el-row>
            </div>
            
            <div class="border_totle_content_part" style="height:350px;">
            	<div class="enterprise_basic_info">审核轨迹</div>
                <div style="width:90%;height:60px;float:left;padding-left:100px;margin-top:10px;margin-bottom:20px;">
                	<el-steps :space="200" :active="5" finish-status="success">
                    <el-step title="客户经理A"></el-step>
                    <el-step title="一级审批"></el-step>
                    <el-step title="二级审批"></el-step>
                    <el-step title="客户经理"></el-step>
                    <el-step title="财务审核"></el-step>
                    </el-steps>
                </div>
                
            <el-table
            height="200"
            border
            ref="testTable"       
            :data="s_tableData"
            :default-sort = "{prop: 'id', order: 'ascending'}"
            @selection-change="handleSelectionChange"   
            @row-click="handleclick"
            :row-class-name = "tableRowClassName"
            style="width: 100%">
            
            <el-table-column
            prop="taskName"
            label="处理阶段"
            width="200">
            </el-table-column>
    
            <el-table-column
            prop="taskAssignee"
            label="处理人"
            width="200">
            </el-table-column>
    
            <el-table-column
            prop="organName"
            label="所在部门"
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="taskStartTime"
            label="开始时间"
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="taskEndTime"
            label="结束时间"
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="taskCompleteComment"
            label="审批结果"
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="apprComment"
            label="意见详情"
            width="300">
            </el-table-column>
            
            </el-table> 
            
                
            </div>
            
             <div style="width:100%;float:left;text-align:center;">
             	  <el-button type="primary" @click="close_details_operation">关闭</el-button>
             </div>
             
            </el-form>
        	</div>
            </div>
        </el-tab-pane>
     
	   <el-tab-pane label="合同信息"  v-if="dialogVisible_abc_c">
	  	<el-form :inline="true" :model="ht_form" ref="form" label-width="100px" class="demo-ruleForm">
	  	    <div  class="border_totle_content_part" v-show="read_e_form">
        		<div class="enterprise_basic_info">合同信息</div>
        		<el-row>
        		    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="申请编号" >
                                <el-input v-model="ht_form.applyNo"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                   </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="协议编号" >
                                <el-input v-model="ht_form.agreementNo"   :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="合同编号" >
                                <el-input v-model="ht_form.contractNo" :disabled="true"></el-input>
                           </el-form-item>
                    	</div>
                    </el-col>
                </el-row>
                
                <el-row>
                	<el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="进件渠道" >
                                <el-input v-model="ht_form.organName" :disabled="true" ></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple">
                    		<el-form-item label="申请日期" >
                                <el-input v-model="ht_form.applyDate"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                     <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="企业名称" >
                                <el-input v-model="ht_form.firmName" :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                </el-row>
                
                <el-row>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="企业证件类型" >
                                <el-input v-model="ht_form.firmCertTypeName" :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple">
                    		<el-form-item label="社会信用代码" >
                                <el-input v-model="ht_form.firmCertNo" :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="产品名称" >
                                <el-input v-model="ht_form.financeProductName" :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                </el-row>
                
                <el-row>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple">
                    		<el-form-item label="产品期限" >
                                <el-input v-model="ht_form.deadlineName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="还款方式" >
                                <el-input v-model="ht_form.repayTypeName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="最终审批金额" >
                                <el-input v-model="ht_form.lastApproveName"  :disabled="true"></el-input>
                            </el-form-item>
                            <span>万元</span>
                    	</div>
                    </el-col>
                </el-row>
                
                <el-row>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple">
                    		<el-form-item label="合同金额" >
                                <el-input v-model="ht_form.contractAmount"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="放款金额" >
                                <el-input v-model="ht_form.loanAmount"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="企业质保金" >
                                <el-input v-model="ht_form.firmDeposit"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                </el-row>
                
                <el-row>
                	<el-col :span="8">
                    	<div class="grid-content bg-purple">
                    		<el-form-item label="放款账户" >
                                <el-input v-model="ht_form.acctTypeName" :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>

                    <el-col :span="8">
                    	<div class="grid-content bg-purple">
                    		<el-form-item label="开户行" >
                                <el-input v-model="ht_form.bankName" :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple">
                    		<el-form-item label="借款月利息" >
                                <el-input v-model="ht_form.repayRate" :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                </el-row>
                
                <el-row>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple">
                    		<el-form-item label="服务费率" >
                                <el-input v-model="ht_form.totalFree" :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple">
                    		<el-form-item label="总服务费" >
                                <el-input v-model="ht_form.jfAmount" :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                </el-row>
            </div>
	    </el-form>
	    
	    <div class="border_totle_content_part"   v-show="read_e_document">
	    
	    <div class="enterprise_basic_info">您上传的附件</div>
	    
	    	<el-table
            :data="ht_tableData"
            stripe
            style="width: 100%">
    <el-table-column
      prop="rowId"
      label="序号"
      width="180">
    </el-table-column>
    
    <el-table-column
      prop="attcName"
      label="附件名称"
      width="220">
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
      prop="createrName"
      label="创建人">
    </el-table-column>
    
    <el-table-column
      prop="currNode"
      label="操作"
      width="200">
      <template scope="scope">
       <el-button type="primary" size="mini" @click="handleDelete(scope.$index, scope.row)">预览</el-button>
      </template>
    </el-table-column>
           </el-table>
	    </div>
<!-------------------------------------------------------------------------------------------->
<el-form :inline="true" :model="ht_form" ref="form" label-width="100px" class="demo-ruleForm">
	  	    <div  class="border_totle_content_part"  v-show="operation_e_form">
        		<div class="enterprise_basic_info">合同信息</div>
        		
        		<el-row>
        		    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="申请编号" >
                                <el-input v-model="ht_form.applyNo"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                   </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="协议编号" >
                                <el-input v-model="ht_form.agreementNo"   :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="合同编号" >
                                <el-input v-model="ht_form.contractNo" ></el-input>
                            </el-form-item>
                            <el-button size="mini" type="primary" icon="el-icon-search"  @click="get_back_contractNo" >点击生成</el-button>
                           <!-- <span @click="get_back_contractNo" style="display:inline-block;background-color:#0000ff;width:20px;height:20px;"></span>-->
                    	</div>
                    </el-col>
                </el-row>
                
                <el-row>
                	<el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="进件渠道" >
                                <el-input v-model="ht_form.organName" :disabled="true" ></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple">
                    		<el-form-item label="申请日期" >
                                <el-input v-model="ht_form.applyDate"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                     <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="企业名称" >
                                <el-input v-model="ht_form.firmName" :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                </el-row>
                
                <el-row>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="企业证件类型" >
                                <el-input v-model="ht_form.firmCertTypeName" :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple">
                    		<el-form-item label="社会信用代码" >
                                <el-input v-model="ht_form.firmCertNo" :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="产品名称" >
                                <el-input v-model="ht_form.financeProductName" :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                </el-row>
                
                <el-row>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple">
                    		<el-form-item label="产品期限" >
                                <el-input v-model="ht_form.deadlineName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="还款方式" >
                                <el-input v-model="ht_form.repayTypeName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<!--<el-form-item label="最终审批金额" >
                                <el-input v-model="ht_form.lastApproveName"  :disabled="true"></el-input>
                            </el-form-item>
                            <span>万元</span>-->
                    	</div>
                    </el-col>
                </el-row>
                
                <el-row>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple">
                    		<el-form-item label="合同金额" >
                                <el-input v-model="ht_form.contractAmount"  :disabled="true"></el-input>
                            </el-form-item>
                            <span>万元</span>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="放款金额" >
                                <el-input v-model="ht_form.loanAmount"  :disabled="true"></el-input>
                            </el-form-item>
                            <span>万元</span>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="企业质保金" >
                                <el-input v-model="ht_form.firmDeposit"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                </el-row>
                
                <el-row>
                	<el-col :span="8">
                    	<div class="grid-content bg-purple">
                    		<el-form-item label="放款账户" >
                                <el-input v-model="ht_form.acctTypeName" :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>

                    <el-col :span="8">
                    	<div class="grid-content bg-purple">
                    		<el-form-item label="开户行" >
                                <el-input v-model="ht_form.bankName" :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple">
                    		<el-form-item label="借款月利息" >
                                <el-input v-model="ht_form.repayRate" :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                </el-row>
                
                <el-row>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple">
                    		<el-form-item label="服务费率" >
                                <el-input v-model="ht_form.totalFree" :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple">
                    		<el-form-item label="总服务费" >
                                <el-input v-model="ht_form.jfAmount" :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                </el-row>
                
                <el-row   class="button_style">
                	<el-button type="primary"  @click="submit_form_e_form">确认生成合同</el-button>
                </el-row>
            </div>
	    </el-form>
	    
    <div class="border_totle_content_part" v-show="operation_e_document" >
    	
	<div class="enterprise_basic_info" >处理意见</div>   
	
    <el-input  type="textarea" v-model="ht_form.feedback" placeholder="请输入您的意见，字数不能超过500字（必填！）"></el-input>
    <el-row   class="button_style" style="text-align: right;margin-top:20px;padding-right:20px;">
        <el-button type="primary" @click="submit_ht_form_feedback">提交</el-button>
        <el-button type="primary" @click='cancle_ht_form_feedback'>取消</el-button>
    </el-row>
    
    
    
    <div class="enterprise_basic_info" >您上传的附件</div>
    <el-upload
	ref="upload"
    class="upload-demo"
    :action="post_action"
    :data="e_data"
    :file-list="fileList"
    :auto-upload="true">
     <el-button slot="trigger" size="small" type="danger">选取文件</el-button>
<!--     <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload_e_document">上传到服务器</el-button>-->
     <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
	    
	<el-table
    :data="ht_tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="rowId"
      label="序号"
      width="180">
    </el-table-column>
    
    <el-table-column
      prop="attcName"
      label="附件名称"
      width="220">
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
      prop="createrName"
      label="创建人">
    </el-table-column>
    
    <el-table-column
      prop="currNode"
      label="操作"
      width="200">
      <template scope="scope">
       <el-button type="primary" size="mini" @click="handleDelete(scope.$index, scope.row)">预览</el-button>
      </template>
    </el-table-column>
    </el-table>
	    </div>

<!-------------------------------------------------------------------------------------------->
	   
	   
	   </el-tab-pane>
	          
        <el-tab-pane label="附件信息" v-if="dialogVisible_abc_b">
          <div class="performance_window">
          	<el-tabs v-model="activeName" >
                <el-tab-pane label="基本附件" name="first">
                	
          	
    <el-table
    :data="e_tableData"
    @selection-change="handleSelectionChange"   
    @row-click="handleclick"
    style="width: 100%">
    
    <el-table-column
      prop="rowId"
      label="序号"
      width="180">
    </el-table-column>
    
    <el-table-column
      prop="attcName"
      label="附件名称"
      width="220">
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
      prop="createrName"
      label="创建人">
    </el-table-column>
    
    <el-table-column
      prop="currNode"
      label="操作"
      width="200">
      <template scope="scope">
       <el-button type="primary" size="mini" @click="handleDelete(scope.$index, scope.row)">预览</el-button>
      </template>
    </el-table-column>
  </el-table>
<!----------------------------------------------------------->  
                </el-tab-pane>
                <el-tab-pane label="流程附件" name="second">
<!----------------------------------------------------------->
    <el-table
    :data="l_tableData"
    @selection-change="handleSelectionChange"   
    @row-click="handleclick"
    style="width: 100%">
    
    </el-table-column>
    <el-table-column
      prop="rowId"
      label="序号"
      width="180">
    </el-table-column>
    <el-table-column
      prop="attcName"
      label="附件名称"
      width="220">
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
      prop="createrName"
      label="创建人">
    </el-table-column>
    <el-table-column
      prop="currNode"
      label="操作"
      width="200">
      <template scope="scope">
       <el-button type="primary" size="mini" @click="handleDelete(scope.$index, scope.row)">预览</el-button>
      </template>
    </el-table-column>
  </el-table>

                </el-tab-pane>
            </el-tabs>
          </div>
        </el-tab-pane>
       
	   <el-tab-pane label="企业申请信息"    v-if="dialogVisible_abc_d">
	   	<el-form :inline="true" :model="details_form" ref="form" label-width="100px" class="demo-ruleForm">
        			
        	<div  class="border_totle_content_part">
        		<div class="enterprise_basic_info">企业基本信息</div>
        		
        		<el-row>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple">
                    		<el-form-item label="企业名称" >
                                <el-input v-model="details_form.firmName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="企业证件类型" >
                                <el-input v-model="details_form.firmCertTypeName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple">
                    		<el-form-item label="社会信用代码" >
                                <el-input v-model="details_form.firmCertNo"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                </el-row>
                
                <el-row>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="法人姓名" >
                                <el-input v-model="details_form.corporateName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple">
                    		<el-form-item label="法人证件号码" >
                                <el-input v-model="details_form.corporateCertValue"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="法人手机号码" >
                                <el-input v-model="details_form.corporateMobile"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                </el-row>
                
                <el-row>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple">
                    		<el-form-item label="账户类型" >
                                <el-input v-model="details_form.acctTypeName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="开户银行" >
                                <el-input v-model="details_form.bankName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple">
                    		<el-form-item label="对公账号" >
                                <el-input v-model="details_form.bankAcct"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                </el-row>
                
                <el-row>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="开户省" >
                                <el-input v-model="details_form.provinceName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple">
                    		<el-form-item label="开户城市" >
                                <el-input v-model="details_form.cityName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="开户支行" >
                                <el-input v-model="details_form.bankBranchName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                </el-row>
            </div>
            
            <div  class="border_totle_content_part">
                <div class="enterprise_basic_info">基本申请信息</div>
                <el-row>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="申请编号" >
                                <el-input v-model="details_form.applyNo"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple">
                    		<el-form-item label="申请日期" >
                                <el-input v-model="details_form.applyDate"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="进件渠道" >
                                <el-input v-model="details_form.organName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="企业名称" >
                                <el-input v-model="details_form.firmName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple">
                    		<el-form-item label="企业证件类型" >
                                <el-input v-model="details_form.basicLoanTypeName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="企业证件号码" >
                                <el-input v-model="details_form.firmCertNo"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                </el-row>
     
                <el-row>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="产品名称" >
                                <el-input v-model="details_form.financeProductName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple">
                    		<el-form-item label="借款金额（万元）" >
                                <el-input v-model="details_form.applyAmount"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="期数" >
                                <el-input v-model="details_form.deadlineName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                </el-row>
                
                <el-row>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="主体企业名称" >
                                <el-input v-model="details_form.mainFirmName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple">
                    		<el-form-item label="主体企业证件类型" >
                                <el-input v-model="details_form.mainFirmCertTypeName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="组织机构代码" >
                                <el-input v-model="details_form.organizationCode"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                </el-row>
                
                <el-row>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="企业保证金" >
                                <el-input v-model="details_form.firmDeposit"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple">
                    		<el-form-item label="还款方式" >
                                <el-input v-model="details_form.repayTypeName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light">
                    		<el-form-item label="发生方式" >
                                <el-input v-model="details_form.creditWayName"  :disabled="true"></el-input>
                            </el-form-item>
                    	</div>
                    </el-col>
                </el-row>
            </div>
            
            <div class="border_totle_content_part">
            <div class="enterprise_basic_info">担保人信息列表</div>
            <el-table
            height="200"
            border
            ref="testTable"       
            :data="person_tableData"
            :default-sort = "{prop: 'id', order: 'ascending'}"
            @selection-change="handleSelectionChange"   
            @row-click="handleclick"
            :row-class-name = "tableRowClassName"
            style="width: 100%">
            
            <el-table-column
            prop="guarantorName"
            label="担保人姓名"
            width="200">
            </el-table-column>
    
            <el-table-column
            prop="guarantorIdcard"
            label="担保人卡号"
            width="200">
            </el-table-column>
    
            <el-table-column
            prop="guarantorMobile"
            label="担保人手机号"
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="guarantorAddress"
            label="担保人地址">
            </el-table-column>
            
            
            </el-table> 
            </div>
            
            
            <div class="border_totle_content_part">
            <div class="enterprise_basic_info">担保企业列表</div>
            <el-table
            height="200"
            border
            ref="testTable"       
            :data="firm_tableData"
            :default-sort = "{prop: 'id', order: 'ascending'}"
            @selection-change="handleSelectionChange"   
            @row-click="handleclick"
            :row-class-name = "tableRowClassName"
            style="width: 100%">
            
            <el-table-column
            prop="guarFirmName"
            label="担保企业名称"
            width="200">
            </el-table-column>
    
            <el-table-column
            prop="guarFirmCertNo"
            label="担保企业证件号码"
            width="200">
            </el-table-column>
    
            <el-table-column
            prop="guarFirmCertName"
            label="担保企业证件类型名称"
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="guarFirmAddress"
            label="担保企业地址">
            </el-table-column>

            </el-table> 
            </div>
        </el-form>   
        
    <div  class="border_totle_content_part">
    <div class="enterprise_basic_info">基本附件</div>      
	 <el-table
    :data="e_tableData"
    @selection-change="handleSelectionChange"   
    @row-click="handleclick"
    style="width: 100%">
    
    <el-table-column
      prop="rowId"
      label="序号"
      width="180">
    </el-table-column>
    
    <el-table-column
      prop="attcName"
      label="附件名称"
      width="220">
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
      prop="createrName"
      label="创建人">
    </el-table-column>
    
    <el-table-column
      prop="currNode"
      label="操作"
      width="200">
      <template scope="scope">
       <el-button type="primary" size="mini" @click="handleDelete(scope.$index, scope.row)">预览</el-button>
      </template>
    </el-table-column>
  </el-table>
	 </div>  
	   
	   
	   </el-tab-pane>
	</el-tabs>
</div>
<!---------------------------------------------------->

<!------------------------------------------------------>
<el-dialog
  title="请填写退回原因"
  :visible.sync="dialogVisible_comfirm"
  :modal-append-to-body="false"
  size="tiny"
  :close-on-click-modal="false">
  <input v-model="details_form.returnReason"/>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible_comfirm=false">取 消</el-button>
    <el-button type="primary" @click="comfirm_back">确 定</el-button>
  </span>
</el-dialog>
<!------------------------------------------------------>
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
  :visible.sync="dialogVisible_tip_with"
  width="30%"
  :modal-append-to-body="false"
  :close-on-click-modal="false">
  <span>请填写表单内容</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible_tip_with= false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible_tip_with = false">确 定</el-button>
  </span>
</el-dialog>
<!------------------>
<!------------------>
<el-dialog
  title="提示"
  :visible.sync="dialogVisible_ht_back"
  width="30%"
  :modal-append-to-body="false"
  :close-on-click-modal="false">
  <span v-text="dialogVisible_ht_back_content">这是一段信息</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible_ht_back = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible_ht_back = false">确 定</el-button>
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
      	dialogVisible_success:false,
      	dialogVisible_ht_back_content:'',
      	dialogVisible_ht_back:false,
      	dialogVisible_tip_with:false,
      	dialogVisible_tip:false,
      	first_post_action_flag:false,
        second_post_action_flag:false,
      	read_e_form:true,
      	read_e_document:true,
      	operation_e_form:false,
        operation_e_document:false,
        
      	show_for_second:false,
      	dialogVisible_comfirm:false,
      	refuseReason:'',
      	fileList:[],
        post_action:'http://172.18.100.196:7072/enterpriseFacade/uploadAttachment',
        first_post_action:'http://172.18.100.196:7072/enterpriseFacade/uploadAttachment',
        second_post_action:'http://172.18.100.196:7072/enterpriseFacade/uploadAttachment',
        apply_post_action:'http://172.18.100.196:7072/enterpriseFacade/uploadAttachment',
        finance_post_action:'http://172.18.100.196:7072/enterpriseFacade/uploadAttachment',
        e_data:{},
      	operation_account_meaning_another:false,
      
      	title_content:'',
      	input_content:'',
      	operation_account_meaning:false,
        operation_second_operation:false,
        operation_second_operation_input:false,
        operation_first_operation:false,
      	dialogVisible_abc_a:false,
      	dialogVisible_abc_b:false,
      	dialogVisible_abc_c:false,
      	dialogVisible_abc_d:false,
      	ht_tableData:[],
      	
      	origin:'',
      	
      	l_tableData:[],
      	
      	activeName:"first",
      	
      	buttons:[],
      	
      	e_tableData:[],
      	
      	firm_tableData:[],
      	
      	person_tableData:[],
      		
      	s_tableData:[],
      	
      	first_operation:false,
      	second_operation:false,
 	    account_meaning:false,
 	    
        active: 2,
        
        dialogVisible_abc:false,
        
        dialogVisible_operation:false,
        
        dialogFormVisible_try:false,
        
        location:"您的位置    >  工作流管理 >  待处理流程任务",
        
        ruleForm: {
            value1:'',
            value2:'',
            value3:'',
            value4:'',
            value5:'',
            value6:'',
            value7:''
        },
        ht_form:{
//        acctTypeName:'',
//        agreementNo:'', 
//        applyDate:'', 
//        applyNo:'',
//        bankName:'', 
//        basicLoanTypeName:'', 
//        contractAmount:'', 
//        contractNo:'', 
//        deadlineName:'', 
//        financeProductName:'', 
//        firmDeposit:'',
//        firmName:'', 
//        lastApproveName:'', 
//        loanAmount:'',
//        organName:'', 
//        repayTypeName:'', 
//        socialCreditCode:'',
//        
//        contractNo:''
          applyNo:'',
          agreementNo:'',
          contractNo:'',

          organName:'',
          applyDate:'',
          firmName:'',

          firmCertTypeName:'',
          firmCertNo:'',
          financeProductName:'',

          deadlineName:'',
          repayTypeName:'',
          lastApproveName:'',

          contractAmount:'',
          loanAmount:'',
          firmDeposit:'',

          bankName:'',
          
          feedback:''
          
        },
        details_form:{
        	
          firmName:'',
          firmCertTypeName:'',
          firmCertNo:'',
          corporateName:'',
          corporateCertValue:'',
          corporateMobile:'',
          acctTypeName:'',
          bankName:'',
          bankAcct:'',
          provinceName:'',
          cityName:'',
          bankBranchName:'',
          
          applyNo:'',
          applyDate:'',
          organName:'',
          firmName:'',
          basicLoanTypeName:'',
          firmCertNo:'',
          financeProductName:'',
          applyAmount:'',
          deadlineName:'',
          mainFirmName:'',
          mainFirmCertTypeName:'',
          organizationCode:'',
          firmDeposit:'',
          repayTypeName:'',
          creditWayName:'',
          guarantorName:'',
          guarantorIdcard:'',
          guarantorMobile:'',
          guarantorAddress:'',
          guarFirmName:'',
          guarFirmCertName:'',
          organizationCode:'',
          guarFirmAddress:'',
          
          apprAmt:'',
          currNode:'',
          deadlineName:'',
          financeProductName:'',
          repayRate:'',
          refuseReason:'',
          
          s_apprAmt:'',
          s_apprAmt_name:'',
          s_currNode:'',
          s_deadlineName:'',
          s_financeProductName:'',
          s_repayRate:'',
          s_refuseReason:'',
          h_refuseReason:'',
          
          a_apprAmt:'',
          a_currNode:'',
          a_deadlineName:'',
          a_financeProductName:'',
          a_repayRate:'',
          a_refuseReason:'',
          a_meaning:'',
          
          returnReason:'',
          
          auditOpinion:''
        },
        
        form:{
        	name:''
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
        //*******************************************************
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

        //当前页码
        currentPage: 1,

        //查询的页码
        start: 1,

        //默认数据总数
        totalCount: 1000,
        
        fileList2:[],
        
        applyInfoVoList:[{
        	
        }],
        
        apprOpinionList:[{
        	
        }],
        
        attachmentInfoVoList:[{
        	
        }],
        
        firmBasicInfoVoList:[{
        	
        }]
        
      }
      
    },
  	mounted(){
  		
  		this.$nextTick(function() {  
  		  
  		this.loadData();
  		
  		this.load_button();
  		
//		this.origin_data();
  			
  		});
  	},
    methods: {
    	    finanace_agree(){
    	    	    var post_data={};
                
                    post_data.loanId= this.highlightId.loanId;
                    post_data.loanApplyNo= this.highlightId.loanApplyNo;
                    post_data.processInstanceId= this.highlightId.processInstanceId;
                    post_data.taskId= this.highlightId.taskId;
                    post_data.procStatusCode= this.highlightId.currProcStatusCode;
                    
                    post_data.operateType=1;
                    
                    post_data.operateTypeValue="同意";
        
                    post_data.auditOpinion=this.details_form.a_refuseReason;                     
 
                   var current_token=localStorage.tokens;
                	
                   post_data.authorization=current_token;
                   
                   var url=localStorage.localhost+'/wf/gotoAgree';
//                 if(post_data.auditOpinion !== ''){
                   	this.$http.post(url,post_data,{emulateJSON: true}).then(function(res){
                   	alert("success_finance");
                   	this.loadData();
                   	this.dialogVisible_operation=false;
                   },function(res){
                   	  console.log(res);
                   });
//                 }else{
//                 	alert('you must input it totle');
//                 }

    	    },
    	    finanace_refused(){
    	    	 var post_data={};
                
                    post_data.loanId= this.highlightId.loanId;
                    post_data.loanApplyNo= this.highlightId.loanApplyNo;
                    post_data.processInstanceId= this.highlightId.processInstanceId;
                    post_data.taskId= this.highlightId.taskId;
                    
                    post_data.procStatusCode= this.highlightId.currProcStatusCode;
                    //details_form.a_refuseReason
      	            post_data.refuseReason=this.details_form.a_refuseReason;
                    post_data.operateType=2;
                    post_data.operateTypeValue="拒绝";
                    
                   var current_token=localStorage.tokens;
                	
                   post_data.authorization=current_token;
                   
                   var url=localStorage.localhost+'/wf/gotoRefuse';
                   
                   this.$http.post(url,post_data,{emulateJSON: true}).then(function(res){
                   	alert("success_finace");
                   	this.loadData();
                   	this.dialogVisible_operation=false;
                   },function(res){
                   	  console.log(res);
                   });
    	    },
    	    finanace_back(){
    	    	var post_data={};
                
                post_data.loanId= this.highlightId.loanId;
                post_data.loanApplyNo= this.highlightId.loanApplyNo;
                post_data.processInstanceId= this.highlightId.processInstanceId;
                post_data.taskId= this.highlightId.taskId;
                    
                post_data.procStatusCode= this.highlightId.currProcStatusCode;
                
                post_data.operateType=3;
                    
                post_data.operateTypeValue="退回";
                
                post_data.returnReason=this.details_form.a_refuseReason;
                
                var current_token=localStorage.tokens;
                	
                post_data.authorization=current_token;
                   
                var url=localStorage.localhost+'/wf/gotoBack';
                   
                this.$http.post(url,post_data,{emulateJSON: true}).then(function(res){
//                 	alert("success——return");
                    this.dialogVisible_success=true;
                   	this.loadData();
                   	this.dialogVisible_comfirm=false;
                },function(res){
                   	  console.log(res);
                });
    	    },
    	    e_submitUpload(){
    	    	alert("success");
    	    	this.$refs.upload.submit();
    	   
    	    },
    	    submitUpload(){
    	    	this.$refs.upload.submit();
    	    },
    	    submitUpload_e_document() {

                this.$refs.upload.submit();
            },
    	    cancle_ht_form_feedback:function(){
    	    	   var post_data={};
                
                    post_data.loanId= this.highlightId.loanId;
                    post_data.loanApplyNo= this.highlightId.loanApplyNo;
                    post_data.processInstanceId= this.highlightId.processInstanceId;
                    post_data.taskId= this.highlightId.taskId;
                    post_data.procStatusCode= this.highlightId.currProcStatusCode;
                    post_data.operateType=5;
                    
                    post_data.operateTypeValue="取消";
                    post_data.auditOpinion=this.ht_form.feedback;
                    var current_token=localStorage.tokens;
                	
                    post_data.authorization=current_token;
                   
                   var url=localStorage.localhost+'/wf/gotoCancel';
                   
                   this.$http.post(url,post_data,{emulateJSON: true}).then(function(res){
                   	alert("success");
                   	this.loadData();
                   	this.dialogVisible_operation=false;
                   },function(res){
                   	  console.log(res);
                   });
    	    },
    	    submit_ht_form_feedback:function(){
    	    	    var post_data={};
                
                    post_data.loanId= this.highlightId.loanId;
                    post_data.loanApplyNo= this.highlightId.loanApplyNo;
                    post_data.processInstanceId= this.highlightId.processInstanceId;
                    post_data.taskId= this.highlightId.taskId;
                    post_data.procStatusCode= this.highlightId.currProcStatusCode;
                    
                    post_data.operateType=6;
                    
                    post_data.operateTypeValue="签约合同提交";

        
                    post_data.auditOpinion=this.ht_form.feedback;                     
 
                   var current_token=localStorage.tokens;
                	
                   post_data.authorization=current_token;
                   
                   var url=localStorage.localhost+'/wf/gotoAgree';
                   
                   this.$http.post(url,post_data,{emulateJSON: true}).then(function(res){
                   	alert("success");
                   	this.loadData();
                   	this.dialogVisible_operation=false;
                   },function(res){
                   	  console.log(res);
                   });
    	    },
    	    submit_form_e_form:function(){
    	    	
    	    	var post_data={};
    	    	
    	    	var current_token=localStorage.tokens;
                	
                post_data.authorization=current_token;
                
                post_data.applyNo=this.highlightId.loanApplyNo;
                post_data.contractNo=this.ht_form.contractNo;
                post_data.firmNo=this.highlightId.firmNo;
                   
                var url=localStorage.localhost+'/firmLoanApplyFacade/generatorContract';
                   
                this.$http.post(url,post_data,{emulateJSON: true}).then(function(res){
                   	
                console.log(res);
                this.ht_form.totalFree=res.body.data.totalFree;
                this.ht_form.jfAmount=res.body.data.jfAmount;
                this.dialogVisible_ht_back_content=res.body.resultMessage;
                this.dialogVisible_ht_back=true;
                },function(res){
                   	  console.log(res);
                });
    	    },
    	    get_back_contractNo:function(){
    	    	
    	    	var post_data={};
    	    	
    	    	var current_token=localStorage.tokens;
                	
                post_data.authorization=current_token;
                   
                var url=localStorage.localhost+'/firmLoanApplyFacade/generatorContractNo';
                   
                this.$http.post(url,post_data,{emulateJSON: true}).then(function(res){
                   	
                   this.ht_form.contractNo=res.body.data.contractNo;
                   	
                },function(res){
                   	  console.log(res);
                });
    	    },
    	    operation_account_meaning_another_cancle_comfirmBack:function(){
    	    	    var post_data={};
                
                    post_data.loanId= this.highlightId.loanId;
                    post_data.loanApplyNo= this.highlightId.loanApplyNo;
                    post_data.processInstanceId= this.highlightId.processInstanceId;
                    post_data.taskId= this.highlightId.taskId;
                    post_data.procStatusCode= this.highlightId.currProcStatusCode;
                    post_data.operateType=5;
                    
                    post_data.operateTypeValue="取消";
                    post_data.auditOpinion=this.details_form.auditOpinion;
                    var current_token=localStorage.tokens;
                	
                    post_data.authorization=current_token;
                   
                   var url=localStorage.localhost+'/wf/gotoCancel';
                   
                   this.$http.post(url,post_data,{emulateJSON: true}).then(function(res){
                   	alert("success");
                   	this.loadData();
                   	this.dialogVisible_operation=false;
                   },function(res){
                   	  console.log(res);
                   });
    	    },
    	    operation_account_meaning_another_comfirmBack:function(){
    	    	    var post_data={};
                
                    post_data.loanId= this.highlightId.loanId;
                    post_data.loanApplyNo= this.highlightId.loanApplyNo;
                    post_data.processInstanceId= this.highlightId.processInstanceId;
                    post_data.taskId= this.highlightId.taskId;
                    post_data.procStatusCode= this.highlightId.currProcStatusCode;
                    
                    post_data.operateType=1;
                    
                    post_data.operateTypeValue="同意";
        
                    post_data.auditOpinion=this.details_form.a_refuseReason;                     
 
                   var current_token=localStorage.tokens;
                	
                   post_data.authorization=current_token;
                   
                   var url=localStorage.localhost+'/wf/gotoAgree';
//                 if(post_data.auditOpinion !== ''){
                   	this.$http.post(url,post_data,{emulateJSON: true}).then(function(res){
                   	alert("success");
                   	this.loadData();
                   	this.dialogVisible_operation=false;
                   },function(res){
                   	  console.log(res);
                   });
//                 }else{
//                 	alert('you should input it totle');
//                 }

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
                  this.details_form.s_apprAmt_name=this.highlightId.financeProductName;
               }
               
            },function(res){
                    	
              console.log('ajax failed');
              console.log(res);
                        
            });       
            },
    	    operation_account_meaning_another_comfirm_back:function(){

    	    	this.dialogVisible_comfirm=true;
    	    	this.dialogVisible_operation=false;
    	    },
    	    operation_account_meaning_another_comfirm:function(){
    	    	
    	    },
    	    comfirm_back: function(){
    	    	
    	    	var post_data={};
                
                post_data.loanId= this.highlightId.loanId;
                post_data.loanApplyNo= this.highlightId.loanApplyNo;
                post_data.processInstanceId= this.highlightId.processInstanceId;
                post_data.taskId= this.highlightId.taskId;
                    
                post_data.procStatusCode= this.highlightId.currProcStatusCode;
                
                post_data.operateType=3;
                    
                post_data.operateTypeValue="退回";
                post_data.returnReason=this.details_form.returnReason;
                var current_token=localStorage.tokens;
                	
                post_data.authorization=current_token;
                   
                var url=localStorage.localhost+'/wf/gotoBack';
                   
                this.$http.post(url,post_data,{emulateJSON: true}).then(function(res){
                   	alert("success");
                   	this.loadData();
                   	this.dialogVisible_comfirm=false;
                   	this.dialogVisible_operation=false;
                },function(res){
                   	  console.log(res);
                });
    	    },
    	    operation_account_meaning_another_comfirm_confused:function(){
                 
                var post_data={};
                
                    post_data.loanId= this.highlightId.loanId;
                    post_data.loanApplyNo= this.highlightId.loanApplyNo;
                    post_data.processInstanceId= this.highlightId.processInstanceId;
                    post_data.taskId= this.highlightId.taskId;
                    
                    post_data.procStatusCode= this.highlightId.currProcStatusCode;
                    
      	            post_data.refuseReason=this.details_form.s_refuseReason
                    post_data.operateType=2;
                    post_data.operateTypeValue="拒绝";
                    
                   // this.details_form.s_refuseReason;
                   // post_data.auditOpinion=this.details_form.a_refuseReason;                     
                   // this.details_form.a_refuseReason
                   var current_token=localStorage.tokens;
                	
                   post_data.authorization=current_token;
                   
                   var url=localStorage.localhost+'/wf/gotoRefuse';
                   
                   this.$http.post(url,post_data,{emulateJSON: true}).then(function(res){
                   	alert("success");
                   	this.loadData();
                   	this.dialogVisible_operation=false;
                   },function(res){
                   	  console.log(res);
                   });
    	    },
    	    operation_account_meaning_another_comfirm_agree:function(){
    	    	

               
                
                 if(this.details_form.s_apprAmt!== ''&& this.details_form.s_repayRate!==''&&this.details_form.a_refuseReason!==""){
                 	 var post_data={};
                
                    post_data.loanId= this.highlightId.loanId;
                    post_data.loanApplyNo= this.highlightId.loanApplyNo;
                    post_data.processInstanceId= this.highlightId.processInstanceId;
                    post_data.taskId= this.highlightId.taskId;
                    post_data.procStatusCode= this.highlightId.currProcStatusCode;
                    
                    post_data.financeProductCode=$("#e_product_name").val();
      	            post_data.financeProductName=$("#e_product_name").find("option:selected").text();
      	        
      	            post_data.deadlineCode=$("#e_dead_line").val();
      	            post_data.deadlineName=$("#e_dead_line").find("option:selected").text();
      	        
      	            post_data.apprAmt=this.details_form.s_apprAmt;
      	            
      	            post_data.repayRate=this.details_form.s_repayRate;
      	           //this.details_form.repayRate;
                    post_data.operateType=1;
                    
                    post_data.operateTypeValue="同意";
                   // this.details_form.s_refuseReason;
                    post_data.auditOpinion=this.details_form.a_refuseReason;                     
                   // this.details_form.a_refuseReason
                   post_data.juryComments=this.details_form.h_refuseReason;
                   
                   var current_token=localStorage.tokens;
                	
                   post_data.authorization=current_token;
                   
                   var url=localStorage.localhost+'/wf/gotoAgree';
                   if(post_data.auditOpinion !== ''){
                   	this.$http.post(url,post_data,{emulateJSON: true}).then(function(res){
                   	alert("success");
                   	this.loadData();
                   	this.dialogVisible_operation=false;
                   },function(res){
                   	  console.log(res);
                   });
                   }else{
                   	 alert('you must input the totle');
                   }
                   
                 }else{
                 	alert('请将表单内容填写完整，否则不予以通过！');
//               	this.dialogVisible_tip=true;
                 }
               
    	    },
    	    operation_account_meaning_another_cancle:function(){
    	    	
    	    	this.dialogVisible_comfirm=true;
    	    },
    	    origin_data: function(){

            this.post_action='';
            this.post_action=localStorage.localhost+'/enterpriseFacade/uploadAttachment';
            this.post_action=this.post_action + '?authorization='+localStorage.tokens+ '&applyNo='+this.highlightId.loanApplyNo+'&attcBusiDataCode=5';
            
            this.first_post_action='';
            this.first_post_action=localStorage.localhost+'/enterpriseFacade/uploadAttachment';
            this.first_post_action=this.first_post_action + '?authorization='+localStorage.tokens+ '&applyNo='+this.highlightId.loanApplyNo+'&attcBusiDataCode=3';
          
            this.second_post_action='';
            this.second_post_action=localStorage.localhost+'/enterpriseFacade/uploadAttachment';
    	    this.second_post_action=this.first_post_action + '?authorization='+localStorage.tokens+ '&applyNo='+this.highlightId.loanApplyNo+'&attcBusiDataCode=4';
    	    
    	    this.apply_post_action='';
    	    this.apply_post_action=localStorage.localhost+'/enterpriseFacade/uploadAttachment';
    	    this.apply_post_action=this.first_post_action + '?authorization='+localStorage.tokens+ '&applyNo='+this.highlightId.loanApplyNo+'&attcBusiDataCode=1';
    	    
    	   // this.finance_post_action=this.first_post_action + '?authorization='+localStorage.tokens+ '&applyNo='+this.highlightId.loanApplyNo+'&attcBusiDataCode=1';
    	    
//  	    alert(this.apply_post_action);
    	    },

    	    submitUpload() {
    	    	
                this.$refs.upload.submit();
            },
    	    close_details_operation: function(){
    	    	this.dialogVisible_operation=false;
    	    },
    	    btn_operation_button: function(){
    	     	
    	     	this.dialogVisible_operation=true;
    	     	this.view_btn();
    	       	this.get_e_tableData();
    	       	this.get_l_tableData();
    	       	this.get_ht_form_data();
    	       	  	
    	       	this.get_ht_tableData();
    	     	this.get_dead_line();
    	     	this.get_product_name();
    	     	
    	     	this.origin_data();
    	    },
    	     
    	     handleDelete: function(index, row){
    	     	console.log(index);
    	     	console.log(row);
    	     	
                window.open(row.attcUrl)
    	     },
    	      e_handleEdit: function(){
    	         
    	        window.open(this.highlightId.attcUrl);
    	        
    	        this.highlightId=-1;
              },
    	       btn_operation: function(btnCode){
    	       	
    	       	  console.log(btnCode);
    	       	  if(this.highlightId == -1){
    	       	  	this.dialogVisible_tip=true;
    	       	  }else{
    	       	  	if(btnCode == "view_btn"){
    	       	    this.dialogVisible_abc=true;
    	       	  	this.view_btn();
    	       	  	this.get_e_tableData();
    	       	  	this.get_l_tableData();
    	       	  	this.get_ht_form_data();
    	       	  	
    	       	    this.get_ht_tableData();
    	       	   }else if(btnCode == "do_btn"){
    	       	   	this.btn_operation_button();
    	       	   }
    	       	  }
    	       	
    	       },
    	       get_ht_form_data: function(){
    	       	
    	       	   var postObj={};
    	        	    
    	        	    postObj.authorization=localStorage.tokens;
    	        	    
    	        	    postObj.applyNo=this.highlightId.loanApplyNo;
    	        	   
    	        	var url=localStorage.localhost + '/workFlow/showContractInfoPage';
    	       	    
    	       	    this.$http.post(url,postObj,{emulateJSON: true}).then(function(res){
    	       	    	
    	       	    	var resoult = res.body.data.firmContractInfoVoList[0];
    	       	    	this.ht_form.acctTypeName=resoult.acctTypeName;
    	       	    	this.ht_form.agreementNo=resoult.agreementNo;
    	       	    	this.ht_form.applyDate=resoult.applyDate;
                    var time = new Date(this.ht_form.applyDate);
                    var y = time.getFullYear();
                    var m = time.getMonth()+1;
                    var d = time.getDate();
                    this.ht_form.applyDate=y+'-'+m+'-'+d;
    	       	    	
    	       	    	this.ht_form.applyNo=resoult.applyNo;
    	       	    	this.ht_form.bankName=resoult.bankName;
    	       	    	this.ht_form.basicLoanTypeName=resoult.basicLoanTypeName;
    	       	    	
    	       	    	this.ht_form.contractAmount=resoult.contractAmount;
    	       	    	this.ht_form.contractNo=resoult.contractNo;
    	       	    	this.ht_form.deadlineName=resoult.deadlineName;
    	       	    	
    	       	    	this.ht_form.financeProductName=resoult.financeProductName;
    	       	    	this.ht_form.firmDeposit=resoult.firmDeposit;
    	       	    	this.ht_form.firmName=resoult.firmName;
    	       	    	
    	       	    	this.ht_form.lastApproveName=resoult.lastApproveName;
    	       	    	this.ht_form.loanAmount=resoult.loanAmount;
    	       	    	this.ht_form.organName=resoult.organName;
    	       	    	
    	       	    	this.ht_form.repayTypeName=resoult.repayTypeName;
    	       	    	this.ht_form.socialCreditCode=resoult.socialCreditCode;
    	       	         
    	       	        this.ht_form.firmCertTypeName=resoult.firmCertTypeName;
                        this.ht_form.firmCertNo=resoult.firmCertNo;
                        this.ht_form.financeProductName=resoult.financeProductName;
                        this.ht_form.acctTypeName=resoult.acctTypeName;
                        this.ht_form.bankName=resoult.bankName;
                        this.ht_form.repayRate=resoult.repayRate;
                        this.ht_form.totalFree=resoult.totalFree;
                        this.ht_form.jfAmount=resoult.jfAmount;
                        
                        this.ht_form.firmCertTypeName=resoult.firmCertTypeName;
                        this.ht_form.firmCertNo=resoult.firmCertNo;
    	       	    
    	       	    	
    	       	    	
    	       	    },function(res){
    	       	    	
    	       	    });
    	       },
    	       //ht_tableData
    	        get_ht_tableData: function(){
    	        	
    	        	var postObj={};
    	        	    
    	        	    postObj.authorization=localStorage.tokens;
    	        	    
    	        	    postObj.loanApplyNo=this.highlightId.loanApplyNo;
    	        	    
    	        	    postObj.attcBusiTypeCode='5';
    	        	   
    	        	var url=localStorage.localhost + '/enterpriseFacade/queryAttachment';
    	       	    
    	       	    this.$http.post(url,postObj,{emulateJSON: true}).then(function(res){
    	       	    	
    	       	    	this.ht_tableData=res.body.data.sysAttachmentVoList;
    	       	    	
    	       	    },function(res){
    	       	    	
    	       	    });
    	        },
    	       get_l_tableData: function(){
    	        	
    	        	var postObj={};
    	        	    
    	        	    postObj.authorization=localStorage.tokens;
    	        	    
    	        	    postObj.loanApplyNo=this.highlightId.loanApplyNo;
    	        	    
    	        	    postObj.attcBusiTypeCode='3,4,5,6';
    	        	   
    	        	var url=localStorage.localhost + '/enterpriseFacade/queryAttachment';
    	       	    
    	       	    this.$http.post(url,postObj,{emulateJSON: true}).then(function(res){
    	       	    	
    	       	    	this.l_tableData=res.body.data.sysAttachmentVoList;
    	       	    	
    	       	    },function(res){
    	       	    	
    	       	    });
    	        },
    	        get_e_tableData: function(){
    	        	
    	        	var postObj={};
    	        	    
    	        	    postObj.authorization=localStorage.tokens;
    	        	    
    	        	    postObj.firmNo=this.highlightId.firmNo;
    	        	    
    	        	    postObj.attcBusiTypeCode='1,2';
    	        	    
    	        	var url=localStorage.localhost + '/enterpriseFacade/queryAttachment';
    	       	    
    	       	    this.$http.post(url,postObj,{emulateJSON: true}).then(function(res){
    	       	    	
    	       	    	this.e_tableData=res.body.data.sysAttachmentVoList;
    	       	    	
    	       	    },function(res){
    	       	    	
    	       	    });
    	        },

    	        view_btn:function(){
    	        	
    	        	var current_token=localStorage.tokens;
                	
                	var button_post_data={};
                	
                    button_post_data.authorization=current_token;
    	       	    
    	       	    //console.log(this.highlightId);
    	       	    //loanApplyNo
    	       	    button_post_data.applyNo=this.highlightId.loanApplyNo;
    	       	    
    	       	   // console.log(button_post_data);
    	       	    
    	       	    var url=localStorage.localhost + '/workFlow/showAuditPage';
    	       	    
    	       	    this.$http.post(url,button_post_data,{emulateJSON: true}).then(function(res){
                    
                      var tabViewStyle=res.body.data.tabViewStyle;
                      
                      if(tabViewStyle=="A"){
                      	this.dialogVisible_abc_a=true;
      	                this.dialogVisible_abc_b=true;
      	                this.dialogVisible_abc_c=false;
      	                this.dialogVisible_abc_d=false;
      	                
      	                this.operation_e_form=false;
                        this.operation_e_document=false;
                        this.read_e_form=true;
    	                this.read_e_document=true;
                      }else if(tabViewStyle=="B"){
                      	this.dialogVisible_abc_a=true;
      	                this.dialogVisible_abc_b=true;
      	                this.dialogVisible_abc_c=true;
      	                this.dialogVisible_abc_d=false;
      	                
    	                this.operation_e_form=false;
                        this.operation_e_document=false;
                        this.read_e_form=true;
    	                this.read_e_document=true;
                      }else if(tabViewStyle=="C"){
//                    	alert("c")
                      	this.dialogVisible_abc_a=false;
      	                this.dialogVisible_abc_b=false;
      	                this.dialogVisible_abc_c=true;
      	                this.dialogVisible_abc_d=true;
      	                
      	                this.operation_e_form=true;
                        this.operation_e_document=true;
                        this.read_e_form=false;
      	                this.read_e_document=false;
                      }

                    var basic_info=res.body.data.firmBasicInfoVoList[0];
                    
                    this.details_form.firmName=basic_info.firmName;
                    this.details_form.firmCertTypeName=basic_info.firmCertTypeName;
                    this.details_form.firmCertNo=basic_info.firmCertNo;
                    
                    this.details_form.corporateName=basic_info.corporateName;
                    this.details_form.corporateCertValue=basic_info.corporateCertValue;
                    this.details_form.corporateMobile=basic_info.corporateMobile;
                    
                    this.details_form.acctTypeName=basic_info.acctTypeName;
                    this.details_form.bankName=basic_info.bankName;
                    this.details_form.bankAcct=basic_info.bankAcct;
                    
                    this.details_form.provinceName=basic_info.provinceName;
                    this.details_form.cityName=basic_info.cityName;
                    this.details_form.bankBranchName=basic_info.bankBranchName;
                    
                    var apply_basic_info=res.body.data.applyInfoVoList[0];
                    
                    this.details_form.applyNo=apply_basic_info.applyNo;
                    this.details_form.applyDate=apply_basic_info.applyDate;
                                       
                    var time = new Date(this.details_form.applyDate);
                    var y = time.getFullYear();
                    var m = time.getMonth()+1;
                    var d = time.getDate();
                    this.details_form.applyDate=y+'-'+m+'-'+d;
                    
                    this.details_form.organName=apply_basic_info.organName;
                    
                    this.details_form.firmName=apply_basic_info.firmName;
                    this.details_form.firmCertTypeName=apply_basic_info.firmCertTypeName;
                    this.details_form.firmCertNo=apply_basic_info.firmCertNo;
                    
                    this.details_form.financeProductName=apply_basic_info.financeProductName;
                    this.details_form.applyAmount=apply_basic_info.applyAmount;
                    this.details_form.deadlineName=apply_basic_info.deadlineName;
                    
                    this.details_form.mainFirmName=apply_basic_info.mainFirmName;
                    this.details_form.mainFirmCertTypeName=apply_basic_info.mainFirmCertTypeName;
                    this.details_form.organizationCode=apply_basic_info.organizationCode;
                    
                    this.details_form.firmDeposit=apply_basic_info.firmDeposit;
                    this.details_form.repayTypeName=apply_basic_info.repayTypeName;
                    this.details_form.creditWayName=apply_basic_info.creditWayName;
                    
                    this.details_form.guarantorName=apply_basic_info.guarantorName;
                    this.details_form.guarantorIdcard=apply_basic_info.guarantorIdcard;
                    this.details_form.guarantorMobile=apply_basic_info.guarantorMobile;
                    
                    this.details_form.guarantorAddress=apply_basic_info.guarantorAddress;
                    this.details_form.guarFirmName=apply_basic_info.guarFirmName;
                    this.details_form.guarFirmCertName=apply_basic_info.guarFirmCertName;
                    
                    this.details_form.organizationCode=apply_basic_info.organizationCode;
                    this.details_form.guarFirmAddress=apply_basic_info.guarFirmAddress;
                    
                                        
                    this.person_tableData=res.body.data.loanGuarantorPersonalVoList; 
                    this.firm_tableData=res.body.data.loanGuarantorVoList;
                    //apprOpinionList审批意见
                    var test_resoult=res.body.data.apprOpinionList;
                    
                    var the_length=test_resoult.length;
                   
                    if(the_length == 0){
//                  	this.operation_account_meaning=false;
//                      this.operation_second_operation=false;
//                      this.operation_first_operation=false;
                    	this.first_operation=false;
      	                this.second_operation=false;
   	                    this.account_meaning=false;
 	                    
                    }else if( the_length== 1){
//                  	alert(1);
//                  	this.operation_account_meaning=false;
//                      this.operation_second_operation=false;
//                      this.operation_first_operation=true;
                    	this.first_operation=true;
      	                this.second_operation=false;
   	                    this.account_meaning=false;
 	                    
                    }else if(the_length== 2){
//                  	this.operation_account_meaning=false;
//                      this.operation_second_operation=true;
//                      this.operation_first_operation=true;
                    	this.first_operation=true;
      	                this.second_operation=true;
   	                    this.account_meaning=false;
 	                    
                    }else if(the_length== 3){
//                  	this.operation_account_meaning=true;
//                      this.operation_second_operation=true;
//                      this.operation_first_operation=true;
                    	this.first_operation=true;
      	                this.second_operation=true;
   	                    this.account_meaning=true;
 	                    
                    }
 //**********************************************************************                   
                    if(the_length == 0){
                    
                    	this.operation_account_meaning=false;
                        this.operation_second_operation=false;
                        this.operation_first_operation=false;
                        
                    }else if(the_length == 1){
                  
                    this.details_form.apprAmt=test_resoult[0].apprAmt;
                    this.details_form.currNode=test_resoult[0].currNode;
                    this.details_form.deadlineName=test_resoult[0].deadlineName;
                    this.details_form.financeProductName=test_resoult[0].financeProductName;
                    this.details_form.repayRate=test_resoult[0].repayRate;
                    this.details_form.refuseReason=test_resoult[0].refuseReason;
                        
                    this.operation_account_meaning=false;
                    this.operation_second_operation=false;
                    this.operation_first_operation=true;
                    //refuseReason:''
                    }else if(the_length == 2){
                    this.details_form.apprAmt=test_resoult[0].apprAmt;
                    this.details_form.currNode=test_resoult[0].currNode;
                    this.details_form.deadlineName=test_resoult[0].deadlineName;
                    this.details_form.financeProductName=test_resoult[0].financeProductName;
                    this.details_form.repayRate=test_resoult[0].repayRate;
                    this.details_form.refuseReason=test_resoult[0].refuseReason;
                    //refuseReason:''
                    
                    this.details_form.s_apprAmt=test_resoult[1].apprAmt;
                    this.details_form.s_currNode=test_resoult[1].currNode;
                    this.details_form.s_deadlineName=test_resoult[1].deadlineName;
                    this.details_form.s_financeProductName=test_resoult[1].financeProductName;
                    this.details_form.s_repayRate=test_resoult[1].repayRate
                    this.details_form.s_refuseReason=test_resoult[1].refuseReason;
                    
                    this.operation_account_meaning=false;
                    this.operation_second_operation=true;
                    this.operation_first_operation=true;
                   
                    }else if(the_length == 3){
                    this.details_form.apprAmt=test_resoult[0].apprAmt;
                    this.details_form.currNode=test_resoult[0].currNode;
                    this.details_form.deadlineName=test_resoult[0].deadlineName;
                    this.details_form.financeProductName=test_resoult[0].financeProductName;
                    this.details_form.repayRate=test_resoult[0].repayRate;
                    this.details_form.refuseReason=test_resoult[0].refuseReason;
                    //refuseReason:''
                    
                    this.details_form.s_apprAmt=test_resoult[1].apprAmt;
                    this.details_form.s_currNode=test_resoult[1].currNode;
                    this.details_form.s_deadlineName=test_resoult[1].deadlineName;
                    this.details_form.s_financeProductName=test_resoult[1].financeProductName;
                    this.details_form.s_repayRate=test_resoult[1].repayRate
                    this.details_form.s_refuseReason=test_resoult[1].refuseReason;
                    
                    this.details_form.a_apprAmt=test_resoult[2].apprAmt;
                    this.details_form.a_currNode=test_resoult[2].currNode;
                    this.details_form.a_deadlineName=test_resoult[2].deadlineName;
                    this.details_form.a_financeProductName=test_resoult[2].financeProductName;
                    this.details_form.a_repayRate=test_resoult[2].repayRate
                    this.details_form.a_refuseReason=test_resoult[2].refuseReason;
                    
                    this.operation_account_meaning=true;
                    this.operation_second_operation=true;
                    this.operation_first_operation=true;
                    }

                    var  appear_style=res.body.data.approveStyle;

                    if(appear_style == 'A'){
                    	this.title_content=res.body.data.currApprRole+'意见';
                    	if(res.body.data.currApprRole=='一级审批'){
                    		this.input_content='退回申请人';
                    		this.first_post_action_flag=true;
      
                    	}else if(res.body.data.currApprRole=='二级审批'){
                    		this.input_content='退回一审';
                    		this.show_for_second=true;
                    		this.second_post_action_flag=true;
                    	}
                    	
                    	this.operation_account_meaning=false;
                    	this.operation_second_operation_input=true;
                    	this.operation_account_meaning_another=false;
                    }else if(appear_style == 'B'){
                    	this.title_content=res.body.data.currApprRole+'意见';
                    	this.operation_account_meaning=true;
                    	this.operation_second_operation_input=false;
                    	this.operation_account_meaning_another=false;
                    }else if(appear_style == 'C'){
                    	this.operation_account_meaning=false;
                    	this.operation_second_operation_input=false;
                    	this.operation_account_meaning_another=true;
                    	
                    	this.refuseReason=res.body.data.returnReason;

                    }
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    },function(res){
                    	
                    console.log('ajax failed');
                    console.log(res);
                        
                    }); 

                    var this_button_post_data={};
                	
                    this_button_post_data.authorization=localStorage.tokens;
    	       	    
    	       	    button_post_data.processInstanceId=this.highlightId.processInstanceId;
    	       	    
                    var other_url=localStorage.localhost+'/wf/getHisActTaskList';
                    
                    this.$http.post(other_url,button_post_data,{emulateJSON: true}).then(function(res){
                    	
                    	console.log(res);
                    	this.s_tableData=res.body.data.historyActivityTaskList;
                    	
                    	
                    },function(res){
                    	console.log('ajax error');
                    	console.log(res);
                    });
                    

                    
                    
    	        },
    	        cancel_desicion:function(){
    	           this.dialogFormVisible_try=false;
    	       	   this.dialogVisible_abc=true;
    	        },
    	        go_back:function(){
    	           console.log(this.dialogFormVisible_try);
    	       	   this.dialogFormVisible_try=true;
    	       	   this.dialogVisible_abc=false;
    	       	   console.log(this.dialogFormVisible_try);
    	        },
    	        close_details:function(){
    	        	this.dialogVisible_abc=false;
    	        	
    	        },
                show_details:function(){
                 
                    this.dialogVisible_abc=true;
                 
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
            
//          nodeFormat:function(row, column){
//          	
//          	var currNode=row.currNode;
// 
//          return 	 currNode
//          },
                        
            //加载按钮
            load_button:function(){
   	         	
    	       	var button_post_data={};
    	       	
    	       	var current_token=localStorage.tokens;
                	
                  button_post_data.authorization=current_token;
    	       	
    	       	    button_post_data.roleCode=localStorage.roleCode;
    	       	    
    	       	    button_post_data.menuId=localStorage.Menu_id;
    	       	    
    	       	    var url=localStorage.localhost + '/user/getMeunBtnByRoleAndMenuId';
    	       	    
    	       	    this.$http.post(url,button_post_data,{emulateJSON: true}).then(function(res){
                    	
                    if(res.data.data.length>0){
                    	this.buttons=res.data.data;
                    }else{
                    	console.log("...........");
                    	console.log(this.$store.state.buttons);
                    	this.buttons=this.$store.state.buttons;
                    }
                    

                    },function(res){
                    	
                    console.log('ajax failed');
                    console.log(res);
                        
                    });    
    	       	  
    	       },
            //从服务器读取数据
            loadData: function(){   
 
            this.url=localStorage.localhost+'/wf/getToCompleteTaskList'
    	       	  
    	    var current_token=localStorage.tokens;
    	    
            this.criteria={};
            
            this.criteria.authorization=current_token;
            
            this.criteria.pageIndex=this.currentPage;
             
            this.pagesize=20;
            
            this.criteria.pageSize=this.pagesize;
                
    	    this.$http.post(this.url,this.criteria,{emulateJSON: true}).then(function(res){
    	      	
    	    console.log(res);
    	      	
    	    this.tableData=res.body.data.toCompleteTaskList;
    	    this.totalCount=res.body.data.total;

    	    },function(error){
    	      	
    	      	alert("error");
    	      	
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
//              handleDelete: function(index, row) {
//                  var array = [];
//                  array.push(row.id);
//                  this.$http.post('newstu/delete',{"array":array},{emulateJSON: true}).then(function(res){
//                      this.loadData(this.criteria, this.currentPage, this.pagesize);
//                  },function(){
//                      console.log('failed');
//                  });
//              },

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
                },
                
               submitForm(formName) {
                    this.$refs[formName].validate((valid) => {
                        if (valid) {
                            alert('submit!');
                           
                        } else {
                            console.log('error submit!!');
                            return false;
                        }
                    });
                   }

    }
  }
</script>