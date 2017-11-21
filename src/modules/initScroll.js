
export default function initScroll() {
	const body = document.body;
	const html = document.documentElement;

	let sectionHeight = window.innerHeight;
	let sectionCount = document.getElementsByTagName('section').length;
	let calculatedHeight = (sectionCount - 1) * sectionHeight / sectionCount;

	window.addEventListener('resize', () => sectionHeight = window.innerHeight);

	// start
	let scrollPos = window.pageYOffset || document.documentElement.scrollTop;
	setSection();


	function setSection() {
		scrollPos = window.pageYOffset || document.documentElement.scrollTop;

		if ((scrollPos >= 0) && (scrollPos < calculatedHeight)) {	
			body.dataset['section'] = 'about';
		} else if ((scrollPos >= calculatedHeight) && (scrollPos < 2 * calculatedHeight)) {
			body.dataset['section'] = 'skills';
		} else {
			body.dataset['section'] = 'projects';
		};
	};

	window.addEventListener('scroll', () => setSection());
}