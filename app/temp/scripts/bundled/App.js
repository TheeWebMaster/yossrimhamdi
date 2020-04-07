/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/assets/scripts/App.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/assets/scripts/App.js":
/*!***********************************!*\
  !*** ./app/assets/scripts/App.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_ScrollerBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/ScrollerBar */ \"./app/assets/scripts/modules/ScrollerBar.js\");\n/* harmony import */ var _modules_Scroller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Scroller */ \"./app/assets/scripts/modules/Scroller.js\");\n/* harmony import */ var _modules_TranslateXFrontalHeadlinesOnScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/TranslateXFrontalHeadlinesOnScroll */ \"./app/assets/scripts/modules/TranslateXFrontalHeadlinesOnScroll.js\");\n/* harmony import */ var _modules_AnimateMileStonesOnScroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/AnimateMileStonesOnScroll */ \"./app/assets/scripts/modules/AnimateMileStonesOnScroll.js\");\n/* harmony import */ var _modules_TranslateXHeadlinesOnScroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/TranslateXHeadlinesOnScroll */ \"./app/assets/scripts/modules/TranslateXHeadlinesOnScroll.js\");\n/* harmony import */ var _modules_TransformWorkHeadlineOnScroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/TransformWorkHeadlineOnScroll */ \"./app/assets/scripts/modules/TransformWorkHeadlineOnScroll.js\");\n/* harmony import */ var _modules_TranslateXStrokeHeadlinesOnScroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/TranslateXStrokeHeadlinesOnScroll */ \"./app/assets/scripts/modules/TranslateXStrokeHeadlinesOnScroll.js\");\n/* harmony import */ var _modules_FixedHeaderPosition__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/FixedHeaderPosition */ \"./app/assets/scripts/modules/FixedHeaderPosition.js\");\n/* harmony import */ var _modules_AnimateAvailabilityMessageOnScroll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/AnimateAvailabilityMessageOnScroll */ \"./app/assets/scripts/modules/AnimateAvailabilityMessageOnScroll.js\");\n/* harmony import */ var _modules_ScrollToOnNavigationLinkClick__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/ScrollToOnNavigationLinkClick */ \"./app/assets/scripts/modules/ScrollToOnNavigationLinkClick.js\");\n/* harmony import */ var _modules_TranslateNavLinksOnWaypoints__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/TranslateNavLinksOnWaypoints */ \"./app/assets/scripts/modules/TranslateNavLinksOnWaypoints.js\");\n/* harmony import */ var _modules_AnimateParagraphOnScroll__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/AnimateParagraphOnScroll */ \"./app/assets/scripts/modules/AnimateParagraphOnScroll.js\");\n/* harmony import */ var _modules_ChangeAdOnTiming__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/ChangeAdOnTiming */ \"./app/assets/scripts/modules/ChangeAdOnTiming.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nnew _modules_ChangeAdOnTiming__WEBPACK_IMPORTED_MODULE_12__[\"default\"](_modules_Scroller__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nnew _modules_AnimateParagraphOnScroll__WEBPACK_IMPORTED_MODULE_11__[\"default\"](_modules_Scroller__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nnew _modules_TranslateNavLinksOnWaypoints__WEBPACK_IMPORTED_MODULE_10__[\"default\"](_modules_Scroller__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nnew _modules_ScrollToOnNavigationLinkClick__WEBPACK_IMPORTED_MODULE_9__[\"default\"](_modules_Scroller__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nnew _modules_AnimateAvailabilityMessageOnScroll__WEBPACK_IMPORTED_MODULE_8__[\"default\"](_modules_Scroller__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nnew _modules_FixedHeaderPosition__WEBPACK_IMPORTED_MODULE_7__[\"default\"](_modules_Scroller__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nnew _modules_TranslateXStrokeHeadlinesOnScroll__WEBPACK_IMPORTED_MODULE_6__[\"default\"](_modules_Scroller__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nnew _modules_TransformWorkHeadlineOnScroll__WEBPACK_IMPORTED_MODULE_5__[\"default\"](_modules_Scroller__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nnew _modules_TranslateXHeadlinesOnScroll__WEBPACK_IMPORTED_MODULE_4__[\"default\"](_modules_Scroller__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nnew _modules_AnimateMileStonesOnScroll__WEBPACK_IMPORTED_MODULE_3__[\"default\"](_modules_Scroller__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nnew _modules_TranslateXFrontalHeadlinesOnScroll__WEBPACK_IMPORTED_MODULE_2__[\"default\"](_modules_Scroller__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nnew _modules_ScrollerBar__WEBPACK_IMPORTED_MODULE_0__[\"default\"](_modules_Scroller__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n\n//# sourceURL=webpack:///./app/assets/scripts/App.js?");

