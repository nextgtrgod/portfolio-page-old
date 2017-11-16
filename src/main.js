import './styles/main.styl';

import initScroll from './modules/initScroll';
import initTilt from './modules/initTilt';
import animateBulbs from './modules/animateBulbs';


document.addEventListener('DOMContentLoaded', () => {

	initScroll();
	// animateBulbs();
	initTilt();

	// show content
	document.body.className = 'loaded';

	if (CSS.supports('filter', 'invert(100%)')) {
		let invertTrigger = document.getElementById('trigger-invert');
		invertTrigger.addEventListener('click', () => document.body.classList.toggle('invert'));
	};
});

