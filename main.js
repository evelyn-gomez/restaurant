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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contact\": () => (/* binding */ contact),\n/* harmony export */   \"contact_content\": () => (/* binding */ contact_content)\n/* harmony export */ });\nfunction contact() {\n  let div = document.createElement('div');\n  //if contact is clicked remove whatever content is in main home page append this content \n  div.textContent = 'here is the contact info container'; \n  return div; \n}\nfunction contact_content(){\n  let main_div = document.createElement('div');\n  let sub_div = document.createElement('div'); \n  let other_div = document.createElement('div'); \n  let getInTouchForm = document.createElement('div');\n  let findUsMap = document.createElement('div');\n  let header = document.createElement('h3');\n  main_div.setAttribute('id','contact-body');\n\n  let div_array = [];\n  let div_id = ['contact_h1', 'contact_form', 'contact_info', 'contact_socials'];   \n \n  for(let i=0; i < 4; i++){\n    let div = document.createElement('div');\n    // if() \n    div.setAttribute('id', `${div_id[i]}`); \n    div_array.push(div)\n  }\n\n  main_div.appendChild(header); \n  main_div.appendChild(sub_div);\n  sub_div.append(div_array[0], div_array[1],div_array[2],div_array[3]);\n  main_div.appendChild(other_div); \n  other_div.append(getInTouchForm,findUsMap); \n  return main_div; \n}\n\n\n//# sourceURL=webpack://restaurant/./src/contact.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHome\": () => (/* binding */ createHome),\n/* harmony export */   \"homepage_content\": () => (/* binding */ homepage_content),\n/* harmony export */   \"initialLoad\": () => (/* binding */ initialLoad)\n/* harmony export */ });\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\n\n\nlet content_div = document.querySelector('#content');\nlet currentBodyDiv = homepage_content();  \n\nfunction createTabHeader(tab_name, content_info){\n  let tab = document.createElement('div');\n  let content = content_info; \n  tab.appendChild(content); \n  tab.textContent = tab_name;\n  return tab; \n}\n\nfunction globalEListener(body_content){\n  content_div.removeChild(currentBodyDiv);\n  currentBodyDiv = body_content;  \n  content_div.appendChild(currentBodyDiv);\n  return \n}\n\nfunction createContact(){\n  let tab = createTabHeader(\"contact\", (0,_contact__WEBPACK_IMPORTED_MODULE_1__.contact)()); \n  tab.setAttribute('id','contact-content-div'); \n  tab.addEventListener('click', ()=>{\n    globalEListener((0,_contact__WEBPACK_IMPORTED_MODULE_1__.contact_content)())\n  });\n  return tab; \n}\n\nfunction createMenu(){\n  let tab = createTabHeader(\"menu\", (0,_menu__WEBPACK_IMPORTED_MODULE_2__.menu)());\n  tab.addEventListener('click', ()=>{\n    globalEListener((0,_menu__WEBPACK_IMPORTED_MODULE_2__.menu_Content)());\n  }) \n  return tab;\n}\n\nfunction createHome(){\n  let home_tab = document.createElement('div');\n  home_tab.textContent = \"home tab\"\n  home_tab.addEventListener('click', ()=>{\n   globalEListener(homepage_content());\n  })\n  return home_tab; \n}\n\nfunction homepage_content(){\n  let body_div = document.createElement('div'); \n  body_div.setAttribute('id','home-body-content'); \n  body_div.textContent = \"some paragraph here \";\n  console.log('this is body div');\n  console.log(body_div.className);\n  return body_div;\n}\n\nfunction createNavBar(){\n  let tab_container = document.createElement('div');\n  tab_container.classList.add('tab-list');\n  tab_container.appendChild(createHome()); \n  tab_container.appendChild(createMenu());\n  tab_container.appendChild(createContact());\n  return tab_container; \n}\n\nfunction initialLoad(){\n  content_div.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_0__.header)()); \n  content_div.appendChild(createNavBar()); \n  content_div.append(currentBodyDiv); \n}\n\n\n\n//# sourceURL=webpack://restaurant/./src/initial_load.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menu\": () => (/* binding */ menu),\n/* harmony export */   \"menu_Content\": () => (/* binding */ menu_Content)\n/* harmony export */ });\nfunction menu(){\n  let content = document.createElement('div');\n  let p = document.createElement('p');\n\n  content.appendChild(p); \n  p.textContent = \"Paragraph -- for menu content\"; \n  return content; \n}\n\nfunction menu_Content(){\n  let main_div = document.createElement('div'); \n  main_div.setAttribute('id', 'menu_body');\n  let menu_items = [];\n  \n  for (let i =0; i < 5; i++){\n    let item = document.createElement('div'); \n    item.setAttribute('class', 'menu-item'); \n    item.setAttribute('id',`${i}`); \n\n    menu_items.push(item); \n  }\n\n  return main_div;\n}\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

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