import {
  UploadFilePreviewComponent, UploadFileQueueComponent,
  UploadFileDropZoneComponent, UploadFileProgressBarComponent,
  UploadFileSelectButtonComponent, UploadFileSubmitButtonComponent
} from './shared';
import { UploadComponent } from './upload.component';

export { UploadChildComponent } from './shared/upload-child-component';

export const UPLOAD_DIRECTIVES = [
  UploadComponent,
  UploadFileQueueComponent, UploadFilePreviewComponent, UploadFileDropZoneComponent,
  UploadFileProgressBarComponent, UploadFileSelectButtonComponent, UploadFileSubmitButtonComponent
];
