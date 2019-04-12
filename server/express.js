const express = require('express');
const path = require('path');
const app = express();

app.get('/dist*', function (req, res) {
   res.sendFile( path.join(__dirname , "../" + req.url));
})
app.use(function (req, res) {
	res.sendFile(path.join( __dirname , "../dist/" + "index.html" ));
}) 
 
let server = app.listen(8081, function () {
  let host = server.address().address
  let port = server.address().port
  console.log('dd',host,port)
  console.log("应用实例，访问地址为 http://%s:%s", host, port)//访问地址：http://localhost:8081/
})