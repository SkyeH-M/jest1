/**
* @jest-environment jsdom
 */

// added 2 dots before calc because calc.js is in the directory above our test file
const { TestScheduler } = require("jest");
const addition = require("../calc");

describe("Calculator", () => {
    describe("Addition function", () => {
        test("should return 42 for 20 + 22", () => {
            expect(addition(20, 22)).toBe(42);
        })
        test("should return 4 for 2 + 2", () => {
            expect(addition(2, 2)).toBe(4);
        })
    });
    describe("Subtraction function", () => {
        
    });
    describe("Multiplication function", () => {

    });
    describe("Division function", () => {

    });
})
