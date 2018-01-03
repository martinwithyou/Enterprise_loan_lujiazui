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
.page_location_icon_new{
	width:100px;
	height:100px;
	background-color:#0000ff;
}
.page_location_icon_new_part{
	width:100px;
	height:50px;
	background-color:#0000ff;
}
.drop_down_style{
	background-color: #0082E6;
}
</style>  
<template>
	<div> 
<!------------------------------------------------------->
		<div class="vue_location">
			<div class="page_location_icon"></div>
			<div class="page_location_content" v-text="location"></div>
		</div>
<!------------------------------------------------------->
    </div>
</template>


<script>
export default {
    data() {
      return {
      	location:'此页面不可用。。。。'
      };
    },
    mounted(){
  		
  		this.$nextTick(function() {  

  		
  		})
  	},
    methods: {
       handleSelect: function(val){
       	 console.log(val);
       }
      

    }
  }
</script>