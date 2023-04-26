import { SpecimenModel } from '../../specimens/models/specimen.model';
import { UnitModel } from '../../units/models/unit.model';

export interface StudyTemplateSampleModel {
  specimen: SpecimenModel;
  unit?: UnitModel;
  minVolume?: null | number;
  maxVolume?: null | number;
}
