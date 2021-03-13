let fs = require('fs');
let a = fs.readFileSync('input.txt', 'utf-8').split(' ');
fs.writeFileSync('output.txt', a[0]*1+a[1]*1);
