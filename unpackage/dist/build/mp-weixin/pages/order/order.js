(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/order"],{"034a":function(e,t,n){"use strict";(function(e){n("f256"),n("921b");o(n("66fd"));var t=o(n("f3a7"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"420e":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return a})},"55be":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={components:{},data:function(){return{list:[{id:1,name:"小貂蝉",date:"2020-06-03 14:48 周一",img:"../../static/goods1.jpg",tel:"13667126696",address:"天府新谷一号楼",goodsname:"盛夏海鲜佳宴",price:"4999"},{id:2,name:"老貂蝉",date:"2020-06-03 14:48 周二",img:"../../static/goods2.jpg",tel:"13667126696",address:"天府新谷五号楼",goodsname:"盛夏海鲜佳宴",price:"1999"},{id:3,name:"张三丰",date:"2020-06-03 14:48 周三",img:"../../static/goods3.jpg",tel:"13667126696",address:"天府新谷六号楼",goodsname:"盛夏海鲜佳宴",price:"3999"},{id:4,name:"王维扬",date:"2020-06-03 14:48 周六",img:"../../static/goods4.png",tel:"13667126696",address:"天府新谷七号楼",goodsname:"盛夏海鲜佳宴",price:"2999"}],total:0}},onReachBottom:function(){e.showLoading({title:"加载中"});var t=[{id:5,name:"李清照",date:"2020-06-03 14:48 周六",img:"../../static/goods4.png",tel:"13667126696",address:"天府新谷七号楼",goodsname:"盛夏海鲜佳宴",price:"2999"},{id:6,name:"橘右京",date:"2020-06-03 14:48 周六",img:"../../static/goods1.jpg",tel:"13667126696",address:"天府新谷七号楼",goodsname:"盛夏海鲜佳宴",price:"2999"},{id:7,name:"道德和尚",date:"2020-06-03 14:48 周六",img:"../../static/goods3.jpg",tel:"13667126696",address:"天府新谷七号楼",goodsname:"盛夏海鲜佳宴",price:"2999"},{id:8,name:"西门广",date:"2020-06-03 14:48 周六",img:"../../static/goods1.jpg",tel:"13667126696",address:"天府新谷七号楼",goodsname:"盛夏海鲜佳宴",price:"2999"}];this.list=this.list.concat(t),setTimeout(function(){e.hideLoading()},2e3)},methods:{phoneCall:function(t,n){e.showModal({title:n,content:t,success:function(n){n.confirm?e.makePhoneCall({phoneNumber:t}):n.cancel}})},toZhangDan:function(t){console.log(t),e.navigateTo({url:"/pages/order/orderInfo/orderInfo?id="+t})}},onLoad:function(){this.total=this.list.length}};t.default=n}).call(this,n("543d")["default"])},a1c0:function(e,t,n){},b536:function(e,t,n){"use strict";var o=n("a1c0"),a=n.n(o);a.a},dcc6:function(e,t,n){"use strict";n.r(t);var o=n("55be"),a=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);t["default"]=a.a},f3a7:function(e,t,n){"use strict";n.r(t);var o=n("420e"),a=n("dcc6");for(var i in a)"default"!==i&&function(e){n.d(t,e,function(){return a[e]})}(i);n("b536");var d=n("2877"),s=Object(d["a"])(a["default"],o["a"],o["b"],!1,null,null,null);t["default"]=s.exports}},[["034a","common/runtime","common/vendor"]]]);