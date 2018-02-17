import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimpleSortDirective } from './simple-sort.directive';
import { SimpleSortFieldComponent } from './shared';

@NgModule({
    declarations: [
        SimpleSortDirective,
        SimpleSortFieldComponent,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        SimpleSortDirective,
        SimpleSortFieldComponent,
    ],
})
export class SimpleSortModule { }
