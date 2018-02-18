/* tslint:disable:no-unused-variable */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./common.module"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var common_module_1 = require("./common.module");
    describe('SmsModule', function () {
        var mod;
        beforeEach(function () {
            mod = new common_module_1.RdAngularCommonModule();
        });
        it('should create an instance', function () {
            expect(mod).toBeTruthy();
        });
    });
});
