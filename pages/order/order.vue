<template>
	<view class="box">
		<!-- 头部标题 -->
		<view class="title">
			<view>
				<image src="../../static/icon_cha.png" style="width:20rpx ;height:20rpx"></image><text style="font-size: 20rpx;">已有{{total}}个行程</text>
			</view>
			<view class="history-record">
				<image src="../../static/77.png" class="clear" style="width:20rpx ;height:20rpx"></image>
				<navigator url="/pages/order/orderHistory" class="history">历史</navigator>
			</view>
		</view>
		<view class="items" v-for="item in list" :key="item.id">
			<view class="item-address">
				<p class="desc">
					<image src="../../static/92.png" style="width:20rpx ;height:20rpx"></image>{{item.date}}名厨上门
				</p>
				<p class="desc">
					<image src="../../static/91.png" style="width:20rpx ;height:20rpx"></image>{{item.address}}
				</p>
			</view>

			<!-- 每一项 -->
			<view class="item-bottom">
				<view class="item-top">
					<image :src="item.img" mode="" class="bigimg"></image>
				</view>
				<view class="item-content">
					<view class="left">
						<p class="desc-goods">{{item.goodsname}}</p>
						<p class="desc price">￥{{item.price}}/桌</p>
					</view>
					<view class="right">
						<view class="serve" @click=phoneCall(item.tel,item.name)>
							<image src="../../static/93.png" style="width:40rpx ;height:40rpx"></image>
							<p>电话</p>
						</view>
						<!-- <navigator class="serve">
							<p>服务</p>
						</navigator> -->
					</view>
				</view>
				<view>
					<button class="btn" @click=toZhangDan(item.id)>我的账单</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				list: [{
						id: 1,
						name: "小貂蝉",
						date: "2020-06-03 14:48 周一",
						img: "../../static/goods1.jpg",
						tel: "13667126696",
						address: "天府新谷一号楼",
						goodsname: "盛夏海鲜佳宴",
						price: "4999"
					},
					{
						id: 2,
						name: "老貂蝉",
						date: "2020-06-03 14:48 周二",
						img: "../../static/goods2.jpg",
						tel: "13667126696",
						address: "天府新谷五号楼",
						goodsname: "盛夏海鲜佳宴",
						price: "1999"
					},
					{
						id: 3,
						name: "张三丰",
						date: "2020-06-03 14:48 周三",
						img: "../../static/goods3.jpg",
						tel: "13667126696",
						address: "天府新谷六号楼",
						goodsname: "盛夏海鲜佳宴",
						price: "3999"
					},
					{
						id: 4,
						name: "王维扬",
						date: "2020-06-03 14:48 周六",
						img: "../../static/goods4.png",
						tel: "13667126696",
						address: "天府新谷七号楼",
						goodsname: "盛夏海鲜佳宴",
						price: "2999"
					}
				],
				total: 0,
			}
		},
		onReachBottom() {
			//console.log(11111);
			uni.showLoading({
				title: '加载中'
			});
			let newarr = [{
					id: 5,
					name: "李清照",
					date: "2020-06-03 14:48 周六",
					img: "../../static/goods4.png",
					tel: "13667126696",
					address: "天府新谷七号楼",
					goodsname: "盛夏海鲜佳宴",
					price: "2999"
				},
				{
					id: 6,
					name: "橘右京",
					date: "2020-06-03 14:48 周六",
					img: "../../static/goods1.jpg",
					tel: "13667126696",
					address: "天府新谷七号楼",
					goodsname: "盛夏海鲜佳宴",
					price: "2999"
				},
				{
					id: 7,
					name: "道德和尚",
					date: "2020-06-03 14:48 周六",
					img: "../../static/goods3.jpg",
					tel: "13667126696",
					address: "天府新谷七号楼",
					goodsname: "盛夏海鲜佳宴",
					price: "2999"
				},
				{
					id: 8,
					name: "西门广",
					date: "2020-06-03 14:48 周六",
					img: "../../static/goods1.jpg",
					tel: "13667126696",
					address: "天府新谷七号楼",
					goodsname: "盛夏海鲜佳宴",
					price: "2999"
				},
			];
			this.list = this.list.concat(newarr);

			setTimeout(function() {
				uni.hideLoading();
			}, 2000);
		},
		methods: {
			phoneCall(tel, name) {
				let that = this;
				uni.showModal({
					title: name,
					content: tel,
					success: function(res) {
						if (res.confirm) {
							//console.log('用户点击确定');
							uni.makePhoneCall({
								phoneNumber: tel //仅为示例
							});
						} else if (res.cancel) {
							//console.log('用户点击取消');
						}
					}
				});
			},
			toZhangDan(id){
				console.log(id);
				uni.navigateTo({
					url:"/pages/order/orderInfo/orderInfo?id="+id
				})
			},
		},
		onLoad() {
			this.total = this.list.length;
		},
	}
</script>

<style>
	.box {
		height: auto;
		width: 750rpx;
		padding: 0 20rpx;
	}

	.title {
		display: flex;
		justify-content: space-between;
		width: 90%;
	}

	.history {
		color: #8F8F94;
		font-size: 20rpx;
	}

	.history-record {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
	}

	.items {
		margin: 20rpx 0;
	}

	.bigimg {
		width: 100%;
		height: 350rpx;
		border-radius: 25rpx 25rpx 0 0;
	}

	.desc {
		font-size: 20rpx;
	}

	.desc-goods {
		font-size: 40rpx;
	}

	.item-bottom {

		border-radius: 25rpx;
		box-shadow: 1px 1px 10px 1px #eee;
		width: 90%;
	}

	.item-content {
		display: flex;
		justify-content: space-between;
		padding: 0 25rpx 25rpx 25rpx;
	}

	.item-top {
		height: 400rpx;
	}

	.price {
		color: #f60;
	}

	.serve {
		display: flex;
		flex-direction: column;
		align-items: center;
		color: gold;
		font-size: 20rpx;
	}

	.btn {
		background-color: #f60;
		color: #ffffff;
		width: 90%;
		text-align: center;

	}
</style>
