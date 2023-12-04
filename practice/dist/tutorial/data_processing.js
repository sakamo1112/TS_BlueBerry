var data = '\nuhyo,26,1\nJohn Smith,17,0\nMary Sue,14,1\n';
var users = [];
var data_array = data.split('\n');
for (var _i = 0, data_array_1 = data_array; _i < data_array_1.length; _i++) {
    var user_string = data_array_1[_i];
    if (user_string) {
        var user_identity_list = user_string.split(',');
        var user_info = {
            name: user_identity_list[0],
            age: Number(user_identity_list[1]),
            premiumUser: Boolean(Number(user_identity_list[2])),
        };
        users.push(user_info);
    }
}
for (var _a = 0, users_1 = users; _a < users_1.length; _a++) {
    var user = users_1[_a];
    if (user.premiumUser) {
        console.log(
            ''
                .concat(user.name, '(')
                .concat(
                    user.age,
                    ')\u306F\u30D7\u30EC\u30DF\u30A2\u30E0\u30E6\u30FC\u30B6\u30FC\u3067\u3059\u3002'
                )
        );
    } else {
        console.log(
            ''
                .concat(user.name, '(')
                .concat(
                    user.age,
                    ')\u306F\u30D7\u30EC\u30DF\u30A2\u30E0\u30E6\u30FC\u30B6\u30FC\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002'
                )
        );
    }
}
