<template>
	<view class="box">
		<view class="title">
			<view>
				<image src="../../static/icon_cha.png" style="width:20rpx ;height:20rpx"></image><text style="font-size: 20rpx;">已收藏{{total}}个餐宴</text>
			</view>
			<view @click=clearnum()>
				<image src="../../static/icon_clear.png" class="clear" style="width:30rpx ;height:30rpx"></image><text class="clear">清空</text>
			</view>
		</view>
		<!-- 商品详情 -->
		<block v-if="total>0">
			<view class="items" v-for="item in goods" :key="item.name">

				<view class="item-top">
					<image :src="item.img" mode="" class="big-img"></image>
					<span class="fire-icon">
						<image src="../../static/icon_fire.png" style="width:30rpx ;height:30rpx;margin:5rpx 15rpx 0 10rpx"></image>{{item.fire}}
					</span>
				</view>
				<view class="item-content">
					<view class="left">
						<p>{{item.goodsname}}</p>
						<p class="price">￥{{item.price}}/桌</p>
					</view>
					<view class="right">
						<image src="../../static/footer2.png" mode="" style="width:50rpx ;height:50rpx"></image>
						<p>取消收藏</p>
					</view>
				</view>
			</view>
		</block>
		<block v-else="total==0">
			<image src="../../static/nomore1.png" mode="" class="nomore-img"></image>
		</block>
	</view>

</template>

<script>
	import {
		goodslist
	} from "../../json/list.json";
	export default {
		components: {

		},
		data() {
			return {
				goods: goodslist,
				total: 0,

			}
		},
		onLoad() {
			this.total = goodslist.length;
		},
		onReachBottom() {
			console.log(11111);
			uni.showLoading({
			    title: '加载中'
			});
			let newarr = [{
					"id": 5,
					"img": "../../static/goods4.png",
					"goodsname": "麻辣小龙虾1",
					"price": 188,
					"fire": 200
				},
				{
					"id": 6,
					"img": "../../static/goods1.jpg",
					"goodsname": "和牛拉面2",
					"price": 128,
					"fire": 300
				},
				{
					"id": 7,
					"img": "../../static/goods3.jpg",
					"goodsname": "避风塘炒蟹1",
					"price": 188,
					"fire": 600
				},
				{
					"id": 8,
					"img": "../../static/goods2.jpg",
					"goodsname": "法式罗宋汤1",
					"price": 88,
					"fire": 500
				}
			];
			this.goods=this.goods.concat(newarr);
			
			setTimeout(function () {
			    uni.hideLoading();
			}, 2000);
		},
		methods: {
			clearnum() {
				let that = this;
				uni.showModal({
					title: '清空收藏',
					content: '用户清空后，将无法恢复',
					success: function(res) {
						if (res.confirm) {
							console.log('用户点击确定');
							that.goods = [];
							that.total = 0;
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			}
		}
	}
</script>

<style>
	.box {
		width: 750rpx;
		height: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.title {
		display: flex;
		width: 90%;
		justify-content: space-between;
		padding:16rpx;
	}

	.clear {
		color: #8F8F94;
		font-size: 20rpx;
	}

	.items {
		border-radius: 5%;
		box-shadow: 1px 1px 10px 1px #eee;
		height: 500rpx;
		background-color: #F0F0F0;
		width: 90%;
		margin-bottom: 20rpx
	}

	.item-top {
		height: 400rpx;
		position: relative;

	}

	.big-img {
		width: 100%;
		height: 350rpx;
		border-radius: 5% 5% 0 0;
	}

	.fire-icon {
		position: absolute;
		bottom: 20%;
		right: 5%;
		border-radius: 10rpx;
		width: 115rpx;
		height: 50rpx;
		color: #FFFFFF;
		padding:5rpx;
		display: inline-block;
		font-size: 20rpx;
		text-align: center;
		line-height: 25rpx;
		background-color: rgba(0, 0, 0, 0.5);
		
		text-align:center;

	}

	p {
		font-size: 20rpx;
	}

	.price {
		color: #f60;
	}

	.icon-like {
		white-space: 20rpx;
		height: 20rpx;
	}

	.item-content {
		display: flex;
		justify-content: space-between;
	}

	.right {
		text-align: center;
	}

	.nomore-img {
		width: 360rpx;
		height: 350rpx;
		margin: 100rpx auto;
	}
</style>
