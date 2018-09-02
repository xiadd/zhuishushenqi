webpackHotUpdate(5,{

/***/ "./node_modules/antd/es/col/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grid__ = __webpack_require__("./node_modules/antd/es/grid/index.js");

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__grid__["a" /* Col */]);

/***/ }),

/***/ "./node_modules/antd/es/grid/col.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof__ = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_classnames__);







var __rest = this && this.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};



var stringOrNumber = __WEBPACK_IMPORTED_MODULE_8_prop_types__["oneOfType"]([__WEBPACK_IMPORTED_MODULE_8_prop_types__["string"], __WEBPACK_IMPORTED_MODULE_8_prop_types__["number"]]);
var objectOrNumber = __WEBPACK_IMPORTED_MODULE_8_prop_types__["oneOfType"]([__WEBPACK_IMPORTED_MODULE_8_prop_types__["object"], __WEBPACK_IMPORTED_MODULE_8_prop_types__["number"]]);

var Col = function (_React$Component) {
    __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(Col, _React$Component);

    function Col() {
        __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, Col);

        return __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Col.__proto__ || Object.getPrototypeOf(Col)).apply(this, arguments));
    }

    __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(Col, [{
        key: 'render',
        value: function render() {
            var _classNames;

            var props = this.props;

            var span = props.span,
                order = props.order,
                offset = props.offset,
                push = props.push,
                pull = props.pull,
                className = props.className,
                children = props.children,
                _props$prefixCls = props.prefixCls,
                prefixCls = _props$prefixCls === undefined ? 'ant-col' : _props$prefixCls,
                others = __rest(props, ["span", "order", "offset", "push", "pull", "className", "children", "prefixCls"]);

            var sizeClassObj = {};
            ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].forEach(function (size) {
                var _extends2;

                var sizeProps = {};
                if (typeof props[size] === 'number') {
                    sizeProps.span = props[size];
                } else if (__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof___default()(props[size]) === 'object') {
                    sizeProps = props[size] || {};
                }
                delete others[size];
                sizeClassObj = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, sizeClassObj, (_extends2 = {}, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_extends2, prefixCls + '-' + size + '-' + sizeProps.span, sizeProps.span !== undefined), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_extends2, prefixCls + '-' + size + '-order-' + sizeProps.order, sizeProps.order || sizeProps.order === 0), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_extends2, prefixCls + '-' + size + '-offset-' + sizeProps.offset, sizeProps.offset || sizeProps.offset === 0), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_extends2, prefixCls + '-' + size + '-push-' + sizeProps.push, sizeProps.push || sizeProps.push === 0), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_extends2, prefixCls + '-' + size + '-pull-' + sizeProps.pull, sizeProps.pull || sizeProps.pull === 0), _extends2));
            });
            var classes = __WEBPACK_IMPORTED_MODULE_9_classnames___default()((_classNames = {}, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_classNames, prefixCls + '-' + span, span !== undefined), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_classNames, prefixCls + '-order-' + order, order), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_classNames, prefixCls + '-offset-' + offset, offset), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_classNames, prefixCls + '-push-' + push, push), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_classNames, prefixCls + '-pull-' + pull, pull), _classNames), className, sizeClassObj);
            return __WEBPACK_IMPORTED_MODULE_7_react__["createElement"](
                'div',
                __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, others, { className: classes }),
                children
            );
        }
    }]);

    return Col;
}(__WEBPACK_IMPORTED_MODULE_7_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Col);

Col.propTypes = {
    span: stringOrNumber,
    order: stringOrNumber,
    offset: stringOrNumber,
    push: stringOrNumber,
    pull: stringOrNumber,
    className: __WEBPACK_IMPORTED_MODULE_8_prop_types__["string"],
    children: __WEBPACK_IMPORTED_MODULE_8_prop_types__["node"],
    xs: objectOrNumber,
    sm: objectOrNumber,
    md: objectOrNumber,
    lg: objectOrNumber,
    xl: objectOrNumber,
    xxl: objectOrNumber
};

/***/ }),

/***/ "./node_modules/antd/es/grid/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__row__ = __webpack_require__("./node_modules/antd/es/grid/row.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__col__ = __webpack_require__("./node_modules/antd/es/grid/col.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__row__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__col__["a"]; });




/***/ }),

