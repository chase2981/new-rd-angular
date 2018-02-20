import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { CookieXSRFStrategy, HttpModule, Request, XSRFStrategy } from '@angular/http';
import { RdAngularCoreModule } from '@rd/core';
import { RdAngularCommonModule } from '@rd/common';
import { RdAngularFormsModule } from '@rd/forms';
import { RdAngularCompilerModule } from '@rd/compiler';
import { RdAngularBlockedApptTimeModule } from '@rd/blocked-appt-time';
import { RdAngularDatetimeModule } from '@rd/datetime';
import { RdAngularSmsModule } from '@rd/sms';
import { LoadingIndicatorModule } from '@turbonemesis/angular-lib/dist/lib/loading-indicator';
import { TextEditorModule } from '@turbonemesis/angular-lib/dist/lib/text-editor';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RdAngularCompilerModule,
    RdAngularCoreModule,
    RdAngularCommonModule,
    RdAngularFormsModule,
    RdAngularBlockedApptTimeModule,
    RdAngularDatetimeModule,
    RdAngularSmsModule,
    // LoadingIndicatorModule,
    // TextEditorModule,
  ],
  providers: [
    // { provide: APP_BASE_HREF, useValue: '/' },
    // { provide: XSRFStrategy, useValue: cookieStrategy },
    // { provide: RequestOptions, useValue: {} }
],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
