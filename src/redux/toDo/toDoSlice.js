import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: [
    {
        id:1,
        name: "Go to work at 6am today",
    },
    {
        id:2,
        name: "Code the app tomorrow",
    },
    
],
  reducers: {
    ADD_TODO_REQUEST: (state, action) => {state.push(action.payload)},
    DELETE_TODO_REQUEST: (state, action) => {
        return state.filter(x => x.id !== action.payload);
    },
    UPDATE_TODO_REQUEST: (state, action) => {
       const newTodos = [...state];
            let index = -1;
            for (let i = 0; i < newTodos.length; i++) {
                index++;
                if (newTodos[i].id === action.payload.id) {
                    break;
                }

            }
            if (index !== -1) {
                newTodos[index] = action.payload;
                return newTodos;
            }
    }
  },
});

export const { ADD_TODO_REQUEST, DELETE_TODO_REQUEST, UPDATE_TODO_REQUEST } = todoSlice.actions;

export const selectTodo = (state) => state.todo;

export default todoSlice.reducer;