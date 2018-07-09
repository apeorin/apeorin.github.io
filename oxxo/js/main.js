$(document).ready(function() {
  $('.header-menu__item').on('click', 'a', function(event) {
    event.preventDefault();

    let id = $(this).attr('href');
    let top = $(id).offset().top;

    $('body, html').animate({scrollTop: top}, 1500);
  });

  $('.backToTopBtn').click(function() {
    $('body, html').animate({scrollTop: 0}, 750);
  });
});


$(document).scroll(function() {
  if ($('body, html').scrollTop() > 20) {
    $('.backToTopBtn').css('display', 'block');
  } else {
    $('.backToTopBtn').css('display', 'none');
  }
});


$('.hamburger-menu__icon').click(function() {
  $('.hamburger-menu__list').toggleClass('hamburger-menu__list--active');
});

$('.accordion').click(function(e) {
  $(e.target).toggleClass('active');

  let panel = $(e.target).next();
  if ($(panel).css('display') === 'block') {
    $(panel).css('display', 'none');
  } else {
    $(panel).css('display', 'block');
  }
});
