import {PatchOperation} from '@ae-labs/core';
import {SubjectModel} from "../models/subject.model";

export class LoadSubjects {
  static readonly type = `[AeSubject] Load Subjects`;

  constructor(public readonly typeId: string) {
  }
}

export class LoadSubject {
  static readonly type = `[AeSubject] Load Subject`;

  constructor(public readonly id: string) {
  }
}

export class UpdateSubject {
  static readonly type = `[AeSubject] Update Subject`;

  constructor(
    public readonly id: string,
    public readonly typeId: string,
    public readonly patch: PatchOperation[]
  ) {
  }
}

export class CreateSubject {
  static readonly type = `[AeSubject] Create Subject`;

  constructor(
    public readonly payload: SubjectModel,
  ) {
  }
}

export class DeleteSubject {
  static readonly type = `[AeSubject] Delete Subject`;

  constructor(
    public readonly id: string,
    public readonly typeId: string,
  ) {
  }
}
