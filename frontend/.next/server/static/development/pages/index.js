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

/***/ "./components/App.js":
/*!***************************!*\
  !*** ./components/App.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/theme */ "./lib/theme.js");
var _jsxFileName = "/Users/alexcasillas/react-apps/react-forum-system/frontend/components/App.js";


function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  html {\n    box-sizing: border-box;\n    font-size: 10px;\n  }\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n  body {\n    padding: 0;\n    margin: 0;\n    font-size: 1.4rem;\n    line-height: 1.4;\n    background-color: ", ";\n    font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif;\n    color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var theme = {
  scheme: _lib_theme__WEBPACK_IMPORTED_MODULE_2__["scheme"]
};
var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"])(_templateObject(), theme.scheme.gray[1], theme.scheme.gray[8]);
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GlobalStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, children));
});

/***/ }),

/***/ "./components/auth/auth.component.js":
/*!*******************************************!*\
  !*** ./components/auth/auth.component.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/alexcasillas/react-apps/react-forum-system/frontend/components/auth/auth.component.js";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query AUTH {\n    auth {\n      id\n      email\n      username\n      avatar\n      role\n      accountDisabled\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var AUTH_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
    query: AUTH_QUERY,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, function (_ref) {
    var auth = _ref.data.auth,
        error = _ref.error,
        loading = _ref.loading;
    if (loading || error) return null;
    return props.children(auth);
  });
});

/***/ }),

/***/ "./components/communities/communities.component.js":
/*!*********************************************************!*\
  !*** ./components/communities/communities.component.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-content-loader */ "react-content-loader");
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_content_loader__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/theme */ "./lib/theme.js");
/* harmony import */ var _community_community_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../community/community.component */ "./components/community/community.component.js");
var _jsxFileName = "/Users/alexcasillas/react-apps/react-forum-system/frontend/components/communities/communities.component.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query ALL_COMMUNITIES_QUERY {\n    communities {\n      id\n      name\n      description\n      picture\n      likes\n      threads_count\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








var Communities = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section.withConfig({
  displayName: "communitiescomponent__Communities",
  componentId: "i1cefv-0"
})(["grid-area:communities;border-right:1px solid ", ";display:flex;flex-direction:column;"], _lib_theme__WEBPACK_IMPORTED_MODULE_5__["scheme"].gray[4]);
var Loading = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "communitiescomponent__Loading",
  componentId: "i1cefv-1"
})(["margin-top:40px;padding-left:40px;"]);
var ALL_COMMUNITIES_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
    query: ALL_COMMUNITIES_QUERY,
    fetchPolicy: "cache-and-network",
    srr: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, function (_ref) {
    var communities = _ref.data.communities,
        error = _ref.error,
        loading = _ref.loading;
    if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, "Error: ", error.message);
    if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Loading, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_content_loader__WEBPACK_IMPORTED_MODULE_4__["List"], {
      secondaryColor: "#ced4da",
      primaryColor: "#e9ecef",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }));
    if (communities && communities.length) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Communities, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, communities.map(function (community) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_community_community_component__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({
        key: community.id
      }, community, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }));
    }));
  });
});

/***/ }),

/***/ "./components/community/community.component.js":
/*!*****************************************************!*\
  !*** ./components/community/community.component.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/theme */ "./lib/theme.js");
