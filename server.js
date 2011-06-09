var express = require("express");
var faye = require("faye");
var heroku = require("./heroku");

var server = express.createServer();
server.configure(function(){
  server.use(express.logger());
  server.use(express.bodyParser());
  server.use(express.static("./public"));
});

var adapter = new faye.NodeAdapter({
  mount: '/faye',
  timeout: 45
});

server.post("/sinal-para-pingar", function(req,res) {
  adapter.getClient().publish('/pingar',req.param('posicao'));
  res.send(200);
});

adapter.attach(server);

server.listen(process.env.PORT || 3000);
