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

  $("#contact-form").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {} else {
      event.preventDefault();
      formSuccess();
    }
  });

  function submitForm() {
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();

    $.ajax({
      type: "POST",
      url: "php/form-process.php",
      data: "name=" + name + "&email=" + email + "&message=" + message,
      success: function (text) {
        if (text == "success") {
          formSuccess();
        }
      }
    });
  }

  function formSuccess() {
    $("#form-feedback").css({
      opacity: 1,
      marginRight: "20px"
    });
  }

});