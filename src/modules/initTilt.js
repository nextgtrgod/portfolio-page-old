import '../external/vanilla-tilt.babel.min.js'


export default function initTilt() {
	let tiltElements = document.querySelectorAll('#skills ul li');
	
	tiltElements.forEach(el => {
		VanillaTilt.init(el, {
			max: 60,
			glare: true,
			"max-glare": 0.5
		});
	});
};