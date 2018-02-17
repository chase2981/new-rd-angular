import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RdAngularCoreModule } from '../core/core.module';
import { BootstrapSelectModule } from './bootstrap-select';
import { BUTTON_GROUP_DIRECTIVES } from './button-group';
import { DatepickerComponent, RangepickerComponent, DatepickerToggleButton, DatepickerQuickAccessButton, DropdownBuilderComponent, DatepickerComboSelectComponent } from './datepicker';
import { TextEditorDirective } from './text-editor';
import { ComboSelectModule } from './combo';
import { TimePickerComboSelectComponent } from './timepicker';
import { PickmeupModule } from './shared/pickmeup';
import { SelectBuilderModule } from './shared/select-builder';
import { SelectModule } from './select';
import { UiMaskDirective } from './ui-mask.directive';
import { ColorPickerColorComponent, ColorPickerComponent } from './color-picker';
import { InputModule } from './input';
import { ApiFilterGroupModule } from './api-filter-group/api-filter-group.module';
import { RecaptchaComponent } from './recaptcha';
import { BlurDirective } from './blur';

@NgModule({
  declarations: [
    BlurDirective,
    BUTTON_GROUP_DIRECTIVES,
    ColorPickerColorComponent,
    ColorPickerComponent,
    DatepickerComboSelectComponent,
    DatepickerComponent, RangepickerComponent, DatepickerToggleButton, DatepickerQuickAccessButton,
    DropdownBuilderComponent,
    TextEditorDirective,
    TimePickerComboSelectComponent,
    UiMaskDirective,
    RecaptchaComponent,
  ],
  imports: [
    CommonModule,
    ComboSelectModule,
    RdAngularCoreModule,
    FormsModule,
    SelectModule,
    BootstrapSelectModule,
    InputModule,
    ApiFilterGroupModule,
    PickmeupModule,
    SelectBuilderModule,
  ],
  exports: [
    BlurDirective,
    BUTTON_GROUP_DIRECTIVES,
    ColorPickerColorComponent,
    ColorPickerComponent,
    ComboSelectModule,
    DatepickerComboSelectComponent,
    DatepickerComponent, RangepickerComponent, DatepickerToggleButton, DatepickerQuickAccessButton,
    DropdownBuilderComponent,
    TextEditorDirective,
    PickmeupModule,
    SelectBuilderModule,
    TimePickerComboSelectComponent,
    RecaptchaComponent,
    SelectModule,
    BootstrapSelectModule,
    UiMaskDirective,
    InputModule,
    ApiFilterGroupModule,
  ],
  providers: [
  ]
})
export class RdAngularFormsModule { }
