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
changeTheme(checkedValue);

function changeTheme(checkedValue) {
  if (checkedValue) 
     addRemoveClass(Theme.DARK,Theme.LIGHT)
  
  else
     addRemoveClass(Theme.LIGHT,Theme.DARK);
}
function addRemoveClass(addClass, removeClass){
   bodyRef.classList.add(addClass);
    bodyRef.classList.remove(removeClass);
}
function onChangeThem(e) {
    localStorage.setItem('checked', e.target.checked);
  checkedValue = JSON.parse(localStorage.getItem('checked'));
  changeTheme(e.target.checked);
 }

function createMenu(menu) {
  return menu.map(dish).join('');
}

menuListRef.insertAdjacentHTML('afterbegin', menuItem);
sweetchControleRef.addEventListener('click', onChangeThem);