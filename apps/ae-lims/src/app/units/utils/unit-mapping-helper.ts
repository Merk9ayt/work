import { ParameterDto, UnitDto } from '@ae-labs/apis/lims';
import { UnitModel } from '../models/unit.model';

export class UnitMappingHelpers {
  static mapUnitDtoToUnitModel(dto: UnitDto): UnitModel {
    return {
      id: dto.id,
      name: dto.name,
      description: dto.description,
    };
  }

  static mapUnitModelToUnitDto(unit: UnitModel): ParameterDto {
    return {
      id: unit.id,
      name: unit.name,
      description: unit.description,
    };
  }
}
