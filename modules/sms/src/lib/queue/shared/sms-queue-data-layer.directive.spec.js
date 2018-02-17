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
var shared_1 = require("../../../shared");
var testing_2 = require("../../../testing");
var sms_queue_data_layer_directive_1 = require("./sms-queue-data-layer.directive");
var sms_module_1 = require("../../sms.module");
describe('Directive: SmsQueueDataLayer', function () {
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
                sms_module_1.RdAngularSmsModule
            ],
            providers: [
                shared_1.ImmutableService,
                { provide: shared_1.CoreApiService, useValue: testing_2.CoreApiServiceMock },
                { provide: shared_1.TextMsgItApiService, useValue: testing_2.CoreApiServiceMock },
            ]
        });
    });
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(MockWrapperComponent);
        component = fixture.componentInstance;
        debugElem = fixture.debugElement;
        fixture.detectChanges();
    });
    beforeEach(function () {
        /* latest way to access directive that you are testing--in our tests */
        //directive = debugElem.query(By.directive(SmsQueueDataLayerDirective)).componentInstance;
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
    it('should create SmsQueueDataLayerDirective', function () {
        expect(component.directive).toBeTruthy();
    });
});
var MockWrapperComponent = (function () {
    function MockWrapperComponent() {
    }
    MockWrapperComponent.prototype.ngAfterViewInit = function () {
        /* directive should be defined now */
    };
    return MockWrapperComponent;
}());
__decorate([
    core_1.ViewChild(sms_queue_data_layer_directive_1.SmsQueueDataLayerDirective),
    __metadata("design:type", sms_queue_data_layer_directive_1.SmsQueueDataLayerDirective)
], MockWrapperComponent.prototype, "directive", void 0);
MockWrapperComponent = __decorate([
    core_1.Component({
        template: "\n<div rdSmsQueueDataLayer></div>\n  "
    }),
    __metadata("design:paramtypes", [])
], MockWrapperComponent);
exports.MockWrapperComponent = MockWrapperComponent;
//# sourceMappingURL=sms-queue-data-layer.directive.spec.js.map