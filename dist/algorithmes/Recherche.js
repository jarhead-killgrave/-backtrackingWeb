"use strict";
var Recherche = (function () {
    function Recherche() {
    }
    Recherche.prototype.resolution = function (etatInitiale, objectifValeur) {
        this._etatMax = this.parcours(etatInitiale, objectifValeur);
        return this._etatMax;
    };
    Recherche.prototype.parcours = function (etatInitiale, objectifValeur) {
        var noeudLibre = [];
        var result = etatInitiale;
        var hamming = Math.abs(result.evaluate() - objectifValeur);
        var noeudGenere = [];
        noeudLibre.push(etatInitiale);
        var succes = etatInitiale.evaluate() == objectifValeur;
        var temps = Date.now();
        while ((Date.now() - temps) < 41000 && noeudLibre.length != 0 && !succes) {
            var premierNoeud = noeudLibre.shift();
            noeudGenere = (premierNoeud.generateStates());
            for (var _i = 0, noeudGenere_1 = noeudGenere; _i < noeudGenere_1.length; _i++) {
                var state_1 = noeudGenere_1[_i];
                var newHamming = Math.abs(state_1.evaluate() - objectifValeur);
                if (newHamming == 0) {
                    succes = true;
                    state_1.setObjectif(true);
                    result = state_1;
                    break;
                }
                else if (newHamming < hamming) {
                    result = state_1;
                    hamming = Math.abs(state_1.evaluate() - objectifValeur);
                    noeudLibre.unshift(state_1);
                }
                else {
                    noeudLibre.push(state_1);
                }
            }
        }
        return result;
    };
    return Recherche;
}());
//# sourceMappingURL=Recherche.js.map