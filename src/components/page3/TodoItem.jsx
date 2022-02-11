import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./todoItem.css";
import {UPDATE_TODO_REQUEST, DELETE_TODO_REQUEST} from "../../redux/toDo/toDoSlice"


function TodoItem({todo}) {
  console.log(typeof todo)
  const [editable, setEditable] = useState(false);
  const [name, setName] = useState(todo?.name);
  let dispatch = useDispatch();
  return (
    <div>
      <div className="todoItem">
        <div className="todo-item-input">
          {editable ? (
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          ) : (
            <p>{todo?.name}</p>
          )}
        </div>
        <div className="actions">
          <button className="btn-edit-update" onClick={() => {
								dispatch(
									UPDATE_TODO_REQUEST({
										...todo,
										name: name,
									})
								);
								if (editable) {
									setName(todo.name);
								}
								setEditable(!editable);
							}}>{editable ? (
								'update'
							) : (
								'edit'
							)}</button>
          <button className="btn-delete" onClick={() => dispatch(DELETE_TODO_REQUEST(todo?.id))}>delete</button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
