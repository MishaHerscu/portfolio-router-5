webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// Load all specs so webpack can find them. Think of this as an automatic
	// manifest for bundling specs.

	var req = __webpack_require__(29);
	req.keys().forEach(req);

/***/ },

/***/ 29:
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./router.spec.js": 30
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 29;


/***/ },

/***/ 30:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var router = __webpack_require__(3);

	describe('Router', function () {
	  it('is true', function () {
	    expect(router).toBe(true);
	  });
	});

/***/ }

});