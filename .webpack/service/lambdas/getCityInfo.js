/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./lambdas/getCityInfo.ts":
/*!********************************!*\
  !*** ./lambdas/getCityInfo.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handler\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ \"source-map-support/register\");\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_dbConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/dbConfig */ \"./lambdas/models/dbConfig.ts\");\n\n\nconst handler = async (event, _context) => {\n    const name = event.pathParameters?.item;\n    console.log(event.pathParameters, \"The name is: \" + name);\n    if (!name) {\n        return apiResponses._400({ message: 'Cannot find name' });\n    }\n    const nm = name;\n    const sql = 'select * from \"Inventory\" where name=\\'' + nm + '\\';';\n    _models_dbConfig__WEBPACK_IMPORTED_MODULE_1__.pool.query(sql, (err, res) => {\n        console.log(sql, \"\\n\", nm);\n        console.log(res.rows[0], sql);\n        Inventory = res.rows[0].id;\n        console.log(inventory[name]);\n        _models_dbConfig__WEBPACK_IMPORTED_MODULE_1__.pool.end();\n    });\n    return apiResponses._200(inventory[name]);\n};\nconst apiResponses = {\n    _200: (body) => {\n        console.log(body);\n        return {\n            statusCode: 200,\n            body: JSON.stringify(body, null, 2)\n        };\n    },\n    _400: (body) => {\n        return {\n            statusCode: 400,\n            body: JSON.stringify(body, null, 2)\n        };\n    }\n};\nconst inventory = {\n    cement: {\n        id: 'za',\n        createdBy: 'random',\n        createDateTime: 'random',\n        updatedBy: 'random',\n        updatedDateTime: 'random',\n        name: 'cement',\n        description: 'New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers. Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park. Broadway theater is staged in neon-lit Times Square.',\n    },\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9sYW1iZGFzL2dldENpdHlJbmZvLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXdzLXR5cGVzY3JpcHQtYXBpLy4vbGFtYmRhcy9nZXRDaXR5SW5mby50cz9iNGY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFQSUdhdGV3YXlQcm94eUhhbmRsZXIgfSBmcm9tICdhd3MtbGFtYmRhJztcbmltcG9ydCAnc291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyJztcbmltcG9ydCB7IHBvb2wgfSBmcm9tICcuL21vZGVscy9kYkNvbmZpZydcblxuZXhwb3J0IGNvbnN0IGhhbmRsZXI6IEFQSUdhdGV3YXlQcm94eUhhbmRsZXIgPSBhc3luYyAoZXZlbnQsIF9jb250ZXh0KSA9PiB7XG4gIGNvbnN0IG5hbWUgPSBldmVudC5wYXRoUGFyYW1ldGVycz8uaXRlbTtcblxuICBjb25zb2xlLmxvZyhldmVudC5wYXRoUGFyYW1ldGVycyxcIlRoZSBuYW1lIGlzOiBcIisgbmFtZSlcbiAgICBcbiAgaWYoIW5hbWUpe1xuICAgICAgcmV0dXJuIGFwaVJlc3BvbnNlcy5fNDAwKHttZXNzYWdlOiAnQ2Fubm90IGZpbmQgbmFtZSd9KVxuICB9XG5cbiAgICBjb25zdCBubTpzdHJpbmcgPSBuYW1lO1xuXG4gICAgY29uc3Qgc3FsOnN0cmluZyA9ICdzZWxlY3QgKiBmcm9tIFwiSW52ZW50b3J5XCIgd2hlcmUgbmFtZT1cXCcnK25tKydcXCc7JyBcbiAgICBwb29sLnF1ZXJ5KHNxbCwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHNxbCxcIlxcblwiLG5tKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLnJvd3NbMF0sIHNxbCk7IFxuICAgICAgICBJbnZlbnRvcnkgPSByZXMucm93c1swXS5pZDsgXG4gICAgICAgIGNvbnNvbGUubG9nKGludmVudG9yeVtuYW1lXSk7XG4gICAgICAgIHBvb2wuZW5kKCkgXG4gICAgfSlcbiAgICByZXR1cm4gYXBpUmVzcG9uc2VzLl8yMDAoaW52ZW50b3J5W25hbWVdKTtcbn07XG4gICAgY29uc3QgYXBpUmVzcG9uc2VzID0ge1xuICAgICAgICBfMjAwOiAoYm9keToge1trZXk6c3RyaW5nXTogYW55fSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYm9keSlcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc3RhdHVzQ29kZTogMjAwLFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHksIG51bGwsIDIpXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgXzQwMDogKGJvZHk6IHtba2V5OnN0cmluZ106IGFueX0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc3RhdHVzQ29kZTogNDAwLFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHksIG51bGwsIDIpXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuXG5cbmludGVyZmFjZSBJbnZlbnRvcnkge1xuICAgIGlkIDogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgIGNyZWF0ZWRCeTogc3RyaW5nO1xuICAgIGNyZWF0ZURhdGVUaW1lOiBzdHJpbmc7XG4gICAgdXBkYXRlZEJ5OiBzdHJpbmc7XG4gICAgdXBkYXRlZERhdGVUaW1lOiBzdHJpbmc7XG59XG5cbmNvbnN0IGludmVudG9yeTogeyBba2V5OiBzdHJpbmddOkludmVudG9yeSB9ID0ge1xuICAgIGNlbWVudDoge1xuICAgICAgICBpZDogJ3phJyxcbiAgICAgICAgY3JlYXRlZEJ5OiAncmFuZG9tJyxcbiAgICAgICAgY3JlYXRlRGF0ZVRpbWU6ICdyYW5kb20nLFxuICAgICAgICB1cGRhdGVkQnk6ICdyYW5kb20nLFxuICAgICAgICB1cGRhdGVkRGF0ZVRpbWU6ICdyYW5kb20nLFxuICAgICAgICBuYW1lOiAnY2VtZW50JyxcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAnTmV3IFlvcmsgQ2l0eSBjb21wcmlzZXMgNSBib3JvdWdocyBzaXR0aW5nIHdoZXJlIHRoZSBIdWRzb24gUml2ZXIgbWVldHMgdGhlIEF0bGFudGljIE9jZWFuLiBBdCBpdHMgY29yZSBpcyBNYW5oYXR0YW4sIGEgZGVuc2VseSBwb3B1bGF0ZWQgYm9yb3VnaCB0aGF04oCZcyBhbW9uZyB0aGUgd29ybGTigJlzIG1ham9yIGNvbW1lcmNpYWwsIGZpbmFuY2lhbCBhbmQgY3VsdHVyYWwgY2VudGVycy4gSXRzIGljb25pYyBzaXRlcyBpbmNsdWRlIHNreXNjcmFwZXJzIHN1Y2ggYXMgdGhlIEVtcGlyZSBTdGF0ZSBCdWlsZGluZyBhbmQgc3ByYXdsaW5nIENlbnRyYWwgUGFyay4gQnJvYWR3YXkgdGhlYXRlciBpcyBzdGFnZWQgaW4gbmVvbi1saXQgVGltZXMgU3F1YXJlLicsXG4gICAgfSxcbn1cblxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lambdas/getCityInfo.ts\n");

