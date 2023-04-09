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

  // $('.questions__item-top').on('click', (function () {
  //   if (!$('.questions__item-bottom').hasClass('active')) {
  //     $('.questions__item-bottom').addClass('active');
  //     $('.questions__item-top').addClass('active');
  //     $('.questions__inner').addClass('active');
  //   } else {
  //     $('.questions__item-bottom').removeClass('active');
  //     $('.questions__item-top').removeClass('active');
  //     $('.questions__inner').removeClass('active');
  //   }
  // }));

   $('.questions__item').on('click', (function () {

     $(this).find('.questions__inner').addClass('active');
     $(this).siblings().find('.questions__inner').removeClass('active');


     $(this).find('.questions__item-bottom').show(500);
     $(this).siblings().find('.questions__item-bottom').hide(500);

   }));


});