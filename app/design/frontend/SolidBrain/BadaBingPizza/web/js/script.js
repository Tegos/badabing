require([
	'jquery'
], function ($) {


	$(document).ready(function () {

		$('.dropdown-not-s .drop-show').click(function () {
			let li = $(this).parents('li').first();
			li.find('.dropdown-content').toggle();
		});
	});


	window.onclick = function (e) {
		if (!e.target.matches('.drop-show')) {

			const dropdowns = document.getElementsByClassName('dropdown-content');
			for (let d = 0; d < dropdowns.length; d++) {
				const openDropdown = dropdowns[d];
				$(openDropdown).hide();
			}
		}
	}
});