<template>
	<view class="content">
		
		<banner></banner>	
		<navs></navs>
		<view class="horizon"></view>
		<cookers></cookers>
		<view class="horizon"></view>
		<goods></goods>
		<view class="horizon"></view>
		<adv></adv>
	</view>
</template>

<script>
	import banner from "./banner";
	import navs from "./navs";
	import cookers from "./cookers";
	import goods from "./goods";
	import adv from "./adv";
	
	export default {
		components: {
			banner,
			navs,
			cookers,
			goods,
			adv
		},
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}
	.horizon{
		width: 750rpx;
				height: 5px;
				background: #eee;
	}
</style>
