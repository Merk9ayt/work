import {
  StudyOrderTemplateBaseDataDto,
  StudyOrderTemplateBaseDataDtoPagedResultDto,
  StudyOrderTemplateCreateDto,
  StudyOrderTemplateDto,
  StudyOrderTemplateOrderDefinitionDto,
  StudyOrderTemplateResultDto,
  StudyOrderTemplateSampleSourceDto,
} from '@ae-labs/apis/lims';
import { CoreMappingHelpers, PagedResult } from '@ae-labs/core';
import { ParameterMappingHelper } from '../../parameters/utils/parameter-mapping-helper';
import { SampleSourceMappingHelpers } from '../../sample-sources/utils/sample-source-mapping-helper';
import { SpecimenMappingHelpers } from '../../specimens/utils/specimen-mapping-helper';
import { StudyTemplateMappingHelpers } from '../../study-templates/utils/study-template-mapping-helper';
import { UnitMappingHelpers } from '../../units/utils/unit-mapping-helper';
import { StudyOrderTemplateBaseModel } from '../models/study-order-template-base.model';
import { StudyOrderTemplateOrderDefinitionModel } from '../models/study-order-template-order-definition.model';
import { StudyOrderTemplateResultModel } from '../models/study-order-template-result.model';
import { StudyOrderTemplateSampleSourceModel } from '../models/study-order-template-sample-source.model';
import { StudyOrderTemplateModel } from '../models/study-order-template.model';

export class StudyOrderTemplateMappingHelpers {
  static mapStudyOrderTemplateBaseDataDtoToStudyOrderTemplateBaseModel(
    dto: StudyOrderTemplateBaseDataDto
  ): StudyOrderTemplateBaseModel {
    return {
      id: dto.id,
      code: dto.code,
      revision: dto.revision,
      name: dto.name,
      description: dto.description,
      status: CoreMappingHelpers.mapDocumentStatusDtoToModel(dto.status),
    };
  }

  static mapStudyOrderTemplatesPagedResultDtoToPagedResult(
    dto: StudyOrderTemplateBaseDataDtoPagedResultDto
  ): PagedResult<StudyOrderTemplateBaseModel> {
    return {
      entries: dto.entries.map((x: StudyOrderTemplateBaseDataDto) =>
        StudyOrderTemplateMappingHelpers.mapStudyOrderTemplateBaseDataDtoToStudyOrderTemplateBaseModel(
          x
        )
      ),
      page: dto.page,
      pageSize: dto.pageSize,
      total: dto.total,
    };
  }

  static mapStudyOrderTemplateDtoToStudyOrderTemplateModel(
    dto: StudyOrderTemplateDto
  ): StudyOrderTemplateModel {
    return {
      id: dto.id,
      parentId: dto.parentId,
      code: dto.code,
      revision: dto.revision,
      name: dto.name,
      description: dto.description,
      studies: dto.studies?.map(s =>
        StudyOrderTemplateMappingHelpers.mapStudyOrderDefinitionDtoToStudyOrderDefinitionModel(
          s
        )
      ),

      status: CoreMappingHelpers.mapDocumentStatusDtoToModel(dto.status),
    };
  }

  static mapStudyOrderTemplateToStudyOrderTemplateCreateDto(
    model: StudyOrderTemplateModel
  ): StudyOrderTemplateCreateDto {
    return {
      parentId: model.parentId,
      code: model.code,
      name: model.name,
      revision: model.revision,
      description: model.description,
      studies: model.studies.map(sa =>
        StudyOrderTemplateMappingHelpers.mapStudyOrderDefinitionModelToStudyOrderDefinitionDto(
          sa
        )
      ),
    };
  }

