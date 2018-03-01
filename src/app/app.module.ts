import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RdAngularWrapperModule } from './rd-angular-wrapper.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RdAngularWrapperModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
