$(document).ready(function () {
  // filter

  // all
  $('.filter__all').click(function () {
    $('.grid__item').show();
    $('.filter__btn').removeClass('active');
    $('.filter__all').addClass('active');
  });
  // web
  $('.filter__web').click(function () {
    $('.grid__item').hide();
    $('.product__web').show();
    $('.filter__btn').removeClass('active');
    $('.filter__web').addClass('active');
  });
  // app
  $('.filter__app').click(function () {
    $('.grid__item').hide();
    $('.product__app').show();
    $('.filter__btn').removeClass('active');
    $('.filter__app').addClass('active');
  });
  // desing
  $('.filter__desing').click(function () {
    $('.grid__item').hide();
    $('.product__desing').show();
    $('.filter__btn').removeClass('active');
    $('.filter__desing').addClass('active');
  });
  // marketing
  $('.filter__marketing').click(function () {
    $('.grid__item').hide();
    $('.product__marketing').show();
    $('.filter__btn').removeClass('active');
    $('.filter__marketing').addClass('active');
  });
});
