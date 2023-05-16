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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contactContent\": () => (/* binding */ contactContent),\n/* harmony export */   \"contactInfo\": () => (/* binding */ contactInfo)\n/* harmony export */ });\nconst address = '1234 anywhere st., City,State 12345';  \nconst addressHeader = 'Address:'; \n\nconst hoursofoperation = Object.freeze([['Monday', '4PM - 10PM'], \n  ['Tuesday', '4PM - 10PM'], \n  ['Wednesday', '3:30PM - 10PM'], \n  ['Thursday', '2PM - 10PM'], \n  ['Friday', '2PM - 11PM'], \n  ['Saturday', '2PM - 12AM'], \n  ['Sunday', 'Closed'],\n]); \nconst hoursHeader = 'Hours:'; \n\nconst phone = '123-456-7890';\nconst phoneHeader = 'Phone:'\n\nfunction contactContent(){\n  let div = contactInfo();\n  div.setAttribute('id', 'contact-content')\n  return div;\n};\n\nfunction contactInfo(){\n  let mainDiv = document.createElement('div');\n  mainDiv.setAttribute('id', 'contact-info'); \n\n  let addressDiv = createContactUnit(address, addressHeader); \n  addressDiv.setAttribute('id', 'address'); \n\n  let phoneDiv = createContactUnit(phone, phoneHeader);\n  phoneDiv.setAttribute('id', 'phone'); \n\n  let hoursDiv = createContactUnit('hours', hoursHeader); \n  hoursDiv.setAttribute('id', 'hours'); \n\n  mainDiv.append(addressDiv,hoursDiv, phoneDiv); \n  return mainDiv; \n}\n\n\nfunction createHoursTable(){\n  let table = document.createElement('table')\n  for (let day of hoursofoperation){\n    let row = document.createElement('tr'); \n    for(let content of day){\n      let cell = document.createElement('td'); \n      cell.textContent = content;\n      row.appendChild(cell);\n    }\n    table.appendChild(row);\n  }\n  return table; \n}; \n\n\nfunction createContactUnit(content, header){\nlet contentDiv = document.createElement('div'); \nlet head = document.createElement('div');\nhead.textContent = header; \nlet cont = document.createElement('div')\nif(header == 'Hours:'){\n  let div = createHoursTable(); \n  cont.appendChild(div); \n}else{\n  cont.textContent = content;\n}\n\ncontentDiv.appendChild(head);\ncontentDiv.appendChild(cont); \nreturn contentDiv; \n}\n\n\n\n\n//# sourceURL=webpack://restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"footer\": () => (/* binding */ footer)\n/* harmony export */ });\nfunction footer(){\n  let footer = document.createElement('footer');\n  let div = document.createElement('div');\n\n  let linkDiv = document.createElement('a'); \n  linkDiv.setAttribute('href', 'https://github.com/evelyn-gomez')\n\n  let madeBy = document.createElement('div');\n  madeBy.textContent = 'Made by';\n\n  let heart = document.createElement('span'); \n  heart.setAttribute('class', 'heart'); \n\n  let name = document.createElement('div');\n  name.textContent = 'Evelyn Gomez'; \n\n  let githubIcon = document.createElement('i'); \n  githubIcon.setAttribute('class', 'fa fa-github'); \n  githubIcon.setAttribute('aria-hidden', 'true'); \n\n  linkDiv.appendChild(name); \n  linkDiv.appendChild(githubIcon); \n  div.appendChild(madeBy)\n  div.appendChild(heart); \n  footer.appendChild(div); \n  footer.appendChild(linkDiv);\n  return footer; \n}\n\n\n//# sourceURL=webpack://restaurant/./src/footer.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"header\": () => (/* binding */ header)\n/* harmony export */ });\nfunction header(){\n  let header_div = document.createElement('div');\n  let header = document.createElement('h1'); \n  header_div.setAttribute('id', 'header-container'); \n\n  header.textContent = 'Pizzeria Taqueria'; \n\n  header_div.appendChild(header); \n  return header_div; \n}\n\n\n\n//# sourceURL=webpack://restaurant/./src/header.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homepageContent\": () => (/* binding */ homepageContent)\n/* harmony export */ });\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _initial_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initial_load */ \"./src/initial_load.js\");\n\n\n\nfunction homepageContent(){\n  let bodyDiv = document.createElement('div');\n  importHomeContent(bodyDiv); \n  bodyDiv.setAttribute('id','home-content'); \n  return bodyDiv;\n}\n\nfunction importHomeContent(mainDiv){\n\nfor(let i = 0; i < 2; i++){\n  let div = document.createElement('div'); \n  div.setAttribute('id', `${\"num\"+i}`);\n  if(div.id == \"num0\") {\n    let hero = document.createElement('div'); \n    let btnDiv = document.createElement('div');\n    let button = document.createElement('button');\n\n    btnDiv.setAttribute('id', 'orderbtn-div'); \n    hero.setAttribute('id', 'hero'); \n\n    hero.textContent = \"It's a pizza, it's a taco.... It's a pizza taco!\"; \n    button.textContent = \"order here\"; \n\n    btnDiv.append(button); \n    div.append(hero,btnDiv);\n  \n    button.addEventListener('click',()=>{\n      _initial_load__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setCurrentTab(_initial_load__WEBPACK_IMPORTED_MODULE_1__[\"default\"].menuTab); \n      return;\n    })\n  } else{ \n    // div.append(contactInfo());\n   return; \n  }\n\n  mainDiv.appendChild(div); \n}\nreturn; \n} \n\n\n//# sourceURL=webpack://restaurant/./src/home.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"initial_load\": () => (/* binding */ initial_load)\n/* harmony export */ });\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\n\n\n\n\n\n/** @typedef {{ header: HTMLElement; content: HTMLElement }} Tab */\n\nclass Page {\n  /** @type {HTMLElement} */\n  contentDiv;\n  /** @type {Tab} */\n  currentTab;\n  /** @type {HTMLElement} */\n  currentBodyDiv;\n  /** @type {Tab} */\n  homeTab;\n  /** @type {Tab} */\n  menuTab;\n  /** @type {Tab} */\n  contactTab;\n  /** @type {HTMLElement} */\n  navBar;\n  /** @type {HTMLElement} */\n  footer;\n\n  constructor() {\n    this.contentDiv = document.querySelector('#content');\n    this.contentDiv.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_0__.header)()); \n    this.navBar = this.createNavBar();\n    this.contentDiv.appendChild(this.navBar); \n    this.setCurrentTab(this.homeTab); \n    this.footer = (0,_footer__WEBPACK_IMPORTED_MODULE_1__.footer)();\n    this.contentDiv.appendChild(this.footer); \n  }\n\n  /**\n   * @param {Tab} tabObject \n   */\n  setCurrentTab(tabObject) {\n    if(this.currentTab){\n      this.currentTab.header.classList.remove('green');\n    }\n    this.currentTab = tabObject; \n    this.currentTab.header.setAttribute('class', 'green'); \n    this.replaceBodyContent(tabObject.content);\n  }\n\n  createTabHeader(tabName) {\n    let tab = document.createElement('div');\n    tab.textContent = tabName;\n    return tab;\n  }\n\n  replaceBodyContent(bodyContent) {\n    if (this.currentBodyDiv) {\n      this.contentDiv.removeChild(this.currentBodyDiv);\n    }\n    this.currentBodyDiv = bodyContent;  \n    this.navBar.after(this.currentBodyDiv);\n  }\n\n  /**\n   * @returns {Tab}\n   */\n  createContactTab() {\n    let header = this.createTabHeader(\"CONTACT\"); \n    header.setAttribute('id','contact-header'); \n    header.onclick = () => this.setCurrentTab(this.contactTab);\n    let content = (0,_contact__WEBPACK_IMPORTED_MODULE_2__.contactContent)();\n    return { header, content };\n  }\n\n  /**\n   * @returns {Tab}\n   */\n  createMenuTab() {\n    let header = this.createTabHeader(\"MENU\");\n    header.setAttribute('id', 'menu-header'); \n    header.onclick = () => this.setCurrentTab(this.menuTab);\n    let content = (0,_menu__WEBPACK_IMPORTED_MODULE_3__.menuContent)();\n    return { header, content };\n  }\n\n  /**\n   * @returns {Tab}\n   */\n  createHomeTab() {\n    let header = this.createTabHeader(\"HOME\");\n    header.setAttribute('id', 'home-header'); \n    header.onclick = () => this.setCurrentTab(this.homeTab);\n    let content = (0,_home__WEBPACK_IMPORTED_MODULE_4__.homepageContent)();\n    return { header, content };\n  }\n\n/**\n * @returns {HTMLElement}\n *  */\n  createNavBar() {\n    let tabContainer = document.createElement('div');\n    tabContainer.classList.add('tab-list');\n\n    this.homeTab = this.createHomeTab();\n    this.menuTab = this.createMenuTab();\n    this.contactTab = this.createContactTab();\n    \n    tabContainer.appendChild(this.homeTab.header); \n    tabContainer.appendChild(this.menuTab.header);\n    tabContainer.appendChild(this.contactTab.header);\n    return tabContainer; \n  }\n}\n\nlet newPage = new Page(); \nfunction initial_load() {\n  newPage\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newPage); \n\n\n\n\n\n\n\n//# sourceURL=webpack://restaurant/./src/initial_load.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuContent\": () => (/* binding */ menuContent)\n/* harmony export */ });\nfunction menuContent(){\n  let content = document.createElement('div');\n  content.setAttribute('id', 'menu-content')\n\n  let menu = document.createElement('div'); \n  menu.setAttribute('id', 'inner-menu'); \n  // let p = document.createElement('p');\n  // p.textContent = \"Paragraph -- for menu content\"; \n\n  let chickenInfo = ['Lorem Ipsum', 'dolor sit amet, consectetur adipiscing elit. Ut ullamcorper ultricies lectus et ornare. Quisque consectetur neque diam, a lacinia dolor commodo sed. Donec sodales sodales tellus quis sodales. Etiam.', '$2.50']\n\n  function createItemPic(){\n    let div = document.createElement('div');\n    let pic = document.createElement('img'); \n    pic.src = '/dist/images/pizza-gfd7a56836_640.jpg'; \n    div.appendChild(pic); \n    return div; \n  }\n\n  function createItem(n, desc, p){\n    let container = document.createElement('div');\n    container.setAttribute('id', `item-${n.replaceAll(' ','')}`); \n\n    let itemInfo = document.createElement('div'); \n    itemInfo.setAttribute('id', 'item-div');\n\n    let image = createItemPic();\n    image.setAttribute('id', 'item-image-div');\n    \n    let name = document.createElement('div');\n    name.textContent = n; \n  \n    let description = document.createElement('div'); \n    description.textContent = desc; \n    \n    let price = document.createElement('div');\n    price.textContent = p; \n  \n    let order = document.createElement('div');\n    order.setAttribute('id', \n    'menu-order-div');\n    let orderBtn = document.createElement('button');\n    orderBtn.setAttribute('id','menu-order-btn');  \n    orderBtn.textContent = 'order'; \n  \n    order.appendChild(price);\n    order.appendChild(orderBtn); \n \n    itemInfo.appendChild(name);\n    itemInfo.appendChild(description);\n    itemInfo.appendChild(order);\n\n    container.appendChild(image); \n    container.appendChild(itemInfo); \n    return container; \n  }\n  \n  function makeItems(numOfItems){\n    let itemArray = []; \n    for(let i=0; i < numOfItems; i++){\n       itemArray.push(createItem(chickenInfo[0],chickenInfo[1], chickenInfo[2]));\n       menu.appendChild(itemArray[i]); \n    };\n    return itemArray; \n  }\n  makeItems(7);\n  \n  // menu.appendChild(chickenItem); \n  // content.appendChild(p); \n  content.appendChild(menu); \n  return content; \n}   \n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

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