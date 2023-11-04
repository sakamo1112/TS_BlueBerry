import {createInterface} from "readline";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
});

type Animal = {
    age: number,
};
type Human = {
    age: number,
    name: string,
};
// HumanはAnimalの部分型

type AnimalFamily = {
    familyName: string,
    mother: Animal,
    father: Animal,
    child: Animal,
};
type HumanFamily = {
    familyName: string,
    mother: Human,
    father: Human,
    child: Human,
};

type User = {
    name: string,
    age: number,
};
const u: User = {
    name: "uyko",
    age: 26,
};
const obj_user = {
    name: "ukyo",
    age: 26,
    telnum: 90020940,
};
const u_a: User = obj_user;

type UserA<T>  = {
    name: string,
    child: T,
};
type FamilyA<Parent = Human, Child = Human, Pet = Animal> = {
    mother: Parent,
    father: Parent,
    child: Child,
    pet: Pet
};
const family_a: FamilyA<Human, Human, Animal> = {
    mother: {age: 48, name: "kayoko"},
    father: {age: 47, name: "kenichi"},
    child: {age: 21, name: "sakamo"},
    pet: {age: 5},
};

type Family_specified = FamilyA<Human, Human, Animal>;
const family_b: Family_specified = {
    mother: {age: 50, name: "satoko"},
    father: {age: 50, name: "masato"},
    child: {age: 21, name: "koki"},
    pet: {age: 3},
};

const family_c: FamilyA = {
    mother: {age: 30, name: "aoi"},
    father: {age: 29, name: "satoru"},
    child: {age: 4, name: "kaito"},
    pet: {age: 12},
};

const array: readonly number[] = [1, 2, 3, 4];
console.log(array)
for (const element of array) { 
    console.log(element)
};
const array2: readonly number[] = [...array, 5, 6, 7];
for (const element of array2) { 
    console.log(element)
}

const bool_array: readonly boolean[] = [true, false, true, true];
console.log(bool_array[0], bool_array[3])

// T[]とArray<T>は同じ意味
type Arr = Array<{age: number, name: string}>
const arr: Arr = [
    {age: 20, name: "sakamo"},
    {age: 21, name: "honoka"},
    {age: 22, name: "kotaro"},
];
console.log(arr);
arr.push({age: 23, name: "koki"});
console.log(arr);
if (arr.includes({age: 20, name: "sakamo"})) { 
    console.log("sakamoはいます。");
};
console.log(arr.length)
