## main1.js -> call other.js :ok

## main2.js -> call conn.js :ok

## main3.js -> call both :crash
---

node: v10.9.0

amqp: ^0.2.7

## main3.js output
```txt
obama
false
Error from amqp:  Error: unsupported type in amqp table: function
    at Object.serializeValue (/home/alex/Documentos/cod/my/test-node-amqp/node_modules/amqp/lib/serializer.js:181:17)
    at Object.serializeTable (/home/alex/Documentos/cod/my/test-node-amqp/node_modules/amqp/lib/serializer.js:200:18)
    at Object.serializeFields (/home/alex/Documentos/cod/my/test-node-amqp/node_modules/amqp/lib/serializer.js:310:22)
    at Connection._sendMethod (/home/alex/Documentos/cod/my/test-node-amqp/node_modules/amqp/lib/connection.js:858:14)
    at Connection._onMethod (/home/alex/Documentos/cod/my/test-node-amqp/node_modules/amqp/lib/connection.js:472:12)
    at AMQPParser.self.parser.onMethod (/home/alex/Documentos/cod/my/test-node-amqp/node_modules/amqp/lib/connection.js:136:12)
    at AMQPParser._parseMethodFrame (/home/alex/Documentos/cod/my/test-node-amqp/node_modules/amqp/lib/parser.js:377:10)
    at frameEnd (/home/alex/Documentos/cod/my/test-node-amqp/node_modules/amqp/lib/parser.js:94:16)
    at frame (/home/alex/Documentos/cod/my/test-node-amqp/node_modules/amqp/lib/parser.js:79:14)
    at AMQPParser.header [as parse] (/home/alex/Documentos/cod/my/test-node-amqp/node_modules/amqp/lib/parser.js:65:14)
Error from amqp:  { Error: read ECONNRESET
    at TCP.onread (net.js:660:25) errno: 'ECONNRESET', code: 'ECONNRESET', syscall: 'read' }
```

