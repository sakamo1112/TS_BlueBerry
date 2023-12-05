import { readFile } from 'fs/promises';

const p = readFile('data/foo.txt', 'utf-8');

//then, catch, finallyなどのメソッドはPromiseオブジェクトを返す.
const p2 = p.then((data) => data + data);

//新しく作られたPromiseオブジェクトに対してthenメソッドを呼び出すことができる.
p2.then((data) => {
    console.log(data);
});

//pがrejectedになった場合、解決されたPromiseオブジェクトp３を返す.
//このとき、p3はrejectedにならずresolvedになる.=>Promiseの失敗を成功に変換することができる.
const p3 = p.catch(() => '');
p3.then((result) => {
    console.log(result);
});

//こんな感じでまとめて書くこともできる.俗にいうPromiseチェーン.コードが読みやすくなる.
//まずreadFileを呼び出し、失敗の場合は空文字列を結果とする成功に変換し、その結果をコンソールに出力する.
readFile('foo.txt', 'utf-8')
    .finally(() => {
        console.log('foo.txtを読み込めた?');
    })
    .catch(() => '')
    .then((result) => {
        console.log(result);
    });
