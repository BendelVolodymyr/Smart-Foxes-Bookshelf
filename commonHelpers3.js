import"./assets/modulepreload-polyfill-3cfb730f.js";import{a as I,b as $,i as y}from"./assets/back_to_top-2d3d785b.js";const r=document.querySelector(".card");window.addEventListener("load",()=>{const t=screen.width;Number(t)>1439?r.classList.remove("is-hidden"):r.classList.add("is-hidden")});const w=localStorage.getItem("shoppingList");let o=JSON.parse(w);const g=document.querySelector(".shopping-default"),a=document.querySelector(".shopping-box-container");function c(t){a.innerHTML="";let s=[];t.map(({description:n,amazon_product_url:m,author:f,book_image:b,_id:v,list_name:L,title:S,buy_links:k})=>{s.push(`<div class="shopping-box" data-item-id="${v}">
      <div class="shopping-book-img">
        <img class="shopping-genre-img" src="${b}" alt="Title - 'WISH'">
      </div>
      <div class="shopping-book-info">
        <h2 class="shopping-book-title">${S}</h2>
        <span class="shopping-book-category">${L}</span>
        <p class="shopping-book-discription">${n}</p>
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
    </div>`)}),t.length==[].length?g.classList.remove("is-hidden"):(g.classList.add("is-hidden"),a.insertAdjacentHTML("afterbegin",s.join("")))}c(o);a.addEventListener("click",t=>{const s=t.target.closest(".shopping-remove-btn");if(s){const e=s.closest(".shopping-box");if(e){const n=e.dataset.itemId;x(n),o=JSON.parse(localStorage.getItem("shoppingList")),c(o)}}});function x(t){const s=o.findIndex(e=>e._id===t);s!==-1&&(o.splice(s,1),localStorage.setItem("shoppingList",JSON.stringify(o)))}const B=localStorage.getItem("shoppingList"),p=JSON.parse(B),P=document.querySelector(".pagination-pages"),d=document.querySelector(".shopping-container");let i=3,l=1;function q(t,s){const e=[];for(let n=0;n<t.length;n+=s)e.push(t.slice(n,n+s));return e}const A=q(p,i),E=Math.ceil(p.length/i);function h(t){const s=`<button class="pagination-pages-btn"  data-page="${t}">
        <span class="pagination-pages-numbers">${t}</span></button>`;P.insertAdjacentHTML("afterbegin",s),document.querySelector(`[data-page="${t}"]`).addEventListener("click",function(){l=t,_(),u()})}function u(){document.querySelectorAll(".pagination-pages-btn").forEach(s=>{parseInt(s.dataset.page)===l?s.classList.add("pagination-pages-btn-active"):s.classList.remove("pagination-pages-btn-active")})}function _(){const t=A[l-1];c(t)}function T(){if(p.length>i)for(let t=2;t<=E;t++)h(t)}function M(){setInterval(()=>{d.children.length==0&&pagination.classList.add("is-hidden"),d.children.length<i&&u()},100),pagination.classList.remove("is-hidden")}M();T();h(1);
//# sourceMappingURL=commonHelpers3.js.map
