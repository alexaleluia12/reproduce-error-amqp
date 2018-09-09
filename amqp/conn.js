var amqp = require('amqp');

var connection = amqp.createConnection({ host: 'localhost' });

// add this for better debuging
connection.on('error', function(e) {
  console.log("Error from amqp: ", e);
});


function doWork(callback) {
    // Wait for connection to become established.
    connection.on('ready', function () {
      // Use the default 'amq.topic' exchange
      connection.queue('test_queue', function (q) {
          // Catch all messages
          q.bind('#');
        
          // Receive messages
          q.subscribe(callback);
      });
    });
}

module.exports = doWork;
