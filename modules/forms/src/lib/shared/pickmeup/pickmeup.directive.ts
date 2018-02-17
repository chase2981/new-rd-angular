import { AfterViewInit, Directive, ElementRef, Input, Output, OnChanges, OnDestroy, EventEmitter, SimpleChange, SimpleChanges } from '@angular/core';
import * as moment from 'moment';

import { extend } from '@rd/core';
import { NgModelInput, NgModelInputValueAccessor } from '../../ng-model-input';

@Directive({
  selector: '[rdPickmeup]'
})
export class PickmeupDirective implements AfterViewInit, OnDestroy {
  @Input() moment: moment.Moment;
  @Input() mode: string = 'single';
  @Input() options: any = {};
  @Output() onPickmeupChange: EventEmitter<any> = new EventEmitter<any>();

  private elem: HTMLElement;
  private pickmeup: any;

  /* https://github.com/nazar-pc/PickMeUp */
  constructor(elementRef: ElementRef) {
    this.elem = elementRef.nativeElement;
  }

  ngAfterViewInit() {
    let self = this;
    let now = new Date();

    $(this.elem).pickmeup(extend({
      flat: true,
      mode: this.mode,
      date: this.moment,
      first_day: 0,
      change: (formatDate) => {
        self.onPickmeupChange.emit(self.getPluginValue());
      }
    }, this.options));
    /* store pickmeup view model for later */
    this.pickmeup = $(this.elem).data('pickmeup-options');
  }

  getPluginValue(): moment.Moment | moment.Moment[] {
    return this.mode === 'single' ? moment($(this.elem).pickmeup('get_date', false)) : this.getRange()
  }

  setPluginValue(newVal: moment.Moment | moment.Moment[]) {
    if (!newVal)
      return;
    $(this.elem).pickmeup('set_date', newVal);
  }

  private getRange(): moment.Moment[] {
    let range = $(this.elem).pickmeup('get_date', false);
    return [moment(range[0]), moment(range[1])];
  }

  ngOnDestroy() {
    $(this.elem).pickmeup('destroy');
  }
}
