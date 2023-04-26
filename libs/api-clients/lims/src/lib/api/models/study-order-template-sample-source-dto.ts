/* tslint:disable */
/* eslint-disable */
import { SampleSourceDto } from './sample-source-dto';
import { SpecimenDto } from './specimen-dto';
export interface StudyOrderTemplateSampleSourceDto {
  canCombineSample: boolean;
  sampleSource: SampleSourceDto;
  specimen: SpecimenDto;
}
