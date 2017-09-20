<template>
	<div>
		<nav-header></nav-header>
		<div class="cart_t">
		<span>banner</span>
		</div>		
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
				msg:'你好，我来了！'
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
.cart_t{
	width:80%;
	height:600px;
	border:solid 1px red;
	margin:0 auto;
	margin-top: 40px;
}

</style>