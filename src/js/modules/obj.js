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
  });

  $('head').append($link);
}


function getTagLink(el) {
  var tagType = $(el).attr('data-stc');
  return _.find(Tags, { name: tagType }).link;
}

function addContainer() {
  var $body      = $('body'),
      $container = $('<div>'),
      $close     = $('<a>'),
      $ul        = $('<ul>');

  $container
    .attr('id', 'stc-obj')
    .html(objTemplate);

  _.forEach(getNodes(), function(el) {
    var $li     = $('<li>'),
        $tag    = $('<span>'),
        $link   = $('<a>'),
        $swatch = $('<span>'),
        tagType = $(el).attr('data-stc');

    $tag.attr({
        id: tagType
      })
      .addClass('tag-link')
      .text(tagType);

    $link.attr({
        href: getTagLink(el),
        id: 'stc-link'
      }).text('a');

    $swatch
      .addClass('swatch-link')
      .css({
        background: el.bgColor
      });

    $li.addClass('is-active')
      .append($swatch)
      .append($tag);

    if ($link.attr('href').length) {
      $li.append($link);
    }

    $ul.append($li);
  });

    $close
      .attr({
        id: 'stc-close',
        href: '#'
      })
      .text('- close -');

    $container
      .append($ul)
      .append($close);
    $body.append($container);

    setTimeout(function() {
      $container.addClass('is-active');
    }, 500);

}


function init() {
  addContainer();
  addStyle();
}


module.exports = init;
