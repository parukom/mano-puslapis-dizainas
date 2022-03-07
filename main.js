
//// Viskas kas liecia navigacija /////

const burger = document.querySelector('#burger');
const navMenu = document.querySelector('.navMenu');
const barToX = document.querySelectorAll('.bar');

burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    navMenu.classList.toggle('active')
    barToX.classList.toggle('active')
})

document.querySelectorAll('linkai').forEach(n = n
    .addEventListener('click', () => {
        burger.classList.remove('active')
        navMenu.classList.remove('active')
    }))
///// Viskas kas liecia navigacija /////