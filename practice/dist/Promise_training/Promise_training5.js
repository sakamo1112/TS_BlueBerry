'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var promises_1 = require('fs/promises');
//Promiseの静的メソッド2-2 .race
//.raceは最初に解決したPromiseの結果を受け取る（成功か失敗かは関係なく、解決したもの）
//タイムアウト処理に使える
var sleepReject = function (duration) {
    return new Promise(function (resolve, reject) {
        setTimeout(reject, duration);
    });
};
var p = Promise.race([
    (0, promises_1.readFile)('data/foo.txt', 'utf-8').catch(function (error) {
        console.log('data/foo.txt');
        console.log(error);
    }),
    (0, promises_1.readFile)('data/bar.txt', 'utf-8').catch(function (error) {
        console.log('data/bar.txt');
        console.log(error);
    }),
    sleepReject(100),
]);
p.then(
    function (result) {
        console.log(result);
    },
    function (error) {
        console.log('失敗');
        console.log(error);
    }
);