/***/ }),

/***/ "./lambdas/models/dbConfig.ts":
/*!************************************!*\
  !*** ./lambdas/models/dbConfig.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pool\": () => (/* binding */ pool)\n/* harmony export */ });\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pg */ \"pg\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pg__WEBPACK_IMPORTED_MODULE_0__);\n\nconst pool = new pg__WEBPACK_IMPORTED_MODULE_0__.Pool({\n    user: 'zaki',\n    host: 'localhost',\n    database: 'inventory',\n    password: 'root',\n    port: 5432,\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9sYW1iZGFzL21vZGVscy9kYkNvbmZpZy50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL2F3cy10eXBlc2NyaXB0LWFwaS8uL2xhbWJkYXMvbW9kZWxzL2RiQ29uZmlnLnRzPzM1MzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUG9vbCB9IGZyb20gJ3BnJztcbmV4cG9ydCBjb25zdCBwb29sID0gbmV3IFBvb2woe1xuICB1c2VyOiAnemFraScsXG4gIGhvc3Q6ICdsb2NhbGhvc3QnLFxuICBkYXRhYmFzZTogJ2ludmVudG9yeScsXG4gIHBhc3N3b3JkOiAncm9vdCcsXG4gIHBvcnQ6IDU0MzIsXG59KVxuLy8gcG9vbC5xdWVyeSgnU0VMRUNUIE5PVygpJywgKGVyciwgcmVzKSA9PiB7XG4vLyAgIGNvbnNvbGUubG9nKGVyciwgcmVzKSBcbi8vICAgcG9vbC5lbmQoKSBcbi8vIH0pIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lambdas/models/dbConfig.ts\n");

/***/ }),

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("pg");;

/***/ }),

/***/ "source-map-support/register":
/*!**********************************************!*\
  !*** external "source-map-support/register" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("source-map-support/register");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./lambdas/getCityInfo.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;