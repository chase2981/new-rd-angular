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
        define(["require", "exports", "@angular/core", "../tabset.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var core_1 = require("@angular/core");
    var tabset_component_1 = require("../tabset.component");
    var TabNavComponent = (function () {
        function TabNavComponent(tabset) {
            // @Host() @Inject(forwardRef(() => TabsetComponent))
            this.tabset = tabset;
        }
        TabNavComponent.prototype.ngOnInit = function () {
        };
        TabNavComponent = __decorate([
            core_1.Component({
                selector: 'rd-tab-nav',
                template: "\n    <div class=\"cross-sell-nav\">\n      <div *ngFor=\"let tab of tabset?.tabs\" class=\"cross-sell-nav-item\" [class.active]=\"tab.active\" (click)=\"tabset.selectTab(tab)\">\n        {{ tab.title }}\n      </div>\n      <ng-content></ng-content>\n    </div>\n  ",
                styles: ["\n\n  "],
            }),
            __metadata("design:paramtypes", [tabset_component_1.TabsetComponent])
        ], TabNavComponent);
        return TabNavComponent;
    }());
    exports.TabNavComponent = TabNavComponent;
});
