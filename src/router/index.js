import Vue from 'vue'
import Router from 'vue-router'
import GoodsList from './../views/GoodsList'
import Cart from './../views/Cart'
Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [{
			path: '/',
			name: 'GoodsList',
			components: {
				default:GoodsList
			}
		},
		{
			path:'/cart',
			name: Cart,
			components:{
				default:Cart
			}
		}
	]
})