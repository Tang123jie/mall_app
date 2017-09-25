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
				  name:'',
				  pwd:'',
				  error:''
			}
		},
		components: {
			NavHeader,
			NavFooter,
			NavBread
		},
		computed:{
			user(){
				return this.$store.state.user
			}
		},
		methods:{
			isLogin:function(){
				this.$http.get('http://localhost:3000/users?username='+this.name+'&password='+this.pwd).then((response)=>{
					if(response.body != null & response.body.length>0){
						this.$store.commit('isLogin',response.body[0]);
						this.name='';
						this.ped='';
						this.$router.push({path:'main'})

					}else{
						alert('请输入正确的用户名和密码!!!');
						this.name='';
						this.pwd='';
					}
				}).then((error)=>this.error=error)

			}
		}
	}
</script>


<style>


</style>