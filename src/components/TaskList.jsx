import { useTasks } from "../contexts/TasksContext";
import Task from "./Task";

import styles from "./TaskList.module.css";

function TaskList() {
  const { tasks } = useTasks();

  return (
    <div className={styles.container}>
      <h1 className={styles.tasklistTitle}>To-Do-List</h1>
      <div className={styles.taskList}>
        {tasks.map((task, index) => (
          <Task key={task.id} name={task.name} index={index + 1} id={task.id} />
        ))}
      </div>
    </div>
  );
}

export default TaskList;
