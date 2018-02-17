import {
  Component, ChangeDetectorRef, OnInit, OnDestroy, Input, Output, ElementRef,
  EventEmitter, Directive, HostBinding, HostListener
} from '@angular/core';
import { NgModel } from '@angular/forms';
import { ReplaySubject } from 'rxjs/Rx';

import { equals, isDefined } from '../../core';

import { isBlur } from '../helpers';
import { NgModelInput, NgModelInputValueAccessor } from '../ng-model-input';
import { Select, Option } from './shared';

var count = 1;

@Directive({
  selector: '[rdSelect]',
  exportAs: 'rdSelect',
  providers: [new NgModelInputValueAccessor(SelectDirective)]
})
export class SelectDirective extends NgModelInput implements OnInit, Select {
  /**
   * @property toggleable: only applies when single-select, 
   * refering to when an option is already active and
   * a user clicks on it, whether or not the ngModel is set back to null
   * when that happens (applicable to lead-card circle-select)
   * @type {boolean}
   * @memberof SelectDirective
   */
  @Input() multiple?: boolean = false;
  @Input() nullable?: boolean = false;
  @Input() open: boolean = false;
  @Output() change: EventEmitter<any> = new EventEmitter<any>();

  id: number = count;
  optionChange$: EventEmitter<Option> = new EventEmitter<Option>();
  options: Option[] = [];

  constructor() {
    super();
    count++;
  }

  ngOnInit() {
    if (this.multiple && !this.ngModel)
      super.writeValue([]);
  }

  addOption(option: Option) {
    this.options.push(option);
    this.optionChange$.emit(option);
  }

  removeOption(option: Option) {
    this.options = this.options.splice(option.value, 1);
  }

  getActiveOption() {
    return this.options.filter((option: Option) => equals(option.value, this.ngModel))[0];
  }

  setNgModel(newVal) {
    super.setNgModel(newVal);
    this.change.emit(newVal);
  }

  toggle(newVal?: boolean) {
    if (isDefined(newVal))
      this.open = newVal;

    return this.open;
  }
}







