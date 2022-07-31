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
var AllOperatorState = (function (_super) {
    __extends(AllOperatorState, _super);
    function AllOperatorState(entree, state, operator) {
        var _this = _super.call(this, entree, state !== null && state !== void 0 ? state : null) || this;
        _this._operator = operator !== null && operator !== void 0 ? operator : "";
        return _this;
    }
    AllOperatorState.prototype.generateStates = function () {
        var states = [];
        if (this._dimension >= 2) {
            for (var _i = 0, _a = ["+", "-", "*"]; _i < _a.length; _i++) {
                var operator = _a[_i];
                var tab_1 = Array.from(this._entree.slice(2));
                tab_1.unshift(Math.abs(eval("".concat(this._entree[0], " ").concat(operator, " ").concat(this._entree[1]))));
                var state_1 = new AllOperatorState(tab_1, this, operator);
                states.push(state_1);
            }
        }
        return states;
    };
    AllOperatorState.prototype.evaluate = function () {
        return this._entree[0];
    };
    AllOperatorState.prototype.printPath = function () {
        if (this._etatPere == null)
            return "";
        var x = this._etatPere.getEntree()[0];
        var y = this._etatPere.getEntree()[1];
        if (x > y) {
            if (this._etatPere.getEtatPere() == null)
                return "(".concat(this._etatPere.getEntree()[0], " ").concat(this._operator, " ").concat(this._etatPere.getEntree()[1], ")");
            return "(".concat(this._etatPere.printPath(), " ").concat(this._operator, " ").concat(this._etatPere.getEntree()[1], ")");
        }
        if (this._etatPere.getEtatPere() == null)
            return "(".concat(this._etatPere.getEntree()[1], " ").concat(this._operator, " ").concat(this._etatPere.getEntree()[0], ")");
        return "(".concat(this._etatPere.getEntree()[1], " ").concat(this._operator, " ").concat(this._etatPere.printPath(), ")");
    };
    return AllOperatorState;
}(AbstractState));
//# sourceMappingURL=AllOperatorState.js.map