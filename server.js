const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const data = require('./api/data');


const app = express();

app.disable('x-powered-by');

app.set('port', (process.env.PORT || 3000));
app.set('view engine', 'pug');
// app.locals.pretty = true;


app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', (req, res) => {
	res.render('main', data);
});

app.route('/admin')
	.get((req, res) => {
		res.render('admin', data);
	})
	.post((req, res) => {
		console.log(req.body)
	});

app.get('*', (req, res) => {
	res.render('main', data);
});


app.listen(app.get('port'), () => {
	console.log(`Server is listening: http://localhost:${app.get('port')}`)
});