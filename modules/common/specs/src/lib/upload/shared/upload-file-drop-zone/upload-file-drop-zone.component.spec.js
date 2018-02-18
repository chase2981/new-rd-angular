(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core/testing", "ng2-file-upload", "./upload-file-drop-zone.component", "../../upload.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var testing_1 = require("@angular/core/testing");
    var ng2_file_upload_1 = require("ng2-file-upload");
    var upload_file_drop_zone_component_1 = require("./upload-file-drop-zone.component");
    var upload_component_1 = require("../../upload.component");
    var component;
    var fixture;
    var debugElem;
    var elem;
    describe('Component: UploadFileDropZone', function () {
        // simple style
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                declarations: [ng2_file_upload_1.FileDropDirective, upload_component_1.UploadComponent, upload_file_drop_zone_component_1.UploadFileDropZoneComponent],
                // Provide a test-double instead
                providers: [{
                        provide: upload_component_1.UploadComponent,
                        useValue: {}
                    }]
            });
            fixture = testing_1.TestBed.createComponent(upload_file_drop_zone_component_1.UploadFileDropZoneComponent);
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
