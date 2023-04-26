/* tslint:disable */
/* eslint-disable */
import { ScheduleDefinition } from './schedule-definition';
import { ScheduleStatus } from './schedule-status';
import { StudyOrderScheduleAction } from './study-order-schedule-action';

/**
 * DTO-model for study order schedule creation
 */
export interface StudyOrderScheduleCreateDto {

  /**
   * Study order schedule description
   */
  description?: null | string;

  /**
   * Study order schedule name
   */
  name?: null | string;
  schedule?: ScheduleDefinition;

  /**
   * Templates, included in schedule
   */
  scheduleActions?: null | Array<StudyOrderScheduleAction>;
  status?: ScheduleStatus;
}
