import './styles/main.styl';

import initTilt from './modules/initTilt';
import animateBulbs from './modules/animateBulbs';



animateBulbs();

// need to be loaded after get query success
initTilt();