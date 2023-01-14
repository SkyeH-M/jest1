/**
 * @jest-environment jsdom
 */

// import button from source file:
const { TestScheduler } = require("jest");
const buttonClick = require("../button");

// add piece of html you want to test, e.g the paragraph with id par
beforeEach( () => {
   // document.body.innerHTML = "<p id='par'></p>";
   // below is how to test the entire index.html file
   let fs = require("fs");
   let fileContents = fs.readFileSync("index.html", "utf-8");
   document.open();
   document.write(fileContents);
   document.close();
});

describe("DOM tests", () => {
    test("expects p content to change", () => {
        // call the buttonClick func to be able to test it in mock DOM
        buttonClick();
        // check the content of the mock DOM paragraph to see if it's what we expect
        expect(document.getElementById("par").innerHTML).toEqual("You Clicked");
    });
    test("h1 should exist", () => {
        expect(document.getElementsByTagName("h1").length).toBe(1);
    });
});

