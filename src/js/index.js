var events  = require('./modules/events')
,   obj     = require('./modules/obj')
,   tags    = require('./modules/tag-names')
,   content = require('./modules/content');

obj(content(tags), tags);
events();
