"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var CharacterCounterDirective = (function () {
    function CharacterCounterDirective(elementRef, ngModel) {
        this.ngModel = ngModel;
        this.headers = [];
        this.restrict = true;
        this.result = new core_1.EventEmitter();
        this.input = $(elementRef.nativeElement);
    }
    CharacterCounterDirective.prototype.ngOnInit = function () {
    };
    CharacterCounterDirective.prototype.ngAfterViewInit = function () {
        var self = this;
        $(this.input).ready(function () {
            self.count();
        });
        $(this.input).on('keyup', function () {
            var remaining = self.count();
            if (self.restrict && remaining <= 0)
                self.restrictInput();
        });
    };
    CharacterCounterDirective.prototype.count = function () {
        var self = this;
        var target = this.input;
        var initialChars = target.val() || '';
        var chars = target.val() || '';
        chars = chars.replace(/\[.+]/g, '');
        var rawLength = chars.length;
        var adjustedLength = rawLength;
        for (var _i = 0, _a = self.headers; _i < _a.length; _i++) {
            var header = _a[_i];
            if (initialChars.includes("[" + header.name + "]"))
                adjustedLength += header.max_length;
        }
        var remaining = (160 - adjustedLength);
        this.result.emit(remaining);
        this.characters = remaining;
        // $('#counter').text(remaining);
        // if (adjustedLength > 154) {
        //   $("#counter").css("color", "#b94a48");
        //   $("#counter").css("font-weight", "bold");
        // } else {
        //   $("#counter").css("color", "#333");
        //   $("#counter").css("font-weight", "normal");
        // }
        return remaining;
    };
    CharacterCounterDirective.prototype.restrictInput = function () {
        var target = $(this.input);
        var value = target.val();
        target.val("" + value.substr(0, 160));
        target.focus();
    };
    return CharacterCounterDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], CharacterCounterDirective.prototype, "headers", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], CharacterCounterDirective.prototype, "restrict", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], CharacterCounterDirective.prototype, "result", void 0);
CharacterCounterDirective = __decorate([
    core_1.Directive({
        selector: 'input[rdCharacterCounter], textarea[rdCharacterCounter]',
        exportAs: 'rdCharacterCounter',
        providers: [
            forms_1.NgModel
        ]
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, typeof (_a = typeof forms_1.NgModel !== "undefined" && forms_1.NgModel) === "function" && _a || Object])
], CharacterCounterDirective);
exports.CharacterCounterDirective = CharacterCounterDirective;
var _a;
//# sourceMappingURL=character-counter.directive.js.map