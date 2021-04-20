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

/***/ "./lambdas/models/dbConfig.ts":
/*!************************************!*\
  !*** ./lambdas/models/dbConfig.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pool\": () => (/* binding */ pool)\n/* harmony export */ });\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pg */ \"pg\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pg__WEBPACK_IMPORTED_MODULE_0__);\n\nconst pool = new pg__WEBPACK_IMPORTED_MODULE_0__.Pool({\n    user: 'zaki',\n    host: 'localhost',\n    database: 'inventory',\n    password: 'root',\n    port: 5432,\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9sYW1iZGFzL21vZGVscy9kYkNvbmZpZy50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL2F3cy10eXBlc2NyaXB0LWFwaS8uL2xhbWJkYXMvbW9kZWxzL2RiQ29uZmlnLnRzPzM1MzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUG9vbCB9IGZyb20gJ3BnJztcbmV4cG9ydCBjb25zdCBwb29sID0gbmV3IFBvb2woe1xuICB1c2VyOiAnemFraScsXG4gIGhvc3Q6ICdsb2NhbGhvc3QnLFxuICBkYXRhYmFzZTogJ2ludmVudG9yeScsXG4gIHBhc3N3b3JkOiAncm9vdCcsXG4gIHBvcnQ6IDU0MzIsXG59KVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lambdas/models/dbConfig.ts\n");

/***/ }),

/***/ "./lambdas/postCityInfo.ts":
/*!*********************************!*\
  !*** ./lambdas/postCityInfo.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handler\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ \"source-map-support/register\");\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_dbConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/dbConfig */ \"./lambdas/models/dbConfig.ts\");\n\n\nconst handler = async (event, _context) => {\n    const body1 = JSON.parse(event.body);\n    if (!body1) {\n        return apiResponses._400({ message: 'Cannot find name' });\n    }\n    const sql = `INSERT INTO \"Inventory\" ( \"isActive\", \"createDateTime\", \"createdBy\", \"lastChangedDateTime\", \"lastChangedBy\", name, description) VALUES (true, to_timestamp(${body1[\"createDateTime\"]} / 1000.0), \\'${body1[\"createdBy\"]}\\', to_timestamp(${body1[\"lastChangedDateTime\"]} / 1000.0), \\'${body1[\"lastChangedBy\"]}\\', '${body1['name']}', \\'${body1['description']}\\');`;\n    const { rows } = await _models_dbConfig__WEBPACK_IMPORTED_MODULE_1__.pool.query(sql);\n    console.log(rows);\n    return apiResponses._200(body1[\"createDateTime\"]);\n};\nconst apiResponses = {\n    _200: (body) => {\n        return {\n            statusCode: 200,\n            body: JSON.stringify(body, null, 2)\n        };\n    },\n    _400: (body) => {\n        return {\n            statusCode: 400,\n            body: JSON.stringify(body, null, 2)\n        };\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9sYW1iZGFzL3Bvc3RDaXR5SW5mby50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL2F3cy10eXBlc2NyaXB0LWFwaS8uL2xhbWJkYXMvcG9zdENpdHlJbmZvLnRzP2E4MzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBWYWxpZGF0ZWRFdmVudEFQSUdhdGV3YXlQcm94eUV2ZW50IH0gZnJvbSAnLi4vbGlicy9hcGlHYXRld2F5JztcbmltcG9ydCAnc291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyJztcbmltcG9ydCB7IHBvb2wgfSBmcm9tICcuL21vZGVscy9kYkNvbmZpZyc7XG5pbXBvcnQgeyBJbnZlbnRvcnkgfSBmcm9tICcuL2ludGVyZmFjZXMvaW52ZW50b3J5JztcbmltcG9ydCBzY2hlbWEgZnJvbSAnLi9tb2RlbHMvc2NoZW1hJ1xuXG5leHBvcnQgY29uc3QgaGFuZGxlcjogVmFsaWRhdGVkRXZlbnRBUElHYXRld2F5UHJveHlFdmVudDx0eXBlb2Ygc2NoZW1hPiA9IGFzeW5jIChldmVudCwgX2NvbnRleHQpID0+IHtcbiAgY29uc3QgYm9keTEgPSBKU09OLnBhcnNlKGV2ZW50LmJvZHkpOyBcblxuICBpZighYm9keTEpe1xuICAgICAgcmV0dXJuIGFwaVJlc3BvbnNlcy5fNDAwKHttZXNzYWdlOiAnQ2Fubm90IGZpbmQgbmFtZSd9KVxuICAgIH1cbiAgICBjb25zdCBzcWw6c3RyaW5nID0gYElOU0VSVCBJTlRPIFwiSW52ZW50b3J5XCIgKCBcImlzQWN0aXZlXCIsIFwiY3JlYXRlRGF0ZVRpbWVcIiwgXCJjcmVhdGVkQnlcIiwgXCJsYXN0Q2hhbmdlZERhdGVUaW1lXCIsIFwibGFzdENoYW5nZWRCeVwiLCBuYW1lLCBkZXNjcmlwdGlvbikgVkFMVUVTICh0cnVlLCB0b190aW1lc3RhbXAoJHtib2R5MVtcImNyZWF0ZURhdGVUaW1lXCJdfSAvIDEwMDAuMCksIFxcJyR7Ym9keTFbXCJjcmVhdGVkQnlcIl19XFwnLCB0b190aW1lc3RhbXAoJHtib2R5MVtcImxhc3RDaGFuZ2VkRGF0ZVRpbWVcIl19IC8gMTAwMC4wKSwgXFwnJHtib2R5MVtcImxhc3RDaGFuZ2VkQnlcIl19XFwnLCAnJHtib2R5MVsnbmFtZSddfScsIFxcJyR7Ym9keTFbJ2Rlc2NyaXB0aW9uJ119XFwnKTtgO1xuICAgIGNvbnN0IHsgcm93cyB9ID0gYXdhaXQgcG9vbC5xdWVyeShzcWwpO1xuICAgIGNvbnNvbGUubG9nKHJvd3MpO1xuXG4gICAgcmV0dXJuIGFwaVJlc3BvbnNlcy5fMjAwKGJvZHkxW1wiY3JlYXRlRGF0ZVRpbWVcIl0pO1xufTtcbiAgICBjb25zdCBhcGlSZXNwb25zZXMgPSB7XG4gICAgICAgIF8yMDA6IChib2R5OiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc3RhdHVzQ29kZTogMjAwLFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHksIG51bGwsIDIpXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgXzQwMDogKGJvZHk6IHtba2V5OnN0cmluZ106IGFueX0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc3RhdHVzQ29kZTogNDAwLFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHksIG51bGwsIDIpXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lambdas/postCityInfo.ts\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./lambdas/postCityInfo.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;