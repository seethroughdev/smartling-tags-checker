'use strict';

var $           = require('domtastic/bundle/full/domtastic')
,   _           = require('lodash');

module.exports = {

  addStyle: function(css) {
    var $link = $('<link>');

    $link.attr({
      rel: 'stylesheet',
      href: css,
      type: 'text/css'
    });

    this.appendItems($link, $('head'));
  },

  appendItems: function(items, container) {
    if (_.isArray(items)) {
      _.forEach(items, function(item) {
        container.append(item);
      });
    } else if (_.isObject(items)) {
      console.log(items);
      container.append(items);
    }
  }

};
