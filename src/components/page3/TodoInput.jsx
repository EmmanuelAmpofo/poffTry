import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {ADD_TODO_REQUEST} from "../../redux/toDo/toDoSlice"
import './todoInput.css'

function TodoInput() {
    let [item, setItem] = useState()
	const dispatch = useDispatch()

    const handleChange = (e) => {
        setItem(e.target.value)
    }
  return (
    <div className="">
        <div className="inputWrap">
					<input
						value={item}
						onChange={handleChange }
						type="text"
						className="textField"
                        placeholder='Type items .....'
					/>
					<button
					onClick={() => {
						dispatch(
							ADD_TODO_REQUEST({
								id: new Date().toISOString(),
								name: item,
							})
						);
						setItem("");
					}}
						className="addBtn">
						Add 
					</button>
				</div>
    </div>
  )
}

export default TodoInput