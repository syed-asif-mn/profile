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
    autoplaySpeed: 500
  });

  $(document).ready(function () {
    $('html, body').animate({
      scrollTop: $('#about').offset().top - 49
    }, 5000, 'linear');
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


  $("body").mousemove(function( event ) {

    windowWidth = $(window).width();
    windowHeight = $(window).height();
    
    mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
    mouseYpercentage = Math.round(event.pageY / windowHeight * 100);
    
    var w = $(this).width(),
        pct = 360*(+event.pageX)/w,
        bg = 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, #3498db, #9b59b6)';
        $("body").css("background-image", bg);
  });

})(jQuery);
