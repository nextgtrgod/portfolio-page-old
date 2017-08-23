
export default function animateBulb() {

	let WIDTH = window.innerWidth;
	let breakpoint = 720; // devices with less width display don't get parallax :(
	
	if (WIDTH > breakpoint) {
	
		let	bulbsDOM = document.querySelectorAll('.bulbs > div');
		console.log(bulbsDOM);
		
		if(bulbsDOM) {
			
			let mousePos = {
					x: 0,
					y: 0
				};
		
			let targetX, targetY;


			let bulbs = [];

			for(let i = 0; i < bulbsDOM.length; i++) {

				let bulb = {
					element: 	bulbsDOM[i],
					speed:	 	bulbsDOM[i].dataset.speed,
					direction: 	bulbsDOM[i].dataset.direction
				};

				bulbs.push(bulb);
			};

			document.addEventListener('mousemove', event => {
				// horizontal axis
				var tx = -1 + (event.clientX / WIDTH)*2;
	
				// vertical axis
				// var ty = 1 - (event.clientY / window.innerHeight)*2;
	
				mousePos.x = tx;
				// mousePos.y = ty;
	
			}, false);
		
			function redraw() {
				targetX = normalize(mousePos.x, -1, 1, -1, 1);
				// targetY = normalize(mousePos.y, -1, 1, -1, 1);
				
				for(let i = 0; i < bulbs.length; i++) {
					bulbs[i].element.style.transform = `translate3d(${bulbs[i].speed * bulbs[i].direction * targetX}px, 0px, 0px)`;
				};
				
				window.requestAnimationFrame(redraw);
			};	
			window.requestAnimationFrame(redraw);


			function normalize(v, vmin, vmax, tmin, tmax) {
				var nv = Math.max(Math.min(v,vmax), vmin);
				var dv = vmax-vmin;
				var pc = (nv-vmin)/dv;
				var dt = tmax-tmin;
				var tv = tmin + (pc*dt);
				return tv;
			};
		};
	};
};