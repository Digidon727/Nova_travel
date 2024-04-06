const menuBtn = document.querySelector('.menu__icon')
const menu = document.querySelector('.nav__item')

if (menuBtn && menu) {
	menuBtn.addEventListener('click', () => {
		menuBtn.classList.toggle('active')
		menu.classList.toggle('active')
	})
}

document.addEventListener('DOMContentLoaded', function () {
	new Splide('#slider1', {
		type: 'slide',
		perPage: 3,
		rewind: true,
		arrows: false,
		gap: '20px',
		breakpoints: {
			992: { perPage: 2 },
			594: { perPage: 1 },
		},

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
		breakpoints: {
			992: { perPage: 2 },
			640: { perPage: 1 },
		},
	}).mount()
})

/*Анимация */
AOS.init({
	duration: 2000,
	once: true,
})