/* harmony import */ var _svg_heart_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../svg/heart.icon */ "./components/svg/heart.icon.js");
/* harmony import */ var _svg_threads_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../svg/threads.icon */ "./components/svg/threads.icon.js");
var _jsxFileName = "/Users/alexcasillas/react-apps/react-forum-system/frontend/components/community/community.component.js";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var Community = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "communitycomponent__Community",
  componentId: "sc-9tkha8-0"
})(["padding:20px;display:flex;flex-direction:row;transition:background 0.3s ease-in-out;cursor:pointer;border-bottom:1px solid ", ";background-color:", ";&:hover{background-color:", ";}"], _lib_theme__WEBPACK_IMPORTED_MODULE_5__["scheme"].gray[4], function (_ref) {
  var theme = _ref.theme,
      active = _ref.active;
  return active ? theme.scheme.white : theme.scheme.gray[1];
}, _lib_theme__WEBPACK_IMPORTED_MODULE_5__["scheme"].white);
var CommunityImage = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "communitycomponent__CommunityImage",
  componentId: "sc-9tkha8-1"
})(["width:40px;height:40px;background-size:cover;background-position:center;background-repeat:no-repeat;border-radius:5px;margin-top:5px;background-image:url(", ");"], function (_ref2) {
  var picture = _ref2.picture;
  return picture;
});
var CommunityDetails = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "communitycomponent__CommunityDetails",
  componentId: "sc-9tkha8-2"
})(["flex:1;display:flex;flex-direction:column;margin-left:15px;"]);
var CommunityName = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "communitycomponent__CommunityName",
  componentId: "sc-9tkha8-3"
})(["text-transform:uppercase;font-size:1.3rem;font-weight:600;margin-bottom:5px;color:", ";"], _lib_theme__WEBPACK_IMPORTED_MODULE_5__["scheme"].gray[8]);
var CommunityDescription = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "communitycomponent__CommunityDescription",
  componentId: "sc-9tkha8-4"
})(["color:", ";"], _lib_theme__WEBPACK_IMPORTED_MODULE_5__["scheme"].gray[7]);
var CommunityStats = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "communitycomponent__CommunityStats",
  componentId: "sc-9tkha8-5"
})(["display:flex;flex-direction:row;align-items:center;margin-top:10px;"]);
var CommunityStat = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "communitycomponent__CommunityStat",
  componentId: "sc-9tkha8-6"
})(["display:flex;flex-direction:row;align-items:center;margin-left:20px;&:first-child{margin-left:0;}"]);
var StatValue = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span.withConfig({
  displayName: "communitycomponent__StatValue",
  componentId: "sc-9tkha8-7"
})(["margin-left:5px;font-size:1.2rem;color:", ";"], _lib_theme__WEBPACK_IMPORTED_MODULE_5__["scheme"].gray[8]);

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* harmony default export */ __webpack_exports__["default"] = (function (_ref3) {
  var id = _ref3.id,
      name = _ref3.name,
      description = _ref3.description,
      picture = _ref3.picture,
      threads_count = _ref3.threads_count,
      likes = _ref3.likes;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      active = _useState2[0],
      setActive = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var c = next_router__WEBPACK_IMPORTED_MODULE_3___default.a.query.c;

    if (c === id) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [next_router__WEBPACK_IMPORTED_MODULE_3___default.a.query.c]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, active && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, "RFS | ", name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: {
      pathname: '/community',
      query: {
        c: id
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Community, {
    active: active,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CommunityImage, {
    picture: picture,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CommunityDetails, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CommunityName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CommunityDescription, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CommunityStats, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CommunityStat, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_svg_heart_icon__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StatValue, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, likes)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CommunityStat, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_svg_threads_icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StatValue, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, threads_count)))))));
});

/***/ }),

/***/ "./components/navigation/navigation.component.js":
/*!*******************************************************!*\
  !*** ./components/navigation/navigation.component.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.component */ "./components/auth/auth.component.js");
/* harmony import */ var _lib_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/theme */ "./lib/theme.js");
var _jsxFileName = "/Users/alexcasillas/react-apps/react-forum-system/frontend/components/navigation/navigation.component.js";





