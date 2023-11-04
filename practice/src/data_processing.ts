type User = {
    name: string,
    age: number,
    premiumUser: boolean,
};

const data: string = `
uhyo,26,1
John Smith,17,0
Mary Sue,14,1
`;

let users: Array<User> = [];
let data_array = data.split("\n");

for (const user_string of data_array) {
    if (user_string) {
        let user_identity_list = user_string.split(",");
        
        const user_info: User = {
            name: user_identity_list[0],
            age: Number(user_identity_list[1]),
            premiumUser: Boolean(Number(user_identity_list[2])),
        }
        users.push(user_info)
    }
}


for (const user of users) { 
    if(user.premiumUser) {
        console.log(`${user.name}(${user.age})はプレミアムユーザーです。`);
    }else {
        console.log(`${user.name}(${user.age})はプレミアムユーザーではありません。`);
    }
};