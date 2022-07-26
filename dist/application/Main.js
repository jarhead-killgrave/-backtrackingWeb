(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../algorithmes/Recherche", "../model/AdditionState"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var Recherche_1 = require("../algorithmes/Recherche");
    var AdditionState_1 = require("../model/AdditionState");
    var state = new AdditionState_1.AdditionState([1, 2, 3, 4], null);
    var rech = new Recherche_1.Recherche();
    console.log(state);
    console.log(rech.resolution(state, 6));
});
//# sourceMappingURL=Main.js.map