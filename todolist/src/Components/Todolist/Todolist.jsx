import React from "react";
import { Card } from "react-bootstrap";
import { TodoItem } from "./TodoItem";

export const Todolist = ({ todoitem, handleDetele }) => {
  return (
    <div>
      <Card className="todolist">
        {todoitem.map((item) => (
          <TodoItem item={item} handleDetele={handleDetele} />
        ))}
      </Card>
    </div>
  );
};
