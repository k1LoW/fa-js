(function() {
  var fa =
        
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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var package_info = __webpack_require__(1);

	var fa = {
	  VERSION: package_info.version,
	  actual: null,
	  allowPattern: [],
	  formats: [],
	  set: function(value) {
	    if (value != undefined) {
	      this.actual = value;
	      this.allowPattern = [];
	      this.formats = [];
	    }
	    return this;
	  },
	  allow: function(patterns) {
	    var self = this;
	    if (this.is('String', patterns)) {
	      if (patterns.match(/\+/)) {
	        patterns = patterns.split('+');
	      } else {
	        patterns = [patterns];
	      }
	    }
	    patterns.forEach(function(pattern) {
	      self[pattern]();
	    });
	    return this;
	  },
	  is: function(type, obj) {
	    var clas = Object.prototype.toString.call(obj).slice(8, -1);
	    return obj !== undefined && obj !== null && clas === type;
	  },
	  assert: function() {
	    var self = this;
	    var replaced = self.actual;
	    var checked = true;

	    self.allowPattern.forEach(function(re) {
	      replaced = replaced.replace(re, '');
	    });

	    self.formats.forEach(function(re) {
	      if (!self.actual.match(re)) {
	        checked = false;
	      }
	    });

	    if (self.allowPattern.length > 0 && replaced != '') {
	      checked = false;
	    }

	    return checked;
	  },

	  // allows
	  alpha: function(value) {
	    this.set(value);
	    this.allowPattern.push(/[a-zA-Z]/g);
	    return this;
	  },
	  digit: function(value) {
	    this.set(value);
	    this.allowPattern.push(/[0-9]/g);
	    return this;
	  },
	  space: function(value) {
	    this.set(value);
	    this.allowPattern.push(/[ ]/g);
	    return this;
	  },
	  symbol: function(value) {
	    this.set(value);
	    this.allowPattern.push(/[!-/:-@≠\[-`{-~]/g);
	    return this;
	  },
	  hyphen: function(value) {
	    this.set(value);
	    this.allowPattern.push(/[-]/g);
	    return this;
	  },
	  zenkaku: function(value) {
	    this.set(value);
	    this.allowPattern.push(/[^ -~｡-ﾟ0-9a-zA-Z]/g);
	    return this;
	  },
	  hiragana: function(value) {
	    this.set(value);
	    this.allowPattern.push(/[ぁ-んー]/g);
	    return this;
	  },
	  katakana: function(value) {
	    this.set(value);
	    this.allowPattern.push(/[ァ-ンーヴヵヶ]/g);
	    return this;
	  },
	  zenkaku_alpha: function(value) {
	    this.set(value);
	    this.allowPattern.push(/[ａ-ｚＡ-Ｚ]/g);
	    return this;
	  },
	  zenkaku_digit: function(value) {
	    this.set(value);
	    this.allowPattern.push(/[０-９]/g);
	    return this;
	  },
	  zenkaku_space: function(value) {
	    this.set(value);
	    this.allowPattern.push(/[　]/g);
	    return this;
	  },
	  zenkaku_symbol: function(value) {
	    this.set(value);
	    this.allowPattern.push(/[！”＃＄％＆’（）＝～｜‘｛＋＊｝＜＞？＿－＾￥＠「；：」、。・]/g);
	    return this;
	  },
	  zenkaku_hyphen: function(value) {
	    this.set(value);
	    this.allowPattern.push(/[‐]/g);
	    return this;
	  },
	  zenkaku_hyphen_fuzzy: function(value) {
	    this.set(value);
	    this.allowPattern.push(/[－‐−‒—–―ー─━]/g);
	    return this;
	  },
	  
	  // formats
	  notEmpty: function(value) {
	    this.set(value);
	    this.formats.push(/^.+$/);
	    return this;
	  },
	  int: function(value) {
	    this.set(value);
	    this.formats.push(/^-?[1-9]*[0-9]+$/);
	    return this;
	  },
	  range: function(value, range) {
	    if (range == undefined) {
	      range = value;
	    } else {
	      this.set(value);
	    }
	    var regex = RegExp('^.{' + range +'}$');
	    this.formats.push(regex);
	    return this;
	  },
	  email: function(value) {
	    this.set(value);
	    this.formats.push(/^[a-z0-9\.!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9\.!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[a-z]{2,4}|museum|travel)$/i);
	    return this;
	  },
	  zipcode: function(value) {
	    this.set(value);
	    this.formats.push(/^[0-9]{3}-[0-9]{4}$/);
	    return this;
	  }
	};

	module.exports = fa;


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
		"name": "fa",
		"version": "0.0.0",
		"description": "String assert for form japanese",
		"main": "release/fa.js",
		"devDependencies": {
			"mocha": ">= 1.7.0",
			"chai": ">= 1.3.0",
			"js-yaml": ">= 1.0.3",
			"should": "~1.2.2",
			"uglify-js": "*",
			"webpack": "*",
			"json-loader": "*"
		},
		"scripts": {
			"test": "mocha --require should test/*.js",
			"build": "webpack lib/fa.js scripts/fa_webpacked.js; node scripts/build.js;rm scripts/fa_webpacked.js;cd ./release/; uglifyjs -c -o fa.min.js --source-map fa.map fa.js"
		},
		"repository": {
			"type": "git",
			"url": "https://github.com/k1LoW/fa-js"
		},
		"keywords": [
			"holidays"
		],
		"author": "Ken'ichiro Oyama",
		"license": "MIT",
		"bugs": {
			"url": "https://github.com/k1LoW/fa-js/issues"
		},
		"homepage": "https://github.com/k1LoW/fa-js"
	}

/***/ }
/******/ ])
  // AMD / RequireJS
  if (typeof define !== 'undefined' && define.amd) {
    define('fa', [], function () {
      return fa;
    });
  }
  // Node.js
  else if (typeof module !== 'undefined' && module.exports) {
    module.exports = fa;
  }
  // included directly via <script> tag
  else {
    root = Function('return this')();
    root.fa = fa;
  }
  
})();
