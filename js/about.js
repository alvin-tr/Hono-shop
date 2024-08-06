// Modal Menu
const modalMenu = document.querySelector('.modalMenu')
const menuButton = document.getElementById('borderButtonMenu')
const modalcontainer = document.querySelector('.modal__container')
const closeButtonModal = document.getElementById('close__button_modal')
const dropdownmodals = document.querySelectorAll('.dropdown__modal')
const dropdownmodalsubnav = document.querySelectorAll('dropdown__modal--subnav')

import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

const arrownext = document.querySelector('.arrow__next')
const arrowpre = document.querySelector('.arrow__pre')


// hàm show modal
function showModalMenu() {
    modalMenu.classList.add('show');
    modalcontainer.classList.add('show');
}

// hàm ẩn modal
function hideModalMenu() {
    modalMenu.classList.remove('show');
    closeButtonModal.classList.remove('show');
}

menuButton.addEventListener('click', showModalMenu)
closeButtonModal.addEventListener('click', hideModalMenu)

modalMenu.addEventListener('click', function (event) {
    if (event.target === modalMenu) {
        hideModalMenu();
    }
});

// Hàm để chuyển đổi chiều cao của phần tử .dropdown__modal--subnav
function toggleModal() {
    dropdownmodals.forEach(drop => {
        drop.addEventListener('click', function (event) {
            const subnav = event.currentTarget.nextElementSibling;

            // Kiểm tra xem subnav có đang mở không
            if (subnav.classList.contains('open')) {
                // Nếu đang mở, đóng nó lại
                subnav.classList.remove('open');
            } else {
                // Nếu đang đóng, mở nó ra
                subnav.classList.add('open');
            }
        });
    });
}

toggleModal();


// swiper
const swiper = new Swiper('.swiper__about', {

    loop: true,
    spaceBetween: 30,
    speed: 500,
    // autoplay: {
    //     delay: 3000,
    // },

    navigation: {
        nextEl: '.arrow__next',
        prevEl: '.arrow__pre',
    },
    breakpoints: {
        1024: {
            slidesPerView: 4,
        },
        768: {
            slidesPerView: 3,
        }
    }
});


// brand swiper
const swiper1 = new Swiper('.about__brand__swiper--container', {

    loop: true,

    speed: 500,
    autoplay: {
        delay: 2000,
    },

    navigation: {
        nextEl: '.brand__arrow__next',
        prevEl: '.brand__arrow__pre',
    },
    breakpoints: {

        1024: {
            slidesPerView: 7,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
        375: {
            slidesPerView: 2,
            spaceBetween: 10,
        }
    }
});