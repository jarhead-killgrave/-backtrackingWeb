(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.AbstractState = void 0;
    var AbstractState = (function () {
        function AbstractState(entree, etat) {
            var _this = this;
            this._objectif = false;
            this.getEntree = function () { return _this._entree; };
            this.getDimension = function () { return _this._dimension; };
            this.getEtatPere = function () { return _this._etatPere; };
            this.estObjectif = function () { return _this._objectif; };
            this._entree = entree;
            this._dimension = entree.length;
            this._etatPere = etat;
        }
        AbstractState.prototype.setObjectif = function (objectif) {
            this._objectif = objectif;
        };
        AbstractState.prototype.printPath = function () {
            var result = "" + this;
            var etatPere = this._etatPere;
            while (etatPere != null) {
                result += "\n";
                result += this;
            }
            return result;
        };
        AbstractState.prototype.equal = function (state) {
            var okDimension = state._dimension === this._dimension;
            var okEntre = this._entree.every(function (value, index) { return value === state._entree[index]; });
            return true;
        };
        return AbstractState;
    }());
    exports.AbstractState = AbstractState;
});
//# sourceMappingURL=AbstractState.js.map