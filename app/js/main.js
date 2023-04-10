window.onscroll = function showHeader() {
  let header = document.querySelector('.header'),
    screen = document.querySelector('.screen');
  if (window.pageYOffset > 300) {
    header.classList.add('header__fixed');
    screen.classList.add('screen-active');
  } else {
    header.classList.remove('header__fixed');
    screen.classList.remove('screen-active');
  }
}


const modalTrigger = document.querySelectorAll('[data-modal]'),
  modal = document.querySelector('.modal'),
  modalCloseBtn = document.querySelector('[data-close]');

modalTrigger.forEach(btn => {
  btn.addEventListener('click', () => {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
  });
});

function clossModel() {
  modal.classList.add('hide');
  modal.classList.remove('show');
  document.body.style.overflow = '';
}

modalCloseBtn.addEventListener('click', clossModel);

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    clossModel();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.code === "Escape" && modal.classList.contains('show')) {
    clossModel();
  }
});


$(function () {

  $('.menu__btn').on('click', (function () {
    if (!$('.menu').hasClass('active')) {
      $('.menu').addClass('active');
      $('.menu__btn').addClass('active');

    } else {
      $('.menu').removeClass('active');
      $('.menu__btn').removeClass('active');

    }
  }));


    


  $('.questions__item').on('click', (function () {

    $(this).find('.questions__inner').addClass('active');
    $(this).siblings().find('.questions__inner').removeClass('active');


    $(this).find('.questions__item-bottom').show(500);
    $(this).siblings().find('.questions__item-bottom').hide(500);

  }));

  $('.slider__wrapper').slick({
    prevArrow: document.querySelector('.slick-prev'),
    nextArrow: document.querySelector('.slick-next'),
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,

    responsive: [{
      breakpoint: 601,
      settings: {
        dots: true,
        dotsClass: 'slick-dots',
        slidesToShow: 1,
        arrows: false,
      }
    }]
  });


});