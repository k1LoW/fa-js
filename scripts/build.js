var fs = require('fs')
, util = require('util');

var header = fs.readFileSync(__dirname + '/header.js', 'utf8');
var footer = fs.readFileSync(__dirname + '/footer.js', 'utf8');

var data = fs.readFileSync(__dirname + '/fa_webpacked.js', 'utf8');

fs.writeFileSync(__dirname + '/../release/fa.js', header + data + footer);

