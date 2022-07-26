"use strict";
var Recherche = (function () {
    function Recherche(dfs) {
        this._dfs = dfs !== null && dfs !== void 0 ? dfs : false;
    }
    Recherche.prototype.resolution = function (etatInitiale, objectifValeur) {
        var noeudLibre = new ArrayList();
        var noeudVisite = new ArrayList();
        this._etatMax = etatInitiale;
        var noeudGenere = new ArrayList();
        noeudLibre.push(etatInitiale);
        var succes = etatInitiale.evaluate() == objectifValeur;
        while (noeudLibre.length() != 0 && !succes) {
            var premierNoeud = noeudLibre.shift();
            noeudVisite.push(premierNoeud);
            noeudGenere = new ArrayList(premierNoeud.generateStates());
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
//# sourceMappingURL=Recherche.js.map