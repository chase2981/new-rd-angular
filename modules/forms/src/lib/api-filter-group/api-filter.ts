import { EventEmitter } from '@angular/core';
import { CoreApiSelectorFilter } from '../../core/shared/core-api-selector-filter';

export class ApiFilter {
    name: string;
    value: any;
    change?: EventEmitter<CoreApiSelectorFilter>;
}