(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./fullcalendar.directive", "./fullcalendar.module"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var fullcalendar_directive_1 = require("./fullcalendar.directive");
    exports.FullcalendarDirective = fullcalendar_directive_1.FullcalendarDirective;
    var fullcalendar_module_1 = require("./fullcalendar.module");
    exports.FullcalendarModule = fullcalendar_module_1.FullcalendarModule;
});
