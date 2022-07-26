"use strict";

import { Recherche } from "../algorithmes/Recherche";
import { AdditionState } from "../model/AdditionState";



let state  = new AdditionState([1, 2, 3, 4], null);
let rech = new Recherche();
console.log(state);
console.log(rech.resolution(state, 6));