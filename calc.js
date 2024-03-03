var Calculator = /** @class */ (function () {
    function Calculator(value) {
        this.n = value;
    }
    Calculator.prototype.add = function (value) {
        this.n += value;
        return this;
    };
    Calculator.prototype.subtract = function (value) {
        this.n -= value;
        return this;
    };
    Calculator.prototype.multiply = function (value) {
        this.n *= value;
        return this;
    };
    Calculator.prototype.divide = function (value) {
        if (value === 0)
            throw new Error("Division by zero is not allowed");
        this.n /= value;
        return this;
    };
    Calculator.prototype.power = function (value) {
        this.n = Math.pow(this.n, value);
        return this;
    };
    Calculator.prototype.getResult = function () {
        return this.n;
    };
    return Calculator;
}());
