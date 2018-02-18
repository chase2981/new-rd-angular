(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core/testing", "./tab-nav.component", "../tabset.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var testing_1 = require("@angular/core/testing");
    var tab_nav_component_1 = require("./tab-nav.component");
    var tabset_component_1 = require("../tabset.component");
    var component;
    var fixture;
    var debugElem;
    var elem;
    describe('Component: TabNav', function () {
        // simple style
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                declarations: [tabset_component_1.TabsetComponent, tab_nav_component_1.TabNavComponent],
                // Provide a test-double instead
                providers: [{
                        provide: tabset_component_1.TabsetComponent,
                        useValue: {
                            addTab: function () { }
                        }
                    }]
            });
            fixture = testing_1.TestBed.createComponent(tab_nav_component_1.TabNavComponent);
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
