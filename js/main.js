document.addEventListener('DOMContentLoaded', function () {
	new Splide('#slider1', {
		type: 'loop',
		perPage: 3,
		rewind: true,
		arrows: false,
		gap: '20px',
		focus: 'center',

		// autoplay: true, // Включаем автоматическую прокрутку
		// interval: 2000,
		// pauseOnHover: true,
	}).mount()

	new Splide('#slider2', {
		type: 'slide',
		perPage: 3,
		arrows: false,
		autoplay: true,
		interval: 6000,
	}).mount()
})
