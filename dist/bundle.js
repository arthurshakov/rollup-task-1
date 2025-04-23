
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
'use strict';

var jsLogo = require('../../../../../../../../../assets/jslogo.png');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var jsLogo__default = /*#__PURE__*/_interopDefaultLegacy(jsLogo);

console.log('Hello World!');
var img = document.createElement('img');
img.src = jsLogo__default["default"];
document.body.insertAdjacentHTML('afterbegin', '<h1>I love JavaScript</h1>');
document.body.appendChild(img);
