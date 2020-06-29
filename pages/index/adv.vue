<template>
	<view class="box">
		<view class="adv">
			<view class="items" v-for="item in lists">
				<image class="item-img" :src="item.img"></image>
				<view class="right">
					<p class="title">{{item.adv}}</p>
					<p class="desc">{{item.desc}}</p>
				</view>
			</view>
		</view>

		<view class="bottom">
			<image :src="bigimg" mode="" class="bigimg"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				lists: [{
						adv: "信用保障",
						desc: "服务到位，时间准时",
						img: "../../static/13.png"
					},
					{
						adv: "认证服务商",
						desc: "厨师实名，服务更可靠",
						img: "../../static/14.png"
					},
					{
						adv: "品质服务",
						desc: "知名品牌，星级厨师",
						img: "../../static/15.png"
					},
					{
						adv: "安全保障",
						desc: "全平台在线支付",
						img: "../../static/16.png"
					}
				],
				bigimg:"../../static/gg.jpg"
			}
		}
	}
</script>

<style>
	.box {
		width: 750rpx;
		height: auto;
	}

	.adv {
		display: flex;
		width: 750rpx;
		flex-wrap: wrap;
	}

	.items {
		width: 50%;
		display: flex;
	}

	.item-img {
		width: 100rpx;
		height: 100rpx;
		padding: 17rpx;
	}

	.title {
		font-size: 30rpx;
	}

	.desc {
		font-size: 12rpx;
		color: grey;
	}

	.right{
		display:flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.bigimg{
		width:100%;
		height:300rpx;
	}
</style>
