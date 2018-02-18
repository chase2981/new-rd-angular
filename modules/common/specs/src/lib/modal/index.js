(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./shared", "./bootstrap-modal", "./modal.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var shared_1 = require("./shared");
    exports.ModalShowButton = shared_1.ModalShowButton;
    exports.ModalHideButton = shared_1.ModalHideButton;
    exports.ModalToggleButton = shared_1.ModalToggleButton;
    var bootstrap_modal_1 = require("./bootstrap-modal");
    exports.BootstrapModalComponent = bootstrap_modal_1.BootstrapModalComponent;
    var modal_component_1 = require("./modal.component");
    exports.ModalComponent = modal_component_1.ModalComponent;
});
