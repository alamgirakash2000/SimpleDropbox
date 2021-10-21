webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var D_BlockChain_Projects_SimpleDropbox_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_BlockChain_Projects_SimpleDropbox_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_BlockChain_Projects_SimpleDropbox_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_BlockChain_Projects_SimpleDropbox_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/index.scss */ "./styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/web3 */ "./src/web3.js");
/* harmony import */ var _src_SimpleDropbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/SimpleDropbox */ "./src/SimpleDropbox.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../components/Loading */ "./components/Loading.js");





var _jsxFileName = "D:\\BlockChain\\Projects\\SimpleDropbox\\frontend\\pages\\index.js",
    _s = $RefreshSig$();








function Home() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      user = _useState[0],
      setUser = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(false),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      owner = _useState3[0],
      setOwner = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(0),
      filesCount = _useState4[0],
      setFilesCount = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
    loadBlockchain();
  }, []);

  var loadBlockchain = /*#__PURE__*/function () {
    var _ref = Object(D_BlockChain_Projects_SimpleDropbox_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/D_BlockChain_Projects_SimpleDropbox_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var users, owner, count;
      return D_BlockChain_Projects_SimpleDropbox_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setLoading(true); // Load web3 to connect with metamask

              if (!_src_web3__WEBPACK_IMPORTED_MODULE_5__["default"]) {
                _context.next = 6;
                break;
              }

              _context.next = 4;
              return _src_web3__WEBPACK_IMPORTED_MODULE_5__["default"].eth.getAccounts();

            case 4:
              users = _context.sent;
              setUser(users[0]);

            case 6:
              _context.next = 8;
              return _src_SimpleDropbox__WEBPACK_IMPORTED_MODULE_6__["default"].methods.owner().call();

            case 8:
              owner = _context.sent;
              setOwner(owner); // Fetch my files

              _context.next = 12;
              return _src_SimpleDropbox__WEBPACK_IMPORTED_MODULE_6__["default"].methods.getLength().call();

            case 12:
              count = _context.sent;
              setFilesCount(count);
              setLoading(false);

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function loadBlockchain() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("title", {
        children: "Simple Dropbox by Akash"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("meta", {
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
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("main", {
      className: "body",
      children: [loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Loading__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Header__WEBPACK_IMPORTED_MODULE_8__["default"], {
        user: user
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
          children: "Start from here"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
          children: ["Owner: ", owner]
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

_s(Home, "tq6lHC6uX35lU0v2n8hEpqgvdPA=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwidXNlciIsInNldFVzZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIm93bmVyIiwic2V0T3duZXIiLCJmaWxlc0NvdW50Iiwic2V0RmlsZXNDb3VudCIsInVzZUVmZmVjdCIsImxvYWRCbG9ja2NoYWluIiwid2ViMyIsImV0aCIsImdldEFjY291bnRzIiwidXNlcnMiLCJTaW1wbGVEcm9wYm94IiwibWV0aG9kcyIsImNhbGwiLCJnZXRMZW5ndGgiLCJjb3VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQSxrQkFDTEMsc0RBQVEsQ0FBQyxFQUFELENBREg7QUFBQSxNQUN0QkMsSUFEc0I7QUFBQSxNQUNoQkMsT0FEZ0I7O0FBQUEsbUJBRUNGLHNEQUFRLENBQUMsS0FBRCxDQUZUO0FBQUEsTUFFdEJHLE9BRnNCO0FBQUEsTUFFYkMsVUFGYTs7QUFBQSxtQkFHSEosc0RBQVEsQ0FBQyxFQUFELENBSEw7QUFBQSxNQUd0QkssS0FIc0I7QUFBQSxNQUdmQyxRQUhlOztBQUFBLG1CQUlPTixzREFBUSxDQUFDLENBQUQsQ0FKZjtBQUFBLE1BSXRCTyxVQUpzQjtBQUFBLE1BSVZDLGFBSlU7O0FBTTdCQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsa0JBQWM7QUFDZixHQUZRLEVBRU4sRUFGTSxDQUFUOztBQUlBLE1BQU1BLGNBQWM7QUFBQSxrVEFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDckJOLHdCQUFVLENBQUMsSUFBRCxDQUFWLENBRHFCLENBRXJCOztBQUZxQixtQkFHakJPLGlEQUhpQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHFCQUlDQSxpREFBSSxDQUFDQyxHQUFMLENBQVNDLFdBQVQsRUFKRDs7QUFBQTtBQUliQyxtQkFKYTtBQUtuQloscUJBQU8sQ0FBQ1ksS0FBSyxDQUFDLENBQUQsQ0FBTixDQUFQOztBQUxtQjtBQUFBO0FBQUEscUJBU0RDLDBEQUFhLENBQUNDLE9BQWQsQ0FBc0JYLEtBQXRCLEdBQThCWSxJQUE5QixFQVRDOztBQUFBO0FBU2ZaLG1CQVRlO0FBVXJCQyxzQkFBUSxDQUFDRCxLQUFELENBQVIsQ0FWcUIsQ0FZckI7O0FBWnFCO0FBQUEscUJBYURVLDBEQUFhLENBQUNDLE9BQWQsQ0FBc0JFLFNBQXRCLEdBQWtDRCxJQUFsQyxFQWJDOztBQUFBO0FBYWZFLG1CQWJlO0FBY3JCWCwyQkFBYSxDQUFDVyxLQUFELENBQWI7QUFFQWYsd0JBQVUsQ0FBQyxLQUFELENBQVY7O0FBaEJxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFkTSxjQUFjO0FBQUE7QUFBQTtBQUFBLEtBQXBCOztBQW1CQSxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQ0UsWUFBSSxFQUFDLGFBRFA7QUFFRSxlQUFPLEVBQUM7QUFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFTRTtBQUFNLGVBQVMsRUFBQyxNQUFoQjtBQUFBLGlCQUNHUCxPQUFPLGlCQUFJLHFFQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEZCxlQUVFLHFFQUFDLDBEQUFEO0FBQVEsWUFBSSxFQUFFRjtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUdFO0FBQUssaUJBQVMsRUFBQyxXQUFmO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFBLGdDQUFXSSxLQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFURjtBQUFBLGtCQURGO0FBb0JEOztHQWpEdUJOLEk7O0tBQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOGFmZjNjNmY1ZDBmOGM1ZWU1MGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL3N0eWxlcy9pbmRleC5zY3NzXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHdlYjMgZnJvbSBcIi4uL3NyYy93ZWIzXCI7XHJcbmltcG9ydCBTaW1wbGVEcm9wYm94IGZyb20gXCIuLi9zcmMvU2ltcGxlRHJvcGJveFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XHJcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuLy4uL2NvbXBvbmVudHMvTG9hZGluZ1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW293bmVyLCBzZXRPd25lcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZmlsZXNDb3VudCwgc2V0RmlsZXNDb3VudF0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvYWRCbG9ja2NoYWluKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBsb2FkQmxvY2tjaGFpbiA9IGFzeW5jICgpID0+IHtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAvLyBMb2FkIHdlYjMgdG8gY29ubmVjdCB3aXRoIG1ldGFtYXNrXHJcbiAgICBpZiAod2ViMykge1xyXG4gICAgICBjb25zdCB1c2VycyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICAgIHNldFVzZXIodXNlcnNbMF0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZldGNoIE93bmVyXHJcbiAgICBjb25zdCBvd25lciA9IGF3YWl0IFNpbXBsZURyb3Bib3gubWV0aG9kcy5vd25lcigpLmNhbGwoKTtcclxuICAgIHNldE93bmVyKG93bmVyKTtcclxuXHJcbiAgICAvLyBGZXRjaCBteSBmaWxlc1xyXG4gICAgY29uc3QgY291bnQgPSBhd2FpdCBTaW1wbGVEcm9wYm94Lm1ldGhvZHMuZ2V0TGVuZ3RoKCkuY2FsbCgpO1xyXG4gICAgc2V0RmlsZXNDb3VudChjb3VudCk7XHJcblxyXG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5TaW1wbGUgRHJvcGJveCBieSBBa2FzaDwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIG5hbWU9J2Rlc2NyaXB0aW9uJ1xyXG4gICAgICAgICAgY29udGVudD0nVGhpcyBpcyBhIHNpbXBsZSBkcm9wYm94IGNyZWF0ZWQgdXNpbmcgSVBGUyB0ZWNobm9sb2d5IHdoZXJlIGFueWJvZHkgY2FuIHN0b3JlIGZpbGVzIGFuZCByZWFkIHRoZW0gYXQgYW55dGltZS4gRm9yIHRoaXMsIG9uZSBoYXMgdG8gYmUgY29ubmVjdGVkIHRvIEV0aGVyZXVtIHJpbmtlYnkgdGVzdG5ldC4nXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPSdib2R5Jz5cclxuICAgICAgICB7bG9hZGluZyAmJiA8TG9hZGluZyAvPn1cclxuICAgICAgICA8SGVhZGVyIHVzZXI9e3VzZXJ9IC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XHJcbiAgICAgICAgICA8cD5TdGFydCBmcm9tIGhlcmU8L3A+XHJcbiAgICAgICAgICA8cD5Pd25lcjoge293bmVyfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9