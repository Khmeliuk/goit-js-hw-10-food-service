import './sass/main.scss';
import menu from './partials/menu.json';
import dish from './templates/dish.hbs';

const bodyRef = document.body;
const menuListRef = document.querySelector('.js-menu');
const sweetchControleRef = document.querySelector('.theme-switch__toggle');

const menuItem = createMenu(menu);
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
let checkedValue = JSON.parse(localStorage.getItem('checked'));
sweetchControleRef.checked = checkedValue;
bodyRef.classList.add(changeTheme(checkedValue));

function changeTheme(checkedValue) {
  if (checkedValue){
    bodyRef.classList.add(Theme.DARK);
    bodyRef.classList.remove(Theme.LIGHT);
  }
  else{bodyRef.classList.add(Theme.LIGHT);
    bodyRef.classList.remove(Theme.DARK);}
}

function onChangeThem(e) {
    localStorage.setItem('checked', e.target.checked);
  checkedValue = JSON.parse(localStorage.getItem('checked'));
  changeTheme(checkedValue);
 }

function createMenu(menu) {
  return menu.map(dish).join('');
}

menuListRef.insertAdjacentHTML('afterbegin', menuItem);
sweetchControleRef.addEventListener('click', onChangeThem);


