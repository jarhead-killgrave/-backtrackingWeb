(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../model/ArrayList"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.Recherche = void 0;
    var ArrayList_1 = require("../model/ArrayList");
    var Recherche = (function () {
        function Recherche(dfs) {
            this._dfs = dfs !== null && dfs !== void 0 ? dfs : false;
        }
        Recherche.prototype.resolution = function (etatInitiale, objectifValeur) {
            var noeudLibre = new ArrayList_1.ArrayList();
            var noeudVisite = new ArrayList_1.ArrayList();
            this._etatMax = etatInitiale;
            var noeudGenere = new ArrayList_1.ArrayList();
            noeudLibre.push(etatInitiale);
            var succes = etatInitiale.evaluate() == objectifValeur;
            while (noeudLibre.length() != 0 && !succes) {
                var premierNoeud = noeudLibre.shift();
                noeudVisite.push(premierNoeud);
                noeudGenere = new ArrayList_1.ArrayList(premierNoeud.generateStates());
                for (var i = 0; i < noeudGenere.length() && !succes; i++) {
                    var state = noeudGenere._liste[i];
                    if (state.evaluate() == objectifValeur) {
                        succes = true;
                        state.setObjectif(true);
                        this._etatMax = state;
                    }
                }
                noeudLibre.addAll(noeudGenere._liste);
            }
            return this._etatMax;
        };
        return Recherche;
    }());
    exports.Recherche = Recherche;
});
//# sourceMappingURL=Recherche.js.map