/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/particle.js":
/*!*************************!*\
  !*** ./src/particle.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Particle": () => (/* binding */ Particle)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Particle = /*#__PURE__*/function () {
  function Particle(color, x) {
    _classCallCheck(this, Particle);

    this.color = color;
    this.x = x;
    this.fixedY = 0;
    this.speedY = 2;
    this.positionY = 0;
    this.gravity = Math.random() * 0.3;
  }

  _createClass(Particle, [{
    key: "animate",
    value: function animate(ctx, stageHeight) {
      this.speedY += this.gravity;
      this.positionY += this.speedY;
      ctx.beginPath();
      ctx.fillStyle = "".concat(this.color);
      ctx.arc(this.x, this.positionY, 1, 0, 2 * Math.PI, false);
      ctx.fill();

      if (this.positionY > stageHeight) {
        this.positionY = 0;
        this.speedY -= 10;
      }
    }
  }]);

  return Particle;
}();

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\r\n* ::before,\r\n* ::after {\r\n    box-sizing: border-box;\r\n}\r\n\r\n:root{\r\n    font-size: 16px;\r\n}\r\n\r\nbody{\r\n    margin: 0;\r\n    --color-text: #dc0f3e;\r\n\t--color-bg: #000;\r\n\t--color-link: #5f5f5f;\r\n\t--color-link-hover: #000;\r\n\t--color-hint: #fff;\r\n\t--color-enter: #dc0f3e;\r\n\t--color-enter-hover: #fff;\r\n    color: whitesmoke;\r\n    background-color: #1b1b1b;\r\n    font-family: 'Times New Roman', Times, serif;\r\n    -webkit-font-smoothing : antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n    font-weight: 500;\r\n}\r\n\r\ncanvas{\r\n    width: 100vw;\r\n    height: 100vh;\r\n}\r\n\r\n.frame__title {\r\n    font-size: 2rem;\r\n    text-transform: capitalize;\r\n    margin: 0;\r\n    font-weight: normal;\r\n}\r\n\r\n.js .loading::before,\r\n.js .loading::after{\r\n    content: '';\r\n    position: fixed;\r\n    z-index: 1000;\r\n}\r\n\r\n.js .loading::before{\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: #000;\r\n}\r\n\r\n.js .loading::after {\r\n\ttop: 50%;\r\n\tleft: 50%;\r\n\twidth: 60px;\r\n\theight: 60px;\r\n\tmargin: -30px 0 0 -30px;\r\n\tborder-radius: 50%;\r\n\topacity: 0.4;\r\n\tbackground: var(--color-link);\r\n\tanimation: loaderAnim 0.7s linear infinite alternate forwards;\r\n\r\n}\r\n\r\n\r\nbody {\r\n\t--button-border-radius: 7px;\r\n    --button-bg: transparent;\r\n    --button-stroke: #d8d4cf;\r\n    --button-stroke-width: 0px;\r\n    --button-text: #000;\r\n    --button-bg-hover: #000;\r\n    --button-stroke-hover: #000;\r\n    --button-stroke-width-hover: 0px;\r\n    --button-text-hover: #000;\r\n    --button-text-focus: red;\r\n    --cursor-stroke: red;\r\n    --cursor-fill: red;\r\n    --cursor-stroke-width: 0px;\r\n\t--button-bg-text: #e0d9d2;\r\n\t--color-bg: #d6ccc1;\r\n\r\n\t--_bg-light : white;\r\n\t--_bg-dark : black;\r\n\t--_bg : var(--_bg-light);\r\n\r\n\t--_accent-light : hsl(210 100% 40%);\r\n\t--_accent-dark : hsl(210 50% 70%);\r\n\t--_accent : var(--_accent-light);\r\n\r\n\t--_shadow-depth-light: 0 1px var(--_border-light);\r\n    --_shadow-depth-dark: 0 1px var(--_bg-dark);\r\n    --_shadow-depth: var(--_shadow-depth-light);\r\n\r\n\t--_shadow-2: \r\n  0 3px 5px -2px hsl(var(--_shadow-color)/calc(var(--_shadow-strength) + 3%)),\r\n  0 7px 14px -5px hsl(var(--_shadow-color)/calc(var(--_shadow-strength) + 5%));\r\n}\r\n\r\n.button {\r\n\tcursor: pointer;\r\n\t-moz-appearance: none;\r\n\t-webkit-appearance: none;\r\n\tborder-width: var(--button-stroke-width);\r\n\tborder-color: var(--button-stroke);\r\n\tborder-style: solid;\r\n\tcolor: var(--button-text);\r\n\tbackground: var(--button-bg);\r\n\tborder-radius: var(--button-border-radius);\r\n\tmin-width: 12rem;\r\n\theight: 6rem;\r\n\tpadding: 1.5rem 3rem;\r\n\tmargin: 0;\r\n\tfont-family: inherit;\r\n\tfont-size: 1.5rem;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tpointer-events : auto;\r\n}\r\n\r\n\r\n\r\n.button:focus,\r\n.button--hover {\r\n\toutline: none;\r\n\tborder-width: var(--button-stroke-width-hover);\r\n\tborder-color: var(--button-stroke-hover);\r\n\tcolor: var(--button-text-hover);\r\n}\r\n\r\n.button:focus {\r\n\tcolor: var(--button-text-focus);\r\n}\r\n\r\n.button::before {\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\ttop: 5px;\r\n\tleft: 5px;\r\n\twidth: calc(100% - 10px);\r\n\theight: calc(100% - 10px);\r\n\tbackground: rgba(0,0,0,0.3);\r\n\tfilter: blur(13px);\r\n\tborder-radius: var(--button-border-radius);\r\n}\r\n\r\n.button__text, \r\n.button__text-inner {\r\n\tposition: relative;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n}\r\n\r\n.button__text {\r\n\tflex: none;\r\n\tbackground: var(--button-bg-text);\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tborder-radius: var(--button-border-radius);\r\n}\r\n\r\n.button--calypso:is(:hover, :focus) {\r\n\tbackground-color: #111;\r\n}\r\n\r\narticle {\r\n\tdisplay : flex;\r\n\tflex-direction : column;\r\n\talign-items : center;\r\n\tjustify-content : end;\r\n\tpadding-bottom : 40px;\r\n}\r\n\r\n@media (prefers-color-scheme: dark){\r\n\tbutton{\r\n\t\t--_bg: var(--_bg-dark);\r\n\t}\r\n}\r\n\r\n:is(.button--calypso, .button--calypso1, .button--calypso2, .button--calypso3, .button--calypso4) {\r\n\tbackground-color : rgba(0, 0, 0, 0.5);\r\n\tpadding : 0.75rem 1.5rem;\r\n\tmargin: 0;\r\n\tdisplay: inline-block;\r\n\talign-items: center;\r\n\toverflow: hidden;\r\n\tfont-family : freight-big-pro, serif;\r\n\tfont-weight : 900;\r\n\tfont-style : normal;\r\n\tfont-size : 1.15rem;\r\n\tborder-style: none;\r\n\tborder-radius : 0.7rem;\r\n\tcolor: #fff;\r\n}\r\n\r\n:is(.button--calypso, .button--calypso1, .button--calypso2, .button--calypso3, .button--calypso4) span {\r\n\tdisplay : flex;\r\n\talign-items: center;\r\n\talign-content: center;\r\n\tposition : relative;\r\n\tmix-blend-mode : difference;\r\n\tz-index : 10;\r\n}\r\n\r\n:is(.button--calypso, .button--calypso1, .button--calypso2, .button--calypso3, .button--calypso4):hover span {\r\n\tanimation: MoveScaleUpInitial 0.3s forwards, MoveScaleUpEnd 0.3s forwards 0.3s;\r\n}\r\n\r\n:is(.button--calypso, .button--calypso1, .button--calypso2, .button--calypso3, .button--calypso4)::before {\r\n\tcontent : '';\r\n\tbackground : rgba(0 0 0 0.3);\r\n\tbox-sizing : border-box;\r\n\twidth : 120%;\r\n\theight : 0;\r\n\tpadding-bottom : 120%;\r\n\ttop : -110%;\r\n\tleft : -10%;\r\n\tborder-radius : 50%;\r\n\ttransform : translate(0, 68%, 0) scale3d(0, 0, 0);\r\n}\r\n\r\n:is(.button--calypso, .button--calypso1, .button--calypso2, .button--calypso3, .button--calypso4):hover::before {\r\n\ttransform : translate(0, 0, 0) scale3d(1, 1, 1);\r\n\ttransition : transform 0.4s cubic-bezier(0.1, 0, 0.3 ,1);\r\n}\r\n\r\n:is(.button--calypso, .button--calypso1, .button--calypso2, .button--calypso3, .button--calypso4)::after {\r\n\tcontent : '';\r\n\tbox-sizing : border-box;\r\n\tbackground : #000;\r\n\ttransform: translate3d(0,-100%,0);\r\n    transition: transform 0.4s cubic-bezier(0.1, 0, 0.3, 1);\r\n}\r\n\r\n:is(.button--calypso, .button--calypso1, .button--calypso2, .button--calypso3, .button--calypso4):hover::after {\r\n\ttransform: translate(0, 0, 0);\r\n\ttransition-duration: 0.05s;\r\n\ttransition-delay: 0.4s;\r\n\ttransition-timing-function: linear;\r\n}\r\n\r\n@keyframes MoveScaleUpInitial {\r\n\tto {\r\n\t\ttransform: translate3d(0,-105%,0) scale3d(1,2,1);\r\n\t\topacity: 0;\r\n\t}\r\n}\r\n\r\n@keyframes MoveScaleUpEnd{\r\n\tfrom {\r\n\t\ttransform: translate3d(0,100%,0) scale3d(1,2,1);\r\n\t\topacity: 0;\r\n\t}\r\n\tto {\r\n\t\ttransform: translate3d(0,0,0);\r\n\t\topacity: 1;\r\n\t}\r\n}\r\n\r\n.story{\r\n\tposition: absolute;\r\n\tbottom: 25px;\r\n\tleft: 50%;\r\n  }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["*,\r\n* ::before,\r\n* ::after {\r\n    box-sizing: border-box;\r\n}\r\n\r\n:root{\r\n    font-size: 16px;\r\n}\r\n\r\nbody{\r\n    margin: 0;\r\n    --color-text: #dc0f3e;\r\n\t--color-bg: #000;\r\n\t--color-link: #5f5f5f;\r\n\t--color-link-hover: #000;\r\n\t--color-hint: #fff;\r\n\t--color-enter: #dc0f3e;\r\n\t--color-enter-hover: #fff;\r\n    color: whitesmoke;\r\n    background-color: #1b1b1b;\r\n    font-family: 'Times New Roman', Times, serif;\r\n    -webkit-font-smoothing : antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n    font-weight: 500;\r\n}\r\n\r\ncanvas{\r\n    width: 100vw;\r\n    height: 100vh;\r\n}\r\n\r\n.frame__title {\r\n    font-size: 2rem;\r\n    text-transform: capitalize;\r\n    margin: 0;\r\n    font-weight: normal;\r\n}\r\n\r\n.js .loading::before,\r\n.js .loading::after{\r\n    content: '';\r\n    position: fixed;\r\n    z-index: 1000;\r\n}\r\n\r\n.js .loading::before{\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: #000;\r\n}\r\n\r\n.js .loading::after {\r\n\ttop: 50%;\r\n\tleft: 50%;\r\n\twidth: 60px;\r\n\theight: 60px;\r\n\tmargin: -30px 0 0 -30px;\r\n\tborder-radius: 50%;\r\n\topacity: 0.4;\r\n\tbackground: var(--color-link);\r\n\tanimation: loaderAnim 0.7s linear infinite alternate forwards;\r\n\r\n}\r\n\r\n\r\nbody {\r\n\t--button-border-radius: 7px;\r\n    --button-bg: transparent;\r\n    --button-stroke: #d8d4cf;\r\n    --button-stroke-width: 0px;\r\n    --button-text: #000;\r\n    --button-bg-hover: #000;\r\n    --button-stroke-hover: #000;\r\n    --button-stroke-width-hover: 0px;\r\n    --button-text-hover: #000;\r\n    --button-text-focus: red;\r\n    --cursor-stroke: red;\r\n    --cursor-fill: red;\r\n    --cursor-stroke-width: 0px;\r\n\t--button-bg-text: #e0d9d2;\r\n\t--color-bg: #d6ccc1;\r\n\r\n\t--_bg-light : white;\r\n\t--_bg-dark : black;\r\n\t--_bg : var(--_bg-light);\r\n\r\n\t--_accent-light : hsl(210 100% 40%);\r\n\t--_accent-dark : hsl(210 50% 70%);\r\n\t--_accent : var(--_accent-light);\r\n\r\n\t--_shadow-depth-light: 0 1px var(--_border-light);\r\n    --_shadow-depth-dark: 0 1px var(--_bg-dark);\r\n    --_shadow-depth: var(--_shadow-depth-light);\r\n\r\n\t--_shadow-2: \r\n  0 3px 5px -2px hsl(var(--_shadow-color)/calc(var(--_shadow-strength) + 3%)),\r\n  0 7px 14px -5px hsl(var(--_shadow-color)/calc(var(--_shadow-strength) + 5%));\r\n}\r\n\r\n.button {\r\n\tcursor: pointer;\r\n\t-moz-appearance: none;\r\n\t-webkit-appearance: none;\r\n\tborder-width: var(--button-stroke-width);\r\n\tborder-color: var(--button-stroke);\r\n\tborder-style: solid;\r\n\tcolor: var(--button-text);\r\n\tbackground: var(--button-bg);\r\n\tborder-radius: var(--button-border-radius);\r\n\tmin-width: 12rem;\r\n\theight: 6rem;\r\n\tpadding: 1.5rem 3rem;\r\n\tmargin: 0;\r\n\tfont-family: inherit;\r\n\tfont-size: 1.5rem;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tpointer-events : auto;\r\n}\r\n\r\n\r\n\r\n.button:focus,\r\n.button--hover {\r\n\toutline: none;\r\n\tborder-width: var(--button-stroke-width-hover);\r\n\tborder-color: var(--button-stroke-hover);\r\n\tcolor: var(--button-text-hover);\r\n}\r\n\r\n.button:focus {\r\n\tcolor: var(--button-text-focus);\r\n}\r\n\r\n.button::before {\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\ttop: 5px;\r\n\tleft: 5px;\r\n\twidth: calc(100% - 10px);\r\n\theight: calc(100% - 10px);\r\n\tbackground: rgba(0,0,0,0.3);\r\n\tfilter: blur(13px);\r\n\tborder-radius: var(--button-border-radius);\r\n}\r\n\r\n.button__text, \r\n.button__text-inner {\r\n\tposition: relative;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n}\r\n\r\n.button__text {\r\n\tflex: none;\r\n\tbackground: var(--button-bg-text);\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tborder-radius: var(--button-border-radius);\r\n}\r\n\r\n.button--calypso:is(:hover, :focus) {\r\n\tbackground-color: #111;\r\n}\r\n\r\narticle {\r\n\tdisplay : flex;\r\n\tflex-direction : column;\r\n\talign-items : center;\r\n\tjustify-content : end;\r\n\tpadding-bottom : 40px;\r\n}\r\n\r\n@media (prefers-color-scheme: dark){\r\n\tbutton{\r\n\t\t--_bg: var(--_bg-dark);\r\n\t}\r\n}\r\n\r\n:is(.button--calypso, .button--calypso1, .button--calypso2, .button--calypso3, .button--calypso4) {\r\n\tbackground-color : rgba(0, 0, 0, 0.5);\r\n\tpadding : 0.75rem 1.5rem;\r\n\tmargin: 0;\r\n\tdisplay: inline-block;\r\n\talign-items: center;\r\n\toverflow: hidden;\r\n\tfont-family : freight-big-pro, serif;\r\n\tfont-weight : 900;\r\n\tfont-style : normal;\r\n\tfont-size : 1.15rem;\r\n\tborder-style: none;\r\n\tborder-radius : 0.7rem;\r\n\tcolor: #fff;\r\n}\r\n\r\n:is(.button--calypso, .button--calypso1, .button--calypso2, .button--calypso3, .button--calypso4) span {\r\n\tdisplay : flex;\r\n\talign-items: center;\r\n\talign-content: center;\r\n\tposition : relative;\r\n\tmix-blend-mode : difference;\r\n\tz-index : 10;\r\n}\r\n\r\n:is(.button--calypso, .button--calypso1, .button--calypso2, .button--calypso3, .button--calypso4):hover span {\r\n\tanimation: MoveScaleUpInitial 0.3s forwards, MoveScaleUpEnd 0.3s forwards 0.3s;\r\n}\r\n\r\n:is(.button--calypso, .button--calypso1, .button--calypso2, .button--calypso3, .button--calypso4)::before {\r\n\tcontent : '';\r\n\tbackground : rgba(0 0 0 0.3);\r\n\tbox-sizing : border-box;\r\n\twidth : 120%;\r\n\theight : 0;\r\n\tpadding-bottom : 120%;\r\n\ttop : -110%;\r\n\tleft : -10%;\r\n\tborder-radius : 50%;\r\n\ttransform : translate(0, 68%, 0) scale3d(0, 0, 0);\r\n}\r\n\r\n:is(.button--calypso, .button--calypso1, .button--calypso2, .button--calypso3, .button--calypso4):hover::before {\r\n\ttransform : translate(0, 0, 0) scale3d(1, 1, 1);\r\n\ttransition : transform 0.4s cubic-bezier(0.1, 0, 0.3 ,1);\r\n}\r\n\r\n:is(.button--calypso, .button--calypso1, .button--calypso2, .button--calypso3, .button--calypso4)::after {\r\n\tcontent : '';\r\n\tbox-sizing : border-box;\r\n\tbackground : #000;\r\n\ttransform: translate3d(0,-100%,0);\r\n    transition: transform 0.4s cubic-bezier(0.1, 0, 0.3, 1);\r\n}\r\n\r\n:is(.button--calypso, .button--calypso1, .button--calypso2, .button--calypso3, .button--calypso4):hover::after {\r\n\ttransform: translate(0, 0, 0);\r\n\ttransition-duration: 0.05s;\r\n\ttransition-delay: 0.4s;\r\n\ttransition-timing-function: linear;\r\n}\r\n\r\n@keyframes MoveScaleUpInitial {\r\n\tto {\r\n\t\ttransform: translate3d(0,-105%,0) scale3d(1,2,1);\r\n\t\topacity: 0;\r\n\t}\r\n}\r\n\r\n@keyframes MoveScaleUpEnd{\r\n\tfrom {\r\n\t\ttransform: translate3d(0,100%,0) scale3d(1,2,1);\r\n\t\topacity: 0;\r\n\t}\r\n\tto {\r\n\t\ttransform: translate3d(0,0,0);\r\n\t\topacity: 1;\r\n\t}\r\n}\r\n\r\n.story{\r\n\tposition: absolute;\r\n\tbottom: 25px;\r\n\tleft: 50%;\r\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _particle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./particle.js */ "./src/particle.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var COLOR = ['hsl(0,0%,100%)', "hsl(0,0%,80%)", "hsl(0,0%,60%)", "hsl(0,0%,40%)", "hsl(0,0%,20%)"];

var App = /*#__PURE__*/function () {
  function App() {
    _classCallCheck(this, App);

    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    document.body.appendChild(this.canvas);
    this.pixel = window.devicePixelRatio > 1 ? 2 : 1;
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
    this.updatePositionX(this.stageWidth);
    this.create();
    window.requestAnimationFrame(this.draw.bind(this));
  }

  _createClass(App, [{
    key: "create",
    value: function create() {
      this.particle = [];

      for (var i = 0; i < 1000; i++) {
        var curColor = Math.floor(Math.random() * 4);
        var item = new _particle_js__WEBPACK_IMPORTED_MODULE_0__.Particle(COLOR[curColor], this.positionX[i]);
        this.particle[i] = item;
      }
    }
  }, {
    key: "updatePositionX",
    value: function updatePositionX(stageWidth) {
      this.positionX = [];

      for (var i = 0; i < 1000; i++) {
        var x = Math.random() * stageWidth;
        this.positionX[i] = x;
      }
    }
  }, {
    key: "resize",
    value: function resize() {
      this.stageWidth = document.body.clientWidth;
      this.stageHeight = document.body.clientHeight;
      this.centalX = this.stageWidth / 2;
      this.centalY = this.stageHeight / 2;
      this.canvas.width = this.stageWidth * this.pixel;
      this.canvas.height = this.stageHeight * this.pixel;
      this.ctx.scale(this.pixel, this.pixel);
    }
  }, {
    key: "draw",
    value: function draw() {
      window.requestAnimationFrame(this.draw.bind(this));
      this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

      for (var i = 0; i < 1000; i++) {
        var rain = this.particle[i];
        rain.animate(this.ctx, this.stageHeight);
      }
    }
  }]);

  return App;
}();

window.onload = function () {
  new App();
};
})();

/******/ })()
;
//# sourceMappingURL=bundlebbae3e91db4e4c4db7ab.js.map