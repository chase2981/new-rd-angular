import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RdAngularCoreModule } from '@rd/core';
import { RdAngularFormsModule } from '@rd/forms';

import {
    OneTimeBlockedApptDirective,
    BlockedApptTimeDirective,
    DayOfWeekHourDirective,
    RecurringBlockedApptDirective
} from './index';

@NgModule({
    imports: [
        CommonModule,
        RdAngularCoreModule,
        RdAngularFormsModule,
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
      RdAngularFormsModule,
    ],
    providers: [

    ]
})
export class RdAngularBlockedApptTimeModule {

}
