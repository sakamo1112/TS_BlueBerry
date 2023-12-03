type plus_arr = (array: number[]) => number;
type ret_idx = (array: number[]) => number;
type plus_num = (num: number) => number;
type Plus_num = typeof plus2;

//関数宣言と関数式の大きな違いは、「巻き上げ」ができがかどうかの違い
//関数宣言は巻き上げができるが、関数式は巻き上げができない.

function plus_array(array: number[]): number {
    let sum: number = 0;
    for (let i: number = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
const plus_array1: plus_arr = (array) => {
    let sum: number = 0;
    for (let i: number = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
};
const return_idx2: ret_idx = (array) => array[2];

const plus2: plus_num = (num) => num + 2;

const array: number[] = [1, 2, 3, 4, 5];
const array1: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(plus_array(array));
console.log(plus_array(array1));
console.log(plus_array1(array));
console.log(plus_array1(array1));
console.log(return_idx2(array));
console.log(return_idx2(array1));
