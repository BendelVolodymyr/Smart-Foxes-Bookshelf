import"./assets/toggle_theme-445b1a1a.js";import{a as i}from"./assets/vendor-1c5e86dd.js";import"./assets/back_to_top-dba622ab.js";const l="https://books-backend.p.goit.global/books/";async function u(){const e="category-list";return await i.get(`${l}${e}`)}async function g(){const e="top-books";return await i.get(`${l}${e}`)}async function y(e){const o="category?category=";return await i.get(`${l}${o}${e}`)}const m=document.querySelector(".categories-books"),a=document.querySelector(".categories-books-all"),c=document.querySelector(".categories-books-title"),k=document.querySelector(".loader");window.addEventListener("load",p);a.addEventListener("click",v);m.addEventListener("click",B);a.addEventListener("click",C);a.addEventListener("click",E);async function p(){k.style.display="none";try{const e=await g(),o=d(e.data);h(o)}catch(e){console.log(e)}}async function f(){k.style.display="none";try{const e=await g(),o=d(e.data);a.innerHTML=o}catch(e){console.log(e)}}function B(e){if(!e.target.classList.contains("categories-books-back-btn"))return;const o=e.target;f(),o.remove(),c.innerHTML='Best Sellers <span class="categories-books-title-accent">Books'}function d(e=[]){return e.map(({list_name:o,books:s})=>`
      <div class="categories-books-genre-title"> ${o}
        <ul class="categories-books-genre-all-books">
        ${$(s)}
        </ul>
        <button class="categories-books-btn">see more</button>
      </div>
      `).join("")}function $(e=[]){return e.map(({_id:o,list_name:s,author:r,book_image:n,title:t})=>`
      <li class="categories-books-genre-book" data-id="${o}" data-genre="${s}">
        <div class="categories-books-genre-book-img-thumb">
          <img class="categories-books-genre-book-img"
            src="${n}" alt="Title - '${t}'">
          <div class="categories-books-genre-book-hover">quick view </div>
        </div>
        <h2 class="categories-books-genre-book-title">${t}</h2>
        <h3 class="categories-books-genre-book-author">${r}</h3>
      </li>
      `).join("")}function h(e){a.insertAdjacentHTML("beforeend",e)}async function v(e){if(!e.target.classList.contains("categories-books-btn"))return;const s=e.target.previousElementSibling.firstElementChild.dataset.genre,r=s.split(" "),n=r.splice(-1,1);c.innerHTML=`${r.join(" ")} <span class="categories-books-title-accent">${n.toString()}</span>`,c.insertAdjacentHTML("afterend",'<button class="categories-books-back-btn">back to Best Sellers</button>');try{const t=await y(s),b=L(t.data);S(b)}catch(t){console.log(t)}}function L(e=[]){return e.map(({_id:o,list_name:s,author:r,book_image:n,title:t})=>`
      <div class="categories-books-genre-all-books">
        <div class="categories-books-genre-books" data-id="${o}" data-genre="${s}">
          <div class="categories-books-genre-book-img-thumb">
            <img class="categories-books-genre-book-img"
              src="${n}" alt="Title - '${t}'">
              <div class="categories-books-genre-book-hover">quick view </div>
          </div>
          <h2 class="categories-books-genre-book-title">${t}</h2>
          <h3 class="categories-books-genre-book-author">${r}</h3>
        </div>
      </div> 
      `).join("")}function S(e){a.innerHTML=e}async function C(e){if(!e.target.closest(".categories-books-genre-book"))return;e.target.closest(".categories-books-genre-book").dataset.id}async function E(e){if(!e.target.closest(".categories-books-genre-books"))return;e.target.closest(".categories-books-genre-books").dataset.id}const q={allCategoriesContainer:document.querySelector(".all-categories-container"),allCategoriesList:document.querySelector(".js-categories-list"),allCategoriesListItem:document.querySelector(".js-categories-list-item"),categoriesBook:document.querySelector(".categories-books-all"),categoriesBooksTitle:document.querySelector(".categories-books-title")};function M(e){return e.map(({list_name:o})=>`<li class="categories-list-item js-categories-list-item" data-category='${o}'><a href="">${o}</a></li>`).join("")}u().then(e=>{q.allCategoriesList.insertAdjacentHTML("beforeend",M(e.data))}).catch(e=>console.log(e));document.querySelector(".suport");document.querySelector(".suport__button");
//# sourceMappingURL=commonHelpers.js.map
