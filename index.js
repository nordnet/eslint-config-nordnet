var path = require('path');
var fs = require('fs');

var filename = path.join(__dirname, '.eslintrc');
var data = fs.readFileSync(filename, {encoding: 'utf-8'});
var parsed = JSON.parse(data);

module.exports = parsed;
