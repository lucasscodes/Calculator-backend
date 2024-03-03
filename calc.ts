class Calculator {
    n:number;
    constructor(value:number) {
        this.n = value;
    }
    
    add(value:number) {
        this.n += value;
        return this;
    }
    
    subtract(value:number) {
        this.n -= value;
        return this;    
    }
    
    multiply(value:number) {
        this.n *= value;
        return this;        
    }
    
    divide(value:number) {
        if (value === 0) throw new Error("Division by zero is not allowed"); 
        this.n /= value;
        return this;
    }
    
    power(value:number) {
        this.n = Math.pow(this.n, value);
        return this; 
    }
    
    getResult():number {
        return this.n;
    }
}