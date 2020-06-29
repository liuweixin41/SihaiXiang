(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/shopcar/shopcar"],{

/***/ 83:
/*!*************************************************************************************************!*\
  !*** D:/20191029H5/code/2020-6-1 小程序项目/SiHaiXiang/main.js?{"page":"pages%2Fshopcar%2Fshopcar"} ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _shopcar = _interopRequireDefault(__webpack_require__(/*! ./pages/shopcar/shopcar.vue */ 84));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_shopcar.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 84:
/*!******************************************************************************!*\
  !*** D:/20191029H5/code/2020-6-1 小程序项目/SiHaiXiang/pages/shopcar/shopcar.vue ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shopcar_vue_vue_type_template_id_3bbe06b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shopcar.vue?vue&type=template&id=3bbe06b6& */ 85);
/* harmony import */ var _shopcar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shopcar.vue?vue&type=script&lang=js& */ 87);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _shopcar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _shopcar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _shopcar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shopcar.vue?vue&type=style&index=0&lang=css& */ 89);
/* harmony import */ var _Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../Program Files/feiq/Recv Files/前端开发工具一条龙/编辑器/HBuilderX.2.3.7.20191024.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 14);






/* normalize component */

var component = Object(_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _shopcar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _shopcar_vue_vue_type_template_id_3bbe06b6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _shopcar_vue_vue_type_template_id_3bbe06b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "20191029H5/code/2020-6-1 小程序项目/SiHaiXiang/pages/shopcar/shopcar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 85:
/*!*************************************************************************************************************!*\
  !*** D:/20191029H5/code/2020-6-1 小程序项目/SiHaiXiang/pages/shopcar/shopcar.vue?vue&type=template&id=3bbe06b6& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shopcar_vue_vue_type_template_id_3bbe06b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Program Files/feiq/Recv Files/前端开发工具一条龙/编辑器/HBuilderX.2.3.7.20191024.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!../../../../../../Program Files/feiq/Recv Files/前端开发工具一条龙/编辑器/HBuilderX.2.3.7.20191024.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../Program Files/feiq/Recv Files/前端开发工具一条龙/编辑器/HBuilderX.2.3.7.20191024.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../Program Files/feiq/Recv Files/前端开发工具一条龙/编辑器/HBuilderX.2.3.7.20191024.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../Program Files/feiq/Recv Files/前端开发工具一条龙/编辑器/HBuilderX.2.3.7.20191024.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../../Program Files/feiq/Recv Files/前端开发工具一条龙/编辑器/HBuilderX.2.3.7.20191024.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./shopcar.vue?vue&type=template&id=3bbe06b6& */ 86);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shopcar_vue_vue_type_template_id_3bbe06b6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shopcar_vue_vue_type_template_id_3bbe06b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 86:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/20191029H5/code/2020-6-1 小程序项目/SiHaiXiang/pages/shopcar/shopcar.vue?vue&type=template&id=3bbe06b6& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 87:
/*!*******************************************************************************************************!*\
  !*** D:/20191029H5/code/2020-6-1 小程序项目/SiHaiXiang/pages/shopcar/shopcar.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shopcar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Program Files/feiq/Recv Files/前端开发工具一条龙/编辑器/HBuilderX.2.3.7.20191024.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../Program Files/feiq/Recv Files/前端开发工具一条龙/编辑器/HBuilderX.2.3.7.20191024.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../Program Files/feiq/Recv Files/前端开发工具一条龙/编辑器/HBuilderX.2.3.7.20191024.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../Program Files/feiq/Recv Files/前端开发工具一条龙/编辑器/HBuilderX.2.3.7.20191024.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../Program Files/feiq/Recv Files/前端开发工具一条龙/编辑器/HBuilderX.2.3.7.20191024.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../../Program Files/feiq/Recv Files/前端开发工具一条龙/编辑器/HBuilderX.2.3.7.20191024.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./shopcar.vue?vue&type=script&lang=js& */ 88);
/* harmony import */ var _Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shopcar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shopcar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shopcar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shopcar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shopcar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 88:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/20191029H5/code/2020-6-1 小程序项目/SiHaiXiang/pages/shopcar/shopcar.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;



































