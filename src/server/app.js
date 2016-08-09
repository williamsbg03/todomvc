var path = require('path');
var express = require('express');
var compression = require('compression');
var favicon = require('serve-favicon');
var health = require('./routes/health');
var baseUrl = '/todo'
var app = express();

app.use(baseUrl + '/health', health);
app.use(baseUrl, compression());
app.use(baseUrl, favicon(path.join(__dirname, '/../../static/favicon.ico')));
app.use(baseUrl, express['static']('static'));

module.exports = app;
