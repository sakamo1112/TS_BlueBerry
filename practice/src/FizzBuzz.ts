let result: string = '';

for (let i: number = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
        result += 'FizzBuzz ';
    } else if (i % 3 === 0) {
        console.log('Fizz');
        result += 'Fizz ';
    } else if (i % 5 === 0) {
        console.log('Buzz');
        result += 'Buzz ';
    } else {
        console.log(i);
        result += String(i) + ' ';
    }
}
console.log(result);
