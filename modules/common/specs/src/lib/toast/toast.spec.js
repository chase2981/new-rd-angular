(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core/testing", "./toast"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /* tslint:disable:no-unused-variable */
    var testing_1 = require("@angular/core/testing");
    var toast_1 = require("./toast");
    describe('Service: Toastr', function () {
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [],
                providers: [
                    toast_1.Toast,
                ]
            });
        });
        it('should be defined', testing_1.inject([toast_1.Toast], function (service) {
            expect(service).toBeTruthy();
        }));
        it('should have "success()" method', testing_1.inject([toast_1.Toast], function (service) {
            expect(service.success).toBeTruthy();
        }));
        it('should have "error()" method', testing_1.inject([toast_1.Toast], function (service) {
            expect(service.error).toBeTruthy();
        }));
        it('should have "warn()" method', testing_1.inject([toast_1.Toast], function (service) {
            expect(service.warn).toBeTruthy();
        }));
    });
});
