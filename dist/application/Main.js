(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../model/StateAddition"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var StateAddition_1 = require("../model/StateAddition");
    var state = new StateAddition_1.StateAddition([1, 2, 3, 4], null);
    console.log(state);
    console.log((state.generateStates()[0]).generateStates());
});
//# sourceMappingURL=Main.js.map