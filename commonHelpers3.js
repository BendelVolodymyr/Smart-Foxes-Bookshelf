import"./assets/toggle_theme-056aedf1.js";import{a as r,b as h}from"./assets/back_to_top-b8d63725.js";const t=document.querySelector(".card");window.addEventListener("load",()=>{setInterval(()=>{const s=screen.width;Number(s)>1439?t.classList.remove("is-hidden"):t.classList.add("is-hidden")},1e3)});const d=localStorage.getItem("shoppingList"),m=JSON.parse(d),i=document.querySelector(".shopping-default"),u=document.querySelector(".shopping-title");function b(s){let o=[];s.map(({description:e,amazon_product_url:n,author:a,book_image:c,list_name:l,title:p,buy_links:g})=>{o.push(`<div class="shopping-box">
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
          <svg class="remove-btn" width="16" height="16">
            <use href="./img/sprite.svg#icon-trash"></use>
          </svg>
        </button>
      </div>`)}),s.length==[].length?i.classList.remove("is-hidden"):(i.classList.add("is-hidden"),u.insertAdjacentHTML("afterend",o.join("")))}b(m);const v=localStorage.getItem("shoppingList"),f=JSON.parse(v),L=document.querySelector(".pagination-container");document.querySelector(".pagination-pages");function S(){f.length===0&&L.classList.add("is-hidden")}S();
//# sourceMappingURL=commonHelpers3.js.map
