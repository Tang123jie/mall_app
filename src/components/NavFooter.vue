<template>
	<div class="foot">
		<a href="#" class="foot_bar is_active">
			<span class="foot_img">
				<img src="../assets/images/ic_tab_home_normal.png" alt="" />
			</span>
			<span class="foot_text">首页</span>
		</a>
		<a href="#" class="foot_bar">
			<span class="foot_img">
				<img src="../assets/images/ic_tab_home_normal.png" alt="" />
			</span>
			<span class="foot_text">图片</span>
		</a>
		<a href="#" class="foot_bar">
			<span class="foot_img">
				<img src="../assets/images/ic_tab_home_normal.png" alt="" />
			</span>
			<span class="foot_text">社交</span>
		</a>
	<a href="#" class="foot_bar">
			<span class="foot_img">
				<img src="../assets/images/ic_tab_home_normal.png" alt="" />
			</span>
			<span class="foot_text">小组</span>
		</a>
		<a href="#" class="foot_bar">
			<span class="foot_img">
				<img src="../assets/images/ic_tab_home_normal.png" alt="" />
			</span>
			<span class="foot_text">我的</span>
		</a>
	</div>
</template>

<script>
</script>

<style lang="less">
	.foot{
		height: 50px;
		width: 100%;
		overflow:hidden;
		background:#fff;
		border-top:1px solid #e4e4e4;
		display:flex;
		position:fixed;
		bottom:0;
		left:0;
		right:0;
		
		.foot_bar{
			text-align:center;
			flex:1;
	    
	    .foot_img{
	    	display:block;
	    	img{
	    		width: 28px;
	    		height: 28px;
	    	}
	    }
	    .foot_text{
	    	display:block;
	    	font-size: 10px;
	    	color:#949494;
	    }
	    &.is_active{
	    	.foot_text{
	    		color:#42bd56;
	    	}
	    }
		}
	}
	
</style>