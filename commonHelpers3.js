import"./assets/toggle_theme-056aedf1.js";import{a as r,b as h,i as d}from"./assets/back_to_top-89a1c134.js";const t=document.querySelector(".card");window.addEventListener("load",()=>{setInterval(()=>{const s=screen.width;Number(s)>1439?t.classList.remove("is-hidden"):t.classList.add("is-hidden")},1e3)});const m=localStorage.getItem("shoppingList"),u=JSON.parse(m),i=document.querySelector(".shopping-default"),b=document.querySelector(".shopping-title");function v(s){let o=[];s.map(({description:e,amazon_product_url:n,author:a,book_image:c,list_name:l,title:p,buy_links:g})=>{o.push(`<div class="shopping-box">
        <div class="shopping-book-img">
          <img class="shopping-genre-img" src="${c}"
            alt="Title - 'WISH'" >
        </div>
        <div class="shopping-book-info">
          <h2 class="shopping-book-title">${p}</h2>
          <span class="shopping-book-category">${l}</span>
          <p class="shopping-book-discription">${e}</p>
          <span class="shopping-book-author">${a}</span>
        
          <a class="img__src-amazon" href="${n}"><img class="mdl-logo-amazon" src="${r}" alt="logo amazon" width="62" height="19"></a>
          <a class="img__src-books" href="${g[1].url}"><img class="mdl-logo-book" src="${h}" alt="logo book" width="33" height="32"></a>
        </div>
        <button class="shopping-remove-btn" type="button">
          <svg class="remove-btn" width="16" height="16" viewBox="0 0 32 32">
            <use href="${d}#icon-trash"></use>
          </svg>
        </button>
      </div>`)}),s.length==[].length?i.classList.remove("is-hidden"):(i.classList.add("is-hidden"),b.insertAdjacentHTML("afterend",o.join("")))}v(u);const f=localStorage.getItem("shoppingList"),L=JSON.parse(f),S=document.querySelector(".pagination-container");document.querySelector(".pagination-pages");function k(){L.length===0&&S.classList.add("is-hidden")}k();
//# sourceMappingURL=commonHelpers3.js.map
