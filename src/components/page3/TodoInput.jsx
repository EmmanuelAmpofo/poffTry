import React, { useState } from 'react'
import './todoInput.css'

function TodoInput() {
    let [item, setItem] = useState()

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
						className="addBtn">
						Add 
					</button>
				</div>
    </div>
  )
}

export default TodoInput