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
        define(["require", "exports", "@angular/core", "../simple-sort.directive"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var core_1 = require("@angular/core");
    var simple_sort_directive_1 = require("../simple-sort.directive");
    var SimpleSortFieldComponent = (function () {
        function SimpleSortFieldComponent(elementRef, simpleSort) {
            this.simpleSort = simpleSort;
            this.elem = elementRef.nativeElement;
        }
        Object.defineProperty(SimpleSortFieldComponent.prototype, "reverseSortField", {
            get: function () {
                return "-" + this.sortField;
            },
            enumerable: true,
            configurable: true
        });
        SimpleSortFieldComponent.prototype.hostClick = function () {
            if (this.simpleSort.activeSortField === this.sortField)
                return this.simpleSort.change.emit(this.reverseSortField);
            return this.simpleSort.change.emit(this.sortField);
        };
        __decorate([
            core_1.Input('rd-simple-sort-field'),
            __metadata("design:type", String)
        ], SimpleSortFieldComponent.prototype, "sortField", void 0);
        __decorate([
            core_1.HostListener('click'),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", void 0)
        ], SimpleSortFieldComponent.prototype, "hostClick", null);
        SimpleSortFieldComponent = __decorate([
            core_1.Component({
                selector: '[rd-simple-sort-field]',
                template: "\n    <ng-content></ng-content>&nbsp;\n    <b class=\"fa fa-unsorted\"\n      [ngClass]=\"{\n        'fa-sort-down': simpleSort.activeSortField === sortField,\n        'fa-sort-up': simpleSort.activeSortField === reverseSortField\n      }\">\n    </b>\n  ",
                styles: ["\n\n  "],
            }),
            __metadata("design:paramtypes", [core_1.ElementRef, simple_sort_directive_1.SimpleSortDirective])
        ], SimpleSortFieldComponent);
        return SimpleSortFieldComponent;
    }());
    exports.SimpleSortFieldComponent = SimpleSortFieldComponent;
});
