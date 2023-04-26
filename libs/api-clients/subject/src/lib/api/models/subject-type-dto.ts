/* tslint:disable */
/* eslint-disable */

/**
 * The subject type
 */
export interface SubjectTypeDto {
  createdAt: string;
  createdBy: string;

  /**
   * Subject type description
   */
  description?: null | string;
  id: string;
  modifiedAt: string;
  modifiedBy: string;

  /**
   * Subject type name
   */
  name: string;
}
