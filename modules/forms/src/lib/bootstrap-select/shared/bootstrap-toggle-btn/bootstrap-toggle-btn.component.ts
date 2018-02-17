import { Component, OnInit, Input } from '@angular/core';

import { Select } from '../../../select';

@Component({
  selector: 'rd-bootstrap-toggle-btn',
  template: require('./bootstrap-toggle-btn.component.html'),
  styles: [require('./bootstrap-toggle-btn.component.less')]
})
export class BootstrapToggleBtnComponent implements OnInit {
  @Input() select: Select;

  protected title: string;

  constructor() { }

  ngOnInit() {
  }

}
