$(window).scroll(function(){
  if ($(this).scrollTop() > 50) {
    $('.homepage_navbar').removeClass("transparent");
  } else {
    $('.homepage_navbar').addClass("transparent");
  }
});
