"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline_1 = require("readline");
var rl = (0, readline_1.createInterface)({
    input: process.stdin,
    output: process.stdout,
});
var u = {
    name: "uyko",
    age: 26,
};
var obj_user = {
    name: "ukyo",
    age: 26,
    telnum: 90020940,
};
var u_a = obj_user;
var family_a = {
    mother: { age: 48, name: "kayoko" },
    father: { age: 47, name: "kenichi" },
    child: { age: 21, name: "sakamo" },
    pet: { age: 5 },
};
var family_b = {
    mother: { age: 50, name: "satoko" },
    father: { age: 50, name: "masato" },
    child: { age: 21, name: "koki" },
    pet: { age: 3 },
};
var family_c = {
    mother: { age: 30, name: "aoi" },
    father: { age: 29, name: "satoru" },
    child: { age: 4, name: "kaito" },
    pet: { age: 12 },
};
var array = [1, 2, 3, 4];
console.log(array);
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var element = array_1[_i];
    console.log(element);
}
;
var array2 = __spreadArray(__spreadArray([], array, true), [5, 6, 7], false);
for (var _a = 0, array2_1 = array2; _a < array2_1.length; _a++) {
    var element = array2_1[_a];
    console.log(element);
}
var bool_array = [true, false, true, true];
console.log(bool_array[0], bool_array[3]);
var arr = [
    { age: 20, name: "sakamo" },
    { age: 21, name: "honoka" },
    { age: 22, name: "kotaro" },
];
console.log(arr);
arr.push({ age: 23, name: "koki" });
console.log(arr);
if (arr.includes({ age: 20, name: "sakamo" })) {
    console.log("sakamoはいます。");
}
;
console.log(arr.length);
