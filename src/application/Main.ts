"use strict";

import { StateAddition } from "../model/StateAddition";


let state  = new StateAddition([1, 2, 3, 4], null);
console.log(state);
console.log((state.generateStates()[0]).generateStates());