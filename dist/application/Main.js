"use strict";
var state = new AdditionState([1, 2, 3, 4], null);
var tab = [];
var max = 999;
var min = 100;
for (var i = 0; i < 10; i++) {
    tab.push(Math.floor(Math.random() * (99)) + 1);
}
var state2 = new AllOperatorState([1, 2, 25, 50, 75, 100], null);
console.log(state2);
var rech = new Recherche();
var stateExpression = new StateExpression([1, 2, 25, 50, 75, 100], null, new Expression("+", 0, 0));
var objectif = Math.floor(Math.random() * (max - min)) + min;
console.log(objectif);
var fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
console.log(stateExpression);
var result;
fetchPromise2.then(function () { result = rech.resolution(stateExpression, objectif); }).then(function () { console.log("ok"); console.log(result); console.log(result.printPath()); });
//# sourceMappingURL=Main.js.map