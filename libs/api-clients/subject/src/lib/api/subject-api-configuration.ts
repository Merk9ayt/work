/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';

/**
 * Global configuration
 */
@Injectable({
  providedIn: 'root',
})
export class SubjectApiConfiguration {
  rootUrl: string = '';
}

/**
 * Parameters for `SubjectApiModule.forRoot()`
 */
export interface SubjectApiConfigurationParams {
  rootUrl?: string;
}
