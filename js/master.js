/* global jQuery */

import App from './App';

jQuery(function ($) {
	function smoothScrollingTo(target) {
		$('html, body').animate({ scrollTop: $(target).offset().top - 50 }, 500);
	}

	$('a[href^="\\#"]').on('click', function (event) {
		event.preventDefault(event);
		if ($($(this.hash).selector).length) {
			smoothScrollingTo(this.hash);
		}
	});

	$(document).ready(function () {
		window.app = new App();

		if ($($(location.hash).selector).length) {
			smoothScrollingTo(location.hash);
		}
	});
});