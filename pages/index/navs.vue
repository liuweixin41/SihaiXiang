<template>
	<view class="box">
	  <view class="top">
		<navigator v-for="item in navinfo" :key="item.id" class="items" :url="item.url">  
		  <image :src="item.img" mode="" class="icon"></image>
		  <text class="text-box">{{item.text}}</text>
		</navigator>
	  </view>
	  <view class="bottom">
		  <image class="imgbig" src="../../static/8.png" mode=""></image>
	  </view>
	</view>
</template>

<script>
	import {navlist} from "../../json/list.json"
	export default{
		data() {
			return {
				navinfo:navlist,
			}
		},
	}
</script>

<style>
	.box{
		width:750rpx;
		padding:10rpx;
		height:auto;
		
	}
	.top{
		display:flex;
		justify-content: space-around;
		width:750rpx;
		margin-top:50rpx;
	}
	.items{
		width:25%;
		text-align: center;
		font-size:12rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.icon{
		width:80rpx;
		height:80rpx;
	}
	.text-box{
		width:70%;
		font-size:24rpx;
	}
	.bottom{
		height:auto;
		width:100%;
		text-align:center;
		margin-top:25rpx;
	}
	.imgbig{
		
		height:300rpx;
		
	}
</style>
