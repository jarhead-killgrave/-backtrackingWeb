"use strict";


/**
 * Interface dont doivent hériter tous les etats utilisables pour la
 * resolution des problèmes de backtracking
 * 
 * @author Jkgrave
 * @version 1.0.0
 */

    interface State extends Comparable<State>{

    /**
     * Retourne tous les etats fils de l'etat courant
     * @return {State[]}
     */
    generateStates(): State[];

    /**
     * Retourne la valeur de l'etat courant
     * @return {number}
     */
    evaluate(): number;

    /**
     * Affiche le chemin pour aboutir à l'etat courant
     * @return {string}
     */
    printPath(): string;

    estObjectif():boolean;

    setObjectif(objectif:boolean): void ;
}
