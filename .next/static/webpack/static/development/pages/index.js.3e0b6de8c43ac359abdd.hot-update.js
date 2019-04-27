webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/antd/lib/_util/raf.js":
false,

/***/ "./node_modules/antd/lib/_util/type.js":
false,

/***/ "./node_modules/antd/lib/_util/wave.js":
false,

/***/ "./node_modules/antd/lib/button/button-group.js":
false,

/***/ "./node_modules/antd/lib/button/button.js":
false,

/***/ "./node_modules/antd/lib/button/index.js":
false,

/***/ "./node_modules/antd/lib/button/style/css.js":
false,

/***/ "./node_modules/css-animation/lib/Event.js":
false,

/***/ "./node_modules/omit.js/es/index.js":
false,

/***/ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js":
false,

/***/ "./pages/index/index.jsx":
/*!*******************************!*\
  !*** ./pages/index/index.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/icon/style/css */ "./node_modules/antd/lib/icon/style/css.js");
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/icon */ "./node_modules/antd/lib/icon/index.js");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var antd_lib_collapse_style_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/collapse/style/css */ "./node_modules/antd/lib/collapse/style/css.js");
/* harmony import */ var antd_lib_collapse_style_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_collapse_style_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_collapse__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/collapse */ "./node_modules/antd/lib/collapse/index.js");
/* harmony import */ var antd_lib_collapse__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_collapse__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _index_styled__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./index.styled */ "./pages/index/index.styled.js");















var Panel = antd_lib_collapse__WEBPACK_IMPORTED_MODULE_10___default.a.Panel;

var Index =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Index, _Component);

  function Index() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Index);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Index).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Index, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_index_styled__WEBPACK_IMPORTED_MODULE_14__["StyledIndex"], null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h1", null, "\u8FFD\u4E66\u795E\u5668\u63A5\u53E3"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", null, "\u8FFD\u4E66\u795E\u5668\u63A5\u53E3\u4E8C\u6B21\u5C01\u88C5\uFF0C\u6587\u6863\u5B8C\u5584\uFF0C\u4F7F\u7528\u65B9\u4FBF"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", null, "\u67E5\u770B\u6587\u6863\uFF1A", react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("a", {
        href: "https://xiadd.github.io/zhuishushenqi/",
        target: "_blank",
        rel: "noopener noreferrer"
      }, "\u6587\u6863")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", null, "Repo: ", react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("a", {
        href: "https://github.com/xiadd/zhuishushenq",
        target: "_blank",
        rel: "noopener noreferrer"
      }, "GITHUB")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", null, "Made by ", react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("a", {
        href: "https://github.com/xiadd",
        target: "_blank",
        rel: "noopener noreferrer"
      }, "xiadd")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_collapse__WEBPACK_IMPORTED_MODULE_10___default.a, {
        bordered: false,
        expandIcon: function expandIcon(_ref) {
          var isActive = _ref.isActive;
          return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
            type: "caret-right",
            rotate: isActive ? 90 : 0
          });
        }
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Panel, {
        className: "system-info",
        header: "\u7CFB\u7EDF\u4FE1\u606F",
        key: "1",
        style: {
          background: '#fff',
          borderRadius: 4,
          marginBottom: 24,
          border: 0,
          overflow: 'auto'
        }
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "debug-item"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
        className: "debug-key"
      }, "git hash: "), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
        className: "debug-value"
      }, this.props.gitHash.slice(0, 7))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "debug-item"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
        className: "debug-key"
      }, "\u5185\u5B58\u5360\u7528: "), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
        className: "debug-value"
      }, this.props.memory, " m")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "debug-item"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
        className: "debug-key"
      }, "\u8FD0\u884C\u65F6\u95F4: "), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
        className: "debug-value"
      }, this.props.runTime, " s")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "debug-item"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
        className: "debug-key"
      }, "\u8BF7\u6C42\u6570: "), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
        className: "debug-value"
      }, this.props.requestCount)), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "debug-item"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
        className: "debug-key"
      }, "\u70ED\u95E8\u8DEF\u7531: "), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
        className: "debug-value",
        dangerouslySetInnerHTML: {
          __html: this.props.hotRoutesValue
        }
      })))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var systemInfo;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_12___default.a.get('http://127.0.0.1:8080/system');

              case 2:
                systemInfo = _context.sent;
                return _context.abrupt("return", systemInfo.data);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.3e0b6de8c43ac359abdd.hot-update.js.map