/* tslint:disable */
/* eslint-disable */
import { ParameterDto } from './parameter-dto';
import { SpecimenDto } from './specimen-dto';
import { StudyTemplateResultPrecisionDto } from './study-template-result-precision-dto';
import { UnitDto } from './unit-dto';
export interface StudyTemplateResultDefinitionDto {
  defaultValue?: null | string;
  description?: null | string;
  maxValue?: number;
  minValue?: number;
  name: string;
  parameter: ParameterDto;
  precisions: Array<StudyTemplateResultPrecisionDto>;
  specimen: SpecimenDto;
  unit?: UnitDto;
}
