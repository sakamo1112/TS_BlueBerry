import {createInterface} from 'readline';

function askQuestion(query: string) {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => 
        rl.question(query, ans => {
            rl.close();
            resolve(ans);
        }))

}

async function main() {
    const name = await askQuestion('名前：');
    console.log(`名前は${name}です。`);
    const num = await askQuestion('数値を入力して下さい：');
    console.log(`${num}に1000を足した値は${Number(num) + 1000}です。`);
}

main();