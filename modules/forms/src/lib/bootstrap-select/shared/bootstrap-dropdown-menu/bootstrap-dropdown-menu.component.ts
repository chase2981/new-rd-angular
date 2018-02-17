import { Component, OnInit, Input } from '@angular/core';

import { equals, isArray } from '@rd/core';

import { KENDO_DROPDOWN_ANIMATION } from '../../../shared';
import { Select } from '../../../select';
import { Option } from '../../../select/shared';

@Component({
  selector: 'rd-bootstrap-dropdown-menu',
  template: require('./bootstrap-dropdown-menu.component.html'),
  styles: [require('./bootstrap-dropdown-menu.component.less')],
  animations: [
    KENDO_DROPDOWN_ANIMATION
  ]
})
export class BootstrapDropdownMenuComponent implements OnInit {
  @Input() select: Select;
  @Input() list: any[] = [];
  @Input() filterBy: string;

  constructor() {
  }

  ngOnInit() {
  }

  updateList(newVal: { array: any[] }) {
    if (isArray(newVal.array) && newVal.array.length) {
      this.select.options.forEach((option: Option) => {
        for (let i = 0; i < newVal.array.length; i++) {
          if (equals(newVal.array[i], option.value)) {
            option.hidden = false;
            break;
          }
          else {
            option.hidden = true;
          }
        }
      });
    } else {
      this.select.options.forEach((option: Option) => option.hidden = true);
    }
  }
}