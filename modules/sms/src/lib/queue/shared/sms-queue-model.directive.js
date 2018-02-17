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
var shared_1 = require("../../../shared");
var common_1 = require("../../../../common");
var sms_model_1 = require("../../sms.model");
var SmsQueueModelDirective = (function () {
    function SmsQueueModelDirective(textApi, toast) {
        this.textApi = textApi;
        this.toast = toast;
        this.id = null;
        this.sms = new sms_model_1.SmsModel();
        this.sendDateTime = null;
        this.enqueue = new core_1.EventEmitter();
        this.endpoint = "/smsQueue";
        /* maps the raw python models to typescript models via its extended class properties being angular @Input()s */
        //super();
    }
    SmsQueueModelDirective.prototype.ngOnInit = function () {
        // let enqueue = this.enqueue;
        // let post = this.enqueue.switchMap(result => this.post());
        // post.subscribe((result) => {
        //   this.toast.success({
        //     title: 'success!!',
        //     msg: 'sms successfully queued.'
        //   }).log(result);
        // }, (ex) => {
        //   this.toast.error({
        //     title: 'oops!!',
        //     msg: 'something went wrong.'
        //   }).log(ex);
        // });
    };
    SmsQueueModelDirective.prototype.post = function () {
        return this.textApi.post(this.endpoint, this.mapped);
    };
    Object.defineProperty(SmsQueueModelDirective.prototype, "mapped", {
        get: function () {
            var result = {};
            for (var prop in this)
                result[prop] = this[prop];
            return result;
        },
        enumerable: true,
        configurable: true
    });
    return SmsQueueModelDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], SmsQueueModelDirective.prototype, "id", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], SmsQueueModelDirective.prototype, "sms", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SmsQueueModelDirective.prototype, "sendDateTime", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", core_1.EventEmitter)
], SmsQueueModelDirective.prototype, "enqueue", void 0);
SmsQueueModelDirective = __decorate([
    core_1.Directive({
        selector: '[rdSmsQueueModel]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof shared_1.TextMsgItApiService !== "undefined" && shared_1.TextMsgItApiService) === "function" && _a || Object, typeof (_b = typeof common_1.Toast !== "undefined" && common_1.Toast) === "function" && _b || Object])
], SmsQueueModelDirective);
exports.SmsQueueModelDirective = SmsQueueModelDirective;
var _a, _b;
//# sourceMappingURL=sms-queue-model.directive.js.map