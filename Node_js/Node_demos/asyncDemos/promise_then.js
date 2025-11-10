const fs = require('fs').promises;

// Original using .then() chaining

// fs.readFile('file1.txt', 'utf8')

// .then(data1 => fs.readFile('file2.txt', 'utf8').then(data2 => ({ data1, data2 })))

// .then(({ data1, data2 }) => fs.readFile('file3.txt', 'utf8').then(data3 => ({ data1, data2, data3 })))

// .then(({ data1, data2, data3 }) => {console.log(data1, data2, data3);})
// .catch(err => console.error('Error reading files:', err));


// Refactored using async/await

// import fs from 'fs/promises';

async function readFiles() {
    try {
        const data1 = await fs.readFile('file1.txt', 'utf8');
        const data2 = await fs.readFile('file2.txt', 'utf8');
        const data3 = await fs.readFile('file3.txt', 'utf8');
        console.log(data1, data2, data3);
    } catch (err) {
        console.error('Error reading files:', err);
    }
}

readFiles();