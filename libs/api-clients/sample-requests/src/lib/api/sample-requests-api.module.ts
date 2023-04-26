/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SampleRequestsApiConfiguration, SampleRequestsApiConfigurationParams } from './sample-requests-api-configuration';

import { SampleRequestService } from './services/sample-request.service';
import { SampleSourceService } from './services/sample-source.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    SampleRequestService,
    SampleSourceService,
    SampleRequestsApiConfiguration
  ],
})
export class SampleRequestsApiModule {
  static forRoot(params: SampleRequestsApiConfigurationParams): ModuleWithProviders<SampleRequestsApiModule> {
    return {
      ngModule: SampleRequestsApiModule,
      providers: [
        {
          provide: SampleRequestsApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: SampleRequestsApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('SampleRequestsApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
