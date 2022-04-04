/*const items = document.querySelectorAll('.item');

items.forEach(function(item) {

  item.addEventListener('click', function(e) {
    /!*console.log(e.target.querySelector('p'));*!/
    //target  is the element that triggered the event (e.g., the user clicked on)
    // currenttarget is the element that the event listener is attached to.
    let pElement = e.currentTarget.querySelector('p');
     console.log(pElement);
     pElement.classList.toggle('hidden');

  });

});*/

const items = document.querySelectorAll('.item');

items.forEach(function(item) {

  item.addEventListener('click', function(e) {
    let pElement = e.currentTarget.querySelector('p');
    let icon = e.currentTarget.querySelector('.icon');



    if (pElement.classList.contains('hidden')) {
      pElement.classList.remove('hidden');
      icon.classList.add('fa-chevron-up');
      icon.classList.remove('fa-chevron-down');
    } else {
      pElement.classList.add('hidden');
      icon.classList.add('fa-chevron-down');
      icon.classList.remove('fa-chevron-up');
    }

  });

});

const feature = document.querySelector('#features');
const dropdownMenu = document.querySelector('.dropdown-menu-2')
feature.addEventListener('click', function(e) {
  dropdownMenu.classList.toggle('show-dropdown');

});

const product = document.querySelector('#product');
const dropDownMenu3 = document.querySelector('.dropdown-menu-3');
product.addEventListener('click', function(e) {
  dropDownMenu3.classList.toggle('show-dropdown');
});


const shop = document.querySelector('#shop');
const dropDownMenu4 = document.querySelector('.dropdown-menu-4');
shop.addEventListener('click', function(e) {
  dropDownMenu4.classList.toggle('show-dropdown');

});
