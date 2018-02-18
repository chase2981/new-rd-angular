(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./modal-show-button.directive", "./modal-hide-button.directive", "./modal-toggle-button.directive"], factory);
    }
})(function (require, exports) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(require("./modal-show-button.directive"));
    __export(require("./modal-hide-button.directive"));
    __export(require("./modal-toggle-button.directive"));
});
