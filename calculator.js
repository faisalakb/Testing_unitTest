
class calculator{
    constructor(){
       this.result = 0;

    }
    add(n1,n2) {
        return this.result = n1+n2;
        
    }
    sub(n1,n2) {
        return this.result = n1-n2;
    }
    mul(n1,n2) {
        return this.result = n1*n2;
    }
    div(n1,n2) {
        if(n2===0){
            throw new Error("Cannot divide by zero");
        }
        return this.result = n1/n2;
    }
}

module.exports = calculator;