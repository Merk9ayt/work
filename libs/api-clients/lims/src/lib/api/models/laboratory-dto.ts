/* tslint:disable */
/* eslint-disable */
import { LaboratoryStatus } from './laboratory-status';

/**
 * DTO-model for laboratory
 */
export interface LaboratoryDto {
  createdAt: string;
  createdBy: string;

  /**
   * Laboratory description
   */
  description?: null | string;
  id: string;
  modifiedAt: string;
  modifiedBy: string;

  /**
   * Laboratory name
   */
  name?: null | string;
  status?: LaboratoryStatus;
}
