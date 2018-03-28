$(document).ready(function () {
  $(".navbar a, footer a[href='#home']").on('click', function (event) {

    event.preventDefault();

    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top - 100
    }, 600, function () {
      window.location.hash = hash;
    });
  });

  $window = $(window);

  $('[data-type="background"]').each(function () {
    var $scroll = $(this);

    $(window).scroll(function () {
      var yPos = -(($window.scrollTop() - $scroll.offset().top) / $scroll.data('speed'));
      var coords = '50% calc(50% + ' + yPos + 'px)';
      $scroll.css({
        backgroundPosition: coords
      });
    });
  });


});