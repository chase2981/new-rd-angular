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
    var ExpandingListViewComponent = (function () {
        function ExpandingListViewComponent() {
            this.open = false;
            this.toggle = new core_1.EventEmitter();
            this.display = 'block';
        }
        ExpandingListViewComponent.prototype.ngOnInit = function () {
        };
        ExpandingListViewComponent.prototype.onClick = function (newVal) {
            this.toggle.emit(newVal);
        };
        __decorate([
            core_1.HostBinding('class.active'), core_1.Input(),
            __metadata("design:type", Boolean)
        ], ExpandingListViewComponent.prototype, "open", void 0);
        __decorate([
            core_1.Output(),
            __metadata("design:type", Object)
        ], ExpandingListViewComponent.prototype, "toggle", void 0);
        __decorate([
            core_1.HostBinding('style.display'),
            __metadata("design:type", String)
        ], ExpandingListViewComponent.prototype, "display", void 0);
        ExpandingListViewComponent = __decorate([
            core_1.Component({
                selector: 'rd-expanding-list-view',
                template: "\n    <div (click)=\"onClick(!open)\">\n      <!-- expanding-list-view header injected here -->\n      <ng-content select=\"[rd-expanding-list-view-header]\"></ng-content>\n    </div>\n    <div class=\"collapse-card__body\" style=\"display: block;\">\n      <!-- expanding-list-view body injected here -->\n      <ng-content select=\"[rd-expanding-list-view-body]\"></ng-content>\n    </div>\n  ",
                styles: ["\n\n  "],
            }),
            __metadata("design:paramtypes", [])
        ], ExpandingListViewComponent);
        return ExpandingListViewComponent;
    }());
    exports.ExpandingListViewComponent = ExpandingListViewComponent;
});
