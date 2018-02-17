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
/* tslint:disable:no-unused-variable */
var testing_1 = require("@angular/core/testing");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var shared_1 = require("../../../shared");
var testing_2 = require("../../../testing");
var text_body_module_1 = require("./text-body.module");
var character_counter_directive_1 = require("./character-counter.directive");
describe('Directive: CharacterCounter', function () {
    var component;
    var debugElem;
    var directive;
    var fixture;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [
                MockWrapperComponent
            ],
            imports: [
                forms_1.FormsModule,
                text_body_module_1.TextBodyModule
            ],
            providers: [
                { provide: shared_1.CoreApiService, useValue: testing_2.CoreApiServiceMock },
                { provide: shared_1.TextMsgItApiService, useValue: testing_2.CoreApiServiceMock },
                { provide: core_1.ElementRef, useValue: $('<textarea></textarea>') }
            ]
        });
    });
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(MockWrapperComponent);
        component = fixture.componentInstance;
        debugElem = fixture.debugElement;
    });
    beforeEach(function () {
        /* latest way to access directive that you are testing--in our tests */
        //directive = debugElem.query(By.directive(CharacterCounterDirective)).componentInstance;
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
    it('should create CharacterCounterDirective', function () {
        expect(component.directive).toBeTruthy();
    });
    describe('header count tests', function () {
        var headers = [];
        beforeEach(function () {
            headers = [
                { name: 'Property',
                    max_length: 23
                },
                { name: 'First Name',
                    max_length: 11
                },
                { name: 'T-Code',
                    max_length: 8
                }
            ];
        });
        it('should accurately count with basic headers', function () {
            component.directive.headers = headers;
            component.directive.input.val('test [Property]');
            var remaining = component.directive.count();
            expect(remaining).toEqual(132);
        });
        it('should accurately count with space in header Name', function () {
            component.directive.headers = headers;
            component.directive.input.val('test [First Name]');
            var remaining = component.directive.count();
            expect(remaining).toEqual(144);
        });
        it('should accurately count with special character in header Name', function () {
            component.directive.headers = headers;
            component.directive.input.val('test [T-Code]');
            var remaining = component.directive.count();
            expect(remaining).toEqual(147);
        });
        it('should accurately count with no headers', function () {
            component.directive.input.val('test message');
            var remaining = component.directive.count();
            expect(remaining).toEqual(148);
        });
    });
});
var MockWrapperComponent = (function () {
    function MockWrapperComponent() {
        this.ngModel = 'initial characters';
    }
    MockWrapperComponent.prototype.ngAfterViewInit = function () {
        /* directive should be defined now */
    };
    return MockWrapperComponent;
}());
__decorate([
    core_1.ViewChild(character_counter_directive_1.CharacterCounterDirective),
    __metadata("design:type", character_counter_directive_1.CharacterCounterDirective)
], MockWrapperComponent.prototype, "directive", void 0);
MockWrapperComponent = __decorate([
    core_1.Component({
        template: "\n<textarea rdCharacterCounter [(ngModel)]=\"ngModel\"></textarea>\n  "
    }),
    __metadata("design:paramtypes", [])
], MockWrapperComponent);
exports.MockWrapperComponent = MockWrapperComponent;
//# sourceMappingURL=character-counter.directive.spec.js.map