class Male {
    private name: string;

    public constructor(name: string) {
        this.name = name;
    }

    public toString(): string {
        return `Monsieur ${this.name}`;
    }
}

class Female {
    private name: string;

    public constructor(name: string) {
        this.name = name;
    }

    public toString(this: Female): string {
        return `Madame ${this.name}`;
    }
}

const male: Male = new Male("John");
const female: Female = new Female("Jane");
console.log(male.toString()); // "Monsieur John"
console.log(female.toString()); // "Madame Jane"

const maleToStr: () => string = () => male.toString();
const femaleToStr: () => string = () => female.toString(); //意図しないメソッドの持ち出しでエラーを出して欲しいんだけどなぁ

console.log(maleToStr()); // "Monsieur John"
console.log(femaleToStr()); // "Madame Jane"