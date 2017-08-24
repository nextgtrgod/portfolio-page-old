
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

			[...bulbsDOM].map(item => {
				let bulb = {
					element: 	item,
					speed:	 	item.dataset.speed,
					direction: 	item.dataset.direction
				};
	
				bulbs.push(bulb);
			});


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
				
				[...bulbs].map(bulb => {
					bulb.element.style.transform = `translate3d(${bulb.speed * 
						bulb.direction * 
						targetX}px, 0px, 0px)`;
				});
				
				window.requestAnimationFrame(redraw);
			};	
			window.requestAnimationFrame(redraw);


			function normalize(v, vmin, vmax, tmin, tmax) {
				let nv = Math.max(Math.min(v, vmax), vmin);
				let dv = vmax - vmin;
				let pc = (nv - vmin) / dv;
				let dt = tmax - tmin;
				let tv = tmin + (pc * dt);
				return tv;
			};
		};
	};
};