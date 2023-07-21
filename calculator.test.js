const assert = require('assert')
const cal=require('./calculator.js');
describe('UnitTesting',function(){
    it("check addition",function(){
        const calculation =new cal();
        // Test case 1
        assert(calculation.add(4,5)===9);
        // Test case 2
        assert(calculation.add(1,1)===2);
        // Test case 3
        assert(calculation.add(0,0)===0);
    })
    it("Check subtraction",function(){
        const calculation =new cal();
        // Test case 1
        assert(calculation.sub(4,5)===-1);
        // Test case 2
        assert(calculation.sub(7,4)===3);
        // Test case 3
        assert(calculation.sub(1,1)===0);
    })
    it("Check Multiplication",function(){
        const calculation =new cal();
        // Test case 1
        assert(calculation.mul(4,5)===20);
        // Test case 2
        assert(calculation.mul(7,0)===0);
        // Test case 3
        assert(calculation.mul(4,-3)===-12);
    })
    it("Check Division",function(){
        const calculation =new cal();
        // Test case 1
        assert(calculation.div(6,2)===3);
        // Test case 2
        assert(calculation.div(9,3)===3);
        // Test case 3
        assert(calculation.div(1,1)===1);
    });
});