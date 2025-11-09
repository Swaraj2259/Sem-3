// Assignment 5: built in module os

// print architecture, platform, no.of cpu cores, cpu info, system uptime

const os = require('os');

console.log('Architecture:', os.arch());
console.log('Platform:', os.platform());
console.log('Number of CPU cores:', os.cpus().length);
console.log('CPU Info:', os.cpus());
console.log('System Uptime (seconds):', os.uptime());
