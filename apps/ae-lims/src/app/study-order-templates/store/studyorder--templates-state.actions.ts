import { PatchOperation } from '@ae-labs/core';
import { StudyOrderTemplateModel } from '../models/study-order-template.model';

export class LoadStudyOrderTemplates {
  static readonly type = `[AeStudyOrderTemplate] Load Study Order Templates`;
}

export class LoadStudyOrderTemplate {
  static readonly type = `[AeStudyOrderTemplate] Load Study Order Template`;

  constructor(public readonly id: string) {}
}

export class UpdateStudyOrderTemplate {
  static readonly type = `[AeStudyOrderTemplate] Update Study Order Template`;

  constructor(
    public readonly id: string,
    public readonly patch: PatchOperation[]
  ) {}
}

export class CreateStudyOrderTemplate {
  static readonly type = `[AeStudyOrderTemplate] Create Study Order Template`;

  constructor(public readonly payload: StudyOrderTemplateModel) {}
}

export class ArchiveStudyOrderTemplate {
  static readonly type = `[AeStudyOrderTemplate] Archive Study Order Template`;

  constructor(public readonly id: string) {}
}
