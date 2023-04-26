import { Task } from './task';

export interface TaskList<T extends Task> {
  /**
   * The unique identifier of the list.
   * The id used to detect the list on the board.
   */
  id: string;

  /**
   * The name of the list to be displayed.
   */
  title: string;

  /**
   * Tasks assigned to the list.
   */
  tasks: T[];

  /**
   * An action to be called when some task is started dragging out of the list.
   * E.g. display some dialog to confirm or set up additional parameters.
   * @param task The task to be added.
   */
  onTaskDragStarted?: (task: T) => boolean;

  /**
   * An action to be called when the task is successfully removed from the list.
   * E.g. reload the list content from an API-method.
   */
  onTaskDragCompleted?: () => void;

  /**
   * An action to be called when some task is going to be added to this list.
   * E.g. display some dialog to confirm or set up additional parameters.
   * @param task The task to be added.
   */
  onTaskDropStarted?: (task: T) => boolean;

  /**
   * An action to be called when the task is successfully added to the list.
   * E.g. reload the list content from an API-method.
   */
  onTaskDropCompleted?: () => void;
}