var Navigation = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.nav.withConfig({
  displayName: "navigationcomponent__Navigation",
  componentId: "yxaji2-0"
})(["grid-area:navigation;background-color:", ";min-height:100vh;display:flex;flex-direction:column;box-shadow:0 0 20px 0 rgba(0,0,0,0.08);z-index:10;"], _lib_theme__WEBPACK_IMPORTED_MODULE_4__["scheme"].white);
var RotateAnimation = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(["from{transform:rotate(0deg);}to{transform:rotate(180deg);}"]);
var AppLogo = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "navigationcomponent__AppLogo",
  componentId: "yxaji2-1"
})(["text-align:center;margin-top:30px;img{animation:", " 10s linear infinite;}"], RotateAnimation);
var AppTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1.withConfig({
  displayName: "navigationcomponent__AppTitle",
  componentId: "yxaji2-2"
})(["font-size:1.4rem;text-transform:uppercase;font-weight:400;color:", ";text-align:center;margin:0;span{font-weight:700;color:", ";}"], _lib_theme__WEBPACK_IMPORTED_MODULE_4__["scheme"].gray[6], _lib_theme__WEBPACK_IMPORTED_MODULE_4__["scheme"].gray[8]);
var AppSubtitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h2.withConfig({
  displayName: "navigationcomponent__AppSubtitle",
  componentId: "yxaji2-3"
})(["margin:0;padding:0;font-weight:400;font-size:1.4rem;color:", ";text-align:center;margin-bottom:40px;"], _lib_theme__WEBPACK_IMPORTED_MODULE_4__["scheme"].gray[6]);
var NavSection = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "navigationcomponent__NavSection",
  componentId: "yxaji2-4"
})(["display:flex;flex-direction:column;"]);
var NavElement = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "navigationcomponent__NavElement",
  componentId: "yxaji2-5"
})(["display:flex;flex-direction:row;align-items:center;flex:1;a{text-decoration:none;outline:none;color:", ";cursor:pointer;width:100%;display:flex;flex-direction:row;transition:all 0.3s ease-in-out;padding:10px 10px 10px 30px;background-color:", ";text-transform:uppercase;font-size:1.3rem;display:flex;flex-direction:column;&:hover{color:", ";background-color:", ";}span{color:", ";text-transform:none;}}"], _lib_theme__WEBPACK_IMPORTED_MODULE_4__["scheme"].gray[7], _lib_theme__WEBPACK_IMPORTED_MODULE_4__["scheme"].white, _lib_theme__WEBPACK_IMPORTED_MODULE_4__["scheme"].gray[8], _lib_theme__WEBPACK_IMPORTED_MODULE_4__["scheme"].gray[1], _lib_theme__WEBPACK_IMPORTED_MODULE_4__["scheme"].gray[6]);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Navigation, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AppLogo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
    alt: "",
    height: "60",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AppTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "React"), " FS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AppSubtitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, "Online Communities"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavSection, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavElement, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "active",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, "Home", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, "What's new")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavElement, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, "Messages", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, "Your inbox")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavElement, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, "Explore", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, "Discover communities")))))));
});

/***/ }),

/***/ "./components/svg/heart.icon.js":
/*!**************************************!*\
  !*** ./components/svg/heart.icon.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/alexcasillas/react-apps/react-forum-system/frontend/components/svg/heart.icon.js";

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var _ref$fill = _ref.fill,
      fill = _ref$fill === void 0 ? '#343a40' : _ref$fill;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M9.5 19c-0.084 0-0.167-0.021-0.243-0.063-0.094-0.052-2.326-1.301-4.592-3.347-1.341-1.21-2.411-2.448-3.183-3.68-0.984-1.571-1.482-3.139-1.482-4.66 0-2.895 2.355-5.25 5.25-5.25 0.98 0 2.021 0.367 2.931 1.034 0.532 0.39 0.985 0.86 1.319 1.359 0.334-0.499 0.787-0.969 1.319-1.359 0.91-0.667 1.951-1.034 2.931-1.034 2.895 0 5.25 2.355 5.25 5.25 0 1.521-0.499 3.089-1.482 4.66-0.771 1.232-1.842 2.47-3.182 3.68-2.266 2.046-4.498 3.295-4.592 3.347-0.076 0.042-0.159 0.063-0.243 0.063zM5.25 3c-2.343 0-4.25 1.907-4.25 4.25 0 3.040 2.35 5.802 4.321 7.585 1.76 1.592 3.544 2.708 4.179 3.087 0.635-0.379 2.419-1.495 4.179-3.087 1.971-1.782 4.321-4.545 4.321-7.585 0-2.343-1.907-4.25-4.25-4.25-1.703 0-3.357 1.401-3.776 2.658-0.068 0.204-0.259 0.342-0.474 0.342s-0.406-0.138-0.474-0.342c-0.419-1.257-2.073-2.658-3.776-2.658z",
    fill: fill,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }));
});

/***/ }),

