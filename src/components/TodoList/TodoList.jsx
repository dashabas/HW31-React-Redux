import TodoItem from '../TodoItem/TodoItem';

function TodoList({todos, onChangeStatus, onDelete}) {
    return (
        <>
            <ul>
                {
                    todos.map((todo) => {
                        return <TodoItem
                            todo={todo}
                            key={todo.id}
                            onDelete={onDelete}
                            onChangeStatus={onChangeStatus}/>
                    })
                }
            </ul>
        </>
    )
}

export default TodoList;