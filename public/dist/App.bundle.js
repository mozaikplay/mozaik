!function(e){function n(o){if(t[o])return t[o].exports;var s=t[o]={i:o,l:!1,exports:{}};return e[o].call(s.exports,s,s.exports,n),s.l=!0,s.exports}var t={};n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=285)}({252:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=window.onload=function(){var e=document.getElementById("menu"),n=document.getElementById("nav"),t=n.classList.contains("clear");document.getElementById("open-menu").onclick=function(o){e.classList.contains("hidden")?(e.classList.remove("hidden"),t||n.classList.add("clear"),this.classList.add("open"),document.body.classList.add("overflow-hidden")):(e.classList.add("hidden"),t||n.classList.remove("clear"),this.classList.remove("open"),document.body.classList.remove("overflow-hidden"))}}},253:function(e,n){},285:function(e,n,t){"use strict";t(253),t(252)}});