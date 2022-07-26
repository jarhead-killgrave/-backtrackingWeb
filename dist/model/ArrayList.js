(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.ArrayList = void 0;
    var ArrayList = (function () {
        function ArrayList(iterable) {
            var _this = this;
            this.indexOf = function (item) { return _this._liste.indexOf(item); };
            this.lastIndexOf = function (item) { return _this._liste.lastIndexOf(item); };
            this.pop = function () { return _this._liste.pop(); };
            this.push = function (item) { return _this._liste.push(item); };
            this.toString = function () { return _this._liste.toString(); };
            this.forEach = function (callbackFn, thisArg) { _this._liste.forEach(callbackFn, thisArg); };
            this.join = function (separator) { return _this._liste.join(separator); };
            this.reduce = function (callbackfn, initialValue) { return _this._liste.reduce(callbackfn, initialValue); };
            this.reverse = function () { return _this._liste.reverse(); };
            this.shift = function () { return _this._liste.shift(); };
            this.length = function () { return _this._liste.length; };
            this._liste = iterable !== null && iterable !== void 0 ? iterable : [];
        }
        ArrayList.prototype.contains = function (item) {
            var tmp = this._liste.find(function (element) { return element.equal(item); });
            return tmp != undefined;
        };
        ArrayList.prototype.addAll = function (items) {
            this._liste.push.apply(this._liste, items);
        };
        ArrayList.prototype.removeIf = function (predicat) {
            this._liste = this._liste.filter(predicat);
        };
        return ArrayList;
    }());
    exports.ArrayList = ArrayList;
});
//# sourceMappingURL=ArrayList.js.map