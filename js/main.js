const cartButton = document.querySelector('#cart-button');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');

cartButton.addEventListener('click', ToggleModal)
close.addEventListener('click', ToggleModal)

function ToggleModal () {
    modal.classList.toggle('is-open')
}


new WOW().init();