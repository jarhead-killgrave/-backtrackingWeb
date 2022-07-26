"use strict";


/**
 * Classe permettant de gérer une liste d'element comparables
 * 
 * @author Jkgrave
 * @version 1.0.0
 */
class ArrayList<T extends Comparable<T>>{

    /**
     * La liste d'element de type T
     */
    _liste: T[];

    /**
     * Construit une nouvelle instance d'arraylist
     */
    constructor(iterable? : T[]){
        this._liste = iterable ?? [];
    }

    indexOf = (item : T) : number => this._liste.indexOf(item);

    lastIndexOf = (item : T) : number => this._liste.lastIndexOf(item);

    pop = () : T => this._liste.pop();

    push = (item : T) : number => this._liste.push(item);

    toString = () : string => this._liste.toString();

    forEach = (callbackFn : (value : T , index : number, array : T[]) => void, thisArg? : any) : void => {this._liste.forEach(callbackFn, thisArg)};

    join  = (separator? : string) : string => this._liste.join(separator);

    reduce = (callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue?: T): T => this._liste.reduce(callbackfn, initialValue);

    reverse = () : T[] => this._liste.reverse();

    contains(item : T) : boolean {
        let tmp = this._liste.find(element => element.equal(item));
        return tmp != undefined;
    }

    addAll(items : T[]) : void {
        this._liste.push.apply(this._liste, items);
    }

    

    removeIf(predicat : (item: T) => boolean): void {
        this._liste = this._liste.filter(predicat);
    }

    shift = () : T => this._liste.shift();

    length = () : number => this._liste.length;

}

