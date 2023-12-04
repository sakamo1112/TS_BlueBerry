'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
//Promiseの静的メソッド1 .resolve .reject
//同じ挙動
var p1_1 = Promise.resolve(1); //即座に成功するPromiseを作成
var p1_2 = new Promise(function (resolve) {
    resolve(100);
});
p1_1.then(function (result) {
    console.log('成功', result);
});
p1_2.then(function (result) {
    console.log('成功', result);
});
//同じ挙動
var p2_1 = Promise.reject(1); //即座に失敗するPromiseを作成
var p2_2 = new Promise(function (resolve, reject) {
    reject(100);
});
p2_1.catch(function (result) {
    console.log('失敗', result);
});
p2_2.catch(function (result) {
    console.log('失敗', result);
});
//Promiseの静的メソッド2 .all
//全てのPromiseが成功した時に成功となるPromiseを作成
var promises_1 = require('fs/promises');
var pfoo = (0, promises_1.readFile)('data/foo.txt', 'utf-8').catch(function (
    error
) {
    console.log('data/foo.txt');
    console.log(error);
}); //Promiseを作成. pfooはPromiseオブジェクト
var pbar = (0, promises_1.readFile)('data/bar.txt', 'utf-8').catch(function (
    error
) {
    console.log('data/bar.txt');
    console.log(error);
});
var pbaz = (0, promises_1.readFile)('data/baz.txt', 'utf-8').catch(function (
    error
) {
    console.log('data/baz.txt');
    console.log(error);
});
var p = Promise.all([pfoo, pbar]); //全てのPromiseが成功した時に成功となるPromiseを作成
//pの結果は成功時の結果が同じ順番で入った配列
pfoo.then(function (result) {
    console.log('data/foo.txt\n');
    console.log(result);
});
p.then(function (results) {
    console.log('data/foo.txt\n', results[0]);
    console.log('data/bar.txt\n', results[1]);
});
//シンプルな書き方
//Promise.allの引数にPromiseを直接書く
var p_simple = Promise.all([
    (0, promises_1.readFile)('data/foo.txt', 'utf-8').catch(function (error) {
        console.log('data/foo.txt');
        console.log(error);
    }),
    (0, promises_1.readFile)('data/bar.txt', 'utf-8').catch(function (error) {
        console.log('data/bar.txt');
        console.log(error);
    }),
]);
//結果を受け取る部分で分割代入しちゃう
p_simple.then(function (_a) {
    var foo = _a[0],
        bar = _a[1];
    console.log('data/foo.txt\n', foo);
    console.log('data/bar.txt\n', bar);
});
