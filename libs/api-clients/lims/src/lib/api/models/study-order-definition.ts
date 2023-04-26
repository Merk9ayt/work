/* tslint:disable */
/* eslint-disable */
import { StudyOrderResultDefinition } from './study-order-result-definition';
import { StudyOrderSampleSourceDefinition } from './study-order-sample-source-definition';
export interface StudyOrderDefinition {
  sampleSources?: null | Array<StudyOrderSampleSourceDefinition>;
  studyResults?: null | Array<StudyOrderResultDefinition>;
  studyTemplateCode?: null | string;
}
