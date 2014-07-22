(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
!function(_e){var e=function(){return _e()["default"]};if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.$=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
"use strict";
var __moduleName = "src/api";
var extend = _dereq_('./util').extend;
var api = {},
    apiNodeList = {},
    $ = {};
var array = _dereq_('./array');
var attr = _dereq_('./attr');
var class_ = _dereq_('./class');
var contains = _dereq_('./contains');
var css = _dereq_('./css');
var data = _dereq_('./data');
var dom = _dereq_('./dom');
var dom_extra = _dereq_('./dom_extra');
var event = _dereq_('./event');
var html = _dereq_('./html');
var mode = _dereq_('./mode');
var noconflict = _dereq_('./noconflict');
var ready = _dereq_('./ready');
var selector = _dereq_('./selector');
var selector_extra = _dereq_('./selector_extra');
var type = _dereq_('./type');
if (typeof selector !== 'undefined') {
  $ = selector.$;
  $.matches = selector.matches;
  api.find = selector.find;
  api.closest = selector.closest;
}
extend($, contains, mode, noconflict, type);
extend(api, array, attr, class_, css, data, dom, dom_extra, event, html, ready, selector_extra);
extend(apiNodeList, array);
$.version = '0.7.5';
$.extend = extend;
$.fn = api;
$.fnList = apiNodeList;
var $__default = $;
module.exports = {
  default: $__default,
  __esModule: true
};


},{"./array":2,"./attr":3,"./class":4,"./contains":5,"./css":6,"./data":7,"./dom":8,"./dom_extra":9,"./event":10,"./html":11,"./mode":13,"./noconflict":14,"./ready":15,"./selector":16,"./selector_extra":17,"./type":18,"./util":19}],2:[function(_dereq_,module,exports){
"use strict";
var __moduleName = "src/array";
var _each = _dereq_('./util').each;
var $__0 = _dereq_('./selector'),
    $ = $__0.$,
    matches = $__0.matches;
var ArrayProto = Array.prototype;
var every = ArrayProto.every;
function filter(selector, thisArg) {
  var callback = typeof selector === 'function' ? selector : function(element) {
    return matches(element, selector);
  };
  return $(ArrayProto.filter.call(this, callback, thisArg));
}
function forEach(callback, thisArg) {
  return _each(this, callback, thisArg);
}
var each = forEach;
var indexOf = ArrayProto.indexOf;
var map = ArrayProto.map;
var pop = ArrayProto.pop;
var push = ArrayProto.push;
function reverse() {
  var elements = ArrayProto.slice.call(this);
  return $(ArrayProto.reverse.call(elements));
}
var shift = ArrayProto.shift;
var some = ArrayProto.some;
var unshift = ArrayProto.unshift;
;
module.exports = {
  each: each,
  every: every,
  filter: filter,
  forEach: forEach,
  indexOf: indexOf,
  map: map,
  pop: pop,
  push: push,
  reverse: reverse,
  shift: shift,
  some: some,
  unshift: unshift,
  __esModule: true
};


},{"./selector":16,"./util":19}],3:[function(_dereq_,module,exports){
"use strict";
var __moduleName = "src/attr";
var each = _dereq_('./util').each;
function attr(key, value) {
  if (typeof key === 'string' && typeof value === 'undefined') {
    var element = this.nodeType ? this : this[0];
    return element ? element.getAttribute(key) : undefined;
  }
  each(this, function(element) {
    if (typeof key === 'object') {
      for (var attr in key) {
        element.setAttribute(attr, key[attr]);
      }
    } else {
      element.setAttribute(key, value);
    }
  });
  return this;
}
function removeAttr(key) {
  each(this, function(element) {
    element.removeAttribute(key);
  });
  return this;
}
;
module.exports = {
  attr: attr,
  removeAttr: removeAttr,
  __esModule: true
};


},{"./util":19}],4:[function(_dereq_,module,exports){
"use strict";
var __moduleName = "src/class";
var $__0 = _dereq_('./util'),
    makeIterable = $__0.makeIterable,
    each = $__0.each;
function addClass(value) {
  if (value && value.length) {
    each(value.split(' '), function(className) {
      each(this, function(element) {
        element.classList.add(className);
      });
    }.bind(this));
  }
  return this;
}
function removeClass(value) {
  if (value && value.length) {
    each(value.split(' '), function(className) {
      each(this, function(element) {
        element.classList.remove(className);
      });
    }.bind(this));
  }
  return this;
}
function toggleClass(value) {
  if (value && value.length) {
    each(value.split(' '), function(className) {
      each(this, function(element) {
        element.classList.toggle(className);
      });
    }.bind(this));
  }
  return this;
}
function hasClass(value) {
  return makeIterable(this).some(function(element) {
    return element.classList.contains(value);
  });
}
;
module.exports = {
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  hasClass: hasClass,
  __esModule: true
};


},{"./util":19}],5:[function(_dereq_,module,exports){
"use strict";
var __moduleName = "src/contains";
function contains(container, element) {
  if (!container || !element || container === element) {
    return false;
  } else if (container.contains) {
    return container.contains(element);
  } else if (container.compareDocumentPosition) {
    return !(container.compareDocumentPosition(element) & Node.DOCUMENT_POSITION_DISCONNECTED);
  }
  return false;
}
;
module.exports = {
  contains: contains,
  __esModule: true
};


},{}],6:[function(_dereq_,module,exports){
"use strict";
var __moduleName = "src/css";
var each = _dereq_('./util').each;
function isNumeric(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
}
function camelize(value) {
  return value.replace(/-([\da-z])/gi, function(matches, letter) {
    return letter.toUpperCase();
  });
}
function dasherize(value) {
  return value.replace(/([a-z\d])([A-Z])/g, '$1-$2').toLowerCase();
}
function css(key, value) {
  var styleProps,
      prop,
      val;
  if (typeof key === 'string') {
    key = camelize(key);
    if (typeof value === 'undefined') {
      var element = this.nodeType ? this : this[0];
      if (element) {
        val = element.style[key];
        return isNumeric(val) ? parseFloat(val) || 0 : val;
      }
      return undefined;
    }
    styleProps = {};
    styleProps[key] = value;
  } else {
    styleProps = key;
    for (prop in styleProps) {
      val = styleProps[prop];
      delete styleProps[prop];
      styleProps[camelize(prop)] = val;
    }
  }
  each(this, function(element) {
    for (prop in styleProps) {
      if (styleProps[prop] || styleProps[prop] === 0) {
        element.style[prop] = styleProps[prop];
      } else {
        element.style.removeProperty(dasherize(prop));
      }
    }
  });
  return this;
}
;
module.exports = {
  css: css,
  __esModule: true
};


},{"./util":19}],7:[function(_dereq_,module,exports){
"use strict";
var __moduleName = "src/data";
var each = _dereq_('./util').each;
var dataKeyProp = '__domtastic_data__';
function data(key, value) {
  if (typeof key === 'string' && typeof value === 'undefined') {
    var element = this.nodeType ? this : this[0];
    return element && element[dataKeyProp] ? element[dataKeyProp][key] : undefined;
  }
  each(this, function(element) {
    element[dataKeyProp] = element[dataKeyProp] || {};
    element[dataKeyProp][key] = value;
  });
  return this;
}
function prop(key, value) {
  if (typeof key === 'string' && typeof value === 'undefined') {
    var element = this.nodeType ? this : this[0];
    return element && element ? element[key] : undefined;
  }
  each(this, function(element) {
    element[key] = value;
  });
  return this;
}
;
module.exports = {
  data: data,
  prop: prop,
  __esModule: true
};


},{"./util":19}],8:[function(_dereq_,module,exports){
"use strict";
var __moduleName = "src/dom";
var toArray = _dereq_('./util').toArray;
function append(element) {
  if (this instanceof Node) {
    if (typeof element === 'string') {
      this.insertAdjacentHTML('beforeend', element);
    } else {
      if (element instanceof Node) {
        this.appendChild(element);
      } else {
        var elements = element instanceof NodeList ? toArray(element) : element;
        elements.forEach(this.appendChild.bind(this));
      }
    }
  } else {
    var l = this.length;
    while (l--) {
      var elm = l === 0 ? element : _clone(element);
      append.call(this[l], elm);
    }
  }
  return this;
}
function prepend(element) {
  if (this instanceof Node) {
    if (typeof element === 'string') {
      this.insertAdjacentHTML('afterbegin', element);
    } else {
      if (element instanceof Node) {
        this.insertBefore(element, this.firstChild);
      } else {
        var elements = element instanceof NodeList ? toArray(element) : element;
        elements.reverse().forEach(prepend.bind(this));
      }
    }
  } else {
    var l = this.length;
    while (l--) {
      var elm = l === 0 ? element : _clone(element);
      prepend.call(this[l], elm);
    }
  }
  return this;
}
function before(element) {
  if (this instanceof Node) {
    if (typeof element === 'string') {
      this.insertAdjacentHTML('beforebegin', element);
    } else {
      if (element instanceof Node) {
        this.parentNode.insertBefore(element, this);
      } else {
        var elements = element instanceof NodeList ? toArray(element) : element;
        elements.forEach(before.bind(this));
      }
    }
  } else {
    var l = this.length;
    while (l--) {
      var elm = l === 0 ? element : _clone(element);
      before.call(this[l], elm);
    }
  }
  return this;
}
function after(element) {
  if (this instanceof Node) {
    if (typeof element === 'string') {
      this.insertAdjacentHTML('afterend', element);
    } else {
      if (element instanceof Node) {
        this.parentNode.insertBefore(element, this.nextSibling);
      } else {
        var elements = element instanceof NodeList ? toArray(element) : element;
        elements.reverse().forEach(after.bind(this));
      }
    }
  } else {
    var l = this.length;
    while (l--) {
      var elm = l === 0 ? element : _clone(element);
      after.call(this[l], elm);
    }
  }
  return this;
}
function clone() {
  return $(_clone(this));
}
function _clone(element) {
  if (typeof element === 'string') {
    return element;
  } else if (element instanceof Node) {
    return element.cloneNode(true);
  } else if ('length' in element) {
    return [].map.call(element, function(el) {
      return el.cloneNode(true);
    });
  }
  return element;
}
;
module.exports = {
  append: append,
  prepend: prepend,
  before: before,
  after: after,
  clone: clone,
  __esModule: true
};


},{"./util":19}],9:[function(_dereq_,module,exports){
"use strict";
var __moduleName = "src/dom_extra";
var each = _dereq_('./util').each;
var $__0 = _dereq_('./dom'),
    append = $__0.append,
    before = $__0.before,
    after = $__0.after;
var $ = _dereq_('./selector').$;
function appendTo(element) {
  var context = typeof element === 'string' ? $(element) : element;
  append.call(context, this);
  return this;
}
function empty() {
  return each(this, function(element) {
    element.innerHTML = '';
  });
}
function remove() {
  return each(this, function(element) {
    if (element.parentNode) {
      element.parentNode.removeChild(element);
    }
  });
}
function replaceWith() {
  return before.apply(this, arguments).remove();
}
function text(value) {
  if (typeof value !== 'string') {
    return this[0].textContent;
  }
  each(this, function(element) {
    element.textContent = '' + value;
  });
  return this;
}
function val(value) {
  if (typeof value !== 'string') {
    return this[0].value;
  }
  each(this, function(element) {
    element.value = value;
  });
  return this;
}
;
module.exports = {
  appendTo: appendTo,
  empty: empty,
  remove: remove,
  replaceWith: replaceWith,
  text: text,
  val: val,
  __esModule: true
};


},{"./dom":8,"./selector":16,"./util":19}],10:[function(_dereq_,module,exports){
"use strict";
var __moduleName = "src/event";
var $__0 = _dereq_('./util'),
    global = $__0.global,
    each = $__0.each;
var closest = _dereq_('./selector').closest;
function on(eventNames, selector, handler, useCapture) {
  if (typeof selector === 'function') {
    handler = selector;
    selector = null;
  }
  var parts,
      namespace,
      eventListener;
  eventNames.split(' ').forEach(function(eventName) {
    parts = eventName.split('.');
    eventName = parts[0] || null;
    namespace = parts[1] || null;
    eventListener = proxyHandler(handler);
    each(this, function(element) {
      if (selector && eventName in hoverEvents) {
        eventListener = hoverHandler(eventListener);
      }
      if (selector) {
        eventListener = delegateHandler.bind(element, selector, eventListener);
      }
      element.addEventListener(hoverEvents[eventName] || eventName, eventListener, useCapture || false);
      getHandlers(element).push({
        eventName: eventName,
        handler: handler,
        eventListener: eventListener,
        selector: selector,
        namespace: namespace
      });
    });
  }, this);
  return this;
}
function off() {
  var eventNames = arguments[0] !== (void 0) ? arguments[0] : '';
  var selector = arguments[1];
  var handler = arguments[2];
  var useCapture = arguments[3];
  if (typeof selector === 'function') {
    handler = selector;
    selector = null;
  }
  var parts,
      namespace,
      handlers;
  eventNames.split(' ').forEach(function(eventName) {
    parts = eventName.split('.');
    eventName = parts[0] || null;
    namespace = parts[1] || null;
    each(this, function(element) {
      handlers = getHandlers(element);
      each(handlers.filter(function(item) {
        return ((!eventName || item.eventName === eventName) && (!namespace || item.namespace === namespace) && (!handler || item.handler === handler) && (!selector || item.selector === selector));
      }), function(item) {
        element.removeEventListener(hoverEvents[item.eventName] || item.eventName, item.eventListener, useCapture || false);
        handlers.splice(handlers.indexOf(item), 1);
      });
      if (!eventName && !namespace && !selector && !handler) {
        clearHandlers(element);
      } else if (handlers.length === 0) {
        clearHandlers(element);
      }
    });
  }, this);
  return this;
}
function delegate(selector, eventName, handler) {
  return on.call(this, eventName, selector, handler);
}
function undelegate(selector, eventName, handler) {
  return off.call(this, eventName, selector, handler);
}
function trigger(type, data) {
  var params = arguments[2] !== (void 0) ? arguments[2] : {};
  params.bubbles = typeof params.bubbles === 'boolean' ? params.bubbles : true;
  params.cancelable = typeof params.cancelable === 'boolean' ? params.cancelable : true;
  params.preventDefault = typeof params.preventDefault === 'boolean' ? params.preventDefault : false;
  params.detail = data;
  var event = new CustomEvent(type, params);
  event._preventDefault = params.preventDefault;
  each(this, function(element) {
    if (!params.bubbles || isEventBubblingInDetachedTree || isAttachedToDocument(element)) {
      dispatchEvent(element, event);
    } else {
      triggerForPath(element, type, params);
    }
  });
  return this;
}
function triggerHandler(type, data) {
  if (this[0]) {
    trigger.call(this[0], type, data, {
      bubbles: false,
      preventDefault: true
    });
  }
}
function isAttachedToDocument(element) {
  if (element === window || element === document) {
    return true;
  }
  return $.contains(element.ownerDocument.documentElement, element);
}
function triggerForPath(element, type) {
  var params = arguments[2] !== (void 0) ? arguments[2] : {};
  params.bubbles = false;
  var event = new CustomEvent(type, params);
  event._target = element;
  do {
    dispatchEvent(element, event);
  } while (element = element.parentNode);
}
var directEventMethods = ['blur', 'click', 'focus', 'select'];
function dispatchEvent(element, event) {
  if (directEventMethods.indexOf(event.type) !== -1 && typeof element[event.type] === 'function') {
    element[event.type]();
  } else {
    element.dispatchEvent(event);
  }
}
var eventKeyProp = '__domtastic_event__';
var id = 1;
var handlers = {};
var unusedKeys = [];
function getHandlers(element) {
  if (!element[eventKeyProp]) {
    element[eventKeyProp] = unusedKeys.length === 0 ? ++id : unusedKeys.pop();
  }
  var key = element[eventKeyProp];
  return handlers[key] || (handlers[key] = []);
}
function clearHandlers(element) {
  var key = element[eventKeyProp];
  if (handlers[key]) {
    handlers[key] = null;
    element[key] = null;
    unusedKeys.push(key);
  }
}
function proxyHandler(handler) {
  return function(event) {
    handler.call(this, augmentEvent(event), event.detail);
  };
}
var augmentEvent = (function() {
  var methodName,
      eventMethods = {
        preventDefault: 'isDefaultPrevented',
        stopImmediatePropagation: 'isImmediatePropagationStopped',
        stopPropagation: 'isPropagationStopped'
      },
      noop = (function() {}),
      returnTrue = (function() {
        return true;
      }),
      returnFalse = (function() {
        return false;
      });
  return function(event) {
    if (!event.isDefaultPrevented || event.stopImmediatePropagation || event.stopPropagation) {
      for (methodName in eventMethods) {
        (function(methodName, testMethodName, originalMethod) {
          event[methodName] = function() {
            this[testMethodName] = returnTrue;
            return originalMethod.apply(this, arguments);
          };
          event[testMethodName] = returnFalse;
        }(methodName, eventMethods[methodName], event[methodName] || noop));
      }
      if (event._preventDefault) {
        event.preventDefault();
      }
    }
    return event;
  };
})();
function delegateHandler(selector, handler, event) {
  var eventTarget = event._target || event.target,
      currentTarget = closest.call([eventTarget], selector, this)[0];
  if (currentTarget && currentTarget !== this) {
    if (currentTarget === eventTarget || !(event.isPropagationStopped && event.isPropagationStopped())) {
      handler.call(currentTarget, event);
    }
  }
}
var hoverEvents = {
  mouseenter: 'mouseover',
  mouseleave: 'mouseout'
};
function hoverHandler(handler) {
  return function(event) {
    var relatedTarget = event.relatedTarget;
    if (!relatedTarget || (relatedTarget !== this && !$.contains(this, relatedTarget))) {
      return handler.apply(this, arguments);
    }
  };
}
(function() {
  function CustomEvent(event) {
    var params = arguments[1] !== (void 0) ? arguments[1] : {
      bubbles: false,
      cancelable: false,
      detail: undefined
    };
    var customEvent = document.createEvent('CustomEvent');
    customEvent.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return customEvent;
  }
  CustomEvent.prototype = global.CustomEvent && global.CustomEvent.prototype;
  global.CustomEvent = CustomEvent;
})();
var isEventBubblingInDetachedTree = (function() {
  var isBubbling = false,
      doc = global.document;
  if (doc) {
    var parent = doc.createElement('div'),
        child = parent.cloneNode();
    parent.appendChild(child);
    parent.addEventListener('e', function() {
      isBubbling = true;
    });
    child.dispatchEvent(new CustomEvent('e', {bubbles: true}));
  }
  return isBubbling;
})();
var bind = on,
    unbind = off;
;
module.exports = {
  on: on,
  off: off,
  delegate: delegate,
  undelegate: undelegate,
  trigger: trigger,
  triggerHandler: triggerHandler,
  bind: bind,
  unbind: unbind,
  __esModule: true
};


},{"./selector":16,"./util":19}],11:[function(_dereq_,module,exports){
"use strict";
var __moduleName = "src/html";
var each = _dereq_('./util').each;
function html(fragment) {
  if (typeof fragment !== 'string') {
    var element = this.nodeType ? this : this[0];
    return element ? element.innerHTML : undefined;
  }
  each(this, function(element) {
    element.innerHTML = fragment;
  });
  return this;
}
;
module.exports = {
  html: html,
  __esModule: true
};


},{"./util":19}],12:[function(_dereq_,module,exports){
"use strict";
var __moduleName = "src/index";
var $ = _dereq_('./api').default;
var $__default = $;
module.exports = {
  default: $__default,
  __esModule: true
};


},{"./api":1}],13:[function(_dereq_,module,exports){
"use strict";
var __moduleName = "src/mode";
var global = _dereq_('./util').global;
var isNative = false;
function native() {
  var goNative = arguments[0] !== (void 0) ? arguments[0] : true;
  var wasNative = isNative;
  isNative = goNative;
  if (global.$) {
    global.$.isNative = isNative;
  }
  if (!wasNative && isNative) {
    augmentNativePrototypes(this.fn, this.fnList);
  }
  if (wasNative && !isNative) {
    unaugmentNativePrototypes(this.fn, this.fnList);
  }
  return isNative;
}
var NodeProto = typeof Node !== 'undefined' && Node.prototype,
    NodeListProto = typeof NodeList !== 'undefined' && NodeList.prototype;
function augment(obj, key, value) {
  if (!obj.hasOwnProperty(key)) {
    Object.defineProperty(obj, key, {
      value: value,
      configurable: true,
      enumerable: false
    });
  }
}
var unaugment = (function(obj, key) {
  delete obj[key];
});
function augmentNativePrototypes(methodsNode, methodsNodeList) {
  var key;
  for (key in methodsNode) {
    augment(NodeProto, key, methodsNode[key]);
    augment(NodeListProto, key, methodsNode[key]);
  }
  for (key in methodsNodeList) {
    augment(NodeListProto, key, methodsNodeList[key]);
  }
}
function unaugmentNativePrototypes(methodsNode, methodsNodeList) {
  var key;
  for (key in methodsNode) {
    unaugment(NodeProto, key);
    unaugment(NodeListProto, key);
  }
  for (key in methodsNodeList) {
    unaugment(NodeListProto, key);
  }
}
;
module.exports = {
  isNative: isNative,
  native: native,
  __esModule: true
};


},{"./util":19}],14:[function(_dereq_,module,exports){
"use strict";
var __moduleName = "src/noconflict";
var global = _dereq_('./util').global;
var previousLib = global.$;
function noConflict() {
  global.$ = previousLib;
  return this;
}
;
module.exports = {
  noConflict: noConflict,
  __esModule: true
};


},{"./util":19}],15:[function(_dereq_,module,exports){
"use strict";
var __moduleName = "src/ready";
function ready(handler) {
  if (/complete|loaded|interactive/.test(document.readyState) && document.body) {
    handler();
  } else {
    document.addEventListener('DOMContentLoaded', handler, false);
  }
  return this;
}
;
module.exports = {
  ready: ready,
  __esModule: true
};


},{}],16:[function(_dereq_,module,exports){
"use strict";
var __moduleName = "src/selector";
var $__0 = _dereq_('./util'),
    global = $__0.global,
    makeIterable = $__0.makeIterable;
var slice = [].slice,
    isPrototypeSet = false,
    reFragment = /^\s*<(\w+|!)[^>]*>/,
    reSingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    reSimpleSelector = /^[\.#]?[\w-]*$/;
function $(selector) {
  var context = arguments[1] !== (void 0) ? arguments[1] : document;
  var collection;
  if (!selector) {
    collection = document.querySelectorAll(null);
  } else if (selector instanceof Wrapper) {
    return selector;
  } else if (typeof selector !== 'string') {
    collection = makeIterable(selector);
  } else if (reFragment.test(selector)) {
    collection = createFragment(selector);
  } else {
    context = typeof context === 'string' ? document.querySelector(context) : context.length ? context[0] : context;
    collection = querySelector(selector, context);
  }
  return $.isNative ? collection : wrap(collection);
}
function find(selector) {
  return $(selector, this);
}
function closest(selector, context) {
  var node = this[0];
  for (; node.nodeType !== node.DOCUMENT_NODE && node !== context; node = node.parentNode) {
    if (matches(node, selector)) {
      return $(node);
    }
  }
  return $();
}
var matches = (function() {
  var context = typeof Element !== 'undefined' ? Element.prototype : global,
      _matches = context.matches || context.matchesSelector || context.mozMatchesSelector || context.webkitMatchesSelector || context.msMatchesSelector || context.oMatchesSelector;
  return function(element, selector) {
    return _matches.call(element, selector);
  };
})();
function querySelector(selector, context) {
  var isSimpleSelector = reSimpleSelector.test(selector);
  if (isSimpleSelector && !$.isNative) {
    if (selector[0] === '#') {
      var element = (context.getElementById ? context : document).getElementById(selector.slice(1));
      return element ? [element] : [];
    }
    if (selector[0] === '.') {
      return context.getElementsByClassName(selector.slice(1));
    }
    return context.getElementsByTagName(selector);
  }
  return context.querySelectorAll(selector);
}
function createFragment(html) {
  if (reSingleTag.test(html)) {
    return [document.createElement(RegExp.$1)];
  }
  var elements = [],
      container = document.createElement('div'),
      children = container.childNodes;
  container.innerHTML = html;
  for (var i = 0,
      l = children.length; i < l; i++) {
    elements.push(children[i]);
  }
  return elements;
}
function wrap(collection) {
  if (!isPrototypeSet) {
    Wrapper.prototype = $.fn;
    Wrapper.prototype.constructor = Wrapper;
    isPrototypeSet = true;
  }
  return new Wrapper(collection);
}
function Wrapper(collection) {
  var i = 0,
      length = collection.length;
  for (; i < length; ) {
    this[i] = collection[i++];
  }
  this.length = length;
}
;
module.exports = {
  $: $,
  find: find,
  closest: closest,
  matches: matches,
  __esModule: true
};


},{"./util":19}],17:[function(_dereq_,module,exports){
"use strict";
var __moduleName = "src/selector_extra";
var $__0 = _dereq_('./util'),
    each = $__0.each,
    toArray = $__0.toArray;
var $__0 = _dereq_('./selector'),
    $ = $__0.$,
    matches = $__0.matches;
function children(selector) {
  var nodes = [];
  each(this, function(element) {
    if (element.children) {
      each(element.children, function(child) {
        if (!selector || (selector && matches(child, selector))) {
          nodes.push(child);
        }
      });
    }
  });
  return $(nodes);
}
function contents() {
  var nodes = [];
  each(this, function(element) {
    nodes.push.apply(nodes, toArray(element.childNodes));
  });
  return $(nodes);
}
function eq(index) {
  return slice.call(this, index, index + 1);
}
function get(index) {
  return this[index];
}
function parent(selector) {
  var nodes = [];
  each(this, function(element) {
    if (!selector || (selector && matches(element.parentNode, selector))) {
      nodes.push(element.parentNode);
    }
  });
  return $(nodes);
}
function slice(start, end) {
  return $([].slice.apply(this, arguments));
}
;
module.exports = {
  children: children,
  contents: contents,
  eq: eq,
  get: get,
  parent: parent,
  slice: slice,
  __esModule: true
};


},{"./selector":16,"./util":19}],18:[function(_dereq_,module,exports){
"use strict";
var __moduleName = "src/type";
function isFunction(obj) {
  return (typeof obj === 'function');
}
var isArray = Array.isArray;
;
module.exports = {
  isFunction: isFunction,
  isArray: isArray,
  __esModule: true
};


},{}],19:[function(_dereq_,module,exports){
"use strict";
var __moduleName = "src/util";
var global = new Function("return this")(),
    slice = Array.prototype.slice;
var toArray = (function(collection) {
  return slice.call(collection);
});
var makeIterable = (function(element) {
  return element.nodeType || element === window ? [element] : element;
});
function each(collection, callback, thisArg) {
  var length = collection.length;
  if (length !== undefined && collection.nodeType === undefined) {
    for (var i = 0; i < length; i++) {
      callback.call(thisArg, collection[i], i, collection);
    }
  } else {
    callback.call(thisArg, collection, 0, collection);
  }
  return collection;
}
function extend(target) {
  for (var sources = [],
      $__0 = 1; $__0 < arguments.length; $__0++)
    sources[$__0 - 1] = arguments[$__0];
  sources.forEach(function(src) {
    if (src) {
      for (var prop in src) {
        target[prop] = src[prop];
      }
    }
  });
  return target;
}
;
module.exports = {
  global: global,
  toArray: toArray,
  makeIterable: makeIterable,
  each: each,
  extend: extend,
  __esModule: true
};


},{}]},{},[12])
(12)
});
}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(require,module,exports){
var events  = require('./modules/events')
,   obj     = require('./modules/obj')
,   content = require('./modules/content');

content.init();
obj.init();
events();


},{"./modules/content":3,"./modules/events":4,"./modules/obj":5}],3:[function(require,module,exports){
'use strict';

var $ = require('domtastic/bundle/full/domtastic');

var content = {


};

module.exports = content;

},{"domtastic/bundle/full/domtastic":1}],4:[function(require,module,exports){
'use strict';

var $       = require('domtastic/bundle/full/domtastic');

var events = function() {


};

module.exports = events;

},{"domtastic/bundle/full/domtastic":1}],5:[function(require,module,exports){
'use strict';

var objTemplate = require('./template');

var body   = document.getElementsByTagName('body')[ 0 ]
,   head   = document.getElementsByTagName('head')[ 0 ]
,   cssLoc = 'https://seethroughtrees.github.io/smartling-tags-checker/index.css';


var obj = {

  init: function() {
    this.createObj();
  },

  createObj: function() {
    var div = document.createElement('div');
    div.setAttribute('id', 'smart-obj');
    div.innerHTML = objTemplate;
    this.style(div);
  },

  style: function(div) {
    var link = document.createElement('link');
    link.setAttribute('rel','stylesheet');
    link.setAttribute('href', cssLoc);
    link.setAttribute('type','text/css');
    head.appendChild(link);
    this.append(div);
  },

  append: function(div) {
    body.appendChild(div);
  }

};

module.exports = obj;

},{"./template":6}],6:[function(require,module,exports){
'use strict';

// set objTemplate
var objTemplate = '<ul id="smartling-nav">';
    objTemplate += '<li id="nice-title" data-text="NICE" title="Go To Homepage">Yuuuup</li>';
    objTemplate += '</ul>';

module.exports = objTemplate;

},{}]},{},[2])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGFtbC9TaXRlcy9zbWFydGxpbmctdGFncy1jaGVja2VyL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYWRhbWwvU2l0ZXMvc21hcnRsaW5nLXRhZ3MtY2hlY2tlci9ub2RlX21vZHVsZXMvZG9tdGFzdGljL2J1bmRsZS9mdWxsL2RvbXRhc3RpYy5qcyIsIi9Vc2Vycy9hZGFtbC9TaXRlcy9zbWFydGxpbmctdGFncy1jaGVja2VyL3NyYy9qcy9pbmRleC5qcyIsIi9Vc2Vycy9hZGFtbC9TaXRlcy9zbWFydGxpbmctdGFncy1jaGVja2VyL3NyYy9qcy9tb2R1bGVzL2NvbnRlbnQuanMiLCIvVXNlcnMvYWRhbWwvU2l0ZXMvc21hcnRsaW5nLXRhZ3MtY2hlY2tlci9zcmMvanMvbW9kdWxlcy9ldmVudHMuanMiLCIvVXNlcnMvYWRhbWwvU2l0ZXMvc21hcnRsaW5nLXRhZ3MtY2hlY2tlci9zcmMvanMvbW9kdWxlcy9vYmouanMiLCIvVXNlcnMvYWRhbWwvU2l0ZXMvc21hcnRsaW5nLXRhZ3MtY2hlY2tlci9zcmMvanMvbW9kdWxlcy90ZW1wbGF0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcGlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIihmdW5jdGlvbiAoZ2xvYmFsKXtcbiFmdW5jdGlvbihfZSl7dmFyIGU9ZnVuY3Rpb24oKXtyZXR1cm4gX2UoKVtcImRlZmF1bHRcIl19O2lmKFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlKW1vZHVsZS5leHBvcnRzPWUoKTtlbHNlIGlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZClkZWZpbmUoW10sZSk7ZWxzZXt2YXIgZjtcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P2Y9d2luZG93OlwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWw/Zj1nbG9iYWw6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGYmJihmPXNlbGYpLGYuJD1lKCl9fShmdW5jdGlvbigpe3ZhciBkZWZpbmUsbW9kdWxlLGV4cG9ydHM7cmV0dXJuIChmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pKHsxOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xudmFyIF9fbW9kdWxlTmFtZSA9IFwic3JjL2FwaVwiO1xudmFyIGV4dGVuZCA9IF9kZXJlcV8oJy4vdXRpbCcpLmV4dGVuZDtcbnZhciBhcGkgPSB7fSxcbiAgICBhcGlOb2RlTGlzdCA9IHt9LFxuICAgICQgPSB7fTtcbnZhciBhcnJheSA9IF9kZXJlcV8oJy4vYXJyYXknKTtcbnZhciBhdHRyID0gX2RlcmVxXygnLi9hdHRyJyk7XG52YXIgY2xhc3NfID0gX2RlcmVxXygnLi9jbGFzcycpO1xudmFyIGNvbnRhaW5zID0gX2RlcmVxXygnLi9jb250YWlucycpO1xudmFyIGNzcyA9IF9kZXJlcV8oJy4vY3NzJyk7XG52YXIgZGF0YSA9IF9kZXJlcV8oJy4vZGF0YScpO1xudmFyIGRvbSA9IF9kZXJlcV8oJy4vZG9tJyk7XG52YXIgZG9tX2V4dHJhID0gX2RlcmVxXygnLi9kb21fZXh0cmEnKTtcbnZhciBldmVudCA9IF9kZXJlcV8oJy4vZXZlbnQnKTtcbnZhciBodG1sID0gX2RlcmVxXygnLi9odG1sJyk7XG52YXIgbW9kZSA9IF9kZXJlcV8oJy4vbW9kZScpO1xudmFyIG5vY29uZmxpY3QgPSBfZGVyZXFfKCcuL25vY29uZmxpY3QnKTtcbnZhciByZWFkeSA9IF9kZXJlcV8oJy4vcmVhZHknKTtcbnZhciBzZWxlY3RvciA9IF9kZXJlcV8oJy4vc2VsZWN0b3InKTtcbnZhciBzZWxlY3Rvcl9leHRyYSA9IF9kZXJlcV8oJy4vc2VsZWN0b3JfZXh0cmEnKTtcbnZhciB0eXBlID0gX2RlcmVxXygnLi90eXBlJyk7XG5pZiAodHlwZW9mIHNlbGVjdG9yICE9PSAndW5kZWZpbmVkJykge1xuICAkID0gc2VsZWN0b3IuJDtcbiAgJC5tYXRjaGVzID0gc2VsZWN0b3IubWF0Y2hlcztcbiAgYXBpLmZpbmQgPSBzZWxlY3Rvci5maW5kO1xuICBhcGkuY2xvc2VzdCA9IHNlbGVjdG9yLmNsb3Nlc3Q7XG59XG5leHRlbmQoJCwgY29udGFpbnMsIG1vZGUsIG5vY29uZmxpY3QsIHR5cGUpO1xuZXh0ZW5kKGFwaSwgYXJyYXksIGF0dHIsIGNsYXNzXywgY3NzLCBkYXRhLCBkb20sIGRvbV9leHRyYSwgZXZlbnQsIGh0bWwsIHJlYWR5LCBzZWxlY3Rvcl9leHRyYSk7XG5leHRlbmQoYXBpTm9kZUxpc3QsIGFycmF5KTtcbiQudmVyc2lvbiA9ICcwLjcuNSc7XG4kLmV4dGVuZCA9IGV4dGVuZDtcbiQuZm4gPSBhcGk7XG4kLmZuTGlzdCA9IGFwaU5vZGVMaXN0O1xudmFyICRfX2RlZmF1bHQgPSAkO1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGRlZmF1bHQ6ICRfX2RlZmF1bHQsXG4gIF9fZXNNb2R1bGU6IHRydWVcbn07XG5cblxufSx7XCIuL2FycmF5XCI6MixcIi4vYXR0clwiOjMsXCIuL2NsYXNzXCI6NCxcIi4vY29udGFpbnNcIjo1LFwiLi9jc3NcIjo2LFwiLi9kYXRhXCI6NyxcIi4vZG9tXCI6OCxcIi4vZG9tX2V4dHJhXCI6OSxcIi4vZXZlbnRcIjoxMCxcIi4vaHRtbFwiOjExLFwiLi9tb2RlXCI6MTMsXCIuL25vY29uZmxpY3RcIjoxNCxcIi4vcmVhZHlcIjoxNSxcIi4vc2VsZWN0b3JcIjoxNixcIi4vc2VsZWN0b3JfZXh0cmFcIjoxNyxcIi4vdHlwZVwiOjE4LFwiLi91dGlsXCI6MTl9XSwyOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xudmFyIF9fbW9kdWxlTmFtZSA9IFwic3JjL2FycmF5XCI7XG52YXIgX2VhY2ggPSBfZGVyZXFfKCcuL3V0aWwnKS5lYWNoO1xudmFyICRfXzAgPSBfZGVyZXFfKCcuL3NlbGVjdG9yJyksXG4gICAgJCA9ICRfXzAuJCxcbiAgICBtYXRjaGVzID0gJF9fMC5tYXRjaGVzO1xudmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG52YXIgZXZlcnkgPSBBcnJheVByb3RvLmV2ZXJ5O1xuZnVuY3Rpb24gZmlsdGVyKHNlbGVjdG9yLCB0aGlzQXJnKSB7XG4gIHZhciBjYWxsYmFjayA9IHR5cGVvZiBzZWxlY3RvciA9PT0gJ2Z1bmN0aW9uJyA/IHNlbGVjdG9yIDogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgIHJldHVybiBtYXRjaGVzKGVsZW1lbnQsIHNlbGVjdG9yKTtcbiAgfTtcbiAgcmV0dXJuICQoQXJyYXlQcm90by5maWx0ZXIuY2FsbCh0aGlzLCBjYWxsYmFjaywgdGhpc0FyZykpO1xufVxuZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFjaywgdGhpc0FyZykge1xuICByZXR1cm4gX2VhY2godGhpcywgY2FsbGJhY2ssIHRoaXNBcmcpO1xufVxudmFyIGVhY2ggPSBmb3JFYWNoO1xudmFyIGluZGV4T2YgPSBBcnJheVByb3RvLmluZGV4T2Y7XG52YXIgbWFwID0gQXJyYXlQcm90by5tYXA7XG52YXIgcG9wID0gQXJyYXlQcm90by5wb3A7XG52YXIgcHVzaCA9IEFycmF5UHJvdG8ucHVzaDtcbmZ1bmN0aW9uIHJldmVyc2UoKSB7XG4gIHZhciBlbGVtZW50cyA9IEFycmF5UHJvdG8uc2xpY2UuY2FsbCh0aGlzKTtcbiAgcmV0dXJuICQoQXJyYXlQcm90by5yZXZlcnNlLmNhbGwoZWxlbWVudHMpKTtcbn1cbnZhciBzaGlmdCA9IEFycmF5UHJvdG8uc2hpZnQ7XG52YXIgc29tZSA9IEFycmF5UHJvdG8uc29tZTtcbnZhciB1bnNoaWZ0ID0gQXJyYXlQcm90by51bnNoaWZ0O1xuO1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGVhY2g6IGVhY2gsXG4gIGV2ZXJ5OiBldmVyeSxcbiAgZmlsdGVyOiBmaWx0ZXIsXG4gIGZvckVhY2g6IGZvckVhY2gsXG4gIGluZGV4T2Y6IGluZGV4T2YsXG4gIG1hcDogbWFwLFxuICBwb3A6IHBvcCxcbiAgcHVzaDogcHVzaCxcbiAgcmV2ZXJzZTogcmV2ZXJzZSxcbiAgc2hpZnQ6IHNoaWZ0LFxuICBzb21lOiBzb21lLFxuICB1bnNoaWZ0OiB1bnNoaWZ0LFxuICBfX2VzTW9kdWxlOiB0cnVlXG59O1xuXG5cbn0se1wiLi9zZWxlY3RvclwiOjE2LFwiLi91dGlsXCI6MTl9XSwzOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xudmFyIF9fbW9kdWxlTmFtZSA9IFwic3JjL2F0dHJcIjtcbnZhciBlYWNoID0gX2RlcmVxXygnLi91dGlsJykuZWFjaDtcbmZ1bmN0aW9uIGF0dHIoa2V5LCB2YWx1ZSkge1xuICBpZiAodHlwZW9mIGtleSA9PT0gJ3N0cmluZycgJiYgdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBlbGVtZW50ID0gdGhpcy5ub2RlVHlwZSA/IHRoaXMgOiB0aGlzWzBdO1xuICAgIHJldHVybiBlbGVtZW50ID8gZWxlbWVudC5nZXRBdHRyaWJ1dGUoa2V5KSA6IHVuZGVmaW5lZDtcbiAgfVxuICBlYWNoKHRoaXMsIGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICBpZiAodHlwZW9mIGtleSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGZvciAodmFyIGF0dHIgaW4ga2V5KSB7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIGtleVthdHRyXSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiB0aGlzO1xufVxuZnVuY3Rpb24gcmVtb3ZlQXR0cihrZXkpIHtcbiAgZWFjaCh0aGlzLCBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoa2V5KTtcbiAgfSk7XG4gIHJldHVybiB0aGlzO1xufVxuO1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGF0dHI6IGF0dHIsXG4gIHJlbW92ZUF0dHI6IHJlbW92ZUF0dHIsXG4gIF9fZXNNb2R1bGU6IHRydWVcbn07XG5cblxufSx7XCIuL3V0aWxcIjoxOX1dLDQ6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19tb2R1bGVOYW1lID0gXCJzcmMvY2xhc3NcIjtcbnZhciAkX18wID0gX2RlcmVxXygnLi91dGlsJyksXG4gICAgbWFrZUl0ZXJhYmxlID0gJF9fMC5tYWtlSXRlcmFibGUsXG4gICAgZWFjaCA9ICRfXzAuZWFjaDtcbmZ1bmN0aW9uIGFkZENsYXNzKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSAmJiB2YWx1ZS5sZW5ndGgpIHtcbiAgICBlYWNoKHZhbHVlLnNwbGl0KCcgJyksIGZ1bmN0aW9uKGNsYXNzTmFtZSkge1xuICAgICAgZWFjaCh0aGlzLCBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgICAgfSk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cbmZ1bmN0aW9uIHJlbW92ZUNsYXNzKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSAmJiB2YWx1ZS5sZW5ndGgpIHtcbiAgICBlYWNoKHZhbHVlLnNwbGl0KCcgJyksIGZ1bmN0aW9uKGNsYXNzTmFtZSkge1xuICAgICAgZWFjaCh0aGlzLCBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgICAgfSk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cbmZ1bmN0aW9uIHRvZ2dsZUNsYXNzKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSAmJiB2YWx1ZS5sZW5ndGgpIHtcbiAgICBlYWNoKHZhbHVlLnNwbGl0KCcgJyksIGZ1bmN0aW9uKGNsYXNzTmFtZSkge1xuICAgICAgZWFjaCh0aGlzLCBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUpO1xuICAgICAgfSk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cbmZ1bmN0aW9uIGhhc0NsYXNzKHZhbHVlKSB7XG4gIHJldHVybiBtYWtlSXRlcmFibGUodGhpcykuc29tZShmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKHZhbHVlKTtcbiAgfSk7XG59XG47XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgYWRkQ2xhc3M6IGFkZENsYXNzLFxuICByZW1vdmVDbGFzczogcmVtb3ZlQ2xhc3MsXG4gIHRvZ2dsZUNsYXNzOiB0b2dnbGVDbGFzcyxcbiAgaGFzQ2xhc3M6IGhhc0NsYXNzLFxuICBfX2VzTW9kdWxlOiB0cnVlXG59O1xuXG5cbn0se1wiLi91dGlsXCI6MTl9XSw1OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xudmFyIF9fbW9kdWxlTmFtZSA9IFwic3JjL2NvbnRhaW5zXCI7XG5mdW5jdGlvbiBjb250YWlucyhjb250YWluZXIsIGVsZW1lbnQpIHtcbiAgaWYgKCFjb250YWluZXIgfHwgIWVsZW1lbnQgfHwgY29udGFpbmVyID09PSBlbGVtZW50KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IGVsc2UgaWYgKGNvbnRhaW5lci5jb250YWlucykge1xuICAgIHJldHVybiBjb250YWluZXIuY29udGFpbnMoZWxlbWVudCk7XG4gIH0gZWxzZSBpZiAoY29udGFpbmVyLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKSB7XG4gICAgcmV0dXJuICEoY29udGFpbmVyLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGVsZW1lbnQpICYgTm9kZS5ET0NVTUVOVF9QT1NJVElPTl9ESVNDT05ORUNURUQpO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cbjtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBjb250YWluczogY29udGFpbnMsXG4gIF9fZXNNb2R1bGU6IHRydWVcbn07XG5cblxufSx7fV0sNjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcbnZhciBfX21vZHVsZU5hbWUgPSBcInNyYy9jc3NcIjtcbnZhciBlYWNoID0gX2RlcmVxXygnLi91dGlsJykuZWFjaDtcbmZ1bmN0aW9uIGlzTnVtZXJpYyh2YWx1ZSkge1xuICByZXR1cm4gIWlzTmFOKHBhcnNlRmxvYXQodmFsdWUpKSAmJiBpc0Zpbml0ZSh2YWx1ZSk7XG59XG5mdW5jdGlvbiBjYW1lbGl6ZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUucmVwbGFjZSgvLShbXFxkYS16XSkvZ2ksIGZ1bmN0aW9uKG1hdGNoZXMsIGxldHRlcikge1xuICAgIHJldHVybiBsZXR0ZXIudG9VcHBlckNhc2UoKTtcbiAgfSk7XG59XG5mdW5jdGlvbiBkYXNoZXJpemUodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoLyhbYS16XFxkXSkoW0EtWl0pL2csICckMS0kMicpLnRvTG93ZXJDYXNlKCk7XG59XG5mdW5jdGlvbiBjc3Moa2V5LCB2YWx1ZSkge1xuICB2YXIgc3R5bGVQcm9wcyxcbiAgICAgIHByb3AsXG4gICAgICB2YWw7XG4gIGlmICh0eXBlb2Yga2V5ID09PSAnc3RyaW5nJykge1xuICAgIGtleSA9IGNhbWVsaXplKGtleSk7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5ub2RlVHlwZSA/IHRoaXMgOiB0aGlzWzBdO1xuICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgdmFsID0gZWxlbWVudC5zdHlsZVtrZXldO1xuICAgICAgICByZXR1cm4gaXNOdW1lcmljKHZhbCkgPyBwYXJzZUZsb2F0KHZhbCkgfHwgMCA6IHZhbDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHN0eWxlUHJvcHMgPSB7fTtcbiAgICBzdHlsZVByb3BzW2tleV0gPSB2YWx1ZTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZVByb3BzID0ga2V5O1xuICAgIGZvciAocHJvcCBpbiBzdHlsZVByb3BzKSB7XG4gICAgICB2YWwgPSBzdHlsZVByb3BzW3Byb3BdO1xuICAgICAgZGVsZXRlIHN0eWxlUHJvcHNbcHJvcF07XG4gICAgICBzdHlsZVByb3BzW2NhbWVsaXplKHByb3ApXSA9IHZhbDtcbiAgICB9XG4gIH1cbiAgZWFjaCh0aGlzLCBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgZm9yIChwcm9wIGluIHN0eWxlUHJvcHMpIHtcbiAgICAgIGlmIChzdHlsZVByb3BzW3Byb3BdIHx8IHN0eWxlUHJvcHNbcHJvcF0gPT09IDApIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZVtwcm9wXSA9IHN0eWxlUHJvcHNbcHJvcF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KGRhc2hlcml6ZShwcm9wKSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHRoaXM7XG59XG47XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY3NzOiBjc3MsXG4gIF9fZXNNb2R1bGU6IHRydWVcbn07XG5cblxufSx7XCIuL3V0aWxcIjoxOX1dLDc6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19tb2R1bGVOYW1lID0gXCJzcmMvZGF0YVwiO1xudmFyIGVhY2ggPSBfZGVyZXFfKCcuL3V0aWwnKS5lYWNoO1xudmFyIGRhdGFLZXlQcm9wID0gJ19fZG9tdGFzdGljX2RhdGFfXyc7XG5mdW5jdGlvbiBkYXRhKGtleSwgdmFsdWUpIHtcbiAgaWYgKHR5cGVvZiBrZXkgPT09ICdzdHJpbmcnICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgZWxlbWVudCA9IHRoaXMubm9kZVR5cGUgPyB0aGlzIDogdGhpc1swXTtcbiAgICByZXR1cm4gZWxlbWVudCAmJiBlbGVtZW50W2RhdGFLZXlQcm9wXSA/IGVsZW1lbnRbZGF0YUtleVByb3BdW2tleV0gOiB1bmRlZmluZWQ7XG4gIH1cbiAgZWFjaCh0aGlzLCBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgZWxlbWVudFtkYXRhS2V5UHJvcF0gPSBlbGVtZW50W2RhdGFLZXlQcm9wXSB8fCB7fTtcbiAgICBlbGVtZW50W2RhdGFLZXlQcm9wXVtrZXldID0gdmFsdWU7XG4gIH0pO1xuICByZXR1cm4gdGhpcztcbn1cbmZ1bmN0aW9uIHByb3Aoa2V5LCB2YWx1ZSkge1xuICBpZiAodHlwZW9mIGtleSA9PT0gJ3N0cmluZycgJiYgdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBlbGVtZW50ID0gdGhpcy5ub2RlVHlwZSA/IHRoaXMgOiB0aGlzWzBdO1xuICAgIHJldHVybiBlbGVtZW50ICYmIGVsZW1lbnQgPyBlbGVtZW50W2tleV0gOiB1bmRlZmluZWQ7XG4gIH1cbiAgZWFjaCh0aGlzLCBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgZWxlbWVudFtrZXldID0gdmFsdWU7XG4gIH0pO1xuICByZXR1cm4gdGhpcztcbn1cbjtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBkYXRhOiBkYXRhLFxuICBwcm9wOiBwcm9wLFxuICBfX2VzTW9kdWxlOiB0cnVlXG59O1xuXG5cbn0se1wiLi91dGlsXCI6MTl9XSw4OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xudmFyIF9fbW9kdWxlTmFtZSA9IFwic3JjL2RvbVwiO1xudmFyIHRvQXJyYXkgPSBfZGVyZXFfKCcuL3V0aWwnKS50b0FycmF5O1xuZnVuY3Rpb24gYXBwZW5kKGVsZW1lbnQpIHtcbiAgaWYgKHRoaXMgaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgICAgdGhpcy5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBlbGVtZW50cyA9IGVsZW1lbnQgaW5zdGFuY2VvZiBOb2RlTGlzdCA/IHRvQXJyYXkoZWxlbWVudCkgOiBlbGVtZW50O1xuICAgICAgICBlbGVtZW50cy5mb3JFYWNoKHRoaXMuYXBwZW5kQ2hpbGQuYmluZCh0aGlzKSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBsID0gdGhpcy5sZW5ndGg7XG4gICAgd2hpbGUgKGwtLSkge1xuICAgICAgdmFyIGVsbSA9IGwgPT09IDAgPyBlbGVtZW50IDogX2Nsb25lKGVsZW1lbnQpO1xuICAgICAgYXBwZW5kLmNhbGwodGhpc1tsXSwgZWxtKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5mdW5jdGlvbiBwcmVwZW5kKGVsZW1lbnQpIHtcbiAgaWYgKHRoaXMgaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBlbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgICAgIHRoaXMuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsIHRoaXMuZmlyc3RDaGlsZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgZWxlbWVudHMgPSBlbGVtZW50IGluc3RhbmNlb2YgTm9kZUxpc3QgPyB0b0FycmF5KGVsZW1lbnQpIDogZWxlbWVudDtcbiAgICAgICAgZWxlbWVudHMucmV2ZXJzZSgpLmZvckVhY2gocHJlcGVuZC5iaW5kKHRoaXMpKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGwgPSB0aGlzLmxlbmd0aDtcbiAgICB3aGlsZSAobC0tKSB7XG4gICAgICB2YXIgZWxtID0gbCA9PT0gMCA/IGVsZW1lbnQgOiBfY2xvbmUoZWxlbWVudCk7XG4gICAgICBwcmVwZW5kLmNhbGwodGhpc1tsXSwgZWxtKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5mdW5jdGlvbiBiZWZvcmUoZWxlbWVudCkge1xuICBpZiAodGhpcyBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlYmVnaW4nLCBlbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgICAgIHRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCwgdGhpcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgZWxlbWVudHMgPSBlbGVtZW50IGluc3RhbmNlb2YgTm9kZUxpc3QgPyB0b0FycmF5KGVsZW1lbnQpIDogZWxlbWVudDtcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaChiZWZvcmUuYmluZCh0aGlzKSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBsID0gdGhpcy5sZW5ndGg7XG4gICAgd2hpbGUgKGwtLSkge1xuICAgICAgdmFyIGVsbSA9IGwgPT09IDAgPyBlbGVtZW50IDogX2Nsb25lKGVsZW1lbnQpO1xuICAgICAgYmVmb3JlLmNhbGwodGhpc1tsXSwgZWxtKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5mdW5jdGlvbiBhZnRlcihlbGVtZW50KSB7XG4gIGlmICh0aGlzIGluc3RhbmNlb2YgTm9kZSkge1xuICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmVuZCcsIGVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgICAgdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LCB0aGlzLm5leHRTaWJsaW5nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBlbGVtZW50cyA9IGVsZW1lbnQgaW5zdGFuY2VvZiBOb2RlTGlzdCA/IHRvQXJyYXkoZWxlbWVudCkgOiBlbGVtZW50O1xuICAgICAgICBlbGVtZW50cy5yZXZlcnNlKCkuZm9yRWFjaChhZnRlci5iaW5kKHRoaXMpKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGwgPSB0aGlzLmxlbmd0aDtcbiAgICB3aGlsZSAobC0tKSB7XG4gICAgICB2YXIgZWxtID0gbCA9PT0gMCA/IGVsZW1lbnQgOiBfY2xvbmUoZWxlbWVudCk7XG4gICAgICBhZnRlci5jYWxsKHRoaXNbbF0sIGVsbSk7XG4gICAgfVxuICB9XG4gIHJldHVybiB0aGlzO1xufVxuZnVuY3Rpb24gY2xvbmUoKSB7XG4gIHJldHVybiAkKF9jbG9uZSh0aGlzKSk7XG59XG5mdW5jdGlvbiBfY2xvbmUoZWxlbWVudCkge1xuICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH0gZWxzZSBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICByZXR1cm4gZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gIH0gZWxzZSBpZiAoJ2xlbmd0aCcgaW4gZWxlbWVudCkge1xuICAgIHJldHVybiBbXS5tYXAuY2FsbChlbGVtZW50LCBmdW5jdGlvbihlbCkge1xuICAgICAgcmV0dXJuIGVsLmNsb25lTm9kZSh0cnVlKTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gZWxlbWVudDtcbn1cbjtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBhcHBlbmQ6IGFwcGVuZCxcbiAgcHJlcGVuZDogcHJlcGVuZCxcbiAgYmVmb3JlOiBiZWZvcmUsXG4gIGFmdGVyOiBhZnRlcixcbiAgY2xvbmU6IGNsb25lLFxuICBfX2VzTW9kdWxlOiB0cnVlXG59O1xuXG5cbn0se1wiLi91dGlsXCI6MTl9XSw5OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xudmFyIF9fbW9kdWxlTmFtZSA9IFwic3JjL2RvbV9leHRyYVwiO1xudmFyIGVhY2ggPSBfZGVyZXFfKCcuL3V0aWwnKS5lYWNoO1xudmFyICRfXzAgPSBfZGVyZXFfKCcuL2RvbScpLFxuICAgIGFwcGVuZCA9ICRfXzAuYXBwZW5kLFxuICAgIGJlZm9yZSA9ICRfXzAuYmVmb3JlLFxuICAgIGFmdGVyID0gJF9fMC5hZnRlcjtcbnZhciAkID0gX2RlcmVxXygnLi9zZWxlY3RvcicpLiQ7XG5mdW5jdGlvbiBhcHBlbmRUbyhlbGVtZW50KSB7XG4gIHZhciBjb250ZXh0ID0gdHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnID8gJChlbGVtZW50KSA6IGVsZW1lbnQ7XG4gIGFwcGVuZC5jYWxsKGNvbnRleHQsIHRoaXMpO1xuICByZXR1cm4gdGhpcztcbn1cbmZ1bmN0aW9uIGVtcHR5KCkge1xuICByZXR1cm4gZWFjaCh0aGlzLCBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgfSk7XG59XG5mdW5jdGlvbiByZW1vdmUoKSB7XG4gIHJldHVybiBlYWNoKHRoaXMsIGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgICBlbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG4gICAgfVxuICB9KTtcbn1cbmZ1bmN0aW9uIHJlcGxhY2VXaXRoKCkge1xuICByZXR1cm4gYmVmb3JlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykucmVtb3ZlKCk7XG59XG5mdW5jdGlvbiB0ZXh0KHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHRoaXNbMF0udGV4dENvbnRlbnQ7XG4gIH1cbiAgZWFjaCh0aGlzLCBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9ICcnICsgdmFsdWU7XG4gIH0pO1xuICByZXR1cm4gdGhpcztcbn1cbmZ1bmN0aW9uIHZhbCh2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB0aGlzWzBdLnZhbHVlO1xuICB9XG4gIGVhY2godGhpcywgZnVuY3Rpb24oZWxlbWVudCkge1xuICAgIGVsZW1lbnQudmFsdWUgPSB2YWx1ZTtcbiAgfSk7XG4gIHJldHVybiB0aGlzO1xufVxuO1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGFwcGVuZFRvOiBhcHBlbmRUbyxcbiAgZW1wdHk6IGVtcHR5LFxuICByZW1vdmU6IHJlbW92ZSxcbiAgcmVwbGFjZVdpdGg6IHJlcGxhY2VXaXRoLFxuICB0ZXh0OiB0ZXh0LFxuICB2YWw6IHZhbCxcbiAgX19lc01vZHVsZTogdHJ1ZVxufTtcblxuXG59LHtcIi4vZG9tXCI6OCxcIi4vc2VsZWN0b3JcIjoxNixcIi4vdXRpbFwiOjE5fV0sMTA6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19tb2R1bGVOYW1lID0gXCJzcmMvZXZlbnRcIjtcbnZhciAkX18wID0gX2RlcmVxXygnLi91dGlsJyksXG4gICAgZ2xvYmFsID0gJF9fMC5nbG9iYWwsXG4gICAgZWFjaCA9ICRfXzAuZWFjaDtcbnZhciBjbG9zZXN0ID0gX2RlcmVxXygnLi9zZWxlY3RvcicpLmNsb3Nlc3Q7XG5mdW5jdGlvbiBvbihldmVudE5hbWVzLCBzZWxlY3RvciwgaGFuZGxlciwgdXNlQ2FwdHVyZSkge1xuICBpZiAodHlwZW9mIHNlbGVjdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgaGFuZGxlciA9IHNlbGVjdG9yO1xuICAgIHNlbGVjdG9yID0gbnVsbDtcbiAgfVxuICB2YXIgcGFydHMsXG4gICAgICBuYW1lc3BhY2UsXG4gICAgICBldmVudExpc3RlbmVyO1xuICBldmVudE5hbWVzLnNwbGl0KCcgJykuZm9yRWFjaChmdW5jdGlvbihldmVudE5hbWUpIHtcbiAgICBwYXJ0cyA9IGV2ZW50TmFtZS5zcGxpdCgnLicpO1xuICAgIGV2ZW50TmFtZSA9IHBhcnRzWzBdIHx8IG51bGw7XG4gICAgbmFtZXNwYWNlID0gcGFydHNbMV0gfHwgbnVsbDtcbiAgICBldmVudExpc3RlbmVyID0gcHJveHlIYW5kbGVyKGhhbmRsZXIpO1xuICAgIGVhY2godGhpcywgZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgaWYgKHNlbGVjdG9yICYmIGV2ZW50TmFtZSBpbiBob3ZlckV2ZW50cykge1xuICAgICAgICBldmVudExpc3RlbmVyID0gaG92ZXJIYW5kbGVyKGV2ZW50TGlzdGVuZXIpO1xuICAgICAgfVxuICAgICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICAgIGV2ZW50TGlzdGVuZXIgPSBkZWxlZ2F0ZUhhbmRsZXIuYmluZChlbGVtZW50LCBzZWxlY3RvciwgZXZlbnRMaXN0ZW5lcik7XG4gICAgICB9XG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoaG92ZXJFdmVudHNbZXZlbnROYW1lXSB8fCBldmVudE5hbWUsIGV2ZW50TGlzdGVuZXIsIHVzZUNhcHR1cmUgfHwgZmFsc2UpO1xuICAgICAgZ2V0SGFuZGxlcnMoZWxlbWVudCkucHVzaCh7XG4gICAgICAgIGV2ZW50TmFtZTogZXZlbnROYW1lLFxuICAgICAgICBoYW5kbGVyOiBoYW5kbGVyLFxuICAgICAgICBldmVudExpc3RlbmVyOiBldmVudExpc3RlbmVyLFxuICAgICAgICBzZWxlY3Rvcjogc2VsZWN0b3IsXG4gICAgICAgIG5hbWVzcGFjZTogbmFtZXNwYWNlXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSwgdGhpcyk7XG4gIHJldHVybiB0aGlzO1xufVxuZnVuY3Rpb24gb2ZmKCkge1xuICB2YXIgZXZlbnROYW1lcyA9IGFyZ3VtZW50c1swXSAhPT0gKHZvaWQgMCkgPyBhcmd1bWVudHNbMF0gOiAnJztcbiAgdmFyIHNlbGVjdG9yID0gYXJndW1lbnRzWzFdO1xuICB2YXIgaGFuZGxlciA9IGFyZ3VtZW50c1syXTtcbiAgdmFyIHVzZUNhcHR1cmUgPSBhcmd1bWVudHNbM107XG4gIGlmICh0eXBlb2Ygc2VsZWN0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICBoYW5kbGVyID0gc2VsZWN0b3I7XG4gICAgc2VsZWN0b3IgPSBudWxsO1xuICB9XG4gIHZhciBwYXJ0cyxcbiAgICAgIG5hbWVzcGFjZSxcbiAgICAgIGhhbmRsZXJzO1xuICBldmVudE5hbWVzLnNwbGl0KCcgJykuZm9yRWFjaChmdW5jdGlvbihldmVudE5hbWUpIHtcbiAgICBwYXJ0cyA9IGV2ZW50TmFtZS5zcGxpdCgnLicpO1xuICAgIGV2ZW50TmFtZSA9IHBhcnRzWzBdIHx8IG51bGw7XG4gICAgbmFtZXNwYWNlID0gcGFydHNbMV0gfHwgbnVsbDtcbiAgICBlYWNoKHRoaXMsIGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgIGhhbmRsZXJzID0gZ2V0SGFuZGxlcnMoZWxlbWVudCk7XG4gICAgICBlYWNoKGhhbmRsZXJzLmZpbHRlcihmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIHJldHVybiAoKCFldmVudE5hbWUgfHwgaXRlbS5ldmVudE5hbWUgPT09IGV2ZW50TmFtZSkgJiYgKCFuYW1lc3BhY2UgfHwgaXRlbS5uYW1lc3BhY2UgPT09IG5hbWVzcGFjZSkgJiYgKCFoYW5kbGVyIHx8IGl0ZW0uaGFuZGxlciA9PT0gaGFuZGxlcikgJiYgKCFzZWxlY3RvciB8fCBpdGVtLnNlbGVjdG9yID09PSBzZWxlY3RvcikpO1xuICAgICAgfSksIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGhvdmVyRXZlbnRzW2l0ZW0uZXZlbnROYW1lXSB8fCBpdGVtLmV2ZW50TmFtZSwgaXRlbS5ldmVudExpc3RlbmVyLCB1c2VDYXB0dXJlIHx8IGZhbHNlKTtcbiAgICAgICAgaGFuZGxlcnMuc3BsaWNlKGhhbmRsZXJzLmluZGV4T2YoaXRlbSksIDEpO1xuICAgICAgfSk7XG4gICAgICBpZiAoIWV2ZW50TmFtZSAmJiAhbmFtZXNwYWNlICYmICFzZWxlY3RvciAmJiAhaGFuZGxlcikge1xuICAgICAgICBjbGVhckhhbmRsZXJzKGVsZW1lbnQpO1xuICAgICAgfSBlbHNlIGlmIChoYW5kbGVycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY2xlYXJIYW5kbGVycyhlbGVtZW50KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgdGhpcyk7XG4gIHJldHVybiB0aGlzO1xufVxuZnVuY3Rpb24gZGVsZWdhdGUoc2VsZWN0b3IsIGV2ZW50TmFtZSwgaGFuZGxlcikge1xuICByZXR1cm4gb24uY2FsbCh0aGlzLCBldmVudE5hbWUsIHNlbGVjdG9yLCBoYW5kbGVyKTtcbn1cbmZ1bmN0aW9uIHVuZGVsZWdhdGUoc2VsZWN0b3IsIGV2ZW50TmFtZSwgaGFuZGxlcikge1xuICByZXR1cm4gb2ZmLmNhbGwodGhpcywgZXZlbnROYW1lLCBzZWxlY3RvciwgaGFuZGxlcik7XG59XG5mdW5jdGlvbiB0cmlnZ2VyKHR5cGUsIGRhdGEpIHtcbiAgdmFyIHBhcmFtcyA9IGFyZ3VtZW50c1syXSAhPT0gKHZvaWQgMCkgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgcGFyYW1zLmJ1YmJsZXMgPSB0eXBlb2YgcGFyYW1zLmJ1YmJsZXMgPT09ICdib29sZWFuJyA/IHBhcmFtcy5idWJibGVzIDogdHJ1ZTtcbiAgcGFyYW1zLmNhbmNlbGFibGUgPSB0eXBlb2YgcGFyYW1zLmNhbmNlbGFibGUgPT09ICdib29sZWFuJyA/IHBhcmFtcy5jYW5jZWxhYmxlIDogdHJ1ZTtcbiAgcGFyYW1zLnByZXZlbnREZWZhdWx0ID0gdHlwZW9mIHBhcmFtcy5wcmV2ZW50RGVmYXVsdCA9PT0gJ2Jvb2xlYW4nID8gcGFyYW1zLnByZXZlbnREZWZhdWx0IDogZmFsc2U7XG4gIHBhcmFtcy5kZXRhaWwgPSBkYXRhO1xuICB2YXIgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQodHlwZSwgcGFyYW1zKTtcbiAgZXZlbnQuX3ByZXZlbnREZWZhdWx0ID0gcGFyYW1zLnByZXZlbnREZWZhdWx0O1xuICBlYWNoKHRoaXMsIGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICBpZiAoIXBhcmFtcy5idWJibGVzIHx8IGlzRXZlbnRCdWJibGluZ0luRGV0YWNoZWRUcmVlIHx8IGlzQXR0YWNoZWRUb0RvY3VtZW50KGVsZW1lbnQpKSB7XG4gICAgICBkaXNwYXRjaEV2ZW50KGVsZW1lbnQsIGV2ZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdHJpZ2dlckZvclBhdGgoZWxlbWVudCwgdHlwZSwgcGFyYW1zKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gdGhpcztcbn1cbmZ1bmN0aW9uIHRyaWdnZXJIYW5kbGVyKHR5cGUsIGRhdGEpIHtcbiAgaWYgKHRoaXNbMF0pIHtcbiAgICB0cmlnZ2VyLmNhbGwodGhpc1swXSwgdHlwZSwgZGF0YSwge1xuICAgICAgYnViYmxlczogZmFsc2UsXG4gICAgICBwcmV2ZW50RGVmYXVsdDogdHJ1ZVxuICAgIH0pO1xuICB9XG59XG5mdW5jdGlvbiBpc0F0dGFjaGVkVG9Eb2N1bWVudChlbGVtZW50KSB7XG4gIGlmIChlbGVtZW50ID09PSB3aW5kb3cgfHwgZWxlbWVudCA9PT0gZG9jdW1lbnQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gJC5jb250YWlucyhlbGVtZW50Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBlbGVtZW50KTtcbn1cbmZ1bmN0aW9uIHRyaWdnZXJGb3JQYXRoKGVsZW1lbnQsIHR5cGUpIHtcbiAgdmFyIHBhcmFtcyA9IGFyZ3VtZW50c1syXSAhPT0gKHZvaWQgMCkgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgcGFyYW1zLmJ1YmJsZXMgPSBmYWxzZTtcbiAgdmFyIGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KHR5cGUsIHBhcmFtcyk7XG4gIGV2ZW50Ll90YXJnZXQgPSBlbGVtZW50O1xuICBkbyB7XG4gICAgZGlzcGF0Y2hFdmVudChlbGVtZW50LCBldmVudCk7XG4gIH0gd2hpbGUgKGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGUpO1xufVxudmFyIGRpcmVjdEV2ZW50TWV0aG9kcyA9IFsnYmx1cicsICdjbGljaycsICdmb2N1cycsICdzZWxlY3QnXTtcbmZ1bmN0aW9uIGRpc3BhdGNoRXZlbnQoZWxlbWVudCwgZXZlbnQpIHtcbiAgaWYgKGRpcmVjdEV2ZW50TWV0aG9kcy5pbmRleE9mKGV2ZW50LnR5cGUpICE9PSAtMSAmJiB0eXBlb2YgZWxlbWVudFtldmVudC50eXBlXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGVsZW1lbnRbZXZlbnQudHlwZV0oKTtcbiAgfSBlbHNlIHtcbiAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICB9XG59XG52YXIgZXZlbnRLZXlQcm9wID0gJ19fZG9tdGFzdGljX2V2ZW50X18nO1xudmFyIGlkID0gMTtcbnZhciBoYW5kbGVycyA9IHt9O1xudmFyIHVudXNlZEtleXMgPSBbXTtcbmZ1bmN0aW9uIGdldEhhbmRsZXJzKGVsZW1lbnQpIHtcbiAgaWYgKCFlbGVtZW50W2V2ZW50S2V5UHJvcF0pIHtcbiAgICBlbGVtZW50W2V2ZW50S2V5UHJvcF0gPSB1bnVzZWRLZXlzLmxlbmd0aCA9PT0gMCA/ICsraWQgOiB1bnVzZWRLZXlzLnBvcCgpO1xuICB9XG4gIHZhciBrZXkgPSBlbGVtZW50W2V2ZW50S2V5UHJvcF07XG4gIHJldHVybiBoYW5kbGVyc1trZXldIHx8IChoYW5kbGVyc1trZXldID0gW10pO1xufVxuZnVuY3Rpb24gY2xlYXJIYW5kbGVycyhlbGVtZW50KSB7XG4gIHZhciBrZXkgPSBlbGVtZW50W2V2ZW50S2V5UHJvcF07XG4gIGlmIChoYW5kbGVyc1trZXldKSB7XG4gICAgaGFuZGxlcnNba2V5XSA9IG51bGw7XG4gICAgZWxlbWVudFtrZXldID0gbnVsbDtcbiAgICB1bnVzZWRLZXlzLnB1c2goa2V5KTtcbiAgfVxufVxuZnVuY3Rpb24gcHJveHlIYW5kbGVyKGhhbmRsZXIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaGFuZGxlci5jYWxsKHRoaXMsIGF1Z21lbnRFdmVudChldmVudCksIGV2ZW50LmRldGFpbCk7XG4gIH07XG59XG52YXIgYXVnbWVudEV2ZW50ID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgbWV0aG9kTmFtZSxcbiAgICAgIGV2ZW50TWV0aG9kcyA9IHtcbiAgICAgICAgcHJldmVudERlZmF1bHQ6ICdpc0RlZmF1bHRQcmV2ZW50ZWQnLFxuICAgICAgICBzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb246ICdpc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCcsXG4gICAgICAgIHN0b3BQcm9wYWdhdGlvbjogJ2lzUHJvcGFnYXRpb25TdG9wcGVkJ1xuICAgICAgfSxcbiAgICAgIG5vb3AgPSAoZnVuY3Rpb24oKSB7fSksXG4gICAgICByZXR1cm5UcnVlID0gKGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0pLFxuICAgICAgcmV0dXJuRmFsc2UgPSAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pO1xuICByZXR1cm4gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAoIWV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCB8fCBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24gfHwgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKSB7XG4gICAgICBmb3IgKG1ldGhvZE5hbWUgaW4gZXZlbnRNZXRob2RzKSB7XG4gICAgICAgIChmdW5jdGlvbihtZXRob2ROYW1lLCB0ZXN0TWV0aG9kTmFtZSwgb3JpZ2luYWxNZXRob2QpIHtcbiAgICAgICAgICBldmVudFttZXRob2ROYW1lXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpc1t0ZXN0TWV0aG9kTmFtZV0gPSByZXR1cm5UcnVlO1xuICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsTWV0aG9kLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgfTtcbiAgICAgICAgICBldmVudFt0ZXN0TWV0aG9kTmFtZV0gPSByZXR1cm5GYWxzZTtcbiAgICAgICAgfShtZXRob2ROYW1lLCBldmVudE1ldGhvZHNbbWV0aG9kTmFtZV0sIGV2ZW50W21ldGhvZE5hbWVdIHx8IG5vb3ApKTtcbiAgICAgIH1cbiAgICAgIGlmIChldmVudC5fcHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGV2ZW50O1xuICB9O1xufSkoKTtcbmZ1bmN0aW9uIGRlbGVnYXRlSGFuZGxlcihzZWxlY3RvciwgaGFuZGxlciwgZXZlbnQpIHtcbiAgdmFyIGV2ZW50VGFyZ2V0ID0gZXZlbnQuX3RhcmdldCB8fCBldmVudC50YXJnZXQsXG4gICAgICBjdXJyZW50VGFyZ2V0ID0gY2xvc2VzdC5jYWxsKFtldmVudFRhcmdldF0sIHNlbGVjdG9yLCB0aGlzKVswXTtcbiAgaWYgKGN1cnJlbnRUYXJnZXQgJiYgY3VycmVudFRhcmdldCAhPT0gdGhpcykge1xuICAgIGlmIChjdXJyZW50VGFyZ2V0ID09PSBldmVudFRhcmdldCB8fCAhKGV2ZW50LmlzUHJvcGFnYXRpb25TdG9wcGVkICYmIGV2ZW50LmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpKSB7XG4gICAgICBoYW5kbGVyLmNhbGwoY3VycmVudFRhcmdldCwgZXZlbnQpO1xuICAgIH1cbiAgfVxufVxudmFyIGhvdmVyRXZlbnRzID0ge1xuICBtb3VzZWVudGVyOiAnbW91c2VvdmVyJyxcbiAgbW91c2VsZWF2ZTogJ21vdXNlb3V0J1xufTtcbmZ1bmN0aW9uIGhvdmVySGFuZGxlcihoYW5kbGVyKSB7XG4gIHJldHVybiBmdW5jdGlvbihldmVudCkge1xuICAgIHZhciByZWxhdGVkVGFyZ2V0ID0gZXZlbnQucmVsYXRlZFRhcmdldDtcbiAgICBpZiAoIXJlbGF0ZWRUYXJnZXQgfHwgKHJlbGF0ZWRUYXJnZXQgIT09IHRoaXMgJiYgISQuY29udGFpbnModGhpcywgcmVsYXRlZFRhcmdldCkpKSB7XG4gICAgICByZXR1cm4gaGFuZGxlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfTtcbn1cbihmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gQ3VzdG9tRXZlbnQoZXZlbnQpIHtcbiAgICB2YXIgcGFyYW1zID0gYXJndW1lbnRzWzFdICE9PSAodm9pZCAwKSA/IGFyZ3VtZW50c1sxXSA6IHtcbiAgICAgIGJ1YmJsZXM6IGZhbHNlLFxuICAgICAgY2FuY2VsYWJsZTogZmFsc2UsXG4gICAgICBkZXRhaWw6IHVuZGVmaW5lZFxuICAgIH07XG4gICAgdmFyIGN1c3RvbUV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50Jyk7XG4gICAgY3VzdG9tRXZlbnQuaW5pdEN1c3RvbUV2ZW50KGV2ZW50LCBwYXJhbXMuYnViYmxlcywgcGFyYW1zLmNhbmNlbGFibGUsIHBhcmFtcy5kZXRhaWwpO1xuICAgIHJldHVybiBjdXN0b21FdmVudDtcbiAgfVxuICBDdXN0b21FdmVudC5wcm90b3R5cGUgPSBnbG9iYWwuQ3VzdG9tRXZlbnQgJiYgZ2xvYmFsLkN1c3RvbUV2ZW50LnByb3RvdHlwZTtcbiAgZ2xvYmFsLkN1c3RvbUV2ZW50ID0gQ3VzdG9tRXZlbnQ7XG59KSgpO1xudmFyIGlzRXZlbnRCdWJibGluZ0luRGV0YWNoZWRUcmVlID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgaXNCdWJibGluZyA9IGZhbHNlLFxuICAgICAgZG9jID0gZ2xvYmFsLmRvY3VtZW50O1xuICBpZiAoZG9jKSB7XG4gICAgdmFyIHBhcmVudCA9IGRvYy5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICAgICAgY2hpbGQgPSBwYXJlbnQuY2xvbmVOb2RlKCk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICBwYXJlbnQuYWRkRXZlbnRMaXN0ZW5lcignZScsIGZ1bmN0aW9uKCkge1xuICAgICAgaXNCdWJibGluZyA9IHRydWU7XG4gICAgfSk7XG4gICAgY2hpbGQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2UnLCB7YnViYmxlczogdHJ1ZX0pKTtcbiAgfVxuICByZXR1cm4gaXNCdWJibGluZztcbn0pKCk7XG52YXIgYmluZCA9IG9uLFxuICAgIHVuYmluZCA9IG9mZjtcbjtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBvbjogb24sXG4gIG9mZjogb2ZmLFxuICBkZWxlZ2F0ZTogZGVsZWdhdGUsXG4gIHVuZGVsZWdhdGU6IHVuZGVsZWdhdGUsXG4gIHRyaWdnZXI6IHRyaWdnZXIsXG4gIHRyaWdnZXJIYW5kbGVyOiB0cmlnZ2VySGFuZGxlcixcbiAgYmluZDogYmluZCxcbiAgdW5iaW5kOiB1bmJpbmQsXG4gIF9fZXNNb2R1bGU6IHRydWVcbn07XG5cblxufSx7XCIuL3NlbGVjdG9yXCI6MTYsXCIuL3V0aWxcIjoxOX1dLDExOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xudmFyIF9fbW9kdWxlTmFtZSA9IFwic3JjL2h0bWxcIjtcbnZhciBlYWNoID0gX2RlcmVxXygnLi91dGlsJykuZWFjaDtcbmZ1bmN0aW9uIGh0bWwoZnJhZ21lbnQpIHtcbiAgaWYgKHR5cGVvZiBmcmFnbWVudCAhPT0gJ3N0cmluZycpIHtcbiAgICB2YXIgZWxlbWVudCA9IHRoaXMubm9kZVR5cGUgPyB0aGlzIDogdGhpc1swXTtcbiAgICByZXR1cm4gZWxlbWVudCA/IGVsZW1lbnQuaW5uZXJIVE1MIDogdW5kZWZpbmVkO1xuICB9XG4gIGVhY2godGhpcywgZnVuY3Rpb24oZWxlbWVudCkge1xuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gZnJhZ21lbnQ7XG4gIH0pO1xuICByZXR1cm4gdGhpcztcbn1cbjtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBodG1sOiBodG1sLFxuICBfX2VzTW9kdWxlOiB0cnVlXG59O1xuXG5cbn0se1wiLi91dGlsXCI6MTl9XSwxMjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcbnZhciBfX21vZHVsZU5hbWUgPSBcInNyYy9pbmRleFwiO1xudmFyICQgPSBfZGVyZXFfKCcuL2FwaScpLmRlZmF1bHQ7XG52YXIgJF9fZGVmYXVsdCA9ICQ7XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZGVmYXVsdDogJF9fZGVmYXVsdCxcbiAgX19lc01vZHVsZTogdHJ1ZVxufTtcblxuXG59LHtcIi4vYXBpXCI6MX1dLDEzOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xudmFyIF9fbW9kdWxlTmFtZSA9IFwic3JjL21vZGVcIjtcbnZhciBnbG9iYWwgPSBfZGVyZXFfKCcuL3V0aWwnKS5nbG9iYWw7XG52YXIgaXNOYXRpdmUgPSBmYWxzZTtcbmZ1bmN0aW9uIG5hdGl2ZSgpIHtcbiAgdmFyIGdvTmF0aXZlID0gYXJndW1lbnRzWzBdICE9PSAodm9pZCAwKSA/IGFyZ3VtZW50c1swXSA6IHRydWU7XG4gIHZhciB3YXNOYXRpdmUgPSBpc05hdGl2ZTtcbiAgaXNOYXRpdmUgPSBnb05hdGl2ZTtcbiAgaWYgKGdsb2JhbC4kKSB7XG4gICAgZ2xvYmFsLiQuaXNOYXRpdmUgPSBpc05hdGl2ZTtcbiAgfVxuICBpZiAoIXdhc05hdGl2ZSAmJiBpc05hdGl2ZSkge1xuICAgIGF1Z21lbnROYXRpdmVQcm90b3R5cGVzKHRoaXMuZm4sIHRoaXMuZm5MaXN0KTtcbiAgfVxuICBpZiAod2FzTmF0aXZlICYmICFpc05hdGl2ZSkge1xuICAgIHVuYXVnbWVudE5hdGl2ZVByb3RvdHlwZXModGhpcy5mbiwgdGhpcy5mbkxpc3QpO1xuICB9XG4gIHJldHVybiBpc05hdGl2ZTtcbn1cbnZhciBOb2RlUHJvdG8gPSB0eXBlb2YgTm9kZSAhPT0gJ3VuZGVmaW5lZCcgJiYgTm9kZS5wcm90b3R5cGUsXG4gICAgTm9kZUxpc3RQcm90byA9IHR5cGVvZiBOb2RlTGlzdCAhPT0gJ3VuZGVmaW5lZCcgJiYgTm9kZUxpc3QucHJvdG90eXBlO1xuZnVuY3Rpb24gYXVnbWVudChvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKCFvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2VcbiAgICB9KTtcbiAgfVxufVxudmFyIHVuYXVnbWVudCA9IChmdW5jdGlvbihvYmosIGtleSkge1xuICBkZWxldGUgb2JqW2tleV07XG59KTtcbmZ1bmN0aW9uIGF1Z21lbnROYXRpdmVQcm90b3R5cGVzKG1ldGhvZHNOb2RlLCBtZXRob2RzTm9kZUxpc3QpIHtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gbWV0aG9kc05vZGUpIHtcbiAgICBhdWdtZW50KE5vZGVQcm90bywga2V5LCBtZXRob2RzTm9kZVtrZXldKTtcbiAgICBhdWdtZW50KE5vZGVMaXN0UHJvdG8sIGtleSwgbWV0aG9kc05vZGVba2V5XSk7XG4gIH1cbiAgZm9yIChrZXkgaW4gbWV0aG9kc05vZGVMaXN0KSB7XG4gICAgYXVnbWVudChOb2RlTGlzdFByb3RvLCBrZXksIG1ldGhvZHNOb2RlTGlzdFtrZXldKTtcbiAgfVxufVxuZnVuY3Rpb24gdW5hdWdtZW50TmF0aXZlUHJvdG90eXBlcyhtZXRob2RzTm9kZSwgbWV0aG9kc05vZGVMaXN0KSB7XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIG1ldGhvZHNOb2RlKSB7XG4gICAgdW5hdWdtZW50KE5vZGVQcm90bywga2V5KTtcbiAgICB1bmF1Z21lbnQoTm9kZUxpc3RQcm90bywga2V5KTtcbiAgfVxuICBmb3IgKGtleSBpbiBtZXRob2RzTm9kZUxpc3QpIHtcbiAgICB1bmF1Z21lbnQoTm9kZUxpc3RQcm90bywga2V5KTtcbiAgfVxufVxuO1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlzTmF0aXZlOiBpc05hdGl2ZSxcbiAgbmF0aXZlOiBuYXRpdmUsXG4gIF9fZXNNb2R1bGU6IHRydWVcbn07XG5cblxufSx7XCIuL3V0aWxcIjoxOX1dLDE0OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xudmFyIF9fbW9kdWxlTmFtZSA9IFwic3JjL25vY29uZmxpY3RcIjtcbnZhciBnbG9iYWwgPSBfZGVyZXFfKCcuL3V0aWwnKS5nbG9iYWw7XG52YXIgcHJldmlvdXNMaWIgPSBnbG9iYWwuJDtcbmZ1bmN0aW9uIG5vQ29uZmxpY3QoKSB7XG4gIGdsb2JhbC4kID0gcHJldmlvdXNMaWI7XG4gIHJldHVybiB0aGlzO1xufVxuO1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIG5vQ29uZmxpY3Q6IG5vQ29uZmxpY3QsXG4gIF9fZXNNb2R1bGU6IHRydWVcbn07XG5cblxufSx7XCIuL3V0aWxcIjoxOX1dLDE1OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xudmFyIF9fbW9kdWxlTmFtZSA9IFwic3JjL3JlYWR5XCI7XG5mdW5jdGlvbiByZWFkeShoYW5kbGVyKSB7XG4gIGlmICgvY29tcGxldGV8bG9hZGVkfGludGVyYWN0aXZlLy50ZXN0KGRvY3VtZW50LnJlYWR5U3RhdGUpICYmIGRvY3VtZW50LmJvZHkpIHtcbiAgICBoYW5kbGVyKCk7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGhhbmRsZXIsIGZhbHNlKTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cbjtcbm1vZHVsZS5leHBvcnRzID0ge1xuICByZWFkeTogcmVhZHksXG4gIF9fZXNNb2R1bGU6IHRydWVcbn07XG5cblxufSx7fV0sMTY6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19tb2R1bGVOYW1lID0gXCJzcmMvc2VsZWN0b3JcIjtcbnZhciAkX18wID0gX2RlcmVxXygnLi91dGlsJyksXG4gICAgZ2xvYmFsID0gJF9fMC5nbG9iYWwsXG4gICAgbWFrZUl0ZXJhYmxlID0gJF9fMC5tYWtlSXRlcmFibGU7XG52YXIgc2xpY2UgPSBbXS5zbGljZSxcbiAgICBpc1Byb3RvdHlwZVNldCA9IGZhbHNlLFxuICAgIHJlRnJhZ21lbnQgPSAvXlxccyo8KFxcdyt8ISlbXj5dKj4vLFxuICAgIHJlU2luZ2xlVGFnID0gL148KFxcdyspXFxzKlxcLz8+KD86PFxcL1xcMT58KSQvLFxuICAgIHJlU2ltcGxlU2VsZWN0b3IgPSAvXltcXC4jXT9bXFx3LV0qJC87XG5mdW5jdGlvbiAkKHNlbGVjdG9yKSB7XG4gIHZhciBjb250ZXh0ID0gYXJndW1lbnRzWzFdICE9PSAodm9pZCAwKSA/IGFyZ3VtZW50c1sxXSA6IGRvY3VtZW50O1xuICB2YXIgY29sbGVjdGlvbjtcbiAgaWYgKCFzZWxlY3Rvcikge1xuICAgIGNvbGxlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKG51bGwpO1xuICB9IGVsc2UgaWYgKHNlbGVjdG9yIGluc3RhbmNlb2YgV3JhcHBlcikge1xuICAgIHJldHVybiBzZWxlY3RvcjtcbiAgfSBlbHNlIGlmICh0eXBlb2Ygc2VsZWN0b3IgIT09ICdzdHJpbmcnKSB7XG4gICAgY29sbGVjdGlvbiA9IG1ha2VJdGVyYWJsZShzZWxlY3Rvcik7XG4gIH0gZWxzZSBpZiAocmVGcmFnbWVudC50ZXN0KHNlbGVjdG9yKSkge1xuICAgIGNvbGxlY3Rpb24gPSBjcmVhdGVGcmFnbWVudChzZWxlY3Rvcik7XG4gIH0gZWxzZSB7XG4gICAgY29udGV4dCA9IHR5cGVvZiBjb250ZXh0ID09PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGV4dCkgOiBjb250ZXh0Lmxlbmd0aCA/IGNvbnRleHRbMF0gOiBjb250ZXh0O1xuICAgIGNvbGxlY3Rpb24gPSBxdWVyeVNlbGVjdG9yKHNlbGVjdG9yLCBjb250ZXh0KTtcbiAgfVxuICByZXR1cm4gJC5pc05hdGl2ZSA/IGNvbGxlY3Rpb24gOiB3cmFwKGNvbGxlY3Rpb24pO1xufVxuZnVuY3Rpb24gZmluZChzZWxlY3Rvcikge1xuICByZXR1cm4gJChzZWxlY3RvciwgdGhpcyk7XG59XG5mdW5jdGlvbiBjbG9zZXN0KHNlbGVjdG9yLCBjb250ZXh0KSB7XG4gIHZhciBub2RlID0gdGhpc1swXTtcbiAgZm9yICg7IG5vZGUubm9kZVR5cGUgIT09IG5vZGUuRE9DVU1FTlRfTk9ERSAmJiBub2RlICE9PSBjb250ZXh0OyBub2RlID0gbm9kZS5wYXJlbnROb2RlKSB7XG4gICAgaWYgKG1hdGNoZXMobm9kZSwgc2VsZWN0b3IpKSB7XG4gICAgICByZXR1cm4gJChub2RlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuICQoKTtcbn1cbnZhciBtYXRjaGVzID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgY29udGV4dCA9IHR5cGVvZiBFbGVtZW50ICE9PSAndW5kZWZpbmVkJyA/IEVsZW1lbnQucHJvdG90eXBlIDogZ2xvYmFsLFxuICAgICAgX21hdGNoZXMgPSBjb250ZXh0Lm1hdGNoZXMgfHwgY29udGV4dC5tYXRjaGVzU2VsZWN0b3IgfHwgY29udGV4dC5tb3pNYXRjaGVzU2VsZWN0b3IgfHwgY29udGV4dC53ZWJraXRNYXRjaGVzU2VsZWN0b3IgfHwgY29udGV4dC5tc01hdGNoZXNTZWxlY3RvciB8fCBjb250ZXh0Lm9NYXRjaGVzU2VsZWN0b3I7XG4gIHJldHVybiBmdW5jdGlvbihlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgIHJldHVybiBfbWF0Y2hlcy5jYWxsKGVsZW1lbnQsIHNlbGVjdG9yKTtcbiAgfTtcbn0pKCk7XG5mdW5jdGlvbiBxdWVyeVNlbGVjdG9yKHNlbGVjdG9yLCBjb250ZXh0KSB7XG4gIHZhciBpc1NpbXBsZVNlbGVjdG9yID0gcmVTaW1wbGVTZWxlY3Rvci50ZXN0KHNlbGVjdG9yKTtcbiAgaWYgKGlzU2ltcGxlU2VsZWN0b3IgJiYgISQuaXNOYXRpdmUpIHtcbiAgICBpZiAoc2VsZWN0b3JbMF0gPT09ICcjJykge1xuICAgICAgdmFyIGVsZW1lbnQgPSAoY29udGV4dC5nZXRFbGVtZW50QnlJZCA/IGNvbnRleHQgOiBkb2N1bWVudCkuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0b3Iuc2xpY2UoMSkpO1xuICAgICAgcmV0dXJuIGVsZW1lbnQgPyBbZWxlbWVudF0gOiBbXTtcbiAgICB9XG4gICAgaWYgKHNlbGVjdG9yWzBdID09PSAnLicpIHtcbiAgICAgIHJldHVybiBjb250ZXh0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoc2VsZWN0b3Iuc2xpY2UoMSkpO1xuICAgIH1cbiAgICByZXR1cm4gY29udGV4dC5nZXRFbGVtZW50c0J5VGFnTmFtZShzZWxlY3Rvcik7XG4gIH1cbiAgcmV0dXJuIGNvbnRleHQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG59XG5mdW5jdGlvbiBjcmVhdGVGcmFnbWVudChodG1sKSB7XG4gIGlmIChyZVNpbmdsZVRhZy50ZXN0KGh0bWwpKSB7XG4gICAgcmV0dXJuIFtkb2N1bWVudC5jcmVhdGVFbGVtZW50KFJlZ0V4cC4kMSldO1xuICB9XG4gIHZhciBlbGVtZW50cyA9IFtdLFxuICAgICAgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG4gICAgICBjaGlsZHJlbiA9IGNvbnRhaW5lci5jaGlsZE5vZGVzO1xuICBjb250YWluZXIuaW5uZXJIVE1MID0gaHRtbDtcbiAgZm9yICh2YXIgaSA9IDAsXG4gICAgICBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgZWxlbWVudHMucHVzaChjaGlsZHJlbltpXSk7XG4gIH1cbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuZnVuY3Rpb24gd3JhcChjb2xsZWN0aW9uKSB7XG4gIGlmICghaXNQcm90b3R5cGVTZXQpIHtcbiAgICBXcmFwcGVyLnByb3RvdHlwZSA9ICQuZm47XG4gICAgV3JhcHBlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBXcmFwcGVyO1xuICAgIGlzUHJvdG90eXBlU2V0ID0gdHJ1ZTtcbiAgfVxuICByZXR1cm4gbmV3IFdyYXBwZXIoY29sbGVjdGlvbik7XG59XG5mdW5jdGlvbiBXcmFwcGVyKGNvbGxlY3Rpb24pIHtcbiAgdmFyIGkgPSAwLFxuICAgICAgbGVuZ3RoID0gY29sbGVjdGlvbi5sZW5ndGg7XG4gIGZvciAoOyBpIDwgbGVuZ3RoOyApIHtcbiAgICB0aGlzW2ldID0gY29sbGVjdGlvbltpKytdO1xuICB9XG4gIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xufVxuO1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gICQ6ICQsXG4gIGZpbmQ6IGZpbmQsXG4gIGNsb3Nlc3Q6IGNsb3Nlc3QsXG4gIG1hdGNoZXM6IG1hdGNoZXMsXG4gIF9fZXNNb2R1bGU6IHRydWVcbn07XG5cblxufSx7XCIuL3V0aWxcIjoxOX1dLDE3OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xudmFyIF9fbW9kdWxlTmFtZSA9IFwic3JjL3NlbGVjdG9yX2V4dHJhXCI7XG52YXIgJF9fMCA9IF9kZXJlcV8oJy4vdXRpbCcpLFxuICAgIGVhY2ggPSAkX18wLmVhY2gsXG4gICAgdG9BcnJheSA9ICRfXzAudG9BcnJheTtcbnZhciAkX18wID0gX2RlcmVxXygnLi9zZWxlY3RvcicpLFxuICAgICQgPSAkX18wLiQsXG4gICAgbWF0Y2hlcyA9ICRfXzAubWF0Y2hlcztcbmZ1bmN0aW9uIGNoaWxkcmVuKHNlbGVjdG9yKSB7XG4gIHZhciBub2RlcyA9IFtdO1xuICBlYWNoKHRoaXMsIGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudC5jaGlsZHJlbikge1xuICAgICAgZWFjaChlbGVtZW50LmNoaWxkcmVuLCBmdW5jdGlvbihjaGlsZCkge1xuICAgICAgICBpZiAoIXNlbGVjdG9yIHx8IChzZWxlY3RvciAmJiBtYXRjaGVzKGNoaWxkLCBzZWxlY3RvcikpKSB7XG4gICAgICAgICAgbm9kZXMucHVzaChjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiAkKG5vZGVzKTtcbn1cbmZ1bmN0aW9uIGNvbnRlbnRzKCkge1xuICB2YXIgbm9kZXMgPSBbXTtcbiAgZWFjaCh0aGlzLCBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgbm9kZXMucHVzaC5hcHBseShub2RlcywgdG9BcnJheShlbGVtZW50LmNoaWxkTm9kZXMpKTtcbiAgfSk7XG4gIHJldHVybiAkKG5vZGVzKTtcbn1cbmZ1bmN0aW9uIGVxKGluZGV4KSB7XG4gIHJldHVybiBzbGljZS5jYWxsKHRoaXMsIGluZGV4LCBpbmRleCArIDEpO1xufVxuZnVuY3Rpb24gZ2V0KGluZGV4KSB7XG4gIHJldHVybiB0aGlzW2luZGV4XTtcbn1cbmZ1bmN0aW9uIHBhcmVudChzZWxlY3Rvcikge1xuICB2YXIgbm9kZXMgPSBbXTtcbiAgZWFjaCh0aGlzLCBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgaWYgKCFzZWxlY3RvciB8fCAoc2VsZWN0b3IgJiYgbWF0Y2hlcyhlbGVtZW50LnBhcmVudE5vZGUsIHNlbGVjdG9yKSkpIHtcbiAgICAgIG5vZGVzLnB1c2goZWxlbWVudC5wYXJlbnROb2RlKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gJChub2Rlcyk7XG59XG5mdW5jdGlvbiBzbGljZShzdGFydCwgZW5kKSB7XG4gIHJldHVybiAkKFtdLnNsaWNlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xufVxuO1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNoaWxkcmVuOiBjaGlsZHJlbixcbiAgY29udGVudHM6IGNvbnRlbnRzLFxuICBlcTogZXEsXG4gIGdldDogZ2V0LFxuICBwYXJlbnQ6IHBhcmVudCxcbiAgc2xpY2U6IHNsaWNlLFxuICBfX2VzTW9kdWxlOiB0cnVlXG59O1xuXG5cbn0se1wiLi9zZWxlY3RvclwiOjE2LFwiLi91dGlsXCI6MTl9XSwxODpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcbnZhciBfX21vZHVsZU5hbWUgPSBcInNyYy90eXBlXCI7XG5mdW5jdGlvbiBpc0Z1bmN0aW9uKG9iaikge1xuICByZXR1cm4gKHR5cGVvZiBvYmogPT09ICdmdW5jdGlvbicpO1xufVxudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuO1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlzRnVuY3Rpb246IGlzRnVuY3Rpb24sXG4gIGlzQXJyYXk6IGlzQXJyYXksXG4gIF9fZXNNb2R1bGU6IHRydWVcbn07XG5cblxufSx7fV0sMTk6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19tb2R1bGVOYW1lID0gXCJzcmMvdXRpbFwiO1xudmFyIGdsb2JhbCA9IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCksXG4gICAgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG52YXIgdG9BcnJheSA9IChmdW5jdGlvbihjb2xsZWN0aW9uKSB7XG4gIHJldHVybiBzbGljZS5jYWxsKGNvbGxlY3Rpb24pO1xufSk7XG52YXIgbWFrZUl0ZXJhYmxlID0gKGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgcmV0dXJuIGVsZW1lbnQubm9kZVR5cGUgfHwgZWxlbWVudCA9PT0gd2luZG93ID8gW2VsZW1lbnRdIDogZWxlbWVudDtcbn0pO1xuZnVuY3Rpb24gZWFjaChjb2xsZWN0aW9uLCBjYWxsYmFjaywgdGhpc0FyZykge1xuICB2YXIgbGVuZ3RoID0gY29sbGVjdGlvbi5sZW5ndGg7XG4gIGlmIChsZW5ndGggIT09IHVuZGVmaW5lZCAmJiBjb2xsZWN0aW9uLm5vZGVUeXBlID09PSB1bmRlZmluZWQpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBjYWxsYmFjay5jYWxsKHRoaXNBcmcsIGNvbGxlY3Rpb25baV0sIGksIGNvbGxlY3Rpb24pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjYWxsYmFjay5jYWxsKHRoaXNBcmcsIGNvbGxlY3Rpb24sIDAsIGNvbGxlY3Rpb24pO1xuICB9XG4gIHJldHVybiBjb2xsZWN0aW9uO1xufVxuZnVuY3Rpb24gZXh0ZW5kKHRhcmdldCkge1xuICBmb3IgKHZhciBzb3VyY2VzID0gW10sXG4gICAgICAkX18wID0gMTsgJF9fMCA8IGFyZ3VtZW50cy5sZW5ndGg7ICRfXzArKylcbiAgICBzb3VyY2VzWyRfXzAgLSAxXSA9IGFyZ3VtZW50c1skX18wXTtcbiAgc291cmNlcy5mb3JFYWNoKGZ1bmN0aW9uKHNyYykge1xuICAgIGlmIChzcmMpIHtcbiAgICAgIGZvciAodmFyIHByb3AgaW4gc3JjKSB7XG4gICAgICAgIHRhcmdldFtwcm9wXSA9IHNyY1twcm9wXTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICByZXR1cm4gdGFyZ2V0O1xufVxuO1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGdsb2JhbDogZ2xvYmFsLFxuICB0b0FycmF5OiB0b0FycmF5LFxuICBtYWtlSXRlcmFibGU6IG1ha2VJdGVyYWJsZSxcbiAgZWFjaDogZWFjaCxcbiAgZXh0ZW5kOiBleHRlbmQsXG4gIF9fZXNNb2R1bGU6IHRydWVcbn07XG5cblxufSx7fV19LHt9LFsxMl0pXG4oMTIpXG59KTtcbn0pLmNhbGwodGhpcyx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30pIiwidmFyIGV2ZW50cyAgPSByZXF1aXJlKCcuL21vZHVsZXMvZXZlbnRzJylcbiwgICBvYmogICAgID0gcmVxdWlyZSgnLi9tb2R1bGVzL29iaicpXG4sICAgY29udGVudCA9IHJlcXVpcmUoJy4vbW9kdWxlcy9jb250ZW50Jyk7XG5cbmNvbnRlbnQuaW5pdCgpO1xub2JqLmluaXQoKTtcbmV2ZW50cygpO1xuXG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciAkID0gcmVxdWlyZSgnZG9tdGFzdGljL2J1bmRsZS9mdWxsL2RvbXRhc3RpYycpO1xuXG52YXIgY29udGVudCA9IHtcblxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciAkICAgICAgID0gcmVxdWlyZSgnZG9tdGFzdGljL2J1bmRsZS9mdWxsL2RvbXRhc3RpYycpO1xuXG52YXIgZXZlbnRzID0gZnVuY3Rpb24oKSB7XG5cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBldmVudHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBvYmpUZW1wbGF0ZSA9IHJlcXVpcmUoJy4vdGVtcGxhdGUnKTtcblxudmFyIGJvZHkgICA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbIDAgXVxuLCAgIGhlYWQgICA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbIDAgXVxuLCAgIGNzc0xvYyA9ICdodHRwczovL3NlZXRocm91Z2h0cmVlcy5naXRodWIuaW8vc21hcnRsaW5nLXRhZ3MtY2hlY2tlci9pbmRleC5jc3MnO1xuXG5cbnZhciBvYmogPSB7XG5cbiAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5jcmVhdGVPYmooKTtcbiAgfSxcblxuICBjcmVhdGVPYmo6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuc2V0QXR0cmlidXRlKCdpZCcsICdzbWFydC1vYmonKTtcbiAgICBkaXYuaW5uZXJIVE1MID0gb2JqVGVtcGxhdGU7XG4gICAgdGhpcy5zdHlsZShkaXYpO1xuICB9LFxuXG4gIHN0eWxlOiBmdW5jdGlvbihkaXYpIHtcbiAgICB2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICBsaW5rLnNldEF0dHJpYnV0ZSgncmVsJywnc3R5bGVzaGVldCcpO1xuICAgIGxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgY3NzTG9jKTtcbiAgICBsaW5rLnNldEF0dHJpYnV0ZSgndHlwZScsJ3RleHQvY3NzJyk7XG4gICAgaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICB0aGlzLmFwcGVuZChkaXYpO1xuICB9LFxuXG4gIGFwcGVuZDogZnVuY3Rpb24oZGl2KSB7XG4gICAgYm9keS5hcHBlbmRDaGlsZChkaXYpO1xuICB9XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gb2JqO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBzZXQgb2JqVGVtcGxhdGVcbnZhciBvYmpUZW1wbGF0ZSA9ICc8dWwgaWQ9XCJzbWFydGxpbmctbmF2XCI+JztcbiAgICBvYmpUZW1wbGF0ZSArPSAnPGxpIGlkPVwibmljZS10aXRsZVwiIGRhdGEtdGV4dD1cIk5JQ0VcIiB0aXRsZT1cIkdvIFRvIEhvbWVwYWdlXCI+WXV1dXVwPC9saT4nO1xuICAgIG9ialRlbXBsYXRlICs9ICc8L3VsPic7XG5cbm1vZHVsZS5leHBvcnRzID0gb2JqVGVtcGxhdGU7XG4iXX0=
