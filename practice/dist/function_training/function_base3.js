var Male = /** @class */ (function () {
    function Male(name) {
        this.name = name;
    }
    Male.prototype.toString = function () {
        return "Monsieur ".concat(this.name);
    };
    return Male;
}());
var Female = /** @class */ (function () {
    function Female(name) {
        this.name = name;
    }
    Female.prototype.toString = function () {
        return "Madame ".concat(this.name);
    };
    return Female;
}());
var male = new Male("John");
var female = new Female("Jane");
console.log(male.toString()); // "Monsieur John"
console.log(female.toString()); // "Madame Jane"
var maleToStr = function () { return male.toString(); };
var femaleToStr = function () { return female.toString(); }; //意図しないメソッドの持ち出しでエラーを出して欲しいんだけどなぁ
console.log(maleToStr()); // "Monsieur John"
console.log(femaleToStr()); // "Madame Jane"
