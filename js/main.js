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

	$('a[href ^= "#"]').click(function () {
		$(".main-nav__elem").removeClass('main-nav__elem_active');
		$(this).parent().addClass('main-nav__elem_active');
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;
		$('html,body').animate( { scrollTop: destination }, 1000 );
		return false;
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
