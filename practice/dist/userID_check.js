"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline_1 = require("readline");
var rl = (0, readline_1.createInterface)({
    input: process.stdin,
    output: process.stdout,
});
var user_list = {
    1: { name: "takahashi", plan: false },
    2: { name: "sato", plan: true },
    3: { name: "ohsato", plan: true },
    4: { name: "nara", plan: false },
};
var user_list_a = __assign(__assign({}, user_list), { 5: { name: "morikawa", plan: false }, 6: { name: "kanzaki", plan: false } });
var user_list_b = __assign(__assign(__assign({}, user_list), user_list_a), { 7: { name: "hasegawa", plan: false }, 8: { name: "sakura", plan: false } });
rl.question('会員IDを入力してください :', function (input) {
    var num = Number(input);
    var isUser = (num > 0 && num < Object.keys(user_list_b).length);
    var user = {
        name: isUser ? user_list_b[num].name : "",
        age: 20,
    };
    if (user.name) {
        console.log("\u3042\u306A\u305F\u306E\u540D\u524D\u306F".concat(user.name, "\u3067\u3059\u3002"));
        if (user_list_b[num].plan === true) {
            console.log("いつもご利用ありがとうございます！");
        }
        else if (user_list_b[num].plan === false) {
            console.log("会員登録よろしくお願いします！");
        }
    }
    else {
        console.log("存在しないIDです。");
    }
    rl.close();
});
