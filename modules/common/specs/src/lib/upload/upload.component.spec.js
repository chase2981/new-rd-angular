(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core/testing", "./upload.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var testing_1 = require("@angular/core/testing");
    var upload_component_1 = require("./upload.component");
    var component;
    var fixture;
    var debugElem;
    var elem;
    describe('Component: Upload', function () {
        // simple style
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                declarations: [upload_component_1.UploadComponent],
            });
            fixture = testing_1.TestBed.createComponent(upload_component_1.UploadComponent);
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
