var package_info = require('json!./../package.json');

var fa = {
  VERSION: package_info.version,
  actual: null,
  allowPattern: [],
  formats: [],
  message: [],
  set: function(value) {
    if (value != undefined) {
      this.actual = value;
      this.allowPattern = [];
      this.formats = [];
      this.message = [];
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

    self.allowPattern.forEach(function(pattern) {
      var re = pattern[1];
      replaced = replaced.replace(re, '');
      if (replaced != '') {
        self.message.push(pattern[0]);
      }
    });

    self.formats.forEach(function(pattern) {
      var re = pattern[1];
      if (!self.actual.match(re)) {
        checked = false;
        self.message.push(pattern[0]);
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
    this.allowPattern.push(['alpha', /[a-zA-Z]/g]);
    return this;
  },
  digit: function(value) {
    this.set(value);
    this.allowPattern.push(['digit', /[0-9]/g]);
    return this;
  },
  space: function(value) {
    this.set(value);
    this.allowPattern.push(['space', /[ ]/g]);
    return this;
  },
  symbol: function(value) {
    this.set(value);
    this.allowPattern.push(['symbol', /[!-/:-@≠\[-`{-~]/g]);
    return this;
  },
  hyphen: function(value) {
    this.set(value);
    this.allowPattern.push(['hyphen', /[-]/g]);
    return this;
  },
  zenkaku: function(value) {
    this.set(value);
    this.allowPattern.push(['zenkaku', /[^ -~｡-ﾟ0-9a-zA-Z]/g]);
    return this;
  },
  hiragana: function(value) {
    this.set(value);
    this.allowPattern.push(['hiragana', /[ぁ-んー]/g]);
    return this;
  },
  katakana: function(value) {
    this.set(value);
    this.allowPattern.push(['katakana', /[ァ-ンーヴヵヶ]/g]);
    return this;
  },
  zenkaku_alpha: function(value) {
    this.set(value);
    this.allowPattern.push(['zenkaku_alpha', /[ａ-ｚＡ-Ｚ]/g]);
    return this;
  },
  zenkaku_digit: function(value) {
    this.set(value);
    this.allowPattern.push(['zenkaku_digit', /[０-９]/g]);
    return this;
  },
  zenkaku_space: function(value) {
    this.set(value);
    this.allowPattern.push(['zenkaku_space', /[　]/g]);
    return this;
  },
  zenkaku_symbol: function(value) {
    this.set(value);
    this.allowPattern.push(['zenkaku_symbol', /[！”＃＄％＆’（）＝～｜‘｛＋＊｝＜＞？＿－＾￥＠「；：」、。・]/g]);
    return this;
  },
  zenkaku_hyphen: function(value) {
    this.set(value);
    this.allowPattern.push(['zenkaku_hyphen', /[‐]/g]);
    return this;
  },
  zenkaku_hyphen_fuzzy: function(value) {
    this.set(value);
    this.allowPattern.push(['zenkaku_hyphen_fuzzy', /[－‐−‒—–―ー─━]/g]);
    return this;
  },
  
  // formats
  notEmpty: function(value) {
    this.set(value);
    this.formats.push(['notEmpty', /^.+$/]);
    return this;
  },
  int: function(value) {
    this.set(value);
    this.formats.push(['int', /^-?[1-9]*[0-9]+$/]);
    return this;
  },
  range: function(value, range) {
    if (range == undefined) {
      range = value;
    } else {
      this.set(value);
    }
    var regex = RegExp('^.{' + range +'}$');
    this.formats.push(['range', regex]);
    return this;
  },
  email: function(value) {
    this.set(value);
    this.formats.push(['email', /^[a-z0-9\.!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9\.!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[a-z]{2,4}|museum|travel)$/i]);
    return this;
  },
  zipcode: function(value) {
    this.set(value);
    this.formats.push(['zipcode', /^[0-9]{3}-[0-9]{4}$/]);
    return this;
  }
};

module.exports = fa;
