import './styles/mobile.styl';

// import gridAnimation from './modules/gridAnimation';


document.addEventListener('DOMContentLoaded', () => {

	document.body.classList.add('loaded');


	let sections = document.querySelectorAll('section');

	let scrollPos = 0;
	window.addEventListener('scroll', () => {
		scrollPos = window.pageYOffset || document.documentElement.scrollTop;

		[...sections].map(section => {
			if (scrollPos > (section.offsetTop - window.innerHeight / 2)) {
				section.classList.add('visible');
			}
		});
	});


	// gyroscope parallax
	// const animation = new gridAnimation();
	// [...document.querySelectorAll('.movable')].map(item => animation.subscribe(item));
	// animation.start();

});