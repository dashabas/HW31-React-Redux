import React, {useEffect} from 'react';
import TodoList from './TodoList/TodoList';
import TodoForm from './TodoForm/TodoForm';
import {changeTodoStatus, createTodo, deleteTodo, getTodos} from './todoApi';
import {useDispatch, useSelector} from 'react-redux';
import {addTodoAction, deleteTodoAction, setTodosAction, updateTodosAction} from '../store/actions';

function ToDo() {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    useEffect(() => {
        async function initTodos() {
            const todos = await getTodos();

            dispatch(setTodosAction(todos));
        }

        initTodos();
    }, []);

    async function deleteTodoItem(id) {
        try {
            await deleteTodo(id);

            dispatch(deleteTodoAction(id));
        } catch (e) {
            console.warn(e)
        }
    }

    async function changeStatus(id) {
        try {
            const allTodos = [...todos];
            const todo = allTodos.find((todo) => todo.id === id);
            todo.status = !todo.status;

            await changeTodoStatus(id, todo);

            dispatch(updateTodosAction(allTodos));
        } catch (e) {
            console.warn(e);
        }
    }

    async function addTodoItem(todo) {
        try {
            const createdTodo = await createTodo(todo);

            dispatch(addTodoAction(createdTodo));
        } catch (e) {
            console.warn(e);
        }
    }

    return (
        <>
            <TodoForm onAddTodo={addTodoItem}/>
            <TodoList todos={todos} onChangeStatus={changeStatus} onDelete={deleteTodoItem}/>
        </>
    )
}

export default ToDo;