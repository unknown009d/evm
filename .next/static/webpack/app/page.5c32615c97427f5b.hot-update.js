"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./src/components/ui/input.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n// import { Button, Input, Form, GoogleButton } from 'shadcn-ui';\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\nfunction Home() {\n    const handleGoogleLogin = ()=>{\n        console.log(\"Hello\");\n    };\n    const handleLogin = ()=>{\n        console.log(\"Hello\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mt-5 flex flex-col\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleLogin,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                    type: \"tel\",\n                    name: \"phone\",\n                    placeholder: \"Phone number\",\n                    required: true\n                }, void 0, false, {\n                    fileName: \"/app/src/app/page.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                    type: \"submit\",\n                    children: \"Login\"\n                }, void 0, false, {\n                    fileName: \"/app/src/app/page.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                    type: \"button\",\n                    onClick: handleGoogleLogin,\n                    className: \"flex flex-row gap-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            src: \"/Google.webp\",\n                            width: 16,\n                            height: 16,\n                            alt: \"Google\"\n                        }, void 0, false, {\n                            fileName: \"/app/src/app/page.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        }, this),\n                        \"Login with Google\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/app/src/app/page.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/app/src/app/page.tsx\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/app/src/app/page.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxpRUFBaUU7O0FBRWpCO0FBQ0Y7QUFDZjtBQUVoQixTQUFTRztJQUN0QixNQUFNQyxvQkFBb0I7UUFDeEJDLFFBQVFDLEdBQUcsQ0FBQztJQUNkO0lBQ0EsTUFBTUMsY0FBYztRQUNsQkYsUUFBUUMsR0FBRyxDQUFDO0lBQ2Q7SUFDQSxxQkFDRSw4REFBQ0U7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0M7WUFBS0MsVUFBVUo7OzhCQUNkLDhEQUFDTix1REFBS0E7b0JBQ0pXLE1BQUs7b0JBQ0xDLE1BQUs7b0JBQ0xDLGFBQVk7b0JBQ1pDLFFBQVE7Ozs7Ozs4QkFFViw4REFBQ2YseURBQU1BO29CQUFDWSxNQUFLOzhCQUFTOzs7Ozs7OEJBQ3RCLDhEQUFDWix5REFBTUE7b0JBQUNZLE1BQUs7b0JBQVNJLFNBQVNaO29CQUFtQkssV0FBVTs7c0NBQzFELDhEQUFDUCxrREFBS0E7NEJBQUNlLEtBQUk7NEJBQWVDLE9BQU87NEJBQUlDLFFBQVE7NEJBQUlDLEtBQUk7Ozs7Ozt3QkFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1oRjtLQXhCd0JqQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgQnV0dG9uLCBJbnB1dCwgRm9ybSwgR29vZ2xlQnV0dG9uIH0gZnJvbSAnc2hhZGNuLXVpJztcblwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9pbnB1dFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IGhhbmRsZUdvb2dsZUxvZ2luID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiSGVsbG9cIilcbiAgfVxuICBjb25zdCBoYW5kbGVMb2dpbiA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIkhlbGxvXCIpXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBtdC01IGZsZXggZmxleC1jb2xcIj5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVMb2dpbn0+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZWxcIlxuICAgICAgICAgIG5hbWU9XCJwaG9uZVwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJQaG9uZSBudW1iZXJcIlxuICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgIC8+XG4gICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiPkxvZ2luPC9CdXR0b24+XG4gICAgICAgIDxCdXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZUdvb2dsZUxvZ2lufSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGdhcC00XCI+XG4gICAgICAgICAgPEltYWdlIHNyYz1cIi9Hb29nbGUud2VicFwiIHdpZHRoPXsxNn0gaGVpZ2h0PXsxNn0gYWx0PVwiR29vZ2xlXCI+PC9JbWFnZT5cbiAgICAgICAgICBMb2dpbiB3aXRoIEdvb2dsZVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJCdXR0b24iLCJJbnB1dCIsIkltYWdlIiwiSG9tZSIsImhhbmRsZUdvb2dsZUxvZ2luIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUxvZ2luIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsIm9uU3VibWl0IiwidHlwZSIsIm5hbWUiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwib25DbGljayIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});