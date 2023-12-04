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
//Promiseの静的メソッド3 .allSettled .any
//.allSettledは全てのPromiseの結果を受け取る.したがって、全部終わるまで.thenは呼ばれない.
var p_settled = Promise.allSettled([
    (0, promises_1.readFile)('foo.txt', 'utf-8'),
    sleepReject(5000).catch(function (error) {
        console.log('5秒経過');
    }),
]);
p_settled.then(function (results) {
    console.log('---allSettled---');
    console.log('--results[0]--');
    console.log(results[0].status);
    console.log('--results[1]--');
    console.log(results[1].status);
});
//.anyは最初に解決したPromiseの結果を受け取る.es2021から？
/*const p_any = Promise.any([
    readFile('foo.txt', 'utf-8'),
    sleepReject(5000),
]);
p.then((result) => {
    console.log('---any---')
    console.log(result);
});*/
