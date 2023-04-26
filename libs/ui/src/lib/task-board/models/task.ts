import { User } from '@ae-labs/core';

export interface Task {
  id: string;
  description: string;
  assignedUser?: User;
}
