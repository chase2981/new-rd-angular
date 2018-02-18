import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RdAngularCoreModule } from '@rd/core';
import { Toast } from '@rd/common';
import { RdAngularDatetimeModule } from '@rd/datetime';

import { SmsSentDirective } from './sent';
import { SmsReceiveDirective } from './receive';
import { SmsOptOutDirective } from './opt-out';
import { SmsAccountDirective } from './account';
import { SmsPhoneDirective } from './phone';
import { SmsDirective } from './sms.directive';
import { SmsQueueDirective, SmsQueueModelDirective,
  SmsQueueDataLayerDirective } from './queue';
import { TextBodyModule } from './shared/text-body';

@NgModule({
  imports: [
    CommonModule,
    RdAngularCoreModule,
    RdAngularDatetimeModule,
    TextBodyModule,
  ],
  declarations: [
    SmsQueueModelDirective,
    SmsQueueDataLayerDirective,
    SmsDirective,
    SmsQueueDirective,
    SmsReceiveDirective,
    SmsOptOutDirective,
    SmsSentDirective,
    SmsAccountDirective,
    SmsPhoneDirective,
  ],
  exports: [
    SmsQueueDirective,
    SmsReceiveDirective,
    SmsOptOutDirective,
    SmsSentDirective,
    SmsAccountDirective,
    SmsPhoneDirective,
    SmsQueueModelDirective,
    SmsQueueDataLayerDirective,
    SmsDirective,

    /* module exports */
    RdAngularCoreModule,
    RdAngularDatetimeModule,
    TextBodyModule,
  ],
  providers: [
    Toast
  ]
})
export class RdAngularSmsModule { }
