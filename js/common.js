'use strict';

$(function(){
	// home text fadeIn
	for(let i = 0; i < 3; i++){
		setTimeout(function(){
			$('.home.title p').eq(i).addClass('on');
		}, 400*i);
	};



	// myskill element flip
	for(let i = 1; i < 7; i++){
		setTimeout(function(){
			$(`.cont-wrap ul li:nth-child(${i})`).addClass('on');
		},50*i);
	};

	function flipLi(){
		if($('#myskill').hasClass('swiper-slide-active')){
			for(let i = 1; i < 7; i++){
				setTimeout(function(){
					$(`.cont-wrap ul li:nth-child(${i})`).addClass('on');
				},50*i);
			}
		}else{
			for(let i = 7; i > 1; i--){
				setTimeout(function(){
					$(`.cont-wrap ul li:nth-child(${i})`).removeClass('on');
				},50*i);
			}
		}
	};
	

	$('.swiper-pagination-bullet').on('click',function (){
		for(let i = 1; i < 7; i++){
			setTimeout(function(){
				$(`.cont-wrap ul li:nth-child(${i})`).addClass('on');
			},50*i);
		}
	});
	
	$(window).on('mousewheel', flipLi);
})
