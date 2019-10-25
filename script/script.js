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
});