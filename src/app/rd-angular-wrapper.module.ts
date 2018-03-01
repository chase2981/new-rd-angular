import { NgModule } from '@angular/core';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { CookieXSRFStrategy, HttpModule, Request, XSRFStrategy } from '@angular/http';
import { RdAngularCoreModule, CoreAuthServiceConfig } from '@rd/core/lib/index';
import { RdAngularCommonModule } from '@rd/common/lib/index';
/* key point here */
import { RdAngularFormsModule } from '@rd/forms/lib/index';
/* vs */
// import { RdAngularFormsModule } from '@rd/forms'; (currently broken i think)

import { RdAngularCompilerModule } from '@rd/compiler';
import { RdAngularBlockedApptTimeModule } from '@rd/blocked-appt-time';
import { RdAngularDatetimeModule } from '@rd/datetime';
// import { RdAngularSmsModule } from '@rd/sms';

/* idea for a hands on activity right here */
// import { LoadingIndicatorModule } from '@turbonemesis/angular-lib/dist/lib/loading-indicator';
// import { TextEditorModule } from '@turbonemesis/angular-lib/dist/lib/text-editor';

import { AppComponent } from './app.component';
import { RdCoreAuthServiceConfig } from './config';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    HttpModule,
    RdAngularCompilerModule,
    RdAngularCoreModule,
    RdAngularCommonModule,
    // RdAngularFormsModule,
    // RdAngularBlockedApptTimeModule,
    // RdAngularDatetimeModule.forRoot(),
    // RdAngularSmsModule,
    // LoadingIndicatorModule,
    // TextEditorModule,
  ],
  providers: [
    { provide: CoreAuthServiceConfig, useClass: RdCoreAuthServiceConfig }
    // { provide: APP_BASE_HREF, useValue: '/' },
    // { provide: XSRFStrategy, useValue: cookieStrategy },
    // { provide: RequestOptions, useValue: {} }
]
})
export class RdAngularWrapperModule { }

export function cookieStrategy() {
  return new CustomCookieXSRFStrategy('csrftoken', 'X-CSRFToken');
}

export class CustomCookieXSRFStrategy implements XSRFStrategy {
  private _cookieName;
  private _headerName;
  constructor(_cookieName?: string, _headerName?: string){

  }
  configureRequest(req: Request): void {
    console.log('req', req);
  }
}
