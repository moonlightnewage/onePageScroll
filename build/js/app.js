/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction sayHello() {\n    if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {\n        var args = ['\\n %c Made with ❤️ by Rivercode %c http://www.riverco.de/ %c %c 🐳 \\n\\n', 'border: 1px solid #000;color: #000; background: #fff001; padding:5px 0;', 'color: #fff; background: #1c1c1c; padding:5px 0;border: 1px solid #000;', 'background: #fff; padding:5px 0;', 'color: #b0976d; background: #fff; padding:5px 0;'];\n        window.console.log.apply(console, args);\n    } else if (window.console) {\n        window.console.log('Made with love ❤️ Riverco.de - http://www.riverco.de/  ❤️');\n    }\n}\nmodule.exports = sayHello;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvbGliL3NheUhlbGxvLmpzP2E2MmQiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gc2F5SGVsbG8oKSB7XG4gICAgaWYgKG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdjaHJvbWUnKSA+IC0xKSB7XG4gICAgICAgIHZhciBhcmdzID0gWydcXG4gJWMgTWFkZSB3aXRoIOKdpO+4jyBieSBSaXZlcmNvZGUgJWMgaHR0cDovL3d3dy5yaXZlcmNvLmRlLyAlYyAlYyDwn5CzIFxcblxcbicsICdib3JkZXI6IDFweCBzb2xpZCAjMDAwO2NvbG9yOiAjMDAwOyBiYWNrZ3JvdW5kOiAjZmZmMDAxOyBwYWRkaW5nOjVweCAwOycsICdjb2xvcjogI2ZmZjsgYmFja2dyb3VuZDogIzFjMWMxYzsgcGFkZGluZzo1cHggMDtib3JkZXI6IDFweCBzb2xpZCAjMDAwOycsICdiYWNrZ3JvdW5kOiAjZmZmOyBwYWRkaW5nOjVweCAwOycsICdjb2xvcjogI2IwOTc2ZDsgYmFja2dyb3VuZDogI2ZmZjsgcGFkZGluZzo1cHggMDsnXTtcbiAgICAgICAgd2luZG93LmNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIGFyZ3MpO1xuICAgIH0gZWxzZSBpZiAod2luZG93LmNvbnNvbGUpIHtcbiAgICAgICAgd2luZG93LmNvbnNvbGUubG9nKCdNYWRlIHdpdGggbG92ZSDinaTvuI8gUml2ZXJjby5kZSAtIGh0dHA6Ly93d3cucml2ZXJjby5kZS8gIOKdpO+4jycpO1xuICAgIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2F5SGVsbG87XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9saWIvc2F5SGVsbG8uanMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _sayHello = __webpack_require__(0);\n\nvar _sayHello2 = _interopRequireDefault(_sayHello);\n\nvar _FullPageScroll = __webpack_require__(3);\n\nvar _FullPageScroll2 = _interopRequireDefault(_FullPageScroll);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(0, _sayHello2.default)();\n\nvar MyFullPage = new _FullPageScroll2.default({\n    section: '.js-fullpage-section',\n    nav: true,\n    navPosition: 'left',\n    navBox: '.js-fullpage-navigation',\n    activePage: 1,\n    controlPrev: '.js-prev',\n    controlNext: '.js-next',\n    scrollingSpeed: 500\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvYXBwLmpzPzcxNmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNheUhlbGxvIGZyb20gJy4vbGliL3NheUhlbGxvLmpzJztcblxuc2F5SGVsbG8oKTtcblxuaW1wb3J0IEZ1bGxQYWdlU2Nyb2xsIGZyb20gJy4vRnVsbFBhZ2VTY3JvbGwnO1xuXG5jb25zdCBNeUZ1bGxQYWdlID0gbmV3IEZ1bGxQYWdlU2Nyb2xsKHtcbiAgICBzZWN0aW9uOiAnLmpzLWZ1bGxwYWdlLXNlY3Rpb24nLFxuICAgIG5hdjogdHJ1ZSxcbiAgICBuYXZQb3NpdGlvbjogJ2xlZnQnLFxuICAgIG5hdkJveDogJy5qcy1mdWxscGFnZS1uYXZpZ2F0aW9uJyxcbiAgICBhY3RpdmVQYWdlOiAxLFxuICAgIGNvbnRyb2xQcmV2OiAnLmpzLXByZXYnLFxuICAgIGNvbnRyb2xOZXh0OiAnLmpzLW5leHQnLFxuICAgIHNjcm9sbGluZ1NwZWVkOiA1MDAsXG59KTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9hcHAuanMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7QUFIQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar FullPageScroll = function () {\n    function FullPageScroll(options) {\n        _classCallCheck(this, FullPageScroll);\n\n        this.section = document.querySelectorAll(options.section);\n\n        // navigation\n        this.nav = options.nav;\n        this.navPosition = options.navPosition;\n        this.navBox = options.navBox;\n        this.activePageNumber = options.activePage;\n\n        // controls\n        this.controlPrev = options.controlPrev;\n        this.controlNext = options.controlNext;\n\n        // scroll\n        this.scrollingSpeed = options.scrollingSpeed;\n        this.beforeScroll = options.beforeScroll;\n        this.afterScroll = options.afterScroll;\n\n        // helpers\n\n        // functions\n        //this._goTo(index);\n        this._init();\n    }\n\n    _createClass(FullPageScroll, [{\n        key: '_init',\n        value: function _init() {\n            this._makeActive(this.activePageNumber);\n            document.addEventListener('wheel', this._scrollActions.bind(this));\n        }\n    }, {\n        key: '_makeActive',\n        value: function _makeActive(index) {\n            for (var i = 0; i < this.section.length; i++) {\n                this.section[i].children[index - 1].classList.add('is-active');\n            }\n        }\n    }, {\n        key: '_scrollActions',\n        value: function _scrollActions() {\n            this.activePage;\n            this._findActive();\n            this._moveUp();\n        }\n    }, {\n        key: '_findActive',\n        value: function _findActive() {\n            for (var i = 0; i < this.section.length; i++) {\n                for (var j = 0; j < this.section[i].children.length; j++) {\n                    var isActive = this.section[i].children[j].classList.contains('is-active');\n\n                    if (isActive) {\n                        this.activePage = this.section[i].children[j];\n                    }\n                }\n            }\n        }\n    }, {\n        key: '_moveUp',\n        value: function _moveUp() {\n            this.activePage.style.top = '-100%';\n        }\n    }]);\n\n    return FullPageScroll;\n}();\n\nexports.default = FullPageScroll;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvRnVsbFBhZ2VTY3JvbGwuanM/MzIwNCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBGdWxsUGFnZVNjcm9sbCB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChvcHRpb25zLnNlY3Rpb24pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIG5hdmlnYXRpb25cclxuICAgICAgICB0aGlzLm5hdiA9IG9wdGlvbnMubmF2O1xyXG4gICAgICAgIHRoaXMubmF2UG9zaXRpb24gPSBvcHRpb25zLm5hdlBvc2l0aW9uO1xyXG4gICAgICAgIHRoaXMubmF2Qm94ID0gb3B0aW9ucy5uYXZCb3g7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVQYWdlTnVtYmVyID0gb3B0aW9ucy5hY3RpdmVQYWdlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGNvbnRyb2xzXHJcbiAgICAgICAgdGhpcy5jb250cm9sUHJldiA9IG9wdGlvbnMuY29udHJvbFByZXY7XHJcbiAgICAgICAgdGhpcy5jb250cm9sTmV4dCA9IG9wdGlvbnMuY29udHJvbE5leHQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gc2Nyb2xsXHJcbiAgICAgICAgdGhpcy5zY3JvbGxpbmdTcGVlZCA9IG9wdGlvbnMuc2Nyb2xsaW5nU3BlZWQ7XHJcbiAgICAgICAgdGhpcy5iZWZvcmVTY3JvbGwgPSBvcHRpb25zLmJlZm9yZVNjcm9sbDtcclxuICAgICAgICB0aGlzLmFmdGVyU2Nyb2xsID0gb3B0aW9ucy5hZnRlclNjcm9sbDtcclxuICAgICAgICBcclxuICAgICAgICAvLyBoZWxwZXJzXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gZnVuY3Rpb25zXHJcbiAgICAgICAgLy90aGlzLl9nb1RvKGluZGV4KTtcclxuICAgICAgICB0aGlzLl9pbml0KCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIF9pbml0KCkge1xyXG4gICAgICAgIHRoaXMuX21ha2VBY3RpdmUodGhpcy5hY3RpdmVQYWdlTnVtYmVyKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIHRoaXMuX3Njcm9sbEFjdGlvbnMuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIF9tYWtlQWN0aXZlKGluZGV4KSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNlY3Rpb24ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5zZWN0aW9uW2ldLmNoaWxkcmVuW2luZGV4IC0gMV0uY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBfc2Nyb2xsQWN0aW9ucygpIHtcclxuICAgICAgICB0aGlzLmFjdGl2ZVBhZ2U7XHJcbiAgICAgICAgdGhpcy5fZmluZEFjdGl2ZSgpO1xyXG4gICAgICAgIHRoaXMuX21vdmVVcCgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBfZmluZEFjdGl2ZSgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2VjdGlvbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuc2VjdGlvbltpXS5jaGlsZHJlbi5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGlzQWN0aXZlID0gdGhpcy5zZWN0aW9uW2ldLmNoaWxkcmVuW2pdLmNsYXNzTGlzdC5jb250YWlucygnaXMtYWN0aXZlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGlzQWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVQYWdlID0gdGhpcy5zZWN0aW9uW2ldLmNoaWxkcmVuW2pdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBfbW92ZVVwKCkge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlUGFnZS5zdHlsZS50b3AgPSAnLTEwMCUnO1xyXG4gICAgfVxyXG4gICAgXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL0Z1bGxQYWdlU2Nyb2xsLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7Ozs7OztBQTNEQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })
/******/ ]);