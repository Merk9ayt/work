/* tslint:disable */
/* eslint-disable */
import { ParameterDto } from './parameter-dto';
import { SpecimenDto } from './specimen-dto';
import { UnitDto } from './unit-dto';
export interface StudyOrderTemplateResultDto {
  maxPermissibleValue: number;
  minPermissibleValue: number;
  parameter: ParameterDto;
  precision: number;
  specimen: SpecimenDto;
  unit: UnitDto;
}
