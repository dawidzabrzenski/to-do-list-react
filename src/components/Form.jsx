import { useState } from "react";
import { useTasks } from "../contexts/TasksContext";

import styles from "./Form.module.css";

function Form() {
  const [description, setDescription] = useState("");

  const { tasks, AddTask } = useTasks();

  function handleSubmit(e) {
    e.preventDefault();

    AddTask(description);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add a new task</h3>
      <input
        className={styles.addTaskInput}
        type="text"
        placeholder="Enter the task name..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className={styles.addTaskButton}>➕</button>
    </form>
  );
}

export default Form;
