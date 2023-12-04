var dog = {
    bow: function () {
        return console.log('bow');
    },
};
var cat = {
    meow: function () {
        return console.log('meow');
    },
};
var pet = function (pet) {
    if ('bow' in pet) {
        pet.bow();
    } else {
        pet.meow();
    }
};
var greetNewUser = function (func, name) {
    if (name === void 0) {
        name = 'ご新規さん';
    }
    return console.log(func(name));
};
var hello = function (name) {
    return '\u3053\u3093\u306B\u3061\u306F\u3001'.concat(name, '\u3055\u3093');
};
var goodmorning = function (name) {
    return '\u304A\u306F\u3088\u3046\u3054\u3056\u3044\u307E\u3059\u3001'.concat(
        name,
        '\u3055\u3093'
    );
};
greetNewUser(hello);
greetNewUser(goodmorning, '山田太郎');
//map関数はコールバック関数を受けとる
var name_list = ['山田太郎', '山田花子', '山田次郎'];
console.log(
    name_list.map(function (name) {
        return '\u3053\u3093\u306B\u3061\u306F\u3001'.concat(
            name,
            '\u3055\u3093'
        );
    })
);
//function greetHello(name: string): void; //関数シグネチャ1
//function greetHello(name: string[]): void; //関数シグネチャ2
//全ての関数シグネチャを網羅する実装
var greetHello = function (name) {
    if (typeof name === 'string') {
        console.log(
            '\u3053\u3093\u306B\u3061\u306F\u3001'.concat(name, '\u3055\u3093')
        );
    } else {
        console.log(
            '\u3053\u3093\u306B\u3061\u306F\u3001'.concat(
                name.join('さん、'),
                '\u3055\u3093'
            )
        );
    }
};
//全ての関数シグネチャを網羅する実装
function func(param) {
    if (param in [1, 2]) {
        return param;
    } else if (typeof param === 'number') {
        return param + 1000;
    } else {
        return 'others';
    }
}
var result1 = func(1);
var result2 = func(100);
var result3 = func('その他');
console.log(result1, result2, result3);
var func2 = function (param) {
    if (param in [1, 2]) {
        return param;
    } else if (typeof param === 'number') {
        return param + 1000;
    } else {
        return 'others';
    }
};
var result4 = func2(1);
var result5 = func2(100);
var result6 = func2('その他');
console.log(result4, result5, result6);