/***/ "./components/svg/pen.icon.js":
/*!************************************!*\
  !*** ./components/svg/pen.icon.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/alexcasillas/react-apps/react-forum-system/frontend/components/svg/pen.icon.js";

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var _ref$fill = _ref.fill,
      fill = _ref$fill === void 0 ? '#343a40' : _ref$fill;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M19.572 0.428c-0.28-0.28-0.655-0.421-1.117-0.421-0.753 0-1.765 0.394-3.021 1.174-0.402-0.425-1.167-1.077-2.131-1.155-0.769-0.062-1.495 0.241-2.157 0.903-1.405 1.405-2.097 3.121-2.555 4.256-0.156 0.386-0.349 0.866-0.445 0.965-0.033 0.033-0.132 0.132-0.304-0.013-0.196-0.185-0.505-0.181-0.696 0.010-0.195 0.195-0.195 0.512 0 0.707 0.082 0.082 0.293 0.241 0.562 0.316 0.108 0.030 0.216 0.045 0.322 0.045 0.127 0 0.251-0.022 0.369-0.065-0.137 0.141-0.274 0.282-0.411 0.425-3.517 3.673-7.46 8.713-7.982 11.842-0.027 0.159 0.025 0.322 0.14 0.436 0.095 0.095 0.222 0.146 0.354 0.146 0.027 0 0.055-0.002 0.082-0.007 1.308-0.218 3.032-1.046 5.125-2.46 1.852-1.251 3.906-2.908 5.94-4.791 1.984-1.837 3.794-3.742 5.235-5.511 1.076-1.321 2.458-3.208 2.934-4.692 0.301-0.939 0.219-1.649-0.244-2.112zM11.854 1.635c0.45-0.45 0.896-0.651 1.365-0.614 0.561 0.044 1.053 0.418 1.365 0.72-0.247 0.172-0.501 0.355-0.763 0.552-1.424 1.069-3.040 2.488-4.65 4.081 0.107-0.218 0.216-0.488 0.349-0.816 0.427-1.060 1.073-2.662 2.334-3.923zM3.036 15.243l1.722 1.722c-1.365 0.892-2.584 1.526-3.57 1.847 0.322-0.987 0.958-2.206 1.848-3.569zM10.969 12.009c-1.876 1.736-3.71 3.228-5.367 4.386l-1.995-1.995c1.321-1.892 3.071-4.008 5.105-6.132 2.362-2.467 4.695-4.505 6.562-5.787l2.244 2.244c-1.431 2.086-3.786 4.726-6.549 7.284zM18.864 2.235c-0.148 0.462-0.418 1.013-0.791 1.631l-1.941-1.941c0.978-0.591 1.78-0.918 2.324-0.918 0.281 0 0.378 0.097 0.41 0.128 0.232 0.232 0.099 0.789-0.001 1.1z",
    fill: fill,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }));
});

/***/ }),

/***/ "./components/svg/threads.icon.js":
/*!****************************************!*\
  !*** ./components/svg/threads.icon.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/alexcasillas/react-apps/react-forum-system/frontend/components/svg/threads.icon.js";

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var _ref$fill = _ref.fill,
      fill = _ref$fill === void 0 ? '#343a40' : _ref$fill;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M0.5 19c-0.225 0-0.422-0.15-0.482-0.367s0.032-0.447 0.225-0.562c1.691-1.014 2.392-2.489 2.641-3.179-1.838-1.407-2.884-3.354-2.884-5.392 0-1.029 0.258-2.026 0.768-2.964 0.486-0.894 1.18-1.695 2.061-2.381 1.787-1.39 4.156-2.156 6.671-2.156s4.884 0.766 6.671 2.156c0.881 0.685 1.575 1.486 2.061 2.381 0.51 0.937 0.768 1.934 0.768 2.964s-0.258 2.026-0.768 2.964c-0.486 0.894-1.18 1.695-2.061 2.381-1.787 1.39-4.156 2.156-6.671 2.156-1.033 0-2.047-0.129-3.016-0.385-0.429 0.286-1.231 0.793-2.189 1.27-1.488 0.74-2.764 1.115-3.794 1.115zM9.5 3c-4.687 0-8.5 2.916-8.5 6.5 0 1.815 1.005 3.562 2.756 4.792 0.172 0.121 0.25 0.336 0.196 0.539-0.117 0.436-0.515 1.633-1.58 2.788 1.302-0.456 2.704-1.247 3.739-1.959 0.123-0.085 0.277-0.11 0.421-0.069 0.948 0.271 1.947 0.409 2.968 0.409 4.687 0 8.5-2.916 8.5-6.5s-3.813-6.5-8.5-6.5z",
    fill: fill,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }));
});

/***/ }),

