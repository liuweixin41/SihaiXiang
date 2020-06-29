<template>
	<view class="box">
		<view class="title">投诉类型</view>
		<view class="btns">
			<block v-for="(item,index) in services" :key="index">
				<button @click="changeTag(index)" :class="tagindex==index?'btn active':'btn'">{{item.name}}</button>
			</block>
		</view>
		<textarea placeholder="输入投诉详细说明" class="text" :value="text"></textarea>
		<view class="uploader">
			<image v-if="isShow" :src="imgurl" style="width:200rpx;height:200rpx;"></image>
			<view class="uploadimg">
				
				<button class="upload-btn" @click=uploadimg()>+</button>
			</view>
		</view>
		<button class="submit" @click="submit">提交</button>
	</view>
</template>

<script>
	import {
		imgip,
		baseApi
	} from "@/api/api.js";
	export default {
		data() {
			return {
				services: [{
						name: "服务态度",
						id: 1
					},
					{
						name: "菜品问题",
						id: 2
					},
					{
						name: "付款问题",
						id: 3
					},
				],
				tagindex: -1,
				imgurl: "",
				text: "",
				isShow:false,
			}
		},
		methods: {
			changeTag(val) {
				this.tagindex = val;

			},
			submit(){
				if(this.imgurl&&this.text!=""&&this.tagindex!=-1){
					
				}
				else{
					uni.showLoading({
						title:"请填写内容",
					})
				}
			},
			uploadimg() {
				//上传到临时图片。得到临时图片路径tempFilePaths
				let that=this;
				uni.chooseImage({
					count:1, 
					sizeType: ['original', 'compressed'], 
					sourceType:['camera','album'],
					success: (res) => {
						const tempFilePaths = res.tempFilePaths;
						console.log(tempFilePaths);
						//调用上传图片API
						//如页面通过 uni.chooseImage 等接口获取到一个本地资源的临时文件路径后，可通过此接口将本地资源上传到指定服务器
						uni.uploadFile({
							url:baseApi+'/file/upload',
							filePath:tempFilePaths[0],//图片临时路径，因为是一个数组所以取下标为0的那个
							name: "file",
							success: (UploadFileResult) => {
								console.log(UploadFileResult);
								let urls=JSON.parse(UploadFileResult.data);
								let apiImg = imgip+urls.url;
								console.log(apiImg);
								that.isShow=true;
								that.imgurl=apiImg;
							},

						})
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

	}

	.title {
		font-size: 12px;
		padding: 12rpx 0;
		padding: 20rpx;
	}

	.btns {
		width: 750rpx;
		display: inline-block;
		height: auto;
		padding: 12rpx 0;
		border-bottom: 1px solid #B2B2B2;
		padding: 20rpx;
	}

	.btn {
		color: #B2B2B2;
		border: 1px solid #B2B2B2;
		background-color: #FFFFFF;
		border-radius: 25rpx;
		width: 150rpx;
		height: 45rpx;
		font-size: 18rpx;
		display: inline-block;
		margin-left: 15rpx;
	}

	.active {
		background-color: #FF6755;
		color: #FFFFFF;
	}

	.submit {
		position: absolute;
		bottom: 0;
		color: #FFFFFF;
		background-color: #FF6753;
		width: 100%;
	}

	.text {
		padding: 20rpx;
	}

	.uploader {
		display: flex;
	}

	.uploadimg {
		width: 200rpx;
		height: 200rpx;
		text-align: center;
		background-color: #F3F3F3;
		display:flex;
	}

	.upload-btn {
		font-size: 36px;
		color: #BCBCBC;
		display: block;
		width: 100%;
		height: 100%;
		font-weight: bolder;
		outline: none;
	}
</style>
