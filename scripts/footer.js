
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
