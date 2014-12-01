var package_info = require('json!./../package.json');
var fa_chars = require('./fa_chars');
var fa_formats = require('./fa_formats');

var fa = {
  VERSION: package_info.version,
  actual: null,
  allowChars: [],
  checkFormats: [],
  message: [],
  charSets: fa_chars,
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
      var re = self.charSets[pattern]();
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
      self.message.push('allowChars');
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
