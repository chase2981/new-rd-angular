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
    var TabComponent = (function () {
        function TabComponent(tabsetComponent) {
            this.tabsetComponent = tabsetComponent;
            this.init = new core_1.EventEmitter();
            this.destroy = new core_1.EventEmitter();
            this.active = false;
        }
        TabComponent.prototype.ngOnInit = function () {
            this.tabsetComponent.addTab(this);
        };
        TabComponent.prototype.activate = function () {
            this.active = true;
            this.init.emit(this);
        };
        TabComponent.prototype.deactivate = function () {
            this.active = false;
            this.destroy.emit(this);
        };
        TabComponent.prototype.isActive = function () {
            return this.active;
        };
        TabComponent.prototype.ngOnDestroy = function () {
        };
        __decorate([
            core_1.Input(),
            __metadata("design:type", String)
        ], TabComponent.prototype, "title", void 0);
        __decorate([
            core_1.Output(),
            __metadata("design:type", Object)
        ], TabComponent.prototype, "init", void 0);
        __decorate([
            core_1.Output(),
            __metadata("design:type", Object)
        ], TabComponent.prototype, "destroy", void 0);
        TabComponent = __decorate([
            core_1.Component({
                selector: 'rd-tab',
                template: "\n    <div class=\"ui bottom attached tab segment\"> <!-- removed: *ngIf=\"active\" [adding an *ngIf here DOES NOT PREVENT its transcluded CHILD COMPONENTS from INITIALIZING\n      and therefore doing so would be rendered almost entirely useless (transclusion === content-projection)] -->\n\n      <ng-content></ng-content>\n\n    </div>\n  ",
                styles: ["\n\n  "],
            }),
            __metadata("design:paramtypes", [tabset_component_1.TabsetComponent])
        ], TabComponent);
        return TabComponent;
    }());
    exports.TabComponent = TabComponent;
});
