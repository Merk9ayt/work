/* tslint:disable */
/* eslint-disable */

/**
 * The subject
 */
export interface SubjectDto {
  createdAt: string;
  createdBy: string;

  /**
   * Subject description
   */
  description?: null | string;
  id: string;
  modifiedAt: string;
  modifiedBy: string;

  /**
   * Subject name
   */
  name: string;

  /**
   * Subject type
   */
  typeId: string;
}
