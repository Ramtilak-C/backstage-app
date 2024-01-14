import React from "react";
import styled from "styled-components";

import Task from "./Task";

interface TaskListProps {
  tasks: { id: number; text: string; completed: boolean }[];
  onDelete: (taskId: number) => void;
  onToggleComplete: (taskId: number) => void;
}

const TaskListWrapper = styled.div`
  margin-top: 20px;
`;

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onDelete,
  onToggleComplete,
}) => {
  return (
    <TaskListWrapper>
      {tasks?.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </TaskListWrapper>
  );
};

export default TaskList;