/***/ }),

/***/ "./app/assets/scripts/modules/AnimateAvailabilityMessageOnScroll.js":
/*!**************************************************************************!*\
  !*** ./app/assets/scripts/modules/AnimateAvailabilityMessageOnScroll.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass AnimateAvailabilityMessageOnScroll {\n  constructor(scroller) {\n    this.scroller = scroller;\n    this.message = {\n      container: document.querySelector('.header__availability-message ul'),\n      items: document.querySelectorAll('.header__availability-message li'),\n    };\n    this.range = [0.4, 0.3, 0.2, 0.1];\n    scroller.onScroll(this.animateMessage.bind(this));\n  }\n  animateMessage({ y: yPosition }) {\n    this.moveMessageListUp(yPosition);\n    this.addSpaceBetweenMessageLIs(yPosition);\n  }\n  moveMessageListUp(yPosition) {\n    this.message.container.style.transform = `translateY(-${yPosition * 1.5}px)`;\n  }\n  addSpaceBetweenMessageLIs(yPosition) {\n    this.message.items.forEach((item, i) => {\n      item.style.transform = `translateY(-${yPosition * this.range[i]}px)`;\n    });\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AnimateAvailabilityMessageOnScroll);\n\n\n//# sourceURL=webpack:///./app/assets/scripts/modules/AnimateAvailabilityMessageOnScroll.js?");

/***/ }),

/***/ "./app/assets/scripts/modules/AnimateMileStonesOnScroll.js":
/*!*****************************************************************!*\
  !*** ./app/assets/scripts/modules/AnimateMileStonesOnScroll.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Transform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Transform */ \"./app/assets/scripts/modules/Transform.js\");\n/* harmony import */ var _SetupParallaxEnviroment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SetupParallaxEnviroment */ \"./app/assets/scripts/modules/SetupParallaxEnviroment.js\");\n\n\n\nclass AnimateMileStonesOnScroll extends _SetupParallaxEnviroment__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  constructor(scroller) {\n    function displayMileStoneDiscription(element) {\n      element.querySelector('.milestone__description').classList.add('milestone__description--is-visible');\n    }\n    super(scroller, '.milestone', 200 - window.innerHeight, displayMileStoneDiscription);\n    this.scroller = scroller;\n    this.xLimits = { start: -50, end: 0 };\n    this.setTransformObjects();\n  }\n  setTransformObjects() {\n    this.elements.forEach((element, i) => {\n      const topBorderElement = element.querySelector('.milestone__top-border');\n      new _Transform__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.scroller, this.relativeScrollInputs[i], topBorderElement, this.xLimits, '%');\n    });\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AnimateMileStonesOnScroll);\n\n\n//# sourceURL=webpack:///./app/assets/scripts/modules/AnimateMileStonesOnScroll.js?");

/***/ }),

