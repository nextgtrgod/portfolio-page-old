import './styles/main.styl';

import initScroll from './modules/initScroll';
import gridAnimation from './modules/gridAnimation';
import initTilt from './modules/initTilt';


document.addEventListener('DOMContentLoaded', () => {

	initScroll();
	initTilt();

	// inverse theme
	if (CSS.supports('filter', 'invert(100%)')) {
		let invertTrigger = document.getElementById('trigger-invert');
		invertTrigger.addEventListener('click', () => document.body.classList.toggle('invert'));
	};

	// move animation
	const moveAnimation = new gridAnimation();
	[...document.querySelectorAll('.movable')].map(item => moveAnimation.subscribe(item));
	moveAnimation.start();


	// show content
	document.body.className = 'loaded';
});

