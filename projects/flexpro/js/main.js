$(document).ready(function () {
	$(document).on('click',function(){
		$('.pop-up').removeClass('open');
		$('.black_overlay').hide();
	});
	$('.js-slider-top').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});
	$('.js-slider-logo').slick({
		infinite: true,
		slidesToShow: 12,
		slidesToScroll: 3
	});
	$('.pop-up-open').on('click',function(event){
		$('.pop-up').addClass('open');
		$('.black_overlay').show();
		event.stopPropagation();
		
	});
	$('.pop-up-close').on('click',function(){
		$('.pop-up').removeClass('open');
		$('.black_overlay').hide();
	});
	$('.pop-up').on('click',function(event){
		event.stopPropagation();
	});
});

