var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "../../upload.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var core_1 = require("@angular/core");
    var upload_component_1 = require("../../upload.component");
    var UploadFileDropZoneComponent = (function () {
        function UploadFileDropZoneComponent(uploadComponent) {
            this.uploadComponent = uploadComponent;
            this.hasDropZoneOver = false;
        }
        UploadFileDropZoneComponent.prototype.ngOnInit = function () {
        };
        UploadFileDropZoneComponent.prototype.onFileOver = function ($event) {
            this.hasDropZoneOver = $event;
        };
        UploadFileDropZoneComponent = __decorate([
            core_1.Component({
                selector: 'rd-upload-file-drop-zone, [rd-upload-file-drop-zone]',
                // host: {
                //   'ng2FileDrop': 'true',
                //   '[ngClass]': "{'nv-file-over': hasDropZoneOver}",
                //   '(fileOver)': "onFileOver($event)",
                //   '[uploader]': "uploadComponent.uploader"
                // },
                template: "\n  <div ng2FileDrop\n       [ngClass]=\"{'nv-file-over': hasDropZoneOver}\"\n       (fileOver)=\"onFileOver($event)\"\n       [uploader]=\"uploadComponent.uploader\"\n       style=\"width: 100%; height: 100%;\">\n      <ng-content></ng-content>\n  </div>\n  ",
                styles: ["\n\n  "],
            }),
            __metadata("design:paramtypes", [upload_component_1.UploadComponent])
        ], UploadFileDropZoneComponent);
        return UploadFileDropZoneComponent;
    }());
    exports.UploadFileDropZoneComponent = UploadFileDropZoneComponent;
});
