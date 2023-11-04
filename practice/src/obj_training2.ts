let tuple: [string, number] = ["sakamo", 20];
console.log(tuple[0], tuple[1]);

type UserInfo = {
    age: number,
    name: string,
    info: {
        plan: boolean
    },
    list: number[],
};
const obj: UserInfo = {
    age: 20,
    name: "sakamo",
    info: {
        plan: true
    },
    list: [1, 2, 3, 4, 5],
};

const {age: Age, name: Name, info: {plan: Plan}, ...restobj} = obj;
console.log(`Age: ${Age}, Name: ${Name}`);
console.log(restobj)

if (Plan === true) {
    console.log("課金ユーザーです。");
} else {
    console.log("無課金ユーザーです。");
};
const {list: [first, second, third,,fifth]} = obj;
console.log(first, second, third, fifth)

const {list: [First, ...restObj]} = obj;
console.log(First, restObj)