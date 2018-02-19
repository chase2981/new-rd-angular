import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { CookieXSRFStrategy, HttpModule, Request, XSRFStrategy } from '@angular/http';
import { RdAngularCommonModule } from '@rd/common';
import { CompilerModule } from '@rd/compiler';
import { LoadingIndicatorModule } from '@turbonemesis/angular-lib/dist/lib/loading-indicator';
import { TextEditorModule } from '@turbonemesis/angular-lib/dist/lib/text-editor';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CompilerModule,
    HttpModule,
    // LoadingIndicatorModule,
    // TextEditorModule,
    RdAngularCommonModule,
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
