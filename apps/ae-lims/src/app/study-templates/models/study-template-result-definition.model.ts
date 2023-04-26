import { ParameterModel } from '../../parameters/models/parameter.model';
import { SpecimenModel } from '../../specimens/models/specimen.model';
import { UnitModel } from '../../units/models/unit.model';
import { StudyTemplateResultPrecisionModel } from './study-template-result-precision.model';

export interface StudyTemplateResultDefinitionModel {
  name: string;
  description?: null | string;
  parameter: ParameterModel;
  precisions: StudyTemplateResultPrecisionModel[];
  specimen: SpecimenModel;
  unit: UnitModel;
  defaultValue?: null | string;
  minValue?: null | number;
  maxValue?: null | number;
}
