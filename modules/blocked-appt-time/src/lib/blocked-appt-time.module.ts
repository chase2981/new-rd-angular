import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RdAngularCoreModule } from '@rd/core';

import {
    OneTimeBlockedApptDirective,
    BlockedApptTimeDirective,
    DayOfWeekHourDirective,
    RecurringBlockedApptDirective
} from './index';

@NgModule({
    imports: [
        RdAngularCoreModule,
    ],
    declarations: [
      OneTimeBlockedApptDirective,
      BlockedApptTimeDirective,
      DayOfWeekHourDirective,
      RecurringBlockedApptDirective,
    ],
    exports: [
      OneTimeBlockedApptDirective,
      BlockedApptTimeDirective,
      DayOfWeekHourDirective,
      RecurringBlockedApptDirective,
      RdAngularCoreModule,
    ],
    providers: [

    ]
})
export class RdAngularBlockedApptTimeModule {

}
