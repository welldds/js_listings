/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Shared/GoTop.js":
/*!************************************!*\
  !*** ./components/Shared/GoTop.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst GoTop = ()=>{\n    const { 0: isVisible , 1: setisVisible  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        document.addEventListener('scroll', function(e) {\n            toggleVisibility();\n        });\n    }, []);\n    const toggleVisibility = ()=>{\n        if (window.pageYOffset > 300) {\n            setisVisible(true);\n        } else {\n            setisVisible(false);\n        }\n    };\n    const scrollToTop = ()=>{\n        window.scrollTo({\n            top: 0,\n            behavior: 'smooth'\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: isVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"go-top active\",\n            onClick: ()=>scrollToTop()\n            ,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                className: \"bx bx-up-arrow-alt\"\n            }, void 0, false, {\n                fileName: \"D:\\\\INDICE React Next Theme\\\\themeforest-WFKLJRm1-indice-directory-listing-react-next-template\\\\indice-directory-listing-react-next-template\\\\indice-next\\\\indice-next\\\\indice-dynamic-js\\\\components\\\\Shared\\\\GoTop.js\",\n                lineNumber: 31,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\INDICE React Next Theme\\\\themeforest-WFKLJRm1-indice-directory-listing-react-next-template\\\\indice-directory-listing-react-next-template\\\\indice-next\\\\indice-next\\\\indice-dynamic-js\\\\components\\\\Shared\\\\GoTop.js\",\n            lineNumber: 30,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GoTop);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NoYXJlZC9Hb1RvcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBa0Q7QUFFbEQsS0FBSyxDQUFDRyxLQUFLLE9BQVMsQ0FBQztJQUNuQixLQUFLLE1BQUVDLFNBQVMsTUFBRUMsWUFBWSxNQUFJSiwrQ0FBUSxDQUFDLEtBQUs7SUFFaERDLGdEQUFTLEtBQU8sQ0FBQztRQUNmSSxRQUFRLENBQUNDLGdCQUFnQixDQUFDLENBQVEsU0FBRSxRQUFRLENBQUVDLENBQUMsRUFBRSxDQUFDO1lBQ2hEQyxnQkFBZ0I7UUFDbEIsQ0FBQztJQUNILENBQUMsRUFBRSxDQUFDLENBQUM7SUFFTCxLQUFLLENBQUNBLGdCQUFnQixPQUFTLENBQUM7UUFDOUIsRUFBRSxFQUFFQyxNQUFNLENBQUNDLFdBQVcsR0FBRyxHQUFHLEVBQUUsQ0FBQztZQUM3Qk4sWUFBWSxDQUFDLElBQUk7UUFDbkIsQ0FBQyxNQUFNLENBQUM7WUFDTkEsWUFBWSxDQUFDLEtBQUs7UUFDcEIsQ0FBQztJQUNILENBQUM7SUFFRCxLQUFLLENBQUNPLFdBQVcsT0FBUyxDQUFDO1FBQ3pCRixNQUFNLENBQUNHLFFBQVEsQ0FBQyxDQUFDO1lBQ2ZDLEdBQUcsRUFBRSxDQUFDO1lBQ05DLFFBQVEsRUFBRSxDQUFRO1FBQ3BCLENBQUM7SUFDSCxDQUFDO0lBRUQsTUFBTTtrQkFFRFgsU0FBUyxnRkFDUFksQ0FBRztZQUFDQyxTQUFTLEVBQUMsQ0FBZTtZQUFDQyxPQUFPLE1BQVFOLFdBQVc7O2tHQUN0RE8sQ0FBQztnQkFBQ0YsU0FBUyxFQUFDLENBQW9COzs7Ozs7Ozs7Ozs7QUFLM0MsQ0FBQztBQUVELGlFQUFlZCxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRpY2UvLi9jb21wb25lbnRzL1NoYXJlZC9Hb1RvcC5qcz9lMDRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBHb1RvcCA9ICgpID0+IHtcbiAgY29uc3QgW2lzVmlzaWJsZSwgc2V0aXNWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICB0b2dnbGVWaXNpYmlsaXR5KCk7XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCB0b2dnbGVWaXNpYmlsaXR5ID0gKCkgPT4ge1xuICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiAzMDApIHtcbiAgICAgIHNldGlzVmlzaWJsZSh0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0aXNWaXNpYmxlKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2Nyb2xsVG9Ub3AgPSAoKSA9PiB7XG4gICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgIHRvcDogMCxcbiAgICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7aXNWaXNpYmxlICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dvLXRvcCBhY3RpdmUnIG9uQ2xpY2s9eygpID0+IHNjcm9sbFRvVG9wKCl9PlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT0nYnggYngtdXAtYXJyb3ctYWx0Jz48L2k+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdvVG9wO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJHb1RvcCIsImlzVmlzaWJsZSIsInNldGlzVmlzaWJsZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJ0b2dnbGVWaXNpYmlsaXR5Iiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJzY3JvbGxUb1RvcCIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Shared/GoTop.js\n");

/***/ }),

