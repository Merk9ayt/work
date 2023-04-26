import { SampleSourceDto } from '@ae-labs/apis/lims';
import { SampleSourceModel } from '../models/sample-source.model';

export class SampleSourceMappingHelpers {
  static mapSampleSourceDtoToSampleSourceModel(
    dto: SampleSourceDto
  ): SampleSourceModel {
    return {
      id: dto.id,
      name: dto.name,
      description: dto.description,
    };
  }

  static mapSampleSourceModelToSampleSourceDto(
    model: SampleSourceModel
  ): SampleSourceDto {
    return {
      id: model.id,
      name: model.name,
      description: model.description,
    };
  }
}
