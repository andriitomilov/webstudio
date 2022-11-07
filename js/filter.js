$(document).ready(function () {
  // filter

  // all
  $(".filter__all").click(function () {
    $(".grid__item").show();
  });
  // web
  $(".filter__web").click(function () {
    $(".grid__item").hide();
    $(".product__web").show();
  });
  // app
  $(".filter__app").click(function () {
    $(".grid__item").hide();
    $(".product__app").show();
  });
  // desing
  $(".filter__desing").click(function () {
    $(".grid__item").hide();
    $(".product__desing").show();
  });
  // marketing
  $('.filter__marketing').click(function () {
    $('.grid__item').hide();
    $('.product__marketing').show();
  });
});
