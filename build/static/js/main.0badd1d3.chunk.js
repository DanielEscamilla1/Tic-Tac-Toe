(this["webpackJsonphooks-tic-tac-toe"]=this["webpackJsonphooks-tic-tac-toe"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/r2h.175c9dae.png"},,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),o=a.n(c),l=(a(13),a(14),a(7)),i=a(3),s=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"square ".concat(e.value),onClick:e.onClick},e.value))},u=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"reset--button",onClick:e.reset},"Reset Game!"))},m=a(6),d=a.n(m),f=function(){var e=Array(9).fill(null),t=Object(n.useState)(e),a=Object(i.a)(t,2),c=a[0],o=a[1],m=Object(n.useState)(!0),f=Object(i.a)(m,2),v=f[0],E=f[1],g=function(e){for(var t=0,a=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];t<a.length;t++){var n=a[t],r=Object(i.a)(n,3),c=r[0],o=r[1],l=r[2];if(e[c]&&e[c]===e[o]&&e[c]===e[l])return e[c]}return null}(c),b=function(e){return r.a.createElement(s,{value:c[e],onClick:function(){h(e)}})},h=function(e){var t=Object(l.a)(c),a=Boolean(t[e]);g||a||(t[e]=v?"X":"O",o(t),console.log(t),E(!v))},w=function(){return g?"Congratulations Player ".concat(g,", you won!"):function(e){for(var t=0;t<e.length;t++)if(null==e[t])return!1;return!0}(c)?"Draw!":" Next player is player: ".concat(v?"X":"O")};return r.a.createElement(r.a.Fragment,null,r.a.createElement("main",{className:"main--container ".concat(g?"winner":"Draw!"===w()?"draw":v?"X":"O")},r.a.createElement("div",{className:"logo"},r.a.createElement("img",{src:d.a,alt:"r2h logo"})),r.a.createElement("div",{className:"status"},w()),r.a.createElement("div",{className:"board--container"},r.a.createElement("div",{className:"board"},r.a.createElement("div",{className:"board--row"},b(0),b(1),b(2)),r.a.createElement("div",{className:"board--row"},b(3),b(4),b(5)),r.a.createElement("div",{className:"board--row"},b(6),b(7),b(8)))),r.a.createElement(u,{reset:function(){o(e),E(!0)}})))};var v=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.0badd1d3.chunk.js.map