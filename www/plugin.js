
var exec = require('cordova/exec');

var PLUGIN_NAME = 'MyCordovaPlugin';

var MyCordovaPlugin = {
  echo: function(phrase, cb) {
    exec(cb, null, PLUGIN_NAME, 'echo', [phrase]);
  },
  getDate: function(cb) {
    exec(cb, null, PLUGIN_NAME, 'getDate', []);
  },
  reverse: function(str, cb){
    exec(cb, null, PLUGIN_NAME, 'reverse', [str]);
  }
};

module.exports = MyCordovaPlugin;
