/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';

/**
 * Global configuration
 */
@Injectable({
  providedIn: 'root',
})
export class LimsApiConfiguration {
  rootUrl: string = '';
}

/**
 * Parameters for `LimsApiModule.forRoot()`
 */
export interface LimsApiConfigurationParams {
  rootUrl?: string;
}
