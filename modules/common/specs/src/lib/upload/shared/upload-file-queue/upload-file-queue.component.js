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
    //import { UploadFileProgressBarComponent } from '../upload-file-progress-bar';
    var UploadFileQueueComponent = (function () {
        function UploadFileQueueComponent(uploadComponent) {
            this.uploadComponent = uploadComponent;
            this.support = !!(FileReader && CanvasRenderingContext2D);
        }
        UploadFileQueueComponent.prototype.ngOnInit = function () {
        };
        UploadFileQueueComponent = __decorate([
            core_1.Component({
                selector: 'rd-upload-file-queue',
                template: "\n        <table class=\"table\">\n            <thead>\n            <tr>\n                <th width=\"10%\">Thumb</th>\n                <th width=\"40%\">Name</th>\n                <th>Size</th>\n                <th>Progress</th>\n                <th>Status</th>\n                <th>Actions</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"let item of uploadComponent.uploader.queue\">\n                <td>\n                  <rd-upload-file-preview [uploaderQueueItem]=\"item\" [height]=\"50\" [width]=\"50\"></rd-upload-file-preview>\n                </td>\n                <td>\n                  {{item.file.name}}\n                </td>\n                <td *ngIf=\"uploadComponent.uploader.isHTML5\" nowrap>0.00 MB</td>\n                <td *ngIf=\"uploadComponent.uploader.isHTML5\">\n                    <div class=\"progress\" style=\"margin-bottom: 0;\">\n                      <!-- todo: switch out the following for rd-upload-file-progress-bar component (once rd-upload-file-progress-bar component is ready) -->\n                      <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': item.progress + '%' }\"></div>\n                    </div>\n                </td>\n                <td class=\"text-center\">\n                    <span *ngIf=\"item.isSuccess\"><i class=\"glyphicon glyphicon-ok\"></i></span>\n                    <span *ngIf=\"item.isCancel\"><i class=\"glyphicon glyphicon-ban-circle\"></i></span>\n                    <span *ngIf=\"item.isError\"><i class=\"glyphicon glyphicon-remove\"></i></span>\n                </td>\n                <td nowrap>\n                    <button type=\"button\" class=\"btn btn-success btn-xs\"\n                            (click)=\"item.upload()\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">\n                        <span class=\"glyphicon glyphicon-upload\"></span> Upload\n                    </button>\n                    <button type=\"button\" class=\"btn btn-warning btn-xs\"\n                            (click)=\"item.cancel()\" [disabled]=\"!item.isUploading\">\n                        <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel\n                    </button>\n                    <button type=\"button\" class=\"btn btn-danger btn-xs\"\n                            (click)=\"item.remove()\">\n                        <span class=\"glyphicon glyphicon-trash\"></span> Remove\n                    </button>\n                </td>\n            </tr>\n            </tbody>\n        </table>\n\n        <div>\n            <div>\n                Queue progress:\n                <div class=\"progress\" style=\"\">\n                    <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': uploadComponent.uploader.progress + '%' }\"></div>\n                </div>\n            </div>\n            <button type=\"button\" class=\"btn btn-success btn-s\"\n                    (click)=\"uploadComponent.uploader.uploadAll()\" [disabled]=\"!uploadComponent.uploader.getNotUploadedItems().length\">\n                <span class=\"glyphicon glyphicon-upload\"></span> Upload all\n            </button>\n            <button type=\"button\" class=\"btn btn-warning btn-s\"\n                    (click)=\"uploadComponent.uploader.cancelAll()\" [disabled]=\"!uploadComponent.uploader.isUploading\">\n                <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel all\n            </button>\n            <button type=\"button\" class=\"btn btn-danger btn-s\"\n                    (click)=\"uploadComponent.uploader.clearQueue()\" [disabled]=\"!uploadComponent.uploader.queue.length\">\n                <span class=\"glyphicon glyphicon-trash\"></span> Remove all\n            </button>\n        </div>\n  ",
                styles: ["\n\n  "],
            }),
            __metadata("design:paramtypes", [upload_component_1.UploadComponent])
        ], UploadFileQueueComponent);
        return UploadFileQueueComponent;
    }());
    exports.UploadFileQueueComponent = UploadFileQueueComponent;
});
