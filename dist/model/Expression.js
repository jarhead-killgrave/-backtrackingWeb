"use strict";
var Expression = (function () {
    function Expression(operateur, x, y) {
        this._solution = undefined;
        this._operateur = operateur;
        this._x = x > y ? x : y;
        this._y = x > y ? y : x;
        this._solution = eval("".concat(this._x, " ").concat(this._operateur, " ").concat(this._y));
    }
    Expression.prototype.toString = function () {
        return "".concat(this._x, " ").concat(this._operateur, " ").concat(this._y, " = ").concat(this._solution);
    };
    Expression.prototype.evaluate = function () {
        return this._solution;
    };
    Expression.prototype.equal = function (expression) {
        return this.toString() == expression.toString();
    };
    return Expression;
}());
//# sourceMappingURL=Expression.js.map