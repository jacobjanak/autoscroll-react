module.exports=function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=r(1),f=n(a),s=r(2),p=n(s),h=function(e){return e.scrollTop+e.clientHeight>=e.scrollHeight-150},d=function(e){return e.scrollTop=e.scrollHeight-e.clientHeight};t.default=function(e){return function(t){function r(e){o(this,r);var t=u(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e));return t._hasScrolledUp=!1,t._el=null,t}return l(r,t),i(r,[{key:"componentDidUpdate",value:function(){this._hasScrolledUp||d(this._el)}},{key:"handleScroll",value:function(e){h(this._el)?this._hasScrolledUp=!1:this._hasScrolledUp=!0}},{key:"render",value:function(){var t=this;return f.default.createElement(e,c({},this.props,{ref:function(e){return t._el=p.default.findDOMNode(e)},onScroll:function(e){return t.handleScroll(e)}}))}}]),r}(f.default.Component)}},function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-dom")}]);