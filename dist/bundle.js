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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGFtbC9TaXRlcy9zbWFydGxpbmctdGFncy1jaGVja2VyL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYWRhbWwvU2l0ZXMvc21hcnRsaW5nLXRhZ3MtY2hlY2tlci9ub2RlX21vZHVsZXMvZG9tdGFzdGljL2J1bmRsZS9mdWxsL2RvbXRhc3RpYy5qcyIsIi9Vc2Vycy9hZGFtbC9TaXRlcy9zbWFydGxpbmctdGFncy1jaGVja2VyL3NyYy9qcy9pbmRleC5qcyIsIi9Vc2Vycy9hZGFtbC9TaXRlcy9zbWFydGxpbmctdGFncy1jaGVja2VyL3NyYy9qcy9tb2R1bGVzL2NvbnRlbnQuanMiLCIvVXNlcnMvYWRhbWwvU2l0ZXMvc21hcnRsaW5nLXRhZ3MtY2hlY2tlci9zcmMvanMvbW9kdWxlcy9ldmVudHMuanMiLCIvVXNlcnMvYWRhbWwvU2l0ZXMvc21hcnRsaW5nLXRhZ3MtY2hlY2tlci9zcmMvanMvbW9kdWxlcy9vYmouanMiLCIvVXNlcnMvYWRhbWwvU2l0ZXMvc21hcnRsaW5nLXRhZ3MtY2hlY2tlci9zcmMvanMvbW9kdWxlcy90ZW1wbGF0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcGlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIoZnVuY3Rpb24gKGdsb2JhbCl7XG4hZnVuY3Rpb24oX2Upe3ZhciBlPWZ1bmN0aW9uKCl7cmV0dXJuIF9lKClbXCJkZWZhdWx0XCJdfTtpZihcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZSltb2R1bGUuZXhwb3J0cz1lKCk7ZWxzZSBpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQpZGVmaW5lKFtdLGUpO2Vsc2V7dmFyIGY7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz9mPXdpbmRvdzpcInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsP2Y9Z2xvYmFsOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmJiYoZj1zZWxmKSxmLiQ9ZSgpfX0oZnVuY3Rpb24oKXt2YXIgZGVmaW5lLG1vZHVsZSxleHBvcnRzO3JldHVybiAoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSh7MTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcbnZhciBfX21vZHVsZU5hbWUgPSBcInNyYy9hcGlcIjtcbnZhciBleHRlbmQgPSBfZGVyZXFfKCcuL3V0aWwnKS5leHRlbmQ7XG52YXIgYXBpID0ge30sXG4gICAgYXBpTm9kZUxpc3QgPSB7fSxcbiAgICAkID0ge307XG52YXIgYXJyYXkgPSBfZGVyZXFfKCcuL2FycmF5Jyk7XG52YXIgYXR0ciA9IF9kZXJlcV8oJy4vYXR0cicpO1xudmFyIGNsYXNzXyA9IF9kZXJlcV8oJy4vY2xhc3MnKTtcbnZhciBjb250YWlucyA9IF9kZXJlcV8oJy4vY29udGFpbnMnKTtcbnZhciBjc3MgPSBfZGVyZXFfKCcuL2NzcycpO1xudmFyIGRhdGEgPSBfZGVyZXFfKCcuL2RhdGEnKTtcbnZhciBkb20gPSBfZGVyZXFfKCcuL2RvbScpO1xudmFyIGRvbV9leHRyYSA9IF9kZXJlcV8oJy4vZG9tX2V4dHJhJyk7XG52YXIgZXZlbnQgPSBfZGVyZXFfKCcuL2V2ZW50Jyk7XG52YXIgaHRtbCA9IF9kZXJlcV8oJy4vaHRtbCcpO1xudmFyIG1vZGUgPSBfZGVyZXFfKCcuL21vZGUnKTtcbnZhciBub2NvbmZsaWN0ID0gX2RlcmVxXygnLi9ub2NvbmZsaWN0Jyk7XG52YXIgcmVhZHkgPSBfZGVyZXFfKCcuL3JlYWR5Jyk7XG52YXIgc2VsZWN0b3IgPSBfZGVyZXFfKCcuL3NlbGVjdG9yJyk7XG52YXIgc2VsZWN0b3JfZXh0cmEgPSBfZGVyZXFfKCcuL3NlbGVjdG9yX2V4dHJhJyk7XG52YXIgdHlwZSA9IF9kZXJlcV8oJy4vdHlwZScpO1xuaWYgKHR5cGVvZiBzZWxlY3RvciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgJCA9IHNlbGVjdG9yLiQ7XG4gICQubWF0Y2hlcyA9IHNlbGVjdG9yLm1hdGNoZXM7XG4gIGFwaS5maW5kID0gc2VsZWN0b3IuZmluZDtcbiAgYXBpLmNsb3Nlc3QgPSBzZWxlY3Rvci5jbG9zZXN0O1xufVxuZXh0ZW5kKCQsIGNvbnRhaW5zLCBtb2RlLCBub2NvbmZsaWN0LCB0eXBlKTtcbmV4dGVuZChhcGksIGFycmF5LCBhdHRyLCBjbGFzc18sIGNzcywgZGF0YSwgZG9tLCBkb21fZXh0cmEsIGV2ZW50LCBodG1sLCByZWFkeSwgc2VsZWN0b3JfZXh0cmEpO1xuZXh0ZW5kKGFwaU5vZGVMaXN0LCBhcnJheSk7XG4kLnZlcnNpb24gPSAnMC43LjUnO1xuJC5leHRlbmQgPSBleHRlbmQ7XG4kLmZuID0gYXBpO1xuJC5mbkxpc3QgPSBhcGlOb2RlTGlzdDtcbnZhciAkX19kZWZhdWx0ID0gJDtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBkZWZhdWx0OiAkX19kZWZhdWx0LFxuICBfX2VzTW9kdWxlOiB0cnVlXG59O1xuXG5cbn0se1wiLi9hcnJheVwiOjIsXCIuL2F0dHJcIjozLFwiLi9jbGFzc1wiOjQsXCIuL2NvbnRhaW5zXCI6NSxcIi4vY3NzXCI6NixcIi4vZGF0YVwiOjcsXCIuL2RvbVwiOjgsXCIuL2RvbV9leHRyYVwiOjksXCIuL2V2ZW50XCI6MTAsXCIuL2h0bWxcIjoxMSxcIi4vbW9kZVwiOjEzLFwiLi9ub2NvbmZsaWN0XCI6MTQsXCIuL3JlYWR5XCI6MTUsXCIuL3NlbGVjdG9yXCI6MTYsXCIuL3NlbGVjdG9yX2V4dHJhXCI6MTcsXCIuL3R5cGVcIjoxOCxcIi4vdXRpbFwiOjE5fV0sMjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcbnZhciBfX21vZHVsZU5hbWUgPSBcInNyYy9hcnJheVwiO1xudmFyIF9lYWNoID0gX2RlcmVxXygnLi91dGlsJykuZWFjaDtcbnZhciAkX18wID0gX2RlcmVxXygnLi9zZWxlY3RvcicpLFxuICAgICQgPSAkX18wLiQsXG4gICAgbWF0Y2hlcyA9ICRfXzAubWF0Y2hlcztcbnZhciBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xudmFyIGV2ZXJ5ID0gQXJyYXlQcm90by5ldmVyeTtcbmZ1bmN0aW9uIGZpbHRlcihzZWxlY3RvciwgdGhpc0FyZykge1xuICB2YXIgY2FsbGJhY2sgPSB0eXBlb2Ygc2VsZWN0b3IgPT09ICdmdW5jdGlvbicgPyBzZWxlY3RvciA6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gbWF0Y2hlcyhlbGVtZW50LCBzZWxlY3Rvcik7XG4gIH07XG4gIHJldHVybiAkKEFycmF5UHJvdG8uZmlsdGVyLmNhbGwodGhpcywgY2FsbGJhY2ssIHRoaXNBcmcpKTtcbn1cbmZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2ssIHRoaXNBcmcpIHtcbiAgcmV0dXJuIF9lYWNoKHRoaXMsIGNhbGxiYWNrLCB0aGlzQXJnKTtcbn1cbnZhciBlYWNoID0gZm9yRWFjaDtcbnZhciBpbmRleE9mID0gQXJyYXlQcm90by5pbmRleE9mO1xudmFyIG1hcCA9IEFycmF5UHJvdG8ubWFwO1xudmFyIHBvcCA9IEFycmF5UHJvdG8ucG9wO1xudmFyIHB1c2ggPSBBcnJheVByb3RvLnB1c2g7XG5mdW5jdGlvbiByZXZlcnNlKCkge1xuICB2YXIgZWxlbWVudHMgPSBBcnJheVByb3RvLnNsaWNlLmNhbGwodGhpcyk7XG4gIHJldHVybiAkKEFycmF5UHJvdG8ucmV2ZXJzZS5jYWxsKGVsZW1lbnRzKSk7XG59XG52YXIgc2hpZnQgPSBBcnJheVByb3RvLnNoaWZ0O1xudmFyIHNvbWUgPSBBcnJheVByb3RvLnNvbWU7XG52YXIgdW5zaGlmdCA9IEFycmF5UHJvdG8udW5zaGlmdDtcbjtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBlYWNoOiBlYWNoLFxuICBldmVyeTogZXZlcnksXG4gIGZpbHRlcjogZmlsdGVyLFxuICBmb3JFYWNoOiBmb3JFYWNoLFxuICBpbmRleE9mOiBpbmRleE9mLFxuICBtYXA6IG1hcCxcbiAgcG9wOiBwb3AsXG4gIHB1c2g6IHB1c2gsXG4gIHJldmVyc2U6IHJldmVyc2UsXG4gIHNoaWZ0OiBzaGlmdCxcbiAgc29tZTogc29tZSxcbiAgdW5zaGlmdDogdW5zaGlmdCxcbiAgX19lc01vZHVsZTogdHJ1ZVxufTtcblxuXG59LHtcIi4vc2VsZWN0b3JcIjoxNixcIi4vdXRpbFwiOjE5fV0sMzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcbnZhciBfX21vZHVsZU5hbWUgPSBcInNyYy9hdHRyXCI7XG52YXIgZWFjaCA9IF9kZXJlcV8oJy4vdXRpbCcpLmVhY2g7XG5mdW5jdGlvbiBhdHRyKGtleSwgdmFsdWUpIHtcbiAgaWYgKHR5cGVvZiBrZXkgPT09ICdzdHJpbmcnICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgZWxlbWVudCA9IHRoaXMubm9kZVR5cGUgPyB0aGlzIDogdGhpc1swXTtcbiAgICByZXR1cm4gZWxlbWVudCA/IGVsZW1lbnQuZ2V0QXR0cmlidXRlKGtleSkgOiB1bmRlZmluZWQ7XG4gIH1cbiAgZWFjaCh0aGlzLCBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgaWYgKHR5cGVvZiBrZXkgPT09ICdvYmplY3QnKSB7XG4gICAgICBmb3IgKHZhciBhdHRyIGluIGtleSkge1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCBrZXlbYXR0cl0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gdGhpcztcbn1cbmZ1bmN0aW9uIHJlbW92ZUF0dHIoa2V5KSB7XG4gIGVhY2godGhpcywgZnVuY3Rpb24oZWxlbWVudCkge1xuICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGtleSk7XG4gIH0pO1xuICByZXR1cm4gdGhpcztcbn1cbjtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBhdHRyOiBhdHRyLFxuICByZW1vdmVBdHRyOiByZW1vdmVBdHRyLFxuICBfX2VzTW9kdWxlOiB0cnVlXG59O1xuXG5cbn0se1wiLi91dGlsXCI6MTl9XSw0OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xudmFyIF9fbW9kdWxlTmFtZSA9IFwic3JjL2NsYXNzXCI7XG52YXIgJF9fMCA9IF9kZXJlcV8oJy4vdXRpbCcpLFxuICAgIG1ha2VJdGVyYWJsZSA9ICRfXzAubWFrZUl0ZXJhYmxlLFxuICAgIGVhY2ggPSAkX18wLmVhY2g7XG5mdW5jdGlvbiBhZGRDbGFzcyh2YWx1ZSkge1xuICBpZiAodmFsdWUgJiYgdmFsdWUubGVuZ3RoKSB7XG4gICAgZWFjaCh2YWx1ZS5zcGxpdCgnICcpLCBmdW5jdGlvbihjbGFzc05hbWUpIHtcbiAgICAgIGVhY2godGhpcywgZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgIH0pO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5mdW5jdGlvbiByZW1vdmVDbGFzcyh2YWx1ZSkge1xuICBpZiAodmFsdWUgJiYgdmFsdWUubGVuZ3RoKSB7XG4gICAgZWFjaCh2YWx1ZS5zcGxpdCgnICcpLCBmdW5jdGlvbihjbGFzc05hbWUpIHtcbiAgICAgIGVhY2godGhpcywgZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICAgIH0pO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5mdW5jdGlvbiB0b2dnbGVDbGFzcyh2YWx1ZSkge1xuICBpZiAodmFsdWUgJiYgdmFsdWUubGVuZ3RoKSB7XG4gICAgZWFjaCh2YWx1ZS5zcGxpdCgnICcpLCBmdW5jdGlvbihjbGFzc05hbWUpIHtcbiAgICAgIGVhY2godGhpcywgZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoY2xhc3NOYW1lKTtcbiAgICAgIH0pO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5mdW5jdGlvbiBoYXNDbGFzcyh2YWx1ZSkge1xuICByZXR1cm4gbWFrZUl0ZXJhYmxlKHRoaXMpLnNvbWUoZnVuY3Rpb24oZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyh2YWx1ZSk7XG4gIH0pO1xufVxuO1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGFkZENsYXNzOiBhZGRDbGFzcyxcbiAgcmVtb3ZlQ2xhc3M6IHJlbW92ZUNsYXNzLFxuICB0b2dnbGVDbGFzczogdG9nZ2xlQ2xhc3MsXG4gIGhhc0NsYXNzOiBoYXNDbGFzcyxcbiAgX19lc01vZHVsZTogdHJ1ZVxufTtcblxuXG59LHtcIi4vdXRpbFwiOjE5fV0sNTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcbnZhciBfX21vZHVsZU5hbWUgPSBcInNyYy9jb250YWluc1wiO1xuZnVuY3Rpb24gY29udGFpbnMoY29udGFpbmVyLCBlbGVtZW50KSB7XG4gIGlmICghY29udGFpbmVyIHx8ICFlbGVtZW50IHx8IGNvbnRhaW5lciA9PT0gZWxlbWVudCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIGlmIChjb250YWluZXIuY29udGFpbnMpIHtcbiAgICByZXR1cm4gY29udGFpbmVyLmNvbnRhaW5zKGVsZW1lbnQpO1xuICB9IGVsc2UgaWYgKGNvbnRhaW5lci5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbikge1xuICAgIHJldHVybiAhKGNvbnRhaW5lci5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihlbGVtZW50KSAmIE5vZGUuRE9DVU1FTlRfUE9TSVRJT05fRElTQ09OTkVDVEVEKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG47XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY29udGFpbnM6IGNvbnRhaW5zLFxuICBfX2VzTW9kdWxlOiB0cnVlXG59O1xuXG5cbn0se31dLDY6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19tb2R1bGVOYW1lID0gXCJzcmMvY3NzXCI7XG52YXIgZWFjaCA9IF9kZXJlcV8oJy4vdXRpbCcpLmVhY2g7XG5mdW5jdGlvbiBpc051bWVyaWModmFsdWUpIHtcbiAgcmV0dXJuICFpc05hTihwYXJzZUZsb2F0KHZhbHVlKSkgJiYgaXNGaW5pdGUodmFsdWUpO1xufVxuZnVuY3Rpb24gY2FtZWxpemUodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoLy0oW1xcZGEtel0pL2dpLCBmdW5jdGlvbihtYXRjaGVzLCBsZXR0ZXIpIHtcbiAgICByZXR1cm4gbGV0dGVyLnRvVXBwZXJDYXNlKCk7XG4gIH0pO1xufVxuZnVuY3Rpb24gZGFzaGVyaXplKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZS5yZXBsYWNlKC8oW2EtelxcZF0pKFtBLVpdKS9nLCAnJDEtJDInKS50b0xvd2VyQ2FzZSgpO1xufVxuZnVuY3Rpb24gY3NzKGtleSwgdmFsdWUpIHtcbiAgdmFyIHN0eWxlUHJvcHMsXG4gICAgICBwcm9wLFxuICAgICAgdmFsO1xuICBpZiAodHlwZW9mIGtleSA9PT0gJ3N0cmluZycpIHtcbiAgICBrZXkgPSBjYW1lbGl6ZShrZXkpO1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgZWxlbWVudCA9IHRoaXMubm9kZVR5cGUgPyB0aGlzIDogdGhpc1swXTtcbiAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgIHZhbCA9IGVsZW1lbnQuc3R5bGVba2V5XTtcbiAgICAgICAgcmV0dXJuIGlzTnVtZXJpYyh2YWwpID8gcGFyc2VGbG9hdCh2YWwpIHx8IDAgOiB2YWw7XG4gICAgICB9XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBzdHlsZVByb3BzID0ge307XG4gICAgc3R5bGVQcm9wc1trZXldID0gdmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGVQcm9wcyA9IGtleTtcbiAgICBmb3IgKHByb3AgaW4gc3R5bGVQcm9wcykge1xuICAgICAgdmFsID0gc3R5bGVQcm9wc1twcm9wXTtcbiAgICAgIGRlbGV0ZSBzdHlsZVByb3BzW3Byb3BdO1xuICAgICAgc3R5bGVQcm9wc1tjYW1lbGl6ZShwcm9wKV0gPSB2YWw7XG4gICAgfVxuICB9XG4gIGVhY2godGhpcywgZnVuY3Rpb24oZWxlbWVudCkge1xuICAgIGZvciAocHJvcCBpbiBzdHlsZVByb3BzKSB7XG4gICAgICBpZiAoc3R5bGVQcm9wc1twcm9wXSB8fCBzdHlsZVByb3BzW3Byb3BdID09PSAwKSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGVbcHJvcF0gPSBzdHlsZVByb3BzW3Byb3BdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShkYXNoZXJpemUocHJvcCkpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIHJldHVybiB0aGlzO1xufVxuO1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNzczogY3NzLFxuICBfX2VzTW9kdWxlOiB0cnVlXG59O1xuXG5cbn0se1wiLi91dGlsXCI6MTl9XSw3OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xudmFyIF9fbW9kdWxlTmFtZSA9IFwic3JjL2RhdGFcIjtcbnZhciBlYWNoID0gX2RlcmVxXygnLi91dGlsJykuZWFjaDtcbnZhciBkYXRhS2V5UHJvcCA9ICdfX2RvbXRhc3RpY19kYXRhX18nO1xuZnVuY3Rpb24gZGF0YShrZXksIHZhbHVlKSB7XG4gIGlmICh0eXBlb2Yga2V5ID09PSAnc3RyaW5nJyAmJiB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIGVsZW1lbnQgPSB0aGlzLm5vZGVUeXBlID8gdGhpcyA6IHRoaXNbMF07XG4gICAgcmV0dXJuIGVsZW1lbnQgJiYgZWxlbWVudFtkYXRhS2V5UHJvcF0gPyBlbGVtZW50W2RhdGFLZXlQcm9wXVtrZXldIDogdW5kZWZpbmVkO1xuICB9XG4gIGVhY2godGhpcywgZnVuY3Rpb24oZWxlbWVudCkge1xuICAgIGVsZW1lbnRbZGF0YUtleVByb3BdID0gZWxlbWVudFtkYXRhS2V5UHJvcF0gfHwge307XG4gICAgZWxlbWVudFtkYXRhS2V5UHJvcF1ba2V5XSA9IHZhbHVlO1xuICB9KTtcbiAgcmV0dXJuIHRoaXM7XG59XG5mdW5jdGlvbiBwcm9wKGtleSwgdmFsdWUpIHtcbiAgaWYgKHR5cGVvZiBrZXkgPT09ICdzdHJpbmcnICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgZWxlbWVudCA9IHRoaXMubm9kZVR5cGUgPyB0aGlzIDogdGhpc1swXTtcbiAgICByZXR1cm4gZWxlbWVudCAmJiBlbGVtZW50ID8gZWxlbWVudFtrZXldIDogdW5kZWZpbmVkO1xuICB9XG4gIGVhY2godGhpcywgZnVuY3Rpb24oZWxlbWVudCkge1xuICAgIGVsZW1lbnRba2V5XSA9IHZhbHVlO1xuICB9KTtcbiAgcmV0dXJuIHRoaXM7XG59XG47XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZGF0YTogZGF0YSxcbiAgcHJvcDogcHJvcCxcbiAgX19lc01vZHVsZTogdHJ1ZVxufTtcblxuXG59LHtcIi4vdXRpbFwiOjE5fV0sODpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcbnZhciBfX21vZHVsZU5hbWUgPSBcInNyYy9kb21cIjtcbnZhciB0b0FycmF5ID0gX2RlcmVxXygnLi91dGlsJykudG9BcnJheTtcbmZ1bmN0aW9uIGFwcGVuZChlbGVtZW50KSB7XG4gIGlmICh0aGlzIGluc3RhbmNlb2YgTm9kZSkge1xuICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBlbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgZWxlbWVudHMgPSBlbGVtZW50IGluc3RhbmNlb2YgTm9kZUxpc3QgPyB0b0FycmF5KGVsZW1lbnQpIDogZWxlbWVudDtcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaCh0aGlzLmFwcGVuZENoaWxkLmJpbmQodGhpcykpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgbCA9IHRoaXMubGVuZ3RoO1xuICAgIHdoaWxlIChsLS0pIHtcbiAgICAgIHZhciBlbG0gPSBsID09PSAwID8gZWxlbWVudCA6IF9jbG9uZShlbGVtZW50KTtcbiAgICAgIGFwcGVuZC5jYWxsKHRoaXNbbF0sIGVsbSk7XG4gICAgfVxuICB9XG4gIHJldHVybiB0aGlzO1xufVxuZnVuY3Rpb24gcHJlcGVuZChlbGVtZW50KSB7XG4gIGlmICh0aGlzIGluc3RhbmNlb2YgTm9kZSkge1xuICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgZWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgICB0aGlzLmluc2VydEJlZm9yZShlbGVtZW50LCB0aGlzLmZpcnN0Q2hpbGQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGVsZW1lbnRzID0gZWxlbWVudCBpbnN0YW5jZW9mIE5vZGVMaXN0ID8gdG9BcnJheShlbGVtZW50KSA6IGVsZW1lbnQ7XG4gICAgICAgIGVsZW1lbnRzLnJldmVyc2UoKS5mb3JFYWNoKHByZXBlbmQuYmluZCh0aGlzKSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBsID0gdGhpcy5sZW5ndGg7XG4gICAgd2hpbGUgKGwtLSkge1xuICAgICAgdmFyIGVsbSA9IGwgPT09IDAgPyBlbGVtZW50IDogX2Nsb25lKGVsZW1lbnQpO1xuICAgICAgcHJlcGVuZC5jYWxsKHRoaXNbbF0sIGVsbSk7XG4gICAgfVxuICB9XG4gIHJldHVybiB0aGlzO1xufVxuZnVuY3Rpb24gYmVmb3JlKGVsZW1lbnQpIHtcbiAgaWYgKHRoaXMgaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWJlZ2luJywgZWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgICB0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsIHRoaXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGVsZW1lbnRzID0gZWxlbWVudCBpbnN0YW5jZW9mIE5vZGVMaXN0ID8gdG9BcnJheShlbGVtZW50KSA6IGVsZW1lbnQ7XG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goYmVmb3JlLmJpbmQodGhpcykpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgbCA9IHRoaXMubGVuZ3RoO1xuICAgIHdoaWxlIChsLS0pIHtcbiAgICAgIHZhciBlbG0gPSBsID09PSAwID8gZWxlbWVudCA6IF9jbG9uZShlbGVtZW50KTtcbiAgICAgIGJlZm9yZS5jYWxsKHRoaXNbbF0sIGVsbSk7XG4gICAgfVxuICB9XG4gIHJldHVybiB0aGlzO1xufVxuZnVuY3Rpb24gYWZ0ZXIoZWxlbWVudCkge1xuICBpZiAodGhpcyBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJlbmQnLCBlbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgICAgIHRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCwgdGhpcy5uZXh0U2libGluZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgZWxlbWVudHMgPSBlbGVtZW50IGluc3RhbmNlb2YgTm9kZUxpc3QgPyB0b0FycmF5KGVsZW1lbnQpIDogZWxlbWVudDtcbiAgICAgICAgZWxlbWVudHMucmV2ZXJzZSgpLmZvckVhY2goYWZ0ZXIuYmluZCh0aGlzKSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBsID0gdGhpcy5sZW5ndGg7XG4gICAgd2hpbGUgKGwtLSkge1xuICAgICAgdmFyIGVsbSA9IGwgPT09IDAgPyBlbGVtZW50IDogX2Nsb25lKGVsZW1lbnQpO1xuICAgICAgYWZ0ZXIuY2FsbCh0aGlzW2xdLCBlbG0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdGhpcztcbn1cbmZ1bmN0aW9uIGNsb25lKCkge1xuICByZXR1cm4gJChfY2xvbmUodGhpcykpO1xufVxuZnVuY3Rpb24gX2Nsb25lKGVsZW1lbnQpIHtcbiAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9IGVsc2UgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQuY2xvbmVOb2RlKHRydWUpO1xuICB9IGVsc2UgaWYgKCdsZW5ndGgnIGluIGVsZW1lbnQpIHtcbiAgICByZXR1cm4gW10ubWFwLmNhbGwoZWxlbWVudCwgZnVuY3Rpb24oZWwpIHtcbiAgICAgIHJldHVybiBlbC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG47XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgYXBwZW5kOiBhcHBlbmQsXG4gIHByZXBlbmQ6IHByZXBlbmQsXG4gIGJlZm9yZTogYmVmb3JlLFxuICBhZnRlcjogYWZ0ZXIsXG4gIGNsb25lOiBjbG9uZSxcbiAgX19lc01vZHVsZTogdHJ1ZVxufTtcblxuXG59LHtcIi4vdXRpbFwiOjE5fV0sOTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcbnZhciBfX21vZHVsZU5hbWUgPSBcInNyYy9kb21fZXh0cmFcIjtcbnZhciBlYWNoID0gX2RlcmVxXygnLi91dGlsJykuZWFjaDtcbnZhciAkX18wID0gX2RlcmVxXygnLi9kb20nKSxcbiAgICBhcHBlbmQgPSAkX18wLmFwcGVuZCxcbiAgICBiZWZvcmUgPSAkX18wLmJlZm9yZSxcbiAgICBhZnRlciA9ICRfXzAuYWZ0ZXI7XG52YXIgJCA9IF9kZXJlcV8oJy4vc2VsZWN0b3InKS4kO1xuZnVuY3Rpb24gYXBwZW5kVG8oZWxlbWVudCkge1xuICB2YXIgY29udGV4dCA9IHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJyA/ICQoZWxlbWVudCkgOiBlbGVtZW50O1xuICBhcHBlbmQuY2FsbChjb250ZXh0LCB0aGlzKTtcbiAgcmV0dXJuIHRoaXM7XG59XG5mdW5jdGlvbiBlbXB0eSgpIHtcbiAgcmV0dXJuIGVhY2godGhpcywgZnVuY3Rpb24oZWxlbWVudCkge1xuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gIH0pO1xufVxuZnVuY3Rpb24gcmVtb3ZlKCkge1xuICByZXR1cm4gZWFjaCh0aGlzLCBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgICAgZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xuICAgIH1cbiAgfSk7XG59XG5mdW5jdGlvbiByZXBsYWNlV2l0aCgpIHtcbiAgcmV0dXJuIGJlZm9yZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpLnJlbW92ZSgpO1xufVxuZnVuY3Rpb24gdGV4dCh2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB0aGlzWzBdLnRleHRDb250ZW50O1xuICB9XG4gIGVhY2godGhpcywgZnVuY3Rpb24oZWxlbWVudCkge1xuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSAnJyArIHZhbHVlO1xuICB9KTtcbiAgcmV0dXJuIHRoaXM7XG59XG5mdW5jdGlvbiB2YWwodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdGhpc1swXS52YWx1ZTtcbiAgfVxuICBlYWNoKHRoaXMsIGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LnZhbHVlID0gdmFsdWU7XG4gIH0pO1xuICByZXR1cm4gdGhpcztcbn1cbjtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBhcHBlbmRUbzogYXBwZW5kVG8sXG4gIGVtcHR5OiBlbXB0eSxcbiAgcmVtb3ZlOiByZW1vdmUsXG4gIHJlcGxhY2VXaXRoOiByZXBsYWNlV2l0aCxcbiAgdGV4dDogdGV4dCxcbiAgdmFsOiB2YWwsXG4gIF9fZXNNb2R1bGU6IHRydWVcbn07XG5cblxufSx7XCIuL2RvbVwiOjgsXCIuL3NlbGVjdG9yXCI6MTYsXCIuL3V0aWxcIjoxOX1dLDEwOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xudmFyIF9fbW9kdWxlTmFtZSA9IFwic3JjL2V2ZW50XCI7XG52YXIgJF9fMCA9IF9kZXJlcV8oJy4vdXRpbCcpLFxuICAgIGdsb2JhbCA9ICRfXzAuZ2xvYmFsLFxuICAgIGVhY2ggPSAkX18wLmVhY2g7XG52YXIgY2xvc2VzdCA9IF9kZXJlcV8oJy4vc2VsZWN0b3InKS5jbG9zZXN0O1xuZnVuY3Rpb24gb24oZXZlbnROYW1lcywgc2VsZWN0b3IsIGhhbmRsZXIsIHVzZUNhcHR1cmUpIHtcbiAgaWYgKHR5cGVvZiBzZWxlY3RvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGhhbmRsZXIgPSBzZWxlY3RvcjtcbiAgICBzZWxlY3RvciA9IG51bGw7XG4gIH1cbiAgdmFyIHBhcnRzLFxuICAgICAgbmFtZXNwYWNlLFxuICAgICAgZXZlbnRMaXN0ZW5lcjtcbiAgZXZlbnROYW1lcy5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24oZXZlbnROYW1lKSB7XG4gICAgcGFydHMgPSBldmVudE5hbWUuc3BsaXQoJy4nKTtcbiAgICBldmVudE5hbWUgPSBwYXJ0c1swXSB8fCBudWxsO1xuICAgIG5hbWVzcGFjZSA9IHBhcnRzWzFdIHx8IG51bGw7XG4gICAgZXZlbnRMaXN0ZW5lciA9IHByb3h5SGFuZGxlcihoYW5kbGVyKTtcbiAgICBlYWNoKHRoaXMsIGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgIGlmIChzZWxlY3RvciAmJiBldmVudE5hbWUgaW4gaG92ZXJFdmVudHMpIHtcbiAgICAgICAgZXZlbnRMaXN0ZW5lciA9IGhvdmVySGFuZGxlcihldmVudExpc3RlbmVyKTtcbiAgICAgIH1cbiAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICBldmVudExpc3RlbmVyID0gZGVsZWdhdGVIYW5kbGVyLmJpbmQoZWxlbWVudCwgc2VsZWN0b3IsIGV2ZW50TGlzdGVuZXIpO1xuICAgICAgfVxuICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGhvdmVyRXZlbnRzW2V2ZW50TmFtZV0gfHwgZXZlbnROYW1lLCBldmVudExpc3RlbmVyLCB1c2VDYXB0dXJlIHx8IGZhbHNlKTtcbiAgICAgIGdldEhhbmRsZXJzKGVsZW1lbnQpLnB1c2goe1xuICAgICAgICBldmVudE5hbWU6IGV2ZW50TmFtZSxcbiAgICAgICAgaGFuZGxlcjogaGFuZGxlcixcbiAgICAgICAgZXZlbnRMaXN0ZW5lcjogZXZlbnRMaXN0ZW5lcixcbiAgICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yLFxuICAgICAgICBuYW1lc3BhY2U6IG5hbWVzcGFjZVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sIHRoaXMpO1xuICByZXR1cm4gdGhpcztcbn1cbmZ1bmN0aW9uIG9mZigpIHtcbiAgdmFyIGV2ZW50TmFtZXMgPSBhcmd1bWVudHNbMF0gIT09ICh2b2lkIDApID8gYXJndW1lbnRzWzBdIDogJyc7XG4gIHZhciBzZWxlY3RvciA9IGFyZ3VtZW50c1sxXTtcbiAgdmFyIGhhbmRsZXIgPSBhcmd1bWVudHNbMl07XG4gIHZhciB1c2VDYXB0dXJlID0gYXJndW1lbnRzWzNdO1xuICBpZiAodHlwZW9mIHNlbGVjdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgaGFuZGxlciA9IHNlbGVjdG9yO1xuICAgIHNlbGVjdG9yID0gbnVsbDtcbiAgfVxuICB2YXIgcGFydHMsXG4gICAgICBuYW1lc3BhY2UsXG4gICAgICBoYW5kbGVycztcbiAgZXZlbnROYW1lcy5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24oZXZlbnROYW1lKSB7XG4gICAgcGFydHMgPSBldmVudE5hbWUuc3BsaXQoJy4nKTtcbiAgICBldmVudE5hbWUgPSBwYXJ0c1swXSB8fCBudWxsO1xuICAgIG5hbWVzcGFjZSA9IHBhcnRzWzFdIHx8IG51bGw7XG4gICAgZWFjaCh0aGlzLCBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICBoYW5kbGVycyA9IGdldEhhbmRsZXJzKGVsZW1lbnQpO1xuICAgICAgZWFjaChoYW5kbGVycy5maWx0ZXIoZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICByZXR1cm4gKCghZXZlbnROYW1lIHx8IGl0ZW0uZXZlbnROYW1lID09PSBldmVudE5hbWUpICYmICghbmFtZXNwYWNlIHx8IGl0ZW0ubmFtZXNwYWNlID09PSBuYW1lc3BhY2UpICYmICghaGFuZGxlciB8fCBpdGVtLmhhbmRsZXIgPT09IGhhbmRsZXIpICYmICghc2VsZWN0b3IgfHwgaXRlbS5zZWxlY3RvciA9PT0gc2VsZWN0b3IpKTtcbiAgICAgIH0pLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihob3ZlckV2ZW50c1tpdGVtLmV2ZW50TmFtZV0gfHwgaXRlbS5ldmVudE5hbWUsIGl0ZW0uZXZlbnRMaXN0ZW5lciwgdXNlQ2FwdHVyZSB8fCBmYWxzZSk7XG4gICAgICAgIGhhbmRsZXJzLnNwbGljZShoYW5kbGVycy5pbmRleE9mKGl0ZW0pLCAxKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKCFldmVudE5hbWUgJiYgIW5hbWVzcGFjZSAmJiAhc2VsZWN0b3IgJiYgIWhhbmRsZXIpIHtcbiAgICAgICAgY2xlYXJIYW5kbGVycyhlbGVtZW50KTtcbiAgICAgIH0gZWxzZSBpZiAoaGFuZGxlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNsZWFySGFuZGxlcnMoZWxlbWVudCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIHRoaXMpO1xuICByZXR1cm4gdGhpcztcbn1cbmZ1bmN0aW9uIGRlbGVnYXRlKHNlbGVjdG9yLCBldmVudE5hbWUsIGhhbmRsZXIpIHtcbiAgcmV0dXJuIG9uLmNhbGwodGhpcywgZXZlbnROYW1lLCBzZWxlY3RvciwgaGFuZGxlcik7XG59XG5mdW5jdGlvbiB1bmRlbGVnYXRlKHNlbGVjdG9yLCBldmVudE5hbWUsIGhhbmRsZXIpIHtcbiAgcmV0dXJuIG9mZi5jYWxsKHRoaXMsIGV2ZW50TmFtZSwgc2VsZWN0b3IsIGhhbmRsZXIpO1xufVxuZnVuY3Rpb24gdHJpZ2dlcih0eXBlLCBkYXRhKSB7XG4gIHZhciBwYXJhbXMgPSBhcmd1bWVudHNbMl0gIT09ICh2b2lkIDApID8gYXJndW1lbnRzWzJdIDoge307XG4gIHBhcmFtcy5idWJibGVzID0gdHlwZW9mIHBhcmFtcy5idWJibGVzID09PSAnYm9vbGVhbicgPyBwYXJhbXMuYnViYmxlcyA6IHRydWU7XG4gIHBhcmFtcy5jYW5jZWxhYmxlID0gdHlwZW9mIHBhcmFtcy5jYW5jZWxhYmxlID09PSAnYm9vbGVhbicgPyBwYXJhbXMuY2FuY2VsYWJsZSA6IHRydWU7XG4gIHBhcmFtcy5wcmV2ZW50RGVmYXVsdCA9IHR5cGVvZiBwYXJhbXMucHJldmVudERlZmF1bHQgPT09ICdib29sZWFuJyA/IHBhcmFtcy5wcmV2ZW50RGVmYXVsdCA6IGZhbHNlO1xuICBwYXJhbXMuZGV0YWlsID0gZGF0YTtcbiAgdmFyIGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KHR5cGUsIHBhcmFtcyk7XG4gIGV2ZW50Ll9wcmV2ZW50RGVmYXVsdCA9IHBhcmFtcy5wcmV2ZW50RGVmYXVsdDtcbiAgZWFjaCh0aGlzLCBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgaWYgKCFwYXJhbXMuYnViYmxlcyB8fCBpc0V2ZW50QnViYmxpbmdJbkRldGFjaGVkVHJlZSB8fCBpc0F0dGFjaGVkVG9Eb2N1bWVudChlbGVtZW50KSkge1xuICAgICAgZGlzcGF0Y2hFdmVudChlbGVtZW50LCBldmVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyaWdnZXJGb3JQYXRoKGVsZW1lbnQsIHR5cGUsIHBhcmFtcyk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHRoaXM7XG59XG5mdW5jdGlvbiB0cmlnZ2VySGFuZGxlcih0eXBlLCBkYXRhKSB7XG4gIGlmICh0aGlzWzBdKSB7XG4gICAgdHJpZ2dlci5jYWxsKHRoaXNbMF0sIHR5cGUsIGRhdGEsIHtcbiAgICAgIGJ1YmJsZXM6IGZhbHNlLFxuICAgICAgcHJldmVudERlZmF1bHQ6IHRydWVcbiAgICB9KTtcbiAgfVxufVxuZnVuY3Rpb24gaXNBdHRhY2hlZFRvRG9jdW1lbnQoZWxlbWVudCkge1xuICBpZiAoZWxlbWVudCA9PT0gd2luZG93IHx8IGVsZW1lbnQgPT09IGRvY3VtZW50KSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuICQuY29udGFpbnMoZWxlbWVudC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZWxlbWVudCk7XG59XG5mdW5jdGlvbiB0cmlnZ2VyRm9yUGF0aChlbGVtZW50LCB0eXBlKSB7XG4gIHZhciBwYXJhbXMgPSBhcmd1bWVudHNbMl0gIT09ICh2b2lkIDApID8gYXJndW1lbnRzWzJdIDoge307XG4gIHBhcmFtcy5idWJibGVzID0gZmFsc2U7XG4gIHZhciBldmVudCA9IG5ldyBDdXN0b21FdmVudCh0eXBlLCBwYXJhbXMpO1xuICBldmVudC5fdGFyZ2V0ID0gZWxlbWVudDtcbiAgZG8ge1xuICAgIGRpc3BhdGNoRXZlbnQoZWxlbWVudCwgZXZlbnQpO1xuICB9IHdoaWxlIChlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlKTtcbn1cbnZhciBkaXJlY3RFdmVudE1ldGhvZHMgPSBbJ2JsdXInLCAnY2xpY2snLCAnZm9jdXMnLCAnc2VsZWN0J107XG5mdW5jdGlvbiBkaXNwYXRjaEV2ZW50KGVsZW1lbnQsIGV2ZW50KSB7XG4gIGlmIChkaXJlY3RFdmVudE1ldGhvZHMuaW5kZXhPZihldmVudC50eXBlKSAhPT0gLTEgJiYgdHlwZW9mIGVsZW1lbnRbZXZlbnQudHlwZV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICBlbGVtZW50W2V2ZW50LnR5cGVdKCk7XG4gIH0gZWxzZSB7XG4gICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgfVxufVxudmFyIGV2ZW50S2V5UHJvcCA9ICdfX2RvbXRhc3RpY19ldmVudF9fJztcbnZhciBpZCA9IDE7XG52YXIgaGFuZGxlcnMgPSB7fTtcbnZhciB1bnVzZWRLZXlzID0gW107XG5mdW5jdGlvbiBnZXRIYW5kbGVycyhlbGVtZW50KSB7XG4gIGlmICghZWxlbWVudFtldmVudEtleVByb3BdKSB7XG4gICAgZWxlbWVudFtldmVudEtleVByb3BdID0gdW51c2VkS2V5cy5sZW5ndGggPT09IDAgPyArK2lkIDogdW51c2VkS2V5cy5wb3AoKTtcbiAgfVxuICB2YXIga2V5ID0gZWxlbWVudFtldmVudEtleVByb3BdO1xuICByZXR1cm4gaGFuZGxlcnNba2V5XSB8fCAoaGFuZGxlcnNba2V5XSA9IFtdKTtcbn1cbmZ1bmN0aW9uIGNsZWFySGFuZGxlcnMoZWxlbWVudCkge1xuICB2YXIga2V5ID0gZWxlbWVudFtldmVudEtleVByb3BdO1xuICBpZiAoaGFuZGxlcnNba2V5XSkge1xuICAgIGhhbmRsZXJzW2tleV0gPSBudWxsO1xuICAgIGVsZW1lbnRba2V5XSA9IG51bGw7XG4gICAgdW51c2VkS2V5cy5wdXNoKGtleSk7XG4gIH1cbn1cbmZ1bmN0aW9uIHByb3h5SGFuZGxlcihoYW5kbGVyKSB7XG4gIHJldHVybiBmdW5jdGlvbihldmVudCkge1xuICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBhdWdtZW50RXZlbnQoZXZlbnQpLCBldmVudC5kZXRhaWwpO1xuICB9O1xufVxudmFyIGF1Z21lbnRFdmVudCA9IChmdW5jdGlvbigpIHtcbiAgdmFyIG1ldGhvZE5hbWUsXG4gICAgICBldmVudE1ldGhvZHMgPSB7XG4gICAgICAgIHByZXZlbnREZWZhdWx0OiAnaXNEZWZhdWx0UHJldmVudGVkJyxcbiAgICAgICAgc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uOiAnaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQnLFxuICAgICAgICBzdG9wUHJvcGFnYXRpb246ICdpc1Byb3BhZ2F0aW9uU3RvcHBlZCdcbiAgICAgIH0sXG4gICAgICBub29wID0gKGZ1bmN0aW9uKCkge30pLFxuICAgICAgcmV0dXJuVHJ1ZSA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9KSxcbiAgICAgIHJldHVybkZhbHNlID0gKGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KTtcbiAgcmV0dXJuIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKCFldmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQgfHwgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIHx8IGV2ZW50LnN0b3BQcm9wYWdhdGlvbikge1xuICAgICAgZm9yIChtZXRob2ROYW1lIGluIGV2ZW50TWV0aG9kcykge1xuICAgICAgICAoZnVuY3Rpb24obWV0aG9kTmFtZSwgdGVzdE1ldGhvZE5hbWUsIG9yaWdpbmFsTWV0aG9kKSB7XG4gICAgICAgICAgZXZlbnRbbWV0aG9kTmFtZV0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXNbdGVzdE1ldGhvZE5hbWVdID0gcmV0dXJuVHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBvcmlnaW5hbE1ldGhvZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgIH07XG4gICAgICAgICAgZXZlbnRbdGVzdE1ldGhvZE5hbWVdID0gcmV0dXJuRmFsc2U7XG4gICAgICAgIH0obWV0aG9kTmFtZSwgZXZlbnRNZXRob2RzW21ldGhvZE5hbWVdLCBldmVudFttZXRob2ROYW1lXSB8fCBub29wKSk7XG4gICAgICB9XG4gICAgICBpZiAoZXZlbnQuX3ByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBldmVudDtcbiAgfTtcbn0pKCk7XG5mdW5jdGlvbiBkZWxlZ2F0ZUhhbmRsZXIoc2VsZWN0b3IsIGhhbmRsZXIsIGV2ZW50KSB7XG4gIHZhciBldmVudFRhcmdldCA9IGV2ZW50Ll90YXJnZXQgfHwgZXZlbnQudGFyZ2V0LFxuICAgICAgY3VycmVudFRhcmdldCA9IGNsb3Nlc3QuY2FsbChbZXZlbnRUYXJnZXRdLCBzZWxlY3RvciwgdGhpcylbMF07XG4gIGlmIChjdXJyZW50VGFyZ2V0ICYmIGN1cnJlbnRUYXJnZXQgIT09IHRoaXMpIHtcbiAgICBpZiAoY3VycmVudFRhcmdldCA9PT0gZXZlbnRUYXJnZXQgfHwgIShldmVudC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCAmJiBldmVudC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKSkge1xuICAgICAgaGFuZGxlci5jYWxsKGN1cnJlbnRUYXJnZXQsIGV2ZW50KTtcbiAgICB9XG4gIH1cbn1cbnZhciBob3ZlckV2ZW50cyA9IHtcbiAgbW91c2VlbnRlcjogJ21vdXNlb3ZlcicsXG4gIG1vdXNlbGVhdmU6ICdtb3VzZW91dCdcbn07XG5mdW5jdGlvbiBob3ZlckhhbmRsZXIoaGFuZGxlcikge1xuICByZXR1cm4gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB2YXIgcmVsYXRlZFRhcmdldCA9IGV2ZW50LnJlbGF0ZWRUYXJnZXQ7XG4gICAgaWYgKCFyZWxhdGVkVGFyZ2V0IHx8IChyZWxhdGVkVGFyZ2V0ICE9PSB0aGlzICYmICEkLmNvbnRhaW5zKHRoaXMsIHJlbGF0ZWRUYXJnZXQpKSkge1xuICAgICAgcmV0dXJuIGhhbmRsZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH07XG59XG4oZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIEN1c3RvbUV2ZW50KGV2ZW50KSB7XG4gICAgdmFyIHBhcmFtcyA9IGFyZ3VtZW50c1sxXSAhPT0gKHZvaWQgMCkgPyBhcmd1bWVudHNbMV0gOiB7XG4gICAgICBidWJibGVzOiBmYWxzZSxcbiAgICAgIGNhbmNlbGFibGU6IGZhbHNlLFxuICAgICAgZGV0YWlsOiB1bmRlZmluZWRcbiAgICB9O1xuICAgIHZhciBjdXN0b21FdmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xuICAgIGN1c3RvbUV2ZW50LmluaXRDdXN0b21FdmVudChldmVudCwgcGFyYW1zLmJ1YmJsZXMsIHBhcmFtcy5jYW5jZWxhYmxlLCBwYXJhbXMuZGV0YWlsKTtcbiAgICByZXR1cm4gY3VzdG9tRXZlbnQ7XG4gIH1cbiAgQ3VzdG9tRXZlbnQucHJvdG90eXBlID0gZ2xvYmFsLkN1c3RvbUV2ZW50ICYmIGdsb2JhbC5DdXN0b21FdmVudC5wcm90b3R5cGU7XG4gIGdsb2JhbC5DdXN0b21FdmVudCA9IEN1c3RvbUV2ZW50O1xufSkoKTtcbnZhciBpc0V2ZW50QnViYmxpbmdJbkRldGFjaGVkVHJlZSA9IChmdW5jdGlvbigpIHtcbiAgdmFyIGlzQnViYmxpbmcgPSBmYWxzZSxcbiAgICAgIGRvYyA9IGdsb2JhbC5kb2N1bWVudDtcbiAgaWYgKGRvYykge1xuICAgIHZhciBwYXJlbnQgPSBkb2MuY3JlYXRlRWxlbWVudCgnZGl2JyksXG4gICAgICAgIGNoaWxkID0gcGFyZW50LmNsb25lTm9kZSgpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgcGFyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2UnLCBmdW5jdGlvbigpIHtcbiAgICAgIGlzQnViYmxpbmcgPSB0cnVlO1xuICAgIH0pO1xuICAgIGNoaWxkLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdlJywge2J1YmJsZXM6IHRydWV9KSk7XG4gIH1cbiAgcmV0dXJuIGlzQnViYmxpbmc7XG59KSgpO1xudmFyIGJpbmQgPSBvbixcbiAgICB1bmJpbmQgPSBvZmY7XG47XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgb246IG9uLFxuICBvZmY6IG9mZixcbiAgZGVsZWdhdGU6IGRlbGVnYXRlLFxuICB1bmRlbGVnYXRlOiB1bmRlbGVnYXRlLFxuICB0cmlnZ2VyOiB0cmlnZ2VyLFxuICB0cmlnZ2VySGFuZGxlcjogdHJpZ2dlckhhbmRsZXIsXG4gIGJpbmQ6IGJpbmQsXG4gIHVuYmluZDogdW5iaW5kLFxuICBfX2VzTW9kdWxlOiB0cnVlXG59O1xuXG5cbn0se1wiLi9zZWxlY3RvclwiOjE2LFwiLi91dGlsXCI6MTl9XSwxMTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcbnZhciBfX21vZHVsZU5hbWUgPSBcInNyYy9odG1sXCI7XG52YXIgZWFjaCA9IF9kZXJlcV8oJy4vdXRpbCcpLmVhY2g7XG5mdW5jdGlvbiBodG1sKGZyYWdtZW50KSB7XG4gIGlmICh0eXBlb2YgZnJhZ21lbnQgIT09ICdzdHJpbmcnKSB7XG4gICAgdmFyIGVsZW1lbnQgPSB0aGlzLm5vZGVUeXBlID8gdGhpcyA6IHRoaXNbMF07XG4gICAgcmV0dXJuIGVsZW1lbnQgPyBlbGVtZW50LmlubmVySFRNTCA6IHVuZGVmaW5lZDtcbiAgfVxuICBlYWNoKHRoaXMsIGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IGZyYWdtZW50O1xuICB9KTtcbiAgcmV0dXJuIHRoaXM7XG59XG47XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaHRtbDogaHRtbCxcbiAgX19lc01vZHVsZTogdHJ1ZVxufTtcblxuXG59LHtcIi4vdXRpbFwiOjE5fV0sMTI6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19tb2R1bGVOYW1lID0gXCJzcmMvaW5kZXhcIjtcbnZhciAkID0gX2RlcmVxXygnLi9hcGknKS5kZWZhdWx0O1xudmFyICRfX2RlZmF1bHQgPSAkO1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGRlZmF1bHQ6ICRfX2RlZmF1bHQsXG4gIF9fZXNNb2R1bGU6IHRydWVcbn07XG5cblxufSx7XCIuL2FwaVwiOjF9XSwxMzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcbnZhciBfX21vZHVsZU5hbWUgPSBcInNyYy9tb2RlXCI7XG52YXIgZ2xvYmFsID0gX2RlcmVxXygnLi91dGlsJykuZ2xvYmFsO1xudmFyIGlzTmF0aXZlID0gZmFsc2U7XG5mdW5jdGlvbiBuYXRpdmUoKSB7XG4gIHZhciBnb05hdGl2ZSA9IGFyZ3VtZW50c1swXSAhPT0gKHZvaWQgMCkgPyBhcmd1bWVudHNbMF0gOiB0cnVlO1xuICB2YXIgd2FzTmF0aXZlID0gaXNOYXRpdmU7XG4gIGlzTmF0aXZlID0gZ29OYXRpdmU7XG4gIGlmIChnbG9iYWwuJCkge1xuICAgIGdsb2JhbC4kLmlzTmF0aXZlID0gaXNOYXRpdmU7XG4gIH1cbiAgaWYgKCF3YXNOYXRpdmUgJiYgaXNOYXRpdmUpIHtcbiAgICBhdWdtZW50TmF0aXZlUHJvdG90eXBlcyh0aGlzLmZuLCB0aGlzLmZuTGlzdCk7XG4gIH1cbiAgaWYgKHdhc05hdGl2ZSAmJiAhaXNOYXRpdmUpIHtcbiAgICB1bmF1Z21lbnROYXRpdmVQcm90b3R5cGVzKHRoaXMuZm4sIHRoaXMuZm5MaXN0KTtcbiAgfVxuICByZXR1cm4gaXNOYXRpdmU7XG59XG52YXIgTm9kZVByb3RvID0gdHlwZW9mIE5vZGUgIT09ICd1bmRlZmluZWQnICYmIE5vZGUucHJvdG90eXBlLFxuICAgIE5vZGVMaXN0UHJvdG8gPSB0eXBlb2YgTm9kZUxpc3QgIT09ICd1bmRlZmluZWQnICYmIE5vZGVMaXN0LnByb3RvdHlwZTtcbmZ1bmN0aW9uIGF1Z21lbnQob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmICghb2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlXG4gICAgfSk7XG4gIH1cbn1cbnZhciB1bmF1Z21lbnQgPSAoZnVuY3Rpb24ob2JqLCBrZXkpIHtcbiAgZGVsZXRlIG9ialtrZXldO1xufSk7XG5mdW5jdGlvbiBhdWdtZW50TmF0aXZlUHJvdG90eXBlcyhtZXRob2RzTm9kZSwgbWV0aG9kc05vZGVMaXN0KSB7XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIG1ldGhvZHNOb2RlKSB7XG4gICAgYXVnbWVudChOb2RlUHJvdG8sIGtleSwgbWV0aG9kc05vZGVba2V5XSk7XG4gICAgYXVnbWVudChOb2RlTGlzdFByb3RvLCBrZXksIG1ldGhvZHNOb2RlW2tleV0pO1xuICB9XG4gIGZvciAoa2V5IGluIG1ldGhvZHNOb2RlTGlzdCkge1xuICAgIGF1Z21lbnQoTm9kZUxpc3RQcm90bywga2V5LCBtZXRob2RzTm9kZUxpc3Rba2V5XSk7XG4gIH1cbn1cbmZ1bmN0aW9uIHVuYXVnbWVudE5hdGl2ZVByb3RvdHlwZXMobWV0aG9kc05vZGUsIG1ldGhvZHNOb2RlTGlzdCkge1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBtZXRob2RzTm9kZSkge1xuICAgIHVuYXVnbWVudChOb2RlUHJvdG8sIGtleSk7XG4gICAgdW5hdWdtZW50KE5vZGVMaXN0UHJvdG8sIGtleSk7XG4gIH1cbiAgZm9yIChrZXkgaW4gbWV0aG9kc05vZGVMaXN0KSB7XG4gICAgdW5hdWdtZW50KE5vZGVMaXN0UHJvdG8sIGtleSk7XG4gIH1cbn1cbjtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBpc05hdGl2ZTogaXNOYXRpdmUsXG4gIG5hdGl2ZTogbmF0aXZlLFxuICBfX2VzTW9kdWxlOiB0cnVlXG59O1xuXG5cbn0se1wiLi91dGlsXCI6MTl9XSwxNDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcbnZhciBfX21vZHVsZU5hbWUgPSBcInNyYy9ub2NvbmZsaWN0XCI7XG52YXIgZ2xvYmFsID0gX2RlcmVxXygnLi91dGlsJykuZ2xvYmFsO1xudmFyIHByZXZpb3VzTGliID0gZ2xvYmFsLiQ7XG5mdW5jdGlvbiBub0NvbmZsaWN0KCkge1xuICBnbG9iYWwuJCA9IHByZXZpb3VzTGliO1xuICByZXR1cm4gdGhpcztcbn1cbjtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBub0NvbmZsaWN0OiBub0NvbmZsaWN0LFxuICBfX2VzTW9kdWxlOiB0cnVlXG59O1xuXG5cbn0se1wiLi91dGlsXCI6MTl9XSwxNTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcbnZhciBfX21vZHVsZU5hbWUgPSBcInNyYy9yZWFkeVwiO1xuZnVuY3Rpb24gcmVhZHkoaGFuZGxlcikge1xuICBpZiAoL2NvbXBsZXRlfGxvYWRlZHxpbnRlcmFjdGl2ZS8udGVzdChkb2N1bWVudC5yZWFkeVN0YXRlKSAmJiBkb2N1bWVudC5ib2R5KSB7XG4gICAgaGFuZGxlcigpO1xuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBoYW5kbGVyLCBmYWxzZSk7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG47XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcmVhZHk6IHJlYWR5LFxuICBfX2VzTW9kdWxlOiB0cnVlXG59O1xuXG5cbn0se31dLDE2OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xudmFyIF9fbW9kdWxlTmFtZSA9IFwic3JjL3NlbGVjdG9yXCI7XG52YXIgJF9fMCA9IF9kZXJlcV8oJy4vdXRpbCcpLFxuICAgIGdsb2JhbCA9ICRfXzAuZ2xvYmFsLFxuICAgIG1ha2VJdGVyYWJsZSA9ICRfXzAubWFrZUl0ZXJhYmxlO1xudmFyIHNsaWNlID0gW10uc2xpY2UsXG4gICAgaXNQcm90b3R5cGVTZXQgPSBmYWxzZSxcbiAgICByZUZyYWdtZW50ID0gL15cXHMqPChcXHcrfCEpW14+XSo+LyxcbiAgICByZVNpbmdsZVRhZyA9IC9ePChcXHcrKVxccypcXC8/Pig/OjxcXC9cXDE+fCkkLyxcbiAgICByZVNpbXBsZVNlbGVjdG9yID0gL15bXFwuI10/W1xcdy1dKiQvO1xuZnVuY3Rpb24gJChzZWxlY3Rvcikge1xuICB2YXIgY29udGV4dCA9IGFyZ3VtZW50c1sxXSAhPT0gKHZvaWQgMCkgPyBhcmd1bWVudHNbMV0gOiBkb2N1bWVudDtcbiAgdmFyIGNvbGxlY3Rpb247XG4gIGlmICghc2VsZWN0b3IpIHtcbiAgICBjb2xsZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChudWxsKTtcbiAgfSBlbHNlIGlmIChzZWxlY3RvciBpbnN0YW5jZW9mIFdyYXBwZXIpIHtcbiAgICByZXR1cm4gc2VsZWN0b3I7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHNlbGVjdG9yICE9PSAnc3RyaW5nJykge1xuICAgIGNvbGxlY3Rpb24gPSBtYWtlSXRlcmFibGUoc2VsZWN0b3IpO1xuICB9IGVsc2UgaWYgKHJlRnJhZ21lbnQudGVzdChzZWxlY3RvcikpIHtcbiAgICBjb2xsZWN0aW9uID0gY3JlYXRlRnJhZ21lbnQoc2VsZWN0b3IpO1xuICB9IGVsc2Uge1xuICAgIGNvbnRleHQgPSB0eXBlb2YgY29udGV4dCA9PT0gJ3N0cmluZycgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRleHQpIDogY29udGV4dC5sZW5ndGggPyBjb250ZXh0WzBdIDogY29udGV4dDtcbiAgICBjb2xsZWN0aW9uID0gcXVlcnlTZWxlY3RvcihzZWxlY3RvciwgY29udGV4dCk7XG4gIH1cbiAgcmV0dXJuICQuaXNOYXRpdmUgPyBjb2xsZWN0aW9uIDogd3JhcChjb2xsZWN0aW9uKTtcbn1cbmZ1bmN0aW9uIGZpbmQoc2VsZWN0b3IpIHtcbiAgcmV0dXJuICQoc2VsZWN0b3IsIHRoaXMpO1xufVxuZnVuY3Rpb24gY2xvc2VzdChzZWxlY3RvciwgY29udGV4dCkge1xuICB2YXIgbm9kZSA9IHRoaXNbMF07XG4gIGZvciAoOyBub2RlLm5vZGVUeXBlICE9PSBub2RlLkRPQ1VNRU5UX05PREUgJiYgbm9kZSAhPT0gY29udGV4dDsgbm9kZSA9IG5vZGUucGFyZW50Tm9kZSkge1xuICAgIGlmIChtYXRjaGVzKG5vZGUsIHNlbGVjdG9yKSkge1xuICAgICAgcmV0dXJuICQobm9kZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiAkKCk7XG59XG52YXIgbWF0Y2hlcyA9IChmdW5jdGlvbigpIHtcbiAgdmFyIGNvbnRleHQgPSB0eXBlb2YgRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcgPyBFbGVtZW50LnByb3RvdHlwZSA6IGdsb2JhbCxcbiAgICAgIF9tYXRjaGVzID0gY29udGV4dC5tYXRjaGVzIHx8IGNvbnRleHQubWF0Y2hlc1NlbGVjdG9yIHx8IGNvbnRleHQubW96TWF0Y2hlc1NlbGVjdG9yIHx8IGNvbnRleHQud2Via2l0TWF0Y2hlc1NlbGVjdG9yIHx8IGNvbnRleHQubXNNYXRjaGVzU2VsZWN0b3IgfHwgY29udGV4dC5vTWF0Y2hlc1NlbGVjdG9yO1xuICByZXR1cm4gZnVuY3Rpb24oZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gX21hdGNoZXMuY2FsbChlbGVtZW50LCBzZWxlY3Rvcik7XG4gIH07XG59KSgpO1xuZnVuY3Rpb24gcXVlcnlTZWxlY3RvcihzZWxlY3RvciwgY29udGV4dCkge1xuICB2YXIgaXNTaW1wbGVTZWxlY3RvciA9IHJlU2ltcGxlU2VsZWN0b3IudGVzdChzZWxlY3Rvcik7XG4gIGlmIChpc1NpbXBsZVNlbGVjdG9yICYmICEkLmlzTmF0aXZlKSB7XG4gICAgaWYgKHNlbGVjdG9yWzBdID09PSAnIycpIHtcbiAgICAgIHZhciBlbGVtZW50ID0gKGNvbnRleHQuZ2V0RWxlbWVudEJ5SWQgPyBjb250ZXh0IDogZG9jdW1lbnQpLmdldEVsZW1lbnRCeUlkKHNlbGVjdG9yLnNsaWNlKDEpKTtcbiAgICAgIHJldHVybiBlbGVtZW50ID8gW2VsZW1lbnRdIDogW107XG4gICAgfVxuICAgIGlmIChzZWxlY3RvclswXSA9PT0gJy4nKSB7XG4gICAgICByZXR1cm4gY29udGV4dC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHNlbGVjdG9yLnNsaWNlKDEpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbnRleHQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoc2VsZWN0b3IpO1xuICB9XG4gIHJldHVybiBjb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xufVxuZnVuY3Rpb24gY3JlYXRlRnJhZ21lbnQoaHRtbCkge1xuICBpZiAocmVTaW5nbGVUYWcudGVzdChodG1sKSkge1xuICAgIHJldHVybiBbZG9jdW1lbnQuY3JlYXRlRWxlbWVudChSZWdFeHAuJDEpXTtcbiAgfVxuICB2YXIgZWxlbWVudHMgPSBbXSxcbiAgICAgIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuICAgICAgY2hpbGRyZW4gPSBjb250YWluZXIuY2hpbGROb2RlcztcbiAgY29udGFpbmVyLmlubmVySFRNTCA9IGh0bWw7XG4gIGZvciAodmFyIGkgPSAwLFxuICAgICAgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGVsZW1lbnRzLnB1c2goY2hpbGRyZW5baV0pO1xuICB9XG4gIHJldHVybiBlbGVtZW50cztcbn1cbmZ1bmN0aW9uIHdyYXAoY29sbGVjdGlvbikge1xuICBpZiAoIWlzUHJvdG90eXBlU2V0KSB7XG4gICAgV3JhcHBlci5wcm90b3R5cGUgPSAkLmZuO1xuICAgIFdyYXBwZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gV3JhcHBlcjtcbiAgICBpc1Byb3RvdHlwZVNldCA9IHRydWU7XG4gIH1cbiAgcmV0dXJuIG5ldyBXcmFwcGVyKGNvbGxlY3Rpb24pO1xufVxuZnVuY3Rpb24gV3JhcHBlcihjb2xsZWN0aW9uKSB7XG4gIHZhciBpID0gMCxcbiAgICAgIGxlbmd0aCA9IGNvbGxlY3Rpb24ubGVuZ3RoO1xuICBmb3IgKDsgaSA8IGxlbmd0aDsgKSB7XG4gICAgdGhpc1tpXSA9IGNvbGxlY3Rpb25baSsrXTtcbiAgfVxuICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbn1cbjtcbm1vZHVsZS5leHBvcnRzID0ge1xuICAkOiAkLFxuICBmaW5kOiBmaW5kLFxuICBjbG9zZXN0OiBjbG9zZXN0LFxuICBtYXRjaGVzOiBtYXRjaGVzLFxuICBfX2VzTW9kdWxlOiB0cnVlXG59O1xuXG5cbn0se1wiLi91dGlsXCI6MTl9XSwxNzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcbnZhciBfX21vZHVsZU5hbWUgPSBcInNyYy9zZWxlY3Rvcl9leHRyYVwiO1xudmFyICRfXzAgPSBfZGVyZXFfKCcuL3V0aWwnKSxcbiAgICBlYWNoID0gJF9fMC5lYWNoLFxuICAgIHRvQXJyYXkgPSAkX18wLnRvQXJyYXk7XG52YXIgJF9fMCA9IF9kZXJlcV8oJy4vc2VsZWN0b3InKSxcbiAgICAkID0gJF9fMC4kLFxuICAgIG1hdGNoZXMgPSAkX18wLm1hdGNoZXM7XG5mdW5jdGlvbiBjaGlsZHJlbihzZWxlY3Rvcikge1xuICB2YXIgbm9kZXMgPSBbXTtcbiAgZWFjaCh0aGlzLCBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQuY2hpbGRyZW4pIHtcbiAgICAgIGVhY2goZWxlbWVudC5jaGlsZHJlbiwgZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgICAgaWYgKCFzZWxlY3RvciB8fCAoc2VsZWN0b3IgJiYgbWF0Y2hlcyhjaGlsZCwgc2VsZWN0b3IpKSkge1xuICAgICAgICAgIG5vZGVzLnB1c2goY2hpbGQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gJChub2Rlcyk7XG59XG5mdW5jdGlvbiBjb250ZW50cygpIHtcbiAgdmFyIG5vZGVzID0gW107XG4gIGVhY2godGhpcywgZnVuY3Rpb24oZWxlbWVudCkge1xuICAgIG5vZGVzLnB1c2guYXBwbHkobm9kZXMsIHRvQXJyYXkoZWxlbWVudC5jaGlsZE5vZGVzKSk7XG4gIH0pO1xuICByZXR1cm4gJChub2Rlcyk7XG59XG5mdW5jdGlvbiBlcShpbmRleCkge1xuICByZXR1cm4gc2xpY2UuY2FsbCh0aGlzLCBpbmRleCwgaW5kZXggKyAxKTtcbn1cbmZ1bmN0aW9uIGdldChpbmRleCkge1xuICByZXR1cm4gdGhpc1tpbmRleF07XG59XG5mdW5jdGlvbiBwYXJlbnQoc2VsZWN0b3IpIHtcbiAgdmFyIG5vZGVzID0gW107XG4gIGVhY2godGhpcywgZnVuY3Rpb24oZWxlbWVudCkge1xuICAgIGlmICghc2VsZWN0b3IgfHwgKHNlbGVjdG9yICYmIG1hdGNoZXMoZWxlbWVudC5wYXJlbnROb2RlLCBzZWxlY3RvcikpKSB7XG4gICAgICBub2Rlcy5wdXNoKGVsZW1lbnQucGFyZW50Tm9kZSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuICQobm9kZXMpO1xufVxuZnVuY3Rpb24gc2xpY2Uoc3RhcnQsIGVuZCkge1xuICByZXR1cm4gJChbXS5zbGljZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbn1cbjtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBjaGlsZHJlbjogY2hpbGRyZW4sXG4gIGNvbnRlbnRzOiBjb250ZW50cyxcbiAgZXE6IGVxLFxuICBnZXQ6IGdldCxcbiAgcGFyZW50OiBwYXJlbnQsXG4gIHNsaWNlOiBzbGljZSxcbiAgX19lc01vZHVsZTogdHJ1ZVxufTtcblxuXG59LHtcIi4vc2VsZWN0b3JcIjoxNixcIi4vdXRpbFwiOjE5fV0sMTg6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19tb2R1bGVOYW1lID0gXCJzcmMvdHlwZVwiO1xuZnVuY3Rpb24gaXNGdW5jdGlvbihvYmopIHtcbiAgcmV0dXJuICh0eXBlb2Ygb2JqID09PSAnZnVuY3Rpb24nKTtcbn1cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcbjtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBpc0Z1bmN0aW9uOiBpc0Z1bmN0aW9uLFxuICBpc0FycmF5OiBpc0FycmF5LFxuICBfX2VzTW9kdWxlOiB0cnVlXG59O1xuXG5cbn0se31dLDE5OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xudmFyIF9fbW9kdWxlTmFtZSA9IFwic3JjL3V0aWxcIjtcbnZhciBnbG9iYWwgPSBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpLFxuICAgIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xudmFyIHRvQXJyYXkgPSAoZnVuY3Rpb24oY29sbGVjdGlvbikge1xuICByZXR1cm4gc2xpY2UuY2FsbChjb2xsZWN0aW9uKTtcbn0pO1xudmFyIG1ha2VJdGVyYWJsZSA9IChmdW5jdGlvbihlbGVtZW50KSB7XG4gIHJldHVybiBlbGVtZW50Lm5vZGVUeXBlIHx8IGVsZW1lbnQgPT09IHdpbmRvdyA/IFtlbGVtZW50XSA6IGVsZW1lbnQ7XG59KTtcbmZ1bmN0aW9uIGVhY2goY29sbGVjdGlvbiwgY2FsbGJhY2ssIHRoaXNBcmcpIHtcbiAgdmFyIGxlbmd0aCA9IGNvbGxlY3Rpb24ubGVuZ3RoO1xuICBpZiAobGVuZ3RoICE9PSB1bmRlZmluZWQgJiYgY29sbGVjdGlvbi5ub2RlVHlwZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgY2FsbGJhY2suY2FsbCh0aGlzQXJnLCBjb2xsZWN0aW9uW2ldLCBpLCBjb2xsZWN0aW9uKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY2FsbGJhY2suY2FsbCh0aGlzQXJnLCBjb2xsZWN0aW9uLCAwLCBjb2xsZWN0aW9uKTtcbiAgfVxuICByZXR1cm4gY29sbGVjdGlvbjtcbn1cbmZ1bmN0aW9uIGV4dGVuZCh0YXJnZXQpIHtcbiAgZm9yICh2YXIgc291cmNlcyA9IFtdLFxuICAgICAgJF9fMCA9IDE7ICRfXzAgPCBhcmd1bWVudHMubGVuZ3RoOyAkX18wKyspXG4gICAgc291cmNlc1skX18wIC0gMV0gPSBhcmd1bWVudHNbJF9fMF07XG4gIHNvdXJjZXMuZm9yRWFjaChmdW5jdGlvbihzcmMpIHtcbiAgICBpZiAoc3JjKSB7XG4gICAgICBmb3IgKHZhciBwcm9wIGluIHNyYykge1xuICAgICAgICB0YXJnZXRbcHJvcF0gPSBzcmNbcHJvcF07XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHRhcmdldDtcbn1cbjtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBnbG9iYWw6IGdsb2JhbCxcbiAgdG9BcnJheTogdG9BcnJheSxcbiAgbWFrZUl0ZXJhYmxlOiBtYWtlSXRlcmFibGUsXG4gIGVhY2g6IGVhY2gsXG4gIGV4dGVuZDogZXh0ZW5kLFxuICBfX2VzTW9kdWxlOiB0cnVlXG59O1xuXG5cbn0se31dfSx7fSxbMTJdKVxuKDEyKVxufSk7XG59KS5jYWxsKHRoaXMsdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9KSIsInZhciBldmVudHMgID0gcmVxdWlyZSgnLi9tb2R1bGVzL2V2ZW50cycpXG4sICAgb2JqICAgICA9IHJlcXVpcmUoJy4vbW9kdWxlcy9vYmonKVxuLCAgIGNvbnRlbnQgPSByZXF1aXJlKCcuL21vZHVsZXMvY29udGVudCcpO1xuXG5vYmouaW5pdCgpO1xuZXZlbnRzKCk7XG5cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyICQgPSByZXF1aXJlKCdkb210YXN0aWMvYnVuZGxlL2Z1bGwvZG9tdGFzdGljJyk7XG5cbnZhciBjb250ZW50ID0ge1xuXG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyICQgICAgICAgPSByZXF1aXJlKCdkb210YXN0aWMvYnVuZGxlL2Z1bGwvZG9tdGFzdGljJyk7XG5cbnZhciBldmVudHMgPSBmdW5jdGlvbigpIHtcblxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV2ZW50cztcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIG9ialRlbXBsYXRlID0gcmVxdWlyZSgnLi90ZW1wbGF0ZScpO1xuXG52YXIgYm9keSAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVsgMCBdXG4sICAgaGVhZCAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVsgMCBdXG4sICAgY3NzTG9jID0gJ2h0dHBzOi8vc2VldGhyb3VnaHRyZWVzLmdpdGh1Yi5pby9zbWFydGxpbmctdGFncy1jaGVja2VyL2luZGV4LmNzcyc7XG5cblxudmFyIG9iaiA9IHtcblxuICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmNyZWF0ZU9iaigpO1xuICB9LFxuXG4gIGNyZWF0ZU9iajogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NtYXJ0LW9iaicpO1xuICAgIGRpdi5pbm5lckhUTUwgPSBvYmpUZW1wbGF0ZTtcbiAgICB0aGlzLnN0eWxlKGRpdik7XG4gIH0sXG5cbiAgc3R5bGU6IGZ1bmN0aW9uKGRpdikge1xuICAgIHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgIGxpbmsuc2V0QXR0cmlidXRlKCdyZWwnLCdzdHlsZXNoZWV0Jyk7XG4gICAgbGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBjc3NMb2MpO1xuICAgIGxpbmsuc2V0QXR0cmlidXRlKCd0eXBlJywndGV4dC9jc3MnKTtcbiAgICBoZWFkLmFwcGVuZENoaWxkKGxpbmspO1xuICAgIHRoaXMuYXBwZW5kKGRpdik7XG4gIH0sXG5cbiAgYXBwZW5kOiBmdW5jdGlvbihkaXYpIHtcbiAgICBib2R5LmFwcGVuZENoaWxkKGRpdik7XG4gIH1cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBvYmo7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8vIHNldCBvYmpUZW1wbGF0ZVxudmFyIG9ialRlbXBsYXRlID0gJzx1bCBpZD1cInNtYXJ0bGluZy1uYXZcIj4nO1xuICAgIG9ialRlbXBsYXRlICs9ICc8bGkgaWQ9XCJuaWNlLXRpdGxlXCIgZGF0YS10ZXh0PVwiTklDRVwiIHRpdGxlPVwiR28gVG8gSG9tZXBhZ2VcIj5ZdXV1dXA8L2xpPic7XG4gICAgb2JqVGVtcGxhdGUgKz0gJzwvdWw+JztcblxubW9kdWxlLmV4cG9ydHMgPSBvYmpUZW1wbGF0ZTtcbiJdfQ==
