import plus from "../src/app";

test("proof", () =>{
    const pr = 3;
    expect(plus(pr)).toBe(9);
})