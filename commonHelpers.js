import"./assets/header-1a072063.js";import{i as H,a as R,b as j}from"./assets/back_to_top-6ad82b5a.js";import{a as h,N as C,n as N}from"./assets/vendor-e6655478.js";const E="https://books-backend.p.goit.global/books/";async function z(){const e="category-list";return await h.get(`${E}${e}`)}async function w(){const e="top-books";return await h.get(`${E}${e}`)}async function T(e){const t="category?category=";return await h.get(`${E}${t}${e}`)}const G="https://books-backend.p.goit.global/books/";async function W(e){try{const t=await h.get(`${G}${e}`);if(t.status===200)return t.data;throw new Error("Failed to fetch book details")}catch(t){console.error(t)}}function M(e){const t=document.createElement("div");t.classList.add("modal-backdrop"),t.addEventListener("click",n);const o=document.createElement("div");o.classList.add("modal");const s=document.createElement("button");s.classList.add("mdl-btn-icon-x"),s.innerHTML=`
        <svg class="mdl-icon-x" width="24" height="24" viewBox="0 0 32 32">
        <use href="${H}#icon-close"></use>
    </svg>
    `,s.addEventListener("click",n),window.addEventListener("keydown",i=>{i.key==="Escape"&&n()}),o.appendChild(s);const a=document.createElement("ul");a.classList.add("list","mdl-list"),o.appendChild(a),W(e).then(i=>{const p=document.createElement("li");a.appendChild(p);const d=document.createElement("img");d.classList.add("mdl-book-img"),d.alt="book",d.width=287,d.height=408;const _="URL_до_запасної_картинки.jpg";d.onerror=function(){d.src=_},d.src=i.book_image,p.appendChild(d);const u=document.createElement("li");a.appendChild(u);const L=document.createElement("h2");L.classList.add("mdl-book-name"),L.textContent=i.title,u.appendChild(L);const f=document.createElement("h3");f.classList.add("mdl-book-author"),f.textContent=`by ${i.author}`,u.appendChild(f);const y=document.createElement("p");y.classList.add("mdl-book-info"),y.textContent=i.description,u.appendChild(y);const b=document.createElement("ul");b.classList.add("list","mdl-link-list"),u.appendChild(b);const B=i.buy_links.find(r=>r.name==="Amazon");if(B){const r=document.createElement("li");b.appendChild(r);const c=document.createElement("a");c.classList.add("link"),c.href=B.url,c.target="_blank",c.innerHTML=`
        <img class="mdl-logo-amazon" src="${R}" alt="logo amazon" width="62" height="19">
    `,r.appendChild(c)}const S=i.buy_links.find(r=>r.name!=="Amazon");if(S){const r=document.createElement("li");b.appendChild(r);const c=document.createElement("a");c.classList.add("link"),c.href=S.url,c.target="_blank",c.innerHTML=`
        <img class="mdl-logo-book" src="${j}" alt="logo book" width="33" height="32">
    `,r.appendChild(c)}const g=document.createElement("button");g.classList.add("mdl-main-btn");const $=(JSON.parse(localStorage.getItem("shoppingList"))||[]).some(r=>r.title===i.title);$?g.textContent="Remove from the shopping list":g.textContent="Add to shopping list";const m=document.createElement("p");m.classList.add("confirmation-text"),m.innerHTML="Congratulations! You have added the book to the shopping list. To delete, press the button &rdquo;Remove from the shopping list&ldquo;.",m.style.display=$?"block":"none",g.addEventListener("click",r=>{r.stopPropagation(),F(i)?(g.textContent="Remove from the shopping list",m.style.display="block"):(g.textContent="Add to shopping list",m.style.display="none")}),o.appendChild(g),o.appendChild(m)}),t.appendChild(o),document.body.appendChild(t),document.body.style.overflow="hidden";function n(){t.removeEventListener("click",n),s.removeEventListener("click",n),window.removeEventListener("keydown",i=>{i.key==="Escape"&&n()}),t.remove(),document.body.style.overflow="auto"}}function F(e){let t=localStorage.getItem("shoppingList"),o=!1;t?t=JSON.parse(t):t=[];const s=t.findIndex(a=>a.title===e.title);return s===-1?(t.push(e),o=!0):t.splice(s,1),localStorage.setItem("shoppingList",JSON.stringify(t)),o}const P=document.querySelector(".categories-books"),k=document.querySelector(".categories-books-all"),v=document.querySelector(".categories-books-title"),I=document.querySelector(".loader");window.addEventListener("load",U);k.addEventListener("click",Q);P.addEventListener("click",V);k.addEventListener("click",X);k.addEventListener("click",Z);async function U(){I.style.display="none";try{const e=await w(),t=A(e.data);K(t)}catch(e){C.Report.failure("OOPS! We have some problems🙊",e,"Try again")}}async function J(){I.style.display="none";try{const e=await w(),t=A(e.data);k.innerHTML=t}catch(e){C.Report.failure("OOPS! We have some problems🙊",e,"Try again")}}function V(e){if(!e.target.classList.contains("categories-books-back-btn"))return;const t=e.target;J(),t.remove(),v.innerHTML='Best Sellers <span class="categories-books-title-accent">Books'}function A(e=[]){return e.map(({list_name:t,books:o})=>`
      <div class="categories-books-genre-title"> ${t}
        <ul class="categories-books-genre-all-books">
        ${Y(o)}
        </ul>
        <button class="categories-books-btn" data-category='${t}'>see more</button>
      </div>
      `).join("")}function Y(e=[]){return e.map(({_id:t,list_name:o,author:s,book_image:a,title:n})=>`
      <li class="categories-books-genre-book" data-id="${t}" data-genre="${o}">
        <div class="categories-books-genre-book-img-thumb">
          <img class="categories-books-genre-book-img"
            src="${a}" alt="Title - '${n}'">
          <div class="categories-books-genre-book-hover">quick view </div>
        </div>
        <h2 class="categories-books-genre-book-title">${n}</h2>
        <h3 class="categories-books-genre-book-author">${s}</h3>
      </li>
      `).join("")}function K(e){k.insertAdjacentHTML("beforeend",e)}async function Q(e){if(!e.target.classList.contains("categories-books-btn"))return;const o=e.target.previousElementSibling.firstElementChild.dataset.genre,s=o.split(" "),a=s.splice(-1,1);v.innerHTML=`${s.join(" ")} <span class="categories-books-title-accent">${a.toString()}</span>`,v.insertAdjacentHTML("afterend",'<button class="categories-books-back-btn " data-btn = "goBackBtn" >back to Best Sellers</button>');try{const n=await T(o),i=x(n.data);q(i)}catch(n){C.Report.failure("OOPS! We have some problems🙊",n,"Try again")}}function x(e=[]){return e.map(({_id:t,list_name:o,author:s,book_image:a,title:n})=>`
      <div class="categories-books-genre-all-books">
        <div class="categories-books-genre-books" data-id="${t}" data-genre="${o}">
          <div class="categories-books-genre-book-img-thumb">
            <img class="categories-books-genre-book-img"
              src="${a}" alt="Title - '${n}'">
              <div class="categories-books-genre-book-hover">quick view </div>
          </div>
          <h2 class="categories-books-genre-book-title">${n}</h2>
          <h3 class="categories-books-genre-book-author">${s}</h3>
        </div>
      </div> 
      `).join("")}function q(e){k.innerHTML=e}async function X(e){if(!e.target.closest(".categories-books-genre-book"))return;const o=e.target.closest(".categories-books-genre-book").dataset.id;await M(o)}async function Z(e){if(!e.target.closest(".categories-books-genre-books"))return;const o=e.target.closest(".categories-books-genre-books").dataset.id;await M(o)}const l={allCategoriesContainer:document.querySelector(".all-categories-container"),allCategoriesList:document.querySelector(".categories-list"),allCategoriesListItem:document.querySelector(".categories-list-item"),categoriesBook:document.querySelector(".categories-books-all"),categoriesBooksTitle:document.querySelector(".categories-books-title"),divForSeeMoreBtn:document.querySelector(".categories-books"),firstListItem:document.querySelector(".js-categories-list li:first-of-type")};l.allCategoriesContainer.addEventListener("click",ee);l.allCategoriesContainer.addEventListener("click",O);l.divForSeeMoreBtn.addEventListener("click",te);l.divForSeeMoreBtn.addEventListener("click",oe);function D(e){return e.sort((o,s)=>o.list_name.localeCompare(s.list_name)).map(({list_name:o})=>`<li class="categories-list-item js-categories-list-item" value="${o}" data-category='${o}'>${o}</li>`).join("")}z().then(e=>{l.allCategoriesList.insertAdjacentHTML("beforeend",D(e.data))}).catch(e=>{N.Notiflix.Report.failure("WHOOPS! Something went wrong",e,"Ok")});function O(e){l.firstListItem===e.target&&e.preventDefault(),e.target.tagName==="LI"&&([...l.allCategoriesList.children].forEach(a=>a.classList.remove("category-active")),e.target.classList.add("category-active"))}async function ee(e){O(e);const t=e.target;if(!(t.tagName==="LI"))return;const s=await T(t.attributes.value.nodeValue),a=x(s.data);q(a);const i=t.attributes.value.nodeValue.split(" "),p=i.splice(-1,1);l.categoriesBooksTitle.innerHTML=`${i.join(" ")} <span class="categories-books-title-accent">${p.toString()}</span>`}function te(e){if(!e.target.classList.contains("categories-books-btn"))return;const t=e.target.dataset.category;[...l.allCategoriesList.children].forEach(s=>{const a=s.dataset.category;s.classList.remove("category-active"),a===t&&s.classList.add("category-active")})}function oe(e){if(!e.target.classList.contains("categories-books-back-btn"))return;const t=e.target.dataset.btn;[...l.allCategoriesList.children].forEach(s=>{s.classList.remove("category-active"),t&&l.firstListItem.classList.add("category-active")})}
//# sourceMappingURL=commonHelpers.js.map
