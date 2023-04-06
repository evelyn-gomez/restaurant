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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contact\": () => (/* binding */ contact),\n/* harmony export */   \"contactContent\": () => (/* binding */ contactContent)\n/* harmony export */ });\nlet main_div = document.createElement('div');\nlet address_div = document.createElement('div'); \nlet hours_div = document.createElement('div'); \nlet call_div = document.createElement('div');\n\nmain_div.setAttribute('id','contact-body');\n\n\nfunction contact() {\n  let div = document.createElement('div');\n  return div; \n\n  //NOT USING \n}\n\n\nfunction contactContent(){\n  address_div.textContent ='address';\n  call_div.textContent= 'phone';\n  hours_div.textContent = 'hours of op';\n  main_div.append(address_div,call_div,hours_div);\n  return main_div;\n  // main_div.append(address_div, call_div, hours_div);  \n\n}\n\n\n\n\n//# sourceURL=webpack://restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"header\": () => (/* binding */ header)\n/* harmony export */ });\nfunction header(){\n  let header_div = document.createElement('div');\n  let header = document.createElement('h1'); \n  header_div.setAttribute('id', 'header-container'); \n\n  header.textContent = 'Pizzeria Taqueria'; \n\n  header_div.appendChild(header); \n  return header_div; \n}\n \n\n\n//# sourceURL=webpack://restaurant/./src/header.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"importHomeContent\": () => (/* binding */ importHomeContent)\n/* harmony export */ });\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _initial_load__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./initial_load */ \"./src/initial_load.js\");\n\n\n\n\nfunction importHomeContent(){\n  let pdiv = document.createElement('div'); \n  for(let i = 0; i < 2; i++){\n    let div = document.createElement('div'); \n    div.setAttribute('id', `${\"num\"+i}`);\n    debugger\n    if (div.id == \"num0\") {\n      let hero = document.createElement('div');\n      let btnDiv = document.createElement('div');\n      let button = document.createElement('button');\n\n      div.append(hero, btnDiv); \n      btnDiv.append(button); \n\n      hero.setAttribute('id', 'hero'); \n      btnDiv.setAttribute('id', 'orderbtn-div'); \n\n      hero.textContent = \"It's a pizza, it's a taco.... It's a pizza taco\"; \n      button.textContent = \"order here\"; \n    \n      button.addEventListener('click',()=>{\n        console.log(_menu__WEBPACK_IMPORTED_MODULE_1__.menuContent); \n        _initial_load__WEBPACK_IMPORTED_MODULE_2__[\"default\"].setCurrentTab(_initial_load__WEBPACK_IMPORTED_MODULE_2__[\"default\"].menuTab); \n        return;\n      })\n    } else{  \n      console.log(div);\n      let contactInfoDiv = document.createElement('div'); \n      contactInfoDiv.setAttribute('class', 'address-info-div'); \n      contactInfoDiv.append((0,_contact__WEBPACK_IMPORTED_MODULE_0__.contactContent)()); \n      div.appendChild(contactInfoDiv); \n    }\n    return div; \n  }\n} \n\n\n//# sourceURL=webpack://restaurant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _initial_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial_load */ \"./src/initial_load.js\");\n\n\n(0,_initial_load__WEBPACK_IMPORTED_MODULE_0__.initialLoad)();  \n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/initial_load.js":
/*!*****************************!*\
  !*** ./src/initial_load.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"initialLoad\": () => (/* binding */ initialLoad)\n/* harmony export */ });\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\n\n\n\n\n/** @typedef {{ header: HTMLElement; content: HTMLElement }} Tab */\n\nclass Page {\n  /** @type {HTMLElement} */\n  contentDiv;\n  /** @type {Tab} */\n  currentTab;\n  /** @type {HTMLElement} */\n  currentBodyDiv;\n\n  /** @type {Tab} */\n  homeTab;\n  /** @type {Tab} */\n  menuTab;\n  /** @type {Tab} */\n  contactTab;\n\n  constructor() {\n    this.contentDiv = document.querySelector('#content');\n    this.contentDiv.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_0__.header)()); \n    this.contentDiv.appendChild(this.createNavBar()); \n    this.setCurrentTab(this.homeTab);\n  }\n\n  /**\n   * @param {Tab} tabObject \n   */\n  setCurrentTab(tabObject) {\n    if(this.currentTab){\n      this.currentTab.header.classList.remove('green');\n    }\n    this.currentTab = tabObject; \n    this.currentTab.header.setAttribute('class', 'green'); \n    this.replaceBodyContent(tabObject.content);\n  }\n\n  createTabHeader(tabName) {\n    let tab = document.createElement('div');\n    tab.textContent = tabName;\n    return tab;\n  }\n\n  replaceBodyContent(bodyContent) {\n    if (this.currentBodyDiv) {\n      this.contentDiv.removeChild(this.currentBodyDiv);\n    }\n    this.currentBodyDiv = bodyContent;  \n    this.contentDiv.appendChild(this.currentBodyDiv);\n  }\n\n  /**\n   * @returns {Tab}\n   */\n  createContact() {\n    let header = this.createTabHeader(\"CONTACT\"); \n    header.setAttribute('id','contact-content-div'); \n    header.onclick = () => this.setCurrentTab(this.contactTab);\n    let content = (0,_contact__WEBPACK_IMPORTED_MODULE_1__.contactContent)();\n    return { header, content };\n  }\n\n  /**\n   * @returns {Tab}\n   */\n  createMenuTab() {\n    let header = this.createTabHeader(\"MENU\");\n    header.setAttribute('id', 'menu-content-div'); \n    header.onclick = () => this.setCurrentTab(this.menuTab);\n    let content = (0,_menu__WEBPACK_IMPORTED_MODULE_2__.menuContent)();\n    return { header, content };\n  }\n\n  /**\n   * @returns {Tab}\n   */\n  createHomeTab() {\n    let header = this.createTabHeader(\"HOME\");\n    header.setAttribute('id', 'home-content-div'); \n    header.onclick = () => this.setCurrentTab(this.homeTab);\n    let content = this.homepageContent();\n    return { header, content };\n  }\n\n  /**@return {HTMLElement} */\n  homepageContent() {\n    let bodyDiv = document.createElement('div');\n    bodyDiv.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_3__.importHomeContent)()); \n    bodyDiv.setAttribute('id','home-body-content'); \n    return bodyDiv;\n  }\n/**\n * @returns {HTMLElement}\n *  */\n  createNavBar() {\n    let tabContainer = document.createElement('div');\n    tabContainer.classList.add('tab-list');\n\n    this.homeTab = this.createHomeTab();\n    this.menuTab = this.createMenuTab();\n    this.contactTab = this.createContact();\n    \n    tabContainer.appendChild(this.homeTab.header); \n    tabContainer.appendChild(this.menuTab.header);\n    tabContainer.appendChild(this.contactTab.header);\n    return tabContainer; \n  }\n\n  // listeners(){\n    \n  // }\n}\n\nlet newPage = new Page(); \nfunction initialLoad() {\n  newPage; \n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newPage); \n\n\n\n\n\n\n\n\n//# sourceURL=webpack://restaurant/./src/initial_load.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menu\": () => (/* binding */ menu),\n/* harmony export */   \"menuContent\": () => (/* binding */ menuContent)\n/* harmony export */ });\nfunction menu(){\n  let content = document.createElement('div');\n  let p = document.createElement('p');\n\n  content.appendChild(p); \n  p.textContent = \"Paragraph -- for menu content\"; \n  return content; \n}   \n\nfunction menuContent(){\n  let main_div = document.createElement('div'); \n  main_div.setAttribute('id', 'menu-body');\n  let menu_items = [];\n  \n  for (let i =0; i < 5; i++){\n    let item = document.createElement('div'); \n    item.setAttribute('class', 'menu-item'); \n    item.setAttribute('id',`${i}`); \n\n    menu_items.push(item); \n  }\n\n  return main_div;\n}\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

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