import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'
console.log('1212');
const items = document.querySelectorAll('.banner_content--item')
const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')
const dots = document.querySelectorAll('.slick-button');

// Modal Menu
const modalMenu = document.querySelector('.modalMenu')
const menuButton = document.getElementById('borderButtonMenu')
const modalcontainer = document.querySelector('.modal__container')
const closeButtonModal = document.getElementById('close__button_modal')
const dropdownmodals = document.querySelectorAll('.dropdown__modal')

// Modal favourite
const modalfavourite = document.querySelector('.modalfavourite')
const modalfavouritecontainer = document.querySelector('.modalfavourite__container')
const buttonFavourite = document.getElementById('buttonFavourite')
const closeButtonModalFavourite = document.getElementById('close__button_modal__favourite')


let currentIndex = 0;

function showSlide(index) {
    items.forEach((item, i) => {
        item.classList.toggle('active', i === index);
    });
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    })
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % items.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showSlide(currentIndex);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        showSlide(currentIndex);
    });
});


// swiper
const swiper = new Swiper('.carousel__container__fix', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    // slidesPerView: 4,
    spaceBetween: 30,
    speed: 500,

    // Navigation arrows
    navigation: {
        nextEl: '.nextArrow',
        prevEl: '.prevArrow',
    },
    breakpoints: {
        1024: {
            slidesPerView: 4,
        },
        768: {
            slidesPerView: 2,
        },
        375: {
            slidesPerView: 1,
        }
    }

});

var swiper2 = new Swiper('.blogs__swiper', {

    // các thiết lập khác
    loop: true,
    // slidesPerView: 3,

    speed: 700,

    navigation: {
        nextEl: '.nextArrow',
        prevEl: '.prevArrow',
    },
    breakpoints: {
        1024: {
            spaceBetween: 50,
            slidesPerView: 3,
        },
        768: {
            spaceBetween: 10,
            slidesPerView: 2,
        },
        376: {
            slidesPerView: 1,
        }
    }
});

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


function hideModalFavourite() {
    modalfavourite.classList.remove('show');
    modalfavouritecontainer.classList.remove('show');
}

function showModalFavourite() {
    modalfavourite.classList.add('show');
    modalfavouritecontainer.classList.add('show');
}
buttonFavourite.addEventListener('click', showModalFavourite)
closeButtonModalFavourite.addEventListener('click', hideModalFavourite)

modalfavourite.addEventListener('click', function (event) {
    if (event.target === modalfavourite) {
        hideModalFavourite()
    }
})




