

import { getCategoryList, getBooksByCategory } from './BOOKS_API.js';
import {createCardByGenre, addCardByGenre } from './categories_book.js';


const elem = {
  allCategoriesContainer: document.querySelector('.all-categories-container'),
  allCategoriesList: document.querySelector('.categories-list'),
  allCategoriesListItem: document.querySelector('.categories-list-item'),
  categoriesBook: document.querySelector('.categories-books-all'),
  categoriesBooksTitle: document.querySelector('.categories-books-title'),
};

// Функція створення розмітки

function createMarkupCategoryList(arr) {
  return arr
    .map(
      ({ list_name }) =>
        `<li class="categories-list-item js-categories-list-item" value="${list_name}" data-category='${list_name}'>${list_name}</li>`
    )
    .join('');
}

// Рендеринг 

getCategoryList()
  .then(object => {
    elem.allCategoriesList.insertAdjacentHTML(
      'beforeend',
      createMarkupCategoryList(object.data)
    );
  })
  .catch(error => console.log(error));

// Функція кліку по категорії

// СПРОБА 1


async function onCategoryClick(evt) {
  evt.preventDefault();
  const target = evt.target;
  const control = target.tagName == 'LI';
 if (!control) return;
  const booksByGenre = await getBooksByCategory(target.attributes.value.nodeValue);
  const allBooksByGenre = createCardByGenre(booksByGenre.data);
  addCardByGenre(allBooksByGenre);
  const valueResultTarget = target.attributes.value.nodeValue;
  const genreByWord = valueResultTarget.split(' ');
  const lastWord = genreByWord.splice(-1, 1);
  elem.categoriesBooksTitle.innerHTML = `${genreByWord.join(
    ' '
  )} <span class="categories-books-title-accent">${lastWord.toString()}</span>`;
}
elem.allCategoriesContainer.addEventListener('click', onCategoryClick);

// function onCategoryClick(evt) {
//   if (!evt.target.classList.contains('.js-categories-list-item')) {
//     return;
//   }
//   const arrClass = [...elem.allCategoriesContainer.children];
//   arrClass.map(item => item.classList.remove('category-active'));
//   evt.target.classList.add('category-active');

//   const categoryName = evt.target.dataset.list_name;

//   if (evt.target.classList.contains('js-all-categories')) {
//     return;
//   } else {
//     getBooksByCategory(categoryName);
//   }
// }

// СПРОБА 2

// elem.allCategoriesContainer.addEventListener('click', onCategoryClick);

// async function onCategoryClick(evt) {
//   if (!evt.target.classList.contains('js-categories-list-item')) {
//     return;
//   }
//   const categoryLink = evt.target.dataset.category;
//   elem.categoriesBook.innerHTML = categoryLink;
//   try {
//     const booksByListName = await getBooksByCategory(categoryLink);

//     const allBooksByGenre = createCardByGenre(booksByListName.data);

//     addCardByGenre(allBooksByGenre);
//   } catch (err) {
//     console.log(err);
//   }
// }

// СПРОБА 100500

elem.allCategoriesList.addEventListener('click', onCategoryClick);
elem.allCategoriesContainer.addEventListener('click', clickAccent);


// Акцент по кліку + preventDefault

function clickAccent(evt) {
  const firstListItem = document.querySelector(
    '.js-categories-list li:first-of-type'
  );
  const isFirstElement = firstListItem === evt.currentTarget;
  if (isFirstElement) {
    !evt.preventDefault();
  }

  const arrClass = [...elem.allCategoriesList.children];

  arrClass.map(item => item.classList.remove('category-active'));

  evt.target.classList.add('category-active');
}
// Рендер по кліку
async function onCategoryClick(evt) {
  clickAccent(evt);

  const isFirstElement = evt.target === elem.allCategoriesList.firstElementChild;
 
if (!evt.target.classList.contains('js-categories-list-item')) {
  return;
}

const categoryLink = evt.target.dataset.category;
const genreByWord = categoryLink.split(' ');
const lastWord = genreByWord.splice(-1, 1);

// elem.categoriesBooksTitle.innerHTML = `${genreByWord.join(
//   ' '
// )} <span class="categories-books-title-accent">${lastWord.toString()}</span>`;

elem.categoriesBook.innerHTML = `${genreByWord.join(
  ' '
)} <span class="categories-books-title-accent">${lastWord.toString()}</span>`;
elem.categoriesBooksTitle.insertAdjacentHTML('afterend');

try {
  const booksByListName = await getBooksByCategory(target.attributes.value.nodeValue);
  const allBooksByGenre = createCardByGenre(booksByListName.data);
  addCardByGenre(allBooksByGenre);
} catch (err) {
  console.log(err);
}
}

