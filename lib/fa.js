var package_info = require('json!./../package.json');

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
    numeric: function(value) {
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
    }
};

module.exports = fa;
