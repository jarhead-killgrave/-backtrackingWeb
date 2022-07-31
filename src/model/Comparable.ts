"use strict";

/**
 * Interface dont implementeront tous les objets comparables
 * 
 * @author Jkgrave
 * @version 1.0
 */
interface Comparable<T>{

    /**
     * Retourne un booleen indiquant si l'objet est equale
     * 
     * @param {T} objet
     */
    equal(objet : T): boolean;
    
    

}