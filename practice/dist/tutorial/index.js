'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var readline_1 = require('readline');
var message = 'Hello, World!';
var greeting = 'Hello, ';
var target = 'World!';
console.log(message);
console.log(greeting + target);
// ;を付けると文のなかでも式文という枠に入る.式文は、与えられた式を実行するだけのもの.
// つまり、返り値を受け取らない.
var str1 = 'Hello,';
var str2 = 'World!';
console.log(''.concat(str1).concat(str2));
var num1 = 1;
var num2 = 3;
console.log(
    ''
        .concat(num1, ' + ')
        .concat(num2, ' = ')
        .concat(num1 + num2)
);
var no = false;
var yes = true;
console.log(yes, no);
var val1 = null;
var val2 = undefined;
console.log(val1, val2);
var n = null;
var u = undefined;
console.log(n, u);
var rl = (0, readline_1.createInterface)({
    input: process.stdin,
    output: process.stdout,
});
rl.question('文字列を入力してください：', function (line) {
    console.log(
        ''.concat(line, '\u304C\u5165\u529B\u3055\u308C\u307E\u3057\u305F')
    );
    rl.question('名前：', function (name) {
        console.log('\u540D\u524D\u306F'.concat(name, '\u3067\u3059'));
        rl.question('数値を入力してください：', function (num) {
            console.log(
                '1000\u3092\u8DB3\u3059\u3068'.concat(
                    Number(num) + 1000,
                    '\u3067\u3059\u3002'
                )
            );
            rl.close();
        });
    });
});
// rl.question('名前：', (name) => {
//     console.log(`名前は${name}です`);
//     rl.close();
// });
// rl.question('数値を入力してください：', (num) => {
//     console.log(`1000を足すと、${num + 1000}です`);
//     rl.close();
// });
var num3 = Number(true);
var num4 = Number(false);
console.log(num3);
console.log(num4);
var bigint1 = BigInt('1234');
var bigint2 = BigInt(500);
var bigint3 = BigInt(true);
console.log(bigint1, bigint2, bigint3);
//const bigint = BigInt("fooo");
//console.log("bigint is", bigint); //NaN
