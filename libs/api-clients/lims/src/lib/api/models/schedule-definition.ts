/* tslint:disable */
/* eslint-disable */
import { SchedulePeriodType } from './schedule-period-type';
export interface ScheduleDefinition {
  begin?: string;
  canBeRequested?: boolean;
  end?: null | string;
  interval?: number;
  periodType?: SchedulePeriodType;
  timesInPeriod?: number;
}