/***/ "./components/Shared/Loader.js":
/*!*************************************!*\
  !*** ./components/Shared/Loader.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Loader = ({ loading  })=>{\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"preloader\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"preloader\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                        fileName: \"D:\\\\INDICE React Next Theme\\\\themeforest-WFKLJRm1-indice-directory-listing-react-next-template\\\\indice-directory-listing-react-next-template\\\\indice-next\\\\indice-next\\\\indice-dynamic-js\\\\components\\\\Shared\\\\Loader.js\",\n                        lineNumber: 9,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                        fileName: \"D:\\\\INDICE React Next Theme\\\\themeforest-WFKLJRm1-indice-directory-listing-react-next-template\\\\indice-directory-listing-react-next-template\\\\indice-next\\\\indice-next\\\\indice-dynamic-js\\\\components\\\\Shared\\\\Loader.js\",\n                        lineNumber: 10,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\INDICE React Next Theme\\\\themeforest-WFKLJRm1-indice-directory-listing-react-next-template\\\\indice-directory-listing-react-next-template\\\\indice-next\\\\indice-next\\\\indice-dynamic-js\\\\components\\\\Shared\\\\Loader.js\",\n                lineNumber: 8,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\INDICE React Next Theme\\\\themeforest-WFKLJRm1-indice-directory-listing-react-next-template\\\\indice-directory-listing-react-next-template\\\\indice-next\\\\indice-next\\\\indice-dynamic-js\\\\components\\\\Shared\\\\Loader.js\",\n            lineNumber: 7,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loader);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NoYXJlZC9Mb2FkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXlCO0FBRXpCLEtBQUssQ0FBQ0MsTUFBTSxJQUFJLENBQUMsQ0FBQ0MsT0FBTyxFQUFDLENBQUMsR0FBSyxDQUFDO0lBQy9CLE1BQU07a0JBRURBLE9BQU8sZ0ZBQ0xDLENBQUc7WUFBQ0MsU0FBUyxFQUFDLENBQVc7a0dBQ3ZCRCxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBVzs7Z0dBQ3ZCQyxDQUFJOzs7OztnR0FDSkEsQ0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNakIsQ0FBQztBQUVELGlFQUFlSixNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRpY2UvLi9jb21wb25lbnRzL1NoYXJlZC9Mb2FkZXIuanM/NjM1ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBMb2FkZXIgPSAoeyBsb2FkaW5nIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2xvYWRpbmcgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJlbG9hZGVyJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJlbG9hZGVyJz5cbiAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTG9hZGVyIiwibG9hZGluZyIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Shared/Loader.js\n");

/***/ }),

