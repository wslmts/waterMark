!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.waterMark=t():e.waterMark=t()}(window,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.width,n=void 0===t?300:t,o=e.height,r=void 0===o?200:o,i=e.rotate,c=void 0===i?30:i,a=e.color,d=void 0===a?"#ccc":a,u=e.textAlign,l=void 0===u?"center":u,f=e.textBaseline,p=void 0===f?"middle":f,s=e.font,v=void 0===s?"20px microsoft yahei":s,y=e.content,b=void 0===y?"zcc":y,x=e.opacity,m=void 0===x?"0.6":x,g=e.zIndex,h=void 0===g?999:g,j=e.container,w=void 0===j?document.body:j,M=document.createElement("canvas"),O=M.getContext("2d");M.width=n,M.height=r,O.rotate(Math.PI/180*c),O.fillStyle=d,O.font=v,O.textAlign=l,O.textBaseline=p,O.fillText(b,parseFloat(n/2),parseFloat(r/2));var P=M.toDataURL(),S=document.createElement("div");S.style="\n    position:absolute;\n    width:100%;\n    height:".concat(w.scrollHeight,"px;\n    pointer-events:none;\n    top:0;\n    bottom:0;\n    opacity: ").concat(m,";\n    z-index: ").concat(h,";\n    background-repeat:repeat;\n    background-image:url(").concat(P,");\n   "),w.appendChild(S)}n.r(t),n.d(t,"waterMark",(function(){return o}))}])}));