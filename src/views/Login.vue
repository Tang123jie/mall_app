<template>
     <div>
	 <nav-header></nav-header>
       <router-link to="/goodlist">主页</router-link>
	<nav-footer></nav-footer>	
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
				   memberDetail : {} 
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


</style>