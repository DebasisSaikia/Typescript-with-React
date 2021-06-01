import React, { HtmlHTMLAttributes, useState } from "react";
import "./App.css";
import TodoTask from "./components/TodoTask";
import { ITask } from "./Interfaces";

const App: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [dLine, setDline] = useState<number>(0);
  const [todo, setTodo] = useState<ITask[]>([]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === "task") {
      setTask(e.target.value);
    } else {
      setDline(parseInt(e.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task, deadLine: dLine };
    setTodo([...todo, newTask]);
    console.log(todo);
    setTask("");
    setDline(0);
  };

  const deleteTask = (taskToDelete: string): void => {
    setTodo(
      todo.filter((task) => {
        return task.taskName != taskToDelete;
      })
    );
  };

  return (
    <>
      <div className="App">
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Task..."
            name="task"
            value={task}
            onChange={handleInput}
          />
          <input
            type="number"
            placeholder="Deadline"
            name="deadline"
            value={dLine}
            onChange={handleInput}
          />
        </div>
        <button onClick={addTask}>Add task</button>
        <div className="todoList">
          {todo.map((task: ITask, key: number) => {
            return <TodoTask deleteTask={deleteTask} key={key} task={task} />;
          })}
        </div>
      </div>
    </>
  );
};

export default App;
