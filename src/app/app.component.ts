import { Input, Component, ViewContainerRef } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

import { isFunction } from '@rd/core';
import { CompiledResultModel, TemplateCompiler } from '@rd/compiler';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() uploader: FileUploader = new FileUploader({
    url: '/upload',
    autoUpload: true
  });
  open: boolean = false;
  textEditorNgModel: string;
  textEditorConfig = {
    customConfig: '/assets/ckeditor-slim.config.js',
    htmlEncodeOutput: true
  };

  title = 'app';

  constructor(private templateCompiler: TemplateCompiler, private viewContainerRef: ViewContainerRef){

  }

  ngOnInit(){
    console.log('isFunction(fn)', isFunction(function(){}));
    this.templateCompiler.compile('/assets/auto-email-template.html', { id: 291, firstName: 'chase', lastName: 'gibbs' }, this.viewContainerRef, []).subscribe((result: CompiledResultModel) => {
      console.log('data.json', result);
    });
  }

  onUploadSuccess(event){
    console.log(event);
  }
}
