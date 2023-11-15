import"./assets/toggle_theme-056aedf1.js";import{a as f,b as v,i as L}from"./assets/back_to_top-89a1c134.js";const c=document.querySelector(".card");window.addEventListener("load",()=>{setInterval(()=>{const t=screen.width;Number(t)>1439?c.classList.remove("is-hidden"):c.classList.add("is-hidden")},1e3)});const k=localStorage.getItem("shoppingList"),S=JSON.parse(k),l=document.querySelector(".shopping-default"),$=document.querySelector(".shopping-title");function p(t){let s=[];t.map(({description:e,amazon_product_url:g,author:d,book_image:h,list_name:u,title:m,buy_links:b})=>{s.push(`<div class="shopping-box">
        <div class="shopping-book-img">
          <img class="shopping-genre-img" src="${h}"
            alt="Title - 'WISH'" >
        </div>
        <div class="shopping-book-info">
          <h2 class="shopping-book-title">${m}</h2>
          <span class="shopping-book-category">${u}</span>
          <p class="shopping-book-discription">${e}</p>
          <span class="shopping-book-author">${d}</span>
        
          <a class="img__src-amazon" href="${g}"><img class="mdl-logo-amazon" src="${f}" alt="logo amazon" width="62" height="19"></a>
          <a class="img__src-books" href="${b[1].url}"><img class="mdl-logo-book" src="${v}" alt="logo book" width="33" height="32"></a>
        </div>
        <button class="shopping-remove-btn" type="button">
          <svg class="remove-btn" width="16" height="16" viewBox="0 0 32 32">
            <use href="${L}#icon-trash"></use>
          </svg>
        </button>
      </div>`)}),t.length==[].length?l.classList.remove("is-hidden"):(l.classList.add("is-hidden"),$.insertAdjacentHTML("afterend",s.join("")))}p(S);const y=localStorage.getItem("shoppingList"),n=JSON.parse(y),w=document.querySelector(".pagination-pages");document.querySelector(".shopping-container");let a=3,i=1;function I(t,s){const o=[];for(let e=0;e<t.length;e+=s)o.push(t.slice(e,e+s));return o}const q=I(n,a),P=Math.ceil(n.length/a);function A(t){const s=`<button class="pagination-pages-btn"  data-page="${t}">
        <span class="pagination-pages-numbers">${t}</span></button>`;w.insertAdjacentHTML("beforeend",s),document.querySelector(`[data-page="${t}"]`).addEventListener("click",function(){i=t,E(),r()})}function r(){document.querySelectorAll(".pagination-pages-btn").forEach(s=>{parseInt(s.dataset.page)===i?s.classList.add("pagination-pages-btn-active"):s.classList.remove("pagination-pages-btn-active")})}function E(){const t=q[i-1];console.log(t),p(t)}function _(){if(n.length>a)for(let t=1;t<=P;t++)A(t)}function T(){const t=document.querySelector(".pagination-container");n.length===0&&t.classList.add("is-hidden")}T();_();r();
//# sourceMappingURL=commonHelpers3.js.map
