// 型ガード：ある値に対して特定の型かどうかチェックし、その結果に応じて処理を分けること
type Dog = {
    bow: () => void;
};
type Cat = {
    meow: () => void;
};

const dog: Dog = {
    bow: () => console.log('bow')
};
const cat: Cat = {
    meow: () => console.log("meow")
};

const pet = (pet: Dog | Cat): void => {
    if ("bow" in pet) {
        pet.bow();
    }else {
        pet.meow();
    }
};
