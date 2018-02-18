(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "@angular/core/testing", "./simple-sort.directive", "./simple-sort.module"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /* tslint:disable:no-unused-variable */
    var core_1 = require("@angular/core");
    var testing_1 = require("@angular/core/testing");
    var simple_sort_directive_1 = require("./simple-sort.directive");
    var simple_sort_module_1 = require("./simple-sort.module");
    describe('Directive: SimpleSort', function () {
        // simple style
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [simple_sort_module_1.SimpleSortModule],
                // Provide a test-double instead
                providers: [
                    { provide: core_1.ElementRef, useValue: {} }
                ]
            });
        });
        it('should create an instance', function () {
            var component = new simple_sort_directive_1.SimpleSortDirective();
            expect(component).toBeTruthy();
        });
    });
});
