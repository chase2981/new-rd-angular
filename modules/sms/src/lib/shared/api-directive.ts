import { Observable } from 'rxjs/Rx';

import { CoreApiSelector, TextMsgItApiService } from '@rd/core';

export interface ApiDirective {
  endpoint: string;
  get(selector: CoreApiSelector): Observable<any>;
}
