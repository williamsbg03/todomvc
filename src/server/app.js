var path = require('path');
var express = require('express');
var compression = require('compression');
var favicon = require('serve-favicon');
var health = require('./routes/health');

var app = express();

app.use('/health', health);
app.use(compression());
app.use(favicon(path.join(__dirname, '/../../static/favicon.ico')));
app.use(express['static']('static'));

module.exports = app;
