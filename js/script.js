

const headerSwiper = new Swiper('.start__slider',{
    wrapperClass: "start__wrapper",
    slideClass: "start__slide",
    slideActiveClass: "start__slide_active",
    slidesPerView: 'auto',
    spaceBetween: 35,
    loop: true,
    grabCursor: true,
    navigation: {
        nextEl: '.start__next',
        prevEl: '.start__prev   ',
    },
})  

const header = document.querySelector('header');
const startBody = document.querySelector('.start__body');
const startSlider = document.querySelector('.start__slider');
const burger = document.querySelector('.header__burger');
const list = document.querySelector('.header__list');

startBody.style.paddingTop =`${header.clientHeight}px`

window.addEventListener('load',function () {  
    if (window.innerWidth > 992) {
        var scene = document.getElementById('scene');
        var parallaxInstance = new Parallax(scene);
    } else {
        startSlider.classList.add('container')
    }
})

burger.addEventListener('click',function () {  
    burger.classList.toggle('active')
    list.classList.toggle('active')
})