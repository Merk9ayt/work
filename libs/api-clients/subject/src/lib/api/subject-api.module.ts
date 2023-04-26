/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SubjectApiConfiguration, SubjectApiConfigurationParams } from './subject-api-configuration';

import { SubjectService } from './services/subject.service';
import { SubjectTypeService } from './services/subject-type.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    SubjectService,
    SubjectTypeService,
    SubjectApiConfiguration
  ],
})
export class SubjectApiModule {
  static forRoot(params: SubjectApiConfigurationParams): ModuleWithProviders<SubjectApiModule> {
    return {
      ngModule: SubjectApiModule,
      providers: [
        {
          provide: SubjectApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: SubjectApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('SubjectApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
