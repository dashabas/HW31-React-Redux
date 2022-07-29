export const SET_TODOS = '[ToDo] set todos';
export const ADD_TODO = '[ToDo] add todo';
export const DELETE_TODO = '[ToDo] delete todo';
export const UPDATE_TODOS = '[ToDo] update todos';

export function setTodosAction(todos) {
    return {
        type: SET_TODOS,
        payload: todos,
    }
}

export function addTodoAction(todo) {
    return {
        type: ADD_TODO,
        payload: todo,
    }
}

export function deleteTodoAction(id) {
    return {
        type: DELETE_TODO,
        payload: id,
    }
}

export function updateTodosAction(todos) {
    return {
        type: UPDATE_TODOS,
        payload: todos,
    }
}