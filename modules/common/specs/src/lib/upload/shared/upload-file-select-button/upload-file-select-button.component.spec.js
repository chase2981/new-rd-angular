(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core/testing", "ng2-file-upload", "./upload-file-select-button.component", "../../upload.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var testing_1 = require("@angular/core/testing");
    var ng2_file_upload_1 = require("ng2-file-upload");
    var upload_file_select_button_component_1 = require("./upload-file-select-button.component");
    var upload_component_1 = require("../../upload.component");
    var component;
    var fixture;
    var debugElem;
    var elem;
    describe('Component: UploadFileSelectButton', function () {
        // simple style
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                declarations: [upload_component_1.UploadComponent, upload_file_select_button_component_1.UploadFileSelectButtonComponent, ng2_file_upload_1.FileSelectDirective],
                // Provide a test-double instead
                providers: [{
                        provide: upload_component_1.UploadComponent,
                        useValue: {}
                    }]
            });
            fixture = testing_1.TestBed.createComponent(upload_file_select_button_component_1.UploadFileSelectButtonComponent);
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
