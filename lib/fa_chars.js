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
