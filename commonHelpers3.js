import"./assets/toggle_theme-056aedf1.js";import"./assets/back_to_top-62c9c55b.js";const c=localStorage.getItem("shoppingList"),h=JSON.parse(c),i=document.querySelector(".shopping-default"),r=document.querySelector(".shopping-title");function m(s){let o=[];s.map(({description:t,amazon_product_url:n,author:e,book_image:a,list_name:p,title:l,buy_links:g})=>{o.push(`<div class="shopping-box">
        <div class="shopping-book-img">
          <img class="shopping-genre-img" src="${a}"
            alt="Title - 'WISH'" >
        </div>
        <div class="shopping-book-info">
          <h2 class="shopping-book-title">${l}</h2>
          <span class="shopping-book-category">${p}</span>
          <p class="shopping-book-discription">${t}</p>
          <span class="shopping-book-author">${e}</span>
          <a class="img__src-amazon" href="${n}"><img class="mdl-logo-amazon" src="../img/amazon.png" alt="logo amazon" width="62" height="19"></a>
          <a class="img__src-books" href="${g[1].url}"><img class="mdl-logo-book" src="../img/books.png" alt="logo book" width="33" height="32"></a>
        </div>
        <button class="shopping-remove-btn" type="button">
          <svg class="remove-btn" width="16" height="16">
            <use href="../img/sprite.svg#icon-trash"></use>
          </svg>
        </button>
      </div>`)}),s.length==[].length?i.classList.remove("is-hidden"):(i.classList.add("is-hidden"),r.insertAdjacentHTML("afterend",o.join("")))}m(h);
//# sourceMappingURL=commonHelpers3.js.map
