(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../tabset.component", "../tab", "../tab-nav"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tabset_component_1 = require("../tabset.component");
    var tab_1 = require("../tab");
    var tab_nav_1 = require("../tab-nav");
    exports.TAB_DIRECTIVES = [tabset_component_1.TabsetComponent, tab_nav_1.TabNavComponent, tab_1.TabComponent];
});
