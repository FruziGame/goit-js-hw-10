import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i as r}from"./assets/vendor-BbbuE1sJ.js";const i=document.querySelector("input[type='number']"),s=document.querySelector(".form");s.addEventListener("submit",e=>{e.preventDefault();const o=Number(i.value),t=document.querySelector("input[name='state']:checked");u(o,t),s.reset()});function u(e,o){new Promise((t,n)=>{setTimeout(()=>{m(o)?t(r.show({color:"green",message:`✅ Fulfilled promise in ${e}ms`,position:"topCenter"})):n(r.show({color:"red",message:`❌ Rejected promise in ${e} ms`,position:"topCenter"}))},e)})}function m(e){return!!(e&&e.value==="fulfilled")}
//# sourceMappingURL=2-snackbar.js.map
