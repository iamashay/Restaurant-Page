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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    box-sizing: border-box;\n}\n\n@font-face {\n    font-family: 'Samarkan Normal';\n    font-style: normal;\n    font-weight: normal;\n    src: local('Samarkan Normal'), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff');\n}\n    \n\n@font-face {\nfont-family: 'Samarkan Oblique';\nfont-style: normal;\nfont-weight: normal;\nsrc: local('Samarkan Oblique'), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('woff');\n}\n\nhtml, body {\n    margin: 0;\n    padding: 0;\n    height: 100%;\n}\n\nbody {\n   background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") no-repeat center fixed\n}\n\nheader {\n    display: flex;\n    justify-content: space-between;\n    padding: 20px;\n    font-size: 20px;\n    padding-left: 60px;\n    padding-right: 60px;\n    background: #000;\n    opacity: 0.8;\n    color: #fff;\n}\n\nnav ul {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    display: flex;\n    gap: 20px;    \n}  \n\nnav li {\n    cursor: pointer;\n    transition: 300ms ease-in-out;\n    border-bottom: 2px solid #fff0;\n}\n\nnav li:hover {\n    color: #f29420;\n    border-bottom: 2px solid #fff;\n}\n\nnav {\n    padding-right: 20px;\n    align-self: center;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 80%;\n    gap: 10px;\n}\n\n#logo {\n    font-size: 32px;\n    color: #a17d0f;\n}\n\n#logo-heading {\n    font-family: 'Samarkan Oblique';\n    font-size: 100px;\n    color: #fff;\n    text-shadow: 1px 1px 1px #000;\n}\n\n#logo-desciption {\n    font-size: 25px;\n    color: #fff;\n    text-shadow: 1px 1px 1px #000;\n}\n\n#home-main {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    align-items: center;\n    color: white;\n    text-align: center;\n    padding: min(3vw, 67px);\n    margin-top: max(20vh, 50px);\n\n}\n\n.main {\n    background: #0000006e;\n    border: 1px solid #2d2d2d;\n    margin-bottom: 1vh;\n}\n\n#logo-description {\n    font-size: 25px;\n    margin-bottom: 20px;\n}\n\nbutton {\n    background: #c53e15;\n    border: 1px solid #fff;\n    padding: 12px;\n    color: #fff;\n    font-size: 16px;\n    transition-duration: 400ms;\n    cursor: pointer;\n}\n\nbutton:hover {\n    background: #fff;\n    border: 1px solid #c53e15;\n    padding: 12px;\n    color: #c53e15;\n    font-size: 16px;\n}\n\n#menu-main {\n    display: flex;\n    flex-direction: column;\n    padding: min(3vw, 67px);\n    gap: 20px;\n    min-width: 50%;\n    margin-top: max(5vh, 50px);\n\n}\n\n.page-title  {\n    text-align: center;\n    color: #fff;\n    text-shadow: 1px 1px 1px #000;\n}\n\n.items {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n    grid-auto-rows: 180px;\n    gap: 30px;\n    color: #fff;\n    text-align: center;\n\n}\n\n.item {\n    background: #00000082;\n    padding: 5px;\n    border: 1px solid #4b4b4b;\n    color: #ffffff;\n    position: relative;\n    padding-top: 10px;\n    transition-duration: 400ms;\n    cursor: pointer\n}\n\n.item:hover {\n    background: #000000ad;\n}\n\n.item-name {\n    font-size: 21px;\n    text-shadow: 1px 0px 0px #4f162a;\n    margin-top: 6px;\n}\n\n.item-price {\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    padding: 4px;\n    border-top: 1px solid #4b4b4b;\n    border-left: 1px solid #4b4b4b;\n    background: #4f0707;\n}\n\n.item-pic {\n    border: 1px solid #a9a9a9;\n    border-radius: 10px;\n    height: 100px;\n    width: 190px;\n}\n\n#contact-main {\n    display: flex;\n    flex-direction: column;\n    padding: min(3vw, 67px);\n    gap: 20px;\n    margin-top: max(5vh, 50px);\n}\n\n.input-container {\n    display: flex;\n    flex-direction: column;\n    gap: 1px;\n    margin-bottom: 20px;\n}\n\n.input-container label {\n    color: #fff;\n    text-shadow: 1px 1px 1px #000;\n    font-size: 18px;\n    font-weight: 600;\n}\n\n.input-container input {\n    font-size: 17px;\n    padding: 4px;\n    background: #eeeeee6b;\n    border: 1px solid #b8b6b6;\n    transition-duration: 400ms;\n    outline: 0;\n\n}\n\n.input-container input:hover, .input-container input:focus {\n    background: #ffffff78;\n    border: 1px solid #eee;\n}\n\n\n.input-container textarea {\n    font-size: 17px;\n    padding: 4px;\n    background: #eeeeee6b;\n    border: 1px solid #b8b6b6;\n    transition-duration: 400ms;\n    outline: 0;\n\n}\n\n.input-container textarea:hover, .input-container textarea:active {\n    background: #ffffff78;\n    border: 1px solid #eee;\n}\n\n\n.input-container input:focus {\n    border: 1px solid #eee;\n}\n\n\n.button-container {\n    display: flex;\n    justify-content: center;\n}\n\n.contact-info {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 3px;\n    color: #fff;\n    margin-top: 20px;\n    font-size: 18px;\n    font-weight: 600;\n    text-shadow: -1px -1px 1px #000;\n}\n\n@keyframes show {\n    from {opacity: 0%;}\n    to {opacity: 100%;}\n}\n\n@media screen and (max-width: 600px) {\n\n    #logo-heading {\n        font-size: 70px;\n    }\n\n    #logo {\n        font-size: 25px;\n    }\n\n    nav {\n        padding: 0;\n    }\n\n    header {\n        flex-direction: column;\n        gap: 5px;\n        align-items: center;\n        padding: 10px;\n    }\n\n}", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    box-sizing: border-box;\n}\n\n@font-face {\n    font-family: 'Samarkan Normal';\n    font-style: normal;\n    font-weight: normal;\n    src: local('Samarkan Normal'), url('../res/SAMARN__.woff') format('woff');\n}\n    \n\n@font-face {\nfont-family: 'Samarkan Oblique';\nfont-style: normal;\nfont-weight: normal;\nsrc: local('Samarkan Oblique'), url('../res/SAMARO__.woff') format('woff');\n}\n\nhtml, body {\n    margin: 0;\n    padding: 0;\n    height: 100%;\n}\n\nbody {\n   background: url(\"../res/img/background.jpg\") no-repeat center fixed\n}\n\nheader {\n    display: flex;\n    justify-content: space-between;\n    padding: 20px;\n    font-size: 20px;\n    padding-left: 60px;\n    padding-right: 60px;\n    background: #000;\n    opacity: 0.8;\n    color: #fff;\n}\n\nnav ul {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    display: flex;\n    gap: 20px;    \n}  \n\nnav li {\n    cursor: pointer;\n    transition: 300ms ease-in-out;\n    border-bottom: 2px solid #fff0;\n}\n\nnav li:hover {\n    color: #f29420;\n    border-bottom: 2px solid #fff;\n}\n\nnav {\n    padding-right: 20px;\n    align-self: center;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 80%;\n    gap: 10px;\n}\n\n#logo {\n    font-size: 32px;\n    color: #a17d0f;\n}\n\n#logo-heading {\n    font-family: 'Samarkan Oblique';\n    font-size: 100px;\n    color: #fff;\n    text-shadow: 1px 1px 1px #000;\n}\n\n#logo-desciption {\n    font-size: 25px;\n    color: #fff;\n    text-shadow: 1px 1px 1px #000;\n}\n\n#home-main {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    align-items: center;\n    color: white;\n    text-align: center;\n    padding: min(3vw, 67px);\n    margin-top: max(20vh, 50px);\n\n}\n\n.main {\n    background: #0000006e;\n    border: 1px solid #2d2d2d;\n    margin-bottom: 1vh;\n}\n\n#logo-description {\n    font-size: 25px;\n    margin-bottom: 20px;\n}\n\nbutton {\n    background: #c53e15;\n    border: 1px solid #fff;\n    padding: 12px;\n    color: #fff;\n    font-size: 16px;\n    transition-duration: 400ms;\n    cursor: pointer;\n}\n\nbutton:hover {\n    background: #fff;\n    border: 1px solid #c53e15;\n    padding: 12px;\n    color: #c53e15;\n    font-size: 16px;\n}\n\n#menu-main {\n    display: flex;\n    flex-direction: column;\n    padding: min(3vw, 67px);\n    gap: 20px;\n    min-width: 50%;\n    margin-top: max(5vh, 50px);\n\n}\n\n.page-title  {\n    text-align: center;\n    color: #fff;\n    text-shadow: 1px 1px 1px #000;\n}\n\n.items {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n    grid-auto-rows: 180px;\n    gap: 30px;\n    color: #fff;\n    text-align: center;\n\n}\n\n.item {\n    background: #00000082;\n    padding: 5px;\n    border: 1px solid #4b4b4b;\n    color: #ffffff;\n    position: relative;\n    padding-top: 10px;\n    transition-duration: 400ms;\n    cursor: pointer\n}\n\n.item:hover {\n    background: #000000ad;\n}\n\n.item-name {\n    font-size: 21px;\n    text-shadow: 1px 0px 0px #4f162a;\n    margin-top: 6px;\n}\n\n.item-price {\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    padding: 4px;\n    border-top: 1px solid #4b4b4b;\n    border-left: 1px solid #4b4b4b;\n    background: #4f0707;\n}\n\n.item-pic {\n    border: 1px solid #a9a9a9;\n    border-radius: 10px;\n    height: 100px;\n    width: 190px;\n}\n\n#contact-main {\n    display: flex;\n    flex-direction: column;\n    padding: min(3vw, 67px);\n    gap: 20px;\n    margin-top: max(5vh, 50px);\n}\n\n.input-container {\n    display: flex;\n    flex-direction: column;\n    gap: 1px;\n    margin-bottom: 20px;\n}\n\n.input-container label {\n    color: #fff;\n    text-shadow: 1px 1px 1px #000;\n    font-size: 18px;\n    font-weight: 600;\n}\n\n.input-container input {\n    font-size: 17px;\n    padding: 4px;\n    background: #eeeeee6b;\n    border: 1px solid #b8b6b6;\n    transition-duration: 400ms;\n    outline: 0;\n\n}\n\n.input-container input:hover, .input-container input:focus {\n    background: #ffffff78;\n    border: 1px solid #eee;\n}\n\n\n.input-container textarea {\n    font-size: 17px;\n    padding: 4px;\n    background: #eeeeee6b;\n    border: 1px solid #b8b6b6;\n    transition-duration: 400ms;\n    outline: 0;\n\n}\n\n.input-container textarea:hover, .input-container textarea:active {\n    background: #ffffff78;\n    border: 1px solid #eee;\n}\n\n\n.input-container input:focus {\n    border: 1px solid #eee;\n}\n\n\n.button-container {\n    display: flex;\n    justify-content: center;\n}\n\n.contact-info {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 3px;\n    color: #fff;\n    margin-top: 20px;\n    font-size: 18px;\n    font-weight: 600;\n    text-shadow: -1px -1px 1px #000;\n}\n\n@keyframes show {\n    from {opacity: 0%;}\n    to {opacity: 100%;}\n}\n\n@media screen and (max-width: 600px) {\n\n    #logo-heading {\n        font-size: 70px;\n    }\n\n    #logo {\n        font-size: 25px;\n    }\n\n    nav {\n        padding: 0;\n    }\n\n    header {\n        flex-direction: column;\n        gap: 5px;\n        align-items: center;\n        padding: 10px;\n    }\n\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O0FDZjJDO0FBQ007O0FBRWpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLCtDQUFRO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isa0RBQVc7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOzs7Ozs7Ozs7Ozs7Ozs7QUNoSE87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Qk87QUFDUDs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7Ozs7Ozs7Ozs7Ozs7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiw2RUFBUSxJQUFxQixTQUFTLE1BQU0sQ0FBQztBQUMvRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQ0FBbUMsV0FBVztBQUM5Qzs7QUFFQTtBQUNBOztBQUVPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOzs7Ozs7Ozs7O0FDL0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMUJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBOEM7QUFDSTtBQUNFO0FBQzVCO0FBQ3lCOzs7QUFHakQsa0VBQVU7QUFDVixvQkFBb0IsOERBQVE7QUFDNUIsb0JBQW9CLDhEQUFRO0FBQzVCLHVCQUF1QixvRUFBVzs7O0FBR2xDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQSxnRCIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY3NzL3N0eWxlLmNzcz85ZmNkIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvbG9hZENvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvbG9hZEhlYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9sb2FkSG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9sb2FkTWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcmVzL2ltZy9jdWlzaW5lLyBzeW5jIF5cXC5cXC8uKlxcLmpwZyQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL3Jlcy9TQU1BUk5fXy53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vcmVzL1NBTUFST19fLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9yZXMvaW1nL2JhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnU2FtYXJrYW4gTm9ybWFsJztcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBzcmM6IGxvY2FsKCdTYW1hcmthbiBOb3JtYWwnKSwgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXG59XFxuICAgIFxcblxcbkBmb250LWZhY2Uge1xcbmZvbnQtZmFtaWx5OiAnU2FtYXJrYW4gT2JsaXF1ZSc7XFxuZm9udC1zdHlsZTogbm9ybWFsO1xcbmZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuc3JjOiBsb2NhbCgnU2FtYXJrYW4gT2JsaXF1ZScpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdCgnd29mZicpO1xcbn1cXG5cXG5odG1sLCBib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIikgbm8tcmVwZWF0IGNlbnRlciBmaXhlZFxcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA2MHB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xcbiAgICBvcGFjaXR5OiAwLjg7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG5uYXYgdWwge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjBweDsgICAgXFxufSAgXFxuXFxubmF2IGxpIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiAzMDBtcyBlYXNlLWluLW91dDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmZmYwO1xcbn1cXG5cXG5uYXYgbGk6aG92ZXIge1xcbiAgICBjb2xvcjogI2YyOTQyMDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmZmY7XFxufVxcblxcbm5hdiB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDgwJTtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4jbG9nbyB7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgY29sb3I6ICNhMTdkMGY7XFxufVxcblxcbiNsb2dvLWhlYWRpbmcge1xcbiAgICBmb250LWZhbWlseTogJ1NhbWFya2FuIE9ibGlxdWUnO1xcbiAgICBmb250LXNpemU6IDEwMHB4O1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4ICMwMDA7XFxufVxcblxcbiNsb2dvLWRlc2NpcHRpb24ge1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggIzAwMDtcXG59XFxuXFxuI2hvbWUtbWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IG1pbigzdncsIDY3cHgpO1xcbiAgICBtYXJnaW4tdG9wOiBtYXgoMjB2aCwgNTBweCk7XFxuXFxufVxcblxcbi5tYWluIHtcXG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDZlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMmQyZDJkO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxdmg7XFxufVxcblxcbiNsb2dvLWRlc2NyaXB0aW9uIHtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kOiAjYzUzZTE1O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xcbiAgICBwYWRkaW5nOiAxMnB4O1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA0MDBtcztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzUzZTE1O1xcbiAgICBwYWRkaW5nOiAxMnB4O1xcbiAgICBjb2xvcjogI2M1M2UxNTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4jbWVudS1tYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogbWluKDN2dywgNjdweCk7XFxuICAgIGdhcDogMjBweDtcXG4gICAgbWluLXdpZHRoOiA1MCU7XFxuICAgIG1hcmdpbi10b3A6IG1heCg1dmgsIDUwcHgpO1xcblxcbn1cXG5cXG4ucGFnZS10aXRsZSAge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggIzAwMDtcXG59XFxuXFxuLml0ZW1zIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XFxuICAgIGdyaWQtYXV0by1yb3dzOiAxODBweDtcXG4gICAgZ2FwOiAzMHB4O1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbn1cXG5cXG4uaXRlbSB7XFxuICAgIGJhY2tncm91bmQ6ICMwMDAwMDA4MjtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNGI0YjRiO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNDAwbXM7XFxuICAgIGN1cnNvcjogcG9pbnRlclxcbn1cXG5cXG4uaXRlbTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICMwMDAwMDBhZDtcXG59XFxuXFxuLml0ZW0tbmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogMjFweDtcXG4gICAgdGV4dC1zaGFkb3c6IDFweCAwcHggMHB4ICM0ZjE2MmE7XFxuICAgIG1hcmdpbi10b3A6IDZweDtcXG59XFxuXFxuLml0ZW0tcHJpY2Uge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHBhZGRpbmc6IDRweDtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM0YjRiNGI7XFxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzRiNGI0YjtcXG4gICAgYmFja2dyb3VuZDogIzRmMDcwNztcXG59XFxuXFxuLml0ZW0tcGljIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2E5YTlhOTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgd2lkdGg6IDE5MHB4O1xcbn1cXG5cXG4jY29udGFjdC1tYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogbWluKDN2dywgNjdweCk7XFxuICAgIGdhcDogMjBweDtcXG4gICAgbWFyZ2luLXRvcDogbWF4KDV2aCwgNTBweCk7XFxufVxcblxcbi5pbnB1dC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLmlucHV0LWNvbnRhaW5lciBsYWJlbCB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggIzAwMDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uaW5wdXQtY29udGFpbmVyIGlucHV0IHtcXG4gICAgZm9udC1zaXplOiAxN3B4O1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIGJhY2tncm91bmQ6ICNlZWVlZWU2YjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2I4YjZiNjtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNDAwbXM7XFxuICAgIG91dGxpbmU6IDA7XFxuXFxufVxcblxcbi5pbnB1dC1jb250YWluZXIgaW5wdXQ6aG92ZXIsIC5pbnB1dC1jb250YWluZXIgaW5wdXQ6Zm9jdXMge1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmNzg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XFxufVxcblxcblxcbi5pbnB1dC1jb250YWluZXIgdGV4dGFyZWEge1xcbiAgICBmb250LXNpemU6IDE3cHg7XFxuICAgIHBhZGRpbmc6IDRweDtcXG4gICAgYmFja2dyb3VuZDogI2VlZWVlZTZiO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYjhiNmI2O1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA0MDBtcztcXG4gICAgb3V0bGluZTogMDtcXG5cXG59XFxuXFxuLmlucHV0LWNvbnRhaW5lciB0ZXh0YXJlYTpob3ZlciwgLmlucHV0LWNvbnRhaW5lciB0ZXh0YXJlYTphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmNzg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XFxufVxcblxcblxcbi5pbnB1dC1jb250YWluZXIgaW5wdXQ6Zm9jdXMge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xcbn1cXG5cXG5cXG4uYnV0dG9uLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY29udGFjdC1pbmZvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAzcHg7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHRleHQtc2hhZG93OiAtMXB4IC0xcHggMXB4ICMwMDA7XFxufVxcblxcbkBrZXlmcmFtZXMgc2hvdyB7XFxuICAgIGZyb20ge29wYWNpdHk6IDAlO31cXG4gICAgdG8ge29wYWNpdHk6IDEwMCU7fVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcblxcbiAgICAjbG9nby1oZWFkaW5nIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogNzBweDtcXG4gICAgfVxcblxcbiAgICAjbG9nbyB7XFxuICAgICAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIH1cXG5cXG4gICAgbmF2IHtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgIH1cXG5cXG4gICAgaGVhZGVyIHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBnYXA6IDVweDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICB9XFxuXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5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QjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QiwwQkFBMEI7SUFDMUIsVUFBVTs7QUFFZDs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixzQkFBc0I7QUFDMUI7OztBQUdBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQixVQUFVOztBQUVkOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLHNCQUFzQjtBQUMxQjs7O0FBR0E7SUFDSSxzQkFBc0I7QUFDMUI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFFBQVE7SUFDUixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksTUFBTSxXQUFXLENBQUM7SUFDbEIsSUFBSSxhQUFhLENBQUM7QUFDdEI7O0FBRUE7O0lBRUk7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLHNCQUFzQjtRQUN0QixRQUFRO1FBQ1IsbUJBQW1CO1FBQ25CLGFBQWE7SUFDakI7O0FBRUpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1NhbWFya2FuIE5vcm1hbCc7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgc3JjOiBsb2NhbCgnU2FtYXJrYW4gTm9ybWFsJyksIHVybCgnLi4vcmVzL1NBTUFSTl9fLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcXG59XFxuICAgIFxcblxcbkBmb250LWZhY2Uge1xcbmZvbnQtZmFtaWx5OiAnU2FtYXJrYW4gT2JsaXF1ZSc7XFxuZm9udC1zdHlsZTogbm9ybWFsO1xcbmZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuc3JjOiBsb2NhbCgnU2FtYXJrYW4gT2JsaXF1ZScpLCB1cmwoJy4uL3Jlcy9TQU1BUk9fXy53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XFxufVxcblxcbmh0bWwsIGJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICAgYmFja2dyb3VuZDogdXJsKFxcXCIuLi9yZXMvaW1nL2JhY2tncm91bmQuanBnXFxcIikgbm8tcmVwZWF0IGNlbnRlciBmaXhlZFxcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA2MHB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xcbiAgICBvcGFjaXR5OiAwLjg7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG5uYXYgdWwge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjBweDsgICAgXFxufSAgXFxuXFxubmF2IGxpIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiAzMDBtcyBlYXNlLWluLW91dDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmZmYwO1xcbn1cXG5cXG5uYXYgbGk6aG92ZXIge1xcbiAgICBjb2xvcjogI2YyOTQyMDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmZmY7XFxufVxcblxcbm5hdiB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDgwJTtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4jbG9nbyB7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgY29sb3I6ICNhMTdkMGY7XFxufVxcblxcbiNsb2dvLWhlYWRpbmcge1xcbiAgICBmb250LWZhbWlseTogJ1NhbWFya2FuIE9ibGlxdWUnO1xcbiAgICBmb250LXNpemU6IDEwMHB4O1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4ICMwMDA7XFxufVxcblxcbiNsb2dvLWRlc2NpcHRpb24ge1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggIzAwMDtcXG59XFxuXFxuI2hvbWUtbWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IG1pbigzdncsIDY3cHgpO1xcbiAgICBtYXJnaW4tdG9wOiBtYXgoMjB2aCwgNTBweCk7XFxuXFxufVxcblxcbi5tYWluIHtcXG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDZlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMmQyZDJkO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxdmg7XFxufVxcblxcbiNsb2dvLWRlc2NyaXB0aW9uIHtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kOiAjYzUzZTE1O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xcbiAgICBwYWRkaW5nOiAxMnB4O1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA0MDBtcztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzUzZTE1O1xcbiAgICBwYWRkaW5nOiAxMnB4O1xcbiAgICBjb2xvcjogI2M1M2UxNTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4jbWVudS1tYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogbWluKDN2dywgNjdweCk7XFxuICAgIGdhcDogMjBweDtcXG4gICAgbWluLXdpZHRoOiA1MCU7XFxuICAgIG1hcmdpbi10b3A6IG1heCg1dmgsIDUwcHgpO1xcblxcbn1cXG5cXG4ucGFnZS10aXRsZSAge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggIzAwMDtcXG59XFxuXFxuLml0ZW1zIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XFxuICAgIGdyaWQtYXV0by1yb3dzOiAxODBweDtcXG4gICAgZ2FwOiAzMHB4O1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbn1cXG5cXG4uaXRlbSB7XFxuICAgIGJhY2tncm91bmQ6ICMwMDAwMDA4MjtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNGI0YjRiO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNDAwbXM7XFxuICAgIGN1cnNvcjogcG9pbnRlclxcbn1cXG5cXG4uaXRlbTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICMwMDAwMDBhZDtcXG59XFxuXFxuLml0ZW0tbmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogMjFweDtcXG4gICAgdGV4dC1zaGFkb3c6IDFweCAwcHggMHB4ICM0ZjE2MmE7XFxuICAgIG1hcmdpbi10b3A6IDZweDtcXG59XFxuXFxuLml0ZW0tcHJpY2Uge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHBhZGRpbmc6IDRweDtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM0YjRiNGI7XFxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzRiNGI0YjtcXG4gICAgYmFja2dyb3VuZDogIzRmMDcwNztcXG59XFxuXFxuLml0ZW0tcGljIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2E5YTlhOTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgd2lkdGg6IDE5MHB4O1xcbn1cXG5cXG4jY29udGFjdC1tYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogbWluKDN2dywgNjdweCk7XFxuICAgIGdhcDogMjBweDtcXG4gICAgbWFyZ2luLXRvcDogbWF4KDV2aCwgNTBweCk7XFxufVxcblxcbi5pbnB1dC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLmlucHV0LWNvbnRhaW5lciBsYWJlbCB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggIzAwMDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uaW5wdXQtY29udGFpbmVyIGlucHV0IHtcXG4gICAgZm9udC1zaXplOiAxN3B4O1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIGJhY2tncm91bmQ6ICNlZWVlZWU2YjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2I4YjZiNjtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNDAwbXM7XFxuICAgIG91dGxpbmU6IDA7XFxuXFxufVxcblxcbi5pbnB1dC1jb250YWluZXIgaW5wdXQ6aG92ZXIsIC5pbnB1dC1jb250YWluZXIgaW5wdXQ6Zm9jdXMge1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmNzg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XFxufVxcblxcblxcbi5pbnB1dC1jb250YWluZXIgdGV4dGFyZWEge1xcbiAgICBmb250LXNpemU6IDE3cHg7XFxuICAgIHBhZGRpbmc6IDRweDtcXG4gICAgYmFja2dyb3VuZDogI2VlZWVlZTZiO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYjhiNmI2O1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA0MDBtcztcXG4gICAgb3V0bGluZTogMDtcXG5cXG59XFxuXFxuLmlucHV0LWNvbnRhaW5lciB0ZXh0YXJlYTpob3ZlciwgLmlucHV0LWNvbnRhaW5lciB0ZXh0YXJlYTphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmNzg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XFxufVxcblxcblxcbi5pbnB1dC1jb250YWluZXIgaW5wdXQ6Zm9jdXMge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xcbn1cXG5cXG5cXG4uYnV0dG9uLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY29udGFjdC1pbmZvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAzcHg7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHRleHQtc2hhZG93OiAtMXB4IC0xcHggMXB4ICMwMDA7XFxufVxcblxcbkBrZXlmcmFtZXMgc2hvdyB7XFxuICAgIGZyb20ge29wYWNpdHk6IDAlO31cXG4gICAgdG8ge29wYWNpdHk6IDEwMCU7fVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcblxcbiAgICAjbG9nby1oZWFkaW5nIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogNzBweDtcXG4gICAgfVxcblxcbiAgICAjbG9nbyB7XFxuICAgICAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIH1cXG5cXG4gICAgbmF2IHtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgIH1cXG5cXG4gICAgaGVhZGVyIHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBnYXA6IDVweDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICB9XFxuXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgcGhvbmVQaWMgZnJvbSBcIi4uL3Jlcy9pbWcvcGhvbmUucG5nXCJcbmltcG9ydCBsb2NhdGlvblBpYyBmcm9tIFwiLi4vcmVzL2ltZy9sb2NhdGlvbi5wbmdcIlxuXG5mdW5jdGlvbiBpbnB1dENvbnRhaW5lcihsYWJlbCwgaW5wdXQpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QgPSBcImlucHV0LWNvbnRhaW5lclwiO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUZvcm1EaXYoKXtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgZm9ybS5pZCA9IFwiY29udGFjdC1mb3JtXCI7XG5cbiAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgbmFtZUlucHV0LmlkID0gXCJuYW1lXCI7XG4gICAgbmFtZUlucHV0Lm5hbWUgPSBcIm5hbWVcIjtcbiAgICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcbiAgICBjb25zdCBuYW1lSW5wdXRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBuYW1lSW5wdXRMYWJlbC5mb3IgPSBcIm5hbWVcIjtcbiAgICBuYW1lSW5wdXRMYWJlbC50ZXh0Q29udGVudCA9IFwiRW50ZXIgTmFtZTpcIjtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0Q29udGFpbmVyKG5hbWVJbnB1dExhYmVsLCBuYW1lSW5wdXQpKTtcblxuICAgIGNvbnN0IG1haWxJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBtYWlsSW5wdXQuaWQgPSBcImVtYWlsXCI7XG4gICAgbWFpbElucHV0LnR5cGUgPSBcImVtYWlsXCI7XG4gICAgbWFpbElucHV0Lm5hbWUgPSBcImVtYWlsXCI7XG4gICAgbWFpbElucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XG4gICAgY29uc3QgbWFpbElucHV0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgbWFpbElucHV0TGFiZWwuZm9yID0gXCJlbWFpbFwiO1xuICAgIG1haWxJbnB1dExhYmVsLnRleHRDb250ZW50ID0gXCJFbnRlciB5b3VyIGUtbWFpbDpcIjtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0Q29udGFpbmVyKG1haWxJbnB1dExhYmVsLCBtYWlsSW5wdXQpKTtcblxuICAgIGNvbnN0IG1zZ0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgIG1zZ0lucHV0LmlkID0gXCJtc2dcIjtcbiAgICBtc2dJbnB1dC5yb3dzID0gNTtcbiAgICBtc2dJbnB1dC5jb2xzID0gMzA7XG4gICAgbXNnSW5wdXQubmFtZSA9IFwibXNnXCI7XG4gICAgbXNnSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcbiAgICBjb25zdCBtc2dJbnB1dExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIG1zZ0lucHV0TGFiZWwuZm9yID0gXCJtc2dcIjtcbiAgICBtc2dJbnB1dExhYmVsLnRleHRDb250ZW50ID0gXCJFbnRlciB5b3VyIG1lc3NhZ2U6XCI7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dENvbnRhaW5lcihtc2dJbnB1dExhYmVsLCBtc2dJbnB1dCkpO1xuXG4gICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBidXR0b25Db250YWluZXIuY2xhc3NMaXN0ID0gXCJidXR0b24tY29udGFpbmVyXCI7XG4gICAgY29uc3QgZm9ybVN1Ym1pdEJ1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZm9ybVN1Ym1pdEJ1dC50eXBlID0gXCJzdWJtaXRcIjtcbiAgICBmb3JtU3VibWl0QnV0LnRleHRDb250ZW50ID0gXCJTdWJtaXRcIjtcbiAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybVN1Ym1pdEJ1dCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChidXR0b25Db250YWluZXIpO1xuXG4gICAgcmV0dXJuIGZvcm07XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlQ29udGFjdEluZm9EaXYoKXtcbiAgICBjb25zdCBpbmZvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTs7XG4gICAgaW5mb0NvbnRhaW5lci5pZCA9IFwiaW5mby1jb250YWluZXJcIjtcbiAgICBcbiAgICBjb25zdCBwaG9uZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcGhvbmVEaXYuY2xhc3NMaXN0ID0gXCJjb250YWN0LWluZm9cIjtcbiAgICBjb25zdCBwaG9uZUltZyA9IG5ldyBJbWFnZSgpO1xuICAgIHBob25lSW1nLnNyYyA9IHBob25lUGljO1xuICAgIGNvbnN0IHBob25lTnVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwaG9uZU51bS50ZXh0Q29udGVudCA9IFwiKCs5MSkgOTgxMjM0NTY3XCI7XG4gICAgcGhvbmVEaXYuYXBwZW5kQ2hpbGQocGhvbmVJbWcpO1xuICAgIHBob25lRGl2LmFwcGVuZENoaWxkKHBob25lTnVtKTtcblxuXG4gICAgY29uc3QgbG9jYXRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxvY2F0aW9uRGl2LmNsYXNzTGlzdCA9IFwiY29udGFjdC1pbmZvXCI7XG4gICAgY29uc3QgbG9jYXRpb25JbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBsb2NhdGlvbkltZy5zcmMgPSBsb2NhdGlvblBpYztcbiAgICBjb25zdCBsb2NhdGlvblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxvY2F0aW9uVGV4dC50ZXh0Q29udGVudCA9IFwiMTAxLCBSYW5kb20gU3RyZWV0LCBEZWxoaSwgSW5kaWFcIjtcbiAgICBsb2NhdGlvbkRpdi5hcHBlbmRDaGlsZChsb2NhdGlvbkltZyk7XG4gICAgbG9jYXRpb25EaXYuYXBwZW5kQ2hpbGQobG9jYXRpb25UZXh0KTtcbiAgICBcbiAgICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKHBob25lRGl2KTtcbiAgICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvY2F0aW9uRGl2KTtcblxuICAgIHJldHVybiBpbmZvQ29udGFpbmVyO1xufVxuXG5leHBvcnQgY29uc3QgbG9hZENvbnRhY3QgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuICAgIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW5EaXYuaWQgPSBcImNvbnRhY3QtbWFpblwiO1xuICAgIG1haW5EaXYuY2xhc3NMaXN0ID0gXCJtYWluXCI7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChtYWluRGl2KTtcblxuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgaGVhZGluZy5jbGFzc0xpc3QgPSBcInBhZ2UtdGl0bGVcIjtcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJDb250YWN0IFVzXCI7XG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZChoZWFkaW5nKTtcblxuICAgIGNvbnN0IGZvcm0gPSBnZW5lcmF0ZUZvcm1EaXYoKTtcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKGZvcm0pXG5cbiAgICBjb25zdCBpbmZvRGl2ID0gZ2VuZXJhdGVDb250YWN0SW5mb0RpdigpO1xuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoaW5mb0Rpdik7XG5cbiAgICBjb25zdCBzaG93ID0gKCkgPT4ge1xuICAgICAgICBtYWluRGl2LnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuICAgIH1cblxuICAgIGNvbnN0IGhpZGUgPSAoKSA9PiB7XG4gICAgICAgIG1haW5EaXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbiAgICByZXR1cm4ge21haW5EaXYsIHNob3csIGhpZGV9O1xufSIsImV4cG9ydCBjb25zdCBsb2FkSGVhZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIik7XG4gICAgXG4gICAgY29uc3QgbG9nb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbG9nb0Rpdi5pZCA9IFwibG9nb1wiO1xuICAgIGxvZ29EaXYudGV4dENvbnRlbnQgPSBcIktoYW5hIEtoYXphbmFcIjtcblxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gICAgY29uc3QgbmF2TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICBcbiAgICBjb25zdCBuYXZIb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpXG4gICAgbmF2SG9tZS50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuICAgIFxuICAgIGNvbnN0IG5hdk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcbiAgICBuYXZNZW51LnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gICAgXG4gICAgY29uc3QgbmF2Q29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKVxuICAgIG5hdkNvbnRhY3QudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcbiAgICBcbiAgICBuYXZMaXN0LmFwcGVuZENoaWxkKG5hdkhvbWUpO1xuICAgIG5hdkxpc3QuYXBwZW5kQ2hpbGQobmF2TWVudSk7XG4gICAgbmF2TGlzdC5hcHBlbmRDaGlsZChuYXZDb250YWN0KTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQobmF2TGlzdClcbiAgICBcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobG9nb0Rpdik7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdik7XG59IiwiXG5leHBvcnQgY29uc3QgbG9hZEhvbWUgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJJbml0aWFsIFBhZ2UgTG9hZFwiKVxuXG5cbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG4gICAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbkRpdi5pZCA9IFwiaG9tZS1tYWluXCI7XG4gICAgbWFpbkRpdi5jbGFzc0xpc3QgPSBcIm1haW5cIjtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKG1haW5EaXYpO1xuXG4gICAgY29uc3QgbG9nb0hlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxvZ29IZWFkaW5nLmlkID0gXCJsb2dvLWhlYWRpbmdcIjtcbiAgICBsb2dvSGVhZGluZy50ZXh0Q29udGVudCA9IFwiS2hhbmEgS2hhemFuYVwiO1xuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQobG9nb0hlYWRpbmcpO1xuXG4gICAgY29uc3QgbG9nb0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxvZ29EZXNjLmlkID0gXCJsb2dvLWRlc2NyaXB0aW9uXCI7XG4gICAgbG9nb0Rlc2MudGV4dENvbnRlbnQgPSBcIlRyZWFzdXJlIGh1bnQgYSBsYXJnZSB2YXJpZXR5IG9mIGN1aXNpbmVzICFcIjtcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKGxvZ29EZXNjKTsgICAgXG5cbiAgICBjb25zdCB2aWV3TWVudUJ1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgdmlld01lbnVCdXQuaWQgPSBcInZpZXctbWVudS1idXRcIjtcbiAgICB2aWV3TWVudUJ1dC50ZXh0Q29udGVudCA9IFwiVmlldyBNZW51XCI7XG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZCh2aWV3TWVudUJ1dCk7ICAgXG5cbiAgICBjb25zdCBzaG93ID0gKCkgPT4ge1xuICAgICAgICBtYWluRGl2LnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuICAgIH1cblxuICAgIGNvbnN0IGhpZGUgPSAoKSA9PiB7XG4gICAgICAgIG1haW5EaXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbiAgICByZXR1cm4ge21haW5EaXYsIHNob3csIGhpZGV9O1xufSIsImNsYXNzIG1lbnVJdGVtIHtcbiAgICBzdGF0aWMgbWVudUFyciA9IFtdO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yIChuYW1lLCBwcmljZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnByaWNlID0gcHJpY2U7XG4gICAgfVxuXG4gICAgYWRkSXRlbSgpIHtcbiAgICAgICAgbWVudUl0ZW0ubWVudUFyci5wdXNoKHRoaXMpXG4gICAgfVxufVxuXG5cbmZ1bmN0aW9uIGluaXRpYXRlSXRlbXMoKSB7XG4gICAgbmV3IG1lbnVJdGVtKFwiQ2hvbGUgQmhhdHVyZVwiLCA5OSkuYWRkSXRlbSgpXG4gICAgbmV3IG1lbnVJdGVtKFwiUGFuZWVyIEJ1dHRlciBNYXNhbGFcIiwgOTkpLmFkZEl0ZW0oKVxuICAgIG5ldyBtZW51SXRlbShcIkNob3dtaW5cIiwgOTkpLmFkZEl0ZW0oKVxuICAgIG5ldyBtZW51SXRlbShcIlBpenphXCIsIDk5KS5hZGRJdGVtKClcbiAgICBuZXcgbWVudUl0ZW0oXCJGcmVuY2ggRnJpZXNcIiwgOTkpLmFkZEl0ZW0oKVxuXG4gICAgcmV0dXJuIG1lbnVJdGVtLm1lbnVBcnI7XG59XG5cbmZ1bmN0aW9uIHNldHVwSXRlbURpdihpdGVtKXtcbiAgICBjb25zdCBpdGVtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpdGVtRGl2LmNsYXNzTGlzdCA9IFwiaXRlbVwiO1xuICAgIFxuICAgIGNvbnN0IGl0ZW1QaWMgPSBuZXcgSW1hZ2UoKTtcbiAgICBjb25zdCBwaWNOYW1lID0gaXRlbS5uYW1lLnRvTG93ZXJDYXNlKCkucmVwbGFjZUFsbChcIiBcIiwgXCItXCIpO1xuICAgIGl0ZW1QaWMuY2xhc3NMaXN0ID0gXCJpdGVtLXBpY1wiO1xuICAgIGl0ZW1QaWMuc3JjID0gcmVxdWlyZShcIi4uL3Jlcy9pbWcvY3Vpc2luZS9cIitwaWNOYW1lK1wiLmpwZ1wiKTtcbiAgICBpdGVtUGljLmFsdCA9IGl0ZW0ubmFtZTtcbiAgICBpdGVtRGl2LmFwcGVuZENoaWxkKGl0ZW1QaWMpO1xuXG4gICAgY29uc3QgaXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGl0ZW1OYW1lLmNsYXNzTGlzdCA9IFwiaXRlbS1uYW1lXCI7XG4gICAgaXRlbU5hbWUudGV4dENvbnRlbnQgPSBpdGVtLm5hbWU7XG4gICAgaXRlbURpdi5hcHBlbmRDaGlsZChpdGVtTmFtZSk7XG5cbiAgICBjb25zdCBpdGVtUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGl0ZW1QcmljZS5jbGFzc0xpc3QgPSBcIml0ZW0tcHJpY2VcIjtcbiAgICBpdGVtUHJpY2UudGV4dENvbnRlbnQgPSBgUnMuICR7aXRlbS5wcmljZX1gO1xuICAgIGl0ZW1EaXYuYXBwZW5kQ2hpbGQoaXRlbVByaWNlKTsgICAgXG5cbiAgICByZXR1cm4gaXRlbURpdjtcbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRNZW51ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbiAgICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluRGl2LmlkID0gXCJtZW51LW1haW5cIjtcbiAgICBtYWluRGl2LmNsYXNzTGlzdCA9IFwibWFpblwiO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobWFpbkRpdik7XG5cbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGhlYWRpbmcuY2xhc3NMaXN0ID0gXCJwYWdlLXRpdGxlXCI7XG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiT3VyIE1lbnVcIjtcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuXG4gICAgY29uc3QgaXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaXRlbUNvbnRhaW5lci5jbGFzc0xpc3QgPSBcIml0ZW1zXCI7XG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZChpdGVtQ29udGFpbmVyKVxuXG4gICAgY29uc3QgaXRlbXNBcnIgPSBpbml0aWF0ZUl0ZW1zKCk7XG4gICAgaXRlbXNBcnIuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgY29uc3QgaXRlbURpdiA9IHNldHVwSXRlbURpdihpdGVtKTtcbiAgICAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtRGl2KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHNob3cgPSAoKSA9PiB7XG4gICAgICAgIG1haW5EaXYuc3R5bGUuZGlzcGxheSA9IFwiXCI7XG4gICAgfVxuXG4gICAgY29uc3QgaGlkZSA9ICgpID0+IHtcbiAgICAgICAgbWFpbkRpdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuICAgIHJldHVybiB7bWFpbkRpdiwgc2hvdywgaGlkZX07XG59IiwidmFyIG1hcCA9IHtcblx0XCIuL2Nob2xlLWJoYXR1cmUuanBnXCI6IFwiLi9zcmMvcmVzL2ltZy9jdWlzaW5lL2Nob2xlLWJoYXR1cmUuanBnXCIsXG5cdFwiLi9jaG93bWluLmpwZ1wiOiBcIi4vc3JjL3Jlcy9pbWcvY3Vpc2luZS9jaG93bWluLmpwZ1wiLFxuXHRcIi4vZnJlbmNoLWZyaWVzLmpwZ1wiOiBcIi4vc3JjL3Jlcy9pbWcvY3Vpc2luZS9mcmVuY2gtZnJpZXMuanBnXCIsXG5cdFwiLi9wYW5lZXItYnV0dGVyLW1hc2FsYS5qcGdcIjogXCIuL3NyYy9yZXMvaW1nL2N1aXNpbmUvcGFuZWVyLWJ1dHRlci1tYXNhbGEuanBnXCIsXG5cdFwiLi9waXp6YS5qcGdcIjogXCIuL3NyYy9yZXMvaW1nL2N1aXNpbmUvcGl6emEuanBnXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL3Jlcy9pbWcvY3Vpc2luZSBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qXFxcXC5qcGckXCI7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7bG9hZEhvbWV9IGZyb20gXCIuL21vZHVsZXMvbG9hZEhvbWUuanNcIlxuaW1wb3J0IHtsb2FkSGVhZGVyfSBmcm9tIFwiLi9tb2R1bGVzL2xvYWRIZWFkZXIuanNcIlxuaW1wb3J0IHtsb2FkQ29udGFjdH0gZnJvbSBcIi4vbW9kdWxlcy9sb2FkQ29udGFjdC5qc1wiXG5pbXBvcnQgJy4vY3NzL3N0eWxlLmNzcydcbmltcG9ydCB7IGxvYWRNZW51IH0gZnJvbSBcIi4vbW9kdWxlcy9sb2FkTWVudS5qc1wiO1xuXG5cbmxvYWRIZWFkZXIoKTtcbmNvbnN0IGhvbWVIYW5kbGVyID0gbG9hZEhvbWUoKTtcbmNvbnN0IG1lbnVIYW5kbGVyID0gbG9hZE1lbnUoKTtcbmNvbnN0IGNvbnRhY3RIYW5kbGVyID0gbG9hZENvbnRhY3QoKTtcblxuXG5tZW51SGFuZGxlci5oaWRlKCk7XG5jb250YWN0SGFuZGxlci5oaWRlKCk7XG5cbmZ1bmN0aW9uIHNob3dPbmx5KGV2ZW50KXtcbiAgICBob21lSGFuZGxlci5oaWRlKCk7XG4gICAgbWVudUhhbmRsZXIuaGlkZSgpO1xuICAgIGNvbnRhY3RIYW5kbGVyLmhpZGUoKTtcblxuICAgIGNvbnN0IHRhcmdldFRleHQgPSBldmVudC50YXJnZXQudGV4dENvbnRlbnQ7XG5cbiAgICBpZiAodGFyZ2V0VGV4dC5pbmRleE9mKFwiSG9tZVwiKSA+IC0xKVxuICAgICAgICBob21lSGFuZGxlci5zaG93KCk7XG4gICAgICAgIGhvbWVIYW5kbGVyLm1haW5EaXYuc3R5bGUuYW5pbWF0aW9uID0gXCI1MDBtcyBzaG93XCI7XG4gICAgaWYgKHRhcmdldFRleHQuaW5kZXhPZihcIk1lbnVcIikgPiAtMSkgXG4gICAgICAgIG1lbnVIYW5kbGVyLnNob3coKTtcbiAgICAgICAgbWVudUhhbmRsZXIubWFpbkRpdi5zdHlsZS5hbmltYXRpb24gPSBcIjUwMG1zIHNob3dcIjtcbiAgICBpZiAodGFyZ2V0VGV4dC5pbmRleE9mKFwiQ29udGFjdFwiKSA+IC0xKSBcbiAgICAgICAgY29udGFjdEhhbmRsZXIuc2hvdygpO1xuICAgICAgICBjb250YWN0SGFuZGxlci5tYWluRGl2LnN0eWxlLmFuaW1hdGlvbiA9IFwiNTAwbXMgc2hvd1wiO1xufVxuXG5jb25zdCBuYXZMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJuYXYgbGlcIik7XG5jb25zdCBuYXZMaW5rc0FyciA9IFsuLi5uYXZMaW5rc107XG5cbm5hdkxpbmtzQXJyLmZvckVhY2gobGluayA9PiB7XG4gICAgbGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd09ubHkpO1xufSlcblxuY29uc3Qgdmlld01lbnVCdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ZpZXctbWVudS1idXRcIik7XG5cbnZpZXdNZW51QnV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93T25seSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9