var app = require('./src/server/app');
var PORT = 80;

if (process.platform === 'darwin' || process.platform === 'win32') {
    PORT = 8080;
}

var httpServer = app.listen(PORT, function () {
   console.log('todomvc running on port ' + PORT + '[' + app.settings.env + ']');
});

process.on('SIGTERM', function () {
    httpServer.close(function () {
        process.exit(0);
    });
});
