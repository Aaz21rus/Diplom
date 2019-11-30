$(function(){
	$('.header__toggle-menu').on('click', function(){
		$('.menu').css('display', 'flex')
		$('.header__toggle-menu').css('display', 'none')
	});

	$(document).mouseup(function(e){
		var div = $('.header__menu');
		if (div.hasClass('.header__menu')) {
			if (!div.is(e.target) && div.has(e.target).length === 0) {
				div.fadeOut();
			}
		}
	});
	
	// $('.menu, .intro__picture, .intro__title').parents().on('click', function(event){
	// 	if(event.target == this) {
	// 		$('.menu').css('display', 'none');
	// 		$('.header__toggle-menu').css('display', 'block')
	// 	}
	// });

	$('.header__call').on('click', function(){
		$('.form-container').css('display', 'flex');
	});

	$('.form__agreement').change(function() {
		$('.form__recall-project-order').attr('disabled',!this.checked)
	});

	$('.form-container').on('click', function(event){
		if(event.target == this) {
			$('.form-container').css('display', 'none');
		}
	});

	var mySwiper = new Swiper ('.swiper-container', {
		direction: 'horizontal',
		slidesPerView: 3,
		loop: true,
		setWrapperSize: true,
		roundLengths: true,
		spaceBetween: 27
	});
});


// const mySiema = new Siema({
// 	perPage: 3,
// 	loop: true,
// 	// perPage: {
// 	// 	1440: 3,
// 	// 	1036: 2,
// 	// },
// });
// document.querySelector('.examples__button-arrow-origin').addEventListener('click', () => mySiema.prev());
// document.querySelector('.examples__button-arrow--reverse').addEventListener('click', () => mySiema.next());
