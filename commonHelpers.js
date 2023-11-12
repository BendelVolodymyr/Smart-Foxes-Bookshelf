import"./assets/toggle_theme-e463d6d1.js";import{a as n}from"./assets/vendor-1c5e86dd.js";import"./assets/back_to_top-dba622ab.js";const i="https://books-backend.p.goit.global/books/";async function l(){const e="category-list";return await n.get(`${i}${e}`)}async function g(){const e="top-books";return await n.get(`${i}${e}`)}async function d(e){const o="category?category=";return await n.get(`${i}${o}${e}`)}const c=document.querySelector(".categories-books-all"),u=document.querySelector(".categories-books-title"),k=document.querySelector(".loader");window.addEventListener("load",b);c.addEventListener("click",p);async function b(){k.style.display="none";try{const e=await g(),o=m(e.data);$(o)}catch(e){console.log(e)}}function m(e=[]){return e.map(({list_name:o,books:t})=>`
      <div class="categories-books-genre-title"> ${o}
        <ul class="categories-books-genre-all-books">
        ${y(t)}
        </ul>
        <button class="categories-books-btn">see more</button>
      </div>
      `).join("")}function y(e=[]){return e.map(({_id:o,list_name:t,author:s,book_image:a,title:r})=>`
      <li class="categories-books-genre-book" data-id="${o}" data-genre="${t}">
        <div class="categories-books-genre-book-img-thumb">
          <img class="categories-books-genre-book-img"
            src="${a}" alt="Title - '${r}'">
        </div>
        <h2 class="categories-books-genre-book-title">${r}</h2>
        <h3 class="categories-books-genre-book-author">${s}</h3>
      </li>
      `).join("")}function $(e){c.insertAdjacentHTML("beforeend",e)}async function p(e){if(!e.target.classList.contains("categories-books-btn"))return;const t=e.target.previousElementSibling.firstElementChild.dataset.genre;u.innerHTML=t;try{const s=await d(t),a=h(s.data);f(a)}catch(s){console.log(s)}}function h(e=[]){return e.map(({_id:o,list_name:t,author:s,book_image:a,title:r})=>`
      <div class="categories-books-genre-all-books">
        <div class="categories-books-genre-books" data-id="${o}" data-genre="${t}">
          <div class="categories-books-genre-book-img-thumb">
            <img class="categories-books-genre-book-img"
              src="${a}" alt="Title - '${r}'">
          </div>
          <h2 class="categories-books-genre-book-title">${r}</h2>
          <h3 class="categories-books-genre-book-author">${s}</h3>
        </div>
      </div> 
      `).join("")}function f(e){c.innerHTML=e}const B={allCategoriesContainer:document.querySelector(".all-categories-container"),allCategoriesList:document.querySelector(".js-categories-list"),allCategoriesListItem:document.querySelector(".js-categories-list-item"),categoriesBook:document.querySelector(".categories-books-all"),categoriesBooksTitle:document.querySelector(".categories-books-title")};function C(e){return e.map(({list_name:o})=>`<li class="categories-list-item js-categories-list-item" data-category='${o}'><a href="">${o}</a></li>`).join("")}l().then(e=>{B.allCategoriesList.insertAdjacentHTML("beforeend",C(e.data))}).catch(e=>console.log(e));
//# sourceMappingURL=commonHelpers.js.map
