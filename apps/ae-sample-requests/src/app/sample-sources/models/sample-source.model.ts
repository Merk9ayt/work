import { SampleSourceSpecimenModel } from './sample-source-specimen.model';
import { SampleSourceStatusEnum } from './sample-source-status.enum';

export interface SampleSourceModel {
  id?: string;

  name: string;

  description?: null | string;

  specimens: SampleSourceSpecimenModel[];

  status?: SampleSourceStatusEnum;
}
