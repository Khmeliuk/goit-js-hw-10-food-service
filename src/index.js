import './sass/main.scss';
// import smenu from './partials/menu.json';
// import sdish from'./templates/dish.hbs';
const bodyRef = document.body;
const sweetchControleRef = document.querySelector('.theme-switch__toggle');
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
  console.log('checked',checkedValue);
   
  changeTheme(checkedValue);
    
 }



sweetchControleRef.addEventListener('click', onChangeThem);


