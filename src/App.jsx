import { TasksProvider } from "./contexts/TasksContext";
import TaskList from "./components/TaskList";
import Form from "./components/Form";
import Management from "./components/Management";
function App() {
  return (
    <>
      <TasksProvider>
        <div className="app-layout">
          <TaskList />
          <Management />
        </div>
      </TasksProvider>
    </>
  );
}

export default App;
