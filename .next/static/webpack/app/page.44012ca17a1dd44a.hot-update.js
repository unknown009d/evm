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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./src/components/ui/input.tsx\");\n/* harmony import */ var _components_ui_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/checkbox */ \"(app-pages-browser)/./src/components/ui/checkbox.tsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n// import { Button, Input, Form, GoogleButton } from 'shadcn-ui';\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const handleGoogleLogin = ()=>{\n        console.log(\"Hello\");\n    };\n    const handleLogin = (e)=>{\n        router.push(\"/auth\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mt-10 max-w-[500px]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-3xl font-bold mb-5\",\n                children: \"Welcome to Event Management Application\"\n            }, void 0, false, {\n                fileName: \"/app/src/app/page.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"opacity-50\",\n                children: \"Please enter the credentials to login\"\n            }, void 0, false, {\n                fileName: \"/app/src/app/page.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleLogin,\n                className: \"flex flex-col gap-4 mt-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"phno\",\n                        className: \"text-sm\",\n                        children: \"Enter phone numer\"\n                    }, void 0, false, {\n                        fileName: \"/app/src/app/page.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                        type: \"tel\",\n                        name: \"phone\",\n                        placeholder: \"Phone number\",\n                        id: \"phno\",\n                        maxLength: 10,\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"/app/src/app/page.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                        type: \"submit\",\n                        variant: \"outline\",\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"/app/src/app/page.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-center flex flex-row justify-stretch items-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"inline-flex items-center justify-center w-full\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                                    className: \"w-full h-0.5 my-8 bg-gray-200 border-0 rounded dark:bg-gray-800\"\n                                }, void 0, false, {\n                                    fileName: \"/app/src/app/page.tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"absolute px-4 -translate-x-1/2 bg-background left-1/2\",\n                                    children: \"or\"\n                                }, void 0, false, {\n                                    fileName: \"/app/src/app/page.tsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/app/src/app/page.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/app/src/app/page.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                        type: \"button\",\n                        onClick: handleGoogleLogin,\n                        className: \"flex flex-row gap-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                src: \"/Google.webp\",\n                                width: 16,\n                                height: 16,\n                                alt: \"Google\"\n                            }, void 0, false, {\n                                fileName: \"/app/src/app/page.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, this),\n                            \"Login with Google\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/app/src/app/page.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center justify-center mt-5 space-x-2 text-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_checkbox__WEBPACK_IMPORTED_MODULE_3__.Checkbox, {\n                                id: \"terms\"\n                            }, void 0, false, {\n                                fileName: \"/app/src/app/page.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"terms\",\n                                className: \"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70\",\n                                children: \"Keep me logged in\"\n                            }, void 0, false, {\n                                fileName: \"/app/src/app/page.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/app/src/app/page.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/app/src/app/page.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/app/src/app/page.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLGlFQUFpRTs7O0FBRWpCO0FBQ0Y7QUFDSztBQUNSO0FBR1o7QUFFaEIsU0FBU0s7O0lBQ3RCLE1BQU1DLFNBQVNILDBEQUFTQTtJQUV4QixNQUFNSSxvQkFBb0I7UUFDeEJDLFFBQVFDLEdBQUcsQ0FBQztJQUNkO0lBQ0EsTUFBTUMsY0FBYyxDQUFDQztRQUVuQkwsT0FBT00sSUFBSSxDQUFDO0lBQ2Q7SUFDQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUEwQjs7Ozs7OzBCQUN4Qyw4REFBQ0U7Z0JBQUVGLFdBQVU7MEJBQWE7Ozs7OzswQkFDMUIsOERBQUNHO2dCQUFLQyxVQUFVUjtnQkFBYUksV0FBVTs7a0NBQ3JDLDhEQUFDSzt3QkFBTUMsU0FBUTt3QkFBT04sV0FBVTtrQ0FBVTs7Ozs7O2tDQUMxQyw4REFBQ2IsdURBQUtBO3dCQUNKb0IsTUFBSzt3QkFDTEMsTUFBSzt3QkFDTEMsYUFBWTt3QkFDWkMsSUFBRzt3QkFDSEMsV0FBVzt3QkFDWEMsUUFBUTs7Ozs7O2tDQUVWLDhEQUFDMUIseURBQU1BO3dCQUFDcUIsTUFBSzt3QkFBU00sU0FBUztrQ0FBVzs7Ozs7O2tDQUMxQyw4REFBQ2Q7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ2M7b0NBQUdkLFdBQVU7Ozs7Ozs4Q0FDZCw4REFBQ0Q7b0NBQUlDLFdBQVU7OENBQXdEOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FLM0UsOERBQUNkLHlEQUFNQTt3QkFBQ3FCLE1BQUs7d0JBQVNRLFNBQVN0Qjt3QkFBbUJPLFdBQVU7OzBDQUMxRCw4REFBQ1Ysa0RBQUtBO2dDQUFDMEIsS0FBSTtnQ0FBZUMsT0FBTztnQ0FBSUMsUUFBUTtnQ0FBSUMsS0FBSTs7Ozs7OzRCQUFpQjs7Ozs7OztrQ0FHeEUsOERBQUNwQjt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNaLDZEQUFRQTtnQ0FBQ3NCLElBQUc7Ozs7OzswQ0FDYiw4REFBQ0w7Z0NBQ0NDLFNBQVE7Z0NBQ1JOLFdBQVU7MENBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9YO0dBakR3QlQ7O1FBQ1BGLHNEQUFTQTs7O0tBREZFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS50c3g/ZjY4YSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBCdXR0b24sIElucHV0LCBGb3JtLCBHb29nbGVCdXR0b24gfSBmcm9tICdzaGFkY24tdWknO1xuXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2J1dHRvblwiO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2lucHV0XCI7XG5pbXBvcnQgeyBDaGVja2JveCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvY2hlY2tib3hcIlxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJ1xuXG5cbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gIGNvbnN0IGhhbmRsZUdvb2dsZUxvZ2luID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiSGVsbG9cIilcbiAgfVxuICBjb25zdCBoYW5kbGVMb2dpbiA9IChlKSA9PiB7XG4gICAgXG4gICAgcm91dGVyLnB1c2goJy9hdXRoJylcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG10LTEwIG1heC13LVs1MDBweF1cIj5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgbWItNVwiPldlbGNvbWUgdG8gRXZlbnQgTWFuYWdlbWVudCBBcHBsaWNhdGlvbjwvaDI+XG4gICAgICA8cCBjbGFzc05hbWU9XCJvcGFjaXR5LTUwXCI+UGxlYXNlIGVudGVyIHRoZSBjcmVkZW50aWFscyB0byBsb2dpbjwvcD5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVMb2dpbn0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtNCBtdC0xMFwiPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBobm9cIiBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+RW50ZXIgcGhvbmUgbnVtZXI8L2xhYmVsPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICB0eXBlPVwidGVsXCJcbiAgICAgICAgICBuYW1lPVwicGhvbmVcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGhvbmUgbnVtYmVyXCJcbiAgICAgICAgICBpZD1cInBobm9cIlxuICAgICAgICAgIG1heExlbmd0aD17MTB9XG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgLz5cbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgdmFyaWFudD17XCJvdXRsaW5lXCJ9PkxvZ2luPC9CdXR0b24+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgZmxleCBmbGV4LXJvdyBqdXN0aWZ5LXN0cmV0Y2ggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy1mdWxsXCI+XG4gICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwidy1mdWxsIGgtMC41IG15LTggYmctZ3JheS0yMDAgYm9yZGVyLTAgcm91bmRlZCBkYXJrOmJnLWdyYXktODAwXCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcHgtNCAtdHJhbnNsYXRlLXgtMS8yIGJnLWJhY2tncm91bmQgbGVmdC0xLzJcIj5cbiAgICAgICAgICAgICAgb3JcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17aGFuZGxlR29vZ2xlTG9naW59IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgZ2FwLTRcIj5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL0dvb2dsZS53ZWJwXCIgd2lkdGg9ezE2fSBoZWlnaHQ9ezE2fSBhbHQ9XCJHb29nbGVcIj48L0ltYWdlPlxuICAgICAgICAgIExvZ2luIHdpdGggR29vZ2xlXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG10LTUgc3BhY2UteC0yIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgPENoZWNrYm94IGlkPVwidGVybXNcIiAvPlxuICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgaHRtbEZvcj1cInRlcm1zXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW0gbGVhZGluZy1ub25lIHBlZXItZGlzYWJsZWQ6Y3Vyc29yLW5vdC1hbGxvd2VkIHBlZXItZGlzYWJsZWQ6b3BhY2l0eS03MFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgS2VlcCBtZSBsb2dnZWQgaW5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJCdXR0b24iLCJJbnB1dCIsIkNoZWNrYm94IiwidXNlUm91dGVyIiwiSW1hZ2UiLCJIb21lIiwicm91dGVyIiwiaGFuZGxlR29vZ2xlTG9naW4iLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlTG9naW4iLCJlIiwicHVzaCIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwicCIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaHRtbEZvciIsInR5cGUiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJpZCIsIm1heExlbmd0aCIsInJlcXVpcmVkIiwidmFyaWFudCIsImhyIiwib25DbGljayIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});