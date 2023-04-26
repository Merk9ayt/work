/* tslint:disable */
/* eslint-disable */
import { SampleSourceSpecimenDto } from './sample-source-specimen-dto';
import { SampleSourceStatus } from './sample-source-status';

/**
 * The sample sources that can be used for sampling
 */
export interface SampleSourceDto {

  /**
   * The link to fixed assets subsystem (optional)
   */
  assetId?: null | string;
  createdAt: string;
  createdBy: string;

  /**
   * The description of source sample (optional)
   */
  description?: null | string;
  id: string;
  modifiedAt: string;
  modifiedBy: string;

  /**
   * The name of source sample
   */
  name: string;

  /**
   * List of Specimens
   */
  specimens: Array<SampleSourceSpecimenDto>;
  status: SampleSourceStatus;
}
