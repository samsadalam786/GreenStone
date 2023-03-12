jQuery(document).ready(function($) {

  // Init
  initHashEvents();
  initPageContinue();

  // Init functions
  function initHashEvents() {
    $('a[href*="#"]:not([href="#"]):not([data-lity])').click(function(e) {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

        if (target.length) {
          e.preventDefault();

          $('html,body').animate({
             scrollTop: target.offset().top - $('.section-header').height()
          }, 800);

          return false;
        }
      }
    });
  }

  function initPageContinue() {
    if (!$('body').hasClass('page-id-11432')) { return false; }

    $('.section-header .menu-item.signin').remove();
    $('.section-header .menu-item.about').remove();
    $('.section-header .menu-item.pricing').remove();
    $('.section-header .menu-item.resources').remove();
    $('.section-header .menu-item.features').remove();
    $('.section-header-menu__joinBtn').text('Continue').attr('href','https://app.workspace.fiverr.com/welcome?sign_in_with=fiverr');

    $('body').addClass('continue-page-loaded');
  }

});


