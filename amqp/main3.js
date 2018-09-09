
const Person = require('./other');
const worker = require('./conn');

worker((msg) => {
    console.log(msg);
});

let p1 = new Person('obama');

console.log(p1.name);
console.log(p1.isEmpty());

// join the code make amqp close connection
// output
// -------------------
//obama
//false
//Error from amqp:  Error: unsupported type in amqp table: function
//    at Object.serializeValue (/home/alex/Documentos/cod/my/test-node-amqp/node_modules/amqp/lib/serializer.js:181:17)
//    at Object.serializeTable (/home/alex/Documentos/cod/my/test-node-amqp/node_modules/amqp/lib/serializer.js:200:18)
//    at Object.serializeFields (/home/alex/Documentos/cod/my/test-node-amqp/node_modules/amqp/lib/serializer.js:310:22)
//    at Connection._sendMethod (/home/alex/Documentos/cod/my/test-node-amqp/node_modules/amqp/lib/connection.js:858:14)
//    at Connection._onMethod (/home/alex/Documentos/cod/my/test-node-amqp/node_modules/amqp/lib/connection.js:472:12)
//    at AMQPParser.self.parser.onMethod (/home/alex/Documentos/cod/my/test-node-amqp/node_modules/amqp/lib/connection.js:136:12)
//    at AMQPParser._parseMethodFrame (/home/alex/Documentos/cod/my/test-node-amqp/node_modules/amqp/lib/parser.js:377:10)
//    at frameEnd (/home/alex/Documentos/cod/my/test-node-amqp/node_modules/amqp/lib/parser.js:94:16)
//    at frame (/home/alex/Documentos/cod/my/test-node-amqp/node_modules/amqp/lib/parser.js:79:14)
//    at AMQPParser.header [as parse] (/home/alex/Documentos/cod/my/test-node-amqp/node_modules/amqp/lib/parser.js:65:14)
//Error from amqp:  { Error: read ECONNRESET
//    at TCP.onread (net.js:660:25) errno: 'ECONNRESET', code: 'ECONNRESET', syscall: 'read' }


