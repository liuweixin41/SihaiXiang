<template>
	<view class="box">
		<view class="title">
			<image class="title-img" src="../../static/9.png" mode=""></image>
		</view>

		<view class="cookers">
			<view class="items" v-for="item in cookers" :key="item.id">
				<image class="avatar" :src="item.img" mode=""></image>
				<text>{{item.name}}</text>
				<!-- 评分组件 -->
				<view class="rate-box">
					<uni-rate class="rate" :value="5" :max="5" size="12" color="#fe6654"></uni-rate>
				</view>
			</view>
			
		</view>
		<view class="cookers-bottom">
			<navigator>更多名厨</navigator>
		</view>
	</view>
</template>

<script>
	import uniRate from '@/components/uni-rate/uni-rate.vue'

	import {
		manlist
	} from "../../json/list.json";
	export default {
		components: {
			uniRate
		},

		data() {
			return {
				cookers: manlist
			}
		}
	}
</script>

<style>
	.box,
	.title,
	.cookers {
		width: 750rpx;
		padding: 10rpx;
		height: auto;
		text-align: center;
	}

	.title-img {
		width: 70%;
		height: 115rpx;
	}

	.cookers {
		display: flex;
		justify-content: space-around;
	}

	.items {
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		box-shadow: 1px 1px 10px 1px #eee;
		border-radius: 25rpx;
		padding: 40rpx 50rpx;
	}

	.avatar {
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
	}

	.rate-box {
		height: 50rpx;
		width: 100%;
		margin-top:15rpx;
	}

	.rate {
		height: 100%;
		width: 80%;
		
	}
	.cookers-bottom{
		text-align: center;
		color:#EEEEEE;
	}
</style>
