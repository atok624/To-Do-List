/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-content: center;\\r\\n  background-color: #f6f6f6;\\r\\n  font-family: \\\"Inter var\\\", sans-serif;\\r\\n  padding: 40px 0 40px 0;\\r\\n}\\r\\n\\r\\n.align-center {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\nmain {\\r\\n  box-sizing: border-box;\\r\\n  width: 100%;\\r\\n  max-width: 500px;\\r\\n  min-height: 220px;\\r\\n  margin: 40px 8px 40px 8px;\\r\\n  border-radius: 4px;\\r\\n  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);\\r\\n  background-color: white;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.head {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  width: 100%;\\r\\n  padding: 1rem;\\r\\n  border-bottom: 1px solid rgb(236, 233, 233);\\r\\n}\\r\\n\\r\\nh1 {\\r\\n  text-align: center;\\r\\n  margin-top: 1rem;\\r\\n  font-weight: 500;\\r\\n  font-size: 1.5rem;\\r\\n}\\r\\n\\r\\n.fa-solid {\\r\\n  color: #888;\\r\\n}\\r\\n\\r\\nform {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  margin-bottom: 0.1rem;\\r\\n  width: 100%;\\r\\n  padding: 1rem;\\r\\n  border: 1px solid #d3d3d3;\\r\\n}\\r\\n\\r\\n.addtask {\\r\\n  font-size: 1rem;\\r\\n  padding: 0.5rem 1rem;\\r\\n  border: none;\\r\\n  border-radius: 0.3rem;\\r\\n  background-color: white;\\r\\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1);\\r\\n  transition: box-shadow 0.2s ease-in-out;\\r\\n}\\r\\n\\r\\n.input-content {\\r\\n  width: 94%;\\r\\n  border: none;\\r\\n  padding: 16px;\\r\\n  font-size: 1.2rem;\\r\\n}\\r\\n\\r\\n.add-button {\\r\\n  width: 10%;\\r\\n  border: none;\\r\\n  background-color: transparent;\\r\\n  color: #888;\\r\\n}\\r\\n\\r\\n.addtask:hover,\\r\\n.addtask:focus {\\r\\n  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.2);\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.addtask::placeholder {\\r\\n  color: #aaa;\\r\\n}\\r\\n\\r\\n.fa-ellipsis-vertical {\\r\\n  padding-left: 10px;\\r\\n}\\r\\n\\r\\nul {\\r\\n  list-style: none;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  width: 100%;\\r\\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1);\\r\\n  background-color: white;\\r\\n  border-radius: 0.3rem;\\r\\n  overflow: hidden;\\r\\n}\\r\\n\\r\\nli {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  padding: 1rem;\\r\\n  border-bottom: 1px solid #ddd;\\r\\n  transition: background-color 0.2s ease-in-out;\\r\\n}\\r\\n\\r\\nli:last-child {\\r\\n  border-bottom: none;\\r\\n}\\r\\n\\r\\nli:hover {\\r\\n  background-color: #f5f5f5;\\r\\n}\\r\\n\\r\\nli input[type=\\\"checkbox\\\"] {\\r\\n  margin-right: 1rem;\\r\\n}\\r\\n\\r\\nli label,\\r\\n#editfield {\\r\\n  flex: 1;\\r\\n  margin: 0;\\r\\n  font-size: 1.2rem;\\r\\n  text-decoration: none;\\r\\n  color: inherit;\\r\\n}\\r\\n\\r\\n#editfield {\\r\\n  border: none;\\r\\n}\\r\\n\\r\\n#editfield:focus {\\r\\n  border: none;\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\nli label.completed {\\r\\n  text-decoration: line-through;\\r\\n  color: #aaa;\\r\\n}\\r\\n\\r\\nli button {\\r\\n  background-color: transparent;\\r\\n  border: none;\\r\\n  color: #888;\\r\\n  font-size: 1.2rem;\\r\\n  cursor: pointer;\\r\\n  transition: color 0.2s ease-in-out;\\r\\n}\\r\\n\\r\\nli button:hover,\\r\\nli button:focus {\\r\\n  color: #222;\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\nli.dragging {\\r\\n  opacity: 0.5;\\r\\n}\\r\\n\\r\\n#btn-clear-task {\\r\\n  display: block;\\r\\n  margin-left: auto;\\r\\n  margin-right: auto;\\r\\n  margin-top: 1rem;\\r\\n  margin-bottom: 2rem;\\r\\n  background-color: transparent;\\r\\n  border: none;\\r\\n  color: #888;\\r\\n  font-size: 1.2rem;\\r\\n  cursor: pointer;\\r\\n  transition: color 0.2s ease-in-out;\\r\\n}\\r\\n\\r\\n#btn-clear-task:hover,\\r\\n#btn-clear-task:focus {\\r\\n  color: #222;\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n#clearCompleted {\\r\\n  border: none;\\r\\n  border-radius: 4px;\\r\\n  cursor: pointer;\\r\\n  margin-top: 1px;\\r\\n  width: 100%;\\r\\n  padding: 1.8rem;\\r\\n}\\r\\n\\r\\n.fa-arrow-left {\\r\\n  font-size: 15px;\\r\\n}\\r\\n\\r\\n#clearCompleted:hover {\\r\\n  background-color: #808080;\\r\\n}\\r\\n\\r\\n.disable {\\r\\n  display: none;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-test/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack-test/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-test/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-test/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-test/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-test/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-test/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-test/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-test/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-test/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/storage.js */ \"./src/modules/storage.js\");\n\n\n\nconst taskList = document.getElementById('taskList');\nconst newTaskForm = document.getElementById('newTaskForm');\nconst clearCompletedButton = document.getElementById('clearCompleted');\nlet tasks = [];\n\nconst updateIndex = () => {\n  tasks.forEach((element, index) => {\n    element.index = index + 1;\n  });\n};\n\nconst renderTaskList = () => {\n  taskList.innerHTML = '';\n\n  tasks.forEach((task, index) => {\n    const taskElement = document.createElement('li');\n    taskElement.className = 'task';\n    taskElement.draggable = true;\n    taskElement.dataset.index = task.index;\n\n    const taskCheckbox = document.createElement('input');\n    taskCheckbox.type = 'checkbox';\n    taskCheckbox.checked = task.completed;\n    taskCheckbox.addEventListener('change', (event) => {\n      tasks[index].completed = event.target.checked;\n      (0,_modules_storage_js__WEBPACK_IMPORTED_MODULE_1__.saveTasks)(tasks);\n      renderTaskList();\n    });\n\n    const taskLabel = document.createElement('label');\n    taskLabel.textContent = task.description;\n\n    const taskinput = document.createElement('input');\n    taskinput.type = 'text';\n    taskinput.className = 'disable';\n    taskinput.id = 'editfield';\n\n    const taskDeleteButton = document.createElement('button');\n    taskDeleteButton.type = 'button';\n    taskDeleteButton.innerHTML = '<i class=\"fa-solid fa-ellipsis-vertical\"></i>';\n    taskDeleteButton.addEventListener('click', () => {\n      tasks.splice(index, 1);\n      updateIndex();\n      (0,_modules_storage_js__WEBPACK_IMPORTED_MODULE_1__.saveTasks)(tasks);\n      renderTaskList();\n    });\n    const taskeditButton = document.createElement('button');\n    taskeditButton.type = 'button';\n    taskeditButton.innerHTML = '<i class=\"fa fa-pencil\"></i>';\n    const tasksaveButton = document.createElement('button');\n    tasksaveButton.type = 'button';\n    tasksaveButton.innerHTML = '<i class=\"fa fa-floppy-o\"></i>';\n    tasksaveButton.className = 'disable';\n\n    taskeditButton.addEventListener('click', () => {\n      tasksaveButton.classList.remove('disable');\n      taskinput.classList.remove('disable');\n      taskinput.value = taskLabel.textContent;\n      taskinput.focus();\n      taskLabel.classList.add('disable');\n      taskeditButton.classList.add('disable');\n    });\n\n    tasksaveButton.addEventListener('click', () => {\n      tasksaveButton.classList.add('disable');\n      taskinput.classList.add('disable');\n      taskLabel.textContent = taskinput.value;\n      tasks[index].description = taskinput.value;\n      taskLabel.classList.remove('disable');\n      taskeditButton.classList.remove('disable');\n      (0,_modules_storage_js__WEBPACK_IMPORTED_MODULE_1__.saveTasks)(tasks);\n      renderTaskList();\n    });\n\n    taskElement.appendChild(taskCheckbox);\n    taskElement.appendChild(taskLabel);\n    taskElement.appendChild(taskinput);\n    taskElement.appendChild(taskeditButton);\n    taskElement.appendChild(tasksaveButton);\n    taskElement.appendChild(taskDeleteButton);\n\n    taskList.appendChild(taskElement);\n  });\n};\n\nconst addTask = (name) => {\n  const task = { index: tasks.length + 1, description: name, completed: false };\n  tasks.push(task);\n  (0,_modules_storage_js__WEBPACK_IMPORTED_MODULE_1__.saveTasks)(tasks);\n  renderTaskList();\n};\n\nconst clearCompletedTasks = () => {\n  tasks = tasks.filter((task) => !task.completed);\n  (0,_modules_storage_js__WEBPACK_IMPORTED_MODULE_1__.saveTasks)(tasks);\n  renderTaskList();\n};\n\nconst handleDragStart = (event) => {\n  event.target.classList.add('dragging');\n};\n\nconst handleDragOver = (event) => {\n  event.preventDefault();\n  const taskElement = event.target.closest('.task');\n  const draggingElement = document.querySelector('.dragging');\n  if (taskElement && draggingElement && taskElement !== draggingElement) {\n    const taskElementRect = taskElement.getBoundingClientRect();\n    const dragY = event.clientY - taskElementRect.top;\n    const isAfter = dragY > taskElementRect.height / 2;\n    taskList.insertBefore(\n      draggingElement,\n      isAfter ? taskElement.nextSibling : taskElement,\n    );\n    const newIndex = Array.from(taskList.querySelectorAll('.task')).indexOf(\n      draggingElement,\n    );\n    const oldIndex = draggingElement.getAttribute('data-index');\n    tasks.splice(newIndex, 0, tasks.splice(oldIndex, 1)[0]);\n    (0,_modules_storage_js__WEBPACK_IMPORTED_MODULE_1__.saveTasks)(tasks);\n  }\n};\n\nconst handleDragEnd = (event) => {\n  event.target.classList.remove('dragging');\n};\n\nnewTaskForm.addEventListener('submit', (event) => {\n  event.preventDefault();\n  const newTaskInput = document.getElementById('newTask');\n  const taskName = newTaskInput.value.trim();\n  if (taskName) {\n    addTask(taskName);\n    newTaskInput.value = '';\n    newTaskInput.focus();\n  }\n});\n\nclearCompletedButton.addEventListener('click', () => {\n  clearCompletedTasks();\n});\n\ntaskList.addEventListener('dragstart', handleDragStart);\ntaskList.addEventListener('dragover', handleDragOver);\ntaskList.addEventListener('dragend', handleDragEnd);\n\ntasks = (0,_modules_storage_js__WEBPACK_IMPORTED_MODULE_1__.loadTasks)();\nrenderTaskList();\n\n\n//# sourceURL=webpack://webpack-test/./src/index.js?");

/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadTasks\": () => (/* binding */ loadTasks),\n/* harmony export */   \"saveTasks\": () => (/* binding */ saveTasks)\n/* harmony export */ });\nconst saveTasks = (tasks) => {\n  localStorage.setItem('tasks', JSON.stringify(tasks));\n};\n\nconst loadTasks = () => {\n  const tasksJson = localStorage.getItem('tasks');\n  if (tasksJson) {\n    return JSON.parse(tasksJson);\n  }\n  return [];\n};\n\n\n\n//# sourceURL=webpack://webpack-test/./src/modules/storage.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;