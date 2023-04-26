import {
  DocumentStatus as DocumentStatusDto,
  Operation as PatchOperationDto,
} from '@ae-labs/apis/lims';
import { DocumentStatus, PatchOperation } from '@ae-labs/core';

export class CoreMappingHelpers {
  static mapDocumentStatusDtoToModel(dto: DocumentStatusDto): DocumentStatus {
    switch (dto) {
      case DocumentStatusDto.Archived:
        return DocumentStatus.Archived;
      case DocumentStatusDto.Draft:
        return DocumentStatus.Draft;
      case DocumentStatusDto.Outdated:
        return DocumentStatus.Outdated;
      case DocumentStatusDto.Published:
        return DocumentStatus.Published;

      default:
        throw new Error(`Unsupported document status: ${dto}`);
    }
  }

  static mapDocumentStatusModelToDto(model: DocumentStatus): DocumentStatusDto {
    switch (model) {
      case DocumentStatusDto.Archived:
        return DocumentStatus.Archived;
      case DocumentStatusDto.Draft:
        return DocumentStatus.Draft;
      case DocumentStatusDto.Outdated:
        return DocumentStatus.Outdated;
      case DocumentStatusDto.Published:
        return DocumentStatus.Published;

      default:
        throw new Error(`Unsupported document status: ${model}`);
    }
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
}
