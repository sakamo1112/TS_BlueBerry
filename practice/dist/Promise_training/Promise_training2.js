"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promises_1 = require("fs/promises");
//Promiseの解決：Promiseの結果が決まること
//Promiseオブジェクトの解決には、状態が2種類->「fulfilled」（成功）と「rejected」（失敗）がある.
//Promiseが成功：.then()メソッド内のコールバック関数が呼び出される.
//Promiseが失敗：.catch()メソッド内のコールバック関数が呼び出される.
//pはPromiseオブジェクト
var p = (0, promises_1.readFile)('data/foo.txt', 'utf-8');
p.then(function (result) {
    console.log('1');
});
p.then(function (result) {
    console.log('2');
});
p.then(function (result) {
    console.log('3');
});
//書き方1
p.then(function (data) {
    console.log('成功', data);
});
//エラーハンドリング catchの引数にはunknownの型注釈をつけておく.anyで返ってきてしまう.
p.catch(function (error) {
    console.log('失敗', error);
});
//finallyは成功でも失敗でも呼び出される.
p.finally(function () {
    console.log('終わりました');
});
//書き方2  thenに引数2つを渡すことによってもエラーハンドリングができる.
p.then(function (data) {
    console.log('成功', data);
}, function (error) {
    console.log('失敗', error);
});
