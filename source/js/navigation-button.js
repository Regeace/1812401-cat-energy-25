let openNavButton = document.querySelector('.main-navigation__toggle');
let changeNavButtonImage = document.querySelector('.main-navigation__toggle-image');
let mainNavigationShow = document.querySelector('.main-navigation__list');

openNavButton.onclick = function() {
  openNavButton.classList.toggle('main-navigation__toggle--open');
  changeNavButtonImage.classList.toggle('main-navigation__toggle-image--open');
  mainNavigationShow.classList.toggle('main-navigation__list--closed');
}
