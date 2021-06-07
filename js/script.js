gsap.registerPlugin(ScrollTrigger);


    const tl = gsap.timeline()
    gsap.from('.plane__img', { margin: '0 0 0 auto', scrollTrigger: {
        trigger: '.plane',
        start: 'top center',
        end: 'center center' ,
        scrub: true,
    }})
    

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

const firstDaySwiper = new Swiper('.come__slider',{
    wrapperClass: "come__wrapper",
    slideClass: "come__slide",
    slideActiveClass: "come__slide_active",
    slidesPerView: '2',
    spaceBetween: 32,
    // loop: true,
    grabCursor: true,
    navigation: {
        nextEl: '.btn_next',
        prevEl: '.btn_prev',
    },
    autoHeight: true
})  

const sourceSlider = new Swiper('.source__slider',{
    wrapperClass: "source__wrapper",
    slideClass: "source__slide",
    slideActiveClass: "source__slide_active",
    slidesPerView: 'auto',
    spaceBetween: 32,
    // loop: true,
    grabCursor: true,
    navigation: {
        nextEl: '.btn_next',
        prevEl: '.btn_prev',
    },
    autoHeight: true,
    
})  

const header = document.querySelector('header');
const startBody = document.querySelector('.start__body');
const startSlider = document.querySelector('.start__slider');
const burger = document.querySelector('.header__burger');
const list = document.querySelector('.header__list');

startBody.style.paddingTop =`${header.clientHeight}px`

window.addEventListener('load',function () {  
    if (window.innerWidth > 992) {
        // var scene = document.getElementById('scene');
        // var parallaxInstance = new Parallax(scene);
    } else {
        startSlider.classList.add('container')
    }
})
window.addEventListener('scroll',function () {  
    if (window.pageYOffset > 50) {
        header.classList.add('active')
    } else {
        header.classList.remove('active')
    }
})

burger.addEventListener('click',function () {  
    burger.classList.toggle('active')
    list.classList.toggle('active')
})