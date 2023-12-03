import { readFile } from 'fs/promises';

//Promiseの解決：Promiseの結果が決まること
//Promiseオブジェクトの解決には、状態が2種類->「fulfilled」（成功）と「rejected」（失敗）がある.
//Promiseが成功：.then()メソッド内のコールバック関数が呼び出される.
//Promiseが失敗：.catch()メソッド内のコールバック関数が呼び出される.

//pはPromiseオブジェクト
const p = readFile('data/foo.txt', 'utf-8');
p.then((result) => {
    console.log('1');
});
p.then((result) => {
    console.log('2');
});
p.then((result) => {
    console.log('3');
});

//書き方1
p.then((data) => {
    console.log('成功', data);
});
//エラーハンドリング catchの引数にはunknownの型注釈をつけておく.anyで返ってきてしまう.
p.catch((error: unknown) => {
    console.log('失敗', error);
});
//finallyは成功でも失敗でも呼び出される.
p.finally(() => {
    console.log('終わりました');
});

//書き方2  thenに引数2つを渡すことによってもエラーハンドリングができる.
p.then(
    (data) => {
        console.log('成功', data);
    },
    (error) => {
        console.log('失敗', error);
    }
);
