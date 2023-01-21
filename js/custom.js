(function ($) {

  "use strict";

  // COLOR MODE
  $('.color-mode').click(function () {
    $('.color-mode-icon').toggleClass('active')
    $('body').toggleClass('dark-mode')
  })

  // HEADER
  $(".navbar").headroom();

  // PROJECT CAROUSEL
  $('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    center: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplaySpeed: 300
  });

  $(document).ready(function () {
    $('html, body').animate({
      scrollTop: $('#about').offset().top - 49
    }, 7000, "linear"
    )
  });

  // SMOOTHSCROLL
  $(function () {
    $('.nav-link, .custom-btn-link').on('click', function (event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 49
      }, 1500);
      event.preventDefault();
    });
  });

  $("html, body").on("mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function () {
    $("html").stop();
  });

  // TOOLTIP
  $('.social-links a').tooltip();

})(jQuery);