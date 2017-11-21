
export default function getMousePos(e) {

	let posx = 0;
	let posy = 0;

	if (!e) { let e = window.event };

	// if (e.pageX || e.pageY) {
	// 	posx = e.pageX;
	// 	posy = e.pageY;
	// 	console.log('pageY', posx, posy);
	// }
	if (e.clientX || e.clientY) {
		posx = e.clientX;
		posy = e.clientY;
	};

	return {
		x: posx,
		y: posy
	};
}