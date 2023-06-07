'use strict';

$(function () {
	// home text fadeIn
	for (let i = 0; i < 2; i++) {
		setTimeout(function () {
			$('.home.title p').eq(i).addClass('on');
		}, 300 * i);
	};

	// swiper button add class
	$('.swiper-pagination-bullet').addClass('btn');
	$('.swiper-pagination').hover(function () {
		$('.cursorItem').css({ 'opacity': '0', 'visibility': 'none' });
	}, function () {
		$('.cursorItem').css({ 'opacity': '1', 'visibility': 'visible' });
	});

	function flipLi() {
		if ($('#myskill').hasClass('swiper-slide-active')) {
			for (let i = 1; i < 9; i++) {
				setTimeout(function () {
					$(`.cont-wrap ul li:nth-child(${i})`).addClass('on');
				}, 50 * i);
				setTimeout(function () {
					$(`.cont-wrap ul li:nth-child(${i})`).addClass('active');
				}, 100 * i);
			}
		} else {
			for (let i = 8; i > 0; i--) {
				setTimeout(function () {
					$(`.cont-wrap ul li:nth-child(${i})`).removeClass('on');
				}, 50 * i);
				setTimeout(function () {
					$(`.cont-wrap ul li:nth-child(${i})`).removeClass('active');
				}, 100 * i);
			}
		};
	};


	$('.swiper-pagination-bullet, .gnb-nav .btn a').on('click', function () {
		for (let i = 1; i < 9; i++) {
			setTimeout(function () {
				$(`.cont-wrap ul li:nth-child(${i})`).addClass('on');
			}, 50 * i);
			setTimeout(function () {
				$(`.cont-wrap ul li:nth-child(${i})`).addClass('active');
			}, 100 * i);
		}
	});

	$(window).on('mousewheel', flipLi);

});
