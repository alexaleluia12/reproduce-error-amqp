
const worker = require('./conn');

worker((msg) => {
    console.log(msg);
});

// normal receive message

