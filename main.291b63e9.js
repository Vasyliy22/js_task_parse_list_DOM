parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function n(n){return o(n)||e(n)||t(n)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function t(n,r){if(n){if("string"==typeof n)return a(n,r);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?a(n,r):void 0}}function e(n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}function o(n){if(Array.isArray(n))return a(n)}function a(n,r){(null==r||r>n.length)&&(r=n.length);for(var t=0,e=new Array(r);t<r;t++)e[t]=n[t];return e}var i=document.querySelectorAll("li"),c=document.querySelector("ul"),u=function(n){for(var r="",t=0;t<n.length;t++)r+=n[t].replace(/[^0-9, ]/g," ").replace(",","");for(var e=r.split(" ").join(" ").substring(1).split(" "),o=[],a=0;a<e.length;a++)o.push(+e[a]);return o},l=n(i).map(function(n){return{name:"".concat(n.innerText),salary:"".concat(u(n.dataset.salary))}}),f=function(){l.sort(function(n,r){return r.salary-n.salary})},s=function(n){c.innerHTML="\n  <ul>\n    ".concat("".concat(n.map(function(n){return"\n      <li>\n        ".concat(n.name,"\n      </li>\n    ")}).join("")),"\n  </ul>")};f(),s(l);
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.291b63e9.js.map