import"./assets/modulepreload-polyfill-3cfb730f.js";import{i as O,a as R,b as N}from"./assets/back_to_top-eb760c9e.js";import{a as h,N as C}from"./assets/vendor-0ea893a8.js";const E="https://books-backend.p.goit.global/books/";async function _(){const e="category-list";return await h.get(`${E}${e}`)}async function w(){const e="top-books";return await h.get(`${E}${e}`)}async function T(e){const t="category?category=";return await h.get(`${E}${t}${e}`)}const z="https://books-backend.p.goit.global/books/";async function G(e){try{const t=await h.get(`${z}${e}`);if(t.status===200)return t.data;throw new Error("Failed to fetch book details")}catch(t){console.error(t)}}function M(e){const t=document.createElement("div");t.classList.add("modal-backdrop"),t.addEventListener("click",a);const o=document.createElement("div");o.classList.add("modal");const s=document.createElement("button");s.classList.add("mdl-btn-icon-x"),s.innerHTML=`
        <svg class="mdl-icon-x" width="24" height="24" viewBox="0 0 32 32">
        <use href="${O}#icon-close"></use>
    </svg>
    `,s.addEventListener("click",a),window.addEventListener("keydown",i=>{i.key==="Escape"&&a()}),o.appendChild(s);const n=document.createElement("ul");n.classList.add("list","mdl-list"),o.appendChild(n),G(e).then(i=>{const p=document.createElement("li");n.appendChild(p);const l=document.createElement("img");l.classList.add("mdl-book-img"),l.alt="book",l.width=287,l.height=408;const H="URL_до_запасної_картинки.jpg";l.onerror=function(){l.src=H},l.src=i.book_image,p.appendChild(l);const k=document.createElement("li");n.appendChild(k);const L=document.createElement("h2");L.classList.add("mdl-book-name"),L.textContent=i.title,k.appendChild(L);const y=document.createElement("h3");y.classList.add("mdl-book-author"),y.textContent=`by ${i.author}`,k.appendChild(y);const f=document.createElement("p");f.classList.add("mdl-book-info"),f.textContent=i.description,k.appendChild(f);const b=document.createElement("ul");b.classList.add("list","mdl-link-list"),k.appendChild(b);const B=i.buy_links.find(r=>r.name==="Amazon");if(B){const r=document.createElement("li");b.appendChild(r);const c=document.createElement("a");c.classList.add("link"),c.href=B.url,c.target="_blank",c.innerHTML=`
        <img class="mdl-logo-amazon" src="${R}" alt="logo amazon" width="62" height="19">
    `,r.appendChild(c)}const $=i.buy_links.find(r=>r.name!=="Amazon");if($){const r=document.createElement("li");b.appendChild(r);const c=document.createElement("a");c.classList.add("link"),c.href=$.url,c.target="_blank",c.innerHTML=`
        <img class="mdl-logo-book" src="${N}" alt="logo book" width="33" height="32">
    `,r.appendChild(c)}const d=document.createElement("button");d.classList.add("mdl-main-btn");const S=(JSON.parse(localStorage.getItem("shoppingList"))||[]).some(r=>r.title===i.title);S?d.textContent="Remove from the shopping list":d.textContent="Add to shopping list";const m=document.createElement("p");m.classList.add("confirmation-text"),m.innerHTML="Congratulations! You have added the book to the shopping list. To delete, press the button &rdquo;Remove from the shopping list&ldquo;.",m.style.display=S?"block":"none",d.addEventListener("click",r=>{r.stopPropagation(),W(i)?(d.textContent="Remove from the shopping list",m.style.display="block"):(d.textContent="Add to shopping list",m.style.display="none")}),o.appendChild(d),o.appendChild(m)}),t.appendChild(o),document.body.appendChild(t),document.body.style.overflow="hidden";function a(){t.removeEventListener("click",a),s.removeEventListener("click",a),window.removeEventListener("keydown",i=>{i.key==="Escape"&&a()}),t.remove(),document.body.style.overflow="auto"}}function W(e){let t=localStorage.getItem("shoppingList"),o=!1;t?t=JSON.parse(t):t=[];const s=t.findIndex(n=>n.title===e.title);return s===-1?(t.push(e),o=!0):t.splice(s,1),localStorage.setItem("shoppingList",JSON.stringify(t)),o}const F=document.querySelector(".categories-books"),u=document.querySelector(".categories-books-all"),v=document.querySelector(".categories-books-title"),I=document.querySelector(".loader");window.addEventListener("load",P);u.addEventListener("click",K);F.addEventListener("click",J);u.addEventListener("click",Q);u.addEventListener("click",X);async function P(){I.style.display="none";try{const e=await w(),t=A(e.data);Y(t)}catch(e){C.Report.failure("OOPS! We have some problems🙊",e,"Try again")}}async function U(){I.style.display="none";try{const e=await w(),t=A(e.data);u.innerHTML=t}catch(e){C.Report.failure("OOPS! We have some problems🙊",e,"Try again")}}function J(e){if(!e.target.classList.contains("categories-books-back-btn"))return;const t=e.target;U(),t.remove(),v.innerHTML='Best Sellers <span class="categories-books-title-accent">Books'}function A(e=[]){return e.map(({list_name:t,books:o})=>`
      <div class="categories-books-genre-title"> ${t}
        <ul class="categories-books-genre-all-books">
        ${V(o)}
        </ul>
        <button class="categories-books-btn" data-category='${t}'>see more</button>
      </div>
      `).join("")}function V(e=[]){return e.map(({_id:t,list_name:o,author:s,book_image:n,title:a})=>`
      <li class="categories-books-genre-book" data-id="${t}" data-genre="${o}">
        <div class="categories-books-genre-book-img-thumb">
          <img class="categories-books-genre-book-img"
            src="${n}" alt="Title - '${a}'">
          <div class="categories-books-genre-book-hover">quick view </div>
        </div>
        <h2 class="categories-books-genre-book-title">${a}</h2>
        <h3 class="categories-books-genre-book-author">${s}</h3>
      </li>
      `).join("")}function Y(e){u.insertAdjacentHTML("beforeend",e)}async function K(e){if(!e.target.classList.contains("categories-books-btn"))return;const o=e.target.previousElementSibling.firstElementChild.dataset.genre,s=o.split(" "),n=s.splice(-1,1);v.innerHTML=`${s.join(" ")} <span class="categories-books-title-accent">${n.toString()}</span>`,v.insertAdjacentHTML("afterend",'<button class="categories-books-back-btn ">back to Best Sellers</button>');try{const a=await T(o),i=x(a.data);q(i)}catch(a){C.Report.failure("OOPS! We have some problems🙊",a,"Try again")}}function x(e=[]){return e.map(({_id:t,list_name:o,author:s,book_image:n,title:a})=>`
      <div class="categories-books-genre-all-books">
        <div class="categories-books-genre-books" data-id="${t}" data-genre="${o}">
          <div class="categories-books-genre-book-img-thumb">
            <img class="categories-books-genre-book-img"
              src="${n}" alt="Title - '${a}'">
              <div class="categories-books-genre-book-hover">quick view </div>
          </div>
          <h2 class="categories-books-genre-book-title">${a}</h2>
          <h3 class="categories-books-genre-book-author">${s}</h3>
        </div>
      </div> 
      `).join("")}function q(e){u.innerHTML=e}async function Q(e){if(!e.target.closest(".categories-books-genre-book"))return;const o=e.target.closest(".categories-books-genre-book").dataset.id;await M(o)}async function X(e){if(!e.target.closest(".categories-books-genre-books"))return;const o=e.target.closest(".categories-books-genre-books").dataset.id;await M(o)}const g={allCategoriesContainer:document.querySelector(".all-categories-container"),allCategoriesList:document.querySelector(".categories-list"),allCategoriesListItem:document.querySelector(".categories-list-item"),categoriesBook:document.querySelector(".categories-books-all"),categoriesBooksTitle:document.querySelector(".categories-books-title"),divForSeeMoreBtn:document.querySelector(".categories-books")},Z=document.querySelector(".js-categories-list li:first-of-type");g.allCategoriesContainer.addEventListener("click",ee);g.allCategoriesContainer.addEventListener("click",j);g.divForSeeMoreBtn.addEventListener("click",te);function D(e){return e.map(({list_name:t})=>`<li class="categories-list-item js-categories-list-item" value="${t}" data-category='${t}'>${t}</li>`).join("")}_().then(e=>{g.allCategoriesList.insertAdjacentHTML("beforeend",D(e.data))}).catch(e=>console.log(e));function j(e){Z===e.target&&e.preventDefault(),e.target.tagName==="LI"&&([...g.allCategoriesList.children].forEach(n=>n.classList.remove("category-active")),e.target.classList.add("category-active"))}async function ee(e){j(e);const t=e.target;if(!(t.tagName==="LI"))return;const s=await T(t.attributes.value.nodeValue),n=x(s.data);q(n);const i=t.attributes.value.nodeValue.split(" "),p=i.splice(-1,1);g.categoriesBooksTitle.innerHTML=`${i.join(" ")} <span class="categories-books-title-accent">${p.toString()}</span>`}function te(e){if(!e.target.classList.contains("categories-books-btn"))return;const t=e.target.dataset.category;[...g.allCategoriesList.children].forEach(s=>{const n=s.dataset.category;s.classList.remove("category-active"),n===t&&s.classList.add("category-active")})}
//# sourceMappingURL=commonHelpers.js.map
