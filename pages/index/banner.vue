<template>
	<view class="swiper-box">
		<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration"
		 :dots-styles="dotsStyles">
			<swiper-item v-for="(item ,i) in arr" :key="i">

				<image :src="item.ad_pic" class="imgs"></image>

			</swiper-item>

		</swiper>

		<navigator class="search-box" url="">
			<image class="fangdajing" src="../../static/3.png" mode=""></image>
			<text>搜美食,菜谱</text>
		</navigator>
	</view>
</template>

<script>
	import {imgApi} from "../../api/api.js";
	export default {
		data() {
			return {
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				arr: [],
			}
		},
		created() {
			var that = this;
			uni.request({
				url: imgApi + "/index/home_banner",
				method: "POST",
				success: (res) => {
					console.log(res);
					that.arr = res.data.data
				}
			})
		}
	}
</script>

<style>
	.swiper-box,
	.swiper,
	.swiper-item {
		width: 750rpx;
		height: 400rpx;
	}

	.swiper-box {
		position: relative;
	}

	.imgs {
		width: 100%;
	}

	.search-box {
		width: 600rpx;
		height: 35px;
		background: #fff;
		border-radius: 25px;
		box-shadow: 1px 1px 10px 1px #eee;
		position: absolute;
		bottom: -25px;
		left: 50%;
		margin-left: -300rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 14px;

	}

	.fangdajing {
		width: 50rpx;
		height: 50rpx;
	}
</style>
