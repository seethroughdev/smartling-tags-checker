'use strict';

var $       = require('domtastic/bundle/full/domtastic');


$('body').on('click', '#smartling-obj', function(e) {
  e.preventDefault();

  var $target = $(e.target);

  if ($target.hasClass('tag-link')) {
    $('tag-link').removeClass('is-active');
    $target
      .addClass('is-active')
  }

});

var events = function() {
  console.log('events');
};

module.exports = events;