/***/ "./node_modules/antd/es/grid/row.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof__ = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_prop_types__);







var __rest = this && this.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
// matchMedia polyfill for
// https://github.com/WickyNilliams/enquire.js/issues/82
var enquire = void 0;
if (typeof window !== 'undefined') {
    var matchMediaPolyfill = function matchMediaPolyfill(mediaQuery) {
        return {
            media: mediaQuery,
            matches: false,
            addListener: function addListener() {},
            removeListener: function removeListener() {}
        };
    };
    window.matchMedia = window.matchMedia || matchMediaPolyfill;
    enquire = __webpack_require__("./node_modules/enquire.js/src/index.js");
}




var responsiveArray = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];
var responsiveMap = {
    xs: '(max-width: 575px)',
    sm: '(min-width: 576px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 992px)',
    xl: '(min-width: 1200px)',
    xxl: '(min-width: 1600px)'
};

var Row = function (_React$Component) {
    __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(Row, _React$Component);

    function Row() {
        __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, Row);

        var _this = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Row.__proto__ || Object.getPrototypeOf(Row)).apply(this, arguments));

        _this.state = {
            screens: {}
        };
        return _this;
    }

    __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(Row, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            Object.keys(responsiveMap).map(function (screen) {
                return enquire.register(responsiveMap[screen], {
                    match: function match() {
                        if (__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof___default()(_this2.props.gutter) !== 'object') {
                            return;
                        }
                        _this2.setState(function (prevState) {
                            return {
                                screens: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, prevState.screens, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()({}, screen, true))
                            };
                        });
                    },
                    unmatch: function unmatch() {
                        if (__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof___default()(_this2.props.gutter) !== 'object') {
                            return;
                        }
                        _this2.setState(function (prevState) {
                            return {
                                screens: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, prevState.screens, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()({}, screen, false))
                            };
                        });
                    },
                    // Keep a empty destory to avoid triggering unmatch when unregister
                    destroy: function destroy() {}
                });
            });
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            Object.keys(responsiveMap).map(function (screen) {
                return enquire.unregister(responsiveMap[screen]);
            });
        }
    }, {
        key: 'getGutter',
        value: function getGutter() {
            var gutter = this.props.gutter;

            if ((typeof gutter === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof___default()(gutter)) === 'object') {
                for (var i = 0; i <= responsiveArray.length; i++) {
                    var breakpoint = responsiveArray[i];
                    if (this.state.screens[breakpoint] && gutter[breakpoint] !== undefined) {
                        return gutter[breakpoint];
                    }
                }
            }
            return gutter;
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames;

            var _a = this.props,
                type = _a.type,
                justify = _a.justify,
                align = _a.align,
                className = _a.className,
                style = _a.style,
                children = _a.children,
                _a$prefixCls = _a.prefixCls,
                prefixCls = _a$prefixCls === undefined ? 'ant-row' : _a$prefixCls,
                others = __rest(_a, ["type", "justify", "align", "className", "style", "children", "prefixCls"]);
            var gutter = this.getGutter();
            var classes = __WEBPACK_IMPORTED_MODULE_8_classnames___default()((_classNames = {}, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_classNames, prefixCls, !type), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_classNames, prefixCls + '-' + type, type), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_classNames, prefixCls + '-' + type + '-' + justify, type && justify), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_classNames, prefixCls + '-' + type + '-' + align, type && align), _classNames), className);
            var rowStyle = gutter > 0 ? __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({ marginLeft: gutter / -2, marginRight: gutter / -2 }, style) : style;
            var cols = __WEBPACK_IMPORTED_MODULE_7_react__["Children"].map(children, function (col) {
                if (!col) {
                    return null;
                }
                if (col.props && gutter > 0) {
                    return Object(__WEBPACK_IMPORTED_MODULE_7_react__["cloneElement"])(col, {
                        style: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({ paddingLeft: gutter / 2, paddingRight: gutter / 2 }, col.props.style)
                    });
                }
                return col;
            });
            var otherProps = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, others);
            delete otherProps.gutter;
            return __WEBPACK_IMPORTED_MODULE_7_react__["createElement"](
                'div',
                __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, otherProps, { className: classes, style: rowStyle }),
                cols
            );
        }
    }]);

    return Row;
}(__WEBPACK_IMPORTED_MODULE_7_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Row);

