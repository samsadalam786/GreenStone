window.dataLayer = window.dataLayer || [];
		function gtag() { dataLayer.push(arguments); }
		gtag('js', new Date());

		gtag('config', 'UA-111550524-1');
		gtag('config', 'AW-764244635');

        $(document).ready(function () {
			var $grid = $('.grid').isotope({
				itemSelector: '.element-item',
				layoutMode: 'fitRows',
				filter: '.all_exam'
			});
			// $grid.isotope({ filter: '.metal' });
			$(document).on('click', '.isotope_controls .button', function () {
				var isotope_controls = $(this).closest('.isotope_controls');
				isotope_controls.find('.is-checked').removeClass('is-checked');
				$(this).addClass('is-checked');
				var filterValue = $(this).attr('data-filter');
				console.log(filterValue);
				$grid.isotope({ filter: filterValue });
			});
		});


        function createCookie(name, value, days) {
			var expires;

			if (days) {
				var date = new Date();
				date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
				expires = "; expires=" + date.toGMTString();
			} else {
				expires = "";
			}
			document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=/";
		}

		function readCookie(name) {
			var nameEQ = encodeURIComponent(name) + "=";
			var ca = document.cookie.split(';');
			for (var i = 0; i < ca.length; i++) {
				var c = ca[i];
				while (c.charAt(0) === ' ') c = c.substring(1, c.length);
				if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
			}
			return null;
		}

		function eraseCookie(name) {
			createCookie(name, "", -1);
		}



        var truepush = window.truepush || [];
		truepush.push(function () {
			truepush.Init({
				id: "5dc796347379bfbcf3b0c804"
			}, function (error) {
				if (error) console.error(error);
			})
		})