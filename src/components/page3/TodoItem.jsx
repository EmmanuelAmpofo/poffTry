import React from "react";
import './todoItem.css'

function TodoItem() {
  return (
    <div>
      <div className="todoItem">
        <div className="todo-item-input"></div>
        <div className="actions">
          <button className="btn-edit-update">edit</button>
          <button className="btn-delete">delete</button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
