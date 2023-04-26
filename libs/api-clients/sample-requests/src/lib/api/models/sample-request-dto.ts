/* tslint:disable */
/* eslint-disable */
import { SampleRequestStatus } from './sample-request-status';

/**
 * The sample request
 */
export interface SampleRequestDto {
  createdAt: string;
  createdBy: string;
  id: string;

  /**
   * The link to tag assignment
   */
  label?: null | string;
  modifiedAt: string;
  modifiedBy: string;

  /**
   * Planned date for sample request
   */
  plannedDate?: null | string;

  /**
   * The link to sample source
   */
  sampleSourceId: string;
  status: SampleRequestStatus;
}
