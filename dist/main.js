/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../res/SAMARN__.woff */ "./src/res/SAMARN__.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../res/SAMARO__.woff */ "./src/res/SAMARO__.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../res/img/background.jpg */ "./src/res/img/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    box-sizing: border-box;\n}\n\n@font-face {\n    font-family: 'Samarkan Normal';\n    font-style: normal;\n    font-weight: normal;\n    src: local('Samarkan Normal'), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff');\n}\n    \n\n@font-face {\nfont-family: 'Samarkan Oblique';\nfont-style: normal;\nfont-weight: normal;\nsrc: local('Samarkan Oblique'), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('woff');\n}\n\nhtml, body {\n    margin: 0;\n    padding: 0;\n    height: 100%;\n}\n\nbody {\n   background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") no-repeat center fixed\n}\n\nheader {\n    display: flex;\n    justify-content: space-between;\n    padding: 20px;\n    font-size: 20px;\n    padding-left: 60px;\n    padding-right: 60px;\n    background: #000;\n    opacity: 0.8;\n    color: #fff;\n}\n\nnav ul {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    display: flex;\n    gap: 20px;    \n}  \n\nnav li {\n    cursor: pointer;\n    transition: 300ms ease-in-out;\n    border-bottom: 2px solid #fff0;\n}\n\nnav li:hover {\n    color: #f29420;\n    border-bottom: 2px solid #fff;\n}\n\nnav {\n    padding-right: 20px;\n    align-self: center;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 80%;\n    gap: 10px;\n}\n\n#logo {\n    font-size: 32px;\n    color: #a17d0f;\n}\n\n#logo-heading {\n    font-family: 'Samarkan Oblique';\n    font-size: 100px;\n    color: #fff;\n    text-shadow: 1px 1px 1px #000;\n}\n\n#logo-desciption {\n    font-size: 25px;\n    color: #fff;\n    text-shadow: 1px 1px 1px #000;\n}\n\n#home-main {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    align-items: center;\n    color: white;\n    text-align: center;\n    padding: min(3vw, 67px);\n    margin-top: max(20vh, 50px);\n\n}\n\n.main {\n    background: #0000006e;\n    border: 1px solid #2d2d2d;\n}\n\n#logo-description {\n    font-size: 25px;\n    margin-bottom: 20px;\n}\n\nbutton {\n    background: #c53e15;\n    border: 1px solid #fff;\n    padding: 12px;\n    color: #fff;\n    font-size: 16px;\n    transition-duration: 400ms;\n    cursor: pointer;\n}\n\nbutton:hover {\n    background: #fff;\n    border: 1px solid #c53e15;\n    padding: 12px;\n    color: #c53e15;\n    font-size: 16px;\n}\n\n#menu-main {\n    display: flex;\n    flex-direction: column;\n    padding: min(3vw, 67px);\n    gap: 20px;\n    min-width: 50%;\n    margin-top: max(5vh, 50px);\n\n}\n\n.page-title  {\n    text-align: center;\n    color: #fff;\n    text-shadow: 1px 1px 1px #000;\n}\n\n.items {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n    grid-auto-rows: 180px;\n    gap: 30px;\n    color: #fff;\n    text-align: center;\n\n}\n\n.item {\n    background: #00000082;\n    padding: 5px;\n    border: 1px solid #4b4b4b;\n    color: #ffffff;\n    position: relative;\n    padding-top: 10px;\n    transition-duration: 400ms;\n    cursor: pointer\n}\n\n.item:hover {\n    background: #000000ad;\n}\n\n.item-name {\n    font-size: 21px;\n    text-shadow: 1px 0px 0px #4f162a;\n    margin-top: 6px;\n}\n\n.item-price {\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    padding: 4px;\n    border-top: 1px solid #4b4b4b;\n    border-left: 1px solid #4b4b4b;\n    background: #4f0707;\n}\n\n.item-pic {\n    border: 1px solid #a9a9a9;\n    border-radius: 10px;\n    height: 100px;\n    width: 190px;\n}\n\n#contact-main {\n    display: flex;\n    flex-direction: column;\n    padding: min(3vw, 67px);\n    gap: 20px;\n    margin-top: max(5vh, 50px);\n}\n\n.input-container {\n    display: flex;\n    flex-direction: column;\n    gap: 1px;\n    margin-bottom: 20px;\n}\n\n.input-container label {\n    color: #fff;\n    text-shadow: 1px 1px 1px #000;\n    font-size: 18px;\n    font-weight: 600;\n}\n\n.input-container input {\n    font-size: 17px;\n    padding: 4px;\n    background: #eeeeee6b;\n    border: 1px solid #b8b6b6;\n    transition-duration: 400ms;\n    outline: 0;\n\n}\n\n.input-container input:hover, .input-container input:focus {\n    background: #ffffff78;\n    border: 1px solid #eee;\n}\n\n\n.input-container textarea {\n    font-size: 17px;\n    padding: 4px;\n    background: #eeeeee6b;\n    border: 1px solid #b8b6b6;\n    transition-duration: 400ms;\n    outline: 0;\n\n}\n\n.input-container textarea:hover, .input-container textarea:active {\n    background: #ffffff78;\n    border: 1px solid #eee;\n}\n\n\n.input-container input:focus {\n    border: 1px solid #eee;\n}\n\n\n.button-container {\n    display: flex;\n    justify-content: center;\n}\n\n.contact-info {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 3px;\n    color: #fff;\n    margin-top: 20px;\n    font-size: 18px;\n    font-weight: 600;\n    text-shadow: -1px -1px 1px #000;\n}\n\n@keyframes show {\n    from {opacity: 0%;}\n    to {opacity: 100%;}\n}\n\n@media screen and (max-width: 600px) {\n\n    #logo-heading {\n        font-size: 70px;\n    }\n\n    nav {\n        padding: 0;\n    }\n\n    header {\n        flex-direction: column;\n        gap: 5px;\n        align-items: center;\n        padding: 10px;\n    }\n\n}", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    box-sizing: border-box;\n}\n\n@font-face {\n    font-family: 'Samarkan Normal';\n    font-style: normal;\n    font-weight: normal;\n    src: local('Samarkan Normal'), url('../res/SAMARN__.woff') format('woff');\n}\n    \n\n@font-face {\nfont-family: 'Samarkan Oblique';\nfont-style: normal;\nfont-weight: normal;\nsrc: local('Samarkan Oblique'), url('../res/SAMARO__.woff') format('woff');\n}\n\nhtml, body {\n    margin: 0;\n    padding: 0;\n    height: 100%;\n}\n\nbody {\n   background: url(\"../res/img/background.jpg\") no-repeat center fixed\n}\n\nheader {\n    display: flex;\n    justify-content: space-between;\n    padding: 20px;\n    font-size: 20px;\n    padding-left: 60px;\n    padding-right: 60px;\n    background: #000;\n    opacity: 0.8;\n    color: #fff;\n}\n\nnav ul {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    display: flex;\n    gap: 20px;    \n}  \n\nnav li {\n    cursor: pointer;\n    transition: 300ms ease-in-out;\n    border-bottom: 2px solid #fff0;\n}\n\nnav li:hover {\n    color: #f29420;\n    border-bottom: 2px solid #fff;\n}\n\nnav {\n    padding-right: 20px;\n    align-self: center;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 80%;\n    gap: 10px;\n}\n\n#logo {\n    font-size: 32px;\n    color: #a17d0f;\n}\n\n#logo-heading {\n    font-family: 'Samarkan Oblique';\n    font-size: 100px;\n    color: #fff;\n    text-shadow: 1px 1px 1px #000;\n}\n\n#logo-desciption {\n    font-size: 25px;\n    color: #fff;\n    text-shadow: 1px 1px 1px #000;\n}\n\n#home-main {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    align-items: center;\n    color: white;\n    text-align: center;\n    padding: min(3vw, 67px);\n    margin-top: max(20vh, 50px);\n\n}\n\n.main {\n    background: #0000006e;\n    border: 1px solid #2d2d2d;\n}\n\n#logo-description {\n    font-size: 25px;\n    margin-bottom: 20px;\n}\n\nbutton {\n    background: #c53e15;\n    border: 1px solid #fff;\n    padding: 12px;\n    color: #fff;\n    font-size: 16px;\n    transition-duration: 400ms;\n    cursor: pointer;\n}\n\nbutton:hover {\n    background: #fff;\n    border: 1px solid #c53e15;\n    padding: 12px;\n    color: #c53e15;\n    font-size: 16px;\n}\n\n#menu-main {\n    display: flex;\n    flex-direction: column;\n    padding: min(3vw, 67px);\n    gap: 20px;\n    min-width: 50%;\n    margin-top: max(5vh, 50px);\n\n}\n\n.page-title  {\n    text-align: center;\n    color: #fff;\n    text-shadow: 1px 1px 1px #000;\n}\n\n.items {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n    grid-auto-rows: 180px;\n    gap: 30px;\n    color: #fff;\n    text-align: center;\n\n}\n\n.item {\n    background: #00000082;\n    padding: 5px;\n    border: 1px solid #4b4b4b;\n    color: #ffffff;\n    position: relative;\n    padding-top: 10px;\n    transition-duration: 400ms;\n    cursor: pointer\n}\n\n.item:hover {\n    background: #000000ad;\n}\n\n.item-name {\n    font-size: 21px;\n    text-shadow: 1px 0px 0px #4f162a;\n    margin-top: 6px;\n}\n\n.item-price {\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    padding: 4px;\n    border-top: 1px solid #4b4b4b;\n    border-left: 1px solid #4b4b4b;\n    background: #4f0707;\n}\n\n.item-pic {\n    border: 1px solid #a9a9a9;\n    border-radius: 10px;\n    height: 100px;\n    width: 190px;\n}\n\n#contact-main {\n    display: flex;\n    flex-direction: column;\n    padding: min(3vw, 67px);\n    gap: 20px;\n    margin-top: max(5vh, 50px);\n}\n\n.input-container {\n    display: flex;\n    flex-direction: column;\n    gap: 1px;\n    margin-bottom: 20px;\n}\n\n.input-container label {\n    color: #fff;\n    text-shadow: 1px 1px 1px #000;\n    font-size: 18px;\n    font-weight: 600;\n}\n\n.input-container input {\n    font-size: 17px;\n    padding: 4px;\n    background: #eeeeee6b;\n    border: 1px solid #b8b6b6;\n    transition-duration: 400ms;\n    outline: 0;\n\n}\n\n.input-container input:hover, .input-container input:focus {\n    background: #ffffff78;\n    border: 1px solid #eee;\n}\n\n\n.input-container textarea {\n    font-size: 17px;\n    padding: 4px;\n    background: #eeeeee6b;\n    border: 1px solid #b8b6b6;\n    transition-duration: 400ms;\n    outline: 0;\n\n}\n\n.input-container textarea:hover, .input-container textarea:active {\n    background: #ffffff78;\n    border: 1px solid #eee;\n}\n\n\n.input-container input:focus {\n    border: 1px solid #eee;\n}\n\n\n.button-container {\n    display: flex;\n    justify-content: center;\n}\n\n.contact-info {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 3px;\n    color: #fff;\n    margin-top: 20px;\n    font-size: 18px;\n    font-weight: 600;\n    text-shadow: -1px -1px 1px #000;\n}\n\n@keyframes show {\n    from {opacity: 0%;}\n    to {opacity: 100%;}\n}\n\n@media screen and (max-width: 600px) {\n\n    #logo-heading {\n        font-size: 70px;\n    }\n\n    nav {\n        padding: 0;\n    }\n\n    header {\n        flex-direction: column;\n        gap: 5px;\n        align-items: center;\n        padding: 10px;\n    }\n\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/loadContact.js":
/*!************************************!*\
  !*** ./src/modules/loadContact.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadContact": () => (/* binding */ loadContact)
