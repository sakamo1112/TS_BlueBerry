import { createInterface } from 'readline';
const message = "Hello, World!";
const greeting = "Hello, ";
const target = "World!";
console.log(message);
console.log(greeting + target);
// ;を付けると文のなかでも式文という枠に入る.式文は、与えられた式を実行するだけのもの.
// つまり、返り値を受け取らない.
const str1 = "Hello,";
const str2 = "World!";
console.log(`${str1}${str2}`);
const num1 = 1;
const num2 = 3;
console.log(`${num1} + ${num2} = ${num1 + num2}`);
const no = false;
const yes = true;
console.log(yes, no);
const val1 = null;
const val2 = undefined;
console.log(val1, val2);
const n = null;
const u = undefined;
console.log(n, u);
const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('文字列を入力してください：', (line) => {
    console.log(`${line}が入力されました`);
    rl.close();
});
rl.question('名前：', (name) => {
    console.log(`名前は${name}です`);
    rl.close();
});
rl.question('数値を入力してください：', (num) => {
    console.log(`1000を足すと、${num + 1000}です`);
    rl.close();
});
const num3 = Number(true);
const num4 = Number(false);
console.log(num3);
console.log(num4);
const bigint1 = BigInt("1234");
const bigint2 = BigInt(500);
const bigint3 = BigInt(true);
console.log(bigint1, bigint2, bigint3);
const bigint = BigInt("fooo");
console.log("bigint is", bigint); //NaN
