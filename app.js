const http  = require('http');
http.createServer(function (req, res) { 
    res.end('hello pm2')
}).listen(3002, function () { console.log('listen at 3002') })
 
