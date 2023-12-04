'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var perf_hooks_1 = require('perf_hooks');
//同期的な処理を中断して非同期処理由来のコードが実行されることはない.
setTimeout(function () {
    console.log('0.1秒経過しました');
}, 100);
console.log('タイマーを設定しました');
var startTime = perf_hooks_1.performance.now();
var count = 0;
while (perf_hooks_1.performance.now() - startTime < 1000) {
    count++;
}
console.log(count);
