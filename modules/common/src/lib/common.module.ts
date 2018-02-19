import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';

import { RdAngularCoreModule } from '@rd/core';

import { ExpandingListViewComponent } from './expanding-list-view';
import { TelephonePipe } from './pipes';
import { TabComponent, TabNavComponent, TabsetComponent } from './tabset';
import {   UploadComponent,
  UploadFileQueueComponent, UploadFilePreviewComponent, UploadFileDropZoneComponent,
  UploadFileProgressBarComponent, UploadFileSelectButtonComponent, UploadFileSubmitButtonComponent
 } from './upload';
import { ModalComponent, ModalShowButton, ModalHideButton, ModalToggleButton,
  BootstrapModalComponent
} from './modal';
import { LoadingIndicatorModule } from './loading-indicator';
import { SimpleSortModule } from './simple-sort';
import { Toast } from './toast';
import { FullcalendarModule } from './fullcalendar/fullcalendar.module';
import { IFrameModule } from './iframe/iframe.module'

@NgModule({
    declarations: [
        ExpandingListViewComponent,
        BootstrapModalComponent, ModalShowButton, ModalHideButton,
        ModalToggleButton,
        ModalComponent, ModalShowButton, ModalHideButton, ModalToggleButton,
        TelephonePipe,
        TabComponent, TabNavComponent, TabsetComponent,
        UploadComponent,
        UploadFileQueueComponent, UploadFilePreviewComponent,
        UploadFileDropZoneComponent,
        UploadFileProgressBarComponent, UploadFileSelectButtonComponent,
        UploadFileSubmitButtonComponent,
    ],
    imports: [
        CommonModule,
        RdAngularCoreModule,
        FormsModule,
        FileUploadModule,
        IFrameModule,
        SimpleSortModule,
        LoadingIndicatorModule,
    ],
    exports: [
        ExpandingListViewComponent,
        BootstrapModalComponent, ModalShowButton, ModalHideButton,
        ModalToggleButton,
        ModalComponent, ModalShowButton, ModalHideButton, ModalToggleButton,
        TelephonePipe,
        TabComponent, TabNavComponent, TabsetComponent,
        UploadComponent,
        UploadFileQueueComponent, UploadFilePreviewComponent,
        UploadFileDropZoneComponent,
        UploadFileProgressBarComponent, UploadFileSelectButtonComponent,
        UploadFileSubmitButtonComponent,
        SimpleSortModule,
        FullcalendarModule,
        IFrameModule,
        LoadingIndicatorModule,
    ],
    providers: [
        Toast
    ]
})
export class RdAngularCommonModule { }
