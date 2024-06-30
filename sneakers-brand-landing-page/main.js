const menu = document.querySelector('.close-menu');
const closeBtn = document.querySelector('.close');
const nav = document.querySelector('nav');

menu.addEventListener('click', () => {
  nav.classList.add('open-nav');
});

closeBtn.addEventListener('click', () => {
    nav.classList.remove('open-nav');
  });
