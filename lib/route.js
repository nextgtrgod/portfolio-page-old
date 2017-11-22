const data = require('../api/data');


function route(req, res) {

	const deviceType = req.device.type;

	switch (deviceType) {
		case 'phone':
		case 'tablet':
			res.render('mobile', data);
			break;

		default:
			res.render('index', data);
			break;
	};
}

module.exports = route;