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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contactContent\": () => (/* binding */ contactContent),\n/* harmony export */   \"contactInfo\": () => (/* binding */ contactInfo)\n/* harmony export */ });\nconst address = '1234 anywhere st., City,State 12345';  \nconst hoursofoperation = Object.freeze([['Monday', '4PM - 10PM'], \n  ['Tuesday', '4PM - 10PM'], \n  ['Wednesday', '3:30PM - 10PM'], \n  ['Thursday', '2PM - 10PM'], \n  ['Friday', '2PM - 11PM'], \n  ['Saturday', '2PM - 12AM'], \n  ['Sunday', 'Closed'],\n]); \nconst phone = '123-456-7890';\n\nfunction contactContent(){\n  let div = contactInfo()\n  return div;\n};\n\nfunction contactInfo(){\n  let mainDiv = document.createElement('div');\n  mainDiv.setAttribute('id', 'contactbody'); \n  \n  let addressDiv = document.createElement('div');\n  addressDiv.setAttribute('id', 'address'); \n  addressDiv.textContent = address;\n\n  let phoneDiv = document.createElement('div');\n  phoneDiv.setAttribute('id', 'phone');\n  phoneDiv.textContent = phone;\n  \n  let hoursDiv = document.createElement('div'); \n  hoursDiv.setAttribute('id', 'hours');\n  let tableOfHours = document.createElement('table');\n  for (let day of hoursofoperation){\n    let row = document.createElement('tr'); \n    for(let content of day){\n      let cell = document.createElement('td'); \n      cell.textContent = content;\n      row.appendChild(cell);\n    }\n    tableOfHours.appendChild(row);\n  }\n  hoursDiv.append(tableOfHours); \n  mainDiv.append(addressDiv,hoursDiv, phoneDiv); \n  return mainDiv; \n}\n\n\n\n\n\n//# sourceURL=webpack://restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"footer\": () => (/* binding */ footer),\n/* harmony export */   \"header\": () => (/* binding */ header)\n/* harmony export */ });\nfunction header(){\n  let header_div = document.createElement('div');\n  let header = document.createElement('h1'); \n  header_div.setAttribute('id', 'header-container'); \n\n  header.textContent = 'Pizzeria Taqueria'; \n\n  header_div.appendChild(header); \n  return header_div; \n}\n\nfunction footer(){\n  let footer = document.createElement('footer');\n  let div = document.createElement('div'); \n\n  div.textContent = 'add here github info'; \n  footer.append(div)\n  return footer; \n}\n \n\n\n//# sourceURL=webpack://restaurant/./src/header.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homepageContent\": () => (/* binding */ homepageContent)\n/* harmony export */ });\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _initial_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initial_load */ \"./src/initial_load.js\");\n\n\n\nfunction homepageContent(){\n  let bodyDiv = document.createElement('div');\n  bodyDiv.appendChild(importHomeContent()); \n  bodyDiv.setAttribute('id','home-body-content'); \n  return bodyDiv;\n}\n\nfunction importHomeContent(){\nlet exportedhomepagediv = document.createElement('div');\n\nexportedhomepagediv.setAttribute('id', 'exportedhomepagediv'); \n\nfor(let i = 0; i < 2; i++){\n  let div = document.createElement('div'); \n  div.setAttribute('id', `${\"num\"+i}`);\n  if(div.id == \"num0\") {\n    let hero = document.createElement('div'); \n    let btnDiv = document.createElement('div');\n    let button = document.createElement('button');\n\n    btnDiv.setAttribute('id', 'orderbtn-div'); \n    hero.setAttribute('id', 'hero'); \n\n    hero.textContent = \"It's a pizza, it's a taco.... It's a pizza taco\"; \n    button.textContent = \"order here\"; \n\n    btnDiv.append(button); \n    div.append(hero,btnDiv);\n  \n    button.addEventListener('click',()=>{\n      _initial_load__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setCurrentTab(_initial_load__WEBPACK_IMPORTED_MODULE_1__[\"default\"].menuTab); \n      return;\n    })\n  } else{ \n    div.append((0,_contact__WEBPACK_IMPORTED_MODULE_0__.contactInfo)());\n  }\n  exportedhomepagediv.appendChild(div); \n}\n  return exportedhomepagediv; \n} \n\n\n//# sourceURL=webpack://restaurant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _initial_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial_load */ \"./src/initial_load.js\");\n\n\n(0,_initial_load__WEBPACK_IMPORTED_MODULE_0__.initial_load)();\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/initial_load.js":
/*!*****************************!*\
  !*** ./src/initial_load.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"initial_load\": () => (/* binding */ initial_load)\n/* harmony export */ });\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\n\n\n\n\n\n/** @typedef {{ header: HTMLElement; content: HTMLElement }} Tab */\n\nclass Page {\n  /** @type {HTMLElement} */\n  contentDiv;\n  /** @type {Tab} */\n  currentTab;\n  /** @type {HTMLElement} */\n  currentBodyDiv;\n  /** @type {Tab} */\n  homeTab;\n  /** @type {Tab} */\n  menuTab;\n  /** @type {Tab} */\n  contactTab;\n  /** @type {HTMLElement} */\n  navBar;\n  /** @type {HTMLElement} */\n  footer;\n\n  constructor() {\n    this.contentDiv = document.querySelector('#content');\n    this.contentDiv.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_0__.header)()); \n    this.navBar = this.createNavBar();\n    this.contentDiv.appendChild(this.navBar); \n    this.setCurrentTab(this.homeTab); \n    this.footer = (0,_header__WEBPACK_IMPORTED_MODULE_0__.footer)();\n    this.contentDiv.appendChild(this.footer); \n  }\n\n  /**\n   * @param {Tab} tabObject \n   */\n  setCurrentTab(tabObject) {\n    if(this.currentTab){\n      this.currentTab.header.classList.remove('green');\n    }\n    this.currentTab = tabObject; \n    this.currentTab.header.setAttribute('class', 'green'); \n    this.replaceBodyContent(tabObject.content);\n  }\n\n  createTabHeader(tabName) {\n    let tab = document.createElement('div');\n    tab.textContent = tabName;\n    return tab;\n  }\n\n  replaceBodyContent(bodyContent) {\n    if (this.currentBodyDiv) {\n      this.contentDiv.removeChild(this.currentBodyDiv);\n    }\n    this.currentBodyDiv = bodyContent;  \n    this.navBar.after(this.currentBodyDiv);\n  }\n\n  /**\n   * @returns {Tab}\n   */\n  createContactTab() {\n    let header = this.createTabHeader(\"CONTACT\"); \n    header.setAttribute('id','contact-content-div'); \n    header.onclick = () => this.setCurrentTab(this.contactTab);\n    let content = (0,_contact__WEBPACK_IMPORTED_MODULE_1__.contactContent)();\n    return { header, content };\n  }\n\n  /**\n   * @returns {Tab}\n   */\n  createMenuTab() {\n    let header = this.createTabHeader(\"MENU\");\n    header.setAttribute('id', 'menu-content-div'); \n    header.onclick = () => this.setCurrentTab(this.menuTab);\n    let content = (0,_menu__WEBPACK_IMPORTED_MODULE_2__.menuContent)();\n    return { header, content };\n  }\n\n  /**\n   * @returns {Tab}\n   */\n  createHomeTab() {\n    let header = this.createTabHeader(\"HOME\");\n    header.setAttribute('id', 'home-content-div'); \n    header.onclick = () => this.setCurrentTab(this.homeTab);\n    let content = (0,_home__WEBPACK_IMPORTED_MODULE_3__.homepageContent)();\n    return { header, content };\n  }\n\n/**\n * @returns {HTMLElement}\n *  */\n  createNavBar() {\n    let tabContainer = document.createElement('div');\n    tabContainer.classList.add('tab-list');\n\n    this.homeTab = this.createHomeTab();\n    this.menuTab = this.createMenuTab();\n    this.contactTab = this.createContactTab();\n    \n    tabContainer.appendChild(this.homeTab.header); \n    tabContainer.appendChild(this.menuTab.header);\n    tabContainer.appendChild(this.contactTab.header);\n    return tabContainer; \n  }\n}\n\nlet newPage = new Page(); \nfunction initial_load() {\n  newPage\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newPage); \n\n\n\n\n\n\n\n//# sourceURL=webpack://restaurant/./src/initial_load.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuContent\": () => (/* binding */ menuContent)\n/* harmony export */ });\nfunction menu(){\n  let content = document.createElement('div');\n  let p = document.createElement('p');\n\n  content.appendChild(p); \n  p.textContent = \"Paragraph -- for menu content\"; \n  return content; \n}   \n\nfunction menuContent(){\n  let main_div = document.createElement('div'); \n  main_div.setAttribute('id', 'menu-body');\n  let menu_items = [];\n  \n  for (let i =0; i < 5; i++){\n    let item = document.createElement('div'); \n    item.setAttribute('class', 'menu-item'); \n    item.setAttribute('id',`${i}`); \n    menu_items.push(item); \n  }\n  main_div.append(menu());\n  return main_div;\n}\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

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