import { AfterContentInit, Component, EventEmitter, OnInit, OnDestroy, Output, Query, QueryList, ContentChildren } from '@angular/core';

import { TabComponent } from './tab';
import { TabNavComponent } from './tab-nav';

@Component({
    selector: 'rd-tabset',
    template: require('./tabset.component.html'),
    styles: [require('./tabset.component.less')]
})
export class TabsetComponent implements OnInit {
    @Output() selected = new EventEmitter();

    private tabs: TabComponent[] = [];

    constructor() {

    }

    ngOnInit() {

    }

    addTab(tab: TabComponent) {
        if (!this.tabs.length) {
            tab.activate();
        }
        this.tabs.push(tab);
    }

    selectTab(tab: TabComponent) {
        this.tabs.map((tab) => {
            tab.deactivate();
        });
        tab.activate();
        this.selected.emit(tab);
    }
}
