import './styles/main.styl';

import initTilt from './modules/initTilt';
import animateBulbs from './modules/animateBulbs';


document.addEventListener('DOMContentLoaded', () => {

	animateBulbs();
	
	// need to be loaded after get query success
	initTilt();

	// show content
	document.body.className = 'loaded';
});

