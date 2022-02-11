import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import Card from "../Card";

function TodoList() {
  let todos = useSelector((state) => state.todo);
  return (
    <div>
      <div className="my-4">
        {todos.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} />;
        })}
      </div>
    </div>
  );
}

export default TodoList;
