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
        define(["require", "exports", "@angular/core", "./toast.config"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var core_1 = require("@angular/core");
    require("./toast.config");
    var Toast = (function () {
        function Toast() {
        }
        Toast.prototype.error = function (newVal) {
            toastr.error(newVal.msg, newVal.title, newVal.options);
            return {
                log: function (logData) {
                    console.error("Error: " + newVal.msg, logData);
                }
            };
        };
        Toast.prototype.info = function (newVal) {
            toastr.info(newVal.msg, newVal.title, newVal.options);
            return {
                log: function (logData) {
                    console.info("Info: " + newVal.msg, logData);
                }
            };
        };
        Toast.prototype.success = function (newVal) {
            toastr.success(newVal.msg, newVal.title, newVal.options);
            return {
                log: function (logData) {
                    console.info("Success: " + newVal.msg, logData);
                }
            };
        };
        Toast.prototype.warn = function (newVal) {
            toastr.warning(newVal.msg, newVal.title, newVal.options);
            return {
                log: function (logData) {
                    console.warn("Warning: " + newVal.msg, logData);
                }
            };
        };
        Toast = __decorate([
            core_1.Injectable(),
            __metadata("design:paramtypes", [])
        ], Toast);
        return Toast;
    }());
    exports.Toast = Toast;
});
