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
        define(["require", "exports", "@angular/core", "@angular/core/testing", "@angular/platform-browser", "@angular/core/testing", "./expanding-list-view.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /* tslint:disable:no-unused-variable */
    var core_1 = require("@angular/core");
    var testing_1 = require("@angular/core/testing");
    var platform_browser_1 = require("@angular/platform-browser");
    var testing_2 = require("@angular/core/testing");
    var expanding_list_view_component_1 = require("./expanding-list-view.component");
    var component;
    var fixture;
    var debugElem;
    var elem;
    var TestHostComponent = (function () {
        function TestHostComponent() {
            this.open = false;
        }
        TestHostComponent.prototype.onToggle = function ($event) { this.open = $event; };
        TestHostComponent = __decorate([
            core_1.Component({
                template: "\n<rd-expanding-list-view class=\"collapse-card card-cross-sell\" (toggle)=\"onToggle($event)\" [open]=\"open\">\n  <div rd-expanding-list-view-header>\n    <b>header content</b>\n  </div>\n  <div rd-expanding-list-view-body *ngIf=\"open\">\n    <b>body content</b>\n  </div>\n</rd-expanding-list-view>"
            })
        ], TestHostComponent);
        return TestHostComponent;
    }());
    describe('Component: ExpandingListView', function () {
        // simple style
        beforeEach(testing_2.async(function () {
            testing_1.TestBed.configureTestingModule({
                declarations: [TestHostComponent, expanding_list_view_component_1.ExpandingListViewComponent],
                imports: [],
                providers: []
            }).compileComponents();
        }));
        beforeEach(function () {
            fixture = testing_1.TestBed.createComponent(TestHostComponent);
            component = fixture.componentInstance;
            debugElem = fixture.debugElement.query(platform_browser_1.By.css('.collapse-card')); // find
            fixture.detectChanges();
        });
        it('should create an instance', function () {
            expect(component).toBeTruthy();
        });
        // it('provider should be defined', () => {
        //   expect(component.elem).toBeTruthy();
        // })
    });
});
