$(function(){
	// $('.h-cards__img-holder').height($('.h-cards__elem').height() + 1);
	// $('.h-cards__hover').height($('.h-cards__elem').height() + 1);

	$('.js-fine-align').each(function() {
		if ($(this).height() > $(this).width()){
			$(this).addClass('js-fine-align-portrait');
		} else {
			$(this).addClass('js-fine-align-landscape');
		}
	});

    var mainSwiper = new Swiper ('.main-slider', {
      direction: 'horizontal',
      loop: true,
      speed: 400,
	  // autoplay: 3500

	  pagination: '.main-swiper-pagination',
	  paginationClickable: true
    })        

})
