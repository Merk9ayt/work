/**
 * The interface to describe events being sent through the message bus.
 */
export interface EventData {
  /**
   * The content of the message/event or undefined for message without data.
   */
  readonly data?: unknown | null;

  /**
   * The unique identifier of the messages containing specific data.
   * The : separator could be used to define message scopes.
   */
  readonly type: string;
}
