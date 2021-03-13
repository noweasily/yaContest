let fs = require('fs');

let args = fs.readFileSync('input.txt', 'utf-8');

args = args.split(' ');
let r = args[0]*1+args[1]*1;

fs.writeFileSync('output.txt', String(r));