/***/ "./app/assets/scripts/modules/AnimateParagraphOnScroll.js":
/*!****************************************************************!*\
  !*** ./app/assets/scripts/modules/AnimateParagraphOnScroll.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass AnimateParagraphOnScroll {\n  constructor(scroller) {\n    this.paragraphs = {\n      DOM: document.querySelectorAll('.paragraph--to-animate-js'),\n      innerSpans: [],\n    };\n    this.topBoundings = this.getTopBoundings();\n    this.divideParagraphsTextIntoSpans();\n    this.selectInnerParagraphDOMspans();\n    scroller.onScroll(this.animateParagraphs.bind(this));\n  }\n  divideParagraphsTextIntoSpans() {\n    this.paragraphs.DOM.forEach((paragraph) => {\n      paragraph.innerHTML = paragraph.innerText\n        .split(' ')\n        .map((word) => `<span><span>${word}</span></span>`)\n        .join(' ');\n    });\n  }\n  selectInnerParagraphDOMspans() {\n    this.paragraphs.DOM.forEach((paragraph) => {\n      this.paragraphs.innerSpans.push(paragraph.querySelectorAll('span > span'));\n    });\n  }\n  animateParagraphs({ y }) {\n    this.paragraphs.innerSpans.forEach((spans, i) => {\n      const newTranslateYFunction = this.getNewTranslateYFunction(y, i);\n\n      if (newTranslateYFunction !== spans[0].style.transform) {\n        spans.forEach((span, j) => {\n          setTimeout(() => {\n            span.style.transform = newTranslateYFunction;\n          }, 30 * j);\n        });\n      }\n    });\n  }\n  getNewTranslateYFunction(y, i) {\n    if (y > this.topBoundings[i]) {\n      return 'translateY(0px)';\n    } else {\n      return 'translateY(100%)';\n    }\n  }\n  getTopBoundings() {\n    const topBoundings = [];\n\n    this.paragraphs.DOM.forEach((paragraph) => {\n      topBoundings.push(\n        paragraph.getBoundingClientRect().top - window.innerHeight + paragraph.clientHeight * (1 - 1 / 5)\n      );\n    });\n\n    return topBoundings;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AnimateParagraphOnScroll);\n\n\n//# sourceURL=webpack:///./app/assets/scripts/modules/AnimateParagraphOnScroll.js?");

/***/ }),

/***/ "./app/assets/scripts/modules/ChangeAdOnTiming.js":
/*!********************************************************!*\
  !*** ./app/assets/scripts/modules/ChangeAdOnTiming.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass ChangeAdOnTiming {\n  constructor(scroller) {\n    this.adList = document.querySelector('.header__ad-list');\n    this.offsets = this.getOffsets();\n    this.interval = null;\n    scroller.onScroll(this.changeAd.bind(this));\n  }\n  getOffsets() {\n    const offsets = [];\n\n    for (let i = 0; i < this.adList.childElementCount; i++) {\n      offsets.push(29 * i);\n    }\n\n    return offsets;\n  }\n  getRandomInt(max) {\n    return Math.floor(Math.random() * Math.floor(max));\n  }\n\n  createInterval() {\n    return setInterval(() => {\n      const randOffset = this.offsets[this.getRandomInt(this.adList.childElementCount)];\n      this.adList.style.transform = `translateY(-${randOffset}px)`;\n    }, 3500);\n  }\n  changeAd({ y }) {\n    if (y < window.innerHeight - window.innerHeight / 2.5 && this.interval !== null) {\n      this.adList.style.transform = 'translateY(0)';\n      clearInterval(this.interval);\n      this.interval = null;\n    } else if (y > window.innerHeight - window.innerHeight / 2.5 && this.interval === null) {\n      this.interval = this.createInterval();\n    }\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChangeAdOnTiming);\n\n\n//# sourceURL=webpack:///./app/assets/scripts/modules/ChangeAdOnTiming.js?");

/***/ }),

/***/ "./app/assets/scripts/modules/FixedHeaderPosition.js":
/*!***********************************************************!*\
  !*** ./app/assets/scripts/modules/FixedHeaderPosition.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass FixedHeaderPosition {\n  constructor(scroller) {\n    this.header = document.querySelector('.header');\n    scroller.onScroll(this.modifyHeaderPosition.bind(this));\n  }\n  modifyHeaderPosition({ y: currentYposition }) {\n    this.header.style.transform = `translateY(${currentYposition}px)`;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FixedHeaderPosition);\n\n\n//# sourceURL=webpack:///./app/assets/scripts/modules/FixedHeaderPosition.js?");

/***/ }),

/***/ "./app/assets/scripts/modules/ScrollInput.js":
/*!***************************************************!*\
  !*** ./app/assets/scripts/modules/ScrollInput.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass ScrollInput {\n  constructor(scroller, topBounding, callback) {\n    this.callback = callback;\n    this.scrollY = {\n      start: topBounding.start,\n      end: topBounding.end,\n      get range() {\n        return this.end - this.start;\n      },\n      fraction: 0\n    };\n    scroller.onScroll(this.calcFraction.bind(this));\n  }\n  calcFraction({ y: yPosition }) {\n    this.scrollY.fraction = (yPosition - this.scrollY.start) / this.scrollY.range;\n    this.adjustFraction(this.scrollY.fraction);\n  }\n  adjustFraction(fraction) {\n    if (fraction < 0) {\n      this.scrollY.fraction = 0;\n    } else if (fraction > 1) {\n      this.scrollY.fraction = 1;\n      this.callback();\n    }\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScrollInput);\n\n\n//# sourceURL=webpack:///./app/assets/scripts/modules/ScrollInput.js?");

/***/ }),

