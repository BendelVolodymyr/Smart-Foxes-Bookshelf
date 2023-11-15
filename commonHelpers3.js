import"./assets/modulepreload-polyfill-3cfb730f.js";import{a as v,b as L,i as S}from"./assets/back_to_top-3b3e1c99.js";const c=document.querySelector(".card");window.addEventListener("load",()=>{setInterval(()=>{const t=screen.width;Number(t)>1439?c.classList.remove("is-hidden"):c.classList.add("is-hidden")},1e3)});const k=localStorage.getItem("shoppingList"),l=JSON.parse(k),p=document.querySelector(".shopping-default"),y=document.querySelector(".shopping-title");function r(t){let s=[];t.map(({description:e,amazon_product_url:d,author:h,book_image:u,list_name:m,title:f,buy_links:b})=>{s.push(`<div class="shopping-box">
        <div class="shopping-book-img">
          <img class="shopping-genre-img" src="${u}"
            alt="Title - 'WISH'" >
        </div>
        <div class="shopping-book-info">
          <h2 class="shopping-book-title">${f}</h2>
          <span class="shopping-book-category">${m}</span>
          <p class="shopping-book-discription">${e}</p>
          <span class="shopping-book-author">${h}</span>
        
          <a class="img__src-amazon" href="${d}"><img class="mdl-logo-amazon" src="${v}" alt="logo amazon" width="62" height="19"></a>
          <a class="img__src-books" href="${b[1].url}"><img class="mdl-logo-book" src="${L}" alt="logo book" width="33" height="32"></a>
        </div>
        <button class="shopping-remove-btn" type="button">
          <svg class="remove-btn" width="16" height="16" viewBox="0 0 32 32">
            <use href="${S}#icon-trash"></use>
          </svg>
        </button>
      </div>`)}),t.length==[].length?p.classList.remove("is-hidden"):(p.classList.add("is-hidden"),y.insertAdjacentHTML("afterend",s.join("")))}const $=document.querySelector(".shopping-title");$.addEventListener("click",t=>{const s=t.target.closest(".shopping-remove-btn");if(s){const o=s.closest(".shopping-box");if(o){const e=o.dataset.itemId;I(e),o.remove()}}});function I(t){const s=l.filter(o=>o.id!==t);localStorage.setItem("shoppingList",JSON.stringify(s))}r(l);const q=localStorage.getItem("shoppingList"),n=JSON.parse(q),w=document.querySelector(".pagination-pages");document.querySelector(".shopping-container");let i=3,a=1;function E(t,s){const o=[];for(let e=0;e<t.length;e+=s)o.push(t.slice(e,e+s));return o}const P=E(n,i),A=Math.ceil(n.length/i);function B(t){const s=`<button class="pagination-pages-btn"  data-page="${t}">
        <span class="pagination-pages-numbers">${t}</span></button>`;w.insertAdjacentHTML("beforeend",s),document.querySelector(`[data-page="${t}"]`).addEventListener("click",function(){a=t,_(),g()})}function g(){document.querySelectorAll(".pagination-pages-btn").forEach(s=>{parseInt(s.dataset.page)===a?s.classList.add("pagination-pages-btn-active"):s.classList.remove("pagination-pages-btn-active")})}function _(){const t=P[a-1];console.log(t),r(t)}function T(){if(n.length>i)for(let t=1;t<=A;t++)B(t)}function x(){const t=document.querySelector(".pagination-container");n.length===0&&t.classList.add("is-hidden")}x();T();g();
//# sourceMappingURL=commonHelpers3.js.map
