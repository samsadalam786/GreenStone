/**
 *
 * Section: Main Footer
 *
 */

jQuery(document).ready(function ($) {

	// Init
	initMobileNavAccordion();

	// Init functions
	function initMobileNavAccordion() {

		// On title click
		$('.section-footer__title').on('click', function(e) {
			e.preventDefault();

			let $currentNav = $(this).parents('.section-footer__nav');
			let $currentList = $(this).siblings('.section-footer__list');
			let $currentListUl = $currentList.find('ul');

			$currentNav.toggleClass('list-opened');

			// If current list is opened
			if ($currentNav.hasClass('list-opened')) {
				let ulHeight = $currentListUl.outerHeight();
				$currentList.css({'max-height' : ulHeight + 'px'});
			} else {
				$currentList.css({'max-height' : '0px'});
			}

		});

		// On window resize
		$(window).on('resize', function() {
			let ww = $(window).width();

			if (ww <= 599) {

				// Watch and change the max height on resize if it's needed
				$('.section-footer__nav.list-opened').each(function() {
					let $currentList = $(this).find('.section-footer__list');
					let $currentListUl = $currentList.find('ul');
					let ulHeight = $currentListUl.outerHeight();
					$currentList.css({'max-height' : ulHeight + 'px'});
				});

			} else {

				// For desktop - Remove style attribute from all the lists .section-footer__list
				$('.section-footer__nav').each(function() {
					$(this).find('.section-footer__list').removeAttr('style');
				});

			}

		});
	}

});











