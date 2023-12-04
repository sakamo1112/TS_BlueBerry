//Promiseの静的メソッド1 .resolve .reject
//同じ挙動
const p1_1 = Promise.resolve(1); //即座に成功するPromiseを作成
const p1_2 = new Promise<number>((resolve) => {
    resolve(100);
});
p1_1.then((result) => {
    console.log('成功', result);
});
p1_2.then((result) => {
    console.log('成功', result);
});

//同じ挙動
const p2_1 = Promise.reject(1); //即座に失敗するPromiseを作成
const p2_2 = new Promise<number>((resolve, reject) => {
    reject(100);
});
p2_1.catch((result) => {
    console.log('失敗', result);
});
p2_2.catch((result) => {
    console.log('失敗', result);
});

//Promiseの静的メソッド2 .all .race
//全てのPromiseが成功した時に成功となるPromiseを作成
import { readFile } from 'fs/promises';

const pfoo = readFile('data/foo.txt', 'utf-8').catch((error) => {
    console.log('data/foo.txt');
    console.log(error);
}); //Promiseを作成. pfooはPromiseオブジェクト
const pbar = readFile('data/bar.txt', 'utf-8').catch((error) => {
    console.log('data/bar.txt');
    console.log(error);
});
const pbaz = readFile('data/baz.txt', 'utf-8').catch((error) => {
    console.log('data/baz.txt');
    console.log(error);
});

const p = Promise.all([pfoo, pbar]); //全てのPromiseが成功した時に成功となるPromiseを作成
//pの結果は成功時の結果が同じ順番で入った配列
pfoo.then((result) => {
    console.log('data/foo.txt\n');
    console.log(result);
});

p.then((results) => {
    console.log('data/foo.txt\n', results[0]);
    console.log('data/bar.txt\n', results[1]);
});

//シンプルな書き方
//Promise.allの引数にPromiseを直接書く
const p_simple = Promise.all([
    readFile('data/foo.txt', 'utf-8').catch((error) => {
        console.log('data/foo.txt');
        console.log(error);
    }),
    readFile('data/bar.txt', 'utf-8').catch((error) => {
        console.log('data/bar.txt');
        console.log(error);
    }),
]);

//結果を受け取る部分で分割代入しちゃう
p_simple.then(([foo, bar]) => {
    console.log('data/foo.txt\n', foo);
    console.log('data/bar.txt\n', bar);
});
