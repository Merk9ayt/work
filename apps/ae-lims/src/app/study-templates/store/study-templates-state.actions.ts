import { PatchOperation } from '@ae-labs/core';
import { StudyTemplateModel } from '../models/study-template.model';

export class LoadStudyTemplates {
  static readonly type = `[AeStudyTemplate] Load Study Templates`;
}

export class LoadStudyTemplate {
  static readonly type = `[AeStudyTemplate] Load Study Template`;

  constructor(public readonly id: string) {}
}

export class UpdateStudyTemplate {
  static readonly type = `[AeStudyTemplate] Update Study Template`;

  constructor(
    public readonly id: string,
    public readonly patch: PatchOperation[]
  ) {}
}

export class CreateStudyTemplate {
  static readonly type = `[AeStudyTemplate] Create Study Template`;

  constructor(public readonly payload: StudyTemplateModel) {}
}

export class ArchiveStudyTemplate {
  static readonly type = `[AeStudyTemplate] Archive Study Template`;

  constructor(public readonly id: string) {}
}
