jQuery(document).ready(function ($) {

    // Init
    var tg = {};
    window.tg = tg;


    // Globals
    tg.globals = {}
    tg.globals.utms = [
        'cxd',
        'utm_source',
        'utm_medium',
        'utm_campaign',
        'utm_content',
        'utm_term',
        'utm_con',
        'source',
        'medium',
        'campaign',
        'content',
        'context',
        'context_referrer',
        'andco_referrer',
        'workspace_referrer',
        'caid',
        'agid',
        'ad_id',
        'kw',
        'lpcat'
    ];


    // Methods
    tg.init = function() {
        tg.UtmsManager.init();
    }



    tg.UtmsManager = {
        UTMS_COOKIE_NAME: "utms",
        UTMS_COOKIE_EXPIRE_DAYS: 90
    };

    tg.UtmsManager.getUTMsFromCookies = function() {
        try {
            return JSON.parse( tg.getCookie(tg.UtmsManager.UTMS_COOKIE_NAME) );
        } catch{
            return {}
        }
    };

    tg.UtmsManager.ifUserCameWithUTMs = function() {
        var exists = false;
        tg.globals.utms.forEach(function (utm) {
            var url_param_value = tg.getUrlParam(utm);
            if (url_param_value) {
                exists = true;
            }
        });
        return exists;
    }

    tg.UtmsManager.initSaveUTMsToCookies = function () {
        if (!tg.UtmsManager.ifUserCameWithUTMs()) { return; }

        var utmsToSave = {};

        // Save utms to cookies
        tg.globals.utms.forEach(function (utm) {
            var url_param_value = tg.getUrlParam(utm);
            if (url_param_value) {
                utmsToSave[utm] = url_param_value;
            }
        });

        tg.setCookie(tg.UtmsManager.UTMS_COOKIE_NAME, JSON.stringify(utmsToSave), tg.UtmsManager.UTMS_COOKIE_EXPIRE_DAYS)
    }

    tg.UtmsManager.populateUTMs = function() {
        // Populate UTMs to inputs
        if (!tg.UtmsManager.getUTMsFromCookies()) { return; }
        for (const [utm_key, utm_value] of Object.entries(tg.UtmsManager.getUTMsFromCookies())) {
            $('[name="' + utm_key + '"]').val(utm_value);
        }

        // Add UTMs to links
        $('.js-add-utms, a[href^="https://app.workspace.fiverr.com"]').each(function(item) {
            var currentURL = $(this).attr('href');
            var newURL = tg.addParamsToUrl(currentURL, tg.UtmsManager.getUTMsFromCookies());
            $(this).attr('href', newURL);
        });

        // Add UTMs to forms
        $('form[action^="https://app.workspace.fiverr.com"]').each(function() {
            for (const [utm_key, utm_value] of Object.entries(tg.UtmsManager.getUTMsFromCookies())) {
                $('[name="' + utm_key + '"]').val(utm_value);
                $(this).append('<input type="hidden" class="input-hidden-param" name="'+utm_key+'" value="'+utm_value+'">')
            }
        });
    }

    tg.UtmsManager.init = function() {
        tg.UtmsManager.initSaveUTMsToCookies();
        tg.UtmsManager.populateUTMs();
    }







    // Helper Methods
    tg.getUrlParam = function(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    tg.isDev = function() {
        return (window.location.href.includes('wpengine') || window.location.href.includes('greeto') || window.location.href.includes('localhost'));
    }

    tg.addParamsToUrl = function(href, params) {
        if (href && tg.validURL(href) && params) {
            var url = new URL(href);
            for (var param in params) {
                if (Object.prototype.hasOwnProperty.call(params, param)) {
                    url.searchParams.set(param, params[param]);
                }
            }
            return url.href;
        }
        return href;
    }

    tg.validURL = function(str) {
        var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
            '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
        return !!pattern.test(str);
    }

    tg.setCookie = function(name,value,days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days*24*60*60*1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    }

    tg.getCookie = function(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }

    tg.eraseCookie = function(name) {
        document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }




    tg.init();

});
