"use strict";


class AllOperatorState extends AbstractState<number>{

    private _operator : String
    constructor(entree : number[], state? : AllOperatorState, operator?: String){
        super(entree, state ?? null);
        this._operator = operator ?? "";
    }

    generateStates(): State[] {
        let states: State[] = [];
        if (this._dimension >= 2){
            for (let operator of ["+", "-", "*"]){
                let tab : number[] = Array.from(this._entree.slice(2));
                tab.unshift(Math.abs(eval(`${this._entree[0]} ${operator} ${this._entree[1]}`)));
                let state = new AllOperatorState(tab, this, operator);
                states.push(state);
            }
        }
        return states;

    }
    evaluate(): number {
        return this._entree[0]

    }

    printPath(): string {
        if (this._etatPere == null) return "";
        let x = this._etatPere.getEntree()[0];
        let y = this._etatPere.getEntree()[1];
        if(x > y) {
            if (this._etatPere.getEtatPere() == null) return `(${this._etatPere.getEntree()[0]} ${this._operator} ${this._etatPere.getEntree()[1]})`;
        return `(${this._etatPere.printPath()} ${this._operator} ${this._etatPere.getEntree()[1]})`;
        }
        if (this._etatPere.getEtatPere() == null) return `(${this._etatPere.getEntree()[1]} ${this._operator} ${this._etatPere.getEntree()[0]})`;
        return `(${this._etatPere.getEntree()[1]} ${this._operator} ${this._etatPere.printPath()})`;
    }




}