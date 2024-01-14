import { useState } from "react";
import styled from "styled-components";

import TaskList from "./TaskList";

const AppWrapper = styled.div`
  text-align: center;
  margin-top: 50px;
`;

export default function Home() {
  const [tasks, setTasks] = useState<
    Array<{ id: number; text: string; completed: boolean }>
  >([
    { id: 1, text: "Create Backstage component", completed: false },
    { id: 2, text: "Integrate with Docker", completed: false },
  ]);

  const deleteTask = (taskId: number): void => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleComplete = (taskId: number): void => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <AppWrapper>
      <h1>Backstage Task Manager</h1>
      <TaskList
        tasks={tasks}
        onDelete={deleteTask}
        onToggleComplete={toggleComplete}
      />
    </AppWrapper>
  );
}
