import productCardTpl from '../templates/product-card.hbs';
import refs from './refs';

export const onToggleChange = event => {
  if (event.currentTarget.checked) {
    refs.bodyEl.classList.add('dark-theme');
    refs.bodyEl.classList.remove('light-theme');

    localStorage.setItem('Theme', JSON.stringify({ DARK: 'dark-theme' }));
  }

  if (!event.currentTarget.checked) {
    refs.bodyEl.classList.add('light-theme');
    refs.bodyEl.classList.remove('dark-theme');

    localStorage.removeItem('Theme');
  }
};

export const createProductCardMarkup = menu => {
  return menu.map(productCardTpl).join('');
};
