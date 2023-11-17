import saveTheChildren from '../public/save_the_children.png';
import projectHope from '../public/hope.png';
import internationalMedical from '../public/international_medical.png';
import razom from '../public/razom.png';
import actionAgainstHunger from '../public/action_against_hunger.png';
import sergiyPrytula from '../public/sergiy_prytula.png';
import medecinsSans from '../public/medical.png';
import worldVision from '../public/world_vision.png';
import united24 from '../public/united_24.png';

const toggleButton = document.querySelector('.expand-btn');
const list = document.querySelector('.list');
const fonds = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: saveTheChildren,
    id: '01'

  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: projectHope,
    id: '02'
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: internationalMedical,
    id: '03'
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: razom,
    id: '04'
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: actionAgainstHunger,
    id: '05'
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: sergiyPrytula,
    id: '06'
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: medecinsSans,
    id: '07'
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: worldVision,
    id: '08'
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: united24,
    id: '09'
  },
];

const checkExpandedButton = () => {
  if (toggleButton.classList.contains('expanded')) {
    return true;
  }
  return false;
}

const render = (array) => {
  list.innerHTML = '';
  array.forEach(elem => {
    list.innerHTML += `
      <div class="list-item">
        <span>${elem.id}</span>
        <a href="${elem.url}" class="list-item__image" target="_blank">
          <img class="number-icon icon" src="${elem.img}" alt="${elem.title}">
        </a>
      </div>
    `;
  })
}

toggleButton.addEventListener('click', () => {
  toggleButton.classList.toggle('expanded');
  checkExpandedButton() ? render(fonds.slice(-6)) : render(fonds.slice(0, -3))
})

render(fonds.slice(0, -3));