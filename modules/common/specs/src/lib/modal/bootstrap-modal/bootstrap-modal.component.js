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
        define(["require", "exports", "@angular/core", "../modal.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var core_1 = require("@angular/core");
    var modal_component_1 = require("../modal.component");
    var BootstrapModalComponent = (function () {
        function BootstrapModalComponent() {
            this.options = {};
            this.shown = new core_1.EventEmitter();
            this.hidden = new core_1.EventEmitter();
            this.loaded = new core_1.EventEmitter();
        }
        BootstrapModalComponent.prototype.ngOnInit = function () {
        };
        BootstrapModalComponent.prototype.show = function () {
            this.modal.show();
        };
        BootstrapModalComponent.prototype.hide = function () {
            this.modal.hide();
        };
        BootstrapModalComponent.prototype.toggle = function () {
            this.modal.toggle();
        };
        BootstrapModalComponent.prototype.onShown = function ($event) {
            this.shown.emit($event);
        };
        BootstrapModalComponent.prototype.onHidden = function ($event) {
            this.hidden.emit($event);
        };
        BootstrapModalComponent.prototype.onLoaded = function ($event) {
            this.loaded.emit($event);
        };
        __decorate([
            core_1.Input(),
            __metadata("design:type", Object)
        ], BootstrapModalComponent.prototype, "options", void 0);
        __decorate([
            core_1.Output(),
            __metadata("design:type", core_1.EventEmitter)
        ], BootstrapModalComponent.prototype, "shown", void 0);
        __decorate([
            core_1.Output(),
            __metadata("design:type", core_1.EventEmitter)
        ], BootstrapModalComponent.prototype, "hidden", void 0);
        __decorate([
            core_1.Output(),
            __metadata("design:type", core_1.EventEmitter)
        ], BootstrapModalComponent.prototype, "loaded", void 0);
        __decorate([
            core_1.ViewChild(modal_component_1.ModalComponent),
            __metadata("design:type", modal_component_1.ModalComponent)
        ], BootstrapModalComponent.prototype, "modal", void 0);
        BootstrapModalComponent = __decorate([
            core_1.Component({
                selector: 'rd-bootstrap-modal',
                template: "\n    <span (click)=\"modal.show()\">\n      <ng-content select=\"rd-bootstrap-modal-trigger, [rd-bootstrap-modal-trigger]\"></ng-content>\n    </span>\n\n    <rd-modal [options]=\"options\" (shown)=\"onShown($event)\" (hidden)=\"onHidden($event)\" (loaded)=\"onLoaded($event)\">\n        <div class=\"modal-header\">\n          <ng-content select=\"[rd-bootstrap-modal-header]\"></ng-content>\n        </div>\n        <div class=\"modal-body\">\n          <ng-content select=\"[rd-bootstrap-modal-body]\"></ng-content>\n        </div>\n        <div class=\"modal-footer\">\n          <ng-content select=\"[rd-bootstrap-modal-footer]\"></ng-content>\n        </div>\n    </rd-modal>\n  ",
                styles: ["\n\n  "],
            }),
            __metadata("design:paramtypes", [])
        ], BootstrapModalComponent);
        return BootstrapModalComponent;
    }());
    exports.BootstrapModalComponent = BootstrapModalComponent;
});