Row.defaultProps = {
    gutter: 0
};
Row.propTypes = {
    type: __WEBPACK_IMPORTED_MODULE_9_prop_types__["string"],
    align: __WEBPACK_IMPORTED_MODULE_9_prop_types__["string"],
    justify: __WEBPACK_IMPORTED_MODULE_9_prop_types__["string"],
    className: __WEBPACK_IMPORTED_MODULE_9_prop_types__["string"],
    children: __WEBPACK_IMPORTED_MODULE_9_prop_types__["node"],
    gutter: __WEBPACK_IMPORTED_MODULE_9_prop_types__["oneOfType"]([__WEBPACK_IMPORTED_MODULE_9_prop_types__["object"], __WEBPACK_IMPORTED_MODULE_9_prop_types__["number"]]),
    prefixCls: __WEBPACK_IMPORTED_MODULE_9_prop_types__["string"]
};

/***/ }),

/***/ "./node_modules/antd/es/row/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grid__ = __webpack_require__("./node_modules/antd/es/grid/index.js");

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__grid__["b" /* Row */]);

/***/ }),

/***/ "./node_modules/enquire.js/src/MediaQuery.js":
/***/ (function(module, exports, __webpack_require__) {

var QueryHandler = __webpack_require__("./node_modules/enquire.js/src/QueryHandler.js");
var each = __webpack_require__("./node_modules/enquire.js/src/Util.js").each;

/**
 * Represents a single media query, manages it's state and registered handlers for this query
 *
 * @constructor
 * @param {string} query the media query string
 * @param {boolean} [isUnconditional=false] whether the media query should run regardless of whether the conditions are met. Primarily for helping older browsers deal with mobile-first design
 */
function MediaQuery(query, isUnconditional) {
    this.query = query;
    this.isUnconditional = isUnconditional;
    this.handlers = [];
    this.mql = window.matchMedia(query);

    var self = this;
    this.listener = function(mql) {
        // Chrome passes an MediaQueryListEvent object, while other browsers pass MediaQueryList directly
        self.mql = mql.currentTarget || mql;
        self.assess();
    };
    this.mql.addListener(this.listener);
}

MediaQuery.prototype = {

    constuctor : MediaQuery,

    /**
     * add a handler for this query, triggering if already active
     *
     * @param {object} handler
     * @param {function} handler.match callback for when query is activated
     * @param {function} [handler.unmatch] callback for when query is deactivated
     * @param {function} [handler.setup] callback for immediate execution when a query handler is registered
     * @param {boolean} [handler.deferSetup=false] should the setup callback be deferred until the first time the handler is matched?
     */
    addHandler : function(handler) {
        var qh = new QueryHandler(handler);
        this.handlers.push(qh);

        this.matches() && qh.on();
    },

    /**
     * removes the given handler from the collection, and calls it's destroy methods
     *
     * @param {object || function} handler the handler to remove
     */
    removeHandler : function(handler) {
        var handlers = this.handlers;
        each(handlers, function(h, i) {
            if(h.equals(handler)) {
                h.destroy();
                return !handlers.splice(i,1); //remove from array and exit each early
            }
        });
    },

    /**
     * Determine whether the media query should be considered a match
     *
     * @return {Boolean} true if media query can be considered a match, false otherwise
     */
    matches : function() {
        return this.mql.matches || this.isUnconditional;
    },

    /**
     * Clears all handlers and unbinds events
     */
    clear : function() {
        each(this.handlers, function(handler) {
            handler.destroy();
        });
        this.mql.removeListener(this.listener);
        this.handlers.length = 0; //clear array
    },

    /*
        * Assesses the query, turning on all handlers if it matches, turning them off if it doesn't match
        */
    assess : function() {
        var action = this.matches() ? 'on' : 'off';

        each(this.handlers, function(handler) {
            handler[action]();
        });
    }
};

module.exports = MediaQuery;


/***/ }),

