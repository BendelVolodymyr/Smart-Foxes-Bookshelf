import"./assets/modulepreload-polyfill-3cfb730f.js";import{a as I,b as $,i as y}from"./assets/back_to_top-2d3d785b.js";const l=document.querySelector(".card");window.addEventListener("load",()=>{const t=screen.width;Number(t)>1439?l.classList.remove("is-hidden"):l.classList.add("is-hidden")});const w=localStorage.getItem("shoppingList");let n=JSON.parse(w);const g=document.querySelector(".shopping-default"),a=document.querySelector(".shopping-box-container");function c(t){a.innerHTML="";let e=[];t.map(({description:s,amazon_product_url:m,author:f,book_image:b,_id:v,list_name:L,title:S,buy_links:k})=>{e.push(`<div class="shopping-box" data-item-id="${v}">
      <div class="shopping-book-img">
        <img class="shopping-genre-img" src="${b}" alt="Title - 'WISH'">
      </div>
      <div class="shopping-book-info">
        <h2 class="shopping-book-title">${S}</h2>
        <span class="shopping-book-category">${L}</span>
        <p class="shopping-book-discription">${s}</p>
        <span class="shopping-book-author">${f}</span>

        <a class="img__src-amazon" href="${m}">
          <img class="mdl-logo-amazon" src="${I}" alt="logo amazon" width="62" height="19">
        </a>
        <a class="img__src-books" href="${k[1].url}">
          <img class="mdl-logo-book" src="${$}" alt="logo book" width="33" height="32">
        </a>
      </div>
      <button class="shopping-remove-btn" type="button">
        <svg class="remove-btn" width="16" height="16" viewBox="0 0 32 32">
          <use href="${y}#icon-trash"></use>
        </svg>
      </button>
    </div>`)}),t.length==[].length?g.classList.remove("is-hidden"):(g.classList.add("is-hidden"),a.insertAdjacentHTML("afterbegin",e.join("")))}c(n);a.addEventListener("click",t=>{const e=t.target.closest(".shopping-remove-btn");if(e){const o=e.closest(".shopping-box");if(o){const s=o.dataset.itemId;x(s),n=JSON.parse(localStorage.getItem("shoppingList")),c(n)}}});function x(t){const e=n.findIndex(o=>o._id===t);e!==-1&&(n.splice(e,1),localStorage.setItem("shoppingList",JSON.stringify(n)))}const q=localStorage.getItem("shoppingList"),p=JSON.parse(q),B=document.querySelector(".pagination-pages"),P=document.querySelector(".pagination-container"),d=document.querySelector(".shopping-box-container");let i=3,r=1;function A(t,e){const o=[];for(let s=0;s<t.length;s+=e)o.push(t.slice(s,s+e));return o}const E=A(p,i),_=Math.ceil(p.length/i);function h(t){const e=`<button class="pagination-pages-btn"  data-page="${t}">
        <span class="pagination-pages-numbers">${t}</span></button>`;B.insertAdjacentHTML("afterbegin",e),document.querySelector(`[data-page="${t}"]`).addEventListener("click",function(){r=t,T(),u()})}function u(){document.querySelectorAll(".pagination-pages-btn").forEach(e=>{parseInt(e.dataset.page)===r?e.classList.add("pagination-pages-btn-active"):e.classList.remove("pagination-pages-btn-active")})}function T(){const t=E[r-1];c(t)}function M(){if(p.length>i)for(let t=2;t<=_;t++)h(t)}function O(){setInterval(()=>{d.children.length==0&&P.classList.add("is-hidden"),d.children.length<i&&u()},100)}O();M();h(1);
//# sourceMappingURL=commonHelpers3.js.map
