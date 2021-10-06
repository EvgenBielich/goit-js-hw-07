const ingredients = [
   'Картошка',
   'Грибы',
   'Чеснок',
   'Помидоры',
   'Зелень',
   'Приправы',
];
 
const navEl = document.querySelector('#ingredients');

const createNavItem = ingredients.map(ingredient => {
   const navItemEl = document.createElement('li');
   navItemEl.textContent = ingredient;

   return navItemEl;
});

navEl.append(...createNavItem);