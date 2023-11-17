import { all } from 'axios';
import Notiflix from 'notiflix';
import { getTopBooks, getBooksByCategory } from './BOOKS_API';
import { createModal } from './pop_up';

const categoriesBooks = document.querySelector('.categories-books');
const categoriesBook = document.querySelector('.categories-books-all');
const categoriesBooksTitle = document.querySelector('.categories-books-title');
const loader = document.querySelector('.loader');

window.addEventListener('load', onLoad);
categoriesBook.addEventListener('click', onSeeMore);
categoriesBooks.addEventListener('click', onBack);
categoriesBook.addEventListener('click', onSeeMoreAboutBookBest);
categoriesBook.addEventListener('click', onSeeMoreAboutBookGenre);

async function onLoad() {
  loader.style.display = 'none';
  try {
    const topBooks = await getTopBooks();
    const categories = createCategories(topBooks.data);
    addCategoriesMarkup(categories);
  } catch (err) {
    Notiflix.Report.failure('OOPS! We have some problems🙊', err, 'Try again');
  }
}

async function loadBack() {
  loader.style.display = 'none';
  try {
    const topBooks = await getTopBooks();
    const categories = createCategories(topBooks.data);
    categoriesBook.innerHTML = categories;
  } catch (err) {
    Notiflix.Report.failure('OOPS! We have some problems🙊', err, 'Try again');
  }
}

function onBack(event) {
  if (!event.target.classList.contains('categories-books-back-btn')) {
    return;
  }
  const btn = event.target;
  loadBack();
  btn.remove();
  categoriesBooksTitle.innerHTML =
    'Best Sellers <span class="categories-books-title-accent">Books';
}

function createCategories(arr = []) {
  return arr
    .map(({ list_name, books }) => {
      return `
      <div class="categories-books-genre-title"> ${list_name}
        <ul class="categories-books-genre-all-books">
        ${createCard(books)}
        </ul>
        <button class="categories-books-btn" data-category='${list_name}'>see more</button>
      </div>
      `;
    })
    .join('');
}

function createCard(books = []) {
  return books
    .map(({ _id, list_name, author, book_image, title }) => {
      return `
      <li class="categories-books-genre-book" data-id="${_id}" data-genre="${list_name}">
        <div class="categories-books-genre-book-img-thumb">
          <img class="categories-books-genre-book-img"
            src="${book_image}" alt="Title - '${title}'">
          <div class="categories-books-genre-book-hover">quick view </div>
        </div>
        <h2 class="categories-books-genre-book-title">${title}</h2>
        <h3 class="categories-books-genre-book-author">${author}</h3>
      </li>
      `;
    })
    .join('');
}

function addCategoriesMarkup(markup) {
  categoriesBook.insertAdjacentHTML('beforeend', markup);
}

async function onSeeMore(event) {
  if (!event.target.classList.contains('categories-books-btn')) {
    return;
  }
  const parentEl = event.target.previousElementSibling;
  const seeMoreGenre = parentEl.firstElementChild.dataset.genre;
  const genreByWord = seeMoreGenre.split(' ');
  const lastWord = genreByWord.splice(-1, 1);
  categoriesBooksTitle.innerHTML = `${genreByWord.join(
    ' '
  )} <span class="categories-books-title-accent">${lastWord.toString()}</span>`;
  categoriesBooksTitle.insertAdjacentHTML(
    'afterend',
    '<button class="categories-books-back-btn " data-btn = "goBackBtn" >back to Best Sellers</button>'
  );
  try {
    const booksByGenre = await getBooksByCategory(seeMoreGenre);

    const allBooksByGenre = createCardByGenre(booksByGenre.data);

    addCardByGenre(allBooksByGenre);
  } catch (err) {
    Notiflix.Report.failure('OOPS! We have some problems🙊', err, 'Try again');
  }
}

function createCardByGenre(books = []) {
  return books
    .map(({ _id, list_name, author, book_image, title }) => {
      return `
      <div class="categories-books-genre-all-books">
        <div class="categories-books-genre-books" data-id="${_id}" data-genre="${list_name}">
          <div class="categories-books-genre-book-img-thumb">
            <img class="categories-books-genre-book-img"
              src="${book_image}" alt="Title - '${title}'">
              <div class="categories-books-genre-book-hover">quick view </div>
          </div>
          <h2 class="categories-books-genre-book-title">${title}</h2>
          <h3 class="categories-books-genre-book-author">${author}</h3>
        </div>
      </div> 
      `;
    })
    .join('');
}

function addCardByGenre(markup) {
  categoriesBook.innerHTML = markup;
}

async function onSeeMoreAboutBookBest(event) {
  if (!event.target.closest('.categories-books-genre-book')) {
    return;
  }
  const parentEl = event.target.closest('.categories-books-genre-book');
  const elemId = parentEl.dataset.id;
  await createModal(elemId);
}

async function onSeeMoreAboutBookGenre(event) {
  if (!event.target.closest('.categories-books-genre-books')) {
    return;
  }
  const parentEl2 = event.target.closest('.categories-books-genre-books');
  const elemId2 = parentEl2.dataset.id;
  await createModal(elemId2);
}

export { onSeeMore, createCardByGenre, addCardByGenre };
