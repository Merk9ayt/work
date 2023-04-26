import {
  Operation as PatchOperationDto,
  SampleSourceCreateDto,
  SampleSourceDto,
  SampleSourceDtoPagedResultDto,
  SampleSourceSpecimenDto,
  SampleSourceStatus,
} from '@ae-labs/apis/sample-requests';
import { PagedResult, PatchOperation } from '@ae-labs/core';
import { SampleSourceSpecimenModel } from '../models/sample-source-specimen.model';
import { SampleSourceStatusEnum } from '../models/sample-source-status.enum';
import { SampleSourceModel } from '../models/sample-source.model';

export class SampleSourceMappingHelpers {
  static mapSampleSourceStatusDtoToModel(
    dto: SampleSourceStatus
  ): SampleSourceStatusEnum {
    switch (dto) {
      case SampleSourceStatus.Pending:
        return SampleSourceStatusEnum.Pending;
      case SampleSourceStatus.Active:
        return SampleSourceStatusEnum.Active;
      case SampleSourceStatus.Deactivated:
        return SampleSourceStatusEnum.Deactivated;
      case SampleSourceStatus.Archived:
        return SampleSourceStatusEnum.Archived;

      default:
        throw new Error(`Unsupported sample source status: ${dto}`);
    }
  }

  static mapSampleSourceDtoToSampleSourceModel(
    dto: SampleSourceDto
  ): SampleSourceModel {
    return {
      id: dto.id,
      name: dto.name,
      description: dto.description,
      specimens: dto.specimens.map(s =>
        SampleSourceMappingHelpers.mapSampleSourceSpecimenDtoToSampleSourceSpecimen(
          s
        )
      ),
      status: SampleSourceMappingHelpers.mapSampleSourceStatusDtoToModel(
        dto.status
      ),
    };
  }

  static mapSampleSourcePagedResultDtoToPagedResult(
    dto: SampleSourceDtoPagedResultDto
  ): PagedResult<SampleSourceModel> {
    return {
      entries: dto.entries.map((x: SampleSourceDto) =>
        SampleSourceMappingHelpers.mapSampleSourceDtoToSampleSourceModel(x)
      ),
      page: dto.page,
      pageSize: dto.pageSize,
      total: dto.total,
    };
  }

  static PatchOperationToPatchOperationDto(
    data: PatchOperation
  ): PatchOperationDto {
    return {
      from: data.from,
      path: data.path,
      value: data.value,
      op: data.op,
    };
  }

  static mapSampleSourceToSampleSourceCreateDto(
    model: SampleSourceModel
  ): SampleSourceCreateDto {
    return {
      name: model.name,
      description: model.description,
      specimens: model.specimens.map(s =>
        SampleSourceMappingHelpers.mapSampleSourceSpecimenToSampleSourceSpecimenDto(
          s
        )
      ),
    };
  }

  static mapSampleSourceSpecimenToSampleSourceSpecimenDto(
    model: SampleSourceSpecimenModel
  ): SampleSourceSpecimenDto {
    return {
      specimenId: model.specimenId,
      name: model.name,
      description: model.description,
    };
  }

  static mapSampleSourceSpecimenDtoToSampleSourceSpecimen(
    model: SampleSourceSpecimenDto
  ): SampleSourceSpecimenModel {
    return {
      specimenId: model.specimenId,
      name: model.name,
      description: model.description,
    };
  }
}