/***/ "./node_modules/enquire.js/src/MediaQueryDispatch.js":
/***/ (function(module, exports, __webpack_require__) {

var MediaQuery = __webpack_require__("./node_modules/enquire.js/src/MediaQuery.js");
var Util = __webpack_require__("./node_modules/enquire.js/src/Util.js");
var each = Util.each;
var isFunction = Util.isFunction;
var isArray = Util.isArray;

/**
 * Allows for registration of query handlers.
 * Manages the query handler's state and is responsible for wiring up browser events
 *
 * @constructor
 */
function MediaQueryDispatch () {
    if(!window.matchMedia) {
        throw new Error('matchMedia not present, legacy browsers require a polyfill');
    }

    this.queries = {};
    this.browserIsIncapable = !window.matchMedia('only all').matches;
}

MediaQueryDispatch.prototype = {

    constructor : MediaQueryDispatch,

    /**
     * Registers a handler for the given media query
     *
     * @param {string} q the media query
     * @param {object || Array || Function} options either a single query handler object, a function, or an array of query handlers
     * @param {function} options.match fired when query matched
     * @param {function} [options.unmatch] fired when a query is no longer matched
     * @param {function} [options.setup] fired when handler first triggered
     * @param {boolean} [options.deferSetup=false] whether setup should be run immediately or deferred until query is first matched
     * @param {boolean} [shouldDegrade=false] whether this particular media query should always run on incapable browsers
     */
    register : function(q, options, shouldDegrade) {
        var queries         = this.queries,
            isUnconditional = shouldDegrade && this.browserIsIncapable;

        if(!queries[q]) {
            queries[q] = new MediaQuery(q, isUnconditional);
        }

        //normalise to object in an array
        if(isFunction(options)) {
            options = { match : options };
        }
        if(!isArray(options)) {
            options = [options];
        }
        each(options, function(handler) {
            if (isFunction(handler)) {
                handler = { match : handler };
            }
            queries[q].addHandler(handler);
        });

        return this;
    },

    /**
     * unregisters a query and all it's handlers, or a specific handler for a query
     *
     * @param {string} q the media query to target
     * @param {object || function} [handler] specific handler to unregister
     */
    unregister : function(q, handler) {
        var query = this.queries[q];

        if(query) {
            if(handler) {
                query.removeHandler(handler);
            }
            else {
                query.clear();
                delete this.queries[q];
            }
        }

        return this;
    }
};

module.exports = MediaQueryDispatch;


/***/ }),

/***/ "./node_modules/enquire.js/src/QueryHandler.js":
/***/ (function(module, exports) {

/**
 * Delegate to handle a media query being matched and unmatched.
 *
 * @param {object} options
 * @param {function} options.match callback for when the media query is matched
 * @param {function} [options.unmatch] callback for when the media query is unmatched
 * @param {function} [options.setup] one-time callback triggered the first time a query is matched
 * @param {boolean} [options.deferSetup=false] should the setup callback be run immediately, rather than first time query is matched?
 * @constructor
 */
function QueryHandler(options) {
    this.options = options;
    !options.deferSetup && this.setup();
}

QueryHandler.prototype = {

    constructor : QueryHandler,

    /**
     * coordinates setup of the handler
     *
     * @function
     */
    setup : function() {
        if(this.options.setup) {
            this.options.setup();
        }
        this.initialised = true;
    },

    /**
     * coordinates setup and triggering of the handler
     *
     * @function
     */
    on : function() {
        !this.initialised && this.setup();
        this.options.match && this.options.match();
    },

    /**
     * coordinates the unmatch event for the handler
     *
     * @function
     */
    off : function() {
        this.options.unmatch && this.options.unmatch();
    },

    /**
     * called when a handler is to be destroyed.
     * delegates to the destroy or unmatch callbacks, depending on availability.
     *
     * @function
     */
    destroy : function() {
        this.options.destroy ? this.options.destroy() : this.off();
    },

    /**
     * determines equality by reference.
     * if object is supplied compare options, if function, compare match callback
     *
     * @function
     * @param {object || function} [target] the target for comparison
     */
    equals : function(target) {
        return this.options === target || this.options.match === target;
    }

};

module.exports = QueryHandler;


/***/ }),

