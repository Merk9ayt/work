/* tslint:disable */
/* eslint-disable */

/**
 * DTO-model for subject creation
 */
export interface SubjectCreateDto {

  /**
   * Subject description
   */
  description?: null | string;

  /**
   * Subject name
   */
  name: string;

  /**
   * Subject type
   */
  typeId: string;
}
