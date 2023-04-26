import { Task } from '@ae-labs/ui';

export interface DragTask<T extends Task> {
  source: string;
  content: T;
}
