module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var identicon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! identicon.js */ "identicon.js");
/* harmony import */ var identicon_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(identicon_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "D:\\BlockChain\\Projects\\SimpleDropbox\\frontend\\components\\Header.js";


function Header({
  user
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "header",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container flex-lg-row flex-column",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "Simple Dropbox"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "right d-flex",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: [" ", user]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 11
        }, this), user ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: "ml-2",
          width: "30",
          height: "30",
          src: `data:image/png;base64,${new identicon_js__WEBPACK_IMPORTED_MODULE_1___default.a(user, 30).toString()}`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 13
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/Loading.js":
/*!*******************************!*\
  !*** ./components/Loading.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Loading; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\BlockChain\\Projects\\SimpleDropbox\\frontend\\components\\Loading.js";

function Loading() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "loading",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: "/loading-gear.gif",
      alt: ""
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
        children: "Loading... Please wait..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/index.scss */ "./styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/web3 */ "./src/web3.js");
/* harmony import */ var _src_SimpleDropbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/SimpleDropbox */ "./src/SimpleDropbox.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../components/Loading */ "./components/Loading.js");


var _jsxFileName = "D:\\BlockChain\\Projects\\SimpleDropbox\\frontend\\pages\\index.js";







function Home() {
  const {
    0: user,
    1: setUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])("");
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false);
  const {
    0: owner,
    1: setOwner
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])("");
  const {
    0: filesCount,
    1: setFilesCount
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(0);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(() => {
    loadBlockchain();
  }, []);

  const loadBlockchain = async () => {
    setLoading(true); // Load web3 to connect with metamask

    if (_src_web3__WEBPACK_IMPORTED_MODULE_3__["default"]) {
      const users = await _src_web3__WEBPACK_IMPORTED_MODULE_3__["default"].eth.getAccounts();
      setUser(users[0]);
    } // Fetch Owner


    const owner = await _src_SimpleDropbox__WEBPACK_IMPORTED_MODULE_4__["default"].methods.owner().call();
    setOwner(owner); // Fetch the number of files

    const count = await _src_SimpleDropbox__WEBPACK_IMPORTED_MODULE_4__["default"].methods.getLength().call();
    setFilesCount(count);
    setLoading(false);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Simple Dropbox by Akash"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: "This is a simple dropbox created using IPFS technology where anybody can store files and read them at anytime. For this, one has to be connected to Ethereum rinkeby testnet."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: "body",
      children: [loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Loading__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Header__WEBPACK_IMPORTED_MODULE_6__["default"], {
        user: user
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: ["Owner: ", owner]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: ["My files: ", filesCount, " files"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./src/SimpleDropbox.js":
/*!******************************!*\
  !*** ./src/SimpleDropbox.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web3 */ "./src/web3.js");

const address = "0x69717cec620256c9c7ba91e6753b11d7a9dc3bea";
const abi = [{
  inputs: [],
  stateMutability: "nonpayable",
  type: "constructor"
}, {
  inputs: [],
  name: "owner",
  outputs: [{
    internalType: "address",
    name: "",
    type: "address"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "string",
    name: "_hash",
    type: "string"
  }, {
    internalType: "string",
    name: "_fileName",
    type: "string"
  }, {
    internalType: "string",
    name: "_fileType",
    type: "string"
  }, {
    internalType: "uint256",
    name: "_date",
    type: "uint256"
  }],
  name: "add",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "uint256",
    name: "_index",
    type: "uint256"
  }],
  name: "getFile",
  outputs: [{
    internalType: "string",
    name: "",
    type: "string"
  }, {
    internalType: "string",
    name: "",
    type: "string"
  }, {
    internalType: "string",
    name: "",
    type: "string"
  }, {
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "getLength",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}];
let contract = false;

if (_web3__WEBPACK_IMPORTED_MODULE_0__["default"]) {
  contract = new _web3__WEBPACK_IMPORTED_MODULE_0__["default"].eth.Contract(abi, address);
}

/* harmony default export */ __webpack_exports__["default"] = (contract);

/***/ }),

/***/ "./src/web3.js":
/*!*********************!*\
  !*** ./src/web3.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ "web3");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);

let web3 = false;

if (false) {} else {
  // Handle the case when we are outside of the browser
  const provider = new web3__WEBPACK_IMPORTED_MODULE_0___default.a.providers.HttpProvider("https://rinkeby.infura.io/v3/15ebeb02363149d697d492aabeb7a6cf");
  web3 = new web3__WEBPACK_IMPORTED_MODULE_0___default.a(provider);
}

/* harmony default export */ __webpack_exports__["default"] = (web3);

/***/ }),

