
//// Viskas kas liecia navigacija /////

const burger = document.querySelector('#burger');
const navMenu = document.querySelector('.navMenu');

burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    navMenu.classList.toggle('active')
});

document.querySelectorAll('linkai').forEach(e = e
    .addEventListener('click', () => {
        burger.classList.remove('active')
        navMenu.classList.remove('active')
    }));
///// Viskas kas liecia navigacija /////