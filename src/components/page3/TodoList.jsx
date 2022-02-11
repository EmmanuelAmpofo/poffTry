import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'

function TodoList() {
    // let todos = useSelector(state=>state);
  return (
    <div>TodoList
        {/* <div className="my-4">
            {todos.map((todo)=>   {
                return <TodoItem key={todos.id} todo={todo}/>;
            })}
        </div> */}
    </div>
  )
}

export default TodoList