var _api = __webpack_require__(/*! @/api/api.js */ 80); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = { data: function data() {return { navitems: [{ id: 1, name: "白酒" }, { id: 2, name: "啤酒" }, { id: 3, name: "红酒" }, { id: 4, name: "饮料" }], goodslist: [{ name: "白酒", foods: [{ id: 1, img: "../../static/goods1.jpg", goodsname: "老白干", price: 29, num: 0 }, { id: 2, img: "../../static/goods2.jpg", goodsname: "歪嘴郎",
          price: 39,
          num: 0 },

        {
          id: 3,
          img: "../../static/goods3.jpg",
          goodsname: "郎酒",
          price: 49,
          num: 0 },

        {
          id: 4,
          img: "../../static/goods4.png",
          goodsname: "江小白",
          price: 59,
          num: 0 },

        {
          id: 5,
          img: "../../static/goods1.jpg",
          goodsname: "二鍋頭",
          price: 69,
          num: 0 },

        {
          id: 6,
          img: "../../static/goods2.jpg",
          goodsname: "五粮液",
          price: 1999,
          num: 0 }] },



      {
        name: "啤酒",
        foods: [{
          id: 7,
          img: "../../static/goods1.jpg",
          goodsname: "雪花纯生",
          price: 3,
          num: 0 },

        {
          id: 8,
          img: "../../static/goods2.jpg",
          goodsname: "百威",
          price: 3,
          num: 0 },

        {
          id: 9,
          img: "../../static/goods3.jpg",
          goodsname: "燕京",
          price: 4,
          num: 0 },

        {
          id: 10,
          img: "../../static/goods4.png",
          goodsname: "勇闯天涯",
          price: 3,
          num: 0 },

        {
          id: 11,
          img: "../../static/goods1.jpg",
          goodsname: "青岛",
          price: 5,
          num: 0 }] },





      {
        name: "红酒",
        foods: [{

          id: 12,
          img: "../../static/goods1.jpg",
          goodsname: "张裕",
          price: 350,
          num: 0 },

        {
          id: 13,
          img: "../../static/goods2.jpg",
          goodsname: "百威",
          price: 400,
          num: 0 },

        {
          id: 14,
          img: "../../static/goods3.jpg",
          goodsname: "82年拉菲",
          price: 500,
          num: 0 }] },




      {
        name: "饮料",
        foods: [{

          id: 15,
          img: "../../static/goods1.jpg",
          goodsname: "百事可乐",
          price: 3.5,
          num: 0 },

        {
          id: 16,
          img: "../../static/goods1.jpg",
          goodsname: "可口可乐",
          price: 3.5,
          num: 0 }] }],





      totalprice: 0,
      totalnum: 0,
      newarr: [],
      scrollInto: '' };

  },
  onLoad: function onLoad() {
    this.count();
  },
  methods: {
    count: function count() {
      var total = 0;
      var totalPrice = 0;var _iteratorNormalCompletion = true;var _didIteratorError = false;var _iteratorError = undefined;try {
        for (var _iterator = this.goodslist[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {var obj = _step.value;var _iteratorNormalCompletion2 = true;var _didIteratorError2 = false;var _iteratorError2 = undefined;try {
            for (var _iterator2 = obj.foods[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {var foodobj = _step2.value;
              total += foodobj.num;
              totalPrice += foodobj.num * foodobj.price;
            }} catch (err) {_didIteratorError2 = true;_iteratorError2 = err;} finally {try {if (!_iteratorNormalCompletion2 && _iterator2.return != null) {_iterator2.return();}} finally {if (_didIteratorError2) {throw _iteratorError2;}}}
        }} catch (err) {_didIteratorError = true;_iteratorError = err;} finally {try {if (!_iteratorNormalCompletion && _iterator.return != null) {_iterator.return();}} finally {if (_didIteratorError) {throw _iteratorError;}}};
      this.totalnum = total;
      this.totalprice = totalPrice;
    },
    changeNum: function changeNum(num, item, id) {
      //console.log(num);
      //console.log(item);
      var _iteratorNormalCompletion3 = true;var _didIteratorError3 = false;var _iteratorError3 = undefined;try {for (var _iterator3 = this.goodslist[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {var obj = _step3.value;var _iteratorNormalCompletion4 = true;var _didIteratorError4 = false;var _iteratorError4 = undefined;try {
            for (var _iterator4 = obj.foods[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {var foodobj = _step4.value;
              if (foodobj.id == id) {
                foodobj.num += num;
              }
            }} catch (err) {_didIteratorError4 = true;_iteratorError4 = err;} finally {try {if (!_iteratorNormalCompletion4 && _iterator4.return != null) {_iterator4.return();}} finally {if (_didIteratorError4) {throw _iteratorError4;}}}
        }} catch (err) {_didIteratorError3 = true;_iteratorError3 = err;} finally {try {if (!_iteratorNormalCompletion3 && _iterator3.return != null) {_iterator3.return();}} finally {if (_didIteratorError3) {throw _iteratorError3;}}};
      this.count();
      var newarr = [];
      //传递过来的数据不等于0才加到已购的数组里
      if (item.num != 0) {
        newarr.push(item);
      };

      var buyitems = this.unique(newarr);

      //console.log(buyitems);
    },
    unique: function unique(arr) {
      for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
          if (arr[i] == arr[j]) {//第一个等同于第二个，splice方法删除第二个
            arr.splice(j, 1);
            j--;
          }
        }
      }
      return arr;
    },
    payoff: function payoff() {
      //1:获取订单id
      uni.request({
        url: _api.baseApi + "/order/place",
        data: {
          product_id: 商品ID,
          count: 商品数量,
          openid: 用户身份id,
          link_name: 联系人名字,
          link_tel: 联系人电话,
          address_id: 地址ID,
          cooking_time: 烹饪时间,
          cooking_time_list: 餐宴类型 },

        method: "POST",
        success: function success(res) {
          var orderid = res.orderid;
          // 2:通过订单id 获取前端调取支付的必要参数
          uni.request({
            url: _api.baseApi + "/pay/pre_order",
            data: {
              orderid: orderid,
              openid: openid },

            method: "POST",
            success: function success(res) {
              var json = {
                随机串: 随机串,
                时间戳: 时间戳,
                签名: 签名,
                加密类型: 加密类型,
                配置项: 配置项

                // 3.唤起微信支付
              };uni.requestPayment({
                provider: 'wxpay', // 服务商
                timeStamp: String(Date.now()), // 时间戳
                nonceStr: 'A1B2C3D4E5', // 随机串
                package: 'prepay_id=wx20180101abcdefg', // 配置项
                signType: 'MD5', // 加密算法MD5
                paySign: '', // 签名
                success: function success(res) {
                  console.log('success:' + JSON.stringify(res));
                },
                fail: function fail(err) {
                  console.log('fail:' + JSON.stringify(err));
                } });

            } });

        } });

    },
    leftTap: function leftTap(e) {
      var index = e.currentTarget.dataset.index;
      this.scrollInto = "item-".concat(index);
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 89:
/*!***************************************************************************************************************!*\
  !*** D:/20191029H5/code/2020-6-1 小程序项目/SiHaiXiang/pages/shopcar/shopcar.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shopcar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Program Files/feiq/Recv Files/前端开发工具一条龙/编辑器/HBuilderX.2.3.7.20191024.full/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../Program Files/feiq/Recv Files/前端开发工具一条龙/编辑器/HBuilderX.2.3.7.20191024.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!../../../../../../Program Files/feiq/Recv Files/前端开发工具一条龙/编辑器/HBuilderX.2.3.7.20191024.full/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--6-oneOf-1-2!../../../../../../Program Files/feiq/Recv Files/前端开发工具一条龙/编辑器/HBuilderX.2.3.7.20191024.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../Program Files/feiq/Recv Files/前端开发工具一条龙/编辑器/HBuilderX.2.3.7.20191024.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../Program Files/feiq/Recv Files/前端开发工具一条龙/编辑器/HBuilderX.2.3.7.20191024.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../Program Files/feiq/Recv Files/前端开发工具一条龙/编辑器/HBuilderX.2.3.7.20191024.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../../Program Files/feiq/Recv Files/前端开发工具一条龙/编辑器/HBuilderX.2.3.7.20191024.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./shopcar.vue?vue&type=style&index=0&lang=css& */ 90);
/* harmony import */ var _Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shopcar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shopcar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shopcar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shopcar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Program_Files_feiq_Recv_Files_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shopcar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 90:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/20191029H5/code/2020-6-1 小程序项目/SiHaiXiang/pages/shopcar/shopcar.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[83,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/shopcar/shopcar.js.map