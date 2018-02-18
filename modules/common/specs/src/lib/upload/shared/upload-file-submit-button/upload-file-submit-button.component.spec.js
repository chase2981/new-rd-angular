(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core/testing", "./upload-file-submit-button.component", "../../upload.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var testing_1 = require("@angular/core/testing");
    var upload_file_submit_button_component_1 = require("./upload-file-submit-button.component");
    var upload_component_1 = require("../../upload.component");
    var component;
    var fixture;
    var debugElem;
    var elem;
    describe('Component: UploadFileSubmitButton', function () {
        // simple style
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                declarations: [upload_component_1.UploadComponent, upload_file_submit_button_component_1.UploadFileSubmitButtonComponent],
                // Provide a test-double instead
                providers: [{
                        provide: upload_component_1.UploadComponent,
                        useValue: {}
                    }]
            });
            fixture = testing_1.TestBed.createComponent(upload_file_submit_button_component_1.UploadFileSubmitButtonComponent);
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
