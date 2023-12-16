// async関数の返り値は必ずPromiseになる.
async function get3(): Promise<number> {
    return 3;
}

console.log('get3を呼び出します。');
const pa = get3();
pa.then((num) => {
    console.log(`num is ${num}`);
});
console.log('get3を呼び出しました。');

async function fail() {
    throw new Error('Og my god!!');
}
const pf = fail();
pf.catch((error) => {
    console.log(error);
});
