const CP2102 = require('./index.js');
const readline = require('readline');
const connection = new CP2102(0x10c4, 0xea70, {baudRate : 921600});
connection.on('data', process.stdout.write.bind(process.stdout));
readline.createInterface({input: process.stdin}).on('line', line => connection.write(line + '\r\n'));
