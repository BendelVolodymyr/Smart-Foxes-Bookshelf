import"./assets/modulepreload-polyfill-3cfb730f.js";import{a as S,b as k,i as y}from"./assets/back_to_top-3cc79ff1.js";const c=document.querySelector(".card");window.addEventListener("load",()=>{setInterval(()=>{const t=screen.width;Number(t)>1439?c.classList.remove("is-hidden"):c.classList.add("is-hidden")},1e3)});const $=localStorage.getItem("shoppingList"),r=JSON.parse($),p=document.querySelector(".shopping-default");document.querySelector(".shopping-title");document.querySelector(".shopping-box");const l=document.querySelector(".shopping-box-container");function g(t){let e=[];t.map(({description:s,amazon_product_url:u,author:m,book_image:b,list_name:f,title:v,buy_links:L})=>{e.push(`<div class="shopping-box">
        <div class="shopping-book-img">
          <img class="shopping-genre-img" src="${b}"
            alt="Title - 'WISH'" >
        </div>
        <div class="shopping-book-info">
          <h2 class="shopping-book-title">${v}</h2>
          <span class="shopping-book-category">${f}</span>
          <p class="shopping-book-discription">${s}</p>
          <span class="shopping-book-author">${m}</span>
        
          <a class="img__src-amazon" href="${u}"><img class="mdl-logo-amazon" src="${S}" alt="logo amazon" width="62" height="19"></a>
          <a class="img__src-books" href="${L[1].url}"><img class="mdl-logo-book" src="${k}" alt="logo book" width="33" height="32"></a>
        </div>
        <button class="shopping-remove-btn" type="button">
          <svg class="remove-btn" width="16" height="16" viewBox="0 0 32 32">
            <use href="${y}#icon-trash"></use>
          </svg>
        </button>
      </div>`)}),t.length==[].length?p.classList.remove("is-hidden"):(p.classList.add("is-hidden"),l.insertAdjacentHTML("afterbegin",e.join("")))}l.addEventListener("click",t=>{const e=t.target.closest(".shopping-remove-btn");if(e){const o=e.closest(".shopping-box");if(o){const s=o.dataset.itemId;I(s),o.remove()}}});function I(t){const e=r.filter(o=>o.id!==t);localStorage.setItem("shoppingList",JSON.stringify(e))}g(r);const q=localStorage.getItem("shoppingList"),n=JSON.parse(q),w=document.querySelector(".pagination-pages");document.querySelector(".shopping-container");let i=3,a=1;function B(t,e){const o=[];for(let s=0;s<t.length;s+=e)o.push(t.slice(s,s+e));return o}const P=B(n,i),x=Math.ceil(n.length/i);function d(t){const e=`<button class="pagination-pages-btn"  data-page="${t}">
        <span class="pagination-pages-numbers">${t}</span></button>`;w.insertAdjacentHTML("afterbegin",e),document.querySelector(`[data-page="${t}"]`).addEventListener("click",function(){a=t,A(),h()})}function h(){document.querySelectorAll(".pagination-pages-btn").forEach(e=>{parseInt(e.dataset.page)===a?e.classList.add("pagination-pages-btn-active"):e.classList.remove("pagination-pages-btn-active")})}function A(){const t=P[a-1];g(t)}function E(){if(n.length>i)for(let t=2;t<=x;t++)d(t)}function _(){const t=document.querySelector(".pagination-container");n.length===0?t.classList.add("is-hidden"):(E(),h())}_();d(1);
//# sourceMappingURL=commonHelpers3.js.map
