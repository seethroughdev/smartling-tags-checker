'use strict';

var $      = require('domtastic/bundle/full/domtastic')
,   _      = require('lodash')
,   Tags   = require('./tag-names')
,   Colors = require('./colors');


var getNames = function(e) {
  return e.name;
};

var getNodes = function(tag) {
  return $('.' + tag);
};

var elExists = function(e) {
  return e.length > 0;
};

var addColors = function(e, i) {
  e.bgColor = Colors[ i ];
  return e;
};

var setColors = function(e) {
  $(e)
    .attr('data-stc', 'true' )
    .css({
      background: e.bgColor,
      color: '#000'
  });

  return e;
};


module.exports = function() {
  return _.chain(Tags)
      .map(getNames)
      .map(getNodes)
      .filter(elExists)
      .map(addColors)
      .map(setColors)
      .value();
};