/* harmony export */ });
/* harmony import */ var _res_img_phone_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../res/img/phone.png */ "./src/res/img/phone.png");
/* harmony import */ var _res_img_location_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../res/img/location.png */ "./src/res/img/location.png");



function inputContainer(label, input) {
    const container = document.createElement("div");
    container.classList = "input-container";
    container.appendChild(label);
    container.appendChild(input);
    return container;
}

function generateFormDiv(){
    const form = document.createElement("form");
    form.id = "contact-form";

    const nameInput = document.createElement("input");
    nameInput.id = "name";
    nameInput.name = "name";
    nameInput.setAttribute('required', '');
    const nameInputLabel = document.createElement("label");
    nameInputLabel.for = "name";
    nameInputLabel.textContent = "Enter Name:";
    form.appendChild(inputContainer(nameInputLabel, nameInput));

    const mailInput = document.createElement("input");
    mailInput.id = "email";
    mailInput.type = "email";
    mailInput.name = "email";
    mailInput.setAttribute('required', '');
    const mailInputLabel = document.createElement("label");
    mailInputLabel.for = "email";
    mailInputLabel.textContent = "Enter your e-mail:";
    form.appendChild(inputContainer(mailInputLabel, mailInput));

    const msgInput = document.createElement("textarea");
    msgInput.id = "msg";
    msgInput.rows = 5;
    msgInput.cols = 30;
    msgInput.name = "msg";
    msgInput.setAttribute('required', '');
    const msgInputLabel = document.createElement("label");
    msgInputLabel.for = "msg";
    msgInputLabel.textContent = "Enter your message:";
    form.appendChild(inputContainer(msgInputLabel, msgInput));

    const buttonContainer = document.createElement("div");
    buttonContainer.classList = "button-container";
    const formSubmitBut = document.createElement("button");
    formSubmitBut.type = "submit";
    formSubmitBut.textContent = "Submit";
    buttonContainer.appendChild(formSubmitBut);
    form.appendChild(buttonContainer);

    return form;
}

function generateContactInfoDiv(){
    const infoContainer = document.createElement("div");;
    infoContainer.id = "info-container";
    
    const phoneDiv = document.createElement("div");
    phoneDiv.classList = "contact-info";
    const phoneImg = new Image();
    phoneImg.src = _res_img_phone_png__WEBPACK_IMPORTED_MODULE_0__;
    const phoneNum = document.createElement("div");
    phoneNum.textContent = "(+91) 981234567";
    phoneDiv.appendChild(phoneImg);
    phoneDiv.appendChild(phoneNum);


    const locationDiv = document.createElement("div");
    locationDiv.classList = "contact-info";
    const locationImg = new Image();
    locationImg.src = _res_img_location_png__WEBPACK_IMPORTED_MODULE_1__;
    const locationText = document.createElement("div");
    locationText.textContent = "101, Random Street, Delhi, India";
    locationDiv.appendChild(locationImg);
    locationDiv.appendChild(locationText);
    
    infoContainer.appendChild(phoneDiv);
    infoContainer.appendChild(locationDiv);

    return infoContainer;
}

const loadContact = () => {
    const contentDiv = document.querySelector("#content");

    const mainDiv = document.createElement("div");
    mainDiv.id = "contact-main";
    mainDiv.classList = "main";
    contentDiv.appendChild(mainDiv);

    const heading = document.createElement("h1");
    heading.classList = "page-title";
    heading.textContent = "Contact Us";
    mainDiv.appendChild(heading);

    const form = generateFormDiv();
    mainDiv.appendChild(form)

    const infoDiv = generateContactInfoDiv();
    mainDiv.appendChild(infoDiv);

    const show = () => {
        mainDiv.style.display = "";
    }

    const hide = () => {
        mainDiv.style.display = "none";
    }
    return {mainDiv, show, hide};
}

/***/ }),

/***/ "./src/modules/loadHeader.js":
/*!***********************************!*\
  !*** ./src/modules/loadHeader.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadHeader": () => (/* binding */ loadHeader)
/* harmony export */ });
const loadHeader = () => {
    const header = document.querySelector("header");
    
    const logoDiv = document.createElement("div");
    logoDiv.id = "logo";
    logoDiv.textContent = "Khana Khazana";

    const nav = document.createElement("nav");
    const navList = document.createElement("ul");
    
    const navHome = document.createElement("li")
    navHome.textContent = "Home";
    
    const navMenu = document.createElement("li")
    navMenu.textContent = "Menu";
    
    const navContact = document.createElement("li")
    navContact.textContent = "Contact";
    
    navList.appendChild(navHome);
    navList.appendChild(navMenu);
    navList.appendChild(navContact);
    nav.appendChild(navList)
    
    header.appendChild(logoDiv);
    header.appendChild(nav);
}

