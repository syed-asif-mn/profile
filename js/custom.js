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
    autoplaySpeed: 700
  });

  // $(document).ready(function () {
  //     $(window).on('load', function() {
  //     $('html, body').animate({
  //       scrollTop: $('#about').offset().top - 49
  //     }, 8000, "linear"
  //     )
  //   });
  // });

  $(document).ready(function() {
    $('body').toggleClass('dark-mode')
    let colors = ["violet","indigo","violet","white","gold"];
    let i = 0;

    $(document).on("mousemove", function(e) {
      i++;
      let x = e.pageX;
      let y = e.pageY;

      let $span = $("<span></span>").addClass("follower");
      $span.css({
        "top": y + "px",
        "left": x + "px",
        "background-color": colors[i - 1]
      });
      $("body").append($span);

      if(i == colors.length){
        i = 0;
      }
      setTimeout(() => {
        $span.remove();
      }, 1000);
    });
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
