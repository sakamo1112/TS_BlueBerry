var __rest =
    (this && this.__rest) ||
    function (s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === 'function')
            for (
                var i = 0, p = Object.getOwnPropertySymbols(s);
                i < p.length;
                i++
            ) {
                if (
                    e.indexOf(p[i]) < 0 &&
                    Object.prototype.propertyIsEnumerable.call(s, p[i])
                )
                    t[p[i]] = s[p[i]];
            }
        return t;
    };
var tuple = ['sakamo', 20];
console.log(tuple[0], tuple[1]);
var obj = {
    age: 20,
    name: 'sakamo',
    info: {
        plan: true,
    },
    list: [1, 2, 3, 4, 5],
};
var Age = obj.age,
    Name = obj.name,
    Plan = obj.info.plan,
    restobj = __rest(obj, ['age', 'name', 'info']);
console.log('Age: '.concat(Age, ', Name: ').concat(Name));
console.log(restobj);
if (Plan === true) {
    console.log('課金ユーザーです。');
} else {
    console.log('無課金ユーザーです。');
}
var _a = obj.list,
    first = _a[0],
    second = _a[1],
    third = _a[2],
    fifth = _a[4];
console.log(first, second, third, fifth);
var _b = obj.list,
    First = _b[0],
    restObj = _b.slice(1);
console.log(First, restObj);
