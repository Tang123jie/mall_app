<template>
     <div>
	 <nav-header></nav-header>
	 <img src="../assets/logo.png" >
      <div class="login_wrap" v-show="showLogin">
	  <h3>登录</h3>
	  <p v-show="showtishi">{{ tishi }}</p>
	  <input type="text" placeholder="请输入用户名" v-model="username">
	  <input type="password" placeholder="请输入密码" v-model="password">
	  <button>登录</button>
	  <span v-on:click="ToRegister">没有账号?马上注册</span>
	  <router-link to="/goodlist" class="nologin">游客登录</router-link>
	  </div>
	  <div class="register_wrap" v-show="showRegister">
	  <h3>注册</h3>
	  <p v-show="showtishi">{{ tishi }}</p>
	  <input type="text" placeholder="请输入用户名" v-model="newUsername">
	  <input type="text" placeholder="请输入密码" v-model="newPassword">
	  <button>注册</button>
	  <span v-on:click="Tologin">已有账号?马上登录</span>
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
				 showLogin:true,
				 showRegister:false,
				 showtishi:false,
				 tishi:'',
				 username:'',
				 password:'',
				 newUsername:'',
				 newPassword:''


			}
		},
		components: {
			NavHeader,
			NavFooter,
			NavBread
		},
		methods:{
			ToRegister:function(){

			},
            Tologin:function(){

			}
		}
		
	}
</script>


<style>
.login-wrap{
	text-align:center;
}
input{
	display:block;
	width:350px;
	height:45px;
	line-height:45px;
	margin:0 auto;
	margin-bottom:5px;	
	border:solid 1px #888;
	padding:10px;
	box-sizing:border-box;
	outline:none;
}
p{
	color:red;
}
button{
	display:block;
	width:350px;
	height:45px;
	line-height:45px;
	margin:0 auto;
	border:none;
	background-color:#41b883;
	color:#fff;
	font-size:16px;
	margin-bottom:5px;	
}
span{
	cursor:pointer;
}
span:hover{
	color:#41b883;
}
.nologin{
	display:block;
}

</style>