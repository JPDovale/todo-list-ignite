import { useAutoAnimate } from "@formkit/auto-animate/react";
import { PlusCircle, ClipboardText } from "phosphor-react";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Task } from "../Task";

import { TodoContainer } from "./style";

interface Task {
  id: number;
  title: string;
  checked: boolean;
}

export function Todo() {
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const tasksCompleted = tasks.filter((task) => task.checked);

  function updateTaskTitle(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskTitle(event.target.value);
  }

  function handleNewTask() {
    if (!newTaskTitle) return;
    const newTask: Task = {
      checked: false,
      id: Math.random(),
      title: newTaskTitle,
    };

    setTasks((tasks) => {
      return [newTask, ...tasks];
    });

    setNewTaskTitle("");
  }

  function handleUpdateTask(id: number) {
    const taskToUpdate = tasks.filter((task) => task.id === id)[0];
    const tasksFiltered = tasks.filter((task) => task.id !== id);

    const updatedTask: Task = {
      ...taskToUpdate,
      checked: !taskToUpdate.checked,
    };

    if (!updatedTask.checked) {
      setTasks([updatedTask, ...tasksFiltered]);
    } else {
      setTasks([...tasksFiltered, updatedTask]);
    }
  }

  function handleDeleteTask(id: number) {
    const newTasks = tasks.filter((task) => task.id !== id);

    setTasks(newTasks);
  }

  const [listRef] = useAutoAnimate<HTMLUListElement>();

  return (
    <TodoContainer>
      <header className="add-task">
        <input
          type="text"
          className="title"
          placeholder="Adicione uma nova tarefa"
          value={newTaskTitle}
          onChange={updateTaskTitle}
        />

        <button className="add-button" onClick={handleNewTask}>
          Criar
          <PlusCircle weight="bold" size={16} />
        </button>
      </header>

      <main className="content">
        <header className="infos">
          <div className="info">
            <span className="existe-tasks">Tarefas criadas</span>
            <p>{tasks.length}</p>
          </div>

          <div className="info">
            <span className="completed-tasks">Concluídas</span>
            <p>
              {tasksCompleted.length} de {tasks.length}
            </p>
          </div>
        </header>

        <ul className="tasks" ref={listRef}>
          {tasks[0] ? (
            <>
              {tasks.map((task) => (
                <Task
                  title={task.title}
                  checked={task.checked}
                  id={task.id}
                  key={task.id}
                  handleUpdateTask={handleUpdateTask}
                  handleDeleteTask={handleDeleteTask}
                />
              ))}
            </>
          ) : (
            <div className="empty">
              <ClipboardText size={56} />
              <div>
                <p className="info">Você ainda não tem tarefas cadastradas</p>
                <p className="instruction">
                  Crie tarefas e organize seus itens a fazer
                </p>
              </div>
            </div>
          )}
        </ul>
      </main>
    </TodoContainer>
  );
}
