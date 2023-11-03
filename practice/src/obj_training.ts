import {createInterface} from "readline";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
});

const obj = {
    foo: 123,
    var: "sakamo",
};
console.log(obj.foo);
console.log(obj.var);
const obj1 = {
    foo: 555,
    var: "sakamo",
};
const obj2 = {
    "foo": 123,
    "↑↓": "sakamo",
};
console.log(obj2["foo"])
console.log(obj2["↑↓"])

const MyName: string = "sakamo";
const obj3 = {
    1: "ichiban",
    2: "niban",
    3.5: "santengoban",
    [MyName]: "geogeoman",
};
console.log(obj3["1"], obj3["2"], obj3["3.5"], obj3["sakamo"])


