<template>
	<text>订单详情{{dingDanid}}</text>
</template>

<script>
	export default{
		data(){
			return {
				dingDanid:0,
			}
		},
		onLoad(options){
			this.dingDanid=options.id;
		}
	}
</script>

<style>
</style>
