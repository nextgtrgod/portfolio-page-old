import './styles/main.styl';

import checkBrowser from './modules/checkBrowser';
import initScroll from './modules/initScroll';
import gridAnimation from './modules/gridAnimation';
import initTilt from './modules/initTilt';


document.addEventListener('DOMContentLoaded', () => {

	let vendor = checkBrowser();

	initScroll();
	initTilt();

	// inverse theme
	if (CSS.supports('filter', 'invert(100%)') && vendor !== 'any-firefox') {
		let invertTrigger = document.getElementById('trigger-invert');
		invertTrigger.addEventListener('click', () => document.body.classList.toggle('invert'));
	};

	// move animation
	const moveAnimation = new gridAnimation();
	[...document.querySelectorAll('.movable')].map(item => moveAnimation.subscribe(item));
	(vendor === 'any-chrome') && moveAnimation.start();
	

	// scroll-to
	const scrollTo = document.getElementById('scroll-to');
	scrollTo.addEventListener('click', () => {
		(document.getElementById('scroll-anchor')).scrollIntoView();
	});


	// show content
	document.body.className = 'loaded';
});

