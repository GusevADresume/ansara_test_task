import "./App.css";
import Create_task from "./components/Create_task";
import Current_tasks from "./components/Current_tasks";

function App() {
  return (
    <div className="Tasks_area_wraper">
      <div className="Create_task_wraper">
        <Create_task />
      </div>
      <div className="current_tasks_wraper">
        <Current_tasks />
      </div>
    </div>
  );
}

export default App;
