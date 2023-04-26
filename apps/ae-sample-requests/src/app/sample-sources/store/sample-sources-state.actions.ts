import { PatchOperation } from '@ae-labs/core';
import { SampleSourceModel } from '../models/sample-source.model';

export class LoadSampleSources {
  static readonly type = `[AeSampleSource] Load Sample Sources`;
}

export class LoadSampleSource {
  static readonly type = `[AeSampleSource] Load Sample Source`;

  constructor(public readonly id: string) {}
}

export class UpdateSampleSource {
  static readonly type = `[AeSampleSource] Update Sample Source`;

  constructor(
    public readonly id: string,
    public readonly patch: PatchOperation[]
  ) {}
}

export class CreateSampleSource {
  static readonly type = `[AeSampleSource] Create Sample Source`;

  constructor(public readonly payload: SampleSourceModel) {}
}
