'use strict';

var $           = require('domtastic/bundle/full/domtastic')
,   _           = require('lodash')
,   objTemplate = require('./template')
,   getNodes    = require('./content')
,   Tags        = require('./tag-names');

var cssLoc = 'index.css';


function addStyle() {
  var $link = $('<link>');

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
  var $body   = $('body'),
      $container = $('<div>'),
      $ul        = $('<ul>');

  $container
    .attr('id', 'stc-obj')
    .html(objTemplate);

  _.forEach(getNodes(), function(el, ind, arr) {
    var $li     = $('<li>'),
        $tag    = $('<a>'),
        $link   = $('<a>'),
        $swatch = $('<a>'),
        tagType = $(el).attr('data-stc');

    $tag.attr({
        id: tagType,
        href: '#'
      })
      .addClass('tag-link')
      .text(tagType);

    $link.attr({
        href: getTagLink(el)
      })
      .addClass('icon-link')
      .text(' - link');

    $swatch
      .addClass('swatch-link')
      .css({
        background: el.bgColor
      });


    $li.addClass('is-active')
      .append($swatch)
      .append($tag)
      .append($link);

    $ul.append($li)
  });
    $container.append($ul);
    $body.append($container);
};


function init() {
  addContainer();
  addStyle();
}


module.exports = init;
