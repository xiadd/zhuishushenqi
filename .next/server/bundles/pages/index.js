module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_es_row__ = __webpack_require__("antd/es/row");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_es_row___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_es_row__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_es_col__ = __webpack_require__("antd/es/col");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_es_col___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_es_col__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_es_icon__ = __webpack_require__("antd/es/icon");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_es_icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd_es_icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_es_collapse__ = __webpack_require__("antd/es/collapse");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_es_collapse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_antd_es_collapse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_axios__);





var _jsxFileName = "/Users/xiadd/Documents/node_projects/zhuishushenqi/pages/index.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Wrapper = __WEBPACK_IMPORTED_MODULE_6_styled_components___default()("div").withConfig({
  displayName: "pages__Wrapper",
  componentId: "nnjbnk-0"
})(["height:100vh;display:flex;width:100vw;align-items:center;justify-content:center;font-family:'PingFang SC','Microsoft YaHei','Lantinghei SC','Source Han Sans SC','Noto Sans CJK SC','WenQuanYi Micro Hei','sans-serif','SimSun';background:#fff;flex-direction:column;h1,h5,p{font-weight:300;color:#444;width:500px;text-align:center}.ant-collapse{border:none;width:400px;background:#f5f5f5}.ant-collapse-content-box{background:#f5f5f5;text-align:left;max-height:300px;overflow-y:auto;overflow-x:hidden;}.ant-collapse-content-box p{text-align:left}.ant-collapse-item{border:none}.debug-name{text-align:left;font-size:.8rem}.debug-value{text-align:left;font-size:.8rem}.ant-row{margin-bottom:1rem;}"]);
var Panel = __WEBPACK_IMPORTED_MODULE_4_antd_es_collapse___default.a.Panel;

var Index =
/*#__PURE__*/
function (_Component) {
  _inherits(Index, _Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
  }

  _createClass(Index, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Wrapper, {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_es_icon___default.a, {
        type: "book",
        style: {
          color: '#d32122'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }), " \u8FFD\u4E66\u795E\u5668"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, "\u57FA\u4E8Ekoa+react.js+next.js\u7684\u8FFD\u4E66\u795E\u5668\u63A5\u53E3"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, "\u4E66\u7C4D\u5168\u9762, \u53EF\u6362\u6E90, \u5B9E\u65F6\u66F4\u65B0, \u66F4\u91CD\u8981\u7684\u662F\u53EF\u4EE5\u4E00\u8D77\u5B66\u4E60nodejs+react."), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, "\u6587\u6863\u8BF7\u67E5\u770B: ", __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("a", {
        href: "https://xiadd.github.io/zhuishushenqi",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, "https://xiadd.github.io/zhuishushenqi")), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, "-- Made with \u2764\uFE0F by ", __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("a", {
        href: "http://github.com/xiadd",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, "xiadd")), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_antd_es_collapse___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Panel, {
        header: "\u8C03\u8BD5\u4FE1\u606F",
        key: "1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_es_row___default.a, {
        gutter: 16,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_es_col___default.a, {
        span: 8,
        className: "debug-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, "git hash"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_es_col___default.a, {
        span: 16,
        className: "debut-value",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, this.props.gitHash.slice(0, 7))), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_es_row___default.a, {
        gutter: 16,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_es_col___default.a, {
        span: 8,
        className: "debug-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, "\u5185\u5B58\u5360\u7528"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_es_col___default.a, {
        span: 16,
        className: "debut-value",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, this.props.memory, " m")), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_es_row___default.a, {
        gutter: 16,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_es_col___default.a, {
        span: 8,
        className: "debug-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, "\u8FD0\u884C\u65F6\u95F4"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_es_col___default.a, {
        span: 16,
        className: "debut-value",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, this.props.runTime, " s")), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_es_row___default.a, {
        gutter: 16,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_es_col___default.a, {
        span: 8,
        className: "debug-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, "\u64CD\u4F5C\u7CFB\u7EDF"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_es_col___default.a, {
        span: 16,
        className: "debut-value",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, this.props.systemPlatform)), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_es_row___default.a, {
        gutter: 16,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_es_col___default.a, {
        span: 8,
        className: "debug-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, "\u5BA2\u6237\u7AEFip"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_es_col___default.a, {
        span: 16,
        className: "debut-value",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, this.props.clientIp)))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
        var systemInfo;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return __WEBPACK_IMPORTED_MODULE_7_axios___default.a.get('http://127.0.0.1:8080/system');

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
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.jsx");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "antd/es/col":
/***/ (function(module, exports) {

module.exports = require("antd/es/col");

/***/ }),

/***/ "antd/es/collapse":
/***/ (function(module, exports) {

module.exports = require("antd/es/collapse");

/***/ }),

/***/ "antd/es/icon":
/***/ (function(module, exports) {

module.exports = require("antd/es/icon");

/***/ }),

/***/ "antd/es/row":
/***/ (function(module, exports) {

module.exports = require("antd/es/row");

/***/ }),

/***/ "axios":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map