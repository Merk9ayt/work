import { ParameterDto } from '@ae-labs/apis/lims';
import { ParameterModel } from '../models/parameter.model';

export class ParameterMappingHelper {
  static mapParameterDtoToParameterModel(dto: ParameterDto): ParameterModel {
    return {
      id: dto.id,
      name: dto.name,
      description: dto.description,
    };
  }

  static mapParameterModelToParameterDto(model: ParameterModel): ParameterDto {
    return {
      id: model.id,
      name: model.name,
      description: model.description,
    };
  }
}
