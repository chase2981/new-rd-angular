import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';

import { RdAngularCoreModule } from '@rd/core';

import { ExpandingListViewComponent } from './expanding-list-view';
import { TelephonePipe } from './pipes';
import { TabComponent, TabNavComponent, TabsetComponent } from './tabset';
import { UPLOAD_DIRECTIVES } from './upload';
import { MODAL_DIRECTIVES, BOOTSTRAP_MODAL_DIRECTIVES } from './modal';
import { LoadingIndicatorComponent } from './loading-indicator';
import { SimpleSortModule } from './simple-sort';
import { Toast } from './toast';
import { FullcalendarModule } from './fullcalendar/fullcalendar.module';
import { IFrameModule } from './iframe/iframe.module'

@NgModule({
    declarations: [
        ExpandingListViewComponent,
        BOOTSTRAP_MODAL_DIRECTIVES,
        MODAL_DIRECTIVES,
        TelephonePipe,
        TabComponent, TabNavComponent, TabsetComponent,
        UPLOAD_DIRECTIVES,
        LoadingIndicatorComponent,
    ],
    imports: [
        CommonModule,
        RdAngularCoreModule,
        FormsModule,
        FileUploadModule,
        IFrameModule,
        SimpleSortModule,
    ],
    exports: [
        ExpandingListViewComponent,
        BOOTSTRAP_MODAL_DIRECTIVES,
        MODAL_DIRECTIVES,
        TelephonePipe,
        TabComponent, TabNavComponent, TabsetComponent,
        UPLOAD_DIRECTIVES,
        LoadingIndicatorComponent,
        SimpleSortModule,
        FullcalendarModule,
        IFrameModule,
    ],
    providers: [
        Toast
    ]
})
export class RdAngularCommonModule { }
