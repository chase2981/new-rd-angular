var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "@rd/core", "../../upload.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var core_1 = require("@angular/core");
    var core_2 = require("@rd/core");
    var upload_component_1 = require("../../upload.component");
    var UploadFilePreviewComponent = (function () {
        function UploadFilePreviewComponent(uploadComponent, changeDetectorRef, elementRef) {
            this.uploadComponent = uploadComponent;
            this.changeDetectorRef = changeDetectorRef;
            this.height = 50;
            this.width = 50;
            this.uploaderQueueItem = null;
            this.support = !!(FileReader && CanvasRenderingContext2D);
            this.elem = elementRef.nativeElement;
        }
        UploadFilePreviewComponent.prototype.ngOnInit = function () {
            var self = this;
            if (!self.support)
                return;
            var uploaderQueueItem = this.uploaderQueueItem || self.uploadComponent.uploader.queue[0];
            var params = { file: uploaderQueueItem._file, height: self.height, width: self.width };
            if (!self.isFile(params.file))
                return;
            if (!self.isImage(params.file))
                return;
            var canvas = $(self.elem).find('canvas');
            var reader = new FileReader();
            reader.onload = onLoadFile;
            reader.readAsDataURL(params.file);
            /* todo: verify the following does what i want it to */
            this.changeDetectorRef.markForCheck();
            function onLoadFile(event) {
                var img = new Image();
                img.onload = onLoadImage;
                img.src = event.target.result;
            }
            function onLoadImage() {
                var width = params.width || this.width / this.height * params.height;
                var height = params.height || this.height / this.width * params.width;
                canvas.attr({ width: width, height: height });
                canvas[0].getContext('2d').drawImage(this, 0, 0, width, height);
            }
        };
        UploadFilePreviewComponent.prototype.isFile = function (item) {
            return core_2.isObject(item) && item instanceof File;
        };
        UploadFilePreviewComponent.prototype.isImage = function (file) {
            var type = '|' + file.type.slice(file.type.lastIndexOf('/') + 1) + '|';
            return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
        };
        UploadFilePreviewComponent.prototype.ngDoCheck = function () {
        };
        UploadFilePreviewComponent.prototype.ngOnDestroy = function () {
        };
        __decorate([
            core_1.Input(),
            __metadata("design:type", Number)
        ], UploadFilePreviewComponent.prototype, "height", void 0);
        __decorate([
            core_1.Input(),
            __metadata("design:type", Number)
        ], UploadFilePreviewComponent.prototype, "width", void 0);
        __decorate([
            core_1.Input(),
            __metadata("design:type", Object)
        ], UploadFilePreviewComponent.prototype, "uploaderQueueItem", void 0);
        UploadFilePreviewComponent = __decorate([
            core_1.Component({
                selector: 'rd-upload-file-preview, [rd-upload-file-preview]',
                template: "<canvas></canvas>",
                styles: ["\n\n    "],
                changeDetection: core_1.ChangeDetectionStrategy.OnPush
            }),
            __param(0, core_1.Optional()),
            __metadata("design:paramtypes", [upload_component_1.UploadComponent, core_1.ChangeDetectorRef, core_1.ElementRef])
        ], UploadFilePreviewComponent);
        return UploadFilePreviewComponent;
    }());
    exports.UploadFilePreviewComponent = UploadFilePreviewComponent;
});
