(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core/testing", "./tabset.component", "./tab", "./tab-nav"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var testing_1 = require("@angular/core/testing");
    var tabset_component_1 = require("./tabset.component");
    var tab_1 = require("./tab");
    var tab_nav_1 = require("./tab-nav");
    var component;
    var fixture;
    var debugElem;
    var elem;
    describe('Component: Tabset', function () {
        // simple style
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                declarations: [tabset_component_1.TabsetComponent, tab_1.TabComponent, tab_nav_1.TabNavComponent],
            });
            fixture = testing_1.TestBed.createComponent(tabset_component_1.TabsetComponent);
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
