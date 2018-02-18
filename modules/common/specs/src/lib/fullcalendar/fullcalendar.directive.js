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
        define(["require", "exports", "@angular/core", "fullcalendar", "@rd/core"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var core_1 = require("@angular/core");
    require("fullcalendar");
    var core_2 = require("@rd/core");
    var FullcalendarDirective = (function () {
        /* https://github.com/nazar-pc/PickMeUp */
        function FullcalendarDirective(elementRef, ngZone) {
            this.ngZone = ngZone;
            this.options = {};
            this.dayClick = new core_1.EventEmitter();
            this.eventClick = new core_1.EventEmitter();
            this.elem = elementRef.nativeElement;
        }
        FullcalendarDirective.prototype.ngAfterViewInit = function () {
            /* if not run in ngZone, it won't be aware of our changes whereas we are
            invoking a jquery plugin outside of angular--we don't have to
            but we gain a significant performance advantage when we do run
            the plugin outside of angular--performance resulting from way less
            change detection loops. we might also abstract this ngZone logic out
            to a similar implementation but within the directive itself so that each
            invoker doesn't have to worry about it */
            //    this.ngZone.runOutsideAngular(this.initFullCalendar.bind(this));
            /* store calendar view model for later */
            //    this.calendar = $(this.elem).data('fullCalendar');
            //    console.log('this.calendar', this.calendar);
        };
        FullcalendarDirective.prototype.ngOnChanges = function (newVal) {
            var optionsChange = newVal['options'];
            if (optionsChange && optionsChange.currentValue) {
                this.calendar = this.ngZone.runOutsideAngular(this.initFullCalendar.bind(this));
                console.log('this.calendar', this.calendar);
            }
        };
        FullcalendarDirective.prototype.initFullCalendar = function () {
            $(this.elem).fullCalendar('destroy');
            var self = this;
            $(this.elem).fullCalendar(core_2.extend({
                eventClick: function (e) { self.ngZone.run(function () { self.eventClick.emit(e); }); },
                dayClick: function (e) { self.ngZone.run(function () { self.dayClick.emit(e); }); }
            }, this.options));
            return $(this.elem).data('fullCalendar');
        };
        FullcalendarDirective.prototype.refetchEvents = function () {
            $(this.elem).fullCalendar('refetchEvents');
        };
        FullcalendarDirective.prototype.ngOnDestroy = function () {
            $(this.elem).fullCalendar('destroy');
        };
        __decorate([
            core_1.Input(),
            __metadata("design:type", Object)
        ], FullcalendarDirective.prototype, "options", void 0);
        __decorate([
            core_1.Output(),
            __metadata("design:type", core_1.EventEmitter)
        ], FullcalendarDirective.prototype, "dayClick", void 0);
        __decorate([
            core_1.Output(),
            __metadata("design:type", core_1.EventEmitter)
        ], FullcalendarDirective.prototype, "eventClick", void 0);
        FullcalendarDirective = __decorate([
            core_1.Directive({
                selector: '[rdFullcalendar]',
                exportAs: 'rdFullCalendar'
            }),
            __metadata("design:paramtypes", [core_1.ElementRef, core_1.NgZone])
        ], FullcalendarDirective);
        return FullcalendarDirective;
    }());
    exports.FullcalendarDirective = FullcalendarDirective;
});
