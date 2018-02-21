import {Injectable} from '@angular/core';

import {CoreAuthServiceConfig} from '@rd/core';

import {environment} from '../environments/environment';

@Injectable()
export class RdCoreAuthServiceConfig implements CoreAuthServiceConfig {
  apiKey: string = 'bbd30373-2';
  authToken: string = '';
  secretKey: string = 'abbd7a3b-af84-432c-b';
  userId: string = '';

  constructor() {
    this.authToken = sessionStorage.getItem('rdUserAuthToken');
  }

  get host() {
    if (environment.production)
      return '//api.rentdynamics.com';

    // return 'https://25ed31e4.ngrok.io';
    return '//api-dev.rentdynamics.com';
  }
}