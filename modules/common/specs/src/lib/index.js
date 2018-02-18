(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./expanding-list-view", "./tabset", "./loading-indicator", "./modal", "./pipes", "./toast", "./simple-sort", "./upload", "./common.module", "./fullcalendar", "./iframe"], factory);
    }
})(function (require, exports) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(require("./expanding-list-view"));
    __export(require("./tabset"));
    __export(require("./loading-indicator"));
    __export(require("./modal"));
    __export(require("./pipes"));
    __export(require("./toast"));
    __export(require("./simple-sort"));
    __export(require("./upload"));
    __export(require("./common.module"));
    __export(require("./fullcalendar"));
    __export(require("./iframe"));
});
