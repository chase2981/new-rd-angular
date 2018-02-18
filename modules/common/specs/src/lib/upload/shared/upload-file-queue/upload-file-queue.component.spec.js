(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core/testing", "./upload-file-queue.component", "../upload-file-preview", "../../upload.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var testing_1 = require("@angular/core/testing");
    var upload_file_queue_component_1 = require("./upload-file-queue.component");
    var upload_file_preview_1 = require("../upload-file-preview");
    var upload_component_1 = require("../../upload.component");
    var component;
    var fixture;
    var debugElem;
    var elem;
    describe('Component: UploadFileQueue', function () {
        // simple style
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                declarations: [upload_component_1.UploadComponent, upload_file_queue_component_1.UploadFileQueueComponent, upload_file_preview_1.UploadFilePreviewComponent],
                // Provide a test-double instead
                providers: [{
                        provide: upload_component_1.UploadComponent,
                        useValue: {}
                    }]
            });
            fixture = testing_1.TestBed.createComponent(upload_file_queue_component_1.UploadFileQueueComponent);
            component = fixture.componentInstance;
        });
        it('should create an instance', function () {
            expect(component).toBeTruthy();
        });
        // it('provider should be defined', () => {
        //   expect(component.elem).toBeTruthy();
        // })
    });
});
