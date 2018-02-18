(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "@angular/core/testing", "@angular/platform-browser", "@angular/core/testing", "@rd/core", "@rd/core/testing", "./iframe.module", "./iframe-html.directive"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /* tslint:disable:no-unused-variable */
    var core_1 = require("@angular/core");
    var testing_1 = require("@angular/core/testing");
    var platform_browser_1 = require("@angular/platform-browser");
    var testing_2 = require("@angular/core/testing");
    var core_2 = require("@rd/core");
    var testing_3 = require("@rd/core/testing");
    var iframe_module_1 = require("./iframe.module");
    var iframe_html_directive_1 = require("./iframe-html.directive");
    describe('Directive: IframeHtml', function () {
        // simple style
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [iframe_module_1.IFrameModule],
                // Provide a test-double instead
                providers: [
                    { provide: core_2.CoreApiService, useValue: testing_3.CoreApiServiceMock },
                    { provide: platform_browser_1.DomSanitizer, useValue: {} },
                    { provide: core_1.ElementRef, useValue: {} }
                ]
            });
        });
        it('should create an instance', testing_2.inject([platform_browser_1.DomSanitizer, core_1.ElementRef], function (domSanitizer, elementRef) {
            var directive = new iframe_html_directive_1.IframeHtmlDirective(domSanitizer, elementRef);
            expect(directive).toBeTruthy();
        }));
    });
});
