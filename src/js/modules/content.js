'use strict';

var $    = require('domtastic/bundle/full/domtastic')
,   _    = require('lodash')
,   Tags = require('./tag-names');


var getTags = function() {
  return _.map(Tags, function(e) {
    return e.name;
  })
};

var getNodes = function(tag) {
  return $('.' + tag);
};

var content = {

  init: function() {
    _.forEach(getTags(), function(e) {
      console.log(getNodes(e));
    });
  }

};

module.exports = content;
