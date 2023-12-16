// async関数の返り値は必ずPromiseになる.
async function get3(): Promise<number> {
    return 3;
}

const pa = get3();
pa.then((num) => {
    //console.log(`num is ${num}`);
});

async function fail() {
    throw new Error('Og my god!!');
}
const pf = fail();
pf.catch((error) => {
    //console.log(error);
});

type tySL = (duration: number) => Promise<void>;
const sleep1: tySL = (duration) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    });
};

// async関数の型アノテーション
// await : 与えられたPromiseの結果が出るまで待つ.
type G3 = () => Promise<number>; // async関数の型を定義する際は、返り値をPromiseにする必要がある.
const get3_1: G3 = async () => {
    console.log('get3_1が呼び出されました.');
    await sleep1(1000);
    console.log('awaitの次に進みました.');
    return 3;
};

const pg3_1 = get3_1();
console.log('get3_1を呼び出します.');
pg3_1.then((num) => {
    console.log(`num is ${num}`);
});
console.log('get3_1を呼び出しました.');

const main: G3 = async () => {
    const num1 = await get3_1();
    const num2 = await get3_1();
    const num3 = await get3_1();
    return num1 + num2 + num3;
};

main().then((num) => {
    console.log(`num is ${num}`);
});

const ReadWrite = async (): Promise<void> => {
    try {
        const { readFile, writeFile } = await import('fs/promises');
        const readdata = await readFile('data/foo.txt', 'utf-8');
        await writeFile('data/bar.txt', readdata + readdata);
    } catch {
        console.error('ファイルの読み書きに失敗しました.');
        throw new Error('ファイルの読み書きに失敗しました.');
    }
};

console.log('ReadWriteを呼び出します.');
ReadWrite().then(() => {
    console.log('書き込みに成功しました.');
});
console.log('ReadWriteを呼び出しました.');
