<template>
	<view class="container">
		<view class="navs">
			<view class="nav-item" v-for="(item,index) in navitems" :key="index" :data-index="index" @tap="leftTap" :class="{ 'active':index==leftIndex }">
				{{ item.name }}
			</view>
		</view>
		<scroll-view class="itembox" scroll-y :scroll-into-view="scrollInto" scroll-with-animation="true">
			<view class="items-container" v-for="(item,index) in goodslist" :key="index" :id="'item-'+index">
				<view class="title">{{item.name}}</view>
				<view class="item" v-for="food in item.foods" :key="food.id">
					<image class="goodsimg" :src="food.img"></image>
					<view class="goodsinfo">
						<view>{{ food.goodsname }}</view>
						<view class="pricenum">￥ {{ food.price }}/瓶</view>
						<view class="switchbox">
							<button class="btn reduce" v-show="food.num>0" :disabled="food.num==0?true:false" @click="changeNum(-1,food,food.id)">-</button>
							<view v-show="food.num>0">{{ food.num }}</view>
							<button class="btn" @click="changeNum(1,food,food.id)">+</button>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>

		<view class="pricebox">
			<image src="../../static/icon_car.png" mode="" style="width:40px;height:40px"></image>
			<view>总共:</view>
			<view style="color:#FF6600">¥{{ totalprice }}元</view>
			<view class="paybtn" @click="payoff()">支付</view>
		</view>

	</view>
</template>

<script>
	import {
		baseApi
	} from "@/api/api.js";
	export default {
		data() {
			return {
				navitems: [{
						id: 1,
						name: "白酒"
					},
					{
						id: 2,
						name: "啤酒"
					},
					{
						id: 3,
						name: "红酒"
					},
					{
						id: 4,
						name: "饮料"
					},
				],
				goodslist: [{
						name: "白酒",
						foods: [{
								id: 1,
								img: "../../static/goods1.jpg",
								goodsname: "老白干",
								price: 29,
								num: 0
							},
							{
								id: 2,
								img: "../../static/goods2.jpg",
								goodsname: "歪嘴郎",
								price: 39,
								num: 0
							},
							{
								id: 3,
								img: "../../static/goods3.jpg",
								goodsname: "郎酒",
								price: 49,
								num: 0
							},
							{
								id: 4,
								img: "../../static/goods4.png",
								goodsname: "江小白",
								price: 59,
								num: 0
							},
							{
								id: 5,
								img: "../../static/goods1.jpg",
								goodsname: "二鍋頭",
								price: 69,
								num: 0
							},
							{
								id: 6,
								img: "../../static/goods2.jpg",
								goodsname: "五粮液",
								price: 1999,
								num: 0
							},
						]
					},
					{
						name: "啤酒",
						foods: [{
								id: 7,
								img: "../../static/goods1.jpg",
								goodsname: "雪花纯生",
								price: 3,
								num: 0
							},
							{
								id: 8,
								img: "../../static/goods2.jpg",
								goodsname: "百威",
								price: 3,
								num: 0
							},
							{
								id: 9,
								img: "../../static/goods3.jpg",
								goodsname: "燕京",
								price: 4,
								num: 0
							},
							{
								id: 10,
								img: "../../static/goods4.png",
								goodsname: "勇闯天涯",
								price: 3,
								num: 0
							},
							{
								id: 11,
								img: "../../static/goods1.jpg",
								goodsname: "青岛",
								price: 5,
								num: 0
							},


						],
					},
					{
						name: "红酒",
						foods: [{

								id: 12,
								img: "../../static/goods1.jpg",
								goodsname: "张裕",
								price: 350,
								num: 0
							},
							{
								id: 13,
								img: "../../static/goods2.jpg",
								goodsname: "百威",
								price: 400,
								num: 0
							},
							{
								id: 14,
								img: "../../static/goods3.jpg",
								goodsname: "82年拉菲",
								price: 500,
								num: 0
							},

						],
					},
					{
						name: "饮料",
						foods: [{

								id: 15,
								img: "../../static/goods1.jpg",
								goodsname: "百事可乐",
								price: 3.5,
								num: 0
							},
							{
								id: 16,
								img: "../../static/goods1.jpg",
								goodsname: "可口可乐",
								price: 3.5,
								num: 0
							},
						],
					},

				],
				totalprice: 0,
				totalnum: 0,
				newarr: [],
				scrollInto: ''
			}
		},
		onLoad() {
			this.count();
		},
		methods: {
			count() {
				let total = 0;
				let totalPrice = 0;
				for (let obj of this.goodslist) {
					for (let foodobj of obj.foods) {
						total += foodobj.num;
						totalPrice += foodobj.num * foodobj.price;
					}
				};
				this.totalnum = total;
				this.totalprice = totalPrice
			},
			changeNum(num, item, id) {
				//console.log(num);
				//console.log(item);
				for (let obj of this.goodslist) {
					for (let foodobj of obj.foods) {
						if (foodobj.id == id) {
							foodobj.num += num;
						}
					}
				};
				this.count();
				let newarr = [];
				//传递过来的数据不等于0才加到已购的数组里
				if (item.num != 0) {
					newarr.push(item)
				};

				let buyitems = this.unique(newarr);

				//console.log(buyitems);
			},
			unique(arr) {
				for (var i = 0; i < arr.length; i++) {
					for (var j = i + 1; j < arr.length; j++) {
						if (arr[i] == arr[j]) { //第一个等同于第二个，splice方法删除第二个
							arr.splice(j, 1);
							j--;
						}
					}
				}
				return arr;
			},
			payoff() {
				//1:获取订单id
				uni.request({
					url: baseApi + "/order/place",
					data: {
						product_id: 商品ID,
						count: 商品数量,
						openid: 用户身份id,
						link_name: 联系人名字,
						link_tel: 联系人电话,
						address_id: 地址ID,
						cooking_time: 烹饪时间,
						cooking_time_list: 餐宴类型,
					},
					method: "POST",
					success(res) {
						let orderid = res.orderid;
						// 2:通过订单id 获取前端调取支付的必要参数
						uni.request({
							url: baseApi + "/pay/pre_order",
							data: {
								orderid,
								openid
							},
							method: "POST",
							success(res) {
								var json = {
									随机串,
									时间戳,
									签名,
									加密类型,
									配置项
								}
								// 3.唤起微信支付
								uni.requestPayment({
									provider: 'wxpay', // 服务商
									timeStamp: String(Date.now()), // 时间戳
									nonceStr: 'A1B2C3D4E5', // 随机串
									package: 'prepay_id=wx20180101abcdefg', // 配置项
									signType: 'MD5', // 加密算法MD5
									paySign: '', // 签名
									success: function(res) {
										console.log('success:' + JSON.stringify(res));
									},
									fail: function(err) {
										console.log('fail:' + JSON.stringify(err));
									}
								});
							}
						})
					}
				})
			},
			leftTap(e) {
				let index = e.currentTarget.dataset.index;
				this.scrollInto = `item-${index}`;
			}
		},
	}