/***/ "./components/_App/Layout.js":
/*!***********************************!*\
  !*** ./components/_App/Layout.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toast-notifications */ \"react-toast-notifications\");\n/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toast_notifications__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nprogress */ \"nprogress\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n(next_router__WEBPACK_IMPORTED_MODULE_3___default().onRouteChangeStart) = ()=>nprogress__WEBPACK_IMPORTED_MODULE_4___default().start()\n;\n(next_router__WEBPACK_IMPORTED_MODULE_3___default().onRouteChangeComplete) = ()=>nprogress__WEBPACK_IMPORTED_MODULE_4___default().done()\n;\n(next_router__WEBPACK_IMPORTED_MODULE_3___default().onRouteChangeError) = ()=>nprogress__WEBPACK_IMPORTED_MODULE_4___default().done()\n;\nconst Layout = ({ children  })=>{\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        charSet: \"utf-8\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\INDICE React Next Theme\\\\themeforest-WFKLJRm1-indice-directory-listing-react-next-template\\\\indice-directory-listing-react-next-template\\\\indice-next\\\\indice-next\\\\indice-dynamic-js\\\\components\\\\_App\\\\Layout.js\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\INDICE React Next Theme\\\\themeforest-WFKLJRm1-indice-directory-listing-react-next-template\\\\indice-directory-listing-react-next-template\\\\indice-next\\\\indice-next\\\\indice-dynamic-js\\\\components\\\\_App\\\\Layout.js\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Chirie 24 - Anunturi Chirie Romania\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\INDICE React Next Theme\\\\themeforest-WFKLJRm1-indice-directory-listing-react-next-template\\\\indice-directory-listing-react-next-template\\\\indice-next\\\\indice-next\\\\indice-dynamic-js\\\\components\\\\_App\\\\Layout.js\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\INDICE React Next Theme\\\\themeforest-WFKLJRm1-indice-directory-listing-react-next-template\\\\indice-directory-listing-react-next-template\\\\indice-next\\\\indice-next\\\\indice-dynamic-js\\\\components\\\\_App\\\\Layout.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toast_notifications__WEBPACK_IMPORTED_MODULE_2__.ToastProvider, {\n                placement: \"bottom-center\",\n                autoDismissTimeout: 6000,\n                autoDismiss: true,\n                children: children\n            }, void 0, false, {\n                fileName: \"D:\\\\INDICE React Next Theme\\\\themeforest-WFKLJRm1-indice-directory-listing-react-next-template\\\\indice-directory-listing-react-next-template\\\\indice-next\\\\indice-next\\\\indice-dynamic-js\\\\components\\\\_App\\\\Layout.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL19BcHAvTGF5b3V0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUE0QjtBQUM2QjtBQUNWO0FBQ2Q7QUFFakNFLHVFQUF5QixPQUFTRSxzREFBZTs7QUFDakRGLDBFQUE0QixPQUFTRSxxREFBYzs7QUFDbkRGLHVFQUF5QixPQUFTRSxxREFBYzs7QUFFaEQsS0FBSyxDQUFDTSxNQUFNLElBQUksQ0FBQyxDQUFDQyxRQUFRLEVBQUMsQ0FBQyxHQUFLLENBQUM7SUFDaEMsTUFBTTs7d0ZBRURYLGtEQUFJOztnR0FFRlksQ0FBSTt3QkFBQ0MsT0FBTyxFQUFDLENBQU87Ozs7OztnR0FDcEJELENBQUk7d0JBQUNFLElBQUksRUFBQyxDQUFVO3dCQUFDQyxPQUFPLEVBQUMsQ0FBcUM7Ozs7OztnR0FFbEVDLENBQUs7a0NBQUMsQ0FBbUM7Ozs7Ozs7Ozs7Ozt3RkFHM0NmLG9FQUFhO2dCQUNaZ0IsU0FBUyxFQUFDLENBQWU7Z0JBQ3pCQyxrQkFBa0IsRUFBRSxJQUFJO2dCQUN4QkMsV0FBVzswQkFFVlIsUUFBUTs7Ozs7Ozs7QUFJakIsQ0FBQztBQUVELGlFQUFlRCxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRpY2UvLi9jb21wb25lbnRzL19BcHAvTGF5b3V0LmpzPzBmOGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IFRvYXN0UHJvdmlkZXIgfSBmcm9tICdyZWFjdC10b2FzdC1ub3RpZmljYXRpb25zJztcbmltcG9ydCBSb3V0ZXIsIHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tICducHJvZ3Jlc3MnO1xuXG5Sb3V0ZXIub25Sb3V0ZUNoYW5nZVN0YXJ0ID0gKCkgPT4gTlByb2dyZXNzLnN0YXJ0KCk7XG5Sb3V0ZXIub25Sb3V0ZUNoYW5nZUNvbXBsZXRlID0gKCkgPT4gTlByb2dyZXNzLmRvbmUoKTtcblJvdXRlci5vblJvdXRlQ2hhbmdlRXJyb3IgPSAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpO1xuXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICB7LyogUmVxdWlyZWQgbWV0YSB0YWdzICovfVxuICAgICAgICA8bWV0YSBjaGFyU2V0PSd1dGYtOCcgLz5cbiAgICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J3dpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xJyAvPlxuXG4gICAgICAgIDx0aXRsZT5DaGlyaWUgMjQgLSBBbnVudHVyaSBDaGlyaWUgUm9tYW5pYTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxUb2FzdFByb3ZpZGVyXG4gICAgICAgIHBsYWNlbWVudD0nYm90dG9tLWNlbnRlcidcbiAgICAgICAgYXV0b0Rpc21pc3NUaW1lb3V0PXs2MDAwfVxuICAgICAgICBhdXRvRGlzbWlzc1xuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L1RvYXN0UHJvdmlkZXI+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXSwibmFtZXMiOlsiSGVhZCIsIlRvYXN0UHJvdmlkZXIiLCJSb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJOUHJvZ3Jlc3MiLCJvblJvdXRlQ2hhbmdlU3RhcnQiLCJzdGFydCIsIm9uUm91dGVDaGFuZ2VDb21wbGV0ZSIsImRvbmUiLCJvblJvdXRlQ2hhbmdlRXJyb3IiLCJMYXlvdXQiLCJjaGlsZHJlbiIsIm1ldGEiLCJjaGFyU2V0IiwibmFtZSIsImNvbnRlbnQiLCJ0aXRsZSIsInBsYWNlbWVudCIsImF1dG9EaXNtaXNzVGltZW91dCIsImF1dG9EaXNtaXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/_App/Layout.js\n");

/***/ }),