/***/ "./app/assets/scripts/modules/ScrollToOnNavigationLinkClick.js":
/*!*********************************************************************!*\
  !*** ./app/assets/scripts/modules/ScrollToOnNavigationLinkClick.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass ScrollToOnNavigationLinkClick {\n  constructor(scroller) {\n    this.scroller = scroller;\n    this.milestones = document.querySelectorAll('.milestone--target');\n    this.nav = document.querySelector('.header__nav');\n    this.boundaries = this.getBoundaries();\n    this.setClickEvent();\n  }\n  getBoundaries() {\n    const boundaries = new Map();\n    this.milestones.forEach(milestone => {\n      boundaries.set(milestone.id, milestone.getBoundingClientRect().top);\n    });\n\n    return boundaries;\n  }\n  setClickEvent() {\n    this.nav.addEventListener('click', this.handleClickEvent.bind(this));\n  }\n  handleClickEvent(e) {\n    this.scroller.scrollTo({ y: this.boundaries.get(e.target.textContent) });\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScrollToOnNavigationLinkClick);\n\n\n//# sourceURL=webpack:///./app/assets/scripts/modules/ScrollToOnNavigationLinkClick.js?");

/***/ }),

/***/ "./app/assets/scripts/modules/Scroller.js":
/*!************************************************!*\
  !*** ./app/assets/scripts/modules/Scroller.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module '@smoovy/scroller'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\nconst scroller = !(function webpackMissingModule() { var e = new Error(\"Cannot find module '@smoovy/scroller'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(\n  {\n    element: document.querySelector('.container')\n  },\n  {\n    styles: {\n      height: '100vh'\n    },\n    lerp: {\n      damping: 0.06\n    }\n  }\n);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (scroller);\n\n\n//# sourceURL=webpack:///./app/assets/scripts/modules/Scroller.js?");

/***/ }),

/***/ "./app/assets/scripts/modules/ScrollerBar.js":
/*!***************************************************!*\
  !*** ./app/assets/scripts/modules/ScrollerBar.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass ScrollerBar {\n  constructor(scroller) {\n    this.scrollerDOM = document.querySelector('.scroller');\n    this.htmlContentVisibleHeight =\n      document.querySelector('.smoovy-wrapper').clientHeight - window.innerHeight;\n    scroller.onScroll(this.updateScrollBarHeight.bind(this));\n  }\n  updateScrollBarHeight({ y: yPosition }) {\n    this.scrollerDOM.style.height = `${(yPosition / this.htmlContentVisibleHeight) * 100}vh`;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScrollerBar);\n\n\n//# sourceURL=webpack:///./app/assets/scripts/modules/ScrollerBar.js?");

/***/ }),

/***/ "./app/assets/scripts/modules/SetupParallaxEnviroment.js":
/*!***************************************************************!*\
  !*** ./app/assets/scripts/modules/SetupParallaxEnviroment.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ScrollInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScrollInput */ \"./app/assets/scripts/modules/ScrollInput.js\");\n\n\nclass SetupParallaxEnviroment {\n  constructor(scroller, className, endBoundingOffset = 0, callback = function () {}) {\n    this.callback = callback;\n    this.scroller = scroller;\n    this.elements = document.querySelectorAll(className);\n    this.endBoundingOffset = endBoundingOffset;\n    this.topBoundings = this.getTopElementsBounding();\n    this.relativeScrollInputs = this.getRelativeScrollInputs();\n  }\n  getTopElementsBounding() {\n    const topBoundings = [];\n\n    this.elements.forEach((element) => {\n      const topBounding = element.getBoundingClientRect().top;\n\n      topBoundings.push({\n        start: topBounding - window.innerHeight,\n        end: topBounding + element.clientHeight + this.endBoundingOffset,\n      });\n    });\n\n    return topBoundings;\n  }\n  getRelativeScrollInputs() {\n    const relativeScrollInputs = [];\n\n    this.elements.forEach((element, i) => {\n      relativeScrollInputs.push(\n        new _ScrollInput__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.scroller, this.topBoundings[i], this.callback.bind(this, element))\n      );\n    });\n\n    return relativeScrollInputs;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SetupParallaxEnviroment);\n\n\n//# sourceURL=webpack:///./app/assets/scripts/modules/SetupParallaxEnviroment.js?");

