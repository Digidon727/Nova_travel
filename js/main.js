document.addEventListener('DOMContentLoaded', function () {
	const BgSplide = new Splide('.splide', {
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
})
