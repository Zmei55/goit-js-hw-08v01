import menu from './js/menu.json';
import refs from './js/refs';
import { onToggleChange, createProductCardMarkup } from './js/functions';

const productMarkup = createProductCardMarkup(menu);

refs.switchToggleEl.addEventListener('change', onToggleChange);
refs.menuListEl.insertAdjacentHTML('beforeend', productMarkup);

if (localStorage.getItem('Theme') !== null) {
  refs.bodyEl.classList.add('dark-theme');
  refs.switchToggleEl.checked = true;
} else {
  refs.bodyEl.classList.add('light-theme');
}