/***/ }),

/***/ "./src/modules/loadHome.js":
/*!*********************************!*\
  !*** ./src/modules/loadHome.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadHome": () => (/* binding */ loadHome)
/* harmony export */ });

const loadHome = () => {
    console.log("Initial Page Load")


    const contentDiv = document.querySelector("#content");

    const mainDiv = document.createElement("div");
    mainDiv.id = "home-main";
    mainDiv.classList = "main";
    contentDiv.appendChild(mainDiv);

    const logoHeading = document.createElement("div");
    logoHeading.id = "logo-heading";
    logoHeading.textContent = "Khana Khazana";
    mainDiv.appendChild(logoHeading);

    const logoDesc = document.createElement("div");
    logoDesc.id = "logo-description";
    logoDesc.textContent = "Treasure hunt a large variety of cuisines !";
    mainDiv.appendChild(logoDesc);    

    const viewMenuBut = document.createElement("button");
    viewMenuBut.id = "view-menu-but";
    viewMenuBut.textContent = "View Menu";
    mainDiv.appendChild(viewMenuBut);   

    const show = () => {
        mainDiv.style.display = "";
    }

    const hide = () => {
        mainDiv.style.display = "none";
    }
    return {mainDiv, show, hide};
}

/***/ }),

/***/ "./src/modules/loadMenu.js":
/*!*********************************!*\
  !*** ./src/modules/loadMenu.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadMenu": () => (/* binding */ loadMenu)
/* harmony export */ });
class menuItem {
    static menuArr = [];
    
    constructor (name, price) {
        this.name = name;
        this.price = price;
    }

    addItem() {
        menuItem.menuArr.push(this)
    }
}


function initiateItems() {
    new menuItem("Chole Bhature", 99).addItem()
    new menuItem("Paneer Butter Masala", 99).addItem()
    new menuItem("Chowmin", 99).addItem()
    new menuItem("Pizza", 99).addItem()
    new menuItem("French Fries", 99).addItem()

    return menuItem.menuArr;
}

function setupItemDiv(item){
    const itemDiv = document.createElement("div");
    itemDiv.classList = "item";
    
    const itemPic = new Image();
    const picName = item.name.toLowerCase().replaceAll(" ", "-");
    itemPic.classList = "item-pic";
    itemPic.src = __webpack_require__("./src/res/img/cuisine sync recursive ^\\.\\/.*\\.jpg$")("./"+picName+".jpg");
    itemPic.alt = item.name;
    itemDiv.appendChild(itemPic);

    const itemName = document.createElement("div");
    itemName.classList = "item-name";
    itemName.textContent = item.name;
    itemDiv.appendChild(itemName);

    const itemPrice = document.createElement("div");
    itemPrice.classList = "item-price";
    itemPrice.textContent = `Rs. ${item.price}`;
    itemDiv.appendChild(itemPrice);    

    return itemDiv;
}

const loadMenu = () => {
    const contentDiv = document.querySelector("#content");

    const mainDiv = document.createElement("div");
    mainDiv.id = "menu-main";
    mainDiv.classList = "main";
    contentDiv.appendChild(mainDiv);

    const heading = document.createElement("h1");
    heading.classList = "page-title";
    heading.textContent = "Our Menu";
    mainDiv.appendChild(heading);

    const itemContainer = document.createElement("div");
    itemContainer.classList = "items";
    mainDiv.appendChild(itemContainer)

    const itemsArr = initiateItems();
    itemsArr.forEach(item => {
        const itemDiv = setupItemDiv(item);
        itemContainer.appendChild(itemDiv);
    });

    const show = () => {
        mainDiv.style.display = "";
    }

    const hide = () => {
        mainDiv.style.display = "none";
    }
    return {mainDiv, show, hide};
}

/***/ }),

/***/ "./src/res/img/cuisine sync recursive ^\\.\\/.*\\.jpg$":
/*!*************************************************!*\
  !*** ./src/res/img/cuisine/ sync ^\.\/.*\.jpg$ ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./chole-bhature.jpg": "./src/res/img/cuisine/chole-bhature.jpg",
	"./chowmin.jpg": "./src/res/img/cuisine/chowmin.jpg",
	"./french-fries.jpg": "./src/res/img/cuisine/french-fries.jpg",
	"./paneer-butter-masala.jpg": "./src/res/img/cuisine/paneer-butter-masala.jpg",
	"./pizza.jpg": "./src/res/img/cuisine/pizza.jpg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/res/img/cuisine sync recursive ^\\.\\/.*\\.jpg$";

/***/ }),

/***/ "./src/res/SAMARN__.woff":
/*!*******************************!*\
  !*** ./src/res/SAMARN__.woff ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f1478913dae312e88851.woff";

/***/ }),

/***/ "./src/res/SAMARO__.woff":
/*!*******************************!*\
  !*** ./src/res/SAMARO__.woff ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e050b255e1ed1ea39c76.woff";

/***/ }),

/***/ "./src/res/img/background.jpg":
/*!************************************!*\
  !*** ./src/res/img/background.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a3afa0d783a2a2b617d4.jpg";

/***/ }),

/***/ "./src/res/img/cuisine/chole-bhature.jpg":
/*!***********************************************!*\
  !*** ./src/res/img/cuisine/chole-bhature.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "535a48fc08f9377dab52.jpg";

/***/ }),

/***/ "./src/res/img/cuisine/chowmin.jpg":
/*!*****************************************!*\
  !*** ./src/res/img/cuisine/chowmin.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f7ef5c6e543fe0d7986c.jpg";

/***/ }),

/***/ "./src/res/img/cuisine/french-fries.jpg":
/*!**********************************************!*\
  !*** ./src/res/img/cuisine/french-fries.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6a8d3399bfc564ab6948.jpg";

/***/ }),

/***/ "./src/res/img/cuisine/paneer-butter-masala.jpg":
/*!******************************************************!*\
  !*** ./src/res/img/cuisine/paneer-butter-masala.jpg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9fe4369d37c292b927e8.jpg";

/***/ }),

/***/ "./src/res/img/cuisine/pizza.jpg":
/*!***************************************!*\
  !*** ./src/res/img/cuisine/pizza.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "291d7caf620f76dd2053.jpg";

/***/ }),

/***/ "./src/res/img/location.png":
/*!**********************************!*\
  !*** ./src/res/img/location.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "903ccf793bbc824b2a49.png";

/***/ }),

/***/ "./src/res/img/phone.png":
/*!*******************************!*\
  !*** ./src/res/img/phone.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "7dc4a5a324d647dedde8.png";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_loadHome_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/loadHome.js */ "./src/modules/loadHome.js");
/* harmony import */ var _modules_loadHeader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/loadHeader.js */ "./src/modules/loadHeader.js");
/* harmony import */ var _modules_loadContact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/loadContact.js */ "./src/modules/loadContact.js");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _modules_loadMenu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/loadMenu.js */ "./src/modules/loadMenu.js");







(0,_modules_loadHeader_js__WEBPACK_IMPORTED_MODULE_1__.loadHeader)();
const homeHandler = (0,_modules_loadHome_js__WEBPACK_IMPORTED_MODULE_0__.loadHome)();
const menuHandler = (0,_modules_loadMenu_js__WEBPACK_IMPORTED_MODULE_4__.loadMenu)();
const contactHandler = (0,_modules_loadContact_js__WEBPACK_IMPORTED_MODULE_2__.loadContact)();


menuHandler.hide();
contactHandler.hide();

function showOnly(event){
    homeHandler.hide();
    menuHandler.hide();
    contactHandler.hide();

    const targetText = event.target.textContent;

    if (targetText.indexOf("Home") > -1)
        homeHandler.show();
        homeHandler.mainDiv.style.animation = "500ms show";
    if (targetText.indexOf("Menu") > -1) 
        menuHandler.show();
        menuHandler.mainDiv.style.animation = "500ms show";
    if (targetText.indexOf("Contact") > -1) 
        contactHandler.show();
        contactHandler.mainDiv.style.animation = "500ms show";
}

