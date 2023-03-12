jQuery(document).ready(function($){const $header=$('.section-header');const $toggler=$('.section-header-toggler');const $menu=$('.section-header-menu__wrapper');const $params={scrollTop:null,windowWidth:null,menuOpened:!1,isTopOfPage:!1,isPopupMenu:!1,screens:{mobile:320,tabletPortrait:600,tabletLandscape:900,desktop:1160},breakpoint:function(){return this.screens.desktop}}
initMenuToggler();initDropdownEvents($params.breakpoint());$(window).on('resize scroll load',function(){initStatesChange();initHeaderEvents()});function initHeaderEvents(){if(!$params.isTopOfPage){$header.addClass('scrolled')}else{$header.removeClass('scrolled')}
if($params.menuOpened&&$params.windowWidth<$params.breakpoint()){$('html').addClass('html-fixed')}else if(!$params.menuOpened){$('html').removeClass('html-fixed')}}
function initMenuToggler(){$toggler.on('click',(e)=>{e.preventDefault();$params.menuOpened=!$params.menuOpened;if($params.menuOpened){$toggler.addClass('active');$menu.addClass('opened');$header.addClass('header-opened')}else{$toggler.removeClass('active');$menu.removeClass('opened');$header.removeClass('header-opened')}
initHeaderEvents()})}
function initStatesChange(){$params.scrollTop=$(window).scrollTop();$params.windowWidth=$(window).width();$params.isTopOfPage=!$params.scrollTop;$params.isPopupMenu=$params.windowWidth>=$params.breakpoint();if($params.isPopupMenu&&$params.menuOpened){$params.menuOpened=!1;$toggler.removeClass('active');$menu.removeClass('opened');$header.removeClass('header-opened')}}
function initDropdownEvents(breakpoint){$(window).on('resize',function(){if($(window).width()>=breakpoint){closeAllDropdowns()}})
$('.dropdown-menu-item > a').on('click',function(e){let parentLi=$(this).parent();if($(window).width()<breakpoint){e.preventDefault();if(parentLi.hasClass('dropdown-opened')){parentLi.removeClass('dropdown-opened')}else{$('.dropdown-opened').removeClass('dropdown-opened');parentLi.addClass('dropdown-opened')}}});function closeAllDropdowns(){$('.dropdown-opened').removeClass('dropdown-opened')}}})