/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LimsApiConfiguration, LimsApiConfigurationParams } from './lims-api-configuration';

import { LaboratoryService } from './services/laboratory.service';
import { SampleService } from './services/sample.service';
import { StudyService } from './services/study.service';
import { StudyOrderService } from './services/study-order.service';
import { StudyOrderScheduleService } from './services/study-order-schedule.service';
import { StudyOrderTemplateService } from './services/study-order-template.service';
import { StudyTemplateService } from './services/study-template.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    LaboratoryService,
    SampleService,
    StudyService,
    StudyOrderService,
    StudyOrderScheduleService,
    StudyOrderTemplateService,
    StudyTemplateService,
    LimsApiConfiguration
  ],
})
export class LimsApiModule {
  static forRoot(params: LimsApiConfigurationParams): ModuleWithProviders<LimsApiModule> {
    return {
      ngModule: LimsApiModule,
      providers: [
        {
          provide: LimsApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: LimsApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('LimsApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