  static mapStudyOrderDefinitionModelToStudyOrderDefinitionDto(
    model: StudyOrderTemplateOrderDefinitionModel
  ): StudyOrderTemplateOrderDefinitionDto {
    return {
      studyTemplate:
        StudyTemplateMappingHelpers.mapStudyTemplateBaseDataModelToStudyTemplateBaseData(
          model.studyTemplate
        ),
      studyResults: model.studyResults.map(s =>
        StudyOrderTemplateMappingHelpers.mapStudyOrderResultDefinitionModelToStudyOrderResultDefinitionDto(
          s
        )
      ),
      sampleSources: model.sampleSources.map(s =>
        StudyOrderTemplateMappingHelpers.mapStudyOrderSampleSourceDefinitionModelToStudyOrderSampleSourceDefinitionDto(
          s
        )
      ),
    };
  }

  static mapStudyOrderDefinitionDtoToStudyOrderDefinitionModel(
    dto: StudyOrderTemplateOrderDefinitionDto
  ): StudyOrderTemplateOrderDefinitionModel {
    return {
      studyTemplate:
        StudyTemplateMappingHelpers.mapStudyTemplateBaseDataDtoToStudyTemplateBaseModel(
          dto.studyTemplate
        ),
      studyResults: dto.studyResults.map(s =>
        StudyOrderTemplateMappingHelpers.mapStudyOrderResultDefinitionDtoToStudyOrderResultDefinitionModel(
          s
        )
      ),
      sampleSources: dto.sampleSources.map(s =>
        StudyOrderTemplateMappingHelpers.mapStudyOrderSampleSourceDefinitionDtoToStudyOrderSampleSourceDefinitionModel(
          s
        )
      ),
    };
  }

  static mapStudyOrderSampleSourceDefinitionModelToStudyOrderSampleSourceDefinitionDto(
    model: StudyOrderTemplateSampleSourceModel
  ): StudyOrderTemplateSampleSourceDto {
    return {
      sampleSource:
        SampleSourceMappingHelpers.mapSampleSourceModelToSampleSourceDto(
          model.sampleSource
        ),
      specimen: SpecimenMappingHelpers.mapSpecimenModelToSpecimenDto(
        model.specimen
      ),
      canCombineSample: model.canCombineSample,
    };
  }

  static mapStudyOrderSampleSourceDefinitionDtoToStudyOrderSampleSourceDefinitionModel(
    dto: StudyOrderTemplateSampleSourceDto
  ): StudyOrderTemplateSampleSourceModel {
    return {
      sampleSource:
        SampleSourceMappingHelpers.mapSampleSourceDtoToSampleSourceModel(
          dto.sampleSource
        ),
      specimen: SpecimenMappingHelpers.mapSpecimenDtoToSpecimenModel(
        dto.specimen
      ),
      canCombineSample: dto.canCombineSample,
    };
  }

  static mapStudyOrderResultDefinitionModelToStudyOrderResultDefinitionDto(
    model: StudyOrderTemplateResultModel
  ): StudyOrderTemplateResultDto {
    return {
      specimen: SpecimenMappingHelpers.mapSpecimenModelToSpecimenDto(
        model.specimen
      ),
      parameter: ParameterMappingHelper.mapParameterModelToParameterDto(
        model.parameter
      ),
      unit: UnitMappingHelpers.mapUnitModelToUnitDto(model.unit),
      precision: model.precision,
      minPermissibleValue: model.minPermissibleValue,
      maxPermissibleValue: model.maxPermissibleValue,
    };
  }

  static mapStudyOrderResultDefinitionDtoToStudyOrderResultDefinitionModel(
    dto: StudyOrderTemplateResultDto
  ): StudyOrderTemplateResultModel {
    return {
      specimen: SpecimenMappingHelpers.mapSpecimenDtoToSpecimenModel(
        dto.specimen
      ),
      parameter: ParameterMappingHelper.mapParameterDtoToParameterModel(
        dto.parameter
      ),
      unit: UnitMappingHelpers.mapUnitDtoToUnitModel(dto.unit),
      precision: dto.precision,
      minPermissibleValue: dto.minPermissibleValue,
      maxPermissibleValue: dto.maxPermissibleValue,
    };
  }
}
