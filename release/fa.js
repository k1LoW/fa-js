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

	var package_info = __webpack_require__(3);
	var fa_chars = __webpack_require__(1);
	var fa_formats = __webpack_require__(2);

	var fa = {
	  VERSION: package_info.version,
	  actual: null,
	  allowChars: [],
	  checkFormats: [],
	  message: [],
	  chars: fa_chars,
	  set: function(value) {
	    if (value != undefined) {
	      this.actual = value;
	      this.allowChars = [];
	      this.checkFormats = [];
	      this.message = [];
	    }
	    return this;
	  },
	  char: function(patterns) {
	    var self = this;
	    if (patterns.match(/\+/)) {
	      patterns = patterns.split('+');
	    } else {
	      patterns = [patterns];
	    }
	    patterns.forEach(function(pattern) {
	      self.allowChars.push(pattern);
	    });
	    return this;
	  },
	  format: function(patterns) {
	    var self = this;
	    if (patterns.match(/\+/)) {
	      patterns = patterns.split('+');
	    } else {
	      patterns = [patterns];
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

	    self.allowChars.forEach(function(pattern) {
	      var re = self.chars[pattern]();
	      replaced = replaced.replace(re, '');
	    });

	    self.checkFormats.forEach(function(pattern) {
	      var re = pattern[1];
	      if (!self.actual.match(re)) {
	        checked = false;
	        self.message.push(pattern[0]);
	      }
	    });

	    if (self.allowChars.length > 0 && replaced != '') {
	      checked = false;
	      self.message.push('char');
	    }

	    return checked;
	  }
	};

	var merge = function (a, b) {
	  for (key in b) {
	    if (b.hasOwnProperty(key)) {
	      a[key] = b[key];
	    }
	  }
	  return a;
	};

	fa = merge(fa, fa_formats);

	module.exports = fa;


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var fa_chars = {
	  // chars
	  alpha: function(value) {
	    return  /[a-zA-Z]/g;
	  },
	  digit: function(value) {
	    return /[0-9]/g;
	  },
	  space: function(value) {
	    return /[ ]/g;
	  },
	  symbol: function(value) {
	    return /[!-/:-@≠\[-`{-~]/g;
	  },
	  hyphen: function(value) {
	    return /[-]/g;
	  },
	  zenkaku: function(value) {
	    return /[^ -~｡-ﾟ0-9a-zA-Z]/g;
	  },
	  hiragana: function(value) {
	    return /[ぁ-んー]/g;
	  },
	  katakana: function(value) {
	    return /[ァ-ンーヴヵヶ]/g;
	  },
	  zenkaku_alpha: function(value) {
	    return /[ａ-ｚＡ-Ｚ]/g;
	  },
	  zenkaku_digit: function(value) {
	    return /[０-９]/g;
	  },
	  zenkaku_space: function(value) {
	    return /[　]/g;
	  },
	  zenkaku_symbol: function(value) {
	    return /[！”＃＄％＆’（）＝～｜‘｛＋＊｝＜＞？＿－＾￥＠「；：」、。・]/g;
	  },
	  zenkaku_hyphen: function(value) {
	    return /[‐]/g;
	  },
	  zenkaku_hyphen_fuzzy: function(value) {
	    return /[－‐−‒—–―ー─━]/g;
	  }
	};

	module.exports = fa_chars;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var fa_formats = {
	  // formats
	  notEmpty: function(value) {
	    this.set(value);
	    this.checkFormats.push(['notEmpty', /^.+$/]);
	    return this;
	  },
	  int: function(value) {
	    this.set(value);
	    this.checkFormats.push(['int', /^-?[1-9]*[0-9]+$/]);
	    return this;
	  },
	  range: function(value, range) {
	    if (range == undefined) {
	      range = value;
	    } else {
	      this.set(value);
	    }
	    var regex = RegExp('^.{' + range +'}$');
	    this.checkFormats.push(['range', regex]);
	    return this;
	  },
	  email: function(value) {
	    this.set(value);
	    this.checkFormats.push(['email', /^[a-z0-9\.!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9\.!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[a-z]{2,4}|museum|travel)$/i]);
	    return this;
	  },
	  zipcode: function(value) {
	    this.set(value);
	    this.checkFormats.push(['zipcode', /^[0-9]{3}-[0-9]{4}$/]);
	    return this;
	  },
	  telNo: function(value) {
	    this.set(value);
	    this.checkFormats.push(['telNo', /^[0-9]{2}[0-9]*-[0-9]*-[0-9]{4}$/]);
	    return this;
	  }
	};

	module.exports = fa_formats;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
		"name": "fa",
		"version": "0.0.1",
		"description": "String assert for form japanese",
		"main": "release/fa.js",
		"devDependencies": {
			"mocha": ">= 1.7.0",
			"chai": ">= 1.3.0",
			"js-yaml": ">= 1.0.3",
			"should": "~1.2.2",
			"uglify-js": "*",
			"webpack": "*",
			"json-loader": "~0.5.1"
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
