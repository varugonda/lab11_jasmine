
describe("Test add() method", function() {
 	var calc;
    //This will be called before running each spec
    beforeEach(function() {
        calc = new Calculator(); //Create a calculator object to call our math operations
    });

    /* 
    *  Example Test Case for Addition Operation
    */
   it("Check addition, two positive values", function() {

        expect( calc.add(1,2) ).toEqual(3);
    }); 

   it("Check addition, two negative values", function() {

        expect( calc.add(-7,-5) ).toEqual(-12);
    }); 
});

/*
* Create a new test suit with two new test cases for sub() method
*/
describe("Test sub() method", function() {
    var calc;
    
    beforeEach(function() {
        calc = new Calculator(); 
    });

    it("Check subtraction, resulting in positive", function() {

        expect( calc.sub(4,2) ).toEqual(2);
    }); 

    it("Check subtraction, resulting in negative", function() {

        expect( calc.sub(2,4) ).toEqual(-2);
    }); 
});

/*
* Create a new test suit with two new test cases for multiply() method
*/
describe("Test multiply() method", function() {
    var calc;
    
    beforeEach(function() {
        calc = new Calculator(); 
    });

    it("Check multiplication, positive and negative", function() {

        expect( calc.multiply(2,-3) ).toEqual(-6);
    }); 

    it("Check multiplication, two negatives", function() {

        expect( calc.multiply(-2,-4) ).toEqual(8);
    }); 
});
/*
* Create a new test suit with two new test cases for divide() method
*/
describe("Test divide() method", function() {
    var calc;
    
    beforeEach(function() {
        calc = new Calculator(); 
    });

    it("Check division, divide to less than 1", function() {

        expect( calc.divide(4,5) ).toEqual(0.8);
    }); 

    it("Check division, divide by negative", function() {

        expect( calc.divide(4,-2) ).toEqual(-2);
    }); 
});