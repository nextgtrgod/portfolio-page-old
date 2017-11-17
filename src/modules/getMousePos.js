
export default function getMousePos(e) {

	let posx = 0;
	let posy = 0;

	if (!e) { let e = window.event };

	if (e.pageX || e.pageY) {
		posx = e.pageX;
		posy = e.pageY;
	}
	else if (e.clientX || e.clientY) {
		posx = e.clientX;
		posy = e.clientY;
	};

	console.log();

	return {
		x: posx,
		y: posy
	};
}