'use strict';

var $ = require('domtastic/bundle/full/domtastic');


module.exports = function() {
  $('body').on('click', '#stc-obj', function(e) {

    var $target = $(e.target);

    if ($target.hasClass('tag-link')) {
      $('[data-stc="' + $target.attr('id') + '"]').toggleClass('is-active');
    }

    if ($target.attr('id') === 'stc-close') {
      e.preventDefault();
      $('[data-stc]')
        .removeAttr('style')
        .removeAttr('data-stc');
      $('#stc-obj').removeClass('is-active');
    }

  });
};
