import { createShopping } from './shopping';

const storedData = localStorage.getItem('shoppingList');
const shoppingList = JSON.parse(storedData);
const paginationPages = document.querySelector('.pagination-pages');
const shoppingContainer = document.querySelector('.shopping-container');
let itemsPerPage = 3; 
let currentPage = 1;

function chunkArray(array, chunkSize) {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
}

const chunkedArray = chunkArray(shoppingList, itemsPerPage);
const totalPages = Math.ceil(shoppingList.length / itemsPerPage);

function createBtnMarkup (pageNumber) {
    const markup = `<button class="pagination-pages-btn"  data-page="${pageNumber}">
        <span class="pagination-pages-numbers">${pageNumber}</span></button>`;
    paginationPages.insertAdjacentHTML('afterbegin', markup);
    const button = document.querySelector(`[data-page="${pageNumber}"]`);
    button.addEventListener('click', function () {
        currentPage = pageNumber;
        displayItems();
        updateActivePageButton();
    });
}

function updateActivePageButton() {
    const buttons = document.querySelectorAll('.pagination-pages-btn');
    buttons.forEach(button => {
        const page = parseInt(button.dataset.page);
        if (page === currentPage) {
            button.classList.add('pagination-pages-btn-active');
        } else {
            button.classList.remove('pagination-pages-btn-active');
        }
    });
}

function displayItems() {
    const currentPageItems = chunkedArray[currentPage - 1];
    createShopping(currentPageItems);
}

function createBtnPages() {
    if (shoppingList.length > itemsPerPage) {
        for (let i = 2; i <= totalPages; i++) {
            createBtnMarkup(i);
        }
    }
}

function checkShoppingList() {
    const pagination = document.querySelector('.pagination-container');
    if (shoppingList.length === 0) {
        pagination.classList.add('is-hidden');
    }
    else
    {
        createBtnPages();
        updateActivePageButton();
    }
 
}




checkShoppingList();
createBtnMarkup(1);
















































