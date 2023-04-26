/* tslint:disable */
/* eslint-disable */
import { StudyOrderTemplateResultDto } from './study-order-template-result-dto';
import { StudyOrderTemplateSampleSourceDto } from './study-order-template-sample-source-dto';
import { StudyTemplateBaseDataDto } from './study-template-base-data-dto';
export interface StudyOrderTemplateOrderDefinitionDto {
  sampleSources: Array<StudyOrderTemplateSampleSourceDto>;
  studyResults: Array<StudyOrderTemplateResultDto>;
  studyTemplate: StudyTemplateBaseDataDto;
}
