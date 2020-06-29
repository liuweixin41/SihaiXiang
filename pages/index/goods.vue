<template>
	<view class="box">
		<view class="title">
			<image class="title-img" src="../../static/10.png" mode=""></image>
		</view>

		<view class="goods">
			<scroll-view class="scroll-view" scroll-x="true" scroll-left="120">
				<view class="items" v-for="item in goods" :key="item.goodsname">
					<image class="avatar" :src="item.img"></image>
					<view style="margin-top:10rpx"><text>{{item.goodsname}}</text></view>
					<view><text>￥{{item.price}}/桌</text></view>
				</view>
				
			</scroll-view>

		</view>
		<view class="goods-bottom">
			<navigator>更多餐宴</navigator>
		</view>
	</view>
</template>

<script>
	import {
		goodslist
	} from "../../json/list.json";
	export default {


		data() {
			return {
				goods: goodslist
			}
		}
	}
</script>

<style>
	.box,
	.title {
		width: 750rpx;
		padding: 10rpx;
		height: auto;
	}

	.title {
		text-align: center;
	}

	.title-img {
		width: 80%;
		height: 48rpx;
	}

	.goods {
		width: 750rpx;
		height: auto;
		display: flex;
		padding: 5rpx;
	}

	.items {
		width: 150px;
		height: 150px;
		text-align: center;
		
		box-shadow: 1px 1px 10px 1px #eee;
		border-radius: 25rpx;
        padding:10rpx;
		overflow: hidden;
		display: inline-block;
		font-size:30rpx;
		
	}
	.scroll-view{
		width:750rpx;
		height:auto;
		white-space: nowrap;
	}

	.avatar {
		width: 100%;
		height:150rpx;
        border-radius: 20rpx 20rpx 0 0;
	}

	.goods-bottom {
		text-align: center;
		color: #EEEEEE;
	}
</style>
