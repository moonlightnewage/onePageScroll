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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar FullPageScroll = function () {\n    function FullPageScroll(options) {\n        _classCallCheck(this, FullPageScroll);\n\n        this.section = document.querySelector(options.section);\n\n        if (this.section) {\n            // navigation\n            this.nav = options.nav;\n            this.navPosition = options.navPosition;\n            this.navBox = options.navBox;\n            this.activePageNumber = options.activePage;\n            this.animationTime = options.animationTime;\n\n            // controls\n            this.controlPrev = options.controlPrev;\n            this.controlNext = options.controlNext;\n\n            // scroll\n            this.scrollingSpeed = options.scrollingSpeed;\n            this.beforeScroll = options.beforeScroll;\n            this.afterScroll = options.afterScroll;\n\n            // helpers\n            this.counter = 0;\n            this.step = 100;\n            this.lastAnimation = 0;\n\n            // functions\n            //this._goTo(index);\n            this._init();\n        }\n    }\n\n    _createClass(FullPageScroll, [{\n        key: '_init',\n        value: function _init() {\n            this._createDom();\n            this._makeActive(this.activePageNumber);\n            this._findActive();\n\n            document.addEventListener('wheel', this._scrollActions.bind(this));\n        }\n    }, {\n        key: '_createDom',\n        value: function _createDom() {\n            var wrapper = document.createElement('div');\n            wrapper.className = 'fullpage-wrapper js-fullpage-wrapper';\n            this.section.appendChild(wrapper);\n\n            for (var i = 0; i < this.section.childElementCount - 1; i + 1) {\n                wrapper.appendChild(this.section.children[i]);\n            }\n            this.parent = document.querySelector('.js-fullpage-wrapper');\n        }\n    }, {\n        key: '_makeActive',\n        value: function _makeActive(index) {\n            this.parent.children[index - 1].classList.add('is-active');\n        }\n    }, {\n        key: '_scrollActions',\n        value: function _scrollActions(e) {\n            var currentTime = +new Date();\n            var quietPeriod = 500;\n            console.log(currentTime);\n            if (currentTime - this.lastAnimation < quietPeriod + this.animationTime) {\n                if (e.deltaY > 0) {\n                    this._moveUp();\n                } else {\n                    this._moveDown();\n                }\n            }\n\n            this.lastAnimation = currentTime;\n        }\n    }, {\n        key: '_findActive',\n        value: function _findActive() {\n            for (var i = 0; i < this.parent.children.length; i++) {\n                var isActive = this.parent.children[i].classList.contains('is-active');\n\n                if (isActive) {\n                    this.activePage = this.parent.children[i];\n                }\n            }\n            this.activePageIndex = [].indexOf.call(this.parent.children, this.activePage);\n        }\n    }, {\n        key: '_moveUp',\n        value: function _moveUp() {\n            //console.log(this.activePageIndex);\n            //console.log(this.parent.childElementCount - 1);\n            if (this.activePageIndex < this.parent.childElementCount - 1) {\n                this.activePage.classList.remove('is-active');\n                this.activePage = this.activePage.nextElementSibling;\n                this.activePageIndex++;\n                this.activePage.classList.add('is-active');\n                this.counter++;\n                this.parent.style.top = -this.counter * this.step + '%';\n            }\n        }\n    }, {\n        key: '_moveDown',\n        value: function _moveDown() {\n            if (this.activePageIndex > 0) {\n                this.activePage.classList.remove('is-active');\n                this.activePage = this.activePage.previousElementSibling;\n                this.activePageIndex--;\n                this.activePage.classList.add('is-active');\n                this.counter--;\n                this.parent.style.top = -this.counter * this.step + '%';\n            }\n        }\n    }]);\n\n    return FullPageScroll;\n}();\n\nexports.default = FullPageScroll;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvRnVsbFBhZ2VTY3JvbGwuanM/MzIwNCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBGdWxsUGFnZVNjcm9sbCB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvcHRpb25zLnNlY3Rpb24pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLnNlY3Rpb24pIHtcclxuICAgICAgICAgICAgLy8gbmF2aWdhdGlvblxyXG4gICAgICAgICAgICB0aGlzLm5hdiA9IG9wdGlvbnMubmF2O1xyXG4gICAgICAgICAgICB0aGlzLm5hdlBvc2l0aW9uID0gb3B0aW9ucy5uYXZQb3NpdGlvbjtcclxuICAgICAgICAgICAgdGhpcy5uYXZCb3ggPSBvcHRpb25zLm5hdkJveDtcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVQYWdlTnVtYmVyID0gb3B0aW9ucy5hY3RpdmVQYWdlO1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvblRpbWUgPSBvcHRpb25zLmFuaW1hdGlvblRpbWU7XHJcblxyXG4gICAgICAgICAgICAvLyBjb250cm9sc1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xQcmV2ID0gb3B0aW9ucy5jb250cm9sUHJldjtcclxuICAgICAgICAgICAgdGhpcy5jb250cm9sTmV4dCA9IG9wdGlvbnMuY29udHJvbE5leHQ7XHJcblxyXG4gICAgICAgICAgICAvLyBzY3JvbGxcclxuICAgICAgICAgICAgdGhpcy5zY3JvbGxpbmdTcGVlZCA9IG9wdGlvbnMuc2Nyb2xsaW5nU3BlZWQ7XHJcbiAgICAgICAgICAgIHRoaXMuYmVmb3JlU2Nyb2xsID0gb3B0aW9ucy5iZWZvcmVTY3JvbGw7XHJcbiAgICAgICAgICAgIHRoaXMuYWZ0ZXJTY3JvbGwgPSBvcHRpb25zLmFmdGVyU2Nyb2xsO1xyXG5cclxuICAgICAgICAgICAgLy8gaGVscGVyc1xyXG4gICAgICAgICAgICB0aGlzLmNvdW50ZXIgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnN0ZXAgPSAxMDA7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdEFuaW1hdGlvbiA9IDA7XHJcblxyXG4gICAgICAgICAgICAvLyBmdW5jdGlvbnNcclxuICAgICAgICAgICAgLy90aGlzLl9nb1RvKGluZGV4KTtcclxuICAgICAgICAgICAgdGhpcy5faW5pdCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIF9pbml0KCkge1xyXG4gICAgICAgIHRoaXMuX2NyZWF0ZURvbSgpO1xyXG4gICAgICAgIHRoaXMuX21ha2VBY3RpdmUodGhpcy5hY3RpdmVQYWdlTnVtYmVyKTtcclxuICAgICAgICB0aGlzLl9maW5kQWN0aXZlKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCB0aGlzLl9zY3JvbGxBY3Rpb25zLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBfY3JlYXRlRG9tKCkge1xyXG4gICAgICAgIGxldCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgd3JhcHBlci5jbGFzc05hbWUgPSAnZnVsbHBhZ2Utd3JhcHBlciBqcy1mdWxscGFnZS13cmFwcGVyJztcclxuICAgICAgICB0aGlzLnNlY3Rpb24uYXBwZW5kQ2hpbGQod3JhcHBlcik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zZWN0aW9uLmNoaWxkRWxlbWVudENvdW50IC0gMTsgaSArIDEpIHtcclxuICAgICAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzLnNlY3Rpb24uY2hpbGRyZW5baV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1mdWxscGFnZS13cmFwcGVyJyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIF9tYWtlQWN0aXZlKGluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5wYXJlbnQuY2hpbGRyZW5baW5kZXggLSAxXS5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgX3Njcm9sbEFjdGlvbnMoZSkge1xyXG4gICAgICAgIGxldCBjdXJyZW50VGltZSA9ICtuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGxldCBxdWlldFBlcmlvZCA9IDUwMDtcclxuICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50VGltZSk7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRUaW1lIC0gdGhpcy5sYXN0QW5pbWF0aW9uIDwgcXVpZXRQZXJpb2QgKyB0aGlzLmFuaW1hdGlvblRpbWUpIHtcclxuICAgICAgICAgICAgaWYgKGUuZGVsdGFZID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbW92ZVVwKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tb3ZlRG93bigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubGFzdEFuaW1hdGlvbiA9IGN1cnJlbnRUaW1lOyAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIF9maW5kQWN0aXZlKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wYXJlbnQuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGlzQWN0aXZlID0gdGhpcy5wYXJlbnQuY2hpbGRyZW5baV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1hY3RpdmUnKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpc0FjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVQYWdlID0gdGhpcy5wYXJlbnQuY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hY3RpdmVQYWdlSW5kZXggPSBbXS5pbmRleE9mLmNhbGwodGhpcy5wYXJlbnQuY2hpbGRyZW4sIHRoaXMuYWN0aXZlUGFnZSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIF9tb3ZlVXAoKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmFjdGl2ZVBhZ2VJbmRleCk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnBhcmVudC5jaGlsZEVsZW1lbnRDb3VudCAtIDEpO1xyXG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZVBhZ2VJbmRleCA8IHRoaXMucGFyZW50LmNoaWxkRWxlbWVudENvdW50IC0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVBhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlUGFnZSA9IHRoaXMuYWN0aXZlUGFnZS5uZXh0RWxlbWVudFNpYmxpbmc7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlUGFnZUluZGV4Kys7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlUGFnZS5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKTtcclxuICAgICAgICAgICAgdGhpcy5jb3VudGVyKys7XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50LnN0eWxlLnRvcCA9IC0gdGhpcy5jb3VudGVyICogdGhpcy5zdGVwICsgJyUnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgX21vdmVEb3duKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZVBhZ2VJbmRleCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVQYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVBhZ2UgPSB0aGlzLmFjdGl2ZVBhZ2UucHJldmlvdXNFbGVtZW50U2libGluZztcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVQYWdlSW5kZXgtLTtcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVQYWdlLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICB0aGlzLmNvdW50ZXItLTtcclxuICAgICAgICAgICAgdGhpcy5wYXJlbnQuc3R5bGUudG9wID0gLXRoaXMuY291bnRlciAqIHRoaXMuc3RlcCArICclJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvRnVsbFBhZ2VTY3JvbGwuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUEzR0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction sayHello() {\n    if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {\n        var args = ['\\n %c Made with ❤️ by Rivercode %c http://www.riverco.de/ %c %c 🐳 \\n\\n', 'border: 1px solid #000;color: #000; background: #fff001; padding:5px 0;', 'color: #fff; background: #1c1c1c; padding:5px 0;border: 1px solid #000;', 'background: #fff; padding:5px 0;', 'color: #b0976d; background: #fff; padding:5px 0;'];\n        window.console.log.apply(console, args);\n    } else if (window.console) {\n        window.console.log('Made with love ❤️ Riverco.de - http://www.riverco.de/  ❤️');\n    }\n}\nmodule.exports = sayHello;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvbGliL3NheUhlbGxvLmpzP2E2MmQiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gc2F5SGVsbG8oKSB7XG4gICAgaWYgKG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdjaHJvbWUnKSA+IC0xKSB7XG4gICAgICAgIHZhciBhcmdzID0gWydcXG4gJWMgTWFkZSB3aXRoIOKdpO+4jyBieSBSaXZlcmNvZGUgJWMgaHR0cDovL3d3dy5yaXZlcmNvLmRlLyAlYyAlYyDwn5CzIFxcblxcbicsICdib3JkZXI6IDFweCBzb2xpZCAjMDAwO2NvbG9yOiAjMDAwOyBiYWNrZ3JvdW5kOiAjZmZmMDAxOyBwYWRkaW5nOjVweCAwOycsICdjb2xvcjogI2ZmZjsgYmFja2dyb3VuZDogIzFjMWMxYzsgcGFkZGluZzo1cHggMDtib3JkZXI6IDFweCBzb2xpZCAjMDAwOycsICdiYWNrZ3JvdW5kOiAjZmZmOyBwYWRkaW5nOjVweCAwOycsICdjb2xvcjogI2IwOTc2ZDsgYmFja2dyb3VuZDogI2ZmZjsgcGFkZGluZzo1cHggMDsnXTtcbiAgICAgICAgd2luZG93LmNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIGFyZ3MpO1xuICAgIH0gZWxzZSBpZiAod2luZG93LmNvbnNvbGUpIHtcbiAgICAgICAgd2luZG93LmNvbnNvbGUubG9nKCdNYWRlIHdpdGggbG92ZSDinaTvuI8gUml2ZXJjby5kZSAtIGh0dHA6Ly93d3cucml2ZXJjby5kZS8gIOKdpO+4jycpO1xuICAgIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2F5SGVsbG87XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9saWIvc2F5SGVsbG8uanMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _sayHello = __webpack_require__(1);\n\nvar _sayHello2 = _interopRequireDefault(_sayHello);\n\nvar _FullPageScroll = __webpack_require__(0);\n\nvar _FullPageScroll2 = _interopRequireDefault(_FullPageScroll);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(0, _sayHello2.default)();\n\nvar MyFullPage = new _FullPageScroll2.default({\n    section: '.js-fullpage-section',\n    nav: true,\n    navPosition: 'left',\n    navBox: '.js-fullpage-navigation',\n    activePage: 1,\n    controlPrev: '.js-prev',\n    controlNext: '.js-next',\n    scrollingSpeed: 500,\n    animationTime: 1000\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvYXBwLmpzPzcxNmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNheUhlbGxvIGZyb20gJy4vbGliL3NheUhlbGxvLmpzJztcblxuc2F5SGVsbG8oKTtcblxuaW1wb3J0IEZ1bGxQYWdlU2Nyb2xsIGZyb20gJy4vRnVsbFBhZ2VTY3JvbGwnO1xuXG5jb25zdCBNeUZ1bGxQYWdlID0gbmV3IEZ1bGxQYWdlU2Nyb2xsKHtcbiAgICBzZWN0aW9uOiAnLmpzLWZ1bGxwYWdlLXNlY3Rpb24nLFxuICAgIG5hdjogdHJ1ZSxcbiAgICBuYXZQb3NpdGlvbjogJ2xlZnQnLFxuICAgIG5hdkJveDogJy5qcy1mdWxscGFnZS1uYXZpZ2F0aW9uJyxcbiAgICBhY3RpdmVQYWdlOiAxLFxuICAgIGNvbnRyb2xQcmV2OiAnLmpzLXByZXYnLFxuICAgIGNvbnRyb2xOZXh0OiAnLmpzLW5leHQnLFxuICAgIHNjcm9sbGluZ1NwZWVkOiA1MDAsXG4gICAgYW5pbWF0aW9uVGltZTogMTAwMFxufSk7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvYXBwLmpzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7O0FBSEE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })
/******/ ]);