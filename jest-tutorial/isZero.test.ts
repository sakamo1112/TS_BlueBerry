import { isZero } from "./isZero";

test("0を渡したらTrueになること", () => {
    const result = isZero(0);
    expect(result).toBe(true);
});

test("1を渡したらFalseになること", () => {
    const result = isZero(1);
    expect(result).toBe(false);
});