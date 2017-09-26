<template>
     <div>
	 <nav-header></nav-header>
        <div class="center">
			<select v-model="selected">
			<option v-for="option in options" v-bind:value="option.value">{{ option.text }}</option>
			</select>
			<span>{{ selected }}</span>
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
				   selected:'a',
				   options:[
					   {text:'one',value:'a'},
					   {text:'two',value:'b'},
					   {text:'three',value:'c'}
					   ]
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