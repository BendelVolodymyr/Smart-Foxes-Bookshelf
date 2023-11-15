import amazonImg from '/amazon.png';
import booksImg from '/books.png';
import iconTrash from '../img/sprite.svg';

const suportEl = document.querySelector('.card');

window.addEventListener('load', () => {
  setInterval(() => {
    const widthWindow = screen.width;
    if (Number(widthWindow) >  Number(1439)) {
      suportEl.classList.remove('is-hidden');
      } else  {
      suportEl.classList.add('is-hidden');
    };
  }, 1000);
});

const LOCAL_KEY = localStorage.getItem('shoppingList');
const parsedSettings = JSON.parse(LOCAL_KEY);

const shoppingDefaultEl = document.querySelector('.shopping-default');
const shoppingTitleEl = document.querySelector('.shopping-title');
const shoppingBox = document.querySelector('.shopping-box');
const shoppingBoxContainer = document.querySelector('.shopping-box-container');
 export function createShopping(arr) {
     let result = [];
    arr.map(({description, amazon_product_url, author, book_image, list_name, title, buy_links
    }) => {
        
        result.push(`<div class="shopping-box">
        <div class="shopping-book-img">
          <img class="shopping-genre-img" src="${book_image}"
            alt="Title - 'WISH'" >
        </div>
        <div class="shopping-book-info">
          <h2 class="shopping-book-title">${title}</h2>
          <span class="shopping-book-category">${list_name}</span>
          <p class="shopping-book-discription">${description}</p>
          <span class="shopping-book-author">${author}</span>
        
          <a class="img__src-amazon" href="${amazon_product_url}"><img class="mdl-logo-amazon" src="${amazonImg}" alt="logo amazon" width="62" height="19"></a>
          <a class="img__src-books" href="${buy_links[1].url}"><img class="mdl-logo-book" src="${booksImg}" alt="logo book" width="33" height="32"></a>
        </div>
        <button class="shopping-remove-btn" type="button">
          <svg class="remove-btn" width="16" height="16" viewBox="0 0 32 32">
            <use href="${iconTrash}#icon-trash"></use>
          </svg>
        </button>
      </div>`);
    })
     const control = arr.length == [].length;
     if (control) {
         shoppingDefaultEl.classList.remove('is-hidden');
     } else {
     
         shoppingDefaultEl.classList.add('is-hidden');
         shoppingBoxContainer.insertAdjacentHTML('afterbegin', result.join(''));
    }   
} 

shoppingBoxContainer.addEventListener('click',
 (event) => {

 
  const removeButton = event.target.closest('.shopping-remove-btn');

  if (removeButton) {
    const shoppingBox = removeButton.closest('.shopping-box');

    if (shoppingBox) {
      const itemId = shoppingBox.dataset.itemId;

      removeBookFromShoppingList(itemId);

      shoppingBox.remove();
    }
  }
});

function removeBookFromShoppingList(itemId) {
  const updatedShoppingList = parsedSettings.filter(item => item.id !== itemId);
  localStorage.setItem('shoppingList', JSON.stringify(updatedShoppingList));
}
createShopping(parsedSettings);




