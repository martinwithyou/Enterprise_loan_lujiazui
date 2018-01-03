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
.selelct_style{
	width:190px;
	height:30px;
}
.selelct_part{
	height:100%;
	width:120px;
	float:left;
	border:2px solid #999999;
}
.selelct_option{
	text-align:center;
}
.selelct_option:hover{
	background-color: #1C8DE0;
	color:#ffffff;
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
<el-form :model="ruleForm"  ref="ruleForm" label-width="150px" class="demo-ruleForm">
	
<el-row class="change_row_size">
  <el-col :span="6">
  	<div class="grid-content bg-purple">
  		<el-form-item label="部门名称">
            <el-input v-model="ruleForm.companyName" placeholder="部门名称" class="new_input_style"></el-input>
        </el-form-item>
  	</div>
  </el-col>
  <el-col :span="6">
  	<div class="grid-content bg-purple-light">
  		<el-form-item label="团队名称">
            <el-input v-model="ruleForm.teamName" placeholder="团队名称" class="new_input_style"></el-input>
        </el-form-item>
  	</div>
  </el-col>
  <el-col :span="6">
  	<div class="grid-content bg-purple">
  		<el-form-item label="是否生效">
            <el-select v-model="ruleForm.state" class="new_input_style" placeholder="请填写是否生效">
               <el-option label="是" value="1"></el-option>
               <el-option label="否" value="2"></el-option>
            </el-select>
        </el-form-item>
  	</div>
  </el-col>
  <el-col :span="6">
  	<div class="grid-content bg-purple-light">
  		<!--<el-form-item label="部门列表">
            <el-select v-model="ruleForm.value4" class="new_input_style" placeholder="请选择部门列表">
               <el-option label="部门A" value="shani"></el-option>
               <el-option label="部门B" value="beiing"></el-option>
               <el-option label="部门C" value="shnghai"></el-option>
               <el-option label="部门D" value="beijng"></el-option>
            </el-select>
        </el-form-item>-->
  	</div>
  </el-col>
</el-row>

<el-row>
  <el-col :span="24" style="padding-left:150px;">
  	<div class="grid-content bg-purple-light">
  		<!--<el-button type="primary"   @click="loadData_new">搜索</el-button>-->
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
            prop="teamName"
            label="团队名称"
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="companyName"
            label="部门名称"
            width="200">
            </el-table-column>

            <el-table-column
            prop="typeName"
            label="归属总部"
            width="200">
            </el-table-column>
            
            <el-table-column
            :formatter="stateFormat"
            prop="state"
            label="是否有效"
            width="200">
            </el-table-column>
            
            <el-table-column
            prop="rootName"
            label="公司总部名称">
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
  title="添加部门"
  :visible.sync="dialogVisible_eighth"
  :modal-append-to-body="false"
  width="30%"
  :close-on-click-modal="false">
  
<el-form :model="search_form"  ref="ruleForm" label-width="100px" class="demo-ruleForm">
<el-row>
  <el-col :span="12">
  <div class="grid-content bg-purple-dark">
  	<el-form-item label="组织部门名称">
        <el-input v-model="search_form.value1" class="new_input_style"></el-input>
    </el-form-item>
  </div>
  </el-col>
    <el-col :span="12">
  <div class="grid-content bg-purple-dark">
  	<el-form-item label="部门负责人">
        <el-input v-model="search_form.value2" class="new_input_style"></el-input>
    </el-form-item>
  </div>
  </el-col>
</el-row>
<el-row>
  <el-col :span="12">
  <div class="grid-content bg-purple-dark">
  	  	<el-form-item label="开户省" prop="value15">
         <select id="province_type" @change="origin_select_city_type" class="select_style">
         	<option>请选择</option>
         </select>
        </el-form-item>
  </div>
  </el-col>
    <el-col :span="12">
  <div class="grid-content bg-purple-dark">
  	  	<el-form-item label="开户城市" prop="value15">
         <select id="city_type"  class="select_style">
         	<option>请选择</option>
         </select>
        </el-form-item>
  </div>
  </el-col>
</el-row>
<el-row>
  <el-col :span="12">
  <div class="grid-content bg-purple-dark">
  	<el-form-item label="选择部门">
        <select id="group" class="select_style" @change="select_depart">
        	<option>请选择</option>
        </select>
    </el-form-item>
  </div>
  </el-col>
    <el-col :span="12">
  <div class="grid-content bg-purple-dark" v-show="depart">
  	<!--<el-form-item label="选择部门">
        <select id="depart" class="select_style" @change="get_employees">
        	<option>请选择</option>
        </select>
    </el-form-item>-->
  </div>
  </el-col>
</el-row>
<el-row>
    <el-col :span="12" style="padding-left:100px;">
  <div class="grid-content bg-purple-dark">
  	    <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible_eighth = false">取 消</el-button>
            <el-button type="primary" @click="add_new_partment">确 定</el-button>
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
  :visible.sync="dialogVisible_ninth"
  :modal-append-to-body="false"
  width="30%"
  :close-on-click-modal="false">
  
<el-form :model="search_form"  ref="ruleForm" label-width="100px" class="demo-ruleForm">
<el-row>
  <el-col :span="12">
  <div class="grid-content bg-purple-dark">
  	<el-form-item label="组织部门名称">
        <el-input v-model="search_form.value1" class="new_input_style"></el-input>
    </el-form-item>
  </div>
  </el-col>
    <el-col :span="12">
  <div class="grid-content bg-purple-dark">
  	<el-form-item label="部门负责人">
        <el-input v-model="search_form.value2" class="new_input_style"></el-input>
    </el-form-item>
  </div>
  </el-col>
</el-row>
<el-row>
  <el-col :span="12">
  <div class="grid-content bg-purple-dark">
  	  	<el-form-item label="开户省" prop="value15">
         <select id="e_province_type" @change="origin_select_city_type" class="select_style">
         	<option>请选择</option>
         </select>
        </el-form-item>
  </div>
  </el-col>
    <el-col :span="12">
  <div class="grid-content bg-purple-dark">
  	  	<el-form-item label="开户城市" prop="value15">
         <select id="e_city_type"  class="select_style">
         	<option>请选择</option>
         </select>
        </el-form-item>
  </div>
  </el-col>
</el-row>
<el-row>
  <el-col :span="12">
  <div class="grid-content bg-purple-dark">
  	<el-form-item label="选择部门">
        <select id="e_group" class="select_style" @change="select_depart">
        	<option>请选择</option>
        </select>
    </el-form-item>
  </div>
  </el-col>
    <el-col :span="12">
  <div class="grid-content bg-purple-dark" >
  	<el-form-item label="选择部门">
        <select id="e_depart" class="select_style" @change="get_employees">
        	<option>请选择</option>
        </select>
    </el-form-item>
  </div>
  </el-col>
</el-row>
<el-row>
    <el-col :span="12" style="padding-left:100px;">
  <div class="grid-content bg-purple-dark">
  	    <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible_eighth = false">取 消</el-button>
            <el-button type="primary" @click="add_new_partment_edit">确 定</el-button>
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
  import $ from 'jquery'
  export default {
    data() {
    	
      return {
      	depart:false,
      	
        employee:false,
      	
      	parts:[],
      	
      	buttons:[],
      	
        dialogVisible_eighth:false,
        
        dialogVisible_ninth:false,
        
        location:"您的位置    >  组织机构管理   >  部门管理",
        
        ruleForm:{
        	value1:'',
        	value2:'',
        	value3:'',
        	companyName:'',
        	teamName:'',
        	state:''
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

      }
      
    },
  	mounted(){
  		
  		this.$nextTick(function() {  
  		
  			this.loadData();
  			
  			this.load_button();
  		})
  	},
    methods: {
    	    add_new_partment_edit:function(){
    	    var selelct_url=localStorage.localhost+'/sysOrgan/saveSysOrgan'
                	
            this.criteria={};
                	
            this.criteria.organCode=$("#e_depart").val();
            this.criteria.companyName=this.search_form.value1;
            this.criteria.dutyName=this.search_form.value2;
            
            this.criteria.provinceCode=$("#e_province_type").val();
            this.criteria.provinceName=$("#e_province_type").find("option:selected").text();
            this.criteria.cityCode=$("#e_city_type").val();
            this.criteria.cityName=$("#e_city_type").find("option:selected").text();
            this.criteria.typeCode=$("#e_group").val();
            this.criteria.typeName=$("#e_group").find("option:selected").text();
            this.criteria.rootCode='XC';
            this.criteria.rootName='上海雪橙互联网金融信息服务有限公司';
            this.criteria.parentOrganCode=$("#e_depart").val();
            this.criteria.parentOrganName=$("#e_depart").find("option:selected").text();
            
            var current_token=localStorage.tokens;
                	
            this.criteria.authorization=current_token;
            
            this.$http.post(selelct_url,this.criteria,{emulateJSON: true}).then(function(res){
               
               this.dialogVisible_ninth=false;
               alert('success');
               this.loadData();
            },function(res){
                    	
              console.log('ajax failed');
              console.log(res);
                        
            });
    	    },
    	    update_user:function(){
    	    this.dialogVisible_ninth=true;
    	    console.log(this.highlightId);
    	    this.select_depart();
    	    this.get_employees();
    	    this.select_depart();
    	    this.give_out_task();
    	   
    	    this.origin_select_province_type();
    	    
    	    this.criteria={};
    	    this.criteria.id=this.highlightId.id;
    	    var current_token=localStorage.tokens;	
            this.criteria.authorization=current_token;
            var selelct_url=localStorage.localhost+'/sysOrgan/selectSysOrgan';
            this.$http.post(selelct_url,this.criteria,{emulateJSON: true}).then(function(res){
            console.log(res.body.data);
            this.search_form.value1=res.body.data.organName;
            this.search_form.value2=res.body.data.dutyName
            //$("#e_province_type").html('');
            $("#e_province_type").prepend('<option value="'+res.body.data.provinceCode+'">'+res.body.data.provinceName+'</option>');
           // $("#e_city_type").html('');
            $("#e_city_type").prepend('<option value="'+res.body.data.cityCode+'">'+res.body.data.cityName+'</option>');
           // $("#e_depart").html('');
            $("#e_depart").prepend('<option value="'+res.body.data.parentOrganCode+'">'+res.body.data.parentOrganName+'</option>');
            //$("#e_group").html('');
            $("#e_group").prepend('<option value="'+res.body.data.typeCode+'">'+res.body.data.typeName+'</option>');

//e_depart
//e_group
//             this.dialogVisible_ninth=false;
//               alert('success');
//             this.loadData();
            },function(res){
                    	
              console.log('ajax failed');
              console.log(res);
                        
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
    	    add_new_partment:function(){
    	    	
    	    var selelct_url=localStorage.localhost+'/sysOrgan/saveSysOrgan'
                	
            this.criteria={};
                	
            this.criteria.organCode=$("#depart").val();
            this.criteria.companyName=this.search_form.value1;
            this.criteria.dutyName=this.search_form.value2;
            
            this.criteria.provinceCode=$("#province_type").val();
            this.criteria.provinceName=$("#province_type").find("option:selected").text();
            this.criteria.cityCode=$("#city_type").val();
            this.criteria.cityName=$("#city_type").find("option:selected").text();
            this.criteria.typeCode=$("#group").val();
            this.criteria.typeName=$("#group").find("option:selected").text();
            this.criteria.rootCode='XC';
            this.criteria.rootName='上海雪橙互联网金融信息服务有限公司';
            this.criteria.parentOrganCode=$("#group").val();
            this.criteria.parentOrganName=$("#group").find("option:selected").text();
            
            var current_token=localStorage.tokens;
                	
            this.criteria.authorization=current_token;
            

            	
            this.$http.post(selelct_url,this.criteria,{emulateJSON: true}).then(function(res){
               this.dialogVisible_eighth=false;
               this.loadData();
               var res_message=res.body.resultMessage;
               alert(res_message);
               this.search_form.value1='';
               this.search_form.value2='';
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
                $("#depart").html('');
               for(var i=0; i<res.body.data.length;i++){
             	  
//                $("#depart").append('<option >请选择</option>');
               	  $("#depart").append('<option value="'+res.body.data[i].organCode+'">'+res.body.data[i].organName+'</option>');
               	  $("#e_depart").append('<option value="'+res.body.data[i].organCode+'">'+res.body.data[i].organName+'</option>');
               }
               this.employee=true;
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
               	  $("#e_group").append('<option value="'+res.body.data[i].organCode+'">'+res.body.data[i].organName+'</option>');
               }
               this.depart=true;
            },function(res){
                    	
              console.log('ajax failed');
              console.log(res);
                        
            });
            
    	    },
    	    add_user: function(){
    	      	
    	      	this.dialogVisible_eighth=true;
    	      	this.origin_select_province_type();
    	      	this.loadSelections();
    	      	this.give_out_task();
    	      	
    	    },
    	    origin_select_city_type: function(){
	        
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
               	  $("#e_city_type").append('<option value="'+res.body.data[i].regionCode+'">'+res.body.data[i].regionName+'</option>');
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
               	
               	  $("#province_type").append('<option value="'+res.body.data[i].regionCode+'">'+res.body.data[i].regionName+'</option>');
               	  $("#e_province_type").append('<option value="'+res.body.data[i].regionCode+'">'+res.body.data[i].regionName+'</option>');
               }
               
               
               
            },function(res){
                    	
              console.log('ajax failed');
              console.log(res);
                        
            });       
            },
            
 
    	new_loadSelections: function(organCode){
    		
    	//localStorage.localhost="http://172.16.5.166:9095"
    	
    	this.url=localStorage.localhost + '/sysOrgan/selectOrganChildList';
            
      	var current_token=localStorage.tokens;
      	
      	var data={};
      	     
        data.authorization=current_token;
        
        data.organCode='XC';
        
        this.$http.post(this.url, data, {emulateJSON: true}).then(function(res){
        	
        	console.log(res.body.data);
        	
        	this.parts=res.body.data;
        	
        },function(res){
        	
        	console.log("ajax error");
        	console.log(res);
        });
        
        
    	},
    	loadSelections: function(){
     	
        //localStorage.localhost="http://172.16.5.166:9095"
    	this.url=localStorage.localhost + '/sysOrgan/selectOrganChildList';
    	    
        console.log(localStorage.localhost);
            
      	var current_token=localStorage.tokens;
      	
      	var data={};
      	     
        data.authorization=current_token;
        
        data.organCode='XC';
       
        console.log(data);
        
        this.$http.post(this.url, data, {emulateJSON: true}).then(function(res){
        	
        	console.log(res.body.data);
        	
        	var resoult_array=res.body.data;
        	
        	for(var i=0; i<resoult_array.length; i++){
        		
        		$("#selelct_area_a").append( '<div organName="'+ resoult_array[i].organName+'"  organCode="'+resoult_array[i].organCode+'"  class="part_select_1" style="text-align:center;line-height:36px;border-bottom:1px solid #f2f2f2;">'+resoult_array[i].organName+'</div>');
    	
        	}
        	
        	
        	
        },function(res){
        	
        	console.log("ajax error");
        	console.log(res);
        });
        
        
        $(".part_select_1").click(function(){
        	
        });

    },
    	     btn_operation: function(btnCode){

                console.log(btnCode);
                
    	      	if(btnCode == "organ_add_btn"){
    	      		
    	      		this.add_user();

    	      		
    	      	}else if(btnCode == "organ_update_btn"){
    	      		
    	      		this.update_user();
    	      		
    	      	}else{
    	      		this.loadData_new();
    	      	}
    	      	
    	      },
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
    	loadData_new:function(){

    	this.url=localStorage.localhost + '/sysOrgan/querySysOrganListByPage';

      	var current_token=localStorage.tokens;
      	var data={};    
      	console.log(this.ruleForm);
      	data.companyName=this.ruleForm.companyName;
      	data.teamName=this.ruleForm.teamName; 
      	data.state=this.ruleForm.state; 
        data.authorization=current_token;
        data.pageIndex=this.currentPage;
        data.pageSize=this.pagesize;
        data.companyName="";
        data.state="";
        
        this.$http.post(this.url, data, {emulateJSON: true}).then(function(res){
        	
        	this.tableData=res.body.data.list;
        	
        	this.totalCount=res.body.data.total;
        	
        },function(res){
        	
        	console.log("ajax error");
        	console.log(res);
        });

    },       
    	loadData: function(){

    	this.url=localStorage.localhost + '/sysOrgan/querySysOrganListByPage';

      	var current_token=localStorage.tokens;
      	
      	var data={};
      	     
        data.authorization=current_token;
        data.pageIndex=this.currentPage;
        data.pageSize=this.pagesize;
        data.companyName="";
        data.state="";
        
        this.$http.post(this.url, data, {emulateJSON: true}).then(function(res){
        	
        	this.tableData=res.body.data.list;
        	
        	this.totalCount=res.body.data.total;
        	
        },function(res){
        	
        	console.log("ajax error");
        	console.log(res);
        });

    },

    	       addNewDepartment: function(){
    	        	
    	        	this.dialogVisible_eighth=true;
    	        },
                //从服务器读取数据


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
