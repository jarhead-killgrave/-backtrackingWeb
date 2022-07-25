"use strict"

import { State } from "./State";

/**
 * Classe representant de façon abstraite un etat du probleme à resoudre
 * 
 * @author Jkgrave
 * @version 1.0.0
 */
export abstract class AbstractState<T> implements State{

    /**
     * Les entrees du model
     */
    protected _entree: T[];

    /**
     * La dimension du model
     */
    protected _dimension: number;

    /**
     * Boolean indiquant si l'etat est un objectif
     */
    protected _objectif : boolean = false;

    /**
     * L'etat père de l'etat courant
     */
    protected _etatPere: AbstractState<T>;

    constructor(entree: T[], etat: AbstractState<T>){
        this._entree = entree;
        this._dimension = entree.length;
        this._etatPere = etat;
    }

    /**
     * Retourne les entrees de l'etat
     * @return {T[]}
     */
    getEntree = () : T[] => this._entree;

    /**
     * Retourne la dimension du model
     */
    getDimension = () : number => this._dimension;

    /**
     * Retourne l'etat pere courant
     * @return {AbstractState<T>}
     */
    getEtatPere = () : AbstractState<T> => this._etatPere;

    /**
     * Vérifie si l'etat est un objectif
     * @return {boolean}
     */
    estObjectif = () : boolean => this._objectif;

    /**
     * Met à jour l'objectif
     * @param {boolean} objectif
     */
    setObjectif(objectif : boolean) : void {
        this._objectif = objectif;
    }

    printPath(): string {
        let result : string = "" + this;
        let etatPere : AbstractState<T> = this._etatPere;
        while (etatPere != null){
            result += "\n";
            result += this;
        }
        return result;
    }

    abstract generateStates(): State[];
    abstract evaluate(): number;
    
}