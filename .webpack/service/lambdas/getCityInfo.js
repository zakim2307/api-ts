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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handler\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ \"source-map-support/register\");\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_dbConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/dbConfig */ \"./lambdas/models/dbConfig.ts\");\n\n\nconst handler = async (event, _context) => {\n    const name = event.pathParameters?.item;\n    if (!name) {\n        return apiResponses._400({ message: 'Cannot find name' });\n    }\n    const nm = name;\n    let newIn;\n    const sql = 'select * from \"Inventory\" where name=\\'' + nm + '\\';';\n    const { rows } = await _models_dbConfig__WEBPACK_IMPORTED_MODULE_1__.pool.query(sql);\n    console.log(rows);\n    const inventories = {\n        id: rows[0].id,\n        name: rows[0].name,\n        description: rows[0].description,\n        createdBy: rows[0].createdBy,\n        createDateTime: rows[0].createDateTime,\n        updatedBy: rows[0].lastChangedBy,\n        updatedDateTime: rows[0].lastChangedDateTime,\n    };\n    return apiResponses._200(inventories);\n};\nconst apiResponses = {\n    _200: (body) => {\n        return {\n            statusCode: 200,\n            body: JSON.stringify(body, null, 2)\n        };\n    },\n    _400: (body) => {\n        return {\n            statusCode: 400,\n            body: JSON.stringify(body, null, 2)\n        };\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9sYW1iZGFzL2dldENpdHlJbmZvLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXdzLXR5cGVzY3JpcHQtYXBpLy4vbGFtYmRhcy9nZXRDaXR5SW5mby50cz9iNGY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFQSUdhdGV3YXlQcm94eUhhbmRsZXIgfSBmcm9tICdhd3MtbGFtYmRhJztcbmltcG9ydCAnc291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyJztcbmltcG9ydCB7IHBvb2wgfSBmcm9tICcuL21vZGVscy9kYkNvbmZpZyc7XG5pbXBvcnQgeyBJbnZlbnRvcnkgfSBmcm9tICcuL2ludGVyZmFjZXMvaW52ZW50b3J5JztcblxuZXhwb3J0IGNvbnN0IGhhbmRsZXI6IEFQSUdhdGV3YXlQcm94eUhhbmRsZXIgPSBhc3luYyAoZXZlbnQsIF9jb250ZXh0KSA9PiB7XG4gIGNvbnN0IG5hbWUgPSBldmVudC5wYXRoUGFyYW1ldGVycz8uaXRlbTtcblxuICBcbiAgaWYoIW5hbWUpe1xuICAgICAgcmV0dXJuIGFwaVJlc3BvbnNlcy5fNDAwKHttZXNzYWdlOiAnQ2Fubm90IGZpbmQgbmFtZSd9KVxuICAgIH1cbiAgICBcbiAgICBjb25zdCBubTpzdHJpbmcgPSBuYW1lO1xuICAgIGxldCBuZXdJbjogeyBba2V5OiBzdHJpbmddOkludmVudG9yeSB9O1xuICAgIFxuICAgIGNvbnN0IHNxbDpzdHJpbmcgPSAnc2VsZWN0ICogZnJvbSBcIkludmVudG9yeVwiIHdoZXJlIG5hbWU9XFwnJytubSsnXFwnOycgXG4gICAgY29uc3QgeyByb3dzIH0gPSBhd2FpdCBwb29sLnF1ZXJ5KHNxbCk7XG4gICAgY29uc29sZS5sb2cocm93cyk7XG4gICAgY29uc3QgaW52ZW50b3JpZXM6SW52ZW50b3J5ID0ge1xuICAgICAgICBpZDogcm93c1swXS5pZCxcbiAgICAgICAgbmFtZTogcm93c1swXS5uYW1lLFxuICAgICAgICBkZXNjcmlwdGlvbjogcm93c1swXS5kZXNjcmlwdGlvbixcbiAgICAgICAgY3JlYXRlZEJ5OiByb3dzWzBdLmNyZWF0ZWRCeSxcbiAgICAgICAgY3JlYXRlRGF0ZVRpbWU6IHJvd3NbMF0uY3JlYXRlRGF0ZVRpbWUsXG4gICAgICAgIHVwZGF0ZWRCeTogcm93c1swXS5sYXN0Q2hhbmdlZEJ5LCBcbiAgICAgICAgdXBkYXRlZERhdGVUaW1lOiByb3dzWzBdLmxhc3RDaGFuZ2VkRGF0ZVRpbWUsXG4gICAgfVxuXG4gICAgcmV0dXJuIGFwaVJlc3BvbnNlcy5fMjAwKGludmVudG9yaWVzKTtcbn07XG4gICAgY29uc3QgYXBpUmVzcG9uc2VzID0ge1xuICAgICAgICBfMjAwOiAoYm9keTogYW55KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHN0YXR1c0NvZGU6IDIwMCxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5LCBudWxsLCAyKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICAgIF80MDA6IChib2R5OiB7W2tleTpzdHJpbmddOiBhbnl9KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHN0YXR1c0NvZGU6IDQwMCxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5LCBudWxsLCAyKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cblxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lambdas/getCityInfo.ts\n");

/***/ }),

/***/ "./lambdas/models/dbConfig.ts":
/*!************************************!*\
  !*** ./lambdas/models/dbConfig.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pool\": () => (/* binding */ pool)\n/* harmony export */ });\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pg */ \"pg\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pg__WEBPACK_IMPORTED_MODULE_0__);\n\nconst pool = new pg__WEBPACK_IMPORTED_MODULE_0__.Pool({\n    user: 'zaki',\n    host: 'localhost',\n    database: 'inventory',\n    password: 'root',\n    port: 5432,\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9sYW1iZGFzL21vZGVscy9kYkNvbmZpZy50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL2F3cy10eXBlc2NyaXB0LWFwaS8uL2xhbWJkYXMvbW9kZWxzL2RiQ29uZmlnLnRzPzM1MzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUG9vbCB9IGZyb20gJ3BnJztcbmV4cG9ydCBjb25zdCBwb29sID0gbmV3IFBvb2woe1xuICB1c2VyOiAnemFraScsXG4gIGhvc3Q6ICdsb2NhbGhvc3QnLFxuICBkYXRhYmFzZTogJ2ludmVudG9yeScsXG4gIHBhc3N3b3JkOiAncm9vdCcsXG4gIHBvcnQ6IDU0MzIsXG59KVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lambdas/models/dbConfig.ts\n");

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