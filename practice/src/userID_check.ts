import {createInterface} from "readline"

const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
});

type UserPlan = {
    name: string,
    plan: boolean,
};
type UserList = {
    [index: number]: UserPlan,
};
const user_list: UserList = {
    1: { name: "takahashi",plan: false },
    2: { name: "sato", plan: true },
    3: { name: "ohsato", plan: true },
    4: { name: "nara", plan: false },
};
const user_list_a: UserList = {
    ...user_list,
    5: {name: "morikawa", plan: false},
    6: {name: "kanzaki", plan: false},
};
const user_list_b: UserList = {
    ...user_list,
    ...user_list_a,
    7: {name: "hasegawa", plan: false},
    8: {name: "sakura", plan: false},
};

rl.question('会員IDを入力してください :', (input) => {
    const num = Number(input);
    const isUser: boolean = (num > 0 && num < Object.keys(user_list_b).length)
    const user = {
        name: isUser ? user_list_b[num].name : "",
        age: 20,
    };
    if (user.name) { 
        console.log(`あなたの名前は${user.name}です。`);
        if (user_list_b[num].plan === true) {
            console.log("いつもご利用ありがとうございます！")
        }else if (user_list_b[num].plan === false) {
            console.log("会員登録よろしくお願いします！")
        }
    } else { 
        console.log("存在しないIDです。")
    }
    rl.close()
});