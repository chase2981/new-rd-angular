var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "@angular/common", "./simple-sort.directive", "./shared"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var core_1 = require("@angular/core");
    var common_1 = require("@angular/common");
    var simple_sort_directive_1 = require("./simple-sort.directive");
    var shared_1 = require("./shared");
    var SimpleSortModule = (function () {
        function SimpleSortModule() {
        }
        SimpleSortModule = __decorate([
            core_1.NgModule({
                declarations: [
                    simple_sort_directive_1.SimpleSortDirective,
                    shared_1.SimpleSortFieldComponent,
                ],
                imports: [
                    common_1.CommonModule,
                ],
                exports: [
                    simple_sort_directive_1.SimpleSortDirective,
                    shared_1.SimpleSortFieldComponent,
                ],
            })
        ], SimpleSortModule);
        return SimpleSortModule;
    }());
    exports.SimpleSortModule = SimpleSortModule;
});
