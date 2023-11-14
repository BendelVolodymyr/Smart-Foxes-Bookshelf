
import axios from 'axios';
import amazonImg from '/amazon.png';
import booksImg from '/books.png';
import iconClose from '/icon-close.svg';

// Функція для отримання деталей книги за її ID
const BASE_URL = 'https://books-backend.p.goit.global/books/';

export async function getBookDetails(bookId) {
  try {
    const response = await axios.get(`${BASE_URL}${bookId}`);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Failed to fetch book details');
    }
  } catch (error) {
    console.error(error);
  }
}



// Функція для створення модального вікна
function createModal(bookId) {
    const modalBackdrop = document.createElement('div');
    modalBackdrop.classList.add('modal-backdrop');
    modalBackdrop.addEventListener('click', closeModal);

    const modal = document.createElement('div');
    modal.classList.add('modal');

    const closeModalButton = document.createElement('button');
    closeModalButton.classList.add('mdl-btn-icon-x');
    closeModalButton.innerHTML = `
        <svg class="mdl-icon-x" width="24" height="24">
        <use href="${iconClose}"></use>
    </svg>
    `;

    closeModalButton.addEventListener('click', closeModal);

    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeModal();
        }
    });

    modal.appendChild(closeModalButton);

    const modalList = document.createElement('ul');
    modalList.classList.add('list', 'mdl-list');
    modal.appendChild(modalList);

    // Отримання даних про книгу та заповнення модального вікна
    getBookDetails(bookId).then(bookData => {
        const modalListItem_1 = document.createElement('li');
        modalList.appendChild(modalListItem_1);

        const modalBookImage = document.createElement('img');
        modalBookImage.classList.add('mdl-book-img');
        modalBookImage.alt = 'book';
        modalBookImage.width = 287;
        modalBookImage.height = 408;

    // Запасна картинка (URL до картинки за замовчуванням)
    const fallbackImageURL = 'img/shop-none.png';

        modalBookImage.onerror = function() {
            modalBookImage.src = fallbackImageURL;
        };
        modalBookImage.src = bookData.book_image;
        
        modalListItem_1.appendChild(modalBookImage);

        const modalListItem_2 = document.createElement('li');
        modalList.appendChild(modalListItem_2);

        const modalBookName = document.createElement('h2');
        modalBookName.classList.add('mdl-book-name');
        modalBookName.textContent = bookData.title;
        modalListItem_2.appendChild(modalBookName);

        const modalBookAuthor = document.createElement('h3');
        modalBookAuthor.classList.add('mdl-book-author');
        modalBookAuthor.textContent = `by ${bookData.author}`;
        modalListItem_2.appendChild(modalBookAuthor);

        const modalBookInfo = document.createElement('p');
        modalBookInfo.classList.add('mdl-book-info');
        modalBookInfo.textContent = bookData.description;
        modalListItem_2.appendChild(modalBookInfo);

        // Додавання кнопок з посиланнями
        const modalLinkList = document.createElement('ul');
        modalLinkList.classList.add('list', 'mdl-link-list');
        modalListItem_2.appendChild(modalLinkList);

        const modalAmazonLink = bookData.buy_links.find(link => link.name === 'Amazon');
        if (modalAmazonLink) {
            const modalLinkListItemAmazon = document.createElement('li');
            modalLinkList.appendChild(modalLinkListItemAmazon);
            const modalLinkElementAmazon = document.createElement('a');
            modalLinkElementAmazon.classList.add('link');
            modalLinkElementAmazon.href = modalAmazonLink.url;
            modalLinkElementAmazon.target = '_blank';
            modalLinkElementAmazon.innerHTML = `
        <img class="mdl-logo-amazon" src="${amazonImg}" alt="logo amazon" width="62" height="19">
    `;


            modalLinkListItemAmazon.appendChild(modalLinkElementAmazon);
        }

        const modalOtherLink = bookData.buy_links.find(link => link.name !== 'Amazon');

        if (modalOtherLink) {
            const modalLinkListItem = document.createElement('li');
            modalLinkList.appendChild(modalLinkListItem);
            const purchaseLinkElement = document.createElement('a');
            purchaseLinkElement.classList.add('link');
            purchaseLinkElement.href = modalOtherLink.url;
            purchaseLinkElement.target = '_blank';
            purchaseLinkElement.innerHTML = `
        <img class="mdl-logo-book" src="${booksImg}" alt="logo book" width="33" height="32">
    `;
            modalLinkListItem.appendChild(purchaseLinkElement);
        }

        const modalShoppingListButton = document.createElement('button');
  modalShoppingListButton.classList.add('mdl-main-btn');
  const shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];

  const isBookInShoppingList = shoppingList.some(
    (listBook) => listBook.title === bookData.title
  );

  if (isBookInShoppingList) {
    modalShoppingListButton.textContent = 'Remove from the shopping list';
  } else {
    modalShoppingListButton.textContent = 'Add to shopping list';
  }

  const modalCongratsText = document.createElement('p');
  modalCongratsText.classList.add('confirmation-text');
  modalCongratsText.innerHTML =
    'Congratulations! You have added the book to the shopping list. To delete, press the button &rdquo;Remove from the shopping list&ldquo;.';

  modalCongratsText.style.display = isBookInShoppingList ? 'block' : 'none';

  modalShoppingListButton.addEventListener('click', (event) => {
    event.stopPropagation();

    const isBookAdded = toggleBookInShoppingList(bookData);

    if (isBookAdded) {
      modalShoppingListButton.textContent = 'Remove from the shopping list';
      modalCongratsText.style.display = 'block';
    } else {
      modalShoppingListButton.textContent = 'Add to shopping list';
      modalCongratsText.style.display = 'none';
    }
  });

        modal.appendChild(modalShoppingListButton);
        modal.appendChild(modalCongratsText);

    });

    modalBackdrop.appendChild(modal);
    document.body.appendChild(modalBackdrop);


     document.body.style.overflow = 'hidden';


      function closeModal() {
        modalBackdrop.removeEventListener('click', closeModal);
        closeModalButton.removeEventListener('click', closeModal);
        window.removeEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                closeModal();
            }
        });
          
        modalBackdrop.remove();
        document.body.style.overflow = 'auto';
    
    }

}

function toggleBookInShoppingList(book) {
    let shoppingList = localStorage.getItem('shoppingList');
    let isBookAdded = false;

    if (!shoppingList) {
        shoppingList = [];
    } else {
        shoppingList = JSON.parse(shoppingList);
    }

    const bookIndex = shoppingList.findIndex(
        (listBook) => listBook.title === book.title
    );

    if (bookIndex === -1) {
        shoppingList.push(book);
        isBookAdded = true;
    } else {
        shoppingList.splice(bookIndex, 1);
    }

    localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
    return isBookAdded;
}

// createModal('643282b2e85766588626a0f2');
export { createModal };