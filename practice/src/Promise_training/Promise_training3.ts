//自分でPromiseオブジェクトをつくる.
//Array<T>とPromise<T>の違い
/*
Array<T>: 
これは、同じ型Tの要素の集合を表します。
Tは任意の型を表すことができます。
例えば、Array<number>は数値の配列を、Array<string>は文字列の配列を表します。

Promise<T>: 
これは、非同期操作の結果を表すオブジェクトです。
Tは非同期操作の結果の型を表します。
例えば、Promise<number>は数値を返す非同期操作を、Promise<string>は文字列を返す非同期操作を表します。
 */

/*
resolveはPromiseのコンストラクタ内で定義されるコールバック関数で、
非同期操作が成功したときに呼び出されます。
この関数は、Promiseが成功したときに生成される値
（つまり、Promiseが解決されたときの値）を引数として受け取ります。

resolve()関数を呼び出すと、Promiseは"fulfilled"（解決済み）状態になり、
その結果は.then()メソッドで取得できます。

例えば、以下のコードでは、resolve関数は100を引数として受け取り、
Promiseはこの値で解決されます。その後、.then()メソッドを使用して解決された値を取得できます。 
*/
const p = new Promise<number>((resolve) => {
    setTimeout(() => {
        resolve(100);  // Promiseを解決し、値100を返す
    }, 3000);
});

p.then((num) => {
    console.log(`結果は${num}`);
});

const sleep = (duration: number) => {
    return new Promise<void>((resolve) => {
        setTimeout(resolve, duration); //duration[ms]後にresolveを呼び出す関数
    });
};

const sleepReject = (duration: number) => {
    return new Promise<never>((resolve, reject) => { //決して成功しないのでnever型
        setTimeout(reject, duration);                //duration[ms]後にrejectを呼び出す関数
    });
};
sleep(3000).then(() => {
    console.log('3秒経過しました');
    sleepReject(3000).catch(() => {
        console.log('エラーが発生しました');
    });
    console.log('sleepRejectを呼び出しています')
});