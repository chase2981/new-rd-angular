(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./shared/upload-file-preview/upload-file-preview.component", "./shared/upload-file-queue/upload-file-queue.component", "./shared/upload-file-drop-zone/upload-file-drop-zone.component", "./shared/upload-file-preview/upload-file-preview.component", "./shared/upload-file-progress-bar/upload-file-progress-bar.component", "./shared/upload-file-select-button/upload-file-select-button.component", "./shared/upload-file-submit-button/upload-file-submit-button.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(require("./shared/upload-file-preview/upload-file-preview.component"));
    __export(require("./shared/upload-file-queue/upload-file-queue.component"));
    __export(require("./shared/upload-file-drop-zone/upload-file-drop-zone.component"));
    __export(require("./shared/upload-file-preview/upload-file-preview.component"));
    __export(require("./shared/upload-file-progress-bar/upload-file-progress-bar.component"));
    __export(require("./shared/upload-file-select-button/upload-file-select-button.component"));
    __export(require("./shared/upload-file-submit-button/upload-file-submit-button.component"));
});
