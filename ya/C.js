const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('', (numbers) => {
    numbers = numbers.split(' ');
    console.log(numbers[0]*1+numbers[1]*1);
    rl.close();
});
