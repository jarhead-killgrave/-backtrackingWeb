"use strict";


/**
 * Classe representant un noeud d'un arbre binaire
 * Dans notre cas un noeud est une operation arithmetic 
 * 
 * @author JKgrave
 * @version 1.0.0
 */
class Noeud{

    /**
     * L'operateur arithmetic de l'expression (+, -, *, /) ou "" pour une feuille
     */
    private _operateur : String;

    /**
     * La valeur du noeud
     */
    private _valeur : number;

    /**
     * L'expression à gauche
     */
    private _filsGauche : Noeud;

    /**
     * L'expression à droite
     */
    private _filsDroite : Noeud;


    /**
     * Construit une nouvelle instance d'un noeud
     */
    constructor(operateur : String, filsGauche : Noeud, filsDroit : Noeud, valeur?: number){
        this._operateur = operateur;
        this._filsGauche = filsGauche;
        this._filsDroite = filsDroit;
        this._valeur = valeur ?? undefined;
    }

    getValeur() : number {
        if (this._valeur === undefined){
            this._valeur =eval(this.toString());
        }
        return this._valeur;
    }

    getFilsDroite = () : Noeud => this._filsDroite

    getFilsGauche = () : Noeud => this._filsGauche

    setFilsDroite = (noeud : Noeud) : void => {this._filsDroite = noeud};

    setFilsGauche = (noeud : Noeud) : void => {this._filsGauche = noeud};

    toString() : string {
        if(this._operateur == ""){
            return `${this.getValeur()}`
        }
        if (this._filsGauche.getValeur() > this._filsDroite.getValeur()){
            return `(${this._filsGauche.toString()} ${this._operateur} ${this._filsDroite.toString()})`
        }
        return `(${this._filsDroite.toString()} ${this._operateur} ${this._filsGauche.toString()})`
    }

    static generateAllNoeud(array: number[]) : Noeud[]{
        let result : Noeud[] = [];
        if(array.length == 1){
            result.push(new Noeud("", null, null, array[0]));
        }else if (array.length == 2){
            result.push(new Noeud("", null, null, array[0]))
            result.push(new Noeud("", null, null, array[1]))
            for(let operateur  of ["+", "*", "-"]){
                result.push(new Noeud(operateur, new Noeud("", null, null, array[0]), new Noeud("", null, null, array[1])))
            }
        }
        else if (array.length > 2){
            for(let i = 0; i < array.length; i++){
                let tab : number[] = [...array]
                tab.splice(i, 1)
                let tabNoeud : Noeud[] = Noeud.generateAllNoeud(tab);
                for(let element of tabNoeud){
                    for(let operateur  of ["+", "*", "-"]){
                        result.push(new Noeud(operateur, new Noeud("", null, null, array[i]), element))
                    }
                }
            }
        }
        return result;
    }

    clone(): Noeud {
        let gauche : Noeud = this._filsGauche == null ? null : this._filsGauche.clone()
        let droite : Noeud = this._filsDroite == null ? null : this._filsDroite.clone()

        return new Noeud(this._operateur.slice(), gauche, droite, this._valeur);
    }
}