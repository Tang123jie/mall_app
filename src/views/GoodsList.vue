<template>
	<div>
		<nav-header></nav-header>
		<nav-bread></nav-bread>
		<div class="accessory-result-page accessory-page">
			<div class="container">
				<div class="filter-nav">
					<span class="sortby">买买买：</span>
					<a href="javascript:void(0)" class="default cur">Default</a>
					<a href="javascript:void(0)" class="price">Price
						<svg class="icon icon-arrow-short">
							<use xlink:href="#icon-arrow-short"></use>
						</svg>
					</a>
					<a href="javascript:void(0)" class="filterby stopPop">Filter by</a>
				</div>
				<div class="accessory-result">
					<!-- filter -->
					<div class="filter stopPop" id="filter">
						<dl class="filter-price">
							<dt>二狗子:</dt>
							<dd>
								<a href="javascript:void(0)" v-bind:class="{'cur':priceChecked=='all'}" @click="priceChecked='all'">All</a>
							</dd>
							<dd v-for="(price,index) in priceAll" >
								<a href="javascript:void(0)" @click="priceChecked=index" v-bind:class="{'cur':priceChecked==index}">{{ price.startPrice }} -- {{ price.endPrice }}</a>
							</dd>
						</dl>
					</div>

					<!-- search result accessories list -->
					<div class="accessory-list-wrap">
						<div class="accessory-list col-4">
							<ul>
								<li v-for="(item,index) in goodsList">
									<div class="pic">
										<a href="#"><img v-lazy="'static/'+item.productImage" alt=""></a>
									</div>
									<div class="main">
										<div class="name">{{ item.productName }}</div>
										<div class="number">{{ item.productId }}</div>
										<div class="price">{{ item.productPrice }}</div>
										<div class="btn-area">
											<a href="javascript:;" class="btn btn--m">加入购物车</a>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
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
			return {
				goodsList: [],
				priceAll: [{
						startPrice: '0.00',
						endPrice: '500'
					},
					{
						startPrice: '500',
						endPrice: '1000'
					},
					{
						startPrice: '1000',
						endPrice: '2000'
					},
					{
						startPrice: '2000',
						endPrice: '4000'
					},
					{
						startPrice: '4000',
						endPrice: '8000'
					}
				],
				priceChecked:'all'
			}
		},
		components: {
			NavHeader,
			NavFooter,
			NavBread
		},
		mounted: function() {
			this.getGoodsList();
		},
		methods: {
			getGoodsList() {
				axios.get("/goods").then(result => {
					var res = result.data;
					this.goodsList = res.result;
				})
			}
		}
	}
</script>

<style>
	.number {
		font-weight: 600;
		font-size: 20px;
		float: right;
	}
</style>