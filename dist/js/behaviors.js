!function(n){var o={};function r(t){if(o[t])return o[t].exports;var e=o[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=n,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=328)}({317:function(t,e){var n,o=document.getElementById("block-stanford-basic-local-tasks");o&&(n=o.getBoundingClientRect().top,window.onscroll=function(){!function(){var t=0;t=!0===document.body.classList.contains("toolbar-tray-open")?79:39;window.pageYOffset>=n-t?(o.classList.add("sticky"),o.style.marginTop=t+"px"):(o.classList.remove("sticky"),o.style.marginTop="0px")}()})},318:function(t,e){window.Drupal.behaviors.stanford_basic={attach:function(t){var e;(e=jQuery)("#main-content",t).length||e(".su-skipnav--content",t).attr("href","#page-content"),e("#secondary-navigation",t).length||e(".su-skipnav--secondary",t).remove(),e("#block-stanford-basic-local-tasks",t).length&&e(".page-content",t).addClass("stanford-basic--outline"),e(".page-user-login",t)&&e(".su-back-to-site",t).removeClass("hidden")},detach:function(){}}},328:function(t,e,n){"use strict";n.r(e);n(317),n(318)}});
//# sourceMappingURL=behaviors.js.map