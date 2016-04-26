var path = require('path');
var express = require('express');
var compression = require('compression');
var favicon = require('serve-favicon');
var basePath = '/todomvc';

var app = express();

app.use(compression());
app.use(favicon(path.join(__dirname, 'static/favicon.ico')));
app.use(express.static('static'));

module.exports = app;
