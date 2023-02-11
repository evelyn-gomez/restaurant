/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contact\": () => (/* binding */ contact)\n/* harmony export */ });\nfunction contact() {\n  let div = document.createElement('div');\n  //if contact is clicked remove whatever content is in main home page append this content \n  div.textContent = 'here is the contact info container'; \n  return div; \n}\n\n\n//# sourceURL=webpack://restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"header\": () => (/* binding */ header)\n/* harmony export */ });\nfunction header(){\n  let header_div = document.createElement('div');\n  let header = document.createElement('h1'); \n\n  header_div.textContent = 'header container';\n  header.textContent = 'pizzeria taqueria'; \n\n  header_div.appendChild(header); \n  return header_div; \n}\n \n\n\n//# sourceURL=webpack://restaurant/./src/header.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _initial_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial_load */ \"./src/initial_load.js\");\n\n\n(0,_initial_load__WEBPACK_IMPORTED_MODULE_0__.initialLoad)(); \n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/initial_load.js":
/*!*****************************!*\
  !*** ./src/initial_load.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initialLoad\": () => (/* binding */ initialLoad)\n/* harmony export */ });\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\n\n\nfunction createTabHeader(tab_name, content_info){\n  let tab = document.createElement('div');\n  let content = content_info; \n  tab.appendChild(content); \n  tab.textContent = tab_name;\n  return tab; \n}\n\nfunction createContact(){\n  let tab = createTabHeader(\"contact\", (0,_contact__WEBPACK_IMPORTED_MODULE_1__.contact)()); \n  tab.addEventListener('click', (e)=>{\n    console.log(e);\n    console.log('contact event'); \n  })\n  return tab; \n}\n\nfunction createMenu(){\n  let tab = createTabHeader(\"menu\", (0,_menu__WEBPACK_IMPORTED_MODULE_2__.menu)());\n  tab.addEventListener('click', (e)=>{\n    console.log(e);\n    console.log('menu event');\n  });\n  return tab;\n}\n\nfunction createHome(){\n  let home_tab = document.createElement('div');\n  let content = document.createElement('p');\n  home_tab.textContent = \"home tab\"\n  content.textContent = \"content of Home page which should be home\"; \n  // home_tab.appendChild(content); \n\n  home_tab.addEventListener('click', (e)=>{\n    console.log(e);\n    console.log('home event'); \n  })\n  \n  return home_tab; \n}\n\nfunction createNavBar(){\n  let tab_container = document.createElement('div');\n  tab_container.classList.add('tab-list');\n  tab_container.appendChild(createHome()); \n  tab_container.appendChild(createMenu());\n  tab_container.appendChild(createContact());\n  return tab_container; \n}\n\nfunction initialLoad(){\n  let content_div = document.querySelector('#content');\n  let body_div = document.createElement('div'); \n\n  content_div.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_0__.header)()); \n  content_div.appendChild(createNavBar()); \n  content_div.append(body_div); \n  body_div.textContent = \"some paragraph here \";\n}\n\n\n\n//# sourceURL=webpack://restaurant/./src/initial_load.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menu\": () => (/* binding */ menu)\n/* harmony export */ });\nfunction menu(){\n  let content = document.createElement('div');\n  let p = document.createElement('p');\n\n  content.appendChild(p); \n  p.textContent = \"Paragraph -- for menu content\"; \n  return content; \n}\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;