/***/ "./components/thread/thread.component.js":
/*!***********************************************!*\
  !*** ./components/thread/thread.component.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var date_fns_distance_in_words_strict__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns/distance_in_words_strict */ "date-fns/distance_in_words_strict");
/* harmony import */ var date_fns_distance_in_words_strict__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(date_fns_distance_in_words_strict__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! markdown-it */ "markdown-it");
/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(markdown_it__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var markdown_it_emoji__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! markdown-it-emoji */ "markdown-it-emoji");
/* harmony import */ var markdown_it_emoji__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(markdown_it_emoji__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/theme */ "./lib/theme.js");
/* harmony import */ var _svg_heart_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../svg/heart.icon */ "./components/svg/heart.icon.js");
/* harmony import */ var _svg_threads_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../svg/threads.icon */ "./components/svg/threads.icon.js");
var _jsxFileName = "/Users/alexcasillas/react-apps/react-forum-system/frontend/components/thread/thread.component.js";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var Thread = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "threadcomponent__Thread",
  componentId: "sc-113z5n2-0"
})(["padding:20px;display:flex;flex-direction:row;transition:background 0.3s ease-in-out;cursor:pointer;border-bottom:1px solid ", ";background-color:", ";&:hover{background-color:", ";}"], _lib_theme__WEBPACK_IMPORTED_MODULE_8__["scheme"].gray[4], function (_ref) {
  var theme = _ref.theme,
      active = _ref.active;
  return active ? theme.scheme.white : theme.scheme.gray[1];
}, _lib_theme__WEBPACK_IMPORTED_MODULE_8__["scheme"].white);
var AuthorPicture = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "threadcomponent__AuthorPicture",
  componentId: "sc-113z5n2-1"
})(["width:40px;height:40px;min-width:40px;min-height:40px;background-size:cover;background-position:center;background-repeat:no-repeat;border-radius:5px;margin-top:3px;background-image:url(", ");background-color:", ";"], function (_ref2) {
  var picture = _ref2.picture;
  return picture;
}, _lib_theme__WEBPACK_IMPORTED_MODULE_8__["scheme"].gray[4]);
var ThreadDetails = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "threadcomponent__ThreadDetails",
  componentId: "sc-113z5n2-2"
})(["width:90%;display:flex;flex-direction:column;padding-left:20px;"]);
var ThreadTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "threadcomponent__ThreadTitle",
  componentId: "sc-113z5n2-3"
})(["text-transform:uppercase;font-size:1.3rem;font-weight:600;margin-bottom:5px;color:", ";*{margin:0;padding:0;}"], _lib_theme__WEBPACK_IMPORTED_MODULE_8__["scheme"].gray[8]);
var ThreadDescription = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "threadcomponent__ThreadDescription",
  componentId: "sc-113z5n2-4"
})(["color:", ";width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;p{margin:0;padding:0;}"], _lib_theme__WEBPACK_IMPORTED_MODULE_8__["scheme"].gray[7]);
var ThreadMeta = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "threadcomponent__ThreadMeta",
  componentId: "sc-113z5n2-5"
})(["display:flex;flex-direction:row;align-items:center;span{margin-left:5px;margin-right:5px;color:", ";}"], _lib_theme__WEBPACK_IMPORTED_MODULE_8__["scheme"].gray[5]);
var ThreadAuthor = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "threadcomponent__ThreadAuthor",
  componentId: "sc-113z5n2-6"
})(["color:", ";"], _lib_theme__WEBPACK_IMPORTED_MODULE_8__["scheme"].gray[7]);
var ThreadWhen = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "threadcomponent__ThreadWhen",
  componentId: "sc-113z5n2-7"
})(["color:", ";"], _lib_theme__WEBPACK_IMPORTED_MODULE_8__["scheme"].gray[6]);
var ThreadStats = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "threadcomponent__ThreadStats",
  componentId: "sc-113z5n2-8"
})(["display:flex;flex-direction:row;align-items:center;margin-top:10px;"]);
var ThreadStat = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "threadcomponent__ThreadStat",
  componentId: "sc-113z5n2-9"
})(["display:flex;flex-direction:row;align-items:center;margin-left:20px;&:first-child{margin-left:0;}"]);
var StatValue = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span.withConfig({
  displayName: "threadcomponent__StatValue",
  componentId: "sc-113z5n2-10"
})(["margin-left:5px;font-size:1.2rem;color:", ";"], _lib_theme__WEBPACK_IMPORTED_MODULE_8__["scheme"].gray[8]);
/* harmony default export */ __webpack_exports__["default"] = (function (_ref3) {
  var id = _ref3.id,
      title = _ref3.title,
      content = _ref3.content,
      author = _ref3.author,
      createdAt = _ref3.createdAt;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      active = _useState2[0],
      setActive = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var t = next_router__WEBPACK_IMPORTED_MODULE_3___default.a.query.t;

    if (t === id) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [next_router__WEBPACK_IMPORTED_MODULE_3___default.a.query.t]);
  var md = new markdown_it__WEBPACK_IMPORTED_MODULE_6___default.a().use(markdown_it_emoji__WEBPACK_IMPORTED_MODULE_7___default.a);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, active && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, "RFS | ", title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: {
      pathname: '/community',
      query: {
        c: next_router__WEBPACK_IMPORTED_MODULE_3___default.a.query.c,
        t: id
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Thread, {
    active: active,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AuthorPicture, {
    picture: author.avatar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThreadDetails, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThreadTitle, {
    dangerouslySetInnerHTML: {
      __html: md.render(title)
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThreadMeta, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThreadAuthor, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, "".concat(author.name, " ").concat(author.lastName)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, "\u2014"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThreadWhen, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, date_fns_distance_in_words_strict__WEBPACK_IMPORTED_MODULE_5___default()(createdAt, Date.now()))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThreadStats, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThreadStat, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_svg_heart_icon__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StatValue, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, 0)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThreadStat, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_svg_threads_icon__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StatValue, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, 0)))))));
});

