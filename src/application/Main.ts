"use strict";

let state  = new AdditionState([1, 2, 3, 4], null);
let tab : number[] = []
let max = 999
let min = 100;
for (let i = 0; i < 10; i++) {
    tab.push(Math.floor(Math.random() * (99)) + 1); 
}
let state2 = new AllOperatorState( [1, 2, 25, 50, 75, 100], null);
console.log(state2);
let rech = new Recherche();
let stateExpression = new StateExpression([1, 2, 25, 50, 75, 100], null, new Expression("+", 0, 0))
let objectif = Math.floor(Math.random() * (max - min)) + min;
console.log(objectif);
const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
console.log(stateExpression);
let result : State;
fetchPromise2.then(() => {result = rech.resolution(stateExpression, objectif);}).then(() => {console.log("ok"); console.log(result); console.log(result.printPath());})
//sconsole.log(rech.resolution(stateExpression, objectif).printPath());



