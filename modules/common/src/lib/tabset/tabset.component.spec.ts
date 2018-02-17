/* tslint:disable:no-unused-variable */
import { ElementRef, Inject } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';

import {
  async, inject
} from '@angular/core/testing';

import { TabsetComponent } from './tabset.component';
import { TabComponent } from './tab';
import { TabNavComponent } from './tab-nav';

let component: TabsetComponent;
let fixture: ComponentFixture<TabsetComponent>;
let debugElem: DebugElement;
let elem: HTMLElement;

describe('Component: Tabset', () => {
  // simple style
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabsetComponent, TabComponent, TabNavComponent],
    });

    fixture = TestBed.createComponent(TabsetComponent);
    component = fixture.componentInstance;
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  // it('provider should be defined', () => {
  //   expect(component.elem).toBeTruthy();
  // })
});
