'use strict';

var $           = require('domtastic/bundle/full/domtastic')
,   _           = require('lodash')
,   template    = require('./template');

var cssLoc = 'https://seethroughtrees.github.io/';
    cssLoc += 'smartling-tags-checker/index.css';


function appendItems(container, items) {
  if (_.isArray(items)) {
    _.forEach(items, function(item) {
      container.append(item);
    });
  } else if (_.isObject(items)) {
    container.append(items);
  }
}

function addStyle(css) {
  var $link = $('<link>');

  $link.attr({
    rel: 'stylesheet',
    href: css,
    type: 'text/css'
  });

  appendItems($('head'), $link);
}


function getTagLink(el, collection) {
  var tagType = $(el).attr('data-stc');
  return _.find(collection, { name: tagType }).link;
}

function buildLi(el, tagType, fullTags) {
  var $li     = $('<li>'),
      $tag    = $('<span>'),
      $link   = $('<a>'),
      $swatch = $('<span>');

  $tag.attr({
      id: tagType
    })
    .addClass('tag-link')
    .text(tagType);

  $link.attr({
      href: getTagLink(el, fullTags),
      target: '_blank',
      id: 'stc-link'
    }).text('a');

  $swatch
    .addClass('swatch-link')
    .css({
      background: el.bgColor
    });

  $li.addClass('is-active');

  appendItems($li, [ $swatch, $tag ]);

  if ($link.attr('href').length) {
    $li.append($link);
  }

  return $li;

}


function addContainer(currentTags, fullTags) {
  var $body      = $('body'),
      $container = $('<div>'),
      $close     = $('<a>'),
      $ul        = $('<ul>');

  $container
    .attr('id', 'stc-obj')
    .html(template);

  _.forEach(currentTags, function(el) {
    return $ul.append(buildLi(el, $(el).attr('data-stc'), fullTags));
  });

  $close
    .attr({
      id: 'stc-close',
      href: '#'
    })
    .text('- close -');

  appendItems($container, [ $ul, $close ]);
  appendItems($body, $container);

  setTimeout(function() {
    return $container.addClass('is-active');
  }, 500);

}


function init(currentTags, fullTags) {
  addContainer(currentTags, fullTags);
  addStyle(cssLoc);
}


module.exports = init;
