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

/***/ "./lambdas/postCityInfo.ts":
/*!*********************************!*\
  !*** ./lambdas/postCityInfo.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handler\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ \"source-map-support/register\");\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);\n\nconst handler = async (event, _context) => {\n    const name = event.pathParameters?.name;\n    console.log('name is:', name);\n    if (!name) {\n    }\n    const nm = name;\n    let newIn;\n    let d1 = new Date();\n    console.log(Date.now());\n    return apiResponses._200(name);\n};\nconst apiResponses = {\n    _200: (body) => {\n        return {\n            statusCode: 200,\n            body: JSON.stringify(body, null, 2)\n        };\n    },\n    _400: (body) => {\n        return {\n            statusCode: 400,\n            body: JSON.stringify(body, null, 2)\n        };\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9sYW1iZGFzL3Bvc3RDaXR5SW5mby50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL2F3cy10eXBlc2NyaXB0LWFwaS8uL2xhbWJkYXMvcG9zdENpdHlJbmZvLnRzP2E4MzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBWYWxpZGF0ZWRFdmVudEFQSUdhdGV3YXlQcm94eUV2ZW50IH0gZnJvbSAnLi4vbGlicy9hcGlHYXRld2F5JztcbmltcG9ydCAnc291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyJztcbmltcG9ydCB7IHBvb2wgfSBmcm9tICcuL21vZGVscy9kYkNvbmZpZyc7XG5pbXBvcnQgeyBJbnZlbnRvcnkgfSBmcm9tICcuL2ludGVyZmFjZXMvaW52ZW50b3J5JztcbmltcG9ydCBzY2hlbWEgZnJvbSAnLi9tb2RlbHMvc2NoZW1hJ1xuXG5leHBvcnQgY29uc3QgaGFuZGxlcjogVmFsaWRhdGVkRXZlbnRBUElHYXRld2F5UHJveHlFdmVudDx0eXBlb2Ygc2NoZW1hPiA9IGFzeW5jIChldmVudCwgX2NvbnRleHQpID0+IHtcbiAgY29uc3QgbmFtZSA9IGV2ZW50LnBhdGhQYXJhbWV0ZXJzPy5uYW1lO1xuXG4gIGNvbnNvbGUubG9nKCduYW1lIGlzOicsbmFtZSlcbiAgaWYoIW5hbWUpe1xuICAgIC8vICAgcmV0dXJuIGFwaVJlc3BvbnNlcy5fNDAwKHttZXNzYWdlOiAnQ2Fubm90IGZpbmQgbmFtZSd9KVxuICAgIH1cbiAgICBcbiAgICBjb25zdCBubTpzdHJpbmcgPSBuYW1lO1xuICAgIGxldCBuZXdJbjogeyBba2V5OiBzdHJpbmddOkludmVudG9yeSB9O1xuICAgIGxldCBkMSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc29sZS5sb2coRGF0ZS5ub3coKSlcbiAgICAvLyBjb25zdCBzcWw6c3RyaW5nID0gYElOU0VSVCBJTlRPIFwiSW52ZW50b3J5XCIgKCBcImlzQWN0aXZlXCIsIFwiY3JlYXRlRGF0ZVRpbWVcIiwgXCJjcmVhdGVkQnlcIiwgXCJsYXN0Q2hhbmdlZERhdGVUaW1lXCIsIFwibGFzdENoYW5nZWRCeVwiLCBuYW1lLCBkZXNjcmlwdGlvbikgVkFMVUVTICh0cnVlLCB0b190aW1lc3RhbXAoJHtEYXRlLm5vdygpfSAvIDEwMDAuMCksIFxcJ0FkbWluXFwnLCBcXCcyMDIxLTA0LTEyIDEwOjU3OjUwLjEzNCswNTozMFxcJywgXFwnQWRtaW5cXCcsIFxcJ1NhbmRcXCcsIFxcJ2xhcmdlIGdyYWluZWRcXCcpO2A7XG4gICAgLy8gY29uc3QgeyByb3dzIH0gPSBhd2FpdCBwb29sLnF1ZXJ5KHNxbCk7XG4gICAgLy8gY29uc29sZS5sb2cocm93cyk7XG5cbiAgICByZXR1cm4gYXBpUmVzcG9uc2VzLl8yMDAobmFtZSk7XG59O1xuICAgIGNvbnN0IGFwaVJlc3BvbnNlcyA9IHtcbiAgICAgICAgXzIwMDogKGJvZHk6IGFueSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzdGF0dXNDb2RlOiAyMDAsXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSwgbnVsbCwgMilcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICBfNDAwOiAoYm9keToge1trZXk6c3RyaW5nXTogYW55fSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzdGF0dXNDb2RlOiA0MDAsXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSwgbnVsbCwgMilcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0E7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lambdas/postCityInfo.ts\n");

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