import"./assets/toggle_theme-8be7ece8.js";import{a as h}from"./assets/vendor-1c5e86dd.js";import"./assets/back_to_top-dba622ab.js";const C="https://books-backend.p.goit.global/books/";async function x(){const e="category-list";return await h.get(`${C}${e}`)}async function $(){const e="top-books";return await h.get(`${C}${e}`)}async function w(e){const t="category?category=";return await h.get(`${C}${t}${e}`)}const j="https://books-backend.p.goit.global/books/";async function H(e){try{const t=await h.get(`${j}${e}`);if(t.status===200)return t.data;throw new Error("Failed to fetch book details")}catch(t){console.error(t)}}function S(e){const t=document.createElement("div");t.classList.add("modal-backdrop"),t.addEventListener("click",n);const o=document.createElement("div");o.classList.add("modal");const s=document.createElement("button");s.classList.add("mdl-btn-icon-x"),s.innerHTML=`
        <svg class="mdl-icon-x" width="24" height="24">
        <use href="img/sprite.svg#icon-close"></use>
    </svg>
    `,s.addEventListener("click",n),window.addEventListener("keydown",i=>{i.key==="Escape"&&n()}),o.appendChild(s);const a=document.createElement("ul");a.classList.add("list","mdl-list"),o.appendChild(a),H(e).then(i=>{const p=document.createElement("li");a.appendChild(p);const l=document.createElement("img");l.classList.add("mdl-book-img"),l.alt="book",l.width=287,l.height=408;const q="URL_до_запасної_картинки.jpg";l.onerror=function(){l.src=q},l.src=i.book_image,p.appendChild(l);const u=document.createElement("li");a.appendChild(u);const L=document.createElement("h2");L.classList.add("mdl-book-name"),L.textContent=i.title,u.appendChild(L);const y=document.createElement("h3");y.classList.add("mdl-book-author"),y.textContent=`by ${i.author}`,u.appendChild(y);const f=document.createElement("p");f.classList.add("mdl-book-info"),f.textContent=i.description,u.appendChild(f);const b=document.createElement("ul");b.classList.add("list","mdl-link-list"),u.appendChild(b);const E=i.buy_links.find(r=>r.name==="Amazon");if(E){const r=document.createElement("li");b.appendChild(r);const c=document.createElement("a");c.classList.add("link"),c.href=E.url,c.target="_blank",c.innerHTML=`
        <img class="mdl-logo-amazon" src="img/amazon.png" alt="logo amazon" width="62" height="19">
    `,r.appendChild(c)}const B=i.buy_links.find(r=>r.name!=="Amazon");if(B){const r=document.createElement("li");b.appendChild(r);const c=document.createElement("a");c.classList.add("link"),c.href=B.url,c.target="_blank",c.innerHTML=`
        <img class="mdl-logo-book" src="img/books.png" alt="logo book" width="33" height="32">
    `,r.appendChild(c)}const d=document.createElement("button");d.classList.add("mdl-main-btn"),d.textContent="Add to shopping list";const g=document.createElement("p");g.classList.add("confirmation-text"),g.innerHTML="Congratulations! You have added the book to the shopping list. To delete, press the button &rdquo;Remove from the shopping list&ldquo;.",g.style.display="none",d.addEventListener("click",r=>{r.stopPropagation(),_(i)?(d.textContent="Remove from the shopping list",g.style.display="block"):(d.textContent="Add to shopping list",g.style.display="none")}),o.appendChild(d),o.appendChild(g)}),t.appendChild(o),document.body.appendChild(t),document.body.style.overflow="hidden";function n(){t.removeEventListener("click",n),s.removeEventListener("click",n),window.removeEventListener("keydown",i=>{i.key==="Escape"&&n()}),t.remove(),document.body.style.overflow="auto"}}function _(e){let t=localStorage.getItem("shoppingList"),o=!1;t?t=JSON.parse(t):t=[];const s=t.findIndex(a=>a.title===e.title);return s===-1?(t.push(e),o=!0):t.splice(s,1),localStorage.setItem("shoppingList",JSON.stringify(t)),o}const z=document.querySelector(".categories-books"),m=document.querySelector(".categories-books-all"),v=document.querySelector(".categories-books-title"),T=document.querySelector(".loader");window.addEventListener("load",G);m.addEventListener("click",F);z.addEventListener("click",N);m.addEventListener("click",O);m.addEventListener("click",J);async function G(){T.style.display="none";try{const e=await $(),t=M(e.data);W(t)}catch(e){console.log(e)}}async function R(){T.style.display="none";try{const e=await $(),t=M(e.data);m.innerHTML=t}catch(e){console.log(e)}}function N(e){if(!e.target.classList.contains("categories-books-back-btn"))return;const t=e.target;R(),t.remove(),v.innerHTML='Best Sellers <span class="categories-books-title-accent">Books'}function M(e=[]){return e.map(({list_name:t,books:o})=>`
      <div class="categories-books-genre-title"> ${t}
        <ul class="categories-books-genre-all-books">
        ${U(o)}
        </ul>
        <button class="categories-books-btn">see more</button>
      </div>
      `).join("")}function U(e=[]){return e.map(({_id:t,list_name:o,author:s,book_image:a,title:n})=>`
      <li class="categories-books-genre-book" data-id="${t}" data-genre="${o}">
        <div class="categories-books-genre-book-img-thumb">
          <img class="categories-books-genre-book-img"
            src="${a}" alt="Title - '${n}'">
          <div class="categories-books-genre-book-hover">quick view </div>
        </div>
        <h2 class="categories-books-genre-book-title">${n}</h2>
        <h3 class="categories-books-genre-book-author">${s}</h3>
      </li>
      `).join("")}function W(e){m.insertAdjacentHTML("beforeend",e)}async function F(e){if(!e.target.classList.contains("categories-books-btn"))return;const o=e.target.previousElementSibling.firstElementChild.dataset.genre,s=o.split(" "),a=s.splice(-1,1);v.innerHTML=`${s.join(" ")} <span class="categories-books-title-accent">${a.toString()}</span>`,v.insertAdjacentHTML("afterend",'<button class="categories-books-back-btn">back to Best Sellers</button>');try{const n=await w(o),i=A(n.data);I(i)}catch(n){console.log(n)}}function A(e=[]){return e.map(({_id:t,list_name:o,author:s,book_image:a,title:n})=>`
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
      `).join("")}function I(e){m.innerHTML=e}async function O(e){if(!e.target.closest(".categories-books-genre-book"))return;const o=e.target.closest(".categories-books-genre-book").dataset.id;await S(o)}async function J(e){if(!e.target.closest(".categories-books-genre-books"))return;const o=e.target.closest(".categories-books-genre-books").dataset.id;await S(o)}const k={allCategoriesContainer:document.querySelector(".all-categories-container"),allCategoriesList:document.querySelector(".categories-list"),allCategoriesListItem:document.querySelector(".categories-list-item"),categoriesBook:document.querySelector(".categories-books-all"),categoriesBooksTitle:document.querySelector(".categories-books-title")};function V(e){return e.map(({list_name:t})=>`<li class="categories-list-item js-categories-list-item" value="${t}" data-category='${t}'>${t}</li>`).join("")}x().then(e=>{k.allCategoriesList.insertAdjacentHTML("beforeend",V(e.data))}).catch(e=>console.log(e));async function P(e){e.preventDefault();const t=e.target;if(!(t.tagName=="LI"))return;const s=await w(t.attributes.value.nodeValue),a=A(s.data);I(a);const i=t.attributes.value.nodeValue.split(" "),p=i.splice(-1,1);k.categoriesBooksTitle.innerHTML=`${i.join(" ")} <span class="categories-books-title-accent">${p.toString()}</span>`}k.allCategoriesContainer.addEventListener("click",P);k.allCategoriesContainer.addEventListener("click",Y);function Y(e){document.querySelector(".js-categories-list li:first-of-type")===e.currentTarget&&e.preventDefault(),[...k.allCategoriesList.children].map(a=>a.classList.remove("category-active")),e.target.classList.add("category-active")}
//# sourceMappingURL=commonHelpers.js.map
