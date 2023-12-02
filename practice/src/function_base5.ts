type UserInfoo = {
    country: string;
    city: string;
    order: number;
};
type ProductInfo = {
    isSale?: boolean;
    withDetails?: boolean;
    freeShipping?: boolean;
};

function findUsers({ country, city, order }: UserInfoo): void {
    console.log(`country: ${country}`);
    console.log(`city: ${city}`);
    console.log(`order: ${order}`);
}

const findProducts = ({
    isSale = false,
    withDetails = false,
    freeShipping = false,
}: ProductInfo): void => {
    console.log(`isSale: ${isSale}`);
    console.log(`withDetails: ${withDetails}`);
    console.log(`freeShipping: ${freeShipping}`);
};

// 分割代入の機能を応用することで、pythonのように引数の順番を気にしなくても良くなる.
// また、引数の一部を省略することもできる.しかもわかりやすい.
findUsers({ country: 'Japan', city: 'Tokyo', order: 1 });
findUsers({ country: 'America', city: 'NewYork', order: 2 });
findUsers({ country: 'Canada', city: 'Vancouver', order: 3 });

// 名前をつけないと何が何だかわからないので、分割代入の形式にして名前をつける.
findProducts({ isSale: true, withDetails: true, freeShipping: true });
findProducts({ isSale: true, withDetails: true, freeShipping: true });
findProducts({ isSale: true, withDetails: true });
findProducts({ isSale: true });
