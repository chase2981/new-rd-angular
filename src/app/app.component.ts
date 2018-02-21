import { Input, Component, ViewContainerRef, ViewChild, AfterViewInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

import { isFunction, CoreApiService, CoreAuthServiceConfig } from '@rd/core';
import { CompiledResultModel, TemplateCompiler } from '@rd/compiler';
import { TimezoneService } from '@rd/datetime';

import {RdCoreAuthServiceConfig} from './do_not_make_public';
import { BootstrapModalComponent } from '@rd/common';
import { CharacterCounterDirective } from '@rd/sms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @Input() uploader: FileUploader = new FileUploader({
    url: '/upload',
    autoUpload: true
  });
  @ViewChild('charCounter') charCounter: CharacterCounterDirective;
  @ViewChild('photosModal') photosModal: BootstrapModalComponent;

  modalOptions = {
    show: true
  };
  open: boolean = false;
  showModal: boolean = false;
  textEditorNgModel: string;
  test: string;
  textEditorConfig = {
    customConfig: '/assets/ckeditor-slim.config.js',
    htmlEncodeOutput: true
  };

  title = 'app';

  constructor(private coreApiSvc: CoreApiService, private timezoneSvc: TimezoneService,
    private templateCompiler: TemplateCompiler, private viewContainerRef: ViewContainerRef){

  }

  ngOnInit(){
    console.log('@rd/sms.charCounter', this.charCounter);
    console.log('@rd/datetime.timezoneSvc', this.timezoneSvc);
    console.log('@rd/core.coreApiSvc', this.coreApiSvc);
    console.log('@rd/core.isFunction(fn)', isFunction(function(){}));
    this.templateCompiler.compile('/assets/auto-email-template.html', { id: 291, firstName: 'chase', lastName: 'gibbs' }, this.viewContainerRef, []).subscribe((result: CompiledResultModel) => {
      console.log('@rd/compiler.compiledResult', result);
    });
  }

  ngAfterViewInit(){
    console.log('@rd/common.photosModal', this.photosModal);
  }

  onChange(event){
    console.log('@rd/forms.rdInputThrottle', event);
  }

  onUploadSuccess(event){
    console.log(event);
  }
}
