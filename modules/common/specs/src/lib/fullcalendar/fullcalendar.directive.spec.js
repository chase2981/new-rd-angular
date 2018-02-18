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
        define(["require", "exports", "@angular/core/testing", "@angular/core", "@rd/core", "@rd/core/testing", "./fullcalendar.module", "./fullcalendar.directive"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /* tslint:disable:no-unused-variable */
    var testing_1 = require("@angular/core/testing");
    var core_1 = require("@angular/core");
    var core_2 = require("@rd/core");
    var testing_2 = require("@rd/core/testing");
    var fullcalendar_module_1 = require("./fullcalendar.module");
    var fullcalendar_directive_1 = require("./fullcalendar.directive");
    describe('FullcalendarDirective', function () {
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
                    fullcalendar_module_1.FullcalendarModule
                ],
                providers: [
                    { provide: core_2.CoreApiService, useValue: testing_2.CoreApiServiceMock },
                    { provide: core_2.TextMsgItApiService, useValue: testing_2.CoreApiServiceMock },
                ]
            });
        });
        beforeEach(function () {
            fixture = testing_1.TestBed.createComponent(MockWrapperComponent);
            component = fixture.componentInstance;
            debugElem = fixture.debugElement;
            //fixture.detectChanges();
        });
        beforeEach(function () {
            /* latest way to access directive that you are testing--works in our tests only */
            //directive = debugElem.query(By.directive(FullcalendarDirective)).componentInstance;
        });
        it('should create', function () {
            expect(component).toBeTruthy();
        });
        it('should create FullcalendarDirective', function () {
            expect(component.directive).toBeTruthy();
        });
    });
    var MockWrapperComponent = (function () {
        function MockWrapperComponent() {
        }
        MockWrapperComponent.prototype.ngAfterViewInit = function () {
            /* directive should be defined after this point */
        };
        __decorate([
            core_1.ViewChild(fullcalendar_directive_1.FullcalendarDirective),
            __metadata("design:type", fullcalendar_directive_1.FullcalendarDirective)
        ], MockWrapperComponent.prototype, "directive", void 0);
        MockWrapperComponent = __decorate([
            core_1.Component({
                template: "<div rdFullcalendar></div>"
            }),
            __metadata("design:paramtypes", [])
        ], MockWrapperComponent);
        return MockWrapperComponent;
    }());
    exports.MockWrapperComponent = MockWrapperComponent;
});
