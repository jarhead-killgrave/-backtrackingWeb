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
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./AbstractState"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.StateAddition = void 0;
    var AbstractState_1 = require("./AbstractState");
    var StateAddition = (function (_super) {
        __extends(StateAddition, _super);
        function StateAddition(entree, etat, solution) {
            var _this = _super.call(this, entree, etat) || this;
            _this.clone = function () { return new StateAddition(_this._entree, _this._etatPere, _this._solution.slice()); };
            _this._solution = solution !== null && solution !== void 0 ? solution : new Int32Array(_this._dimension);
            return _this;
        }
        StateAddition.prototype.generateStates = function () {
            var result = [];
            for (var i = 0; i < this._dimension; i++) {
                if (this._solution[i] == 0) {
                    var state = this.clone();
                    state._solution[i] = 1;
                    result.push(state);
                }
            }
            return result;
        };
        StateAddition.prototype.evaluate = function () {
            var result = 0;
            return result;
        };
        return StateAddition;
    }(AbstractState_1.AbstractState));
    exports.StateAddition = StateAddition;
});
//# sourceMappingURL=StateAddition.js.map