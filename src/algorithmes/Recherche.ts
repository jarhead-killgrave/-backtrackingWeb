"use strict";

/**
 * Classe permettant d'implementer une recherche en largeur ou
 * en profondeur
 *
 * @author Jkgrave
 * @version 1.0.0
 */

class Recherche {

  /**
   * Le plus grand etat atteint
   */
  private _etatMax: State;




  /**
   *  Construit une nouvelle instance de Recherce
   * @param dfs
   */
  constructor() {

  }

  resolution(etatInitiale: State, objectifValeur: number): State {
    this._etatMax = this.parcours(etatInitiale, objectifValeur)
    return this._etatMax
    }
    
  
  parcours(etatInitiale: State, objectifValeur: number): State{
    let noeudLibre: State [] = [];
    let result = etatInitiale;
    let hamming: number = Math.abs(result.evaluate() - objectifValeur);
    let noeudGenere: State [] = [];
    noeudLibre.push(etatInitiale);
    let succes: boolean = etatInitiale.evaluate() == objectifValeur;
    let temps = Date.now()
    while ((Date.now() - temps) < 41000 && noeudLibre.length != 0 && !succes) {
      let premierNoeud: State = noeudLibre.shift();
      noeudGenere = (premierNoeud.generateStates());
      
      for (let state of noeudGenere) {
        let newHamming = Math.abs(state.evaluate() - objectifValeur)
        if (newHamming == 0) {
          succes = true;
          state.setObjectif(true);
          result = state;
          break
        } else if (newHamming < hamming) {
          result = state;
          hamming = Math.abs(state.evaluate() - objectifValeur);
          noeudLibre.unshift(state);
        }
        else {
            noeudLibre.push(state);

        }
      }

    }

    return result;
  }

  
}
