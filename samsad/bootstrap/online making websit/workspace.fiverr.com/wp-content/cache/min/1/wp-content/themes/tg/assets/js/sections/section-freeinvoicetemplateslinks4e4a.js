jQuery(document).ready(function($){initLoadMoreLinks();function initLoadMoreLinks(){$('.section-freeInvoiceTemplatesLinks__loadMore-button').click(function(e){e.preventDefault();$(this).parent().siblings('.section-freeInvoiceTemplatesLinks__list').removeClass('is-short');$(this).parent().slideUp()})}})