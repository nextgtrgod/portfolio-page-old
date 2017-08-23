import './styles/main.styl';

import getData from './modules/getData';
import initTilt from './modules/initTilt';
import animateBulbs from './modules/animateBulbs';


document.addEventListener('DOMContentLoaded', function() {

	animateBulbs();
	
	// need to be loaded after get query success
	initTilt();

});