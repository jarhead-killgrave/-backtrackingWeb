"use strict";

import { AbstractState } from "./AbstractState";
import { State } from "./State";

/**
 * Classe representant un etat permettant de modeliser un probleme lié à une addition
 * 
 * @author Jkgrave
 * @version 1.0
 */

export class StateAddition extends AbstractState<number>{
    
    /**
     * La solution actuellement trouve
     */
    private _solution: Int32Array;

    constructor(entree : number[], etat : AbstractState<number>, solution?: Int32Array){
        super(entree, etat);
        this._solution = solution ?? new Int32Array(this._dimension);
    }

    clone = () : StateAddition => new StateAddition(this._entree, this._etatPere, this._solution.slice());
    
    generateStates(): State[] {
        let result : StateAddition[] = [];
        for(let i = 0; i < this._dimension; i++) {
            if(this._solution[i] == 0 ){
                let state : StateAddition = this.clone()
                state._solution[i] = 1;
                result.push(state);
            }
        }
        return result;
    }
    evaluate(): number {
        let result : number = 0;
        for(let i = 0; i < this._dimension; i++) {
            result += this._entree[i] * this._solution[i];
        }
        return result;
    }

    
}