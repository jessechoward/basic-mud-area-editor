require('dot-env').config();
const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const logFormat = process.env.LOG_FORMAT || 'dev';
app.use(require('morgan')(logFormat));

// static files
app.use('/public', express.static('./static'));
// template pages
app.use('/', require('./routes'));

const host = process.env.LISTEN_HOST || 'localhost';
const port = process.env.LISTEN_PORT || 4000;
const server = app.listen(port, host, () =>
{
	console.log(`Listening on ${host}:${port}`);
});

module.exports = server;