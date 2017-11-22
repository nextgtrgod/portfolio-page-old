const fs = require('fs');
const path = require('path');
const express = require('express');
const device = require('express-device');
const bodyParser = require('body-parser');

const app = express();

app.disable('x-powered-by');

app.set('port', (process.env.PORT || 3000));
app.set('view engine', 'pug');


app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(device.capture());


const route = require('./lib/route');

app.get('/', (req, res) => route(req, res));

// -> here'll be admin route //

// app.get('*', (req, res) => route(req, res));


app.listen(app.get('port'), () => console.log(`Server is listening: http://localhost:${app.get('port')}`));