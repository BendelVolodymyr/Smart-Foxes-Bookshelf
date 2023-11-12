import"./assets/toggle_theme-445b1a1a.js";import{a as p}from"./assets/vendor-1c5e86dd.js";import"./assets/back_to_top-dba622ab.js";const f="https://books-backend.p.goit.global/books/";async function A(){const e="category-list";return await p.get(`${f}${e}`)}async function B(){const e="top-books";return await p.get(`${f}${e}`)}async function T(e){const t="category?category=";return await p.get(`${f}${t}${e}`)}const I="https://books-backend.p.goit.global/books/";async function x(e){try{const t=await p.get(`${I}${e}`);if(t.status===200)return t.data;throw new Error("Failed to fetch book details")}catch(t){console.error(t)}}function $(e){const t=document.createElement("div");t.classList.add("modal-backdrop"),t.addEventListener("click",s);const o=document.createElement("div");o.classList.add("modal");const n=document.createElement("button");n.classList.add("mdl-btn-icon-x"),n.innerHTML=`
        <svg class="mdl-icon-x" width="24" height="24">
        <use href="./img/sprite.svg#icon-close"></use>
    </svg>
    `,n.addEventListener("click",s),window.addEventListener("keydown",a=>{a.key==="Escape"&&s()}),o.appendChild(n);const i=document.createElement("ul");i.classList.add("list","mdl-list"),o.appendChild(i),x(e).then(a=>{const E=document.createElement("li");i.appendChild(E);const l=document.createElement("img");l.classList.add("mdl-book-img"),l.alt="book",l.width=287,l.height=408;const M="URL_до_запасної_картинки.jpg";l.onerror=function(){l.src=M},l.src=a.book_image,E.appendChild(l);const k=document.createElement("li");i.appendChild(k);const b=document.createElement("h2");b.classList.add("mdl-book-name"),b.textContent=a.title,k.appendChild(b);const h=document.createElement("h3");h.classList.add("mdl-book-author"),h.textContent=`by ${a.author}`,k.appendChild(h);const L=document.createElement("p");L.classList.add("mdl-book-info"),L.textContent=a.description,k.appendChild(L);const u=document.createElement("ul");u.classList.add("list","mdl-link-list"),k.appendChild(u);const v=a.buy_links.find(r=>r.name==="Amazon");if(v){const r=document.createElement("li");u.appendChild(r);const c=document.createElement("a");c.classList.add("link"),c.href=v.url,c.target="_blank",c.innerHTML=`
        <img class="mdl-logo-amazon" src="./img/amazon.png" alt="logo amazon" width="62" height="19">
    `,r.appendChild(c)}const C=a.buy_links.find(r=>r.name!=="Amazon");if(C){const r=document.createElement("li");u.appendChild(r);const c=document.createElement("a");c.classList.add("link"),c.href=C.url,c.target="_blank",c.innerHTML=`
        <img class="mdl-logo-book" src="./img/books.png" alt="logo book" width="33" height="32">
    `,r.appendChild(c)}const d=document.createElement("button");d.classList.add("mdl-main-btn"),d.textContent="Add to shopping list";const g=document.createElement("p");g.classList.add("confirmation-text"),g.innerHTML="Congratulations! You have added the book to the shopping list. To delete, press the button &rdquo;Remove from the shopping list&ldquo;.",g.style.display="none",d.addEventListener("click",r=>{r.stopPropagation(),q(a)?(d.textContent="Remove from the shopping list",g.style.display="block"):(d.textContent="Add to shopping list",g.style.display="none")}),o.appendChild(d),o.appendChild(g)}),t.appendChild(o),document.body.appendChild(t),document.body.style.overflow="hidden";function s(){t.removeEventListener("click",s),n.removeEventListener("click",s),window.removeEventListener("keydown",a=>{a.key==="Escape"&&s()}),t.remove(),document.body.style.overflow="auto"}}function q(e){let t=localStorage.getItem("shoppingList"),o=!1;t?t=JSON.parse(t):t=[];const n=t.findIndex(i=>i.title===e.title);return n===-1?(t.push(e),o=!0):t.splice(n,1),localStorage.setItem("shoppingList",JSON.stringify(t)),o}const j=document.querySelector(".categories-books"),m=document.querySelector(".categories-books-all"),y=document.querySelector(".categories-books-title"),w=document.querySelector(".loader");window.addEventListener("load",H);m.addEventListener("click",U);j.addEventListener("click",z);m.addEventListener("click",J);m.addEventListener("click",W);async function H(){w.style.display="none";try{const e=await B(),t=S(e.data);R(t)}catch(e){console.log(e)}}async function _(){w.style.display="none";try{const e=await B(),t=S(e.data);m.innerHTML=t}catch(e){console.log(e)}}function z(e){if(!e.target.classList.contains("categories-books-back-btn"))return;const t=e.target;_(),t.remove(),y.innerHTML='Best Sellers <span class="categories-books-title-accent">Books'}function S(e=[]){return e.map(({list_name:t,books:o})=>`
      <div class="categories-books-genre-title"> ${t}
        <ul class="categories-books-genre-all-books">
        ${G(o)}
        </ul>
        <button class="categories-books-btn">see more</button>
      </div>
      `).join("")}function G(e=[]){return e.map(({_id:t,list_name:o,author:n,book_image:i,title:s})=>`
      <li class="categories-books-genre-book" data-id="${t}" data-genre="${o}">
        <div class="categories-books-genre-book-img-thumb">
          <img class="categories-books-genre-book-img"
            src="${i}" alt="Title - '${s}'">
          <div class="categories-books-genre-book-hover">quick view </div>
        </div>
        <h2 class="categories-books-genre-book-title">${s}</h2>
        <h3 class="categories-books-genre-book-author">${n}</h3>
      </li>
      `).join("")}function R(e){m.insertAdjacentHTML("beforeend",e)}async function U(e){if(!e.target.classList.contains("categories-books-btn"))return;const o=e.target.previousElementSibling.firstElementChild.dataset.genre,n=o.split(" "),i=n.splice(-1,1);y.innerHTML=`${n.join(" ")} <span class="categories-books-title-accent">${i.toString()}</span>`,y.insertAdjacentHTML("afterend",'<button class="categories-books-back-btn">back to Best Sellers</button>');try{const s=await T(o),a=N(s.data);O(a)}catch(s){console.log(s)}}function N(e=[]){return e.map(({_id:t,list_name:o,author:n,book_image:i,title:s})=>`
      <div class="categories-books-genre-all-books">
        <div class="categories-books-genre-books" data-id="${t}" data-genre="${o}">
          <div class="categories-books-genre-book-img-thumb">
            <img class="categories-books-genre-book-img"
              src="${i}" alt="Title - '${s}'">
              <div class="categories-books-genre-book-hover">quick view </div>
          </div>
          <h2 class="categories-books-genre-book-title">${s}</h2>
          <h3 class="categories-books-genre-book-author">${n}</h3>
        </div>
      </div> 
      `).join("")}function O(e){m.innerHTML=e}async function J(e){if(!e.target.closest(".categories-books-genre-book"))return;const o=e.target.closest(".categories-books-genre-book").dataset.id;await $(o)}async function W(e){if(!e.target.closest(".categories-books-genre-books"))return;const o=e.target.closest(".categories-books-genre-books").dataset.id;await $(o)}const F={allCategoriesContainer:document.querySelector(".all-categories-container"),allCategoriesList:document.querySelector(".js-categories-list"),allCategoriesListItem:document.querySelector(".js-categories-list-item"),categoriesBook:document.querySelector(".categories-books-all"),categoriesBooksTitle:document.querySelector(".categories-books-title")};function P(e){return e.map(({list_name:t})=>`<li class="categories-list-item js-categories-list-item" data-category='${t}'><a href="">${t}</a></li>`).join("")}A().then(e=>{F.allCategoriesList.insertAdjacentHTML("beforeend",P(e.data))}).catch(e=>console.log(e));
//# sourceMappingURL=commonHelpers.js.map
