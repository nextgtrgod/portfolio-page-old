const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const data = require('./api/data');


const app = express();

app.disable('x-powered-by');

app.set('port', (process.env.PORT || 4000));
app.set('view engine', 'pug');


app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => res.render('index', data));

// here'll be admin route

app.get('*', (req, res) => res.render('index', data));


app.listen(app.get('port'), () => console.log(`Server is listening: http://localhost:${app.get('port')}`));