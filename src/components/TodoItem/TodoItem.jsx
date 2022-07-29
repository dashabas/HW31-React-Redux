import './TodoItem.css';

function TodoItem({todo, onChangeStatus, onDelete}) {
    return (
        <li className={todo.status ? 'done' : ''}>
            {todo.task}
            <button type="button" onClick={() => onChangeStatus(todo.id)}>Change status</button>
            <button type="button" onClick={() => onDelete(todo.id)}>Delete</button>
        </li>
    )
}

export default TodoItem;