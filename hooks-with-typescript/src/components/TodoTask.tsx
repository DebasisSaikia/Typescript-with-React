import React from "react";
import { ITask } from "../Interfaces";

interface Props {
  task: ITask;
  deleteTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, deleteTask }: Props) => {
  return (
    <div className="task">
      <div className="content">
        <span>{task.taskName}</span>
        <br />
        <span>{task.deadLine}</span>
      </div>
      <button onClick={() => deleteTask(task.taskName)} className="delete">
        X
      </button>
    </div>
  );
};

export default TodoTask;
