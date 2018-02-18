(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./shared", "./upload.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var shared_1 = require("./shared");
    exports.UploadFilePreviewComponent = shared_1.UploadFilePreviewComponent;
    exports.UploadFileQueueComponent = shared_1.UploadFileQueueComponent;
    exports.UploadFileDropZoneComponent = shared_1.UploadFileDropZoneComponent;
    exports.UploadFileProgressBarComponent = shared_1.UploadFileProgressBarComponent;
    exports.UploadFileSelectButtonComponent = shared_1.UploadFileSelectButtonComponent;
    exports.UploadFileSubmitButtonComponent = shared_1.UploadFileSubmitButtonComponent;
    var upload_component_1 = require("./upload.component");
    exports.UploadComponent = upload_component_1.UploadComponent;
});
