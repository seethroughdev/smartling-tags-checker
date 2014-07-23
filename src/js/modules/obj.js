'use strict';

var objTemplate = require('./template');

var body   = document.getElementsByTagName('body')[ 0 ]
,   head   = document.getElementsByTagName('head')[ 0 ]
,   cssLoc = 'https://seethroughtrees.github.io/smartling-tags-checker/index.css';


function append(div) {
  body.appendChild(div);
}


function style(div) {
  var link = document.createElement('link');
  link.setAttribute('rel','stylesheet');
  link.setAttribute('href', cssLoc);
  link.setAttribute('type','text/css');
  head.appendChild(link);
  append(div);
}


function init() {
  var div = document.createElement('div');
  div.setAttribute('id', 'smart-obj');
  div.innerHTML = objTemplate;
  style(div);
}


module.exports = init;
