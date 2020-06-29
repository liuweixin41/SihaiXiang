<template>
	<view class="box">
		<view class="user-info">
			<view class="left-info">
				<p>{{user.nickName}}</p>
				<p class="welcome">欢迎光临四海香</p>
			</view>
			<view class="right-avatar">
				<image class="avatar" :src="user.avatarUrl" mode=""></image>
			</view>
		</view>

		<view class="lists" v-for="item in info" :key="item.id">
			<navigator :url="item.url" class="lists-nav">
				<view class="left">
					<image :src="item.img" mode="" class="icon"></image>
					<text>{{item.text}}</text>
				</view>
				<view class="right">
					<text>></text>
				</view>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				info: [{
						id: 1,
						text: "烹饪历史",
						img: "../../static/icon_order.png",
						url: "/pages/dingdanhistory/dingdanhistory"

					},
					{
						id: 2,
						text: "支付记录",
						img: "../../static/icon_msg.png",
						url: "/pages/payrecord/payrecord"
					},
					{
						id: 3,
						text: "举报投诉",
						img: "../../static/icon_money.png",
						url: "/pages/my/complaint/complaint"
					}
				],
				user: {

				},
			}
		},
		onLoad() {
			try {
				const value = uni.getStorageSync('userinfo');
				if (value) {
					this.user = value;
				}
			} catch (e) {
				// error
			}
		},
		onShareAppMessage(){
			return {
				title:"四海香app",
				imageUrl:"../../static/goods1.jpg",
				path:"/pages/index/index"
			}
		}
	}
</script>

<style>
	.box {
		width: 750rpx;
		height: auto;
		padding-left: 10rpx;
	}

	.user-info {
		display: flex;
		justify-content: space-between;
		padding: 30rpx 15rpx;
	}

	.welcome {
		font-size: 25rpx;
		color: grey
	}

	.avatar {
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
	}

	.icon {
		width: 40rpx;
		height: 40rpx;
		margin-right: 10rpx;
	}

	.lists {

		border-top: 1px solid #8F8F94;
		padding: 15rpx;
		width: 90%;
		margin: 0 auto;
	}

	.lists-nav {
		display: flex;
		justify-content: space-between;
	}

	.lists:last-child {
		border-bottom: 1px solid #8F8F94
	}

	.left {
		width: 210rpx
	}

	.right {
		flex: 1;
		text-align: right;
	}
</style>
