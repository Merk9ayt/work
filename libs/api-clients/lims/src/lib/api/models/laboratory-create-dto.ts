/* tslint:disable */
/* eslint-disable */
import { LaboratoryStatus } from './laboratory-status';

/**
 * DTO-model for laboratory creation
 */
export interface LaboratoryCreateDto {

  /**
   * Laboratory description
   */
  description?: null | string;

  /**
   * Laboratory name
   */
  name?: null | string;
  status?: LaboratoryStatus;
}
