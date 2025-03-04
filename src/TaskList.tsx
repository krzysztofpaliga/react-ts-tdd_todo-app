import { Task } from './types';

type TaskListProps = {
  tasks: Task[];
};

function TaskList({ tasks }: TaskListProps) {
  return (
    <>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </>
  );
}
export default TaskList;
