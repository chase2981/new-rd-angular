import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RdAngularCoreModule } from '@rd/core';
import { RdAngularFormsModule } from '@rd/forms';

import { OneTimeBlockedApptDirective } from './one-time-blocked-appt.directive';
import { BlockedApptTimeDirective } from './blocked-appt-time.directive';
import { DayOfWeekHourDirective } from './day-of-week-hour.directive';
import { RecurringBlockedApptDirective } from './recurring-blocked-appt.directive';

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
