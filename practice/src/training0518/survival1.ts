type IncrementFunc = (x: number) => number;

const increment: IncrementFunc = (x) => x + 1;
console.log(increment(5));