/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/body-overlay.js":
/*!****************************************!*\
  !*** ./src/js/modules/body-overlay.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bodyOverlayMakeHidden": () => (/* binding */ bodyOverlayMakeHidden),
/* harmony export */   "bodyOverlayMakeVisibal": () => (/* binding */ bodyOverlayMakeVisibal),
/* harmony export */   "default": () => (/* binding */ bodyOverlay)
/* harmony export */ });
/* harmony import */ var _side_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./side-bar */ "./src/js/modules/side-bar.js");


function bodyOverlayMakeVisibal() {
    document.body.classList.add('body-fixed');
    document.querySelector('.body-overlay').classList.add('body-overlay_visible');
}

function bodyOverlayMakeHidden() {
    document.body.classList.remove('body-fixed');
    document.querySelector('.body-overlay').classList.remove('body-overlay_visible');
}

function bodyOverlay() {
    document.querySelector('.body-overlay').addEventListener('click', ()=> {
        if(document.querySelector('.side-bar').classList.contains('side-bar_active')) {
            (0,_side_bar__WEBPACK_IMPORTED_MODULE_0__.closeSideBar)();
            bodyOverlayMakeHidden();
        }
    })
}

/***/ }),

/***/ "./src/js/modules/hamburger.js":
/*!*************************************!*\
  !*** ./src/js/modules/hamburger.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ hamburger)
/* harmony export */ });
/* harmony import */ var _side_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./side-bar */ "./src/js/modules/side-bar.js");
/* harmony import */ var _body_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./body-overlay */ "./src/js/modules/body-overlay.js");



function hamburger() {
    document.querySelector('.hamburger').addEventListener('click', () => {
        (0,_side_bar__WEBPACK_IMPORTED_MODULE_0__.openSideBar)();
        (0,_body_overlay__WEBPACK_IMPORTED_MODULE_1__.bodyOverlayMakeVisibal)();
    })
}

/***/ }),

/***/ "./src/js/modules/promo-slider.js":
/*!****************************************!*\
  !*** ./src/js/modules/promo-slider.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ promoSlider)
/* harmony export */ });
function promoSlider() {
    const slideList = document.querySelectorAll('.promo__slider__slide');
    const prev = document.querySelector('#promo__slider__prev');
    const next = document.querySelector('#promo__slider__next');
    const numOfSlide = slideList.length;
    const counterTotal = document.querySelector(".promo__slider__counter__total");
    const counterCurrentSlide = document.querySelector(".promo__slider__counter__current");
    
    let autoPlayIntervalID;
    let currentSlide = 1;
    counterTotal.textContent = numOfSlide;
    showSlide();
    autoPlay();

    prev.addEventListener('click', () => {
        showPrevSlide();
        stopAutoPlay();
    });
        
    next.addEventListener('click', () => { 
        showNextSlide();
        stopAutoPlay();
    });

    function showSlide () {
        slideList[currentSlide - 1].classList.add('promo__slider__slide_current');
        counterCurrentSlide.textContent = currentSlide;
    }

    function hiddenSlide () {
        slideList[currentSlide - 1].classList.remove('promo__slider__slide_current');
    }

    function showPrevSlide(){
        hiddenSlide();
        if(--currentSlide < 1){
            currentSlide = numOfSlide;
        }
        showSlide();
    }

    function showNextSlide(){
        hiddenSlide();
        if(++currentSlide > numOfSlide){
            currentSlide = 1;
        }
        showSlide();
    }

    function autoPlay() {
        autoPlayIntervalID = setInterval(showNextSlide, 3000);
    }

    function stopAutoPlay() {
        clearInterval(autoPlayIntervalID);
    }
}     
    



/***/ }),

/***/ "./src/js/modules/side-bar.js":
/*!************************************!*\
  !*** ./src/js/modules/side-bar.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeSideBar": () => (/* binding */ closeSideBar),
/* harmony export */   "default": () => (/* binding */ sideBar),
/* harmony export */   "openSideBar": () => (/* binding */ openSideBar)
/* harmony export */ });
/* harmony import */ var _body_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./body-overlay */ "./src/js/modules/body-overlay.js");


function openSideBar() {
    document.querySelector('.side-bar').classList.add("side-bar_active");
}

function closeSideBar() {
    document.querySelector('.side-bar').classList.remove("side-bar_active");
}

function sideBar() {
    const bar = document.querySelector('.side-bar');
    bar.querySelector('.side-bar__close').addEventListener('click', () => {
        closeSideBar();
        (0,_body_overlay__WEBPACK_IMPORTED_MODULE_0__.bodyOverlayMakeHidden)();
    });
}

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_hamburger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/hamburger */ "./src/js/modules/hamburger.js");
/* harmony import */ var _modules_side_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/side-bar */ "./src/js/modules/side-bar.js");
/* harmony import */ var _modules_body_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/body-overlay */ "./src/js/modules/body-overlay.js");
/* harmony import */ var _modules_promo_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/promo-slider */ "./src/js/modules/promo-slider.js");





window.addEventListener('DOMContentLoaded', ()=>{

    (0,_modules_hamburger__WEBPACK_IMPORTED_MODULE_0__["default"])();
    (0,_modules_side_bar__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_modules_body_overlay__WEBPACK_IMPORTED_MODULE_2__["default"])();
    (0,_modules_promo_slider__WEBPACK_IMPORTED_MODULE_3__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map