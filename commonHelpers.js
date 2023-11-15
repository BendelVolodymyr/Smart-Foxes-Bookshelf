import"./assets/toggle_theme-056aedf1.js";import{i as O,a as R,b as _}from"./assets/back_to_top-89a1c134.js";import{a as h,N as C}from"./assets/vendor-0ea893a8.js";const E="https://books-backend.p.goit.global/books/";async function z(){const e="category-list";return await h.get(`${E}${e}`)}async function w(){const e="top-books";return await h.get(`${E}${e}`)}async function T(e){const t="category?category=";return await h.get(`${E}${t}${e}`)}const G="https://books-backend.p.goit.global/books/";async function N(e){try{const t=await h.get(`${G}${e}`);if(t.status===200)return t.data;throw new Error("Failed to fetch book details")}catch(t){console.error(t)}}function I(e){const t=document.createElement("div");t.classList.add("modal-backdrop"),t.addEventListener("click",n);const o=document.createElement("div");o.classList.add("modal");const s=document.createElement("button");s.classList.add("mdl-btn-icon-x"),s.innerHTML=`
        <svg class="mdl-icon-x" width="24" height="24" viewBox="0 0 32 32">
        <use href="${O}#icon-close"></use>
    </svg>
    `,s.addEventListener("click",n),window.addEventListener("keydown",a=>{a.key==="Escape"&&n()}),o.appendChild(s);const i=document.createElement("ul");i.classList.add("list","mdl-list"),o.appendChild(i),N(e).then(a=>{const p=document.createElement("li");i.appendChild(p);const l=document.createElement("img");l.classList.add("mdl-book-img"),l.alt="book",l.width=287,l.height=408;const H="URL_до_запасної_картинки.jpg";l.onerror=function(){l.src=H},l.src=a.book_image,p.appendChild(l);const u=document.createElement("li");i.appendChild(u);const L=document.createElement("h2");L.classList.add("mdl-book-name"),L.textContent=a.title,u.appendChild(L);const f=document.createElement("h3");f.classList.add("mdl-book-author"),f.textContent=`by ${a.author}`,u.appendChild(f);const y=document.createElement("p");y.classList.add("mdl-book-info"),y.textContent=a.description,u.appendChild(y);const b=document.createElement("ul");b.classList.add("list","mdl-link-list"),u.appendChild(b);const B=a.buy_links.find(r=>r.name==="Amazon");if(B){const r=document.createElement("li");b.appendChild(r);const c=document.createElement("a");c.classList.add("link"),c.href=B.url,c.target="_blank",c.innerHTML=`
        <img class="mdl-logo-amazon" src="${R}" alt="logo amazon" width="62" height="19">
    `,r.appendChild(c)}const $=a.buy_links.find(r=>r.name!=="Amazon");if($){const r=document.createElement("li");b.appendChild(r);const c=document.createElement("a");c.classList.add("link"),c.href=$.url,c.target="_blank",c.innerHTML=`
        <img class="mdl-logo-book" src="${_}" alt="logo book" width="33" height="32">
    `,r.appendChild(c)}const d=document.createElement("button");d.classList.add("mdl-main-btn");const S=(JSON.parse(localStorage.getItem("shoppingList"))||[]).some(r=>r.title===a.title);S?d.textContent="Remove from the shopping list":d.textContent="Add to shopping list";const g=document.createElement("p");g.classList.add("confirmation-text"),g.innerHTML="Congratulations! You have added the book to the shopping list. To delete, press the button &rdquo;Remove from the shopping list&ldquo;.",g.style.display=S?"block":"none",d.addEventListener("click",r=>{r.stopPropagation(),W(a)?(d.textContent="Remove from the shopping list",g.style.display="block"):(d.textContent="Add to shopping list",g.style.display="none")}),o.appendChild(d),o.appendChild(g)}),t.appendChild(o),document.body.appendChild(t),document.body.style.overflow="hidden";function n(){t.removeEventListener("click",n),s.removeEventListener("click",n),window.removeEventListener("keydown",a=>{a.key==="Escape"&&n()}),t.remove(),document.body.style.overflow="auto"}}function W(e){let t=localStorage.getItem("shoppingList"),o=!1;t?t=JSON.parse(t):t=[];const s=t.findIndex(i=>i.title===e.title);return s===-1?(t.push(e),o=!0):t.splice(s,1),localStorage.setItem("shoppingList",JSON.stringify(t)),o}const P=document.querySelector(".categories-books"),m=document.querySelector(".categories-books-all"),v=document.querySelector(".categories-books-title"),M=document.querySelector(".loader");window.addEventListener("load",U);m.addEventListener("click",K);P.addEventListener("click",J);m.addEventListener("click",Q);m.addEventListener("click",X);async function U(){M.style.display="none";try{const e=await w(),t=A(e.data);Y(t)}catch(e){C.Report.failure("OOPS! We have some problems🙊",e,"Try again")}}async function F(){M.style.display="none";try{const e=await w(),t=A(e.data);m.innerHTML=t}catch(e){C.Report.failure("OOPS! We have some problems🙊",e,"Try again")}}function J(e){if(!e.target.classList.contains("categories-books-back-btn"))return;const t=e.target;F(),t.remove(),v.innerHTML='Best Sellers <span class="categories-books-title-accent">Books'}function A(e=[]){return e.map(({list_name:t,books:o})=>`
      <div class="categories-books-genre-title"> ${t}
        <ul class="categories-books-genre-all-books">
        ${V(o)}
        </ul>
        <button class="categories-books-btn">see more</button>
      </div>
      `).join("")}function V(e=[]){return e.map(({_id:t,list_name:o,author:s,book_image:i,title:n})=>`
      <li class="categories-books-genre-book" data-id="${t}" data-genre="${o}">
        <div class="categories-books-genre-book-img-thumb">
          <img class="categories-books-genre-book-img"
            src="${i}" alt="Title - '${n}'">
          <div class="categories-books-genre-book-hover">quick view </div>
        </div>
        <h2 class="categories-books-genre-book-title">${n}</h2>
        <h3 class="categories-books-genre-book-author">${s}</h3>
      </li>
      `).join("")}function Y(e){m.insertAdjacentHTML("beforeend",e)}async function K(e){if(!e.target.classList.contains("categories-books-btn"))return;const o=e.target.previousElementSibling.firstElementChild.dataset.genre,s=o.split(" "),i=s.splice(-1,1);v.innerHTML=`${s.join(" ")} <span class="categories-books-title-accent">${i.toString()}</span>`,v.insertAdjacentHTML("afterend",'<button class="categories-books-back-btn">back to Best Sellers</button>');try{const n=await T(o),a=x(n.data);q(a)}catch(n){C.Report.failure("OOPS! We have some problems🙊",n,"Try again")}}function x(e=[]){return e.map(({_id:t,list_name:o,author:s,book_image:i,title:n})=>`
      <div class="categories-books-genre-all-books">
        <div class="categories-books-genre-books" data-id="${t}" data-genre="${o}">
          <div class="categories-books-genre-book-img-thumb">
            <img class="categories-books-genre-book-img"
              src="${i}" alt="Title - '${n}'">
              <div class="categories-books-genre-book-hover">quick view </div>
          </div>
          <h2 class="categories-books-genre-book-title">${n}</h2>
          <h3 class="categories-books-genre-book-author">${s}</h3>
        </div>
      </div> 
      `).join("")}function q(e){m.innerHTML=e}async function Q(e){if(!e.target.closest(".categories-books-genre-book"))return;const o=e.target.closest(".categories-books-genre-book").dataset.id;await I(o)}async function X(e){if(!e.target.closest(".categories-books-genre-books"))return;const o=e.target.closest(".categories-books-genre-books").dataset.id;await I(o)}const k={allCategoriesContainer:document.querySelector(".all-categories-container"),allCategoriesList:document.querySelector(".categories-list"),allCategoriesListItem:document.querySelector(".categories-list-item"),categoriesBook:document.querySelector(".categories-books-all"),categoriesBooksTitle:document.querySelector(".categories-books-title")},Z=document.querySelector(".js-categories-list li:first-of-type");k.allCategoriesContainer.addEventListener("click",ee);k.allCategoriesContainer.addEventListener("click",j);function D(e){return e.map(({list_name:t})=>`<li class="categories-list-item js-categories-list-item" value="${t}" data-category='${t}'>${t}</li>`).join("")}z().then(e=>{k.allCategoriesList.insertAdjacentHTML("beforeend",D(e.data))}).catch(e=>console.log(e));function j(e){Z===e.target&&e.preventDefault(),e.target.tagName==="LI"&&([...k.allCategoriesList.children].forEach(i=>i.classList.remove("category-active")),e.target.classList.add("category-active"))}async function ee(e){j(e);const t=e.target;if(!(t.tagName==="LI"))return;const s=await T(t.attributes.value.nodeValue),i=x(s.data);q(i);const a=t.attributes.value.nodeValue.split(" "),p=a.splice(-1,1);k.categoriesBooksTitle.innerHTML=`${a.join(" ")} <span class="categories-books-title-accent">${p.toString()}</span>`}
//# sourceMappingURL=commonHelpers.js.map
