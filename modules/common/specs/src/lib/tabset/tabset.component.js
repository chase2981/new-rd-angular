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
        define(["require", "exports", "@angular/core"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var core_1 = require("@angular/core");
    var TabsetComponent = (function () {
        function TabsetComponent() {
            this.selected = new core_1.EventEmitter();
            this.tabs = [];
        }
        TabsetComponent.prototype.ngOnInit = function () {
        };
        TabsetComponent.prototype.addTab = function (tab) {
            if (!this.tabs.length) {
                tab.activate();
            }
            this.tabs.push(tab);
        };
        TabsetComponent.prototype.selectTab = function (tab) {
            this.tabs.map(function (tab) {
                tab.deactivate();
            });
            tab.activate();
            this.selected.emit(tab);
        };
        __decorate([
            core_1.Output(),
            __metadata("design:type", Object)
        ], TabsetComponent.prototype, "selected", void 0);
        TabsetComponent = __decorate([
            core_1.Component({
                selector: 'rd-tabset',
                template: "\n      <ng-content></ng-content>\n    ",
                styles: ["\n\n    "],
            }),
            __metadata("design:paramtypes", [])
        ], TabsetComponent);
        return TabsetComponent;
    }());
    exports.TabsetComponent = TabsetComponent;
});
