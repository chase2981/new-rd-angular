import { Component, OnInit, Input } from '@angular/core';

import { Select } from '../select';

@Component({
  selector: 'rd-bootstrap-select',
  template: require('./bootstrap-select.component.html'),
  styles: [require('./bootstrap-select.component.less')]
})
export class BootstrapSelectComponent implements OnInit {
  @Input() btnClass: string = 'btn-default';
  @Input() defaultTitle: string;
  @Input() disabled: boolean = false;
  @Input() select: Select;
  @Input() aggregateAfter: number = 2;

  title: string = null;

  constructor() {

  }

  ngOnInit() {

  }
}
