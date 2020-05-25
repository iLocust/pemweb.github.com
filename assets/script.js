$(function () {

  $(window).scroll(function() {
    if ( $(window).scrollTop() > 80) {
      $('#navbar').addClass('navbar-scrolled');  
    } else {
      $('#navbar').removeClass('navbar-scrolled');  
    }
  })

  $('.page-scroll').on('click', function (e) {
    let dec = $(this).attr('href');
    let getEl = $(dec);
    $('html,body').animate({
      scrollTop: getEl.offset().top - 150
    }, 1000);
    e.preventDefault();
  });

})
