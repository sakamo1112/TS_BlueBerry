"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_1 = require("readline");
var fs_1 = require("fs");
//非同期処理：裏で行われる処理と考えて良さそう.
// 通信やファイルの読み込みなどの処理が非同期処理にあたる.
//ブロッキング処理：処理が終わるまで次の処理に進まない処理.
//非同期処理の場合は、処理が終わる前に次の処理に進むので、ノンブロッキング処理と呼ばれる.
//TypeScriptはシングルスレッド（1つの処理しかできない）なのでプログラムの処理は1つずつしかできない.
//しかし、通信などはNode.jsではなくOSが行っているので、Node.jsは通信の結果を待っているだけ.
var rl = (0, readline_1.createInterface)({
    input: process.stdin,
    output: process.stdout,
});
rl.question('文字列を入力してください\n', function (line) {
    console.log("\u5165\u529B\u3055\u308C\u305F\u6587\u5B57\u5217\u306F".concat(line, "\u3067\u3059"));
    rl.close();
});
setTimeout(function () {
    console.log('3秒経過しました');
}, 3000);
console.log('タイマーを設定しました');
var startTime = performance.now();
(0, fs_1.readFile)('data/foo.txt', 'utf8', function (error, result) {
    console.log('------------------');
    console.log(result);
    console.log('------------------');
    var endTime = performance.now();
    console.log("\u30D5\u30A1\u30A4\u30EB\u8AAD\u307F\u8FBC\u307F\u306B\u304B\u304B\u3063\u305F\u6642\u9593\u306F".concat(endTime - startTime, "\u30DF\u30EA\u79D2\u3067\u3059"));
    console.log('読み込み完了');
});
console.log('読み込み開始');
