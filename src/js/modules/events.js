'use strict';

var $ = require('domtastic/bundle/full/domtastic');

function hideStyles($el) {
  var style = $el.attr('style');

  if (style.length > 0) {
    $el.attr({
      'data-stc-tmp': style,
      style: ''
    });
  }
}

function showStyles($el) {
  var style = $el.attr('data-stc-tmp');
  $el.attr({
    style: style
  });
}


module.exports = function() {
  $('body').on('click', '#stc-obj', function(e) {

    var $target    = $(e.target),
        $tagLinks  = $('.tag-link'),
        $highlights = $('[data-stc'),
        $parentLis = $('#stc-obj').find('li');

    if ($target.hasClass('tag-link') && $parentLis.length > 1) {
      e.preventDefault();

      if (!$target.hasClass('is-searching')) {

        $tagLinks.removeClass('is-searching');
        $target.addClass('is-searching');
        $parentLis.removeClass('is-active');
        $target.parent().addClass('is-active');

        $highlights.each(function(e) {
          hideStyles($(e));
        });
        $('[data-stc="' + $target.attr('id') + '"]').each(function(e) {
          showStyles($(e));
        });

      } else {

        $target.removeClass('is-searching');
        $parentLis.addClass('is-active');

        $highlights.each(function(e) {
          showStyles($(e));
        });

      }

    }

    if ($target.attr('id') === 'stc-close') {
      e.preventDefault();
      $highlights
        .removeAttr('style')
        .removeAttr('data-stc');
      $('#stc-obj').removeClass('is-active');
    }

  });
};
