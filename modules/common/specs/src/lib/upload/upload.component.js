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
        define(["require", "exports", "@angular/core", "ng2-file-upload"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var core_1 = require("@angular/core");
    var ng2_file_upload_1 = require("ng2-file-upload");
    var UploadComponent = (function () {
        /* End Depracated */
        function UploadComponent() {
            this.url = '';
            this.uploader = new ng2_file_upload_1.FileUploader({ url: this.url });
            this.onWhenAddingFileFailed = new core_1.EventEmitter();
            this.onAfterAddingFile = new core_1.EventEmitter();
            this.onAfterAddingAll = new core_1.EventEmitter();
            this.onBeforeUploadItem = new core_1.EventEmitter();
            this.onProgressItem = new core_1.EventEmitter();
            this.onProgressAll = new core_1.EventEmitter();
            this.onSuccessItem = new core_1.EventEmitter();
            this.onErrorItem = new core_1.EventEmitter();
            this.onCancelItem = new core_1.EventEmitter();
            this.onCompleteItem = new core_1.EventEmitter();
            this.onCompleteAll = new core_1.EventEmitter();
            /* Depracated */
            this.change = new core_1.EventEmitter();
            this.complete = new core_1.EventEmitter();
            this.success = new core_1.EventEmitter();
        }
        UploadComponent.prototype.ngOnInit = function () {
            this.subscribeToEvents();
        };
        UploadComponent.prototype.subscribeToEvents = function () {
            var self = this;
            this.uploader.onWhenAddingFileFailed = function (item, filter, options) {
                self.onWhenAddingFileFailed.emit(arguments);
            };
            this.uploader.onAfterAddingFile = function (fileItem) {
                self.onAfterAddingFile.emit(arguments);
            };
            this.uploader.onAfterAddingAll = function (addedFileItems) {
                self.change.emit(addedFileItems);
                self.onAfterAddingAll.emit(arguments);
            };
            this.uploader.onBeforeUploadItem = function (item) {
                self.onBeforeUploadItem.emit(arguments);
            };
            this.uploader.onProgressItem = function (fileItem, progress) {
                self.onProgressItem.emit(arguments);
            };
            this.uploader.onProgressAll = function (progress) {
                self.onProgressAll.emit(arguments);
            };
            this.uploader.onSuccessItem = function (fileItem, response, status, headers) {
                self.success.emit(response);
                self.onSuccessItem.emit(arguments);
            };
            this.uploader.onErrorItem = function (fileItem, response, status, headers) {
                self.onErrorItem.emit(arguments);
            };
            this.uploader.onCancelItem = function (fileItem, response, status, headers) {
                self.onCancelItem.emit(arguments);
            };
            this.uploader.onCompleteItem = function (fileItem, response, status, headers) {
                self.complete.emit(response);
                self.onCompleteItem.emit(arguments);
            };
            this.uploader.onCompleteAll = function () {
                self.onCompleteAll.emit(arguments);
            };
        };
        UploadComponent.prototype.ngOnDestroy = function () {
            this.uploader.destroy();
        };
        __decorate([
            core_1.Input(),
            __metadata("design:type", String)
        ], UploadComponent.prototype, "url", void 0);
        __decorate([
            core_1.Input(),
            __metadata("design:type", ng2_file_upload_1.FileUploader)
        ], UploadComponent.prototype, "uploader", void 0);
        __decorate([
            core_1.Output(),
            __metadata("design:type", Object)
        ], UploadComponent.prototype, "onWhenAddingFileFailed", void 0);
        __decorate([
            core_1.Output(),
            __metadata("design:type", Object)
        ], UploadComponent.prototype, "onAfterAddingFile", void 0);
        __decorate([
            core_1.Output(),
            __metadata("design:type", Object)
        ], UploadComponent.prototype, "onAfterAddingAll", void 0);
        __decorate([
            core_1.Output(),
            __metadata("design:type", Object)
        ], UploadComponent.prototype, "onBeforeUploadItem", void 0);
        __decorate([
            core_1.Output(),
            __metadata("design:type", Object)
        ], UploadComponent.prototype, "onProgressItem", void 0);
        __decorate([
            core_1.Output(),
            __metadata("design:type", Object)
        ], UploadComponent.prototype, "onProgressAll", void 0);
        __decorate([
            core_1.Output(),
            __metadata("design:type", Object)
        ], UploadComponent.prototype, "onSuccessItem", void 0);
        __decorate([
            core_1.Output(),
            __metadata("design:type", Object)
        ], UploadComponent.prototype, "onErrorItem", void 0);
        __decorate([
            core_1.Output(),
            __metadata("design:type", Object)
        ], UploadComponent.prototype, "onCancelItem", void 0);
        __decorate([
            core_1.Output(),
            __metadata("design:type", Object)
        ], UploadComponent.prototype, "onCompleteItem", void 0);
        __decorate([
            core_1.Output(),
            __metadata("design:type", Object)
        ], UploadComponent.prototype, "onCompleteAll", void 0);
        __decorate([
            core_1.Output(),
            __metadata("design:type", Object)
        ], UploadComponent.prototype, "change", void 0);
        __decorate([
            core_1.Output(),
            __metadata("design:type", Object)
        ], UploadComponent.prototype, "complete", void 0);
        __decorate([
            core_1.Output(),
            __metadata("design:type", Object)
        ], UploadComponent.prototype, "success", void 0);
        UploadComponent = __decorate([
            core_1.Component({
                selector: 'rd-upload, [rd-upload]',
                template: "\n      <ng-content></ng-content>\n    ",
                styles: ["\n\n    "],
            }),
            __metadata("design:paramtypes", [])
        ], UploadComponent);
        return UploadComponent;
    }());
    exports.UploadComponent = UploadComponent;
});
