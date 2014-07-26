'use strict';

var $       = require('domtastic/bundle/full/domtastic');


$('body').on('click', '#stc-obj', function(e) {
  // e.preventDefault();

  var $target = $(e.target);

  if ($target.hasClass('tag-link')) {
    $('[data-stc="' + $target.attr('id') + '"]').toggleClass('is-active');
  }

  if ($target.attr('id') === 'st-close') {
    $('[data-stc]')
      .removeAttr('style')
      .removeAttr('data-stc');
    $('#stc-obj').removeClass('is-active');
  }

});

var events = function() {
  console.log('events');
};

module.exports = events;
