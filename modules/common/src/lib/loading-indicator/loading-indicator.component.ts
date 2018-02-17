import { Component, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'rd-loading-indicator',
  template: require('./loading-indicator.component.html'),
  styles: [require('./loading-indicator.component.less')]
})
export class LoadingIndicatorComponent implements OnInit, OnDestroy {
  @Input() height: any = 75;
  @Input() width: any = 75;

  constructor() { }

  ngOnInit() {
    //console.log('**** loading-indicator init() ****');
  }

  ngOnDestroy() {
    //console.log('**** loading-indicator destroy() ****');
  }
}
