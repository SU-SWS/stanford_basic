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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/behaviors.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/behaviors.js":
/*!*****************************!*\
  !*** ./src/js/behaviors.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _theme_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme/index.js */ "./src/js/theme/index.js");
/* harmony import */ var _stanford_basic_behavior_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stanford_basic.behavior.js */ "./src/js/stanford_basic.behavior.js");
/* harmony import */ var _stanford_basic_behavior_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_stanford_basic_behavior_js__WEBPACK_IMPORTED_MODULE_1__);
// Theme code.



/***/ }),

/***/ "./src/js/stanford_basic.behavior.js":
/*!*******************************************!*\
  !*** ./src/js/stanford_basic.behavior.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Behavior Example that works with Webpack.
 *
 * @see: https://www.npmjs.com/package/drupal-behaviors-loader
 *
 * Webpack wraps everything in enclosures and hides the global variables from
 * scripts so special handling is needed.
 */
window.Drupal.behaviors.stanford_basic = {
  // Attach Drupal Behavior.
  attach: function attach(context, settings) {
    (function ($) {
      // Validate there is a skip link anchor for the main content. If not,
      // default to #page-content.
      var $mc = $('#main-content', context).length;

      if (!$mc) {
        $('.su-skipnav--content', context).attr('href', '#page-content');
      } // Validate there is a skip link for the secondary navigation. If not,
      // remove the skip link.


      var $sn = $('#secondary-navigation', context).length;

      if (!$sn) {
        $('.su-skipnav--secondary', context).remove();
      } // Add an outline class to the page-content region if local tasks are
      // available.


      var localTab = $('#block-stanford-basic-local-tasks', context);

      if (localTab.length) {
        $('.page-content', context).addClass('stanford-basic--outline');
      }

      var userLogin = $('.page-user-login', context);

      if (userLogin) {
        $('.su-back-to-site', context).removeClass('hidden');
      }
    })(jQuery);
  },
  // Detach Example.
  detach: function detach() {// console.log("Detached.");
  }
};

/***/ }),

/***/ "./src/js/theme/index.js":
/*!*******************************!*\
  !*** ./src/js/theme/index.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menu_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu/index.js */ "./src/js/theme/menu/index.js");
/**
 * Primary roll up file
 */
// The Local Task Menu


/***/ }),

/***/ "./src/js/theme/menu/StickyHeaderOnScroll.js":
/*!***************************************************!*\
  !*** ./src/js/theme/menu/StickyHeaderOnScroll.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var header = document.getElementById('block-stanford-basic-local-tasks');
var sticky = 0;

if (header) {
  sticky = header.getBoundingClientRect().top;

  window.onscroll = function () {
    stickyHeaderOnScroll();
  };
}
/**
 * Stick the local block tasks to the top of the window.
 */


function stickyHeaderOnScroll() {
  var toolbarHeight = 0;
  var toolbarOpen = document.body.classList.contains('toolbar-tray-open');

  if (toolbarOpen === true) {
    toolbarHeight = 79;
  } else {
    toolbarHeight = 39;
  }

  if (window.pageYOffset >= sticky - toolbarHeight) {
    header.classList.add('sticky');
    header.style.marginTop = toolbarHeight + 'px';
  } else {
    header.classList.remove('sticky');
    header.style.marginTop = '0px';
  }
}

/***/ }),

/***/ "./src/js/theme/menu/index.js":
/*!************************************!*\
  !*** ./src/js/theme/menu/index.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StickyHeaderOnScroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StickyHeaderOnScroll.js */ "./src/js/theme/menu/StickyHeaderOnScroll.js");
/* harmony import */ var _StickyHeaderOnScroll_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_StickyHeaderOnScroll_js__WEBPACK_IMPORTED_MODULE_0__);


/***/ })

/******/ });
//# sourceMappingURL=behaviors.js.map