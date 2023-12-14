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
var repeat10 = function (str) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            return resolve(str.repeat(10));
        }, 1000);
    });
};
// Promiseチェーンを使うことで、コールバック地獄を回避できる.
// 1秒後にファイルを読み込み、失敗した場合は空文字列を結果とする成功に変換し、その結果を10回繰り返す.
(0, promises_1.readFile)('data/foo.txt', 'utf-8')
    .catch(function () {
        return '';
    })
    .then(function (result) {
        return repeat10(result);
    })
    .then(function (result) {
        console.log(result);
    });
// 成功したPromiseを失敗に変換することもできる.
// Promiseにおいて、throw文の使用はPromiseの失敗を意味する.
var pbar = (0, promises_1.readFile)('data/bar.txt', 'utf-8');
var pbar2 = pbar.then(function (result) {
    throw new Error('エラーが発生しました');
});
pbar2.catch(function (error) {
    console.log(error);
});
var SleepReject = function (duration) {
    return new Promise(function (_, reject) {
        setTimeout(reject, duration);
    });
};
// エラーハンドリングがなされていないと、Promiseの失敗時にプログラムが強制終了するので問題.
// タイムアウトと同じレベルのエラー
var pSleep = (0, promises_1.readFile)('data/foo.txt', 'utf-8')
    .then(function () {
        return SleepReject(1000);
    })
    .then(
        function (result) {
            console.log(result);
        },
        function () {
            console.log('失敗しました.');
        }
    );
// モジュールが必要になるまで読み込みたくない場合、dynamic importを使う.
// モジュールをdynamic importすると、Promiseオブジェクトが返される.
// つまり、dynamic inmortを使うと、モジュールの読み込みが非同期になる.
Promise.resolve()
    .then(function () {
        return require('fs/promises');
    })
    .then(function (_a) {
        var readFile = _a.readFile;
        readFile('data/foo.txt', 'utf-8');
    })
    .then(function (result) {
        console.log(result);
    })
    .catch(function () {
        console.log('import failed.');
    });
