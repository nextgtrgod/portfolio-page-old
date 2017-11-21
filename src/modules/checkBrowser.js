
export default function checkBrowser() {
	let ua		= window.navigator.userAgent.toLowerCase();
	let msie	= ua.indexOf('msie');
	let trident	= ua.indexOf('trident');
	let edge	= ua.indexOf('edge');
	let moz		= ua.indexOf('firefox');
	let chr		= ua.indexOf('chrome');
	let saf		= ua.indexOf('safari');
	let root	= document.getElementsByTagName('html')[0];


	if (typeof window.orientation !== 'undefined') root.classList.add('mobile-device');

	let vendor = '';

	if (msie > 0 || trident > 0 || edge > 0) {
		vendor = 'any-ie';
		root.classList.add(vendor);
		return vendor;
	};

	if (moz > 0) {
		vendor = 'any-firefox';
		root.classList.add(vendor);
		return vendor;
	};

	if (chr > 0) {
		vendor = 'any-chrome';
		root.classList.add(vendor);
		return vendor;
	};

	if (saf > 0) {
		vendor = 'any-safari';
		root.classList.add(vendor);
		return vendor;
	};
};