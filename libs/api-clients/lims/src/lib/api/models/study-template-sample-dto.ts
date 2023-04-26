/* tslint:disable */
/* eslint-disable */
import { SpecimenDto } from './specimen-dto';
import { UnitDto } from './unit-dto';
export interface StudyTemplateSampleDto {
  maxVolume?: null | number;
  minVolume?: null | number;
  specimen: SpecimenDto;
  unit?: UnitDto;
}
