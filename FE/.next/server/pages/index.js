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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__bCOhY\",\n\t\"main\": \"Home_main__nLjiQ\",\n\t\"footer\": \"Home_footer____T7K\",\n\t\"title\": \"Home_title__T09hD\",\n\t\"description\": \"Home_description__41Owk\",\n\t\"code\": \"Home_code__suPER\",\n\t\"grid\": \"Home_grid__GxQ85\",\n\t\"card\": \"Home_card___LpL1\",\n\t\"logo\": \"Home_logo__27_tb\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3QtZXhhbS8uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3M/NzEyNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJIb21lX2NvbnRhaW5lcl9fYkNPaFlcIixcblx0XCJtYWluXCI6IFwiSG9tZV9tYWluX19uTGppUVwiLFxuXHRcImZvb3RlclwiOiBcIkhvbWVfZm9vdGVyX19fX1Q3S1wiLFxuXHRcInRpdGxlXCI6IFwiSG9tZV90aXRsZV9fVDA5aERcIixcblx0XCJkZXNjcmlwdGlvblwiOiBcIkhvbWVfZGVzY3JpcHRpb25fXzQxT3drXCIsXG5cdFwiY29kZVwiOiBcIkhvbWVfY29kZV9fc3VQRVJcIixcblx0XCJncmlkXCI6IFwiSG9tZV9ncmlkX19HeFE4NVwiLFxuXHRcImNhcmRcIjogXCJIb21lX2NhcmRfX19McEwxXCIsXG5cdFwibG9nb1wiOiBcIkhvbWVfbG9nb19fMjdfdGJcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "./pages/components/table.js":
/*!***********************************!*\
  !*** ./pages/components/table.js ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_Table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Table */ \"@mui/material/Table\");\n/* harmony import */ var _mui_material_Table__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Table__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_TableBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/TableBody */ \"@mui/material/TableBody\");\n/* harmony import */ var _mui_material_TableBody__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableBody__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/TableCell */ \"@mui/material/TableCell\");\n/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/TableContainer */ \"@mui/material/TableContainer\");\n/* harmony import */ var _mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _mui_material_TableHead__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/TableHead */ \"@mui/material/TableHead\");\n/* harmony import */ var _mui_material_TableHead__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableHead__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/TableRow */ \"@mui/material/TableRow\");\n/* harmony import */ var _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Paper */ \"@mui/material/Paper\");\n/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Button */ \"@mui/material/Button\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_12__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_10__]);\nswr__WEBPACK_IMPORTED_MODULE_10__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst StyledTableCell = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.styled)((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_5___default()))(({ theme  })=>({\n        [`&.${_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_5__.tableCellClasses.head}`]: {\n            backgroundColor: theme.palette.common.black,\n            color: theme.palette.common.white\n        },\n        [`&.${_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_5__.tableCellClasses.body}`]: {\n            fontSize: 14\n        }\n    }));\nconst StyledTableRow = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.styled)((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_8___default()))(({ theme  })=>({\n        \"&:nth-of-type(odd)\": {\n            backgroundColor: theme.palette.action.hover\n        },\n        // hide last border\n        \"&:last-child td, &:last-child th\": {\n            border: 0\n        }\n    }));\nconst TodoList = ()=>{\n    const todoApi = \"https://chuka.ilearn.mn/todo\";\n    const fetcher = async (url)=>await axios__WEBPACK_IMPORTED_MODULE_11___default().get(url).then((res)=>res.data);\n    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(todoApi, fetcher);\n    console.log(data);\n    console.log(error);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_6___default()), {\n        component: (_mui_material_Paper__WEBPACK_IMPORTED_MODULE_9___default()),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Table__WEBPACK_IMPORTED_MODULE_3___default()), {\n            sx: {\n                minWidth: 200\n            },\n            \"aria-label\": \"customized table\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_TableHead__WEBPACK_IMPORTED_MODULE_7___default()), {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_8___default()), {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledTableCell, {\n                            align: \"center\",\n                            children: \"My To do List\"\n                        }, void 0, false, {\n                            fileName: \"/Users/admin/Desktop/last/FE/pages/components/table.js\",\n                            lineNumber: 46,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/admin/Desktop/last/FE/pages/components/table.js\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/admin/Desktop/last/FE/pages/components/table.js\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_TableBody__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    children: data?.data && data?.data.map((d)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledTableRow, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledTableCell, {\n                                    align: \"center\",\n                                    children: d.book_name\n                                }, void 0, false, {\n                                    fileName: \"/Users/admin/Desktop/last/FE/pages/components/table.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 19\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledTableCell, {\n                                    align: \"center\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_12___default()), {\n                                        variant: \"contained\",\n                                        children: \"EDIT\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/admin/Desktop/last/FE/pages/components/table.js\",\n                                        lineNumber: 58,\n                                        columnNumber: 21\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/admin/Desktop/last/FE/pages/components/table.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 19\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledTableCell, {\n                                    align: \"center\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_12___default()), {\n                                        variant: \"contained\",\n                                        color: \"error\",\n                                        children: \"DELETE\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/admin/Desktop/last/FE/pages/components/table.js\",\n                                        lineNumber: 61,\n                                        columnNumber: 21\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/admin/Desktop/last/FE/pages/components/table.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 19\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/admin/Desktop/last/FE/pages/components/table.js\",\n                            lineNumber: 53,\n                            columnNumber: 17\n                        }, undefined);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/admin/Desktop/last/FE/pages/components/table.js\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_12___default()), {\n                    variant: \"contained\",\n                    color: \"primary\",\n                    children: \"Add task\"\n                }, void 0, false, {\n                    fileName: \"/Users/admin/Desktop/last/FE/pages/components/table.js\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/admin/Desktop/last/FE/pages/components/table.js\",\n            lineNumber: 43,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/admin/Desktop/last/FE/pages/components/table.js\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoList);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7cUNBQ0gsQ0FDakI7b0JBQ0osQ0FBQyxDQUFDOzs7Ozs2QkFDTTs4QkFDWiw4REFBQ1IsOERBQU07b0JBQUNtQyxPQUFPLEVBQUMsV0FBVztvQkFBQzNCLEtBQUssRUFBQyxTQUFTOzhCQUFDLFVBRWhDOzs7Ozs2QkFBUzs7Ozs7O3FCQUNmOzs7OztpQkFDTyxDQUNqQjtBQUNKLENBQUM7QUFFRCxpRUFBZVEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzdC1leGFtLy4vcGFnZXMvY29tcG9uZW50cy90YWJsZS5qcz9lZWE3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgc3R5bGVkIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvc3R5bGVzXCI7XG5pbXBvcnQgVGFibGUgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVGFibGVcIjtcbmltcG9ydCBUYWJsZUJvZHkgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVGFibGVCb2R5XCI7XG5pbXBvcnQgVGFibGVDZWxsLCB7IHRhYmxlQ2VsbENsYXNzZXMgfSBmcm9tIFwiQG11aS9tYXRlcmlhbC9UYWJsZUNlbGxcIjtcbmltcG9ydCBUYWJsZUNvbnRhaW5lciBmcm9tIFwiQG11aS9tYXRlcmlhbC9UYWJsZUNvbnRhaW5lclwiO1xuaW1wb3J0IFRhYmxlSGVhZCBmcm9tIFwiQG11aS9tYXRlcmlhbC9UYWJsZUhlYWRcIjtcbmltcG9ydCBUYWJsZVJvdyBmcm9tIFwiQG11aS9tYXRlcmlhbC9UYWJsZVJvd1wiO1xuaW1wb3J0IFBhcGVyIGZyb20gXCJAbXVpL21hdGVyaWFsL1BhcGVyXCI7XG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCI7XG5cbmNvbnN0IFN0eWxlZFRhYmxlQ2VsbCA9IHN0eWxlZChUYWJsZUNlbGwpKCh7IHRoZW1lIH0pID0+ICh7XG4gIFtgJi4ke3RhYmxlQ2VsbENsYXNzZXMuaGVhZH1gXToge1xuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24uYmxhY2ssXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxuICB9LFxuICBbYCYuJHt0YWJsZUNlbGxDbGFzc2VzLmJvZHl9YF06IHtcbiAgICBmb250U2l6ZTogMTQsXG4gIH0sXG59KSk7XG5cbmNvbnN0IFN0eWxlZFRhYmxlUm93ID0gc3R5bGVkKFRhYmxlUm93KSgoeyB0aGVtZSB9KSA9PiAoe1xuICBcIiY6bnRoLW9mLXR5cGUob2RkKVwiOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmFjdGlvbi5ob3ZlcixcbiAgfSxcbiAgLy8gaGlkZSBsYXN0IGJvcmRlclxuICBcIiY6bGFzdC1jaGlsZCB0ZCwgJjpsYXN0LWNoaWxkIHRoXCI6IHtcbiAgICBib3JkZXI6IDAsXG4gIH0sXG59KSk7XG5cbmNvbnN0IFRvZG9MaXN0ID0gKCkgPT4ge1xuICBjb25zdCB0b2RvQXBpID0gXCJodHRwczovL2NodWthLmlsZWFybi5tbi90b2RvXCI7XG4gIGNvbnN0IGZldGNoZXIgPSBhc3luYyAodXJsKSA9PiBhd2FpdCBheGlvcy5nZXQodXJsKS50aGVuKChyZXMpID0+IHJlcy5kYXRhKTtcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKHRvZG9BcGksIGZldGNoZXIpO1xuICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgY29uc29sZS5sb2coZXJyb3IpO1xuXG4gIHJldHVybiAoXG4gICAgPFRhYmxlQ29udGFpbmVyIGNvbXBvbmVudD17UGFwZXJ9PlxuICAgICAgPFRhYmxlIHN4PXt7IG1pbldpZHRoOiAyMDAgfX0gYXJpYS1sYWJlbD1cImN1c3RvbWl6ZWQgdGFibGVcIj5cbiAgICAgICAgPFRhYmxlSGVhZD5cbiAgICAgICAgICA8VGFibGVSb3c+XG4gICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+TXkgVG8gZG8gTGlzdDwvU3R5bGVkVGFibGVDZWxsPlxuICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgIDwvVGFibGVIZWFkPlxuICAgICAgICA8VGFibGVCb2R5PlxuICAgICAgICAgIHtkYXRhPy5kYXRhICYmXG4gICAgICAgICAgICBkYXRhPy5kYXRhLm1hcCgoZCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxTdHlsZWRUYWJsZVJvdz5cbiAgICAgICAgICAgICAgICAgIDxTdHlsZWRUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAge2QuYm9va19uYW1lfVxuICAgICAgICAgICAgICAgICAgPC9TdHlsZWRUYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiPkVESVQ8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvU3R5bGVkVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cImVycm9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgREVMRVRFXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9TdHlsZWRUYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgPC9TdHlsZWRUYWJsZVJvdz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICA8L1RhYmxlQm9keT5cbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgQWRkIHRhc2tcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L1RhYmxlPlxuICAgIDwvVGFibGVDb250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb2RvTGlzdDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlZCIsIlRhYmxlIiwiVGFibGVCb2R5IiwiVGFibGVDZWxsIiwidGFibGVDZWxsQ2xhc3NlcyIsIlRhYmxlQ29udGFpbmVyIiwiVGFibGVIZWFkIiwiVGFibGVSb3ciLCJQYXBlciIsInVzZVNXUiIsImF4aW9zIiwiQnV0dG9uIiwiU3R5bGVkVGFibGVDZWxsIiwidGhlbWUiLCJoZWFkIiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsImNvbW1vbiIsImJsYWNrIiwiY29sb3IiLCJ3aGl0ZSIsImJvZHkiLCJmb250U2l6ZSIsIlN0eWxlZFRhYmxlUm93IiwiYWN0aW9uIiwiaG92ZXIiLCJib3JkZXIiLCJUb2RvTGlzdCIsInRvZG9BcGkiLCJmZXRjaGVyIiwidXJsIiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJjb21wb25lbnQiLCJzeCIsIm1pbldpZHRoIiwiYXJpYS1sYWJlbCIsImFsaWduIiwibWFwIiwiZCIsImJvb2tfbmFtZSIsInZhcmlhbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/table.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/table */ \"./pages/components/table.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_table__WEBPACK_IMPORTED_MODULE_1__]);\n_components_table__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_table__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/admin/Desktop/last/FE/pages/index.js\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/admin/Desktop/last/FE/pages/index.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUEwQztBQUNLO0FBRWhDLFNBQVNFLElBQUksR0FBRztJQUM3QixxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUVILDBFQUFnQjtrQkFDOUIsNEVBQUNELHlEQUFROzs7O2dCQUFHOzs7OztZQUNSLENBQ047QUFDSixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzdC1leGFtLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQm9va0xpc3QgZnJvbSBcIi4vY29tcG9uZW50cy90YWJsZVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxCb29rTGlzdCAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkJvb2tMaXN0Iiwic3R5bGVzIiwiSG9tZSIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "@mui/material/Button":
/*!***************************************!*\
  !*** external "@mui/material/Button" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Button");

/***/ }),

/***/ "@mui/material/Paper":
/*!**************************************!*\
  !*** external "@mui/material/Paper" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Paper");

/***/ }),

/***/ "@mui/material/Table":
/*!**************************************!*\
  !*** external "@mui/material/Table" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Table");

/***/ }),

/***/ "@mui/material/TableBody":
/*!******************************************!*\
  !*** external "@mui/material/TableBody" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/TableBody");

/***/ }),

/***/ "@mui/material/TableCell":
/*!******************************************!*\
  !*** external "@mui/material/TableCell" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/TableCell");

/***/ }),

/***/ "@mui/material/TableContainer":
/*!***********************************************!*\
  !*** external "@mui/material/TableContainer" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/TableContainer");

/***/ }),

/***/ "@mui/material/TableHead":
/*!******************************************!*\
  !*** external "@mui/material/TableHead" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/TableHead");

/***/ }),

/***/ "@mui/material/TableRow":
/*!*****************************************!*\
  !*** external "@mui/material/TableRow" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/TableRow");

/***/ }),

/***/ "@mui/material/styles":
/*!***************************************!*\
  !*** external "@mui/material/styles" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/styles");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();