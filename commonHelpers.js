(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function c(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(e){if(e.ep)return;e.ep=!0;const n=c(e);fetch(e.href,n)}})();const g=document.querySelector("#form"),m=document.querySelector("#launch-btn");document.querySelector("#user-email");g.addEventListener("submit",t=>{t.preventDefault(),new FormData(o),m.setAttribute("disabled",!0),m.style.opacity="0.7";var o=document.querySelector("#form");o.reset()});const L=()=>/Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),u=({el:t,cls:o,act:c})=>{!t||!o||!c||t.classList[c](o)},a="#menu",h="#intro_btn",v="#close",S="_lock",i="is-open",A="mobile-menu-list",b="navigation",O="footer-nav",l=document.querySelector(h),q=document.querySelector(a);l&&l.addEventListener("click",function(){[{el:document.body,cls:S,act:"toggle"},{el:l,cls:i,act:"toggle"},{el:q,cls:i,act:"toggle"}].forEach(o=>{u(o)})});document.querySelector(v).onclick=function(){const t=document.querySelector(a);u({el:t,cls:i,act:"remove"})};const _=L()?A:b,E=document.querySelector(`.${_}`),N=document.querySelector(`.${O}`),I=[E,N];I.forEach(t=>{B(t)});function B(t){t&&t.addEventListener("click",o=>{o.preventDefault();const{target:c,target:{href:r,localName:e,dataset:{goto:n=null}={}}={}}=o;switch(e){case"li":const{href:s=null,dataset:{goto:p=null}={}}=c.querySelector("a"),d=s?s.split("/").pop():p;d&&y(d);break;case"a":const f=r?r.split("/").pop():n;f&&y(f);break}})}function y(t){if(document.querySelector(t)){const o=document.querySelector(t),c=window.scrollY+o.getBoundingClientRect().top,r=document.querySelector(a);r.classList.contains(i)&&[{el:document.body,cls:S,act:"remove"},{el:l,cls:i,act:"remove"},{el:r,cls:i,act:"remove"}].forEach(n=>{u(n)}),window.scrollTo({top:c,behavior:"smooth"})}}
//# sourceMappingURL=commonHelpers.js.map
