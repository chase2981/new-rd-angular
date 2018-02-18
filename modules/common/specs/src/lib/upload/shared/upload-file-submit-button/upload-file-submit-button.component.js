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
    //import { FileDropDirective } from 'ng2-file-upload';
    var upload_component_1 = require("../../upload.component");
    var UploadFileSubmitButtonComponent = (function () {
        function UploadFileSubmitButtonComponent(uploadComponent) {
            this.uploadComponent = uploadComponent;
        }
        UploadFileSubmitButtonComponent.prototype.ngOnInit = function () {
        };
        UploadFileSubmitButtonComponent.prototype.onClick = function () {
            this.uploadComponent.uploader.uploadAll();
            console.log(this.uploadComponent.uploader);
        };
        UploadFileSubmitButtonComponent = __decorate([
            core_1.Component({
                selector: 'rd-upload-file-submit-button',
                template: "\n  <button type=\"button\" class=\"btn btn-success btn-s\"\n          (click)=\"onClick()\" [disabled]=\"!uploadComponent.uploader.getNotUploadedItems().length\">\n      <span class=\"glyphicon glyphicon-upload\"></span> Upload all\n  </button>\n  ",
                styles: ["\n\n  "],
            }),
            __metadata("design:paramtypes", [upload_component_1.UploadComponent])
        ], UploadFileSubmitButtonComponent);
        return UploadFileSubmitButtonComponent;
    }());
    exports.UploadFileSubmitButtonComponent = UploadFileSubmitButtonComponent;
});