/***/ }),

/***/ "./app/assets/scripts/modules/Transform.js":
/*!*************************************************!*\
  !*** ./app/assets/scripts/modules/Transform.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Transform {\n  constructor(scroller, scrollInput, element, xLimits, unit = 'px', costumTransformFunction) {\n    this.scrollInput = scrollInput;\n    this.xLimits = xLimits;\n    this.element = element;\n    this.unit = unit;\n    scroller.onScroll(\n      costumTransformFunction ? costumTransformFunction.bind(this) : this.translateX.bind(this)\n    );\n  }\n  translateX() {\n    this.element.style.transform = `translateX(${this.calcCurrentValue()}${this.unit})`;\n  }\n  calcCurrentValue() {\n    const { start, end } = this.xLimits;\n    const { fraction } = this.scrollInput.scrollY;\n    return start + fraction * (end - start);\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Transform);\n\n\n//# sourceURL=webpack:///./app/assets/scripts/modules/Transform.js?");

/***/ }),

/***/ "./app/assets/scripts/modules/TransformWorkHeadlineOnScroll.js":
/*!*********************************************************************!*\
  !*** ./app/assets/scripts/modules/TransformWorkHeadlineOnScroll.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Transform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Transform */ \"./app/assets/scripts/modules/Transform.js\");\n/* harmony import */ var _SetupParallaxEnviroment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SetupParallaxEnviroment */ \"./app/assets/scripts/modules/SetupParallaxEnviroment.js\");\n\n\n\nclass TranslateYWorkHeadlineOnScroll extends _SetupParallaxEnviroment__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  constructor(scroller) {\n    super(scroller, '.stroke-headline--work', document.querySelector('.stroke-headline--work').clientWidth);\n    this.scroller = scroller;\n    this.transYLimits = { start: 0, end: -200 };\n    this.setTransformObject();\n  }\n  setTransformObject() {\n    new _Transform__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\n      this.scroller,\n      this.relativeScrollInputs[0],\n      this.elements[0],\n      this.transYLimits,\n      'px',\n      this.TransformFunction\n    );\n  }\n  TransformFunction() {\n    this.element.style.transform = `translate(39%, ${this.calcCurrentValue()}px) rotate(-90deg)`;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TranslateYWorkHeadlineOnScroll);\n\n\n//# sourceURL=webpack:///./app/assets/scripts/modules/TransformWorkHeadlineOnScroll.js?");

/***/ }),

/***/ "./app/assets/scripts/modules/TranslateNavLinksOnWaypoints.js":
/*!********************************************************************!*\
  !*** ./app/assets/scripts/modules/TranslateNavLinksOnWaypoints.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass TranslateNavLinksOnWaypoints {\n  constructor(scroller) {\n    this.waypoints = document.querySelectorAll('.milestone--target');\n    this.navList = document.querySelector('.header__nav ul');\n    this.navListWrapper = document.querySelector('.header__nav-list-wrapper');\n    this.topBoundings = this.getTopBoundings();\n    scroller.onScroll(this.tranNavLinksWrapper.bind(this));\n  }\n  getTopBoundings() {\n    const topBoundings = new Map();\n    let offset = 0;\n\n    this.waypoints.forEach((element) => {\n      topBoundings.set(element.id, { top: element.getBoundingClientRect().top, transValue: offset });\n      offset += 28;\n    });\n    return topBoundings;\n  }\n  tranNavLinksWrapper({ y }) {\n    this.waypoints.forEach((waypoint) => {\n      const currentTopBounding = this.topBoundings.get(waypoint.id);\n\n      if (y > currentTopBounding.top - window.innerHeight + 200) {\n        this.navList.style.transform = `translateY(-${currentTopBounding.transValue}px)`;\n      }\n    });\n\n    if (y < window.innerHeight / 2) {\n      this.navListWrapper.classList.remove('header__nav-list-wrapper--is-hidden');\n    } else {\n      this.navListWrapper.classList.add('header__nav-list-wrapper--is-hidden');\n    }\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TranslateNavLinksOnWaypoints);\n\n\n//# sourceURL=webpack:///./app/assets/scripts/modules/TranslateNavLinksOnWaypoints.js?");

/***/ }),

