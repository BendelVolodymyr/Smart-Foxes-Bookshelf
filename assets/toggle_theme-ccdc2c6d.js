(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&d(i)}).observe(document,{childList:!0,subtree:!0});function m(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(e){if(e.ep)return;e.ep=!0;const t=m(e);fetch(e.href,t)}})();const h=document.getElementById("nav-menu"),c=h.getElementsByTagName("a"),u=document.querySelector(".icon-basket");for(let r=0;r<c.length;r++)c[r].href===window.location.href?(c[r].classList.add("link-active"),u.classList.add("link-active-svg")):(c[r].classList.remove("link-active"),u.classList.remove("link-active-svg")),console.log(c[r].href);const o=document.querySelector(".select-menu"),f=o.querySelector(".active-user-acc"),g=o.querySelectorAll(".option");o.querySelector(".user-name");f.addEventListener("click",()=>o.classList.toggle("active"));g.forEach(r=>{r.addEventListener("click",()=>{o.classList.remove("active")})});const a=document.getElementById("theme-switch"),s=document.body;a.addEventListener("click",p);document.addEventListener("DOMContentLoaded",L);const l="swicher";function p(){if(a.checked){s.classList.replace("theme-light","theme-dark"),localStorage.setItem(l,"theme-dark");return}s.classList.replace("theme-dark","theme-light"),localStorage.setItem(l,"theme-light")}function L(){if(localStorage.getItem(l)==="theme-dark"){s.classList.replace("theme-light","theme-dark"),a.checked=!0;return}s.classList.replace("theme-dark","theme-light")}
//# sourceMappingURL=toggle_theme-ccdc2c6d.js.map
