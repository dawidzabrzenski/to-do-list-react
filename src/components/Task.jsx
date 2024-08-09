import { useTasks } from "../contexts/TasksContext";

import styles from "./Task.module.css";

function Task({ index, id, name }) {
  const { RemoveTask } = useTasks();

  return (
    <div className={styles.item}>
      <p className={styles.task}>{index}.</p>
      <p className={styles.task}>{name}</p>
      <div>
        <button className={styles.deleteButton} onClick={() => RemoveTask(id)}>
          ❌
        </button>
      </div>
    </div>
  );
}

export default Task;
