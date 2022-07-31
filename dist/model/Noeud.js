"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Noeud = (function () {
    function Noeud(operateur, filsGauche, filsDroit, valeur) {
        var _this = this;
        this.getFilsDroite = function () { return _this._filsDroite; };
        this.getFilsGauche = function () { return _this._filsGauche; };
        this.setFilsDroite = function (noeud) { _this._filsDroite = noeud; };
        this.setFilsGauche = function (noeud) { _this._filsGauche = noeud; };
        this._operateur = operateur;
        this._filsGauche = filsGauche;
        this._filsDroite = filsDroit;
        this._valeur = valeur !== null && valeur !== void 0 ? valeur : undefined;
    }
    Noeud.prototype.getValeur = function () {
        if (this._valeur === undefined) {
            this._valeur = eval(this.toString());
        }
        return this._valeur;
    };
    Noeud.prototype.toString = function () {
        if (this._operateur == "") {
            return "".concat(this.getValeur());
        }
        if (this._filsGauche.getValeur() > this._filsDroite.getValeur()) {
            return "(".concat(this._filsGauche.toString(), " ").concat(this._operateur, " ").concat(this._filsDroite.toString(), ")");
        }
        return "(".concat(this._filsDroite.toString(), " ").concat(this._operateur, " ").concat(this._filsGauche.toString(), ")");
    };
    Noeud.generateAllNoeud = function (array) {
        var result = [];
        if (array.length == 1) {
            result.push(new Noeud("", null, null, array[0]));
        }
        else if (array.length == 2) {
            result.push(new Noeud("", null, null, array[0]));
            result.push(new Noeud("", null, null, array[1]));
            for (var _i = 0, _a = ["+", "*", "-"]; _i < _a.length; _i++) {
                var operateur = _a[_i];
                result.push(new Noeud(operateur, new Noeud("", null, null, array[0]), new Noeud("", null, null, array[1])));
            }
        }
        else if (array.length > 2) {
            for (var i = 0; i < array.length; i++) {
                var tab_1 = __spreadArray([], array, true);
                tab_1.splice(i, 1);
                var tabNoeud = Noeud.generateAllNoeud(tab_1);
                for (var _b = 0, tabNoeud_1 = tabNoeud; _b < tabNoeud_1.length; _b++) {
                    var element = tabNoeud_1[_b];
                    for (var _c = 0, _d = ["+", "*", "-"]; _c < _d.length; _c++) {
                        var operateur = _d[_c];
                        result.push(new Noeud(operateur, new Noeud("", null, null, array[i]), element));
                    }
                }
            }
        }
        return result;
    };
    Noeud.prototype.clone = function () {
        var gauche = this._filsGauche == null ? null : this._filsGauche.clone();
        var droite = this._filsDroite == null ? null : this._filsDroite.clone();
        return new Noeud(this._operateur.slice(), gauche, droite, this._valeur);
    };
    return Noeud;
}());
//# sourceMappingURL=Noeud.js.map