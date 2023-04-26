import { ParameterModel } from '../../parameters/models/parameter.model';
import { SpecimenModel } from '../../specimens/models/specimen.model';
import { UnitModel } from '../../units/models/unit.model';

export interface StudyTemplateParameterDefinitionModel {
  name: string;
  description?: null | string;
  parameter: ParameterModel;
  specimen: SpecimenModel;
  unit?: UnitModel;
  defaultValue?: null | string;
}
