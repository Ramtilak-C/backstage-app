import React from "react";
import { FaCheck, FaTrash } from "react-icons/fa";
import styled from "styled-components";

interface TaskProps {
  task: { id: number; text: string; completed: boolean };
  onDelete: (taskId: number) => void;
  onToggleComplete: (taskId: number) => void;
}

const TaskWrapper = styled.div<{ completed: boolean }>`
  border: 1px solid #ccc;
  margin: 10px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
`;

const TaskButton = styled.button`
  padding: 5px 10px;
  margin-left: 5px;
  border: none;
  cursor: pointer;
`;

const CompleteButton = styled(TaskButton)`
  background-color: #2ecc71;
  color: #fff;
  &:hover {
    background-color: #27ae60;
  }
`;

const UndoButton = styled(TaskButton)`
  background-color: #f1c40f;
  color: #fff;
  &:hover {
    background-color: #f39c12;
  }
`;

const DeleteButton = styled(TaskButton)`
  background-color: #e74c3c;
  color: #fff;
  &:hover {
    background-color: #c0392b;
  }
`;

const Task: React.FC<TaskProps> = ({ task, onDelete, onToggleComplete }) => {
  return (
    <TaskWrapper completed={task?.completed}>
      <h3>{task?.text}</h3>
      {task && (
        <div>
          {task?.completed ? (
            <UndoButton onClick={() => onToggleComplete(task.id)}>
              <FaCheck /> Undo
            </UndoButton>
          ) : (
            <CompleteButton onClick={() => onToggleComplete(task.id)}>
              <FaCheck /> Complete
            </CompleteButton>
          )}
          <DeleteButton onClick={() => onDelete(task.id)}>
            <FaTrash /> Delete
          </DeleteButton>
        </div>
      )}
    </TaskWrapper>
  );
};

export default Task;
