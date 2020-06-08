const assert = require("assert");
const Math = require("../src/math.js");

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
            assert.equal(value, 10);
            done();
        });
    });

    it("Sum two numbers", function() {
        const math = new Math();
        assert.equal(math.sum(value, 5), 5);
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