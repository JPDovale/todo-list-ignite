import { Check, Trash } from "phosphor-react";

import { TaskContainer } from "./style";

interface TaskProps {
  title: string;
  id: number;
  checked: boolean;

  handleUpdateTask: (id: number) => void;
  handleDeleteTask: (id: number) => void;
}

export function Task(props: TaskProps) {
  const { title, checked, id, handleUpdateTask, handleDeleteTask } = props;

  return (
    <TaskContainer>
      <div className={`task ${checked && "complete"}`}>
        <div className="check-box" onClick={() => handleUpdateTask(id)}>
          {checked && <Check size={14} weight="bold" className="vector" />}
          <input className="check" type="checkbox" checked={checked} />
        </div>
        <p className="task-content">{title}</p>
        <button className="delete-task" onClick={() => handleDeleteTask(id)}>
          <Trash size={20} />
        </button>
      </div>
    </TaskContainer>
  );
}
