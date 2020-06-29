(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/banner"],{"212b":function(n,t,e){"use strict";e.r(t);var a=e("d3ed"),u=e("8007");for(var r in u)"default"!==r&&function(n){e.d(t,n,function(){return u[n]})}(r);e("ef2b");var i=e("2877"),o=Object(i["a"])(u["default"],a["a"],a["b"],!1,null,null,null);t["default"]=o.exports},8007:function(n,t,e){"use strict";e.r(t);var a=e("e8b6"),u=e.n(a);for(var r in a)"default"!==r&&function(n){e.d(t,n,function(){return a[n]})}(r);t["default"]=u.a},"81e9":function(n,t,e){},d3ed:function(n,t,e){"use strict";var a=function(){var n=this,t=n.$createElement;n._self._c},u=[];e.d(t,"a",function(){return a}),e.d(t,"b",function(){return u})},e8b6:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=e("154a"),u={data:function(){return{indicatorDots:!0,autoplay:!0,interval:2e3,duration:500,arr:[]}},created:function(){var t=this;n.request({url:a.imgApi+"/index/home_banner",method:"POST",success:function(n){console.log(n),t.arr=n.data.data}})}};t.default=u}).call(this,e("543d")["default"])},ef2b:function(n,t,e){"use strict";var a=e("81e9"),u=e.n(a);u.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/banner-create-component',
    {
        'pages/index/banner-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("212b"))
        })
    },
    [['pages/index/banner-create-component']]
]);                
