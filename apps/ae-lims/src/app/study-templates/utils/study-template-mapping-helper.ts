import {
  Operation as PatchOperationDto,
  StudyTemplateBaseDataDto,
  StudyTemplateBaseDataDtoPagedResultDto,
  StudyTemplateCreateDto,
  StudyTemplateDto,
  StudyTemplateParameterDto,
  StudyTemplateResultDefinitionDto,
  StudyTemplateResultPrecisionDto,
  StudyTemplateSampleDto,
} from '@ae-labs/apis/lims';
import { CoreMappingHelpers, PagedResult, PatchOperation } from '@ae-labs/core';
import { StudyTemplateBaseModel } from '../models/study-template-base.model';
import { StudyTemplateParameterDefinitionModel } from '../models/study-template-parameter-definition.model';
import { StudyTemplateResultDefinitionModel } from '../models/study-template-result-definition.model';
import { StudyTemplateResultPrecisionModel } from '../models/study-template-result-precision.model';
import { StudyTemplateSampleModel } from '../models/study-template-sample.model';
import { StudyTemplateModel } from '../models/study-template.model';

export class StudyTemplateMappingHelpers {
  static mapStudyTemplateBaseDataDtoToStudyTemplateBaseModel(
    dto: StudyTemplateBaseDataDto
  ): StudyTemplateBaseModel {
    return {
      id: dto.id,
      code: dto.code,
      revision: dto.revision,
      name: dto.name,
      description: dto.description,
      status: CoreMappingHelpers.mapDocumentStatusDtoToModel(dto.status),
    };
  }

  static mapStudyTemplateBaseDataModelToStudyTemplateBaseData(
    model: StudyTemplateBaseModel
  ): StudyTemplateBaseDataDto {
    return {
      id: model.id,
      code: model.code,
      revision: model.revision ?? '',
      name: model.name,
      status: CoreMappingHelpers.mapDocumentStatusModelToDto(model.status),
      createdAt: '',
      createdBy: '',
      modifiedAt: '',
      modifiedBy: '',
    };
  }

  static mapStudyTemplatesPagedResultDtoToPagedResult(
    dto: StudyTemplateBaseDataDtoPagedResultDto
  ): PagedResult<StudyTemplateBaseModel> {
    return {
      entries: dto.entries.map((x: StudyTemplateBaseDataDto) =>
        StudyTemplateMappingHelpers.mapStudyTemplateBaseDataDtoToStudyTemplateBaseModel(
          x
        )
      ),
      page: dto.page,
      pageSize: dto.pageSize,
      total: dto.total,
    };
  }

  static mapStudyTemplateDtoToStudyTemplateModel(
    dto: StudyTemplateDto
  ): StudyTemplateModel {
    return {
      id: dto.id,
      parentId: dto.parentId,
      code: dto.code,
      revision: dto.revision,
      name: dto.name,
      officialName: dto.officialName ?? undefined,
      description: dto.description,
      samples: dto.samples?.map(s =>
        StudyTemplateMappingHelpers.mapSampleDtoToSampleModel(s)
      ),
      parameters: dto.parameters?.map(p =>
        StudyTemplateMappingHelpers.mapParameterDtoToParameterModel(p)
      ),
      results: dto.results?.map(r =>
        StudyTemplateMappingHelpers.mapStudyResultDtoToStudyResultModel(r)
      ),
      status: CoreMappingHelpers.mapDocumentStatusDtoToModel(dto.status),
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

  static mapStudyTemplateToStudyTemplateCreateDto(
    model: StudyTemplateModel
  ): StudyTemplateCreateDto {
    return {
      parentId: model.parentId ?? undefined,
      code: model.code,
      name: model.name,
      revision: model.revision,
      officialName: model.officialName,
      description: model.description,
      samples: model.samples.map(sa =>
        StudyTemplateMappingHelpers.mapSampleModelToSampleDto(sa)
      ),
      parameters: model.parameters.map(p =>
        StudyTemplateMappingHelpers.mapParameterModelToParameterDto(p)
      ),
      results: model.results.map(r =>
        StudyTemplateMappingHelpers.mapStudyResultModelToStudyResultDto(r)
      ),
    };
  }

  static mapResultPrecisionDtoToResultPrecisionModel(
    dto: StudyTemplateResultPrecisionDto
  ): StudyTemplateResultPrecisionModel {
    return {
      precision: dto.precision,
      unit: dto.unit,
      maxValue: dto.maxValue,
      minValue: dto.minValue,
      value: dto.value,
    };
  }

  static mapPrecisionModelToPrecisionDto(
    precision: StudyTemplateResultPrecisionModel
  ): StudyTemplateResultPrecisionDto {
    return {
      precision: precision.precision,
      unit: precision.unit ?? '',
      maxValue: precision.maxValue ?? 0,
      minValue: precision.minValue ?? 0,
      value: precision.value ?? 0,
    };
  }

  static mapStudyResultDtoToStudyResultModel(
    dto: StudyTemplateResultDefinitionDto
  ): StudyTemplateResultDefinitionModel {
    return {
      name: dto.name,
      description: dto.description,
      parameter: dto.parameter,
      specimen: dto.specimen,
      precisions: dto.precisions.map(p =>
        StudyTemplateMappingHelpers.mapResultPrecisionDtoToResultPrecisionModel(
          p
        )
      ),
      unit: dto.unit ?? { id: '', name: '' },
      maxValue: dto.maxValue,
      minValue: dto.minValue,
      defaultValue: dto.defaultValue,
    };
  }

  static mapStudyResultModelToStudyResultDto(
    studyResult: StudyTemplateResultDefinitionModel
  ): StudyTemplateResultDefinitionDto {
    return {
      name: studyResult.name,
      description: studyResult.description,
      parameter: studyResult.parameter,
      specimen: studyResult.specimen,
      precisions: studyResult.precisions.map(p =>
        StudyTemplateMappingHelpers.mapPrecisionModelToPrecisionDto(p)
      ),
      unit: studyResult.unit,
      maxValue: studyResult.maxValue ?? undefined,
      minValue: studyResult.minValue ?? undefined,
      defaultValue: studyResult.defaultValue,
    };
  }

  static mapParameterDtoToParameterModel(
    dto: StudyTemplateParameterDto
  ): StudyTemplateParameterDefinitionModel {
    return {
      name: dto.name,
      description: dto.description,
      parameter: dto.parameter,
      specimen: dto.specimen,
      unit: dto.unit,
      defaultValue: dto.defaultValue,
    };
  }

  static mapParameterModelToParameterDto(
    studyParameter: StudyTemplateParameterDefinitionModel
  ): StudyTemplateParameterDto {
    return {
      name: studyParameter.name,
      description: studyParameter.description,
      parameter: studyParameter.parameter,
      specimen: studyParameter.specimen,
      unit: studyParameter.unit,
      defaultValue: studyParameter.defaultValue,
    };
  }

  static mapSampleDtoToSampleModel(
    dto: StudyTemplateSampleDto
  ): StudyTemplateSampleModel {
    return {
      specimen: dto.specimen,
      unit: dto.unit,
      maxVolume: dto.maxVolume,
      minVolume: dto.minVolume,
    };
  }

  static mapSampleModelToSampleDto(
    sample: StudyTemplateSampleModel
  ): StudyTemplateSampleDto {
    return {
      specimen: sample.specimen,
      unit: sample.unit,
      maxVolume: sample.maxVolume,
      minVolume: sample.minVolume,
    };
  }
}