const navLinks = document.querySelectorAll("nav li");
const navLinksArr = [...navLinks];

navLinksArr.forEach(link => {
    link.addEventListener("click", showOnly);
})

const viewMenuBut = document.querySelector("#view-menu-but");

viewMenuBut.addEventListener("click", showOnly);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQ087QUFDbkcsNENBQTRDLG9IQUF1QztBQUNuRiw0Q0FBNEMsb0hBQXVDO0FBQ25GLDRDQUE0Qyw4SEFBNEM7QUFDeEYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBLDZDQUE2Qyw2QkFBNkIsR0FBRyxnQkFBZ0IscUNBQXFDLHlCQUF5QiwwQkFBMEIsb0dBQW9HLEdBQUcsc0JBQXNCLGtDQUFrQyxxQkFBcUIsc0JBQXNCLGlHQUFpRyxHQUFHLGdCQUFnQixnQkFBZ0IsaUJBQWlCLG1CQUFtQixHQUFHLFVBQVUsMEZBQTBGLFlBQVksb0JBQW9CLHFDQUFxQyxvQkFBb0Isc0JBQXNCLHlCQUF5QiwwQkFBMEIsdUJBQXVCLG1CQUFtQixrQkFBa0IsR0FBRyxZQUFZLHVCQUF1QixpQkFBaUIsZ0JBQWdCLG9CQUFvQixvQkFBb0IsS0FBSyxZQUFZLHNCQUFzQixvQ0FBb0MscUNBQXFDLEdBQUcsa0JBQWtCLHFCQUFxQixvQ0FBb0MsR0FBRyxTQUFTLDBCQUEwQix5QkFBeUIsR0FBRyxjQUFjLG9CQUFvQiw2QkFBNkIsMEJBQTBCLGtCQUFrQixnQkFBZ0IsR0FBRyxXQUFXLHNCQUFzQixxQkFBcUIsR0FBRyxtQkFBbUIsc0NBQXNDLHVCQUF1QixrQkFBa0Isb0NBQW9DLEdBQUcsc0JBQXNCLHNCQUFzQixrQkFBa0Isb0NBQW9DLEdBQUcsZ0JBQWdCLG9CQUFvQiw2QkFBNkIsZ0JBQWdCLDBCQUEwQixtQkFBbUIseUJBQXlCLDhCQUE4QixrQ0FBa0MsS0FBSyxXQUFXLDRCQUE0QixnQ0FBZ0MsR0FBRyx1QkFBdUIsc0JBQXNCLDBCQUEwQixHQUFHLFlBQVksMEJBQTBCLDZCQUE2QixvQkFBb0Isa0JBQWtCLHNCQUFzQixpQ0FBaUMsc0JBQXNCLEdBQUcsa0JBQWtCLHVCQUF1QixnQ0FBZ0Msb0JBQW9CLHFCQUFxQixzQkFBc0IsR0FBRyxnQkFBZ0Isb0JBQW9CLDZCQUE2Qiw4QkFBOEIsZ0JBQWdCLHFCQUFxQixpQ0FBaUMsS0FBSyxrQkFBa0IseUJBQXlCLGtCQUFrQixvQ0FBb0MsR0FBRyxZQUFZLG9CQUFvQixrRUFBa0UsNEJBQTRCLGdCQUFnQixrQkFBa0IseUJBQXlCLEtBQUssV0FBVyw0QkFBNEIsbUJBQW1CLGdDQUFnQyxxQkFBcUIseUJBQXlCLHdCQUF3QixpQ0FBaUMsd0JBQXdCLGlCQUFpQiw0QkFBNEIsR0FBRyxnQkFBZ0Isc0JBQXNCLHVDQUF1QyxzQkFBc0IsR0FBRyxpQkFBaUIseUJBQXlCLGdCQUFnQixlQUFlLG1CQUFtQixvQ0FBb0MscUNBQXFDLDBCQUEwQixHQUFHLGVBQWUsZ0NBQWdDLDBCQUEwQixvQkFBb0IsbUJBQW1CLEdBQUcsbUJBQW1CLG9CQUFvQiw2QkFBNkIsOEJBQThCLGdCQUFnQixpQ0FBaUMsR0FBRyxzQkFBc0Isb0JBQW9CLDZCQUE2QixlQUFlLDBCQUEwQixHQUFHLDRCQUE0QixrQkFBa0Isb0NBQW9DLHNCQUFzQix1QkFBdUIsR0FBRyw0QkFBNEIsc0JBQXNCLG1CQUFtQiw0QkFBNEIsZ0NBQWdDLGlDQUFpQyxpQkFBaUIsS0FBSyxnRUFBZ0UsNEJBQTRCLDZCQUE2QixHQUFHLGlDQUFpQyxzQkFBc0IsbUJBQW1CLDRCQUE0QixnQ0FBZ0MsaUNBQWlDLGlCQUFpQixLQUFLLHVFQUF1RSw0QkFBNEIsNkJBQTZCLEdBQUcsb0NBQW9DLDZCQUE2QixHQUFHLHlCQUF5QixvQkFBb0IsOEJBQThCLEdBQUcsbUJBQW1CLG9CQUFvQiw2QkFBNkIsMEJBQTBCLGVBQWUsa0JBQWtCLHVCQUF1QixzQkFBc0IsdUJBQXVCLHNDQUFzQyxHQUFHLHFCQUFxQixZQUFZLGFBQWEsVUFBVSxlQUFlLEdBQUcsMENBQTBDLHVCQUF1QiwwQkFBMEIsT0FBTyxhQUFhLHFCQUFxQixPQUFPLGdCQUFnQixpQ0FBaUMsbUJBQW1CLDhCQUE4Qix3QkFBd0IsT0FBTyxLQUFLLE9BQU8sb0ZBQW9GLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsUUFBUSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxjQUFjLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUs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Ozs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQThDO0FBQ0k7QUFDRTtBQUM1QjtBQUN5Qjs7O0FBR2pELGtFQUFVO0FBQ1Ysb0JBQW9CLDhEQUFRO0FBQzVCLG9CQUFvQiw4REFBUTtBQUM1Qix1QkFBdUIsb0VBQVc7OztBQUdsQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUEsZ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Nzcy9zdHlsZS5jc3M/OWZjZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL2xvYWRDb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL2xvYWRIZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvbG9hZEhvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvbG9hZE1lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3Jlcy9pbWcvY3Vpc2luZS8gc3luYyBeXFwuXFwvLipcXC5qcGckIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9yZXMvU0FNQVJOX18ud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL3Jlcy9TQU1BUk9fXy53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vcmVzL2ltZy9iYWNrZ3JvdW5kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1NhbWFya2FuIE5vcm1hbCc7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgc3JjOiBsb2NhbCgnU2FtYXJrYW4gTm9ybWFsJyksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxufVxcbiAgICBcXG5cXG5AZm9udC1mYWNlIHtcXG5mb250LWZhbWlseTogJ1NhbWFya2FuIE9ibGlxdWUnO1xcbmZvbnQtc3R5bGU6IG5vcm1hbDtcXG5mb250LXdlaWdodDogbm9ybWFsO1xcbnNyYzogbG9jYWwoJ1NhbWFya2FuIE9ibGlxdWUnKSwgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpIG5vLXJlcGVhdCBjZW50ZXIgZml4ZWRcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogNjBweDtcXG4gICAgcGFkZGluZy1yaWdodDogNjBweDtcXG4gICAgYmFja2dyb3VuZDogIzAwMDtcXG4gICAgb3BhY2l0eTogMC44O1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuXFxubmF2IHVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIwcHg7ICAgIFxcbn0gIFxcblxcbm5hdiBsaSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogMzAwbXMgZWFzZS1pbi1vdXQ7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZmZmMDtcXG59XFxuXFxubmF2IGxpOmhvdmVyIHtcXG4gICAgY29sb3I6ICNmMjk0MjA7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZmZmO1xcbn1cXG5cXG5uYXYge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA4MCU7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuI2xvZ28ge1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIGNvbG9yOiAjYTE3ZDBmO1xcbn1cXG5cXG4jbG9nby1oZWFkaW5nIHtcXG4gICAgZm9udC1mYW1pbHk6ICdTYW1hcmthbiBPYmxpcXVlJztcXG4gICAgZm9udC1zaXplOiAxMDBweDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCAjMDAwO1xcbn1cXG5cXG4jbG9nby1kZXNjaXB0aW9uIHtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4ICMwMDA7XFxufVxcblxcbiNob21lLW1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiBtaW4oM3Z3LCA2N3B4KTtcXG4gICAgbWFyZ2luLXRvcDogbWF4KDIwdmgsIDUwcHgpO1xcblxcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGJhY2tncm91bmQ6ICMwMDAwMDA2ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzJkMmQyZDtcXG59XFxuXFxuI2xvZ28tZGVzY3JpcHRpb24ge1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQ6ICNjNTNlMTU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XFxuICAgIHBhZGRpbmc6IDEycHg7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDQwMG1zO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjNTNlMTU7XFxuICAgIHBhZGRpbmc6IDEycHg7XFxuICAgIGNvbG9yOiAjYzUzZTE1O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbiNtZW51LW1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiBtaW4oM3Z3LCA2N3B4KTtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBtaW4td2lkdGg6IDUwJTtcXG4gICAgbWFyZ2luLXRvcDogbWF4KDV2aCwgNTBweCk7XFxuXFxufVxcblxcbi5wYWdlLXRpdGxlICB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCAjMDAwO1xcbn1cXG5cXG4uaXRlbXMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDE4MHB4O1xcbiAgICBnYXA6IDMwcHg7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxufVxcblxcbi5pdGVtIHtcXG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDgyO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0YjRiNGI7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA0MDBtcztcXG4gICAgY3Vyc29yOiBwb2ludGVyXFxufVxcblxcbi5pdGVtOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogIzAwMDAwMGFkO1xcbn1cXG5cXG4uaXRlbS1uYW1lIHtcXG4gICAgZm9udC1zaXplOiAyMXB4O1xcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDBweCAwcHggIzRmMTYyYTtcXG4gICAgbWFyZ2luLXRvcDogNnB4O1xcbn1cXG5cXG4uaXRlbS1wcmljZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgcGFkZGluZzogNHB4O1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzRiNGI0YjtcXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjNGI0YjRiO1xcbiAgICBiYWNrZ3JvdW5kOiAjNGYwNzA3O1xcbn1cXG5cXG4uaXRlbS1waWMge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYTlhOWE5O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICB3aWR0aDogMTkwcHg7XFxufVxcblxcbiNjb250YWN0LW1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiBtaW4oM3Z3LCA2N3B4KTtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBtYXJnaW4tdG9wOiBtYXgoNXZoLCA1MHB4KTtcXG59XFxuXFxuLmlucHV0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4uaW5wdXQtY29udGFpbmVyIGxhYmVsIHtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCAjMDAwO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5pbnB1dC1jb250YWluZXIgaW5wdXQge1xcbiAgICBmb250LXNpemU6IDE3cHg7XFxuICAgIHBhZGRpbmc6IDRweDtcXG4gICAgYmFja2dyb3VuZDogI2VlZWVlZTZiO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYjhiNmI2O1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA0MDBtcztcXG4gICAgb3V0bGluZTogMDtcXG5cXG59XFxuXFxuLmlucHV0LWNvbnRhaW5lciBpbnB1dDpob3ZlciwgLmlucHV0LWNvbnRhaW5lciBpbnB1dDpmb2N1cyB7XFxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY3ODtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcXG59XFxuXFxuXFxuLmlucHV0LWNvbnRhaW5lciB0ZXh0YXJlYSB7XFxuICAgIGZvbnQtc2l6ZTogMTdweDtcXG4gICAgcGFkZGluZzogNHB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjZWVlZWVlNmI7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiOGI2YjY7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDQwMG1zO1xcbiAgICBvdXRsaW5lOiAwO1xcblxcbn1cXG5cXG4uaW5wdXQtY29udGFpbmVyIHRleHRhcmVhOmhvdmVyLCAuaW5wdXQtY29udGFpbmVyIHRleHRhcmVhOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY3ODtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcXG59XFxuXFxuXFxuLmlucHV0LWNvbnRhaW5lciBpbnB1dDpmb2N1cyB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XFxufVxcblxcblxcbi5idXR0b24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jb250YWN0LWluZm8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDNweDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgdGV4dC1zaGFkb3c6IC0xcHggLTFweCAxcHggIzAwMDtcXG59XFxuXFxuQGtleWZyYW1lcyBzaG93IHtcXG4gICAgZnJvbSB7b3BhY2l0eTogMCU7fVxcbiAgICB0byB7b3BhY2l0eTogMTAwJTt9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuXFxuICAgICNsb2dvLWhlYWRpbmcge1xcbiAgICAgICAgZm9udC1zaXplOiA3MHB4O1xcbiAgICB9XFxuXFxuICAgIG5hdiB7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICB9XFxuXFxuICAgIGhlYWRlciB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgZ2FwOiA1cHg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgfVxcblxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHFGQUF5RTtBQUM3RTs7O0FBR0E7QUFDQSwrQkFBK0I7QUFD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QkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQixVQUFVOztBQUVkOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLHNCQUFzQjtBQUMxQjs7O0FBR0E7SUFDSSxzQkFBc0I7QUFDMUI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFFBQVE7SUFDUixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksTUFBTSxXQUFXLENBQUM7SUFDbEIsSUFBSSxhQUFhLENBQUM7QUFDdEI7O0FBRUE7O0lBRUk7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0ksc0JBQXNCO1FBQ3RCLFFBQVE7UUFDUixtQkFBbUI7UUFDbkIsYUFBYTtJQUNqQjs7QUFFSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnU2FtYXJrYW4gTm9ybWFsJztcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBzcmM6IGxvY2FsKCdTYW1hcmthbiBOb3JtYWwnKSwgdXJsKCcuLi9yZXMvU0FNQVJOX18ud29mZicpIGZvcm1hdCgnd29mZicpO1xcbn1cXG4gICAgXFxuXFxuQGZvbnQtZmFjZSB7XFxuZm9udC1mYW1pbHk6ICdTYW1hcmthbiBPYmxpcXVlJztcXG5mb250LXN0eWxlOiBub3JtYWw7XFxuZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG5zcmM6IGxvY2FsKCdTYW1hcmthbiBPYmxpcXVlJyksIHVybCgnLi4vcmVzL1NBTUFST19fLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4uL3Jlcy9pbWcvYmFja2dyb3VuZC5qcGdcXFwiKSBuby1yZXBlYXQgY2VudGVyIGZpeGVkXFxufVxcblxcbmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDYwcHg7XFxuICAgIGJhY2tncm91bmQ6ICMwMDA7XFxuICAgIG9wYWNpdHk6IDAuODtcXG4gICAgY29sb3I6ICNmZmY7XFxufVxcblxcbm5hdiB1bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyMHB4OyAgICBcXG59ICBcXG5cXG5uYXYgbGkge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IDMwMG1zIGVhc2UtaW4tb3V0O1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2ZmZjA7XFxufVxcblxcbm5hdiBsaTpob3ZlciB7XFxuICAgIGNvbG9yOiAjZjI5NDIwO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2ZmZjtcXG59XFxuXFxubmF2IHtcXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogODAlO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbiNsb2dvIHtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICBjb2xvcjogI2ExN2QwZjtcXG59XFxuXFxuI2xvZ28taGVhZGluZyB7XFxuICAgIGZvbnQtZmFtaWx5OiAnU2FtYXJrYW4gT2JsaXF1ZSc7XFxuICAgIGZvbnQtc2l6ZTogMTAwcHg7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggIzAwMDtcXG59XFxuXFxuI2xvZ28tZGVzY2lwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCAjMDAwO1xcbn1cXG5cXG4jaG9tZS1tYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogbWluKDN2dywgNjdweCk7XFxuICAgIG1hcmdpbi10b3A6IG1heCgyMHZoLCA1MHB4KTtcXG5cXG59XFxuXFxuLm1haW4ge1xcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwNmU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyZDJkMmQ7XFxufVxcblxcbiNsb2dvLWRlc2NyaXB0aW9uIHtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kOiAjYzUzZTE1O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xcbiAgICBwYWRkaW5nOiAxMnB4O1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA0MDBtcztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzUzZTE1O1xcbiAgICBwYWRkaW5nOiAxMnB4O1xcbiAgICBjb2xvcjogI2M1M2UxNTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4jbWVudS1tYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogbWluKDN2dywgNjdweCk7XFxuICAgIGdhcDogMjBweDtcXG4gICAgbWluLXdpZHRoOiA1MCU7XFxuICAgIG1hcmdpbi10b3A6IG1heCg1dmgsIDUwcHgpO1xcblxcbn1cXG5cXG4ucGFnZS10aXRsZSAge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggIzAwMDtcXG59XFxuXFxuLml0ZW1zIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XFxuICAgIGdyaWQtYXV0by1yb3dzOiAxODBweDtcXG4gICAgZ2FwOiAzMHB4O1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbn1cXG5cXG4uaXRlbSB7XFxuICAgIGJhY2tncm91bmQ6ICMwMDAwMDA4MjtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNGI0YjRiO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNDAwbXM7XFxuICAgIGN1cnNvcjogcG9pbnRlclxcbn1cXG5cXG4uaXRlbTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICMwMDAwMDBhZDtcXG59XFxuXFxuLml0ZW0tbmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogMjFweDtcXG4gICAgdGV4dC1zaGFkb3c6IDFweCAwcHggMHB4ICM0ZjE2MmE7XFxuICAgIG1hcmdpbi10b3A6IDZweDtcXG59XFxuXFxuLml0ZW0tcHJpY2Uge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHBhZGRpbmc6IDRweDtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM0YjRiNGI7XFxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzRiNGI0YjtcXG4gICAgYmFja2dyb3VuZDogIzRmMDcwNztcXG59XFxuXFxuLml0ZW0tcGljIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2E5YTlhOTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgd2lkdGg6IDE5MHB4O1xcbn1cXG5cXG4jY29udGFjdC1tYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogbWluKDN2dywgNjdweCk7XFxuICAgIGdhcDogMjBweDtcXG4gICAgbWFyZ2luLXRvcDogbWF4KDV2aCwgNTBweCk7XFxufVxcblxcbi5pbnB1dC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLmlucHV0LWNvbnRhaW5lciBsYWJlbCB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggIzAwMDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uaW5wdXQtY29udGFpbmVyIGlucHV0IHtcXG4gICAgZm9udC1zaXplOiAxN3B4O1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIGJhY2tncm91bmQ6ICNlZWVlZWU2YjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2I4YjZiNjtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNDAwbXM7XFxuICAgIG91dGxpbmU6IDA7XFxuXFxufVxcblxcbi5pbnB1dC1jb250YWluZXIgaW5wdXQ6aG92ZXIsIC5pbnB1dC1jb250YWluZXIgaW5wdXQ6Zm9jdXMge1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmNzg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XFxufVxcblxcblxcbi5pbnB1dC1jb250YWluZXIgdGV4dGFyZWEge1xcbiAgICBmb250LXNpemU6IDE3cHg7XFxuICAgIHBhZGRpbmc6IDRweDtcXG4gICAgYmFja2dyb3VuZDogI2VlZWVlZTZiO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYjhiNmI2O1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA0MDBtcztcXG4gICAgb3V0bGluZTogMDtcXG5cXG59XFxuXFxuLmlucHV0LWNvbnRhaW5lciB0ZXh0YXJlYTpob3ZlciwgLmlucHV0LWNvbnRhaW5lciB0ZXh0YXJlYTphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmNzg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XFxufVxcblxcblxcbi5pbnB1dC1jb250YWluZXIgaW5wdXQ6Zm9jdXMge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xcbn1cXG5cXG5cXG4uYnV0dG9uLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY29udGFjdC1pbmZvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAzcHg7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHRleHQtc2hhZG93OiAtMXB4IC0xcHggMXB4ICMwMDA7XFxufVxcblxcbkBrZXlmcmFtZXMgc2hvdyB7XFxuICAgIGZyb20ge29wYWNpdHk6IDAlO31cXG4gICAgdG8ge29wYWNpdHk6IDEwMCU7fVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcblxcbiAgICAjbG9nby1oZWFkaW5nIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogNzBweDtcXG4gICAgfVxcblxcbiAgICBuYXYge1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgfVxcblxcbiAgICBoZWFkZXIge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGdhcDogNXB4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIH1cXG5cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBwaG9uZVBpYyBmcm9tIFwiLi4vcmVzL2ltZy9waG9uZS5wbmdcIlxuaW1wb3J0IGxvY2F0aW9uUGljIGZyb20gXCIuLi9yZXMvaW1nL2xvY2F0aW9uLnBuZ1wiXG5cbmZ1bmN0aW9uIGlucHV0Q29udGFpbmVyKGxhYmVsLCBpbnB1dCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdCA9IFwiaW5wdXQtY29udGFpbmVyXCI7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIHJldHVybiBjb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlRm9ybURpdigpe1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBmb3JtLmlkID0gXCJjb250YWN0LWZvcm1cIjtcblxuICAgIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBuYW1lSW5wdXQuaWQgPSBcIm5hbWVcIjtcbiAgICBuYW1lSW5wdXQubmFtZSA9IFwibmFtZVwiO1xuICAgIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xuICAgIGNvbnN0IG5hbWVJbnB1dExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIG5hbWVJbnB1dExhYmVsLmZvciA9IFwibmFtZVwiO1xuICAgIG5hbWVJbnB1dExhYmVsLnRleHRDb250ZW50ID0gXCJFbnRlciBOYW1lOlwiO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXRDb250YWluZXIobmFtZUlucHV0TGFiZWwsIG5hbWVJbnB1dCkpO1xuXG4gICAgY29uc3QgbWFpbElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIG1haWxJbnB1dC5pZCA9IFwiZW1haWxcIjtcbiAgICBtYWlsSW5wdXQudHlwZSA9IFwiZW1haWxcIjtcbiAgICBtYWlsSW5wdXQubmFtZSA9IFwiZW1haWxcIjtcbiAgICBtYWlsSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcbiAgICBjb25zdCBtYWlsSW5wdXRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBtYWlsSW5wdXRMYWJlbC5mb3IgPSBcImVtYWlsXCI7XG4gICAgbWFpbElucHV0TGFiZWwudGV4dENvbnRlbnQgPSBcIkVudGVyIHlvdXIgZS1tYWlsOlwiO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXRDb250YWluZXIobWFpbElucHV0TGFiZWwsIG1haWxJbnB1dCkpO1xuXG4gICAgY29uc3QgbXNnSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgbXNnSW5wdXQuaWQgPSBcIm1zZ1wiO1xuICAgIG1zZ0lucHV0LnJvd3MgPSA1O1xuICAgIG1zZ0lucHV0LmNvbHMgPSAzMDtcbiAgICBtc2dJbnB1dC5uYW1lID0gXCJtc2dcIjtcbiAgICBtc2dJbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xuICAgIGNvbnN0IG1zZ0lucHV0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgbXNnSW5wdXRMYWJlbC5mb3IgPSBcIm1zZ1wiO1xuICAgIG1zZ0lucHV0TGFiZWwudGV4dENvbnRlbnQgPSBcIkVudGVyIHlvdXIgbWVzc2FnZTpcIjtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0Q29udGFpbmVyKG1zZ0lucHV0TGFiZWwsIG1zZ0lucHV0KSk7XG5cbiAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QgPSBcImJ1dHRvbi1jb250YWluZXJcIjtcbiAgICBjb25zdCBmb3JtU3VibWl0QnV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBmb3JtU3VibWl0QnV0LnR5cGUgPSBcInN1Ym1pdFwiO1xuICAgIGZvcm1TdWJtaXRCdXQudGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiO1xuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtU3VibWl0QnV0KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcik7XG5cbiAgICByZXR1cm4gZm9ybTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVDb250YWN0SW5mb0Rpdigpe1xuICAgIGNvbnN0IGluZm9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOztcbiAgICBpbmZvQ29udGFpbmVyLmlkID0gXCJpbmZvLWNvbnRhaW5lclwiO1xuICAgIFxuICAgIGNvbnN0IHBob25lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwaG9uZURpdi5jbGFzc0xpc3QgPSBcImNvbnRhY3QtaW5mb1wiO1xuICAgIGNvbnN0IHBob25lSW1nID0gbmV3IEltYWdlKCk7XG4gICAgcGhvbmVJbWcuc3JjID0gcGhvbmVQaWM7XG4gICAgY29uc3QgcGhvbmVOdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHBob25lTnVtLnRleHRDb250ZW50ID0gXCIoKzkxKSA5ODEyMzQ1NjdcIjtcbiAgICBwaG9uZURpdi5hcHBlbmRDaGlsZChwaG9uZUltZyk7XG4gICAgcGhvbmVEaXYuYXBwZW5kQ2hpbGQocGhvbmVOdW0pO1xuXG5cbiAgICBjb25zdCBsb2NhdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbG9jYXRpb25EaXYuY2xhc3NMaXN0ID0gXCJjb250YWN0LWluZm9cIjtcbiAgICBjb25zdCBsb2NhdGlvbkltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGxvY2F0aW9uSW1nLnNyYyA9IGxvY2F0aW9uUGljO1xuICAgIGNvbnN0IGxvY2F0aW9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbG9jYXRpb25UZXh0LnRleHRDb250ZW50ID0gXCIxMDEsIFJhbmRvbSBTdHJlZXQsIERlbGhpLCBJbmRpYVwiO1xuICAgIGxvY2F0aW9uRGl2LmFwcGVuZENoaWxkKGxvY2F0aW9uSW1nKTtcbiAgICBsb2NhdGlvbkRpdi5hcHBlbmRDaGlsZChsb2NhdGlvblRleHQpO1xuICAgIFxuICAgIGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQocGhvbmVEaXYpO1xuICAgIGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQobG9jYXRpb25EaXYpO1xuXG4gICAgcmV0dXJuIGluZm9Db250YWluZXI7XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkQ29udGFjdCA9ICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG4gICAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbkRpdi5pZCA9IFwiY29udGFjdC1tYWluXCI7XG4gICAgbWFpbkRpdi5jbGFzc0xpc3QgPSBcIm1haW5cIjtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKG1haW5EaXYpO1xuXG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBoZWFkaW5nLmNsYXNzTGlzdCA9IFwicGFnZS10aXRsZVwiO1xuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkNvbnRhY3QgVXNcIjtcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuXG4gICAgY29uc3QgZm9ybSA9IGdlbmVyYXRlRm9ybURpdigpO1xuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoZm9ybSlcblxuICAgIGNvbnN0IGluZm9EaXYgPSBnZW5lcmF0ZUNvbnRhY3RJbmZvRGl2KCk7XG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZChpbmZvRGl2KTtcblxuICAgIGNvbnN0IHNob3cgPSAoKSA9PiB7XG4gICAgICAgIG1haW5EaXYuc3R5bGUuZGlzcGxheSA9IFwiXCI7XG4gICAgfVxuXG4gICAgY29uc3QgaGlkZSA9ICgpID0+IHtcbiAgICAgICAgbWFpbkRpdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuICAgIHJldHVybiB7bWFpbkRpdiwgc2hvdywgaGlkZX07XG59IiwiZXhwb3J0IGNvbnN0IGxvYWRIZWFkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlclwiKTtcbiAgICBcbiAgICBjb25zdCBsb2dvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsb2dvRGl2LmlkID0gXCJsb2dvXCI7XG4gICAgbG9nb0Rpdi50ZXh0Q29udGVudCA9IFwiS2hhbmEgS2hhemFuYVwiO1xuXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgICBjb25zdCBuYXZMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIFxuICAgIGNvbnN0IG5hdkhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcbiAgICBuYXZIb21lLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG4gICAgXG4gICAgY29uc3QgbmF2TWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKVxuICAgIG5hdk1lbnUudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgICBcbiAgICBjb25zdCBuYXZDb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpXG4gICAgbmF2Q29udGFjdC50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xuICAgIFxuICAgIG5hdkxpc3QuYXBwZW5kQ2hpbGQobmF2SG9tZSk7XG4gICAgbmF2TGlzdC5hcHBlbmRDaGlsZChuYXZNZW51KTtcbiAgICBuYXZMaXN0LmFwcGVuZENoaWxkKG5hdkNvbnRhY3QpO1xuICAgIG5hdi5hcHBlbmRDaGlsZChuYXZMaXN0KVxuICAgIFxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChsb2dvRGl2KTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2KTtcbn0iLCJcbmV4cG9ydCBjb25zdCBsb2FkSG9tZSA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIkluaXRpYWwgUGFnZSBMb2FkXCIpXG5cblxuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbiAgICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluRGl2LmlkID0gXCJob21lLW1haW5cIjtcbiAgICBtYWluRGl2LmNsYXNzTGlzdCA9IFwibWFpblwiO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobWFpbkRpdik7XG5cbiAgICBjb25zdCBsb2dvSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbG9nb0hlYWRpbmcuaWQgPSBcImxvZ28taGVhZGluZ1wiO1xuICAgIGxvZ29IZWFkaW5nLnRleHRDb250ZW50ID0gXCJLaGFuYSBLaGF6YW5hXCI7XG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZChsb2dvSGVhZGluZyk7XG5cbiAgICBjb25zdCBsb2dvRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbG9nb0Rlc2MuaWQgPSBcImxvZ28tZGVzY3JpcHRpb25cIjtcbiAgICBsb2dvRGVzYy50ZXh0Q29udGVudCA9IFwiVHJlYXN1cmUgaHVudCBhIGxhcmdlIHZhcmlldHkgb2YgY3Vpc2luZXMgIVwiO1xuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQobG9nb0Rlc2MpOyAgICBcblxuICAgIGNvbnN0IHZpZXdNZW51QnV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICB2aWV3TWVudUJ1dC5pZCA9IFwidmlldy1tZW51LWJ1dFwiO1xuICAgIHZpZXdNZW51QnV0LnRleHRDb250ZW50ID0gXCJWaWV3IE1lbnVcIjtcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKHZpZXdNZW51QnV0KTsgICBcblxuICAgIGNvbnN0IHNob3cgPSAoKSA9PiB7XG4gICAgICAgIG1haW5EaXYuc3R5bGUuZGlzcGxheSA9IFwiXCI7XG4gICAgfVxuXG4gICAgY29uc3QgaGlkZSA9ICgpID0+IHtcbiAgICAgICAgbWFpbkRpdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuICAgIHJldHVybiB7bWFpbkRpdiwgc2hvdywgaGlkZX07XG59IiwiY2xhc3MgbWVudUl0ZW0ge1xuICAgIHN0YXRpYyBtZW51QXJyID0gW107XG4gICAgXG4gICAgY29uc3RydWN0b3IgKG5hbWUsIHByaWNlKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMucHJpY2UgPSBwcmljZTtcbiAgICB9XG5cbiAgICBhZGRJdGVtKCkge1xuICAgICAgICBtZW51SXRlbS5tZW51QXJyLnB1c2godGhpcylcbiAgICB9XG59XG5cblxuZnVuY3Rpb24gaW5pdGlhdGVJdGVtcygpIHtcbiAgICBuZXcgbWVudUl0ZW0oXCJDaG9sZSBCaGF0dXJlXCIsIDk5KS5hZGRJdGVtKClcbiAgICBuZXcgbWVudUl0ZW0oXCJQYW5lZXIgQnV0dGVyIE1hc2FsYVwiLCA5OSkuYWRkSXRlbSgpXG4gICAgbmV3IG1lbnVJdGVtKFwiQ2hvd21pblwiLCA5OSkuYWRkSXRlbSgpXG4gICAgbmV3IG1lbnVJdGVtKFwiUGl6emFcIiwgOTkpLmFkZEl0ZW0oKVxuICAgIG5ldyBtZW51SXRlbShcIkZyZW5jaCBGcmllc1wiLCA5OSkuYWRkSXRlbSgpXG5cbiAgICByZXR1cm4gbWVudUl0ZW0ubWVudUFycjtcbn1cblxuZnVuY3Rpb24gc2V0dXBJdGVtRGl2KGl0ZW0pe1xuICAgIGNvbnN0IGl0ZW1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGl0ZW1EaXYuY2xhc3NMaXN0ID0gXCJpdGVtXCI7XG4gICAgXG4gICAgY29uc3QgaXRlbVBpYyA9IG5ldyBJbWFnZSgpO1xuICAgIGNvbnN0IHBpY05hbWUgPSBpdGVtLm5hbWUudG9Mb3dlckNhc2UoKS5yZXBsYWNlQWxsKFwiIFwiLCBcIi1cIik7XG4gICAgaXRlbVBpYy5jbGFzc0xpc3QgPSBcIml0ZW0tcGljXCI7XG4gICAgaXRlbVBpYy5zcmMgPSByZXF1aXJlKFwiLi4vcmVzL2ltZy9jdWlzaW5lL1wiK3BpY05hbWUrXCIuanBnXCIpO1xuICAgIGl0ZW1QaWMuYWx0ID0gaXRlbS5uYW1lO1xuICAgIGl0ZW1EaXYuYXBwZW5kQ2hpbGQoaXRlbVBpYyk7XG5cbiAgICBjb25zdCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaXRlbU5hbWUuY2xhc3NMaXN0ID0gXCJpdGVtLW5hbWVcIjtcbiAgICBpdGVtTmFtZS50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcbiAgICBpdGVtRGl2LmFwcGVuZENoaWxkKGl0ZW1OYW1lKTtcblxuICAgIGNvbnN0IGl0ZW1QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaXRlbVByaWNlLmNsYXNzTGlzdCA9IFwiaXRlbS1wcmljZVwiO1xuICAgIGl0ZW1QcmljZS50ZXh0Q29udGVudCA9IGBScy4gJHtpdGVtLnByaWNlfWA7XG4gICAgaXRlbURpdi5hcHBlbmRDaGlsZChpdGVtUHJpY2UpOyAgICBcblxuICAgIHJldHVybiBpdGVtRGl2O1xufVxuXG5leHBvcnQgY29uc3QgbG9hZE1lbnUgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuICAgIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW5EaXYuaWQgPSBcIm1lbnUtbWFpblwiO1xuICAgIG1haW5EaXYuY2xhc3NMaXN0ID0gXCJtYWluXCI7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChtYWluRGl2KTtcblxuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgaGVhZGluZy5jbGFzc0xpc3QgPSBcInBhZ2UtdGl0bGVcIjtcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJPdXIgTWVudVwiO1xuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG5cbiAgICBjb25zdCBpdGVtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpdGVtQ29udGFpbmVyLmNsYXNzTGlzdCA9IFwiaXRlbXNcIjtcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKGl0ZW1Db250YWluZXIpXG5cbiAgICBjb25zdCBpdGVtc0FyciA9IGluaXRpYXRlSXRlbXMoKTtcbiAgICBpdGVtc0Fyci5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBjb25zdCBpdGVtRGl2ID0gc2V0dXBJdGVtRGl2KGl0ZW0pO1xuICAgICAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1EaXYpO1xuICAgIH0pO1xuXG4gICAgY29uc3Qgc2hvdyA9ICgpID0+IHtcbiAgICAgICAgbWFpbkRpdi5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcbiAgICB9XG5cbiAgICBjb25zdCBoaWRlID0gKCkgPT4ge1xuICAgICAgICBtYWluRGl2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG4gICAgcmV0dXJuIHttYWluRGl2LCBzaG93LCBoaWRlfTtcbn0iLCJ2YXIgbWFwID0ge1xuXHRcIi4vY2hvbGUtYmhhdHVyZS5qcGdcIjogXCIuL3NyYy9yZXMvaW1nL2N1aXNpbmUvY2hvbGUtYmhhdHVyZS5qcGdcIixcblx0XCIuL2Nob3dtaW4uanBnXCI6IFwiLi9zcmMvcmVzL2ltZy9jdWlzaW5lL2Nob3dtaW4uanBnXCIsXG5cdFwiLi9mcmVuY2gtZnJpZXMuanBnXCI6IFwiLi9zcmMvcmVzL2ltZy9jdWlzaW5lL2ZyZW5jaC1mcmllcy5qcGdcIixcblx0XCIuL3BhbmVlci1idXR0ZXItbWFzYWxhLmpwZ1wiOiBcIi4vc3JjL3Jlcy9pbWcvY3Vpc2luZS9wYW5lZXItYnV0dGVyLW1hc2FsYS5qcGdcIixcblx0XCIuL3BpenphLmpwZ1wiOiBcIi4vc3JjL3Jlcy9pbWcvY3Vpc2luZS9waXp6YS5qcGdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvcmVzL2ltZy9jdWlzaW5lIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLipcXFxcLmpwZyRcIjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHtsb2FkSG9tZX0gZnJvbSBcIi4vbW9kdWxlcy9sb2FkSG9tZS5qc1wiXG5pbXBvcnQge2xvYWRIZWFkZXJ9IGZyb20gXCIuL21vZHVsZXMvbG9hZEhlYWRlci5qc1wiXG5pbXBvcnQge2xvYWRDb250YWN0fSBmcm9tIFwiLi9tb2R1bGVzL2xvYWRDb250YWN0LmpzXCJcbmltcG9ydCAnLi9jc3Mvc3R5bGUuY3NzJ1xuaW1wb3J0IHsgbG9hZE1lbnUgfSBmcm9tIFwiLi9tb2R1bGVzL2xvYWRNZW51LmpzXCI7XG5cblxubG9hZEhlYWRlcigpO1xuY29uc3QgaG9tZUhhbmRsZXIgPSBsb2FkSG9tZSgpO1xuY29uc3QgbWVudUhhbmRsZXIgPSBsb2FkTWVudSgpO1xuY29uc3QgY29udGFjdEhhbmRsZXIgPSBsb2FkQ29udGFjdCgpO1xuXG5cbm1lbnVIYW5kbGVyLmhpZGUoKTtcbmNvbnRhY3RIYW5kbGVyLmhpZGUoKTtcblxuZnVuY3Rpb24gc2hvd09ubHkoZXZlbnQpe1xuICAgIGhvbWVIYW5kbGVyLmhpZGUoKTtcbiAgICBtZW51SGFuZGxlci5oaWRlKCk7XG4gICAgY29udGFjdEhhbmRsZXIuaGlkZSgpO1xuXG4gICAgY29uc3QgdGFyZ2V0VGV4dCA9IGV2ZW50LnRhcmdldC50ZXh0Q29udGVudDtcblxuICAgIGlmICh0YXJnZXRUZXh0LmluZGV4T2YoXCJIb21lXCIpID4gLTEpXG4gICAgICAgIGhvbWVIYW5kbGVyLnNob3coKTtcbiAgICAgICAgaG9tZUhhbmRsZXIubWFpbkRpdi5zdHlsZS5hbmltYXRpb24gPSBcIjUwMG1zIHNob3dcIjtcbiAgICBpZiAodGFyZ2V0VGV4dC5pbmRleE9mKFwiTWVudVwiKSA+IC0xKSBcbiAgICAgICAgbWVudUhhbmRsZXIuc2hvdygpO1xuICAgICAgICBtZW51SGFuZGxlci5tYWluRGl2LnN0eWxlLmFuaW1hdGlvbiA9IFwiNTAwbXMgc2hvd1wiO1xuICAgIGlmICh0YXJnZXRUZXh0LmluZGV4T2YoXCJDb250YWN0XCIpID4gLTEpIFxuICAgICAgICBjb250YWN0SGFuZGxlci5zaG93KCk7XG4gICAgICAgIGNvbnRhY3RIYW5kbGVyLm1haW5EaXYuc3R5bGUuYW5pbWF0aW9uID0gXCI1MDBtcyBzaG93XCI7XG59XG5cbmNvbnN0IG5hdkxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIm5hdiBsaVwiKTtcbmNvbnN0IG5hdkxpbmtzQXJyID0gWy4uLm5hdkxpbmtzXTtcblxubmF2TGlua3NBcnIuZm9yRWFjaChsaW5rID0+IHtcbiAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93T25seSk7XG59KVxuXG5jb25zdCB2aWV3TWVudUJ1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdmlldy1tZW51LWJ1dFwiKTtcblxudmlld01lbnVCdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dPbmx5KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=