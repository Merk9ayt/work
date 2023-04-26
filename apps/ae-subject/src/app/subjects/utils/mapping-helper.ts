import {
  Operation as PatchOperationDto,
  SubjectCreateDto,
  SubjectDto,
  SubjectDtoPagedResultDto
} from "@ae-labs/apis/subject";
import {PagedResult, PatchOperation} from '@ae-labs/core';
import {SubjectModel} from "../models/subject.model";


export class MappingHelpers {

  static mapSubjectDtoToSubjectModel(
    dto: SubjectDto
  ): SubjectModel {
    return {
      id: dto.id,
      typeId: dto.typeId,
      name: dto.name,
      description: dto.description,
    };
  }

  static mapSubjectsPagedResultDtoToPagedResult(
    dto: SubjectDtoPagedResultDto
  ): PagedResult<SubjectModel> {
    return {
      entries: dto.entries.map((x: SubjectDto) =>
        MappingHelpers.mapSubjectDtoToSubjectModel(x)
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

  static mapSubjectToSubjectCreateDto(
    model: SubjectModel
  ): SubjectCreateDto {
    return {
      typeId: model.typeId,
      name: model.name,
      description: model.description,
    };
  }
}
