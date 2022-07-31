"use strict";

/**
 * Classe representant une expression arithmetic 
 * 
 * @author JKgrave
 * @version 1.0.0
 */
class Expression implements Comparable<Expression>{
    
    /**
     * La tête de l'expression
     */
    private _operateur : String;

    /**
     * La premierOperande
     */
    private _x : number;

    /**
     * La deuxieme Operande
     */
    private _y : number;

    private _solution : number = undefined;

    constructor(operateur: String, x : number, y : number){
        this._operateur = operateur
        this._x = x > y ? x : y
        this._y = x > y ? y : x;
        this._solution = eval(`${this._x} ${this._operateur} ${this._y}`)
    }

    toString(){
        return `${this._x} ${this._operateur} ${this._y} = ${this._solution}`
    }

    evaluate(): number{
        return this._solution
    }
    
    equal(expression : Expression) : boolean{
        return this.toString() == expression.toString()
    }
}