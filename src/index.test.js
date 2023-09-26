import * as functions from './index.js'

test("Capitalize Test", () => {
    expect(functions.captalize("string")).toBe("String")
})

test("Reverse String Test", () => {
    expect(functions.reverseString("string")).toBe("gnirts")
})

test("Calculator Test", () => {
    expect(functions.calculator.add(5, 5)).toBe(10)
    expect(functions.calculator.subtract(5, 5)).toBe(0)
    expect(functions.calculator.multiply(5, 5)).toBe(25)
    expect(functions.calculator.divide(5, 5)).toBe(1)
})

test("Caesar Cipher Test", () => {
    expect(functions.caesarCipher("defend")).toBe("efgfoe")
})

 /* test("Analyze Array Test", () => {
    expect(functions.analyzeArray([1, 5, 6, 3, 4])).toBe({average: 3.8, min: 1, max: 6 })
}) */

