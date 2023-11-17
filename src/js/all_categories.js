import { getCategoryList, getBooksByCategory } from './BOOKS_API.js';
import { createCardByGenre, addCardByGenre } from './categories_book.js';
import { Notiflix } from 'notiflix';

const elem = {
  allCategoriesContainer: document.querySelector('.all-categories-container'),
  allCategoriesList: document.querySelector('.categories-list'),
  allCategoriesListItem: document.querySelector('.categories-list-item'),
  categoriesBook: document.querySelector('.categories-books-all'),
  categoriesBooksTitle: document.querySelector('.categories-books-title'),
  divForSeeMoreBtn: document.querySelector('.categories-books'),
  firstListItem: document.querySelector('.js-categories-list li:first-of-type'),
};

elem.allCategoriesContainer.addEventListener('click', onCategoryClick);
elem.allCategoriesContainer.addEventListener('click', clickAccent);
elem.divForSeeMoreBtn.addEventListener('click', onBtnMoreClick);
elem.divForSeeMoreBtn.addEventListener('click', goBackBtn);

// Функція створення розмітки

function createMarkupCategoryList(arr) {
  const sortedArr = arr.sort((a, b) => a.list_name.localeCompare(b.list_name));
  return sortedArr
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
  .catch(err)
  {
    Notiflix.Report.failure('WHOOPS!',
    'Something went wrong',
    'Ok')
};
  

// Акцент по кліку + preventDefault

function clickAccent(evt) {
  const isFirstElement = elem.firstListItem === evt.target;

  if (isFirstElement) {
    !evt.preventDefault();
  }

  const isClickOnLiEl = evt.target.tagName === 'LI';

  if (isClickOnLiEl) {
    const arrClass = [...elem.allCategoriesList.children];
    arrClass.forEach(item => item.classList.remove('category-active'));
    evt.target.classList.add('category-active');
  }
  return;
}

// Функція кліку по категорії + відмальовка книг з категорії

async function onCategoryClick(evt) {
  clickAccent(evt);

  const target = evt.target;
  const control = target.tagName === 'LI';
  if (!control) return;
  const booksByGenre = await getBooksByCategory(
    target.attributes.value.nodeValue
  );
  const allBooksByGenre = createCardByGenre(booksByGenre.data);

  addCardByGenre(allBooksByGenre);

  const valueResultTarget = target.attributes.value.nodeValue;
  const genreByWord = valueResultTarget.split(' ');
  const lastWord = genreByWord.splice(-1, 1);
  elem.categoriesBooksTitle.innerHTML = `${genreByWord.join(
    ' '
  )} <span class="categories-books-title-accent">${lastWord.toString()}</span>`;
}


// Акцент на категорії при кліку на SeeMore

function onBtnMoreClick(evt) {
  if (!evt.target.classList.contains('categories-books-btn')) {
    return;
  }
  const categoryName = evt.target.dataset.category;

  const arrClass = [...elem.allCategoriesList.children];
  arrClass.forEach(item => {
    const categ = item.dataset.category;
    item.classList.remove('category-active');
    if (categ === categoryName) {
      item.classList.add('category-active');
    }
  });
}

// Клік по "Back to Best Sellers" button

function goBackBtn (evt){
  if (!evt.target.classList.contains('categories-books-back-btn')) {
    return;
  }
  const backTostart = evt.target.dataset.btn;

  const arrClass = [...elem.allCategoriesList.children];
  arrClass.forEach(item => {
    item.classList.remove('category-active');
    if (backTostart) {
      elem.firstListItem.classList.add('category-active');
    }
  });
}
