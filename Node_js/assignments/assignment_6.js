
// Assignment 6: 

// demonstrate the usage of streams in node.js to read a very big file

import fs from 'fs';

const readStream = fs.createReadStream('bigfile.txt', { encoding: 'utf8' });

readStream.on('data', (chunk) => {
    console.log('Received chunk:', chunk);
});

readStream.on('end', () => {
    console.log('Finished reading the file.');
});

readStream.on('error', (err) => {
    console.error('Error reading the file:', err);
});

// writing to a file named documentation.txt using write stream



const writeStream = fs.createWriteStream('documentation.txt', { encoding: 'utf8' });

writeStream.write('This is the first line of the documentation.\n');
writeStream.write('This is the second line of the documentation.\n');
writeStream.end('This is the last line of the documentation.\n');

writeStream.on('finish', () => {
    console.log('Finished writing to the file.');
});

writeStream.on('error', (err) => {
    console.error('Error writing to the file:', err);
});
