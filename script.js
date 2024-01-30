var swiper = new Swiper('.review-slider', {
	grabCursor: true,
	spaceBetween: 30,
	loop: true,
	centeredSlides: true,
	autoplay: {
		delay: 7500,
		disableOnInteraction: false,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
