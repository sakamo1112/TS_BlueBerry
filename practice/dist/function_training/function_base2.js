var extract_max_value = function (array) {
    var max_value = 0;
    console.log(array);
    max_value = Math.max.apply(Math, array);
    return max_value;
};
var array_num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(extract_max_value(array_num));
