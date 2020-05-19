var express = require('express');
var app = express();

// app.get('/', function (req, res) {
//     res.send('Hello World!');
// });

//app.use(express.static('/public'));

const router = express.Router();

const path = __dirname + '/public/';

app.use(express.static(path));
app.use('/', router);

var server = app.listen(3000, '0.0.0.0', function () {

    // var host = server.address().address;
    var host = "localhost";
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