/***/ "./contexts/index.js":
/*!***************************!*\
  !*** ./contexts/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"IndiceProvider\": () => (/* binding */ IndiceProvider),\n/* harmony export */   \"IndiceContext\": () => (/* binding */ IndiceContext)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst IndiceContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst IndiceProvider = ({ children  })=>{\n    const { 0: displaySideMenu , 1: setDisplaySideMenu  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { 0: displayAuthModal , 1: setDisplayAuthModal  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { 0: activeListing , 1: setActiveListing  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const { 0: pendingListing , 1: setPendingListing  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const toggleSideMenu = ()=>{\n        setDisplaySideMenu(!displaySideMenu);\n    };\n    const toggleAuthModal = ()=>{\n        setDisplayAuthModal(!displayAuthModal);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(IndiceContext.Provider, {\n        value: {\n            displaySideMenu,\n            toggleSideMenu,\n            displayAuthModal,\n            toggleAuthModal,\n            activeListing,\n            setActiveListing,\n            pendingListing,\n            setPendingListing\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\INDICE React Next Theme\\\\themeforest-WFKLJRm1-indice-directory-listing-react-next-template\\\\indice-directory-listing-react-next-template\\\\indice-next\\\\indice-next\\\\indice-dynamic-js\\\\contexts\\\\index.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined));\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQStDO0FBRS9DLEtBQUssQ0FBQ0UsYUFBYSxpQkFBR0Ysb0RBQWE7QUFFbkMsS0FBSyxDQUFDRyxjQUFjLElBQUksQ0FBQyxDQUFDQyxRQUFRLEVBQUMsQ0FBQyxHQUFLLENBQUM7SUFDeEMsS0FBSyxNQUFFQyxlQUFlLE1BQUVDLGtCQUFrQixNQUFJTCwrQ0FBUSxDQUFDLEtBQUs7SUFDNUQsS0FBSyxNQUFFTSxnQkFBZ0IsTUFBRUMsbUJBQW1CLE1BQUlQLCtDQUFRLENBQUMsS0FBSztJQUM5RCxLQUFLLE1BQUVRLGFBQWEsTUFBRUMsZ0JBQWdCLE1BQUlULCtDQUFRLENBQUMsQ0FBRTtJQUNyRCxLQUFLLE1BQUVVLGNBQWMsTUFBRUMsaUJBQWlCLE1BQUlYLCtDQUFRLENBQUMsQ0FBRTtJQUV2RCxLQUFLLENBQUNZLGNBQWMsT0FBUyxDQUFDO1FBQzVCUCxrQkFBa0IsRUFBRUQsZUFBZTtJQUNyQyxDQUFDO0lBRUQsS0FBSyxDQUFDUyxlQUFlLE9BQVMsQ0FBQztRQUM3Qk4sbUJBQW1CLEVBQUVELGdCQUFnQjtJQUN2QyxDQUFDO0lBR0QsTUFBTSw2RUFDSEwsYUFBYSxDQUFDYSxRQUFRO1FBQ3JCQyxLQUFLLEVBQUUsQ0FBQztZQUNOWCxlQUFlO1lBQ2ZRLGNBQWM7WUFDZE4sZ0JBQWdCO1lBQ2hCTyxlQUFlO1lBQ2ZMLGFBQWE7WUFDYkMsZ0JBQWdCO1lBQ2hCQyxjQUFjO1lBQ2RDLGlCQUFpQjtRQUNuQixDQUFDO2tCQUVBUixRQUFROzs7Ozs7QUFHZixDQUFDO0FBRXdDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW5kaWNlLy4vY29udGV4dHMvaW5kZXguanM/NTE2MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgSW5kaWNlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuY29uc3QgSW5kaWNlUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFtkaXNwbGF5U2lkZU1lbnUsIHNldERpc3BsYXlTaWRlTWVudV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtkaXNwbGF5QXV0aE1vZGFsLCBzZXREaXNwbGF5QXV0aE1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2FjdGl2ZUxpc3RpbmcsIHNldEFjdGl2ZUxpc3RpbmddID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbcGVuZGluZ0xpc3RpbmcsIHNldFBlbmRpbmdMaXN0aW5nXSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zdCB0b2dnbGVTaWRlTWVudSA9ICgpID0+IHtcbiAgICBzZXREaXNwbGF5U2lkZU1lbnUoIWRpc3BsYXlTaWRlTWVudSk7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlQXV0aE1vZGFsID0gKCkgPT4ge1xuICAgIHNldERpc3BsYXlBdXRoTW9kYWwoIWRpc3BsYXlBdXRoTW9kYWwpO1xuICB9O1xuXG5cbiAgcmV0dXJuIChcbiAgICA8SW5kaWNlQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgZGlzcGxheVNpZGVNZW51LFxuICAgICAgICB0b2dnbGVTaWRlTWVudSxcbiAgICAgICAgZGlzcGxheUF1dGhNb2RhbCxcbiAgICAgICAgdG9nZ2xlQXV0aE1vZGFsLFxuICAgICAgICBhY3RpdmVMaXN0aW5nLFxuICAgICAgICBzZXRBY3RpdmVMaXN0aW5nLFxuICAgICAgICBwZW5kaW5nTGlzdGluZyxcbiAgICAgICAgc2V0UGVuZGluZ0xpc3RpbmdcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvSW5kaWNlQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCB7IEluZGljZVByb3ZpZGVyLCBJbmRpY2VDb250ZXh0IH07XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwiSW5kaWNlQ29udGV4dCIsIkluZGljZVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJkaXNwbGF5U2lkZU1lbnUiLCJzZXREaXNwbGF5U2lkZU1lbnUiLCJkaXNwbGF5QXV0aE1vZGFsIiwic2V0RGlzcGxheUF1dGhNb2RhbCIsImFjdGl2ZUxpc3RpbmciLCJzZXRBY3RpdmVMaXN0aW5nIiwicGVuZGluZ0xpc3RpbmciLCJzZXRQZW5kaW5nTGlzdGluZyIsInRvZ2dsZVNpZGVNZW51IiwidG9nZ2xlQXV0aE1vZGFsIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./contexts/index.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts */ \"./contexts/index.js\");\n/* harmony import */ var _public_css_animate_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/css/animate.min.css */ \"./public/css/animate.min.css\");\n/* harmony import */ var _public_css_animate_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_css_animate_min_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _public_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/css/bootstrap.min.css */ \"./public/css/bootstrap.min.css\");\n/* harmony import */ var _public_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _public_css_meanmenu_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/css/meanmenu.min.css */ \"./public/css/meanmenu.min.css\");\n/* harmony import */ var _public_css_meanmenu_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_css_meanmenu_min_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _public_css_boxicons_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/css/boxicons.min.css */ \"./public/css/boxicons.min.css\");\n/* harmony import */ var _public_css_boxicons_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_css_boxicons_min_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _public_css_flaticon_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/css/flaticon.css */ \"./public/css/flaticon.css\");\n/* harmony import */ var _public_css_flaticon_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_css_flaticon_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _public_css_nprogress_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../public/css/nprogress.css */ \"./public/css/nprogress.css\");\n/* harmony import */ var _public_css_nprogress_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_css_nprogress_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _public_css_nice_select_min_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../public/css/nice-select.min.css */ \"./public/css/nice-select.min.css\");\n/* harmony import */ var _public_css_nice_select_min_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_css_nice_select_min_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _public_css_style_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../public/css/style.css */ \"./public/css/style.css\");\n/* harmony import */ var _public_css_style_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_css_style_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _node_modules_react_modal_video_css_modal_video_min_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../node_modules/react-modal-video/css/modal-video.min.css */ \"./node_modules/react-modal-video/css/modal-video.min.css\");\n/* harmony import */ var _node_modules_react_modal_video_css_modal_video_min_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_modal_video_css_modal_video_min_css__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _public_css_responsive_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../public/css/responsive.css */ \"./public/css/responsive.css\");\n/* harmony import */ var _public_css_responsive_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_public_css_responsive_css__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _components_App_Layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/_App/Layout */ \"./components/_App/Layout.js\");\n/* harmony import */ var _components_Shared_Loader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Shared/Loader */ \"./components/Shared/Loader.js\");\n/* harmony import */ var _components_Shared_GoTop__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Shared/GoTop */ \"./components/Shared/GoTop.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../utils/auth */ \"./utils/auth.js\");\n/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../utils/baseUrl */ \"./utils/baseUrl.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_19__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setTimeout(()=>setLoading(false)\n        , 2000);\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_App_Layout__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts__WEBPACK_IMPORTED_MODULE_2__.IndiceProvider, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"D:\\\\INDICE React Next Theme\\\\themeforest-WFKLJRm1-indice-directory-listing-react-next-template\\\\indice-directory-listing-react-next-template\\\\indice-next\\\\indice-next\\\\indice-dynamic-js\\\\pages\\\\_app.js\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Shared_Loader__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n                        loading: loading\n                    }, void 0, false, {\n                        fileName: \"D:\\\\INDICE React Next Theme\\\\themeforest-WFKLJRm1-indice-directory-listing-react-next-template\\\\indice-directory-listing-react-next-template\\\\indice-next\\\\indice-next\\\\indice-dynamic-js\\\\pages\\\\_app.js\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Shared_GoTop__WEBPACK_IMPORTED_MODULE_15__[\"default\"], {\n                        scrollStepInPx: \"100\",\n                        delayInMs: \"10.50\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\INDICE React Next Theme\\\\themeforest-WFKLJRm1-indice-directory-listing-react-next-template\\\\indice-directory-listing-react-next-template\\\\indice-next\\\\indice-next\\\\indice-dynamic-js\\\\pages\\\\_app.js\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\INDICE React Next Theme\\\\themeforest-WFKLJRm1-indice-directory-listing-react-next-template\\\\indice-directory-listing-react-next-template\\\\indice-next\\\\indice-next\\\\indice-dynamic-js\\\\pages\\\\_app.js\",\n                lineNumber: 34,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\INDICE React Next Theme\\\\themeforest-WFKLJRm1-indice-directory-listing-react-next-template\\\\indice-directory-listing-react-next-template\\\\indice-next\\\\indice-next\\\\indice-dynamic-js\\\\pages\\\\_app.js\",\n            lineNumber: 33,\n            columnNumber: 7\n        }, this)\n    }, void 0, false));\n}\nMyApp.getInitialProps = async ({ Component , ctx  })=>{\n    const { token  } = (0,nookies__WEBPACK_IMPORTED_MODULE_16__.parseCookies)(ctx);\n    let pageProps = {};\n    if (Component.getInitialProps) {\n        pageProps = await Component.getInitialProps(ctx);\n    }\n    if (!token) {\n        // if a user not logged in then user can't access those pages\n        const isProtectedRoute = ctx.pathname === '/dashboard' || ctx.pathname === '/dashboard/add-listing' || ctx.pathname === '/dashboard/messages' || ctx.pathname === '/dashboard/bookings' || ctx.pathname === '/dashboard/wallet' || ctx.pathname === '/dashboard/my-listing/active' || ctx.pathname === '/dashboard/reviews';\n        if (isProtectedRoute) {\n            (0,_utils_auth__WEBPACK_IMPORTED_MODULE_17__.redirectUser)(ctx, '/');\n        }\n    } else {\n        // if a user logged in then user can't access those pages\n        try {\n            const payload = {\n                headers: {\n                    Authorization: token\n                }\n            };\n            //user\n            const url = `${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_18__[\"default\"]}/api/v1/auth/account`;\n            const response = await axios__WEBPACK_IMPORTED_MODULE_19___default().get(url, payload);\n            const user = response.data;\n            pageProps.user = user;\n        } catch (error) {\n            //invalid token\n            (0,nookies__WEBPACK_IMPORTED_MODULE_16__.destroyCookie)(ctx, 'token');\n        }\n    }\n    return {\n        pageProps\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Iiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW5kaWNlLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSW5kaWNlUHJvdmlkZXIgfSBmcm9tICcuLi9jb250ZXh0cyc7XG5cbmltcG9ydCAnLi4vcHVibGljL2Nzcy9hbmltYXRlLm1pbi5jc3MnO1xuaW1wb3J0ICcuLi9wdWJsaWMvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcbmltcG9ydCAnLi4vcHVibGljL2Nzcy9tZWFubWVudS5taW4uY3NzJztcbmltcG9ydCAnLi4vcHVibGljL2Nzcy9ib3hpY29ucy5taW4uY3NzJztcbmltcG9ydCAnLi4vcHVibGljL2Nzcy9mbGF0aWNvbi5jc3MnO1xuaW1wb3J0ICcuLi9wdWJsaWMvY3NzL25wcm9ncmVzcy5jc3MnO1xuaW1wb3J0ICcuLi9wdWJsaWMvY3NzL25pY2Utc2VsZWN0Lm1pbi5jc3MnO1xuaW1wb3J0ICcuLi9wdWJsaWMvY3NzL3N0eWxlLmNzcyc7XG5pbXBvcnQgJy4uL25vZGVfbW9kdWxlcy9yZWFjdC1tb2RhbC12aWRlby9jc3MvbW9kYWwtdmlkZW8ubWluLmNzcyc7XG5pbXBvcnQgJy4uL3B1YmxpYy9jc3MvcmVzcG9uc2l2ZS5jc3MnO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvX0FwcC9MYXlvdXQnO1xuaW1wb3J0IExvYWRlciBmcm9tICcuLi9jb21wb25lbnRzL1NoYXJlZC9Mb2FkZXInO1xuaW1wb3J0IEdvVG9wIGZyb20gJy4uL2NvbXBvbmVudHMvU2hhcmVkL0dvVG9wJztcblxuaW1wb3J0IHsgcGFyc2VDb29raWVzLCBkZXN0cm95Q29va2llIH0gZnJvbSAnbm9va2llcyc7XG5pbXBvcnQgeyByZWRpcmVjdFVzZXIgfSBmcm9tICcuLi91dGlscy9hdXRoJztcbmltcG9ydCBiYXNlVXJsIGZyb20gJy4uL3V0aWxzL2Jhc2VVcmwnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuIFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0TG9hZGluZyhmYWxzZSksIDIwMDApO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPExheW91dD5cbiAgICAgICAgPEluZGljZVByb3ZpZGVyPlxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cblxuICAgICAgICAgIDxMb2FkZXIgbG9hZGluZz17bG9hZGluZ30gLz5cblxuICAgICAgICAgIDxHb1RvcCBzY3JvbGxTdGVwSW5QeD0nMTAwJyBkZWxheUluTXM9JzEwLjUwJyAvPlxuICAgICAgICA8L0luZGljZVByb3ZpZGVyPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC8+XG4gICk7XG59XG5cbk15QXBwLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IENvbXBvbmVudCwgY3R4IH0pID0+IHtcbiAgY29uc3QgeyB0b2tlbiB9ID0gcGFyc2VDb29raWVzKGN0eCk7XG4gIGxldCBwYWdlUHJvcHMgPSB7fTtcblxuICBpZiAoQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcykge1xuICAgIHBhZ2VQcm9wcyA9IGF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KTtcbiAgfVxuXG4gIGlmICghdG9rZW4pIHtcbiAgICAvLyBpZiBhIHVzZXIgbm90IGxvZ2dlZCBpbiB0aGVuIHVzZXIgY2FuJ3QgYWNjZXNzIHRob3NlIHBhZ2VzXG4gICAgY29uc3QgaXNQcm90ZWN0ZWRSb3V0ZSA9XG4gICAgICBjdHgucGF0aG5hbWUgPT09ICcvZGFzaGJvYXJkJyB8fFxuICAgICAgY3R4LnBhdGhuYW1lID09PSAnL2Rhc2hib2FyZC9hZGQtbGlzdGluZycgfHxcbiAgICAgIGN0eC5wYXRobmFtZSA9PT0gJy9kYXNoYm9hcmQvbWVzc2FnZXMnIHx8XG4gICAgICBjdHgucGF0aG5hbWUgPT09ICcvZGFzaGJvYXJkL2Jvb2tpbmdzJyB8fFxuICAgICAgY3R4LnBhdGhuYW1lID09PSAnL2Rhc2hib2FyZC93YWxsZXQnIHx8XG4gICAgICBjdHgucGF0aG5hbWUgPT09ICcvZGFzaGJvYXJkL215LWxpc3RpbmcvYWN0aXZlJyB8fFxuICAgICAgY3R4LnBhdGhuYW1lID09PSAnL2Rhc2hib2FyZC9yZXZpZXdzJztcblxuXG4gICAgaWYgKGlzUHJvdGVjdGVkUm91dGUpIHtcbiAgICAgIHJlZGlyZWN0VXNlcihjdHgsICcvJyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIGlmIGEgdXNlciBsb2dnZWQgaW4gdGhlbiB1c2VyIGNhbid0IGFjY2VzcyB0aG9zZSBwYWdlc1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHBheWxvYWQgPSB7IGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogdG9rZW4gfSB9O1xuICAgICAgLy91c2VyXG4gICAgICBjb25zdCB1cmwgPSBgJHtiYXNlVXJsfS9hcGkvdjEvYXV0aC9hY2NvdW50YDtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KHVybCwgcGF5bG9hZCk7XG4gICAgICBjb25zdCB1c2VyID0gcmVzcG9uc2UuZGF0YTtcblxuICAgICAgcGFnZVByb3BzLnVzZXIgPSB1c2VyO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvL2ludmFsaWQgdG9rZW5cbiAgICAgIGRlc3Ryb3lDb29raWUoY3R4LCAndG9rZW4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHBhZ2VQcm9wcyxcbiAgfTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkluZGljZVByb3ZpZGVyIiwiTGF5b3V0IiwiTG9hZGVyIiwiR29Ub3AiLCJwYXJzZUNvb2tpZXMiLCJkZXN0cm95Q29va2llIiwicmVkaXJlY3RVc2VyIiwiYmFzZVVybCIsImF4aW9zIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInNldFRpbWVvdXQiLCJzY3JvbGxTdGVwSW5QeCIsImRlbGF5SW5NcyIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInRva2VuIiwiaXNQcm90ZWN0ZWRSb3V0ZSIsInBhdGhuYW1lIiwicGF5bG9hZCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidXJsIiwicmVzcG9uc2UiLCJnZXQiLCJ1c2VyIiwiZGF0YSIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./utils/auth.js":
/*!***********************!*\
  !*** ./utils/auth.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handleLogin\": () => (/* binding */ handleLogin),\n/* harmony export */   \"redirectUser\": () => (/* binding */ redirectUser),\n/* harmony export */   \"handleLogout\": () => (/* binding */ handleLogout)\n/* harmony export */ });\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst handleLogin = (token)=>{\n    js_cookie__WEBPACK_IMPORTED_MODULE_0___default().set('token', token);\n    next_router__WEBPACK_IMPORTED_MODULE_1___default().push('/');\n};\nconst redirectUser = (ctx, location)=>{\n    if (ctx.req) {\n        ctx.res.writeHead(302, {\n            Location: location\n        });\n        ctx.res.end();\n    } else {\n        next_router__WEBPACK_IMPORTED_MODULE_1___default().push(location);\n    }\n};\nconst handleLogout = ()=>{\n    js_cookie__WEBPACK_IMPORTED_MODULE_0___default().remove('token');\n    next_router__WEBPACK_IMPORTED_MODULE_1___default().push('/');\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9hdXRoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBOEI7QUFDRTtBQUV6QixLQUFLLENBQUNFLFdBQVcsSUFBSUMsS0FBSyxHQUFLLENBQUM7SUFDbkNILG9EQUFVLENBQUMsQ0FBTyxRQUFFRyxLQUFLO0lBQ3pCRix1REFBVyxDQUFDLENBQUc7QUFDbkIsQ0FBQztBQUVNLEtBQUssQ0FBQ0ssWUFBWSxJQUFJQyxHQUFHLEVBQUVDLFFBQVEsR0FBSyxDQUFDO0lBQzVDLEVBQUUsRUFBQ0QsR0FBRyxDQUFDRSxHQUFHLEVBQUMsQ0FBQztRQUNSRixHQUFHLENBQUNHLEdBQUcsQ0FBQ0MsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQUNDLFFBQVEsRUFBRUosUUFBUTtRQUFDLENBQUM7UUFDN0NELEdBQUcsQ0FBQ0csR0FBRyxDQUFDRyxHQUFHO0lBQ2YsQ0FBQyxNQUFNLENBQUM7UUFDSlosdURBQVcsQ0FBQ08sUUFBUTtJQUN4QixDQUFDO0FBQ0wsQ0FBQztBQUVNLEtBQUssQ0FBQ00sWUFBWSxPQUFTLENBQUM7SUFDL0JkLHVEQUFhLENBQUMsQ0FBTztJQUNyQkMsdURBQVcsQ0FBQyxDQUFHO0FBQ25CLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRpY2UvLi91dGlscy9hdXRoLmpzP2ViNjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuXG5leHBvcnQgY29uc3QgaGFuZGxlTG9naW4gPSAodG9rZW4pID0+IHtcbiAgICBjb29raWUuc2V0KCd0b2tlbicsIHRva2VuKTtcbiAgICBSb3V0ZXIucHVzaCgnLycpXG59XG5cbmV4cG9ydCBjb25zdCByZWRpcmVjdFVzZXIgPSAoY3R4LCBsb2NhdGlvbikgPT4ge1xuICAgIGlmKGN0eC5yZXEpe1xuICAgICAgICBjdHgucmVzLndyaXRlSGVhZCgzMDIsIHsgTG9jYXRpb246IGxvY2F0aW9uIH0pO1xuICAgICAgICBjdHgucmVzLmVuZCgpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgUm91dGVyLnB1c2gobG9jYXRpb24pXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xuICAgIGNvb2tpZS5yZW1vdmUoJ3Rva2VuJylcbiAgICBSb3V0ZXIucHVzaCgnLycpXG59Il0sIm5hbWVzIjpbImNvb2tpZSIsIlJvdXRlciIsImhhbmRsZUxvZ2luIiwidG9rZW4iLCJzZXQiLCJwdXNoIiwicmVkaXJlY3RVc2VyIiwiY3R4IiwibG9jYXRpb24iLCJyZXEiLCJyZXMiLCJ3cml0ZUhlYWQiLCJMb2NhdGlvbiIsImVuZCIsImhhbmRsZUxvZ291dCIsInJlbW92ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/auth.js\n");

