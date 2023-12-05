'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var promises_1 = require('fs/promises');
var p = (0, promises_1.readFile)('data/foo.txt', 'utf-8');
//then, catch, finallyなどのメソッドはPromiseオブジェクトを返す.
var p2 = p.then(function (data) {
    return data + data;
});
//新しく作られたPromiseオブジェクトに対してthenメソッドを呼び出すことができる.
p2.then(function (data) {
    console.log(data);
});
//pがrejectedになった場合、解決されたPromiseオブジェクトp３を返す.
//このとき、p3はrejectedにならずresolvedになる.=>Promiseの失敗を成功に変換することができる.
var p3 = p.catch(function () {
    return '';
});
p3.then(function (result) {
    console.log(result);
});
//こんな感じでまとめて書くこともできる.俗にいうPromiseチェーン.コードが読みやすくなる.
//まずreadFileを呼び出し、失敗の場合は空文字列を結果とする成功に変換し、その結果をコンソールに出力する.
(0, promises_1.readFile)('foo.txt', 'utf-8')
    .finally(function () {
        console.log('foo.txtを読み込めた?');
    })
    .catch(function () {
        return '';
    })
    .then(function (result) {
        console.log(result);
    });