/***/ "./node_modules/enquire.js/src/Util.js":
/***/ (function(module, exports) {

/**
 * Helper function for iterating over a collection
 *
 * @param collection
 * @param fn
 */
function each(collection, fn) {
    var i      = 0,
        length = collection.length,
        cont;

    for(i; i < length; i++) {
        cont = fn(collection[i], i);
        if(cont === false) {
            break; //allow early exit
        }
    }
}

/**
 * Helper function for determining whether target object is an array
 *
 * @param target the object under test
 * @return {Boolean} true if array, false otherwise
 */
function isArray(target) {
    return Object.prototype.toString.apply(target) === '[object Array]';
}

/**
 * Helper function for determining whether target object is a function
 *
 * @param target the object under test
 * @return {Boolean} true if function, false otherwise
 */
function isFunction(target) {
    return typeof target === 'function';
}

module.exports = {
    isFunction : isFunction,
    isArray : isArray,
    each : each
};


/***/ }),

/***/ "./node_modules/enquire.js/src/index.js":
/***/ (function(module, exports, __webpack_require__) {

var MediaQueryDispatch = __webpack_require__("./node_modules/enquire.js/src/MediaQueryDispatch.js");
module.exports = new MediaQueryDispatch();


/***/ }),

/***/ "./pages/index.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_es_row__ = __webpack_require__("./node_modules/antd/es/row/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_es_col__ = __webpack_require__("./node_modules/antd/es/col/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_es_icon__ = __webpack_require__("./node_modules/antd/es/icon/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_es_collapse__ = __webpack_require__("./node_modules/antd/es/collapse/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");




var _jsxFileName = "/Users/xiadd/Documents/node_projects/zhuishushenqi/pages/index.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

 // import { Button, Jumbotron } from 'reactstrap'


var Wrapper = Object(__WEBPACK_IMPORTED_MODULE_5_styled_components__["b" /* default */])("div").withConfig({
  displayName: "pages__Wrapper",
  componentId: "nnjbnk-0"
})(["height:100vh;display:flex;width:100vw;align-items:center;justify-content:center;font-family:'PingFang SC','Microsoft YaHei','Lantinghei SC','Source Han Sans SC','Noto Sans CJK SC','WenQuanYi Micro Hei','sans-serif','SimSun';background:#f5f5f5;flex-direction:column;h1,h5,p{font-weight:300;color:#444;width:500px;text-align:center}.ant-collapse{border:none;width:400px;background:#f5f5f5}.ant-collapse-content-box{background:#f5f5f5;text-align:left}.ant-collapse-content-box p{margin-bottom:0;text-align:left}.ant-collapse-item{border:none}"]);
var Panel = __WEBPACK_IMPORTED_MODULE_3_antd_es_collapse__["a" /* default */].Panel;

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
      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Wrapper, {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_es_icon__["a" /* default */], {
        type: "book",
        style: {
          color: '#d32122'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }), " \u8FFD\u4E66\u795E\u5668"), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, "\u57FA\u4E8Ekoa+react.js+next.js\u7684\u8FFD\u4E66\u795E\u5668\u63A5\u53E3"), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, "\u4E66\u7C4D\u5168\u9762, \u53EF\u6362\u6E90, \u5B9E\u65F6\u66F4\u65B0, \u66F4\u91CD\u8981\u7684\u662F\u53EF\u4EE5\u4E00\u8D77\u5B66\u4E60nodejs+react."), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, "\u6587\u6863\u8BF7\u67E5\u770B: ", __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("a", {
        href: "https://xiadd.github.io/zhuishushenqi",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, "https://xiadd.github.io/zhuishushenqi")), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, "-- Made with \u2764\uFE0F by ", __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("a", {
        href: "http://github.com/xiadd",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, "xiadd")), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_es_collapse__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Panel, {
        header: "\u8C03\u8BD5\u4FE1\u606F",
        key: "1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_es_row__["a" /* default */], {
        gutter: 16,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_es_col__["a" /* default */], {
        span: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, "\u5185\u5B58\u5360\u7528"), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_es_col__["a" /* default */], {
        span: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, this.props.memory, " MB")))));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps() {
      console.log(process.memoryUsage());
      return {
        memory: process.memoryUsage().rss / 1024 / 1024
      };
    }
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_4_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/process/browser.js"), __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.11ba222bc0fbb039492a.hot-update.js.map