// 適当な配列を生成し、その配列の中から最大値を取り出して返す
type ExMaxValue = (array: number[]) => number;
const extract_max_value: ExMaxValue = array => {
    let max_value = 0;
    console.log(array);
    max_value = Math.max(...array);
    return max_value;

}

const array_num: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(extract_max_value(array_num));