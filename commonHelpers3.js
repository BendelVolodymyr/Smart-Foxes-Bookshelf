import"./assets/modulepreload-polyfill-3cfb730f.js";import{a as L,b as S,i as k}from"./assets/back_to_top-3cc79ff1.js";const p=document.querySelector(".card");window.addEventListener("load",()=>{setInterval(()=>{const t=screen.width;Number(t)>1439?p.classList.remove("is-hidden"):p.classList.add("is-hidden")},1e3)});const y=localStorage.getItem("shoppingList"),l=JSON.parse(y),r=document.querySelector(".shopping-default");document.querySelector(".shopping-title");document.querySelector(".shopping-box");const i=document.querySelector(".shopping-box-container");function g(t){let o=[];i.innerHTML="",t.map(({description:s,amazon_product_url:h,author:u,book_image:m,list_name:b,title:f,buy_links:v})=>{o.push(`<div class="shopping-box">
        <div class="shopping-book-img">
          <img class="shopping-genre-img" src="${m}"
            alt="Title - 'WISH'" >
        </div>
        <div class="shopping-book-info">
          <h2 class="shopping-book-title">${f}</h2>
          <span class="shopping-book-category">${b}</span>
          <p class="shopping-book-discription">${s}</p>
          <span class="shopping-book-author">${u}</span>
        
          <a class="img__src-amazon" href="${h}"><img class="mdl-logo-amazon" src="${L}" alt="logo amazon" width="62" height="19"></a>
          <a class="img__src-books" href="${v[1].url}"><img class="mdl-logo-book" src="${S}" alt="logo book" width="33" height="32"></a>
        </div>
        <button class="shopping-remove-btn" type="button">
          <svg class="remove-btn" width="16" height="16" viewBox="0 0 32 32">
            <use href="${k}#icon-trash"></use>
          </svg>
        </button>
      </div>`)}),t.length==[].length?r.classList.remove("is-hidden"):(r.classList.add("is-hidden"),i.insertAdjacentHTML("afterbegin",o.join("")))}i.addEventListener("click",t=>{const o=t.target.closest(".shopping-remove-btn");if(o){const e=o.closest(".shopping-box");if(e){const s=e.dataset.itemId;$(s),e.remove()}}});function $(t){const o=l.filter(e=>e.id!==t);localStorage.setItem("shoppingList",JSON.stringify(o))}g(l);const I=localStorage.getItem("shoppingList"),n=JSON.parse(I),q=document.querySelector(".pagination-pages");document.querySelector(".shopping-container");let a=3,c=1;function w(t,o){const e=[];for(let s=0;s<t.length;s+=o)e.push(t.slice(s,s+o));return e}const B=w(n,a),P=Math.ceil(n.length/a);function x(t){console.log(t);const o=`<button class="pagination-pages-btn"  data-page="${t}">
        <span class="pagination-pages-numbers">${t}</span></button>`;q.insertAdjacentHTML("beforeend",o),document.querySelector(`[data-page="${t}"]`).addEventListener("click",function(){c=t,A(),d()})}function d(){document.querySelectorAll(".pagination-pages-btn").forEach(o=>{parseInt(o.dataset.page)===c?o.classList.add("pagination-pages-btn-active"):o.classList.remove("pagination-pages-btn-active")})}function A(){const t=B[c-1];g(t)}function E(){if(n.length>a)for(let t=1;t<=P;t++)x(t)}function _(){const t=document.querySelector(".pagination-container");n.length===0?t.classList.add("is-hidden"):(E(),d())}_();
//# sourceMappingURL=commonHelpers3.js.map
