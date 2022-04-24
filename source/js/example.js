let catBefore = document.querySelector('.example__image--was');
let catInComparison = document.querySelector('.example__image--comparison');
let catBecome = document.querySelector('.example__image--become');

document.querySelector('.example__button--was').onclick = function() {
  catBefore.classList.remove('example__image--hidden');
  catBefore.classList.remove('example__image--display-tablet');
  document.querySelector('.example__toolbar').classList.add('example__toolbar--move-left');
  document.querySelector('.example__toolbar').classList.remove('example__toolbar--move-right');
  catInComparison.classList.add('example__image--hidden');
  catInComparison.classList.remove('example__image--special');
  catBecome.classList.add('example__image--hidden');
}

document.querySelector('.example__toolbar').onclick = function() {
  catInComparison.classList.remove('example__image--hidden');
  catInComparison.classList.add('example__image--special');
  document.querySelector('.example__toolbar').classList.remove('example__toolbar--move-left');
  document.querySelector('.example__toolbar').classList.remove('example__toolbar--move-right');
  catBefore.classList.add('example__image--hidden');
  catBecome.classList.add('example__image--hidden');
}

document.querySelector('.example__button--become').onclick = function() {
  catBecome.classList.remove('example__image--hidden');
  document.querySelector('.example__toolbar').classList.add('example__toolbar--move-right');
  document.querySelector('.example__toolbar').classList.remove('example__toolbar--move-left');
  catBefore.classList.add('example__image--hidden');
  catInComparison.classList.add('example__image--hidden');
  catInComparison.classList.remove('example__image--special');
}
