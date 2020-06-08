const assert = require("assert");
const Math = require("../src/math.js");
const expect = require("chai").expect;

let value = 0;

describe("Math class", function() {
    //Hooks
    beforeEach(function() {
        value = 0;
    });

    it("Add two numbers", function(done) { //it's not recommended to use arrow functions
        this.timeout(3000);

        value = 5;

        const math = new Math();
        math.add(value, 5, (value) => {
            expect(value).to.equal(10);
            done();
        });
    });

    it("Sum two numbers", function() {
        //const math = new Math();
        //expect(math.sum(value, 5)).to.equal(5);
        
        const obj = {
            name: "Emily Strauss"
        }
        const obj2 = {
            name: "Emily Strauss"
        }
        
        //expect(obj).to.have.property("name");
        //expect(obj).to.have.property("name").equal("Emily Strauss");
        expect(obj).to.deep.equal(obj2);
    });

    /*
    it("Multiply two numbers"); //pending
    */

    /*
    it.only("Subtract two numbers", function() {
        const math = new Math();
        assert.equal(math.subtract(5, 5), 0);
    });
    */

    /*
    it.skip("Divide two numbers", function() {
        const math = new Math();
        assert.equal(math.divide(5, 5), 1);
    });
    */
});