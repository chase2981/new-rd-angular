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
        define(["require", "exports", "@angular/core"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var core_1 = require("@angular/core");
    var TelephonePipe = (function () {
        function TelephonePipe() {
        }
        TelephonePipe.prototype.transform = function (tel) {
            if (!tel)
                return tel;
            var value = tel.toString().trim().replace(/^\+/, '');
            if (value.match(/[^0-9]/)) {
                return tel;
            }
            var city, number;
            switch (value.length) {
                case 10:
                    city = value.slice(0, 3);
                    number = value.slice(3);
                    break;
                case 11:
                    city = value.slice(1, 4);
                    number = value.slice(4);
                    break;
                default:
                    return tel;
            }
            number = number.slice(0, 3) + '-' + number.slice(3);
            return ("(" + city + ") " + number).trim();
        };
        TelephonePipe = __decorate([
            core_1.Pipe({
                name: 'telephone'
            })
        ], TelephonePipe);
        return TelephonePipe;
    }());
    exports.TelephonePipe = TelephonePipe;
});
