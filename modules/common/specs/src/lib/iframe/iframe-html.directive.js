var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "@angular/platform-browser"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var core_1 = require("@angular/core");
    var platform_browser_1 = require("@angular/platform-browser");
    var IframeHtmlDirective = (function () {
        function IframeHtmlDirective(domSanitizer, elementRef) {
            this.domSanitizer = domSanitizer;
            this.iframe = elementRef.nativeElement;
        }
        IframeHtmlDirective.prototype.ngAfterContentInit = function () {
            if (this.html)
                this.writeHtml(this.html);
        };
        IframeHtmlDirective.prototype.ngOnChanges = function (changes) {
            if (changes['html'] && !changes['html'].isFirstChange() && changes['html'].currentValue && changes['html'].currentValue != changes['html'].previousValue)
                this.writeHtml(changes['html'].currentValue);
        };
        IframeHtmlDirective.prototype.writeHtml = function (newVal) {
            try {
                var doc = this.iframe.contentWindow.document;
                doc.open();
                doc.write(newVal);
                //doc.write(this.domSanitizer.sanitize(SecurityContext.HTML, newVal));
                doc.close();
            }
            catch (ex) {
                console.warn(ex);
            }
        };
        IframeHtmlDirective.prototype.ngOnDestroy = function () {
        };
        __decorate([
            core_1.Input('rdHtml'),
            __metadata("design:type", String)
        ], IframeHtmlDirective.prototype, "html", void 0);
        IframeHtmlDirective = __decorate([
            core_1.Directive({
                selector: 'iframe[rdHtml]'
            }),
            __metadata("design:paramtypes", [platform_browser_1.DomSanitizer, core_1.ElementRef])
        ], IframeHtmlDirective);
        return IframeHtmlDirective;
    }());
    exports.IframeHtmlDirective = IframeHtmlDirective;
});
