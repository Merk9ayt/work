/* tslint:disable */
/* eslint-disable */
import { SampleSourceSpecimenDto } from './sample-source-specimen-dto';

/**
 * The sample sources that can be used for sampling
 */
export interface SampleSourceCreateDto {

  /**
   * The link to fixed assets subsystem (optional)
   */
  assetId?: null | string;

  /**
   * The description of source sample (optional)
   */
  description?: null | string;

  /**
   * The name of source sample
   */
  name: string;

  /**
   * List of Specimens
   */
  specimens: Array<SampleSourceSpecimenDto>;
}
