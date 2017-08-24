import '../external/vanilla-tilt.babel.min.js'


export default function initTilt() {
	
	[...document.querySelectorAll('#skills ul li')].map(el => {
		VanillaTilt.init(el, {
			max: 60,
			glare: true,
			"max-glare": 0.5
		});
	});

};