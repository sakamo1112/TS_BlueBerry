import { createInterface } from 'readline';
import { readFile } from 'fs';
//非同期処理：裏で行われる処理と考えて良さそう.
// 通信やファイルの読み込みなどの処理が非同期処理にあたる.
//ブロッキング処理：処理が終わるまで次の処理に進まない処理.
//非同期処理の場合は、処理が終わる前に次の処理に進むので、ノンブロッキング処理と呼ばれる.

//TypeScriptはシングルスレッド（1つの処理しかできない）なのでプログラムの処理は1つずつしかできない.
//しかし、通信などはNode.jsではなくOSが行っているので、Node.jsは通信の結果を待っているだけ.

const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('文字列を入力してください\n', (line) => {
    console.log(`入力された文字列は${line}です`);
    rl.close();
});

setTimeout(() => {
    console.log('3秒経過しました');
}, 3000);
console.log('タイマーを設定しました');

const startTime = performance.now();
readFile('data/foo.txt', 'utf8', (error, result) => {
    console.log('------------------');
    console.log(result);
    console.log('------------------');
    const endTime = performance.now();
    console.log(
        `ファイル読み込みにかかった時間は${endTime - startTime}ミリ秒です`
    );
    console.log('読み込み完了');
});
console.log('読み込み開始');
