/* tslint:disable */
/* eslint-disable */
import { ParameterDto } from './parameter-dto';
import { SpecimenDto } from './specimen-dto';
import { UnitDto } from './unit-dto';
export interface StudyTemplateParameterDto {
  defaultValue?: null | string;
  description?: null | string;
  name: string;
  parameter: ParameterDto;
  specimen: SpecimenDto;
  unit?: UnitDto;
}
