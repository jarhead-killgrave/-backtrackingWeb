"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var StateExpression = (function (_super) {
    __extends(StateExpression, _super);
    function StateExpression(entree, etat, expression) {
        var _this = _super.call(this, entree, etat) || this;
        _this._expression = expression;
        return _this;
    }
    StateExpression.prototype.generateStates = function () {
        var result = [];
        var inutile;
        for (var i = 0; i < this._dimension; i++) {
            var tmpTab = __spreadArray([], this._entree, true);
            inutile = tmpTab.splice(0, i);
            for (var j = 1; j < tmpTab.length; j++) {
                for (var _i = 0, _a = ["+", "-", "*", "/"]; _i < _a.length; _i++) {
                    var operateur = _a[_i];
                    var newTab = __spreadArray([], tmpTab, true);
                    var expression = new Expression(operateur, this._entree[i], tmpTab[j]);
                    var val = expression.evaluate();
                    if (val != 0 &&
                        Number.isInteger(val) &&
                        val != Math.max(this._entree[i], tmpTab[j])) {
                        newTab.splice(j, 1);
                        newTab.splice(0, 1);
                        newTab.push.apply(newTab, inutile);
                        newTab.push(expression.evaluate());
                        result.push(new StateExpression(newTab, this, expression));
                    }
                }
            }
            inutile = null;
        }
        return result.reduce(function (r, i) { return (!r.some(function (j) { return i.equal(j); }) ? __spreadArray(__spreadArray([], r, true), [i], false) : r); }, []);
    };
    StateExpression.prototype.evaluate = function () {
        return this._expression.evaluate();
    };
    StateExpression.prototype.equal = function (state) {
        return _super.prototype.equal.call(this, state);
    };
    StateExpression.prototype.toString = function () {
        return this._expression.toString();
    };
    StateExpression.prototype.printPath = function () {
        if (this._etatPere == null)
            return "";
        return this._etatPere.printPath() + "\n" + this.toString();
    };
    return StateExpression;
}(AbstractState));
//# sourceMappingURL=StateExpression.js.map