</script>

<style>
	.container,
	page {
		width: 750rpx;
		height: 100%;
		display: flex;
	}

	.navs {
		width: 100px;
		height: 100%;
		background: #eee;
	}

	.nav-item {
		text-align: center;
		padding: 20px;
	}

	.active {
		color: #42b983;
		background-color: #fff;
	}

	.itembox {
		flex: 1;
		padding: 0 10px 40px 10px;
	}

	.items-container {
		height: auto;
	}

	.item {
		width: 90%;
		height: auto;
		margin-top: 10px;
		display: flex;
	}

	.title {
		height: 20px;
		padding: 10px;
		font-size: 15px
	}

	.goodsimg {
		width: 100px;
		height: 100px;
	}

	.goodsinfo {
		flex: 1;
	}

	.switchbox {
		display: flex;
		margin-top: 15px;
	}

	.btn {
		width: 20px;
		height: 24px;
		border-radius: 50%;
		color: #FFFFFF;
		background: #FF6759;
		display: flex;
		align-items: center;
		font-size: 15px;
	}
	.reduce{
			background: #8F8F94;
			color: #FFFFFF;
	}

	.pricenum {
		color: #f60;
		font-size: 15px;
	}

	.pricebox {
		width: 100%;
		height: 40px;
		background: #fff;
		position: fixed;
		bottom: 0;
		display: flex;
		justify-content: space-between;
	}

	.paybtn {
		width: 150px;
		height: 40px;
		background: #FF6759;
		color: #fff;
		text-align: center;
		line-height: 40px;
	}
</style>
