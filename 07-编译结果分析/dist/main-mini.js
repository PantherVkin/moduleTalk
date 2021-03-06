(function(modules) { // webpackBootstrap
	// The module cache
	var installedModules = {};
	// The require function
	function __webpack_require__(moduleId) {
		// Check if module is in cache
		if (installedModules[moduleId]) {
			return installedModules[moduleId].exports;
		}
		// Create a new module (and put it into the cache)
		var module = installedModules[moduleId] = {
			i: moduleId,
			l: false,
			exports: {}
		};
		// Execute the module function
		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
		// Flag the module as loaded
		module.l = true;
		// Return the exports of the module
		return module.exports;
	}
	// expose the modules object (__webpack_modules__)
	__webpack_require__.m = modules;
	// expose the module cache
	__webpack_require__.c = installedModules;
	// define getter function for harmony exports
	__webpack_require__.d = function(exports, name, getter) {
		if (!__webpack_require__.o(exports, name)) {
			Object.defineProperty(exports, name, {
				enumerable: true,
				get: getter
			});
		}
	};
	// Load entry module and return exports
	return __webpack_require__(__webpack_require__.s = "./src/index.js");
})({
	"./src/a.js": (function(module, exports) {
		eval("console.log(\"this is module a\")\nmodule.exports = \"a\";\n\n\n//# sourceURL=webpack:///./src/a.js?");
	}),
	"./src/index.js": (function(module, exports, __webpack_require__) {
		eval("console.log(\"this is module index\")\nvar a = __webpack_require__(/*! ./a */ \"./src/a.js\")\nconsole.log(a)\n\n//# sourceURL=webpack:///./src/index.js?");
	})
});