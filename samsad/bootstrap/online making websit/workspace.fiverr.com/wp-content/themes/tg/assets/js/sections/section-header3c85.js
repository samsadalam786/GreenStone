/**
 *
 * Section: Header
 *
 */

jQuery(document).ready(function ($) {

  // Key variables and params
  const $header = $('.section-header');
  const $toggler = $('.section-header-toggler');
  const $menu = $('.section-header-menu__wrapper');
  const $params = {
    scrollTop: null,
    windowWidth: null,
    menuOpened: false,
    isTopOfPage: false,
    isPopupMenu: false,
    screens: {
      mobile: 320,
      tabletPortrait: 600,
      tabletLandscape: 900,
      desktop: 1160
    },
    breakpoint: function() {
      return this.screens.desktop;
    }
  }

  // Init
  initMenuToggler();
  initDropdownEvents( $params.breakpoint() );

  $(window).on('resize scroll load', function() {
    initStatesChange();
    initHeaderEvents();
  });

  // Init functions
  function initHeaderEvents() {
    if (!$params.isTopOfPage) {
      $header.addClass('scrolled');
    } else {
      $header.removeClass('scrolled');
    }

    if ($params.menuOpened && $params.windowWidth < $params.breakpoint()) {
      $('html').addClass('html-fixed');
    } else if (!$params.menuOpened) {
      $('html').removeClass('html-fixed');
    }
  }

  function initMenuToggler() {

    $toggler.on('click', (e) => {
      e.preventDefault();

      $params.menuOpened = !$params.menuOpened;

      if ($params.menuOpened) {
        $toggler.addClass('active');
        $menu.addClass('opened');
        $header.addClass('header-opened');
      } else {
        $toggler.removeClass('active');
        $menu.removeClass('opened');
        $header.removeClass('header-opened');
      }

      initHeaderEvents();
    });

  }

  function initStatesChange() {
    $params.scrollTop = $(window).scrollTop();; // Window scroll top
    $params.windowWidth = $(window).width(); // Window width
    $params.isTopOfPage = !$params.scrollTop; // Is top of the page
    $params.isPopupMenu = $params.windowWidth >= $params.breakpoint(); // Is popup menu

    // Close menu if resizes to tablet
    if ($params.isPopupMenu && $params.menuOpened) {
      $params.menuOpened = false;

      // Remove all active classes
      $toggler.removeClass('active');
      $menu.removeClass('opened');
      $header.removeClass('header-opened');
    }
  }

  function initDropdownEvents(breakpoint) {

    $(window).on('resize', function() {
      if ( $(window).width() >= breakpoint ) {
        closeAllDropdowns();
      }
    })

    $('.dropdown-menu-item > a').on('click', function(e) {
      let parentLi = $(this).parent();

      if ($(window).width() < breakpoint) {
        e.preventDefault();

        // If dropdown of current item is opened
        if ( parentLi.hasClass('dropdown-opened') ) {
          parentLi.removeClass('dropdown-opened');
        }
        // If dropdown of current item is closed
        else {
          $('.dropdown-opened').removeClass('dropdown-opened'); // Close previous dropdown
          parentLi.addClass('dropdown-opened'); // Open dropdown of current item
        }
      }
    });


    // Helper functions
    function closeAllDropdowns() {
      $('.dropdown-opened').removeClass('dropdown-opened'); // Close all dropdowns
    }

  }

});
