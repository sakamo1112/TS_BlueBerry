import { createInterface } from 'readline';
import { readFile } from 'fs';
import { performance } from 'perf_hooks';

//同期的な処理を中断して非同期処理由来のコードが実行されることはない.
setTimeout(() => {
    console.log('0.1秒経過しました');
}, 100);
console.log('タイマーを設定しました');

const startTime = performance.now();
let count = 0;
while (performance.now() - startTime < 1000) {
    count++;
}
console.log(count); //1秒後にしか出ないはずの結果であるが、この後に「0.1秒経過しました」が出力される.
