/* tslint:disable */
/* eslint-disable */

/**
 * DTO-model for sample request creation
 */
export interface SampleRequestCreateDto {

  /**
   * The link to tag assignment
   */
  label?: null | string;

  /**
   * Planned date for sample request
   */
  plannedDate?: null | string;

  /**
   * The link to sample source
   */
  sampleSourceId?: string;
}
