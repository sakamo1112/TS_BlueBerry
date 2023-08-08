const message: string = "Hello, World!";
const greeting: string = "Hello, ";
const target: string = "World!";

console.log(message);
console.log(greeting + target);

// ;を付けると文のなかでも式文という枠に入る.式文は、与えられた式を実行するだけのもの.
// つまり、返り値を受け取らない.
const i: number = 11;
if (i < 10){
    console.log(i)
}else{
    console.log(i + 10)
}