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
        define(["require", "exports", "@angular/core", "@angular/common", "@angular/forms", "ng2-file-upload", "@rd/core", "./expanding-list-view", "./pipes", "./tabset", "./upload", "./modal", "./loading-indicator", "./simple-sort", "./toast", "./fullcalendar/fullcalendar.module", "./iframe/iframe.module"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var core_1 = require("@angular/core");
    var common_1 = require("@angular/common");
    var forms_1 = require("@angular/forms");
    var ng2_file_upload_1 = require("ng2-file-upload");
    var core_2 = require("@rd/core");
    var expanding_list_view_1 = require("./expanding-list-view");
    var pipes_1 = require("./pipes");
    var tabset_1 = require("./tabset");
    var upload_1 = require("./upload");
    var modal_1 = require("./modal");
    var loading_indicator_1 = require("./loading-indicator");
    var simple_sort_1 = require("./simple-sort");
    var toast_1 = require("./toast");
    var fullcalendar_module_1 = require("./fullcalendar/fullcalendar.module");
    var iframe_module_1 = require("./iframe/iframe.module");
    var RdAngularCommonModule = (function () {
        function RdAngularCommonModule() {
        }
        RdAngularCommonModule = __decorate([
            core_1.NgModule({
                declarations: [
                    expanding_list_view_1.ExpandingListViewComponent,
                    modal_1.BootstrapModalComponent, modal_1.ModalShowButton, modal_1.ModalHideButton,
                    modal_1.ModalToggleButton,
                    modal_1.ModalComponent, modal_1.ModalShowButton, modal_1.ModalHideButton, modal_1.ModalToggleButton,
                    pipes_1.TelephonePipe,
                    tabset_1.TabComponent, tabset_1.TabNavComponent, tabset_1.TabsetComponent,
                    upload_1.UploadComponent,
                    upload_1.UploadFileQueueComponent, upload_1.UploadFilePreviewComponent,
                    upload_1.UploadFileDropZoneComponent,
                    upload_1.UploadFileProgressBarComponent, upload_1.UploadFileSelectButtonComponent,
                    upload_1.UploadFileSubmitButtonComponent,
                    loading_indicator_1.LoadingIndicatorComponent,
                ],
                imports: [
                    common_1.CommonModule,
                    core_2.RdAngularCoreModule,
                    forms_1.FormsModule,
                    ng2_file_upload_1.FileUploadModule,
                    iframe_module_1.IFrameModule,
                    simple_sort_1.SimpleSortModule,
                ],
                exports: [
                    expanding_list_view_1.ExpandingListViewComponent,
                    pipes_1.TelephonePipe,
                    tabset_1.TabComponent, tabset_1.TabNavComponent, tabset_1.TabsetComponent,
                    upload_1.UploadComponent,
                    upload_1.UploadFileQueueComponent, upload_1.UploadFilePreviewComponent,
                    upload_1.UploadFileDropZoneComponent,
                    upload_1.UploadFileProgressBarComponent, upload_1.UploadFileSelectButtonComponent,
                    upload_1.UploadFileSubmitButtonComponent,
                    loading_indicator_1.LoadingIndicatorComponent,
                    simple_sort_1.SimpleSortModule,
                    fullcalendar_module_1.FullcalendarModule,
                    iframe_module_1.IFrameModule,
                ],
                providers: [
                    toast_1.Toast
                ]
            })
        ], RdAngularCommonModule);
        return RdAngularCommonModule;
    }());
    exports.RdAngularCommonModule = RdAngularCommonModule;
});
