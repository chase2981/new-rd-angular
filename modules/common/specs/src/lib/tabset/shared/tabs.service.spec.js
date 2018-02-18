/* tslint:disable:no-unused-variable */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./tabs.service"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tabs_service_1 = require("./tabs.service");
    var service = null;
    describe('Tabs Service', function () {
        beforeEach(function () {
            service = new tabs_service_1.TabsService();
        });
        it('should ...', function () {
            expect(service).toBeTruthy();
        });
    });
});
