declare var System: any;

interface JQuery {
    pickmeup(options?: {});
    pickmeup(eventName: string, value?: any);
    fullCalendar(options?: any);
    // datepicker(eventName: string, value?: any);
    // datetimepicker(eventName: string, value?: any);
    // datetimepicker(options?: {});
}

interface HTMLElement {
    getContext(dimension: string): any;
}

declare namespace jsSHA {
  export interface jsSHA {
    setHMACKey(secret:string, inputFormat:string):string;
    update(srcString:string):void;
    new (encoding:string, inputFormat:string):jsSHA;
    getHMAC(format:string):string;
    getHash(format:string):string;
  }
}
