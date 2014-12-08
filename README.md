# fa-js [![Build Status](https://travis-ci.org/k1LoW/fa-js.svg?branch=master)](https://travis-ci.org/k1LoW/fa-js)

## Usage

In HTML

```html
<script src="./your/own/path/fa.js"></script>
<script>
$(function() {
  $('form').on('submit', function() {
    if (!fa.set($('input#name').val()).char('zenkaku').notEmpty().assert()) {
      fa.message.forEach(function(m) {
        alert(m);
      });
      return false;
    }
    return true;
  });
});
</script>
```

