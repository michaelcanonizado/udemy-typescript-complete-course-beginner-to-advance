import { Status } from '../../createTaskForm/enums/Status';

export const emitCorrectLabel = (
  status: Status,
): string => {
  switch (status) {
    case Status.todo:
      return 'Todos';
    case Status.inProgress:
      return 'In Progress';
    case Status.completed:
      return 'Completed';
  }
};
