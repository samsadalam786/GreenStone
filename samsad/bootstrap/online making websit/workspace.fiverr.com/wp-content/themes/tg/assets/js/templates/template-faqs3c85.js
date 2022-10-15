/**
 *
 * Template: FAQs
 *
 */

jQuery(document).ready(function ($) {

    // Init
    initFaqList();
    initFaqFilters();

    // Init functions
    function initFaqList() {
        let $list = $('.faqs-posts__list');
        let $items = $list.find('.faqs-posts__list-item');

        // Click event for each item in list
        $items.each(function () {

            // Define the toggler for each item
            let $itemToggler = $(this).find('.faqs-posts__list-itemHeader');

            // Setting up the event for each item's toggler
            $itemToggler.on('click', function () {
                let $currentItem = $(this).parent(); // Current item
                let $prevItem = $list.find('.opened'); // Prev opened item

                if (!$currentItem.hasClass('opened')) { // If item is different from opened - opening new item / closing prev item
                    $prevItem.removeClass('opened').promise().done(function () {
                        $prevItem.find('.faqs-posts__list-itemContent').slideUp(250);
                    });

                    $currentItem.addClass('opened').promise().done(function () {
                        $currentItem.find('.faqs-posts__list-itemContent').slideDown(250);
                    });
                } else { // If item is the same with opened - closing item
                    $currentItem.removeClass('opened').promise().done(function () {
                        $currentItem.find('.faqs-posts__list-itemContent').slideUp(250);
                    });
                }

            });
        });
    }

    function initFaqFilters() {
        let $container = $('.faqs-posts__list');

        let mixObject = {
            animation: {
                duration: 250,
                effects: 'fade translateZ(-100px)'
            }
        }

        if (getUrlParam('category')) {
            mixObject.load = {
                filter: '.' + getUrlParam('category')
            }
        }

        let mixer = mixitup($container, mixObject);
    }


    // get Param from URL
    function getUrlParam(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

});











