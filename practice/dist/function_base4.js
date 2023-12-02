//objectの分割代入. 引数にobjectの一部を渡す場合に使う
function foo(_a) {
    var a = _a.a, b = _a.b;
    console.log(a, b);
}
//引数を別の名前で受け取りたい場合は以下のようにする
function foo1(_a) {
    var x = _a.a, y = _a.b;
    console.log(x, y);
}
var obj_num = { a: 1, b: 2, c: 3 };
foo(obj_num);
var foo2 = function (_a) {
    var a = _a.a, b = _a.b;
    console.log(a, b);
};
var foo3 = function (_a) {
    var a = _a.a, b = _a.b, c = _a.c;
    console.log(a, b, c);
};
foo2(obj_num);
foo3(obj_num);
