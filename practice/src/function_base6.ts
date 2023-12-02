// 型ガード：ある値に対して特定の型かどうかチェックし、その結果に応じて処理を分けること
type Dog = {
    bow: () => void;
};
type Cat = {
    meow: () => void;
};

const dog: Dog = {
    bow: () => console.log('bow'),
};
const cat: Cat = {
    meow: () => console.log('meow'),
};

const pet = (pet: Dog | Cat): void => {
    if ('bow' in pet) {
        pet.bow();
    } else {
        pet.meow();
    }
};

// コールバック関数
type Greet = (name: string) => string;
type GreetFamily = (func: Greet, name?: string) => void;

const greetNewUser: GreetFamily = (func, name = 'ご新規さん') =>
    console.log(func(name));
const hello: Greet = (name) => `こんにちは、${name}さん`;
const goodmorning: Greet = (name) => `おはようございます、${name}さん`;

greetNewUser(hello);
greetNewUser(goodmorning, '山田太郎');

//map関数はコールバック関数を受けとる
const name_list: string[] = ['山田太郎', '山田花子', '山田次郎'];
console.log(name_list.map((name) => `こんにちは、${name}さん`));

//オーバーロード関数
// 引数の型や個数が異なる関数を同じ名前で定義すること
//関数の型が違うだけであればUnionを使えばいいが、値によって返り値が変わる場合はオーバーロード関数を使う.
type GreetHelloType = (name: string | string[]) => void;
//function greetHello(name: string): void; //関数シグネチャ1
//function greetHello(name: string[]): void; //関数シグネチャ2

//全ての関数シグネチャを網羅する実装
const greetHello: GreetHelloType = (name) =>{
    if (typeof name === "string") {
        console.log(`こんにちは、${name}さん`);
    }else {
        console.log(`こんにちは、${name.join("さん、")}さん`);
    }
}

//関数シグネチャ 詳しい順に書く
function func(param: 1 | 2): 1 | 2; // 詳しい関数
function func(param: number): number; // そこそこ詳しい関数
function func(param: any): any; // 詳しくない関数

//全ての関数シグネチャを網羅する実装
function func(param: any): any {
    if (param in [1, 2]) {
        return param;
    }else if (typeof param === "number") {
        return param + 1000;
    }else {
        return 'others';
    }
};
const result1 = func(1);
const result2 = func(100);
const result3 = func("その他");
console.log(result1, result2, result3);


//typeを使った実装
type Func2 = {
    (param: 1 | 2): 1 | 2, // 詳しい関数
    (param: number): number, // そこそこ詳しい関数
    (param: any): any, // 詳しくない関数
};
const func2: Func2 = (param) => {
    if (param in [1, 2]) {
        return param;
    }else if (typeof param === "number") {
        return param + 1000;
    }else {
        return 'others';
    }
}
const result4 = func2(1);
const result5 = func2(100);
const result6 = func2("その他");
console.log(result4, result5, result6);