/***/ }),

/***/ "./utils/baseUrl.js":
/*!**************************!*\
  !*** ./utils/baseUrl.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst baseUrl =  false ? 0 : \"http://localhost:3000\";\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseUrl);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9iYXNlVXJsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxLQUFLLENBQUNBLE9BQU8sR0FBYixNQUNzQyxHQUNsQyxDQUFvQyxHQUNwQyxDQUF1QjtBQUUzQixpRUFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW5kaWNlLy4vdXRpbHMvYmFzZVVybC5qcz8wN2FmIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJhc2VVcmwgPVxuXHRwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCJcblx0XHQ/IFwiaHR0cHM6Ly9pbmRpY2UtcmVhY3QuZW52eXRoZW1lLmNvbVwiXG5cdFx0OiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiO1xuXG5leHBvcnQgZGVmYXVsdCBiYXNlVXJsO1xuIl0sIm5hbWVzIjpbImJhc2VVcmwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/baseUrl.js\n");

/***/ }),

/***/ "./node_modules/react-modal-video/css/modal-video.min.css":
/*!****************************************************************!*\
  !*** ./node_modules/react-modal-video/css/modal-video.min.css ***!
  \****************************************************************/
/***/ (() => {



/***/ }),

/***/ "./public/css/animate.min.css":
/*!************************************!*\
  !*** ./public/css/animate.min.css ***!
  \************************************/
