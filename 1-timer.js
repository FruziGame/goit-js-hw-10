/* empty css                      */import{f as m}from"./assets/vendor-DOPLpFvu.js";(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&u(n)}).observe(document,{childList:!0,subtree:!0});function d(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(e){if(e.ep)return;e.ep=!0;const o=d(e);fetch(e.href,o)}})();const p=document.querySelector("#datetime-picker"),s=document.querySelector("button[data-start]");s.disabled=!0;const y={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){console.log(t[0]),i=t[0],i.getTime(),h()}};m(p,y);let i,r,a;function h(){let t=new Date;i.getTime()<t.getTime()?(s.disabled=!0,window.alert("Please choose a date in the future")):(s.disabled=!1,a=i.getTime()-t.getTime())}s.addEventListener("click",()=>{console.log("started"),s.disabled=!0,g()});function g(){let t=setInterval(()=>{if(r=S(a),console.log(r),document.querySelector("[data-days]").textContent=String(r.days).padStart(2,"0"),document.querySelector("[data-hours]").textContent=String(r.hours).padStart(2,"0"),document.querySelector("[data-minutes]").textContent=String(r.minutes).padStart(2,"0"),document.querySelector("[data-seconds]").textContent=String(r.seconds).padStart(2,"0"),a-=1e3,a<=0){clearInterval(t);return}},1e3)}function S(t){const o=Math.floor(t/864e5),n=Math.floor(t%864e5/36e5),l=Math.floor(t%864e5%36e5/6e4),f=Math.floor(t%864e5%36e5%6e4/1e3);return{days:o,hours:n,minutes:l,seconds:f}}
//# sourceMappingURL=1-timer.js.map
