(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "@angular/core/testing", "../modal.component", "./bootstrap-modal.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /* tslint:disable:no-unused-variable */
    var core_1 = require("@angular/core");
    var testing_1 = require("@angular/core/testing");
    var modal_component_1 = require("../modal.component");
    var bootstrap_modal_component_1 = require("./bootstrap-modal.component");
    var component;
    var fixture;
    var debugElem;
    var elem;
    describe('Component: BootstrapModal', function () {
        // simple style
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                declarations: [modal_component_1.ModalComponent, bootstrap_modal_component_1.BootstrapModalComponent],
                // Provide a test-double instead
                providers: [{ provide: core_1.ElementRef, useValue: {} }]
            });
            fixture = testing_1.TestBed.createComponent(bootstrap_modal_component_1.BootstrapModalComponent);
            component = fixture.componentInstance;
        });
        it('should create an instance', function () {
            expect(component).toBeTruthy();
        });
        it('show() method should be defined', function () {
            expect(component.show).toBeTruthy();
        });
    });
});
