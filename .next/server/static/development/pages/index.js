module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_es_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/row */ "antd/es/row");
/* harmony import */ var antd_es_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_es_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_es_col__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/es/col */ "antd/es/col");
/* harmony import */ var antd_es_col__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_es_col__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_es_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/es/icon */ "antd/es/icon");
/* harmony import */ var antd_es_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_es_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_es_collapse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/es/collapse */ "antd/es/collapse");
/* harmony import */ var antd_es_collapse__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_es_collapse__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);






function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_7___default()("div").withConfig({
  displayName: "pages__Wrapper",
  componentId: "nnjbnk-0"
})(["height:100vh;display:flex;width:100vw;align-items:center;justify-content:center;font-family:'PingFang SC','Microsoft YaHei','Lantinghei SC','Source Han Sans SC','Noto Sans CJK SC','WenQuanYi Micro Hei','sans-serif','SimSun';background:#fff;flex-direction:column;h1,h5,p{font-weight:300;color:#444;width:500px;text-align:center}.ant-collapse{border:none;width:400px;background:#f5f5f5}.ant-collapse-content-box{background:#f5f5f5;text-align:left;max-height:300px;overflow-y:auto;overflow-x:hidden;}.ant-collapse-content-box p{text-align:left}.ant-collapse-item{border:none}.debug-name{text-align:left;font-size:.8rem}.debug-value{text-align:left;font-size:.8rem}.ant-row{margin-bottom:1rem;}"]);
var Panel = antd_es_collapse__WEBPACK_IMPORTED_MODULE_4___default.a.Panel;

var Index =
/*#__PURE__*/
function (_Component) {
  _inherits(Index, _Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, _getPrototypeOf(Index).apply(this, arguments));
  }

  _createClass(Index, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Wrapper, {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("title", null, "\u8FFD\u4E66\u795E\u5668")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_es_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "book",
        style: {
          color: '#d32122'
        }
      }), " \u8FFD\u4E66\u795E\u5668"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h5", null, "\u57FA\u4E8Ekoa+react.js+next.js\u7684\u8FFD\u4E66\u795E\u5668\u63A5\u53E3"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "\u4E66\u7C4D\u5168\u9762, \u53EF\u6362\u6E90, \u5B9E\u65F6\u66F4\u65B0, \u66F4\u91CD\u8981\u7684\u662F\u53EF\u4EE5\u4E00\u8D77\u5B66\u4E60nodejs+react."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "\u6587\u6863\u8BF7\u67E5\u770B: ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "https://xiadd.github.io/zhuishushenqi"
      }, "https://xiadd.github.io/zhuishushenqi")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "-- Made with \u2764\uFE0F by ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "http://github.com/xiadd"
      }, "xiadd")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_es_collapse__WEBPACK_IMPORTED_MODULE_4___default.a, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Panel, {
        header: "\u8C03\u8BD5\u4FE1\u606F",
        key: "1"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_es_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
        gutter: 16
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_es_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
        span: 8,
        className: "debug-name"
      }, "git hash"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_es_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
        span: 16,
        className: "debut-value"
      }, this.props.gitHash.slice(0, 7))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_es_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
        gutter: 16
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_es_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
        span: 8,
        className: "debug-name"
      }, "\u5185\u5B58\u5360\u7528"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_es_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
        span: 16,
        className: "debut-value"
      }, this.props.memory, " m")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_es_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
        gutter: 16
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_es_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
        span: 8,
        className: "debug-name"
      }, "\u8FD0\u884C\u65F6\u95F4"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_es_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
        span: 16,
        className: "debut-value"
      }, this.props.runTime, " s")))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var systemInfo;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_8___default.a.get('http://127.0.0.1:8080/system');

              case 2:
                systemInfo = _context.sent;
                return _context.abrupt("return", systemInfo.data);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.jsx */"./pages/index.jsx");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "antd/es/col":
/*!******************************!*\
  !*** external "antd/es/col" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/es/col");

/***/ }),

/***/ "antd/es/collapse":
/*!***********************************!*\
  !*** external "antd/es/collapse" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/es/collapse");

/***/ }),

/***/ "antd/es/icon":
/*!*******************************!*\
  !*** external "antd/es/icon" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/es/icon");

/***/ }),

/***/ "antd/es/row":
/*!******************************!*\
  !*** external "antd/es/row" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/es/row");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map