/**
 * Created by tegos on 09.01.2017.
 */

require([
	"jquery"
], function ($) {


	$(document).ready(function () {
		$('.categories-ingredients li a').bind('click', function (event) {
			event.preventDefault();
			$('.categories-ingredients li a').removeClass('active').addClass('not-active');
			$('.tabs').children().css({display: "none"});
			$(this).addClass('active');
			var blockId = $(this).attr('href');

			$(blockId).css({display: "block"});
		});
		$('.carousel').owlCarousel({
			items: 1,
			itemsTablet: [768, 1],
			itemsDesktopSmall: [979, 1],
			itemsDesktop: [1199, 1],
			pagination: true
		});

		var height = "";
		if (window.innerWidth <= 767) {
			var height = "auto";
		}
		else if (window.innerWidth <= 991) {
			var height = "500px";
		}
		else if (window.innerWidth <= 1199) {
			height = '650px';
		}
		else {
			var height = "717px";

		}

		$('.view-more').bind('click', function (event) {
			event.preventDefault();
			if ($('.selected-ingredient:nth-child(n+5)').css('display') == 'none') {
				$('.selected-ingredient').css({display: 'inline-block'});
				$(this).find('i').removeClass('fa-angle-down').addClass('fa-angle-up');
				$('.ingr-block').css({height: "auto", paddingBottom: "40px"});
			}
			else {
				$('.selected-ingredient:nth-child(n+5)').css({display: 'none'});
				$(this).find('i').removeClass('fa-angle-up').addClass('fa-angle-down');
				$('.ingr-block').css({height: height});
			}
		});
	});


	$(document).ready(function () {


		$(".next-step1").bind('click', function (event) {
			event.preventDefault();

			$('.choose-step').removeClass('active');
			$(".choose-step2").addClass("active");
			$(".choose-step2 img").attr("src", "/pub/media/wysiwyg/c-step2-active.png");
			$(".choose-step1 img").attr("src", "/pub/media/wysiwyg/c-step1.png");

			$('.next-step2').css({display: "block"});
			$('.white-button1').css({display: "block"});
			$(this).css({display: "none"});

			$('.right-block-step1').css({display: "none"});
			var rightBlockStep2 = $('.right-block-step2');
			$(".choose .pl0").append(rightBlockStep2);
			rightBlockStep2.css({display: "block"});
			$('.pizza').attr('src', "/pub/media/wysiwyg/pizza2.png");

			$("#slider").slider({
				animate: true,
				range: "min",
				value: 1,
				min: 1,
				max: 75,
				step: 25,

				//Получаем значение и выводим его на странице
				slide: function (event, ui) {
					$("#slider-result").html(ui.value);
				},

				//обновляем скрытое поле формы, так что можно передать данные с помощью формы
				change: function (event, ui) {
					$('#hidden').attr('value', ui.value);
				}

			});
			$("#slider1").slider({
				animate: true,
				range: "min",
				value: 1,
				min: 1,
				max: 50,
				step: 25,

				//Получаем значение и выводим его на странице
				slide: function (event, ui) {
					$("#slider-result1").html(ui.value);
				},

				//обновляем скрытое поле формы, так что можно передать данные с помощью формы
				change: function (event, ui) {
					$('#hidden1').attr('value', ui.value);
				}

			});

		});

		$(".next-step2").bind('click', function (event) {
			event.preventDefault();

			$('.choose-step').removeClass('active');
			$(".choose-step3").addClass("active");
			$(".choose-step3 img").attr("src", "/pub/media/wysiwyg/c-step3-active.png");
			$(".choose-step2 img").attr("src", "/pub/media/wysiwyg/c-step2.png");


			$(this).css({display: "none"});
			$('.white-button1').css({display: "none"});
			$('.white-button2').css({display: "block"});
			$('.add-to-cart').css({display: "block"});
			$('.qnt').css({display: "block"});


			$('.right-block-step2').css({display: "none"});
			var rightBlockStep3 = $('.right-block-step3');
			$(".choose .pl0").append(rightBlockStep3);
			rightBlockStep3.css({display: "block"});
			$('.pizza').attr('src', "/pub/media/wysiwyg/pizza2.png");

		});


		$(".white-button1").bind('click', function (event) {
			event.preventDefault();

			$('.choose-step').removeClass('active');
			$(".choose-step1").addClass("active");
			$(".choose-step1 img").attr("src", "/pub/media/wysiwyg/c-step1-active.png");
			$(".choose-step2 img").attr("src", "/pub/media/wysiwyg/c-step2.png");

			$(this).css({display: "none"});
			$(".next-step2").css({display: "none"});
			$(".next-step1").css({display: "block"});

			$('.right-block-step2').css({display: "none"});
			$('.right-block-step1').css({display: "block"});
			var rightBlockStep1 = $('.right-block-step1');
			$(".choose .pl0").append(rightBlockStep1);

			$('.pizza').attr('src', "/pub/media/wysiwyg/pizza.png");


		});

		$(".white-button2").bind('click', function (event) {
			event.preventDefault();

			$('.choose-step').removeClass('active');
			$(".choose-step2").addClass("active");
			$(".choose-step2 img").attr("src", "/pub/media/wysiwyg/c-step2-active.png");
			$(".choose-step3 img").attr("src", "/pub/media/wysiwyg/c-step3.png");

			$(this).css({display: "none"});
			$(".white-button1, .next-step2").css({display: "block"});
			$(".add-to-cart, .qnt").css({display: "none"});


			$('.right-block-step3').css({display: "none"});
			$('.right-block-step2').css({display: "block"});
			var rightBlockStep1 = $('.right-block-step2');
			$(".choose .pl0").append(rightBlockStep1);

			$('.pizza').attr('src', "/pub/media/wysiwyg/pizza2.png");


		});


	});
});
