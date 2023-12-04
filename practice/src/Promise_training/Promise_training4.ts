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
