
export default function initScroll() {
	const body = document.body;
	const html = document.documentElement;

	let sectionHeight = window.innerHeight;
	window.addEventListener('resize', () => sectionHeight = window.innerHeight);

	let scrollPos = 0;
	body.dataset['section'] = 'about';

	window.addEventListener('scroll', () => {
		scrollPos = window.pageYOffset || document.documentElement.scrollTop;

		if ((scrollPos >= 0) && (scrollPos < sectionHeight)) {
			
			body.dataset['section'] = 'about';

		} else if ((scrollPos >= sectionHeight) && (scrollPos < 2 * sectionHeight)) {

			body.dataset['section'] = 'skills';

		} else {

			body.dataset['section'] = 'projects';

		}
	});
} 