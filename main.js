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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contact\": () => (/* binding */ contact),\n/* harmony export */   \"contact_content\": () => (/* binding */ contact_content)\n/* harmony export */ });\nlet main_div = document.createElement('div');\nlet address_div = document.createElement('div'); \nlet hours_div = document.createElement('div'); \nlet call_div = document.createElement('div');\n\nmain_div.setAttribute('id','contact-body');\n\n\nfunction contact() {\n  let div = document.createElement('div');\n  return div; \n\n  //NOT USING \n}\nfunction contact_content(){\n   main_div.textContent = 'contact body div';\n\n\n  return main_div;\n  // main_div.append(address_div, call_div, hours_div);  \n\n}\n\n\n\n\n//# sourceURL=webpack://restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"header\": () => (/* binding */ header)\n/* harmony export */ });\nfunction header(){\n  let header_div = document.createElement('div');\n  let header = document.createElement('h1'); \n  header_div.setAttribute('id', 'header-container'); \n\n  header.textContent = 'Pizzeria Taqueria'; \n\n  header_div.appendChild(header); \n  return header_div; \n}\n \n\n\n//# sourceURL=webpack://restaurant/./src/header.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHome\": () => (/* binding */ createHome),\n/* harmony export */   \"homepage_content\": () => (/* binding */ homepage_content),\n/* harmony export */   \"initialLoad\": () => (/* binding */ initialLoad)\n/* harmony export */ });\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\n\n\nlet content_div = document.querySelector('#content');\nlet currentBodyDiv = homepage_content(); \nlet currentTab = undefined;\nlet menu_tab; \n\nfunction setCurrentTab(tab){\n  if (currentTab == undefined){\n    currentTab = tab; \n    currentTab.setAttribute('class', 'green'); \n    return; \n  }\n  currentTab.classList.remove('green'); \n  currentTab = tab; \n  currentTab.setAttribute('class', 'green'); \n}\n\nfunction createTabHeader(tab_name){\n  let tab = document.createElement('div');\n  // let content = content_info; \n  // tab.appendChild(content); \n  tab.textContent = tab_name;\n  return tab; \n}\n\nfunction globalEListener(body_content){\n  content_div.removeChild(currentBodyDiv);\n  currentBodyDiv = body_content;  \n  content_div.appendChild(currentBodyDiv);\n  return \n}\n\nfunction createContact(){\n  let tab = createTabHeader(\"CONTACT\"); \n  tab.setAttribute('id','contact-content-div'); \n  tab.addEventListener('click', ()=>{\n    setCurrentTab(tab); \n    if(currentBodyDiv.id == 'contact-body'){\n      return;\n    }\n    globalEListener((0,_contact__WEBPACK_IMPORTED_MODULE_1__.contact_content)())\n  });\n  return tab; \n}\n\nfunction createMenu(){\n  menu_tab = createTabHeader(\"MENU\");\n  menu_tab.setAttribute('id', 'menu-content-div'); \n  menu_tab.addEventListener('click', ()=>{\n    setCurrentTab(menu_tab); \n    if(currentBodyDiv.id == 'menu-body'){\n      return; \n    }\n    globalEListener((0,_menu__WEBPACK_IMPORTED_MODULE_2__.menu_Content)());\n  }) \n  return menu_tab;\n}\n\nfunction createHome(){\n  let home_tab = document.createElement('div');\n  home_tab.textContent = \"HOME\";\n  setCurrentTab(home_tab); \n  home_tab.addEventListener('click', ()=>{\n    setCurrentTab(home_tab);  \n    globalEListener(homepage_content());\n  })\n  return home_tab; \n}\n\n\n\n\nfunction homepage_content(){\n  let body_div = document.createElement('div');\n  for(let i = 0; i < 2; i++){\n    let div = document.createElement('div'); \n    div.setAttribute('id', `${\"num\"+i}`);\n    if(div.id == \"num0\"){\n      let hero = document.createElement('div');\n      let btnDiv = document.createElement('div');\n      let button = document.createElement('button');\n\n      div.append(hero, btnDiv); \n      btnDiv.append(button); \n\n      hero.setAttribute('id', 'hero'); \n      btnDiv.setAttribute('id', 'orderbtn-div'); \n\n      hero.textContent = \"It's a pizza, it's a taco.... It's a pizza taco\"; \n      button.textContent = \"order here\"; \n    \n      button.addEventListener('click',()=>{\n        setCurrentTab(menu_tab);\n        globalEListener((0,_menu__WEBPACK_IMPORTED_MODULE_2__.menu_Content)()); \n      })\n\n    } else{\n      let address_div = document.createElement('div'); \n      address_div.setAttribute('class', 'address-info-div'); \n      address_div.textContent = 'Contact US';\n      div.appendChild(address_div); \n    }\n    body_div.appendChild(div); \n    body_div.setAttribute('id','home-body-content'); \n  }\n  return body_div;\n}\n\nfunction createNavBar(){\n  let tab_container = document.createElement('div');\n  tab_container.classList.add('tab-list');\n  \n  tab_container.appendChild(createHome()); \n  tab_container.appendChild(createMenu());\n  tab_container.appendChild(createContact());\n  return tab_container; \n}\n\nfunction initialLoad(){\n  content_div.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_0__.header)()); \n  content_div.appendChild(createNavBar()); \n  content_div.append(currentBodyDiv); \n}\n\n\n\n//# sourceURL=webpack://restaurant/./src/initial_load.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menu\": () => (/* binding */ menu),\n/* harmony export */   \"menu_Content\": () => (/* binding */ menu_Content)\n/* harmony export */ });\nfunction menu(){\n  let content = document.createElement('div');\n  let p = document.createElement('p');\n\n  content.appendChild(p); \n  p.textContent = \"Paragraph -- for menu content\"; \n  return content; \n}\n\nfunction menu_Content(){\n  let main_div = document.createElement('div'); \n  main_div.setAttribute('id', 'menu-body');\n  let menu_items = [];\n  \n  for (let i =0; i < 5; i++){\n    let item = document.createElement('div'); \n    item.setAttribute('class', 'menu-item'); \n    item.setAttribute('id',`${i}`); \n\n    menu_items.push(item); \n  }\n\n  return main_div;\n}\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

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