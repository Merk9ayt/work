/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';

/**
 * Global configuration
 */
@Injectable({
  providedIn: 'root',
})
export class SampleRequestsApiConfiguration {
  rootUrl: string = '';
}

/**
 * Parameters for `SampleRequestsApiModule.forRoot()`
 */
export interface SampleRequestsApiConfigurationParams {
  rootUrl?: string;
}
