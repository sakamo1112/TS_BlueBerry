import { readFile } from 'fs/promises';

const p = readFile('data/foo.txt', 'utf-8');

//then, catch, finallyなどのメソッドはPromiseオブジェクトを返す.
const p2 = p.then((data) => data + data);

//新しく作られたPromiseオブジェクトに対してthenメソッドを呼び出すことができる.
p2.then((data) => {
    console.log(data);
});

//pがrejectedになった場合、解決されたPromiseオブジェクトp３を返す.
//このとき、p3はrejectedにならずresolvedになる.=>Promiseの失敗を成功に変換することができる.
const p3 = p.catch(() => '');
p3.then((result) => {
    console.log(result);
});

//こんな感じでまとめて書くこともできる.俗にいうPromiseチェーン.コードが読みやすくなる.
//まずreadFileを呼び出し、失敗の場合は空文字列を結果とする成功に変換し、その結果をコンソールに出力する.
readFile('foo.txt', 'utf-8')
    .finally(() => {
        console.log('foo.txtを読み込めた?');
    })
    .catch(() => '')
    .then((result) => {
        console.log(result);
    });

// 1秒後に入力した値を10回繰り返す処理
type Rep10 = (str: string) => Promise<string>;
const repeat10: Rep10 = (str) =>
    new Promise<string>((resolve) => {
        setTimeout(() => resolve(str.repeat(10)), 1000);
    });

// Promiseチェーンを使うことで、コールバック地獄を回避できる.
// 1秒後にファイルを読み込み、失敗した場合は空文字列を結果とする成功に変換し、その結果を10回繰り返す.
readFile('data/foo.txt', 'utf-8')
    .catch(() => '')
    .then((result) => repeat10(result))
    .then((result) => {
        console.log(result);
    });

// 成功したPromiseを失敗に変換することもできる.
// Promiseにおいて、throw文の使用はPromiseの失敗を意味する.
const pbar = readFile('data/bar.txt', 'utf-8');
const pbar2 = pbar.then((result) => {
    throw new Error('エラーが発生しました');
});
pbar2.catch((error) => {
    console.log(error);
});

const SleepReject = (duration: number) => {
    return new Promise<never>((_, reject) => {
        setTimeout(reject, duration);
    });
};

// エラーハンドリングがなされていないと、Promiseの失敗時にプログラムが強制終了するので問題.
// タイムアウトと同じレベルのエラー
const pSleep = readFile('data/foo.txt', 'utf-8')
    .then(() => SleepReject(1000))
    .then(
        (result) => {
            console.log(result);
        },
        () => {
            console.log('失敗しました.');
        }
    );

// モジュールが必要になるまで読み込みたくない場合、dynamic importを使う.
// モジュールをdynamic importすると、Promiseオブジェクトが返される.
// つまり、dynamic inmortを使うと、モジュールの読み込みが非同期になる.
import('fs/promises')
    .then(({ readFile }) => {
        readFile('data/foo.txt', 'utf-8');
    })
    .then((result) => {
        console.log(result);
    })
    .catch(() => {
        console.log('import failed.');
    });