/***/ }),

/***/ "./components/threads/threads.component.js":
/*!*************************************************!*\
  !*** ./components/threads/threads.component.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-content-loader */ "react-content-loader");
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_content_loader__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var just_debounce_it__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! just-debounce-it */ "just-debounce-it");
/* harmony import */ var just_debounce_it__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(just_debounce_it__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/theme */ "./lib/theme.js");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../auth/auth.component */ "./components/auth/auth.component.js");
/* harmony import */ var _thread_thread_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../thread/thread.component */ "./components/thread/thread.component.js");
/* harmony import */ var _svg_pen_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../svg/pen.icon */ "./components/svg/pen.icon.js");
var _jsxFileName = "/Users/alexcasillas/react-apps/react-forum-system/frontend/components/threads/threads.component.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query THREADS_BY_COMMUNITY_QUERY($community: String!, $filter: String) {\n    threadsByCommunity(community: $community, filter: $filter) {\n      id\n      title\n      content\n      createdAt\n      author {\n        username\n        name\n        lastName\n        avatar\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }












var Threads = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section.withConfig({
  displayName: "threadscomponent__Threads",
  componentId: "sc-5a3602-0"
})(["grid-area:threads;border-right:1px solid ", ";display:flex;flex-direction:column;"], _lib_theme__WEBPACK_IMPORTED_MODULE_7__["scheme"].gray[4]);
var ActionsArea = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "threadscomponent__ActionsArea",
  componentId: "sc-5a3602-1"
})(["position:sticky;width:100%;height:60px;background-color:", ";box-shadow:0px 5px 5px 0 rgba(0,0,0,0.08);padding:10px;display:flex;flex-direction:row;align-items:center;justify-content:flex-end;"], _lib_theme__WEBPACK_IMPORTED_MODULE_7__["scheme"].white);
var Action = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "threadscomponent__Action",
  componentId: "sc-5a3602-2"
})(["display:flex;flex-direction:row;align-items:center;background-color:", ";color:", ";padding:5px 10px;border-radius:5px;cursor:pointer;user-select:none;&:active{background-color:", ";}"], _lib_theme__WEBPACK_IMPORTED_MODULE_7__["scheme"].gray[8], _lib_theme__WEBPACK_IMPORTED_MODULE_7__["scheme"].white, _lib_theme__WEBPACK_IMPORTED_MODULE_7__["scheme"].gray[7]);
var ActionIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "threadscomponent__ActionIcon",
  componentId: "sc-5a3602-3"
})(["margin-left:10px;transition:all 0.3s ease-in-out;padding-top:2px;"]);
var NoThreadsFound = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "threadscomponent__NoThreadsFound",
  componentId: "sc-5a3602-4"
})(["text-align:center;display:flex;flex-direction:column;margin-top:40px;span{text-transform:uppercase;font-size:1.3rem;font-weight:600;}"]);
var Loading = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "threadscomponent__Loading",
  componentId: "sc-5a3602-5"
})(["margin-top:40px;padding-left:40px;"]);
var Input = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.input.withConfig({
  displayName: "threadscomponent__Input",
  componentId: "sc-5a3602-6"
})(["width:100%;border:none;outline:0;box-shadow:none;background-color:", ";padding:10px;border-radius:5px;font-size:1.4rem;color:", ";"], _lib_theme__WEBPACK_IMPORTED_MODULE_7__["scheme"].gray[2], _lib_theme__WEBPACK_IMPORTED_MODULE_7__["scheme"].gray[7]);
var THREADS_BY_COMMUNITY_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState2 = _slicedToArray(_useState, 2),
      filter = _useState2[0],
      setFilter = _useState2[1];

  var updateFilter = just_debounce_it__WEBPACK_IMPORTED_MODULE_6___default()(function (value) {
    console.log('Debounced Update Filter');
    setFilter(value);
  }, 350);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Threads, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ActionsArea, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_auth_auth_component__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, function (auth) {
    if (auth) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: {
        pathname: '/write',
        query: {
          c: props.community
        }
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Action, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, "New thread", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ActionIcon, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_svg_pen_icon__WEBPACK_IMPORTED_MODULE_10__["default"], {
      fill: "#ffffff",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }))));
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
    query: THREADS_BY_COMMUNITY_QUERY,
    variables: {
      community: props.community,
      filter: filter
    },
    fetchPolicy: "cache-and-network",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, function (_ref) {
    var threadsByCommunity = _ref.data.threadsByCommunity,
        error = _ref.error,
        loading = _ref.loading;
    if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    }, "Oops... error!");
    if (threadsByCommunity && threadsByCommunity.length === 0) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NoThreadsFound, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    }, "Oops..."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    }, "It looks like there are no threads in this community."));
    if (threadsByCommunity && threadsByCommunity.length) return threadsByCommunity.map(function (thread) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_thread_thread_component__WEBPACK_IMPORTED_MODULE_9__["default"], _extends({
        key: thread.id
      }, thread, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }));
    });
    if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Loading, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_content_loader__WEBPACK_IMPORTED_MODULE_4__["List"], {
      secondaryColor: "#ced4da",
      primaryColor: "#e9ecef",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }));
  })));
});

