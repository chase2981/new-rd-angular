"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var character_counter_directive_1 = require("./character-counter.directive");
var TextBodyModule = (function () {
    function TextBodyModule() {
    }
    return TextBodyModule;
}());
TextBodyModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
        ],
        declarations: [
            character_counter_directive_1.CharacterCounterDirective,
        ],
        exports: [
            character_counter_directive_1.CharacterCounterDirective,
            forms_1.FormsModule,
        ]
    })
], TextBodyModule);
exports.TextBodyModule = TextBodyModule;
//# sourceMappingURL=text-body.module.js.map