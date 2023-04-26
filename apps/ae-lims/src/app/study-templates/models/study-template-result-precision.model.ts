import { UnitModel } from '../../units/models/unit.model';
import { StudyTemplatePrecisionModel } from './study-template-precision.model';

export interface StudyTemplateResultPrecisionModel {
  precision: StudyTemplatePrecisionModel;
  unit: UnitModel;
  maxValue: number;
  minValue: number;
  value: number;
}