/***/ }),

/***/ "./lib/theme.js":
/*!**********************!*\
  !*** ./lib/theme.js ***!
  \**********************/
/*! exports provided: scheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scheme", function() { return scheme; });
var scheme = {
  white: '#ffffff',
  black: '#000000',
  gray: ['#f8f9fa', '#f1f3f5', '#e9ecef', '#dee2e6', '#ced4da', '#adb5bd', '#868e96', '#495057', '#343a40', '#212529'],
  red: ['#fff5f5', '#ffe3e3', '#ffc9c9', '#ffa8a8', '#ff8787', '#ff6b6b', '#fa5252', '#f03e3e', '#e03131', '#c92a2a'],
  pink: ['#fff0f6', '#ffdeeb', '#fcc2d7', '#faa2c1', '#f783ac', '#f06595', '#e64980', '#d6336c', '#c2255c', '#a61e4d'],
  grape: ['#f8f0fc', '#f3d9fa', '#eebefa', '#e599f7', '#da77f2', '#cc5de8', '#be4bdb', '#ae3ec9', '#9c36b5', '#862e9c'],
  violet: ['#f3f0ff', '#e5dbff', '#d0bfff', '#b197fc', '#9775fa', '#845ef7', '#7950f2', '#7048e8', '#6741d9', '#5f3dc4'],
  indigo: ['#edf2ff', '#dbe4ff', '#bac8ff', '#91a7ff', '#748ffc', '#5c7cfa', '#4c6ef5', '#4263eb', '#3b5bdb', '#364fc7'],
  blue: ['#e7f5ff', '#d0ebff', '#a5d8ff', '#74c0fc', '#4dabf7', '#339af0', '#228be6', '#1c7ed6', '#1971c2', '#1864ab'],
  cyan: ['#e3fafc', '#c5f6fa', '#99e9f2', '#66d9e8', '#3bc9db', '#22b8cf', '#15aabf', '#1098ad', '#0c8599', '#0b7285'],
  teal: ['#e6fcf5', '#c3fae8', '#96f2d7', '#63e6be', '#38d9a9', '#20c997', '#12b886', '#0ca678', '#099268', '#087f5b'],
  green: ['#ebfbee', '#d3f9d8', '#b2f2bb', '#8ce99a', '#69db7c', '#51cf66', '#40c057', '#37b24d', '#2f9e44', '#2b8a3e'],
  lime: ['#f4fce3', '#e9fac8', '#d8f5a2', '#c0eb75', '#a9e34b', '#94d82d', '#82c91e', '#74b816', '#66a80f', '#5c940d'],
  yellow: ['#fff9db', '#fff3bf', '#ffec99', '#ffe066', '#ffd43b', '#fcc419', '#fab005', '#f59f00', '#f08c00', '#e67700'],
  orange: ['#fff4e6', '#ffe8cc', '#ffd8a8', '#ffc078', '#ffa94d', '#ff922b', '#fd7e14', '#f76707', '#e8590c', '#d9480f']
};

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/App */ "./components/App.js");
/* harmony import */ var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/navigation/navigation.component */ "./components/navigation/navigation.component.js");
/* harmony import */ var _components_communities_communities_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/communities/communities.component */ "./components/communities/communities.component.js");
/* harmony import */ var _components_threads_threads_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/threads/threads.component */ "./components/threads/threads.component.js");
var _jsxFileName = "/Users/alexcasillas/react-apps/react-forum-system/frontend/pages/index.js";






var Dashboard = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__Dashboard",
  componentId: "lgoza8-0"
})(["display:grid;grid-template-areas:'navigation communities threads';grid-template-columns:250px 350px auto;"]);
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_App__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Dashboard, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_communities_communities_component__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  })));
});

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "date-fns/distance_in_words_strict":
/*!****************************************************!*\
  !*** external "date-fns/distance_in_words_strict" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("date-fns/distance_in_words_strict");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "just-debounce-it":
/*!***********************************!*\
  !*** external "just-debounce-it" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("just-debounce-it");

/***/ }),

/***/ "markdown-it":
/*!******************************!*\
  !*** external "markdown-it" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("markdown-it");

/***/ }),

/***/ "markdown-it-emoji":
/*!************************************!*\
  !*** external "markdown-it-emoji" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("markdown-it-emoji");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "react-content-loader":
/*!***************************************!*\
  !*** external "react-content-loader" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-content-loader");

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