/***/ "./styles/index.scss":
/*!***************************!*\
  !*** ./styles/index.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "identicon.js":
/*!*******************************!*\
  !*** external "identicon.js" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("identicon.js");

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

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("web3");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2FkaW5nLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9TaW1wbGVEcm9wYm94LmpzIiwid2VicGFjazovLy8uL3NyYy93ZWIzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImlkZW50aWNvbi5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid2ViM1wiIl0sIm5hbWVzIjpbIkhlYWRlciIsInVzZXIiLCJJZGVudGljb24iLCJ0b1N0cmluZyIsIkxvYWRpbmciLCJIb21lIiwic2V0VXNlciIsInVzZVN0YXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJvd25lciIsInNldE93bmVyIiwiZmlsZXNDb3VudCIsInNldEZpbGVzQ291bnQiLCJ1c2VFZmZlY3QiLCJsb2FkQmxvY2tjaGFpbiIsIndlYjMiLCJ1c2VycyIsImV0aCIsImdldEFjY291bnRzIiwiU2ltcGxlRHJvcGJveCIsIm1ldGhvZHMiLCJjYWxsIiwiY291bnQiLCJnZXRMZW5ndGgiLCJhZGRyZXNzIiwiYWJpIiwiaW5wdXRzIiwic3RhdGVNdXRhYmlsaXR5IiwidHlwZSIsIm5hbWUiLCJvdXRwdXRzIiwiaW50ZXJuYWxUeXBlIiwiY29udHJhY3QiLCJDb250cmFjdCIsInByb3ZpZGVyIiwiV2ViMyIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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R0FBRyxJQUFJQywyQ0FBSSxDQUFDQyxTQUFMLENBQWVDLFlBQW5CLENBQ2YsK0RBRGUsQ0FBakI7QUFHQXRCLE1BQUksR0FBRyxJQUFJb0IsMkNBQUosQ0FBU0QsUUFBVCxDQUFQO0FBQ0Q7O0FBQ2NuQixtRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkEseUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsaUMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IElkZW50aWNvbiBmcm9tIFwiaWRlbnRpY29uLmpzXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcih7IHVzZXIgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0naGVhZGVyJz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciBmbGV4LWxnLXJvdyBmbGV4LWNvbHVtbic+XHJcbiAgICAgICAgPGgxPlNpbXBsZSBEcm9wYm94PC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmlnaHQgZC1mbGV4Jz5cclxuICAgICAgICAgIDxwPiB7dXNlcn08L3A+XHJcbiAgICAgICAgICB7dXNlciA/IChcclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nbWwtMidcclxuICAgICAgICAgICAgICB3aWR0aD0nMzAnXHJcbiAgICAgICAgICAgICAgaGVpZ2h0PSczMCdcclxuICAgICAgICAgICAgICBzcmM9e2BkYXRhOmltYWdlL3BuZztiYXNlNjQsJHtuZXcgSWRlbnRpY29uKFxyXG4gICAgICAgICAgICAgICAgdXNlcixcclxuICAgICAgICAgICAgICAgIDMwXHJcbiAgICAgICAgICAgICAgKS50b1N0cmluZygpfWB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9hZGluZygpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2xvYWRpbmcnPlxyXG4gICAgICA8aW1nIHNyYz0nL2xvYWRpbmctZ2Vhci5naWYnIGFsdD0nJyAvPlxyXG4gICAgICA8cD5cclxuICAgICAgICA8Yj5Mb2FkaW5nLi4uIFBsZWFzZSB3YWl0Li4uPC9iPlxyXG4gICAgICA8L3A+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBcIi4uL3N0eWxlcy9pbmRleC5zY3NzXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHdlYjMgZnJvbSBcIi4uL3NyYy93ZWIzXCI7XHJcbmltcG9ydCBTaW1wbGVEcm9wYm94IGZyb20gXCIuLi9zcmMvU2ltcGxlRHJvcGJveFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XHJcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuLy4uL2NvbXBvbmVudHMvTG9hZGluZ1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW293bmVyLCBzZXRPd25lcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZmlsZXNDb3VudCwgc2V0RmlsZXNDb3VudF0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvYWRCbG9ja2NoYWluKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBsb2FkQmxvY2tjaGFpbiA9IGFzeW5jICgpID0+IHtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAvLyBMb2FkIHdlYjMgdG8gY29ubmVjdCB3aXRoIG1ldGFtYXNrXHJcbiAgICBpZiAod2ViMykge1xyXG4gICAgICBjb25zdCB1c2VycyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICAgIHNldFVzZXIodXNlcnNbMF0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZldGNoIE93bmVyXHJcbiAgICBjb25zdCBvd25lciA9IGF3YWl0IFNpbXBsZURyb3Bib3gubWV0aG9kcy5vd25lcigpLmNhbGwoKTtcclxuICAgIHNldE93bmVyKG93bmVyKTtcclxuXHJcbiAgICAvLyBGZXRjaCB0aGUgbnVtYmVyIG9mIGZpbGVzXHJcbiAgICBjb25zdCBjb3VudCA9IGF3YWl0IFNpbXBsZURyb3Bib3gubWV0aG9kcy5nZXRMZW5ndGgoKS5jYWxsKCk7XHJcbiAgICBzZXRGaWxlc0NvdW50KGNvdW50KTtcclxuXHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlNpbXBsZSBEcm9wYm94IGJ5IEFrYXNoPC90aXRsZT5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgbmFtZT0nZGVzY3JpcHRpb24nXHJcbiAgICAgICAgICBjb250ZW50PSdUaGlzIGlzIGEgc2ltcGxlIGRyb3Bib3ggY3JlYXRlZCB1c2luZyBJUEZTIHRlY2hub2xvZ3kgd2hlcmUgYW55Ym9keSBjYW4gc3RvcmUgZmlsZXMgYW5kIHJlYWQgdGhlbSBhdCBhbnl0aW1lLiBGb3IgdGhpcywgb25lIGhhcyB0byBiZSBjb25uZWN0ZWQgdG8gRXRoZXJldW0gcmlua2VieSB0ZXN0bmV0LidcclxuICAgICAgICAvPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9J2JvZHknPlxyXG4gICAgICAgIHtsb2FkaW5nICYmIDxMb2FkaW5nIC8+fVxyXG4gICAgICAgIDxIZWFkZXIgdXNlcj17dXNlcn0gLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuICAgICAgICAgIDxwPk93bmVyOiB7b3duZXJ9PC9wPlxyXG4gICAgICAgICAgPHA+TXkgZmlsZXM6IHtmaWxlc0NvdW50fSBmaWxlczwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgd2ViMyBmcm9tIFwiLi93ZWIzXCI7XHJcblxyXG5jb25zdCBhZGRyZXNzID0gXCIweDY5NzE3Y2VjNjIwMjU2YzljN2JhOTFlNjc1M2IxMWQ3YTlkYzNiZWFcIjtcclxuXHJcbmNvbnN0IGFiaSA9IFtcclxuICB7XHJcbiAgICBpbnB1dHM6IFtdLFxyXG4gICAgc3RhdGVNdXRhYmlsaXR5OiBcIm5vbnBheWFibGVcIixcclxuICAgIHR5cGU6IFwiY29uc3RydWN0b3JcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlucHV0czogW10sXHJcbiAgICBuYW1lOiBcIm93bmVyXCIsXHJcbiAgICBvdXRwdXRzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBpbnRlcm5hbFR5cGU6IFwiYWRkcmVzc1wiLFxyXG4gICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgdHlwZTogXCJhZGRyZXNzXCIsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgc3RhdGVNdXRhYmlsaXR5OiBcInZpZXdcIixcclxuICAgIHR5cGU6IFwiZnVuY3Rpb25cIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlucHV0czogW1xyXG4gICAgICB7XHJcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcInN0cmluZ1wiLFxyXG4gICAgICAgIG5hbWU6IFwiX2hhc2hcIixcclxuICAgICAgICB0eXBlOiBcInN0cmluZ1wiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcInN0cmluZ1wiLFxyXG4gICAgICAgIG5hbWU6IFwiX2ZpbGVOYW1lXCIsXHJcbiAgICAgICAgdHlwZTogXCJzdHJpbmdcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGludGVybmFsVHlwZTogXCJzdHJpbmdcIixcclxuICAgICAgICBuYW1lOiBcIl9maWxlVHlwZVwiLFxyXG4gICAgICAgIHR5cGU6IFwic3RyaW5nXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpbnRlcm5hbFR5cGU6IFwidWludDI1NlwiLFxyXG4gICAgICAgIG5hbWU6IFwiX2RhdGVcIixcclxuICAgICAgICB0eXBlOiBcInVpbnQyNTZcIixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBuYW1lOiBcImFkZFwiLFxyXG4gICAgb3V0cHV0czogW10sXHJcbiAgICBzdGF0ZU11dGFiaWxpdHk6IFwibm9ucGF5YWJsZVwiLFxyXG4gICAgdHlwZTogXCJmdW5jdGlvblwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW5wdXRzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBpbnRlcm5hbFR5cGU6IFwidWludDI1NlwiLFxyXG4gICAgICAgIG5hbWU6IFwiX2luZGV4XCIsXHJcbiAgICAgICAgdHlwZTogXCJ1aW50MjU2XCIsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgbmFtZTogXCJnZXRGaWxlXCIsXHJcbiAgICBvdXRwdXRzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBpbnRlcm5hbFR5cGU6IFwic3RyaW5nXCIsXHJcbiAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICB0eXBlOiBcInN0cmluZ1wiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcInN0cmluZ1wiLFxyXG4gICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgdHlwZTogXCJzdHJpbmdcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGludGVybmFsVHlwZTogXCJzdHJpbmdcIixcclxuICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgIHR5cGU6IFwic3RyaW5nXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpbnRlcm5hbFR5cGU6IFwidWludDI1NlwiLFxyXG4gICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgdHlwZTogXCJ1aW50MjU2XCIsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgc3RhdGVNdXRhYmlsaXR5OiBcInZpZXdcIixcclxuICAgIHR5cGU6IFwiZnVuY3Rpb25cIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlucHV0czogW10sXHJcbiAgICBuYW1lOiBcImdldExlbmd0aFwiLFxyXG4gICAgb3V0cHV0czogW1xyXG4gICAgICB7XHJcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcInVpbnQyNTZcIixcclxuICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgIHR5cGU6IFwidWludDI1NlwiLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICAgIHN0YXRlTXV0YWJpbGl0eTogXCJ2aWV3XCIsXHJcbiAgICB0eXBlOiBcImZ1bmN0aW9uXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmxldCBjb250cmFjdCA9IGZhbHNlO1xyXG5pZiAod2ViMykge1xyXG4gIGNvbnRyYWN0ID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KGFiaSwgYWRkcmVzcyk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY29udHJhY3Q7XHJcbiIsImltcG9ydCBXZWIzIGZyb20gXCJ3ZWIzXCI7XHJcblxyXG5sZXQgd2ViMyA9IGZhbHNlO1xyXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cud2ViMyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gIC8vIEhhbmRsZSB0aGUgY2FzZSB3aGVuIHdlIGFyZSBpbnNpZGUgdGhlIGJyb3dzZXJcclxuICB3ZWIzID0gbmV3IFdlYjMod2luZG93LndlYjMuY3VycmVudFByb3ZpZGVyKTtcclxufSBlbHNlIHtcclxuICAvLyBIYW5kbGUgdGhlIGNhc2Ugd2hlbiB3ZSBhcmUgb3V0c2lkZSBvZiB0aGUgYnJvd3NlclxyXG4gIGNvbnN0IHByb3ZpZGVyID0gbmV3IFdlYjMucHJvdmlkZXJzLkh0dHBQcm92aWRlcihcclxuICAgIFwiaHR0cHM6Ly9yaW5rZWJ5LmluZnVyYS5pby92My8xNWViZWIwMjM2MzE0OWQ2OTdkNDkyYWFiZWI3YTZjZlwiXHJcbiAgKTtcclxuICB3ZWIzID0gbmV3IFdlYjMocHJvdmlkZXIpO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHdlYjM7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlkZW50aWNvbi5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIndlYjNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==