'use strict';

var $           = require('domtastic/bundle/full/domtastic')
,   _           = require('lodash')
,   objTemplate = require('./template')
,   getNodes    = require('./content');

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
  console.log(getNodes());
  var $container = $('<ul>');
  $container.attr('id', 'smartling-obj');

  // _.forEach(getNodes(), function(el, ind, arr) {
  //   var $li = $(li);
  //   $li.text()

  //   $container.append($li)

  // });

  $('body').append($container);

  // var div = document.createElement('div');
  // div.setAttribute('id', 'smart-obj');
  // div.innerHTML = objTemplate;
  // style(div);

  // _.forEach(getNodes, function(e, i, v) {
  //   $('#smartling-obj')
  // })

}


module.exports = init;
