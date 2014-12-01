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
