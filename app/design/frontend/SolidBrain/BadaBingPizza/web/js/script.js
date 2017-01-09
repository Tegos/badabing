require([
	"jquery"
], function ($) {

	$('.dropdown-not-s .drop-show').click(function () {
		var li = $(this).parents('li').first();
		li.find('.dropdown-content').toggle();
	});

	window.onclick = function (e) {
		if (!e.target.matches('.drop-show')) {

			var dropdowns = document.getElementsByClassName('dropdown-content');
			for (var d = 0; d < dropdowns.length; d++) {
				var openDropdown = dropdowns[d];
				$(openDropdown).hide();
			}
		}
	}
});