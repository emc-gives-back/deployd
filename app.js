var deployd = require('deployd');
var port = process.env.PORT || 3000;

var url = require('url');
var db_url = url.parse(process.env.MONGO_URL || "mongodb://:@localhost:27017/emc_give_back");

var options = {
    port: port,
    db: {
        "host": db_url.hostname,
        "port": parseInt(db_url.port),
        "name": db_url.pathname.slice(1),
        "credentials": {
            "username": db_url.auth.split(':')[0],
            "password": db_url.auth.split(':')[1]
        }
    }
};

console.log(JSON.stringify(options));

var server = deployd(options);
server.listen();

server.on('listening', function() {
  console.log("Server is listening on " + port);
});

server.on('error', function(err) {
  console.error(err);
  process.nextTick(function() { // Give the server a chance to return an error
    process.exit();
  });
});