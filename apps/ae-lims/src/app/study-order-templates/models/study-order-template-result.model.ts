import { ParameterModel } from '../../parameters/models/parameter.model';
import { SpecimenModel } from '../../specimens/models/specimen.model';
import { UnitModel } from '../../units/models/unit.model';

export interface StudyOrderTemplateResultModel {
  parameter: ParameterModel;

  specimen: SpecimenModel;

  unit: UnitModel;

  minPermissibleValue: number;

  maxPermissibleValue: number;

  precision: number;
}
