import { SpecimenDto } from '@ae-labs/apis/lims';
import { SpecimenModel } from '../models/specimen.model';

export class SpecimenMappingHelpers {
  static mapSpecimenDtoToSpecimenModel(dto: SpecimenDto): SpecimenModel {
    return {
      id: dto.id,
      name: dto.name,
      description: dto.description,
    };
  }

  static mapSpecimenModelToSpecimenDto(model: SpecimenModel): SpecimenDto {
    return {
      id: model.id,
      name: model.name,
      description: model.description,
    };
  }
}
