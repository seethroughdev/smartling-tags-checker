'use strict';

var $    = require('domtastic/bundle/full/domtastic')
,   _    = require('lodash')
,   Tags = require('./tag-names');

var content = {

  init: {
    _.forEach(Tags, function(k, v, c) {
      console.log(k,v,c);
    })
  }

};

module.exports = content;