/***/ (() => {



/***/ }),

/***/ "./public/css/bootstrap.min.css":
/*!**************************************!*\
  !*** ./public/css/bootstrap.min.css ***!
  \**************************************/
/***/ (() => {



/***/ }),

/***/ "./public/css/boxicons.min.css":
/*!*************************************!*\
  !*** ./public/css/boxicons.min.css ***!
  \*************************************/
/***/ (() => {



/***/ }),

/***/ "./public/css/flaticon.css":
/*!*********************************!*\
  !*** ./public/css/flaticon.css ***!
  \*********************************/
/***/ (() => {



/***/ }),

/***/ "./public/css/meanmenu.min.css":
/*!*************************************!*\
  !*** ./public/css/meanmenu.min.css ***!
  \*************************************/
/***/ (() => {



/***/ }),

/***/ "./public/css/nice-select.min.css":
/*!****************************************!*\
  !*** ./public/css/nice-select.min.css ***!
  \****************************************/
/***/ (() => {



/***/ }),

/***/ "./public/css/nprogress.css":
/*!**********************************!*\
  !*** ./public/css/nprogress.css ***!
  \**********************************/
/***/ (() => {



/***/ }),

/***/ "./public/css/responsive.css":
/*!***********************************!*\
  !*** ./public/css/responsive.css ***!
  \***********************************/
/***/ (() => {



/***/ }),

/***/ "./public/css/style.css":
/*!******************************!*\
  !*** ./public/css/style.css ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("js-cookie");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("nookies");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("nprogress");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-toast-notifications":
/*!********************************************!*\
  !*** external "react-toast-notifications" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-toast-notifications");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();