'use strict';

$(function(){
	// home text fadeIn
	for(let i = 0; i < 2; i++){
		setTimeout(function(){
			$('.home.title p').eq(i).addClass('on');
		}, 300*i);
	};

	// // gnb button click
	// $(".gnb-nav .btn a").click(function(e){
	// 	e.preventDefault();
	// 	let wHeight = $(window).height();
	// 	var thisElem = $(this).attr('data-id');
	// 	console.log(thisElem);
	// 	$('.mySwiper > .swiper-wrapper').css({'transform': `translate3d(0px, -${wHeight*thisElem}px, 0px)`, 'transition-duration': '800ms'});
	// 	$('.mySwiper > .swiper-wrapper > .swiper-slide').each(function(){
	// 		$(this).removeClass('swiper-slide-active');
	// 		$(this).removeClass('swiper-slide-prev');
	// 		$(this).removeClass('swiper-slide-next');
	// 	});
	// 	$('.mySwiper > .swiper-wrapper > .swiper-slide').eq(thisElem).addClass('swiper-slide-active');
	// 	$('.mySwiper > .swiper-wrapper > .swiper-slide').eq(thisElem).prev().addClass('swiper-slide-prev');
	// 	$('.mySwiper > .swiper-wrapper > .swiper-slide').eq(thisElem).next().addClass('swiper-slide-next');
	// 	$('.swiper-pagination-vertical > .swiper-pagination-bullet').each(function(){
	// 		$(this).removeClass('swiper-pagination-bullet-active');
	// 		$(this).attr('aria-current', '');
	// 	});
	// 	$('.swiper-pagination-vertical > .swiper-pagination-bullet').eq(thisElem).addClass('swiper-pagination-bullet-active').attr('aria-current', 'true');;
	// 	// let wHeight = $(window).height();
	// 	// if($('.mySwiper .swiper-slide').attr('id')=='home'){
	// 	// 	console.log(thisElem.offset().top);
	// 		// $('body').animate({scrollTop: wHeight},1500);
	// 	// };
  //   return false;
  // });

	// swiper button add class
	$('.swiper-pagination-bullet').addClass('btn');
	$('.swiper-pagination').hover(function(){
		$('.cursorItem').css({'opacity': '0', 'visibility': 'none'});
	}, function(){
		$('.cursorItem').css({'opacity': '1', 'visibility': 'visible'});
	});

	// myskill element flip
	for(let i = 1; i < 9; i++){
		setTimeout(function(){
			$(`.cont-wrap ul li:nth-child(${i})`).addClass('on');
		},50*i);
	};

	function flipLi(){
		if($('#myskill').hasClass('swiper-slide-active')){
			for(let i = 1; i < 9; i++){
				setTimeout(function(){
					$(`.cont-wrap ul li:nth-child(${i})`).addClass('on');
				},50*i);
			}
		}else{
			for(let i = 8; i > 0; i--){
				setTimeout(function(){
					$(`.cont-wrap ul li:nth-child(${i})`).removeClass('on');
				},50*i);
			}
		}
	};
	

	$('.swiper-pagination-bullet, .gnb-nav .btn a').on('click',function (){
		for(let i = 1; i < 9; i++){
			setTimeout(function(){
				$(`.cont-wrap ul li:nth-child(${i})`).addClass('on');
			},50*i);
		}
	});
	
	$(window).on('mousewheel', flipLi);
})
