'use strict';

var $           = require('domtastic/bundle/full/domtastic')
,   _           = require('lodash')
,   objTemplate = require('./template')
,   getNodes    = require('./content')
,   Tags        = require('./tag-names');

var cssLoc = 'https://seethroughtrees.github.io/smartling-tags-checker/index.css';


function addStyle() {
  var $link = $('<li>');

  $link.attr({
    rel: 'stylesheet',
    href: cssLoc,
    type: 'text/css'
  })

  $('head').append($link);
}


function getTagLink(el) {
  var tagType = $(el).attr('data-stc');
  return _.find(Tags, {name: tagType}).link;
}

function addContainer() {
  var $container = $('<ul>');

  $container.attr('id', 'smartling-obj');

  _.forEach(getNodes(), function(el, ind, arr) {
    var $li     = $('<li>'),
        $a      = $('<a>'),
        $link   = $('<a>'),
        $body   = $('body'),
        tagType = $(el).attr('data-stc');

    $a.attr({
        id: tagType,
        href: '#'
      })
      .addClass('is-active')
      .text(tagType);

    $link.attr({
        href: getTagLink(el)
      })
      .addClass('icon-link')
      .text(' - link');

    $li.append($a)
      .append($link);

    $container.append($li)
    $body.append($container);

  });
};


function init() {
  addContainer();
  addStyle();
}


module.exports = init;
