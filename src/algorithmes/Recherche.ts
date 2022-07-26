"use strict"

import { ArrayList } from "../model/ArrayList";
import { State } from "../model/State";

/**
 * Classe permettant d'implementer une recherche en largeur ou
 * en profondeur 
 * 
 * @author Jkgrave
 * @version 1.0.0
 */

export class Recherche{

    /**
     * Booleen indiquant si la recherche doit s'effectuer en largeur ou profondeur
     */
    private _dfs : boolean;

    /** 
     * Le plus grand etat atteint
    */
   private _etatMax : State;

    /**
     *  Construit une nouvelle instance de Recherce
     * @param dfs 
     */
    constructor(dfs?: boolean){
        this._dfs = dfs ?? false;
    }

    resolution(etatInitiale : State, objectifValeur : number) : State {
        let noeudLibre : ArrayList<State> = new ArrayList<State>();
        let noeudVisite : ArrayList<State> = new ArrayList<State>();
        this._etatMax = etatInitiale;
        let noeudGenere : ArrayList<State> = new ArrayList<State>();
        noeudLibre.push(etatInitiale);
        let succes : boolean = etatInitiale.evaluate() == objectifValeur;

        while (noeudLibre.length() != 0 && !succes){
            let premierNoeud : State = noeudLibre.shift();
            noeudVisite.push(premierNoeud);
            noeudGenere = new ArrayList<State>(premierNoeud.generateStates());

            for(let i = 0; i < noeudGenere.length() && !succes; i++){
                let state : State = noeudGenere._liste[i];
                if(state.evaluate() == objectifValeur){
                    succes = true;
                    state.setObjectif(true);
                    this._etatMax = state;
                }
            }

            noeudLibre.addAll(noeudGenere._liste);
        }

        return this._etatMax;

    }



}