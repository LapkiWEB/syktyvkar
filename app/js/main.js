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

});
