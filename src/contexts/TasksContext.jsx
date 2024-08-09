import { createContext, useContext, useReducer } from "react";

const TasksContext = createContext();

const initialValue = {
  tasks: [
    {
      id: 1,
      name: "Clean the x",
      subtasks: [
        { id: 3, name: "Go shopping" },
        { id: 4, name: "Go to the doctor" },
      ],
    },
    { id: 2, name: "Clean the y" },
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case "addTask":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case "removeTask":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    default:
      return state;
  }
}

function TasksProvider({ children }) {
  const [{ tasks }, dispatch] = useReducer(reducer, initialValue);

  function AddTask(desc) {
    dispatch({ type: "addTask", payload: { id: Date.now(), name: desc } });
  }

  function RemoveTask(id) {
    dispatch({ type: "removeTask", payload: id });
  }

  return (
    <TasksContext.Provider value={{ tasks, AddTask, RemoveTask }}>
      {children}
    </TasksContext.Provider>
  );
}

function useTasks() {
  const context = useContext(TasksContext);
  if (context === undefined)
    throw new Error("TasksContext was used outside the TasksContext");
  return context;
}

export { TasksProvider, useTasks };
