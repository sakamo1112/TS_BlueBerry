//関数宣言と関数式の大きな違いは、「巻き上げ」ができがかどうかの違い
//関数宣言は巻き上げができるが、関数式は巻き上げができない.
function plus_array(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
var plus_array1 = function (array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
};
var return_idx2 = function (array) {
    return array[2];
};
var plus2 = function (num) {
    return num + 2;
};
var array = [1, 2, 3, 4, 5];
var array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(plus_array(array));
console.log(plus_array(array1));
console.log(plus_array1(array));
console.log(plus_array1(array1));
console.log(return_idx2(array));
console.log(return_idx2(array1));
