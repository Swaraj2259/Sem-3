
// Assignment 3: use built in module fs

// create a file input.txt and read its content - sync and async both

// synchronous read
const fs = require('fs');

const data = fs.readFileSync('input.txt', 'utf8');
console.log('Synchronous read:');
console.log(data);

// asynchronous read
fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Asynchronous read:');
    console.log(data);
});

// rename the file input.txt to data.txt - sync and async both

// synchronous rename
try {
    fs.renameSync('input.txt', 'data.txt');
    console.log('File renamed synchronously');
} catch (err) {
    console.error(err);
}

// asynchronous rename
fs.rename('data.txt', 'input.txt', (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('File renamed asynchronously');
});
