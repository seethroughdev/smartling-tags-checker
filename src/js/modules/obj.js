'use strict';

var objTemplate = require('./template');

var body   = document.getElementsByTagName('body')[ 0 ]
,   head   = document.getElementsByTagName('head')[ 0 ]
,   cssLoc = 'https://seethroughtrees.github.io/smartling-tags-checker/index.css';


var obj = {

  init: function() {
    this.createObj();
  },

  createObj: function() {
    var div = document.createElement('div');
    div.setAttribute('id', 'smart-obj');
    div.innerHTML = objTemplate;
    this.style(div);
  },

  style: function(div) {
    var link = document.createElement('link');
    link.setAttribute('rel','stylesheet');
    link.setAttribute('href', cssLoc);
    link.setAttribute('type','text/css');
    head.appendChild(link);
    this.append(div);
  },

  append: function(div) {
    body.appendChild(div);
  }

};

module.exports = obj;
