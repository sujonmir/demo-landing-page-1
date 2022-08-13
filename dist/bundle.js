/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ (() => {

eval("document.getElementById('year').innerText = new Date().getFullYear();\nvar mobileNav = document.getElementById('mobileNav');\nvar mobileNavButton = document.getElementById('mobileNavButton');\nvar mobileNavButtonClose = document.getElementById('mobileNavButtonClose');\nvar mobileMenuBody = document.getElementById('mobileMenuBody');\nmobileNavButton.addEventListener('click', function (e) {\n  mobileNavButton.style.display = 'none';\n  mobileNavButtonClose.style.display = 'block';\n  mobileMenuBody.style.display = 'block';\n  mobileMenuBody.style.top = '100%';\n});\nmobileNavButtonClose.addEventListener('click', function (e) {\n  mobileNavButtonClose.style.display = 'none';\n  mobileNavButton.style.display = 'block';\n  mobileMenuBody.style.display = 'none';\n  mobileMenuBody.style.top = '-100%';\n});\n\n//# sourceURL=webpack://es6-setup/./src/scripts/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/scripts/index.js"]();
/******/ 	
/******/ })()
;