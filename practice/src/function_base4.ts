type ObjFunc = (obj: { a: number; b: number; c?: number }) => void;
type NumObj = {
    a: number;
    b: number;
    c: number;
};
const obj_num: NumObj = { a: 1, b: 2, c: 3 };

//objectの分割代入. 引数にobjectの一部を渡す場合に使う
function foo({ a = 1, b = 2 }: { a: number; b: number }) {
    console.log(a, b);
}
//引数を別の名前で受け取りたい場合は以下のようにする
function foo1({ a: x, b: y }: { a: number; b: number }) {
    console.log(x, y);
}

foo(obj_num);

const foo2: ObjFunc = ({ a, b }) => {
    console.log(a, b);
};
const foo3: ObjFunc = ({ a, b, c }) => {
    console.log(a, b, c);
};
foo2(obj_num);
foo3(obj_num);
