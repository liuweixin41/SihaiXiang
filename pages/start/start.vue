<template>
	<view class="login">
		<image class="img-big" src="/static/w4.jpg"></image>
		<button class="btn" open-type="getUserInfo" @getuserinfo="getuserinfo">开放登录</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onLoad() {
			let userinfo = uni.getStorageSync("userinfo");
			if (userinfo) {
				uni.switchTab({
					url: "/pages/index/index",
				})
			}
		},
		methods: {
			// 登录授权
			getuserinfo() {
				wx.getUserInfo({
					success: function(res) {
						console.log(res);

						uni.setStorageSync("userinfo", res.userInfo)

						uni.switchTab({
							url: "/pages/index/index"
						})
					}
				})
			},
		},
	}
</script>

<style>
	page,
	.login,
	.img-big {
		width: 750rpx;
		height: 100%;
	}

	.img-big {
		position: relative;
	}

	.btn {
		width: 250rpx;
		height: 100rpx;
		background-color: #576B95;
		position: absolute;
		left: 50%;
		bottom: 0rpx;
		margin-left: -100rpx;
		box-shadow: 1px 1px 10px 1px #2C405A;
		color: #FFFFFF;
	}
</style>
