import"./assets/modulepreload-polyfill-3cfb730f.js";import{a as k,b as I,i as $}from"./assets/back_to_top-5a36f01a.js";const l=document.querySelector(".card");window.addEventListener("load",()=>{setInterval(()=>{const t=screen.width;Number(t)>1439?l.classList.remove("is-hidden"):l.classList.add("is-hidden")},1e3)});const y=localStorage.getItem("shoppingList");let n=JSON.parse(y);const g=document.querySelector(".shopping-default"),a=document.querySelector(".shopping-box-container");function c(t){a.innerHTML="";let e=[];t.map(({description:o,amazon_product_url:u,author:m,book_image:f,_id:b,list_name:v,title:L,buy_links:S})=>{e.push(`<div class="shopping-box" data-item-id="${b}">
      <div class="shopping-book-img">
        <img class="shopping-genre-img" src="${f}" alt="Title - 'WISH'">
      </div>
      <div class="shopping-book-info">
        <h2 class="shopping-book-title">${L}</h2>
        <span class="shopping-book-category">${v}</span>
        <p class="shopping-book-discription">${o}</p>
        <span class="shopping-book-author">${m}</span>

        <a class="img__src-amazon" href="${u}">
          <img class="mdl-logo-amazon" src="${k}" alt="logo amazon" width="62" height="19">
        </a>
        <a class="img__src-books" href="${S[1].url}">
          <img class="mdl-logo-book" src="${I}" alt="logo book" width="33" height="32">
        </a>
      </div>
      <button class="shopping-remove-btn" type="button">
        <svg class="remove-btn" width="16" height="16" viewBox="0 0 32 32">
          <use href="${$}#icon-trash"></use>
        </svg>
      </button>
    </div>`)}),t.length==[].length?g.classList.remove("is-hidden"):(g.classList.add("is-hidden"),a.insertAdjacentHTML("afterbegin",e.join("")))}c(n);a.addEventListener("click",t=>{const e=t.target.closest(".shopping-remove-btn");if(e){const s=e.closest(".shopping-box");if(s){const o=s.dataset.itemId;w(o),n=JSON.parse(localStorage.getItem("shoppingList")),c(n)}}});function w(t){const e=n.findIndex(s=>s._id===t);e!==-1&&(n.splice(e,1),localStorage.setItem("shoppingList",JSON.stringify(n)))}const q=localStorage.getItem("shoppingList"),i=JSON.parse(q),x=document.querySelector(".pagination-pages");document.querySelector(".shopping-container");let p=3,r=1;function B(t,e){const s=[];for(let o=0;o<t.length;o+=e)s.push(t.slice(o,o+e));return s}const P=B(i,p),A=Math.ceil(i.length/p);function d(t){const e=`<button class="pagination-pages-btn"  data-page="${t}">
        <span class="pagination-pages-numbers">${t}</span></button>`;x.insertAdjacentHTML("afterbegin",e),document.querySelector(`[data-page="${t}"]`).addEventListener("click",function(){r=t,E(),h()})}function h(){document.querySelectorAll(".pagination-pages-btn").forEach(e=>{parseInt(e.dataset.page)===r?e.classList.add("pagination-pages-btn-active"):e.classList.remove("pagination-pages-btn-active")})}function E(){const t=P[r-1];c(t)}function _(){if(i.length>p)for(let t=2;t<=A;t++)d(t)}function T(){const t=document.querySelector(".pagination-container");i.length===0?t.classList.add("is-hidden"):(_(),h())}T();d(1);
//# sourceMappingURL=commonHelpers3.js.map
