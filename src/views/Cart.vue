<template>
     <div>
	 <nav-header></nav-header>
        <div class="center">
			 <img src="../assets/logo.png" >
			 <p>
				 商品详情 商品详情 商品详情 商品详情 商品详情<br /> 商品详情 商品详情 商品详情 商品详情 商品详情<br />  
				 商品详情 商品详情 商品详情 商品详情 商品详情 <br /> 商品详情 商品详情 商品详情 商品详情 商品详情 商品详情
			 </p>
			 <router-link to="/" >去结算</router-link>
		</div>
     </div>
</template>

<script>
    import './../assets/css/base.css'
	import './../assets/css/product.css'
	import NavHeader from '@/components/NavHeader.vue'
	import NavFooter from '@/components/NavFooter.vue'
	import NavBread from '@/components/NavBread.vue'
	import axios from 'axios'
	export default {
		
		data() {
			return{
				   selected:'a',
				
			}
		},
		components: {
			NavHeader,
			NavFooter,
			NavBread
		}
	}
</script>


<style>
.center{
	width:800px;
	height:600px;
	border:solid black 1px;
	margin:20px  auto;
}

</style>