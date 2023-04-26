/* tslint:disable */
/* eslint-disable */
import { LaboratoryDto } from './laboratory-dto';
import { StudyStatus } from './study-status';

/**
 * DTO-model for study
 */
export interface StudyDto {

  /**
   * Study completed date
   */
  completedAt?: null | string;
  createdAt: string;
  createdBy: string;
  id: string;
  laboratory?: LaboratoryDto;
  modifiedAt: string;
  modifiedBy: string;

  /**
   * Study planned date
   */
  plannedAt?: string;

  /**
   * Study started date
   */
  startedAt?: null | string;
  status?: StudyStatus;

  /**
   * Link to study order
   */
  studyOrderId?: string;

  /**
   * Link to study template
   */
  studyTemplateId?: string;
}
