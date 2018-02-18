(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "@angular/core/testing", "../../common.module", "../simple-sort.directive", "./simple-sort-field.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /* tslint:disable:no-unused-variable */
    var core_1 = require("@angular/core");
    var testing_1 = require("@angular/core/testing");
    var common_module_1 = require("../../common.module");
    var simple_sort_directive_1 = require("../simple-sort.directive");
    var simple_sort_field_component_1 = require("./simple-sort-field.component");
    var component;
    var fixture;
    var debugElem;
    var elem;
    describe('Component: SimpleSortField', function () {
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [common_module_1.RdAngularCommonModule],
                providers: [
                    { provide: core_1.ElementRef, useValue: {} },
                    { provide: simple_sort_directive_1.SimpleSortDirective, useValue: {} }
                ]
            });
            fixture = testing_1.TestBed.createComponent(simple_sort_field_component_1.SimpleSortFieldComponent);
            component = fixture.componentInstance;
        });
        it('should create an instance', function () {
            expect(component).toBeTruthy();
        });
    });
});
