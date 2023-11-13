import"./assets/toggle_theme-ccdc2c6d.js";import"./assets/back_to_top-62c9c55b.js";import{a as b}from"./assets/vendor-1c5e86dd.js";const v="https://books-backend.p.goit.global/books/";async function j(){const e="category-list";return await b.get(`${v}${e}`)}async function $(){const e="top-books";return await b.get(`${v}${e}`)}async function w(e){const t="category?category=";return await b.get(`${v}${t}${e}`)}const H="https://books-backend.p.goit.global/books/";async function _(e){try{const t=await b.get(`${H}${e}`);if(t.status===200)return t.data;throw new Error("Failed to fetch book details")}catch(t){console.error(t)}}function S(e){const t=document.createElement("div");t.classList.add("modal-backdrop"),t.addEventListener("click",s);const o=document.createElement("div");o.classList.add("modal");const n=document.createElement("button");n.classList.add("mdl-btn-icon-x"),n.innerHTML=`
        <svg class="mdl-icon-x" width="24" height="24">
        <use href="img/sprite.svg#icon-close"></use>
    </svg>
    `,n.addEventListener("click",s),window.addEventListener("keydown",a=>{a.key==="Escape"&&s()}),o.appendChild(n);const i=document.createElement("ul");i.classList.add("list","mdl-list"),o.appendChild(i),_(e).then(a=>{const k=document.createElement("li");i.appendChild(k);const l=document.createElement("img");l.classList.add("mdl-book-img"),l.alt="book",l.width=287,l.height=408;const x="URL_до_запасної_картинки.jpg";l.onerror=function(){l.src=x},l.src=a.book_image,k.appendChild(l);const u=document.createElement("li");i.appendChild(u);const L=document.createElement("h2");L.classList.add("mdl-book-name"),L.textContent=a.title,u.appendChild(L);const y=document.createElement("h3");y.classList.add("mdl-book-author"),y.textContent=`by ${a.author}`,u.appendChild(y);const f=document.createElement("p");f.classList.add("mdl-book-info"),f.textContent=a.description,u.appendChild(f);const p=document.createElement("ul");p.classList.add("list","mdl-link-list"),u.appendChild(p);const C=a.buy_links.find(r=>r.name==="Amazon");if(C){const r=document.createElement("li");p.appendChild(r);const c=document.createElement("a");c.classList.add("link"),c.href=C.url,c.target="_blank",c.innerHTML=`
        <img class="mdl-logo-amazon" src="img/amazon.png" alt="logo amazon" width="62" height="19">
    `,r.appendChild(c)}const B=a.buy_links.find(r=>r.name!=="Amazon");if(B){const r=document.createElement("li");p.appendChild(r);const c=document.createElement("a");c.classList.add("link"),c.href=B.url,c.target="_blank",c.innerHTML=`
        <img class="mdl-logo-book" src="img/books.png" alt="logo book" width="33" height="32">
    `,r.appendChild(c)}const d=document.createElement("button");d.classList.add("mdl-main-btn"),d.textContent="Add to shopping list";const g=document.createElement("p");g.classList.add("confirmation-text"),g.innerHTML="Congratulations! You have added the book to the shopping list. To delete, press the button &rdquo;Remove from the shopping list&ldquo;.",g.style.display="none",d.addEventListener("click",r=>{r.stopPropagation(),z(a)?(d.textContent="Remove from the shopping list",g.style.display="block"):(d.textContent="Add to shopping list",g.style.display="none")}),o.appendChild(d),o.appendChild(g)}),t.appendChild(o),document.body.appendChild(t),document.body.style.overflow="hidden";function s(){t.removeEventListener("click",s),n.removeEventListener("click",s),window.removeEventListener("keydown",a=>{a.key==="Escape"&&s()}),t.remove(),document.body.style.overflow="auto"}}function z(e){let t=localStorage.getItem("shoppingList"),o=!1;t?t=JSON.parse(t):t=[];const n=t.findIndex(i=>i.title===e.title);return n===-1?(t.push(e),o=!0):t.splice(n,1),localStorage.setItem("shoppingList",JSON.stringify(t)),o}const G=document.querySelector(".categories-books"),m=document.querySelector(".categories-books-all"),E=document.querySelector(".categories-books-title"),T=document.querySelector(".loader");window.addEventListener("load",R);m.addEventListener("click",F);G.addEventListener("click",N);m.addEventListener("click",J);m.addEventListener("click",V);async function R(){T.style.display="none";try{const e=await $(),t=M(e.data);W(t)}catch(e){console.log(e)}}async function O(){T.style.display="none";try{const e=await $(),t=M(e.data);m.innerHTML=t}catch(e){console.log(e)}}function N(e){if(!e.target.classList.contains("categories-books-back-btn"))return;const t=e.target;O(),t.remove(),E.innerHTML='Best Sellers <span class="categories-books-title-accent">Books'}function M(e=[]){return e.map(({list_name:t,books:o})=>`
      <div class="categories-books-genre-title"> ${t}
        <ul class="categories-books-genre-all-books">
        ${U(o)}
        </ul>
        <button class="categories-books-btn">see more</button>
      </div>
      `).join("")}function U(e=[]){return e.map(({_id:t,list_name:o,author:n,book_image:i,title:s})=>`
      <li class="categories-books-genre-book" data-id="${t}" data-genre="${o}">
        <div class="categories-books-genre-book-img-thumb">
          <img class="categories-books-genre-book-img"
            src="${i}" alt="Title - '${s}'">
          <div class="categories-books-genre-book-hover">quick view </div>
        </div>
        <h2 class="categories-books-genre-book-title">${s}</h2>
        <h3 class="categories-books-genre-book-author">${n}</h3>
      </li>
      `).join("")}function W(e){m.insertAdjacentHTML("beforeend",e)}async function F(e){if(!e.target.classList.contains("categories-books-btn"))return;const o=e.target.previousElementSibling.firstElementChild.dataset.genre,n=o.split(" "),i=n.splice(-1,1);E.innerHTML=`${n.join(" ")} <span class="categories-books-title-accent">${i.toString()}</span>`,E.insertAdjacentHTML("afterend",'<button class="categories-books-back-btn">back to Best Sellers</button>');try{const s=await w(o),a=I(s.data);A(a)}catch(s){console.log(s)}}function I(e=[]){return e.map(({_id:t,list_name:o,author:n,book_image:i,title:s})=>`
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
      `).join("")}function A(e){m.innerHTML=e}async function J(e){if(!e.target.closest(".categories-books-genre-book"))return;const o=e.target.closest(".categories-books-genre-book").dataset.id;await S(o)}async function V(e){if(!e.target.closest(".categories-books-genre-books"))return;const o=e.target.closest(".categories-books-genre-books").dataset.id;await S(o)}const h={allCategoriesContainer:document.querySelector(".all-categories-container"),allCategoriesList:document.querySelector(".categories-list"),allCategoriesListItem:document.querySelector(".categories-list-item"),categoriesBook:document.querySelector(".categories-books-all"),categoriesBooksTitle:document.querySelector(".categories-books-title")};h.allCategoriesContainer.addEventListener("click",Y);h.allCategoriesContainer.addEventListener("click",q);function P(e){return e.map(({list_name:t})=>`<li class="categories-list-item js-categories-list-item" value="${t}" data-category='${t}'>${t}</li>`).join("")}j().then(e=>{h.allCategoriesList.insertAdjacentHTML("beforeend",P(e.data))}).catch(e=>console.log(e));function q(e){document.querySelector(".js-categories-list li:first-of-type")===e.currentTarget&&e.preventDefault(),e.target.tagName==="LI"&&(document.querySelectorAll(".js-categories-list li").forEach(s=>s.classList.remove("category-active")),e.target.classList.add("category-active"))}async function Y(e){q(e);const t=e.target;if(!(t.tagName==="LI"))return;const n=await w(t.attributes.value.nodeValue),i=I(n.data);A(i);const a=t.attributes.value.nodeValue.split(" "),k=a.splice(-1,1);h.categoriesBooksTitle.innerHTML=`${a.join(" ")} <span class="categories-books-title-accent">${k.toString()}</span>`}document.addEventListener("DOMContentLoaded",function(){document.getElementById("additionalItems").style.display="none"});
//# sourceMappingURL=commonHelpers.js.map
