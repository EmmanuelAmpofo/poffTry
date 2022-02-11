export const ADD_TODO_REQUEST = "ADD_TODO_REQUEST";
export const DELETE_TODO_REQUEST = "DELETE_TODO_REQUEST";
export const UPDATE_TODO_REQUEST = "UPDATE_TODO_REQUEST";

export function addTodo(todo) {
    return {
			type: ADD_TODO_REQUEST,
			payload: todo,
		};
}

export function deleteTodo(todoId) {
    return {
			type: DELETE_TODO_REQUEST,
			payload: todoId,
		};
}


export function updateTodo(todo) {
    return {
			type: UPDATE_TODO_REQUEST,
			payload: todo,
		};
}