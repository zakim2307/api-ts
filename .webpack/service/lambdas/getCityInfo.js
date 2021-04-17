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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handler\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ \"source-map-support/register\");\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_dbConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/dbConfig */ \"./lambdas/models/dbConfig.ts\");\n\n\nconst handler = async (event, _context) => {\n    const name = event.pathParameters?.item;\n    console.log(event.pathParameters, \"The name is: \" + name);\n    if (!name) {\n        return apiResponses._400({ message: 'Cannot find name' });\n    }\n    const nm = name;\n    const sql = 'select * from \"Inventory\" where name=\\'' + nm + '\\';';\n    _models_dbConfig__WEBPACK_IMPORTED_MODULE_1__.pool.query(sql, (err, res) => {\n        console.log(sql, \"\\n\", nm);\n        console.log(res.rows[0], sql);\n        inventory[name].id = res.rows[0].id;\n        console.log(inventory[name]);\n        _models_dbConfig__WEBPACK_IMPORTED_MODULE_1__.pool.end();\n    });\n    return apiResponses._200(inventory[name]);\n};\nconst apiResponses = {\n    _200: (body) => {\n        console.log(body);\n        return {\n            statusCode: 200,\n            body: JSON.stringify(body, null, 2)\n        };\n    },\n    _400: (body) => {\n        return {\n            statusCode: 400,\n            body: JSON.stringify(body, null, 2)\n        };\n    }\n};\nconst inventory = {\n    cement: {\n        id: 'za',\n        createdBy: 'random',\n        createDateTime: 'random',\n        updatedBy: 'random',\n        updatedDateTime: 'random',\n        name: 'cement',\n        description: 'New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers. Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park. Broadway theater is staged in neon-lit Times Square.',\n    },\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9sYW1iZGFzL2dldENpdHlJbmZvLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXdzLXR5cGVzY3JpcHQtYXBpLy4vbGFtYmRhcy9nZXRDaXR5SW5mby50cz9iNGY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFQSUdhdGV3YXlQcm94eUhhbmRsZXIgfSBmcm9tICdhd3MtbGFtYmRhJztcbmltcG9ydCAnc291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyJztcbmltcG9ydCB7IHBvb2wgfSBmcm9tICcuL21vZGVscy9kYkNvbmZpZydcblxuZXhwb3J0IGNvbnN0IGhhbmRsZXI6IEFQSUdhdGV3YXlQcm94eUhhbmRsZXIgPSBhc3luYyAoZXZlbnQsIF9jb250ZXh0KSA9PiB7XG4gIGNvbnN0IG5hbWUgPSBldmVudC5wYXRoUGFyYW1ldGVycz8uaXRlbTtcblxuICBjb25zb2xlLmxvZyhldmVudC5wYXRoUGFyYW1ldGVycyxcIlRoZSBuYW1lIGlzOiBcIisgbmFtZSlcbiAgICBcbiAgaWYoIW5hbWUpe1xuICAgICAgcmV0dXJuIGFwaVJlc3BvbnNlcy5fNDAwKHttZXNzYWdlOiAnQ2Fubm90IGZpbmQgbmFtZSd9KVxuICB9XG5cbiAgICBjb25zdCBubTpzdHJpbmcgPSBuYW1lO1xuXG4gICAgY29uc3Qgc3FsOnN0cmluZyA9ICdzZWxlY3QgKiBmcm9tIFwiSW52ZW50b3J5XCIgd2hlcmUgbmFtZT1cXCcnK25tKydcXCc7JyBcbiAgICBwb29sLnF1ZXJ5KHNxbCwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHNxbCxcIlxcblwiLG5tKTtcbiAgICAgIGNvbnNvbGUubG9nKHJlcy5yb3dzWzBdLCBzcWwpOyBcbiAgICAgIGludmVudG9yeVtuYW1lXS5pZCA9IHJlcy5yb3dzWzBdLmlkOyBcbiAgICAgIGNvbnNvbGUubG9nKGludmVudG9yeVtuYW1lXSk7XG4gICAgICBwb29sLmVuZCgpIFxuICAgIH0pXG4gICAgcmV0dXJuIGFwaVJlc3BvbnNlcy5fMjAwKGludmVudG9yeVtuYW1lXSk7XG59O1xuICAgIGNvbnN0IGFwaVJlc3BvbnNlcyA9IHtcbiAgICAgICAgXzIwMDogKGJvZHk6IHtba2V5OnN0cmluZ106IGFueX0pID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGJvZHkpXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHN0YXR1c0NvZGU6IDIwMCxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5LCBudWxsLCAyKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICAgIF80MDA6IChib2R5OiB7W2tleTpzdHJpbmddOiBhbnl9KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHN0YXR1c0NvZGU6IDQwMCxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5LCBudWxsLCAyKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5pbnRlcmZhY2UgSW52ZW50b3J5IHtcbiAgICBpZCA6IHN0cmluZztcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgICBjcmVhdGVkQnk6IHN0cmluZztcbiAgICBjcmVhdGVEYXRlVGltZTogc3RyaW5nO1xuICAgIHVwZGF0ZWRCeTogc3RyaW5nO1xuICAgIHVwZGF0ZWREYXRlVGltZTogc3RyaW5nO1xufVxuXG5jb25zdCBpbnZlbnRvcnk6IHsgW2tleTogc3RyaW5nXTpJbnZlbnRvcnkgfSA9IHtcbiAgICBjZW1lbnQ6IHtcbiAgICAgICAgaWQ6ICd6YScsXG4gICAgICAgIGNyZWF0ZWRCeTogJ3JhbmRvbScsXG4gICAgICAgIGNyZWF0ZURhdGVUaW1lOiAncmFuZG9tJyxcbiAgICAgICAgdXBkYXRlZEJ5OiAncmFuZG9tJyxcbiAgICAgICAgdXBkYXRlZERhdGVUaW1lOiAncmFuZG9tJyxcbiAgICAgICAgbmFtZTogJ2NlbWVudCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgJ05ldyBZb3JrIENpdHkgY29tcHJpc2VzIDUgYm9yb3VnaHMgc2l0dGluZyB3aGVyZSB0aGUgSHVkc29uIFJpdmVyIG1lZXRzIHRoZSBBdGxhbnRpYyBPY2Vhbi4gQXQgaXRzIGNvcmUgaXMgTWFuaGF0dGFuLCBhIGRlbnNlbHkgcG9wdWxhdGVkIGJvcm91Z2ggdGhhdOKAmXMgYW1vbmcgdGhlIHdvcmxk4oCZcyBtYWpvciBjb21tZXJjaWFsLCBmaW5hbmNpYWwgYW5kIGN1bHR1cmFsIGNlbnRlcnMuIEl0cyBpY29uaWMgc2l0ZXMgaW5jbHVkZSBza3lzY3JhcGVycyBzdWNoIGFzIHRoZSBFbXBpcmUgU3RhdGUgQnVpbGRpbmcgYW5kIHNwcmF3bGluZyBDZW50cmFsIFBhcmsuIEJyb2Fkd2F5IHRoZWF0ZXIgaXMgc3RhZ2VkIGluIG5lb24tbGl0IFRpbWVzIFNxdWFyZS4nLFxuICAgIH0sXG59Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lambdas/getCityInfo.ts\n");

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