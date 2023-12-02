function findUsers(_a) {
    var country = _a.country,
        city = _a.city,
        order = _a.order;
    console.log('country: '.concat(country));
    console.log('city: '.concat(city));
    console.log('order: '.concat(order));
}
var findProducts = function (_a) {
    var _b = _a.isSale,
        isSale = _b === void 0 ? false : _b,
        _c = _a.withDetails,
        withDetails = _c === void 0 ? false : _c,
        _d = _a.freeShipping,
        freeShipping = _d === void 0 ? false : _d;
    console.log('isSale: '.concat(isSale));
    console.log('withDetails: '.concat(withDetails));
    console.log('freeShipping: '.concat(freeShipping));
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
