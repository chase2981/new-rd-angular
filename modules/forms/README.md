<!--[![Build Status](https://travis-ci.org/ng2select/bootstrap.svg?branch=master)](https://travis-ci.org/ng2select/bootstrap)-->

## @rd/forms@7.x

#### this module contains any javascript code that has to do with html forms. (custom input components/directives etc)
it is reliant on the @rd/core, jquery, pickmeup, moment, and ckeditor modules. this module currently contains components/directives such as button-group-input, text-editor, datepicker, etc.

http://rd.github.io

## installation

```
npm install @rd/forms @rd/core jquery pickmeup moment moment-range ckeditor --save

```

### angular-cli.json one-time configuration

```json

      "styles": [
        "../node_modules/pickmeup/css/pickmeup.css",
      ],
      "scripts": [
        "../node_modules/jquery/dist/jquery.min.js",
        "../node_modules/moment/min/moment.min.js",
        "../node_modules/moment-range/dist/moment-range.js",
        "../node_modules/pickmeup/js/jquery.pickmeup.js",
        "../node_modules/ckeditor/ckeditor.js",
        "../node_modules/ckeditor/config.js"
      ],

```

## how to import

```TypeScript  

import { RdAngularFormsModule } from '@rd/forms';

```

## RdAngularFormsModule
the following section contains documentation on any components, directives, or modules which are exported by the RdAngularFormsModule

### NgModelInput (base-class)
beneficial if you are looking to implement a custom component with a dual-bound [(ngModel)]

### NgModelInputValueAccessor
must be provided along with the NgModelInput base class in order to obtain a dual-bound ngModel (using helper classes)

- simply extend NgModelInput and provide your component a new NgModelInputValueAccessor(componentName)
in order to have a fully-functional dual-bound ngModel-ready component

#### example usage

```TypeScript

import { NgModelInput, NgModelInputValueAccessor } from '@rd/forms';

@Directive({
  selector: 'rd-text-editor, [rd-text-editor]',
  providers: [new NgModelInputValueAccessor(TextEditorDirective)]
})
export class TextEditorDirective extends NgModelInput implements OnInit, AfterViewInit, OnDestroy {

  constructor(){
    super();
  }

  ...

  /* override parent definition */
  writeValue(newVal) {
    this.setPluginValue(newVal);
    super.writeValue(newVal);
  }

}

```


### Datepicker ```rd-datepicker```
this datepicker might be useful to you if you need a regular date-picker component w/quick-access-buttons (ie. reporting datepicker)

- if you need a date-range picker, refer to the Rangepicker component defined below
- allows you to define the html for the [rd-datepicker-toggle-button] and the [rd-datepicker-quick-access-button] array

#### example

```HTML

  <rd-datepicker (change)="onDateChange($event)" [(ngModel)]="ngModelDate" style="display: inline-block;">
      <a rd-datepicker-toggle-button class="btn btn-default" uib-btn-radio="0" uncheckable>
        <div *ngIf="ngModelDate">{{ngModelDate}}&nbsp;&nbsp;<i class="fa fa-sort-desc" style="vertical-align: text-top;"></i></div>
        <div *ngIf="!ngModelDate" class="md-placeholder">select date</div>
      </a>

    <button rd-datepicker-quick-access-button *ngFor="let quickAccessDate of quickAccessDatesAsObservable | async" [value]="quickAccessDate.value" class="btn btn-default btn-block">
      {{quickAccessDate.name}}
    </button>
  </rd-datepicker>

```

### Rangepicker ```rd-rangepicker```

#### example

```HTML

  <rd-rangepicker (change)="onRangeChange($event)" [(ngModel)]="ngModelRange" [momentFormat]="'MM/DD/Y'" style="display: inline-block;">
      <a rd-datepicker-toggle-button class="btn btn-default" uib-btn-radio="0" uncheckable>
        <div *ngIf="ngModelRange">{{getDateRangeDisplay()}}&nbsp;&nbsp;<i class="fa fa-sort-desc" style="vertical-align: text-top;"></i></div>
        <div *ngIf="!ngModelRange" class="md-placeholder">select date</div>
      </a>

    <button rd-datepicker-quick-access-button *ngFor="let quickAccessRange of quickAccessRangesAsObservable | async" [value]="quickAccessRange.value" class="btn btn-default btn-block">
      {{quickAccessRange.name}}
    </button>
  </rd-rangepicker>

```

### TextEditorDirective ```rd-text-editor, [rd-text-editor]```
beneficial if you want a fast ckeditor text-editor which is fully configurable and already bound to an [(ngModel)]

#### example

```HTML

<rd-text-editor [(ngModel)]="ngModel"></rd-text-editor>

```

#### inline example

```HTML

<div rd-text-editor [(ngModel)]="ngModelInline" [inline]="true">
    <h1>turbo</h1>
</div>

```

## SelectModule
specific to rdSelect and rdSelect directives only


### SelectDirective ```[rdSelect], [rdSelect][multiple="true"]```
this directive makes it easy to get one or more selected values of any list items quickly and easily via its exposed 
[(ngModel)] and (change)="onChange($event)" emitter

- responsible for UI-agnostic generic select/multiselect functionality
- intended to be paired with one or many child rdOption directives
- rdSelectTitle, rdSelectToggleBtn directives are optional
- this directive implements the Select interface

#### basic example

```HTML

<div rdSelect #select="rdSelect" [(ngModel)]="ngModelAry" [multiple]="true" rdBlur (blur)="select.open = false">
	<button class="btn" rdSelectToggleBtn [select]="select" rdSelectTitle (title)="setTitle($event)">
		<span *ngIf="!title"><-- select --></span>
		<span *ngIf="title">{{title}}</span>
  	</button>

	<ul rdSelectDropdown [select]="select">
		<li *ngFor="let unit of units" rdOption #option="rdOption" [select]="select" [title]="unit.address" [value]="unit.id" [class.active]="option.isActive()">{{unit.address}}</li>
	</ul>
</div>

<div class="well">{{ngModelAry}}</div>

```

### OptionDirective ```[rdOption]```
when this directive is paired with a Select, they work together to provide the select/multiselect functionality
that many components require

- compatible with [rdSelect][multiple="true"]
- value(s) may be object(s), number(s), or string(s) (depending on Select -> multiple status)
- not tied to any view so it can be used anywhere for anything select (could probably even be used on something like the [rd-list-legend-filter])
- notifies the SelectDirective of its existance onInit() so that it can then do calculations on whether this
option is selected or not based on the Select -> ngModel value
- exposes isActive() callback to apply whatever selected/active class you want

#### example
```HTML
		<li *ngFor="let unit of units" rdOption #option="rdOption" [select]="selectName" [title]="unit.address" [value]="unit.id" [class.active]="option.isActive()">
			<a><span>{{unit.address}}</span></a>
		</li>
```    


### BootstrapSelect ```rd-bootstrap-select```
presentation-layer component which works hand-in-hand with any directive which implements the Select interface

- you can make your own Select presentation-layer component(s)!!

#### example

```HTML

<rd-bootstrap-select [btnClass]="'btn-primary'" [defaultTitle]="'All Districts'" [select]="select2" 
  #select2="rdSelect" rdSelect [multiple]="true" [(ngModel)]="ngModelAry"
	(change)="onChange($event)">
	<rd-bootstrap-dropdown-menu rdSelectDropdown [select]="select2">
		<li *ngFor="let unit of units" rdOption #option="rdOption" [select]="select2" [title]="unit.address" [value]="unit.id" [class.active]="option.isActive()">
			<a><span>{{unit.address}}</span></a>
		</li>
	</rd-bootstrap-dropdown-menu>
</rd-bootstrap-select>

<div class="well">{{ngModelAry}}</div>

```

### ComboSelect ```rd-combo-select```

```HTML

<rd-combo-select #comboselect [(ngModel)]="ngModel" [open]="open" (change)="onChange($event)" (toggle)="open = $event" (title)="title = $event"
	class="col-sm-6 rd-combo-select">
	<div class="rd-combo-select-input-wrapper" [ngClass]="{'rd-state-focused': focus}">
		<input rdComboSelectInput class="rd-combo-select-input" type="text" [(ngModel)]="comboselect.inputNgModel" (focus)="focus = true" (blur)="focus = false"/>
		<div rdComboSelectToggleBtn class="rd-combo-select-toggle-btn right">
			<span class="bs-caret"><span class="caret"></span></span>
		</div>
	</div>
	<ul *ngIf="open" [@animateDropdown] class="rd-combo-select-dropdown"><!-- [@openClose]="open ? 'active' : 'inactive'" -->
		<li rdComboSelectOption *ngFor="let time of times; let i = index" #option="option" [value]="time" [title]="time" [class.active]="option.isActive()"
			(click)="option.setActive()">
			<span>{{option.title}}</span>
		</li>
	</ul>
</rd-combo-select>

```

<iframe src="http://embed.plnkr.co/GeHGKI/?show=preview" frameborder="0" width="100%" height="500"></iframe>

_powered by:_
https://rentdynamics.com +
https://angular.io
