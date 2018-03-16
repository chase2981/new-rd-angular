import {NgModule} from '@angular/core';

import {
  RdAngularCompilerModule
} from '@rd/compiler';

@NgModule({
  exports: [
    RdAngularCompilerModule
  ]
})
export class RdAngularWrapperModule {}
