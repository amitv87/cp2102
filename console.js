const CP2102 = require('./index.js');
const readline = require('readline');
var if_idx = process.argv[2] || 0;
const connection = new CP2102(0x10c4, 0xea70, {baudRate : 115200, idx: Number(if_idx)});
connection.on('data', process.stdout.write.bind(process.stdout));
readline.createInterface({input: process.stdin}).on('line', line => connection.write(line + '\r\n'));