/***/ "./app/assets/scripts/modules/TranslateXFrontalHeadlinesOnScroll.js":
/*!**************************************************************************!*\
  !*** ./app/assets/scripts/modules/TranslateXFrontalHeadlinesOnScroll.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Transform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Transform */ \"./app/assets/scripts/modules/Transform.js\");\n/* harmony import */ var _ScrollInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScrollInput */ \"./app/assets/scripts/modules/ScrollInput.js\");\n\n\n\nclass TranslateXFrontalHeadlinesOnScroll {\n  constructor(scroller) {\n    this.scroller = scroller;\n    this.headlines = document.querySelectorAll('.frontal-headline--to-translate');\n    this.scrollInput = this.getCostumScrollInput();\n    this.transitionXLimits = [\n      { start: 0, end: -200 },\n      { start: 0, end: 200 }\n    ];\n    this.setTransformObject();\n  }\n  getCostumScrollInput() {\n    return new _ScrollInput__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.scroller, { start: 0, end: window.innerHeight }, function() {});\n  }\n  setTransformObject() {\n    this.headlines.forEach((headline, i) => {\n      new _Transform__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.scroller, this.scrollInput, headline, this.transitionXLimits[i]);\n    });\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TranslateXFrontalHeadlinesOnScroll);\n\n\n//# sourceURL=webpack:///./app/assets/scripts/modules/TranslateXFrontalHeadlinesOnScroll.js?");

/***/ }),

/***/ "./app/assets/scripts/modules/TranslateXHeadlinesOnScroll.js":
/*!*******************************************************************!*\
  !*** ./app/assets/scripts/modules/TranslateXHeadlinesOnScroll.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Transform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Transform */ \"./app/assets/scripts/modules/Transform.js\");\n/* harmony import */ var _SetupParallaxEnviroment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SetupParallaxEnviroment */ \"./app/assets/scripts/modules/SetupParallaxEnviroment.js\");\n\n\n\nclass TranslateXHeadlinesOnScroll extends _SetupParallaxEnviroment__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  constructor(scroller) {\n    super(scroller, '.headline', window.innerHeight);\n    this.xLimits = [\n      { start: 100, end: 400 },\n      { start: 100, end: -400 }\n    ];\n    this.setTransformObject();\n  }\n  setTransformObject() {\n    this.elements.forEach((element, i) => {\n      const xLimits = i % 2 === 0 ? this.xLimits[0] : this.xLimits[1];\n      new _Transform__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.scroller, this.relativeScrollInputs[i], element, xLimits);\n    });\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TranslateXHeadlinesOnScroll);\n\n\n//# sourceURL=webpack:///./app/assets/scripts/modules/TranslateXHeadlinesOnScroll.js?");

/***/ }),

/***/ "./app/assets/scripts/modules/TranslateXStrokeHeadlinesOnScroll.js":
/*!*************************************************************************!*\
  !*** ./app/assets/scripts/modules/TranslateXStrokeHeadlinesOnScroll.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Transform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Transform */ \"./app/assets/scripts/modules/Transform.js\");\n/* harmony import */ var _SetupParallaxEnviroment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SetupParallaxEnviroment */ \"./app/assets/scripts/modules/SetupParallaxEnviroment.js\");\n\n\n\nclass TranslateXStrokeHeadlinesOnScroll extends _SetupParallaxEnviroment__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  constructor(scroller) {\n    super(scroller, '.stroke-headline--award, .stroke-headline--contact');\n    this.scroller = scroller;\n    this.xLimits = { start: -60, end: 10 };\n    this.setTranslateXObjects();\n  }\n  setTranslateXObjects() {\n    this.elements.forEach((element, i) => {\n      new _Transform__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.scroller, this.relativeScrollInputs[i], element, this.xLimits, 'px', this.transform);\n    });\n  }\n  transform() {\n    this.element.style.transform = `translate(${this.calcCurrentValue()}${this.unit}, -60%)`;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TranslateXStrokeHeadlinesOnScroll);\n\n\n//# sourceURL=webpack:///./app/assets/scripts/modules/TranslateXStrokeHeadlinesOnScroll.js?");

/***/ })

/******/ });