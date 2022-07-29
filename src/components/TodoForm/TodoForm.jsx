import {useState} from 'react';

function TodoForm({onAddTodo}) {
    const [todo, setTodo] = useState({
        task: '',
        status: false,
    });

    function changeTodo(e) {
        setTodo({
                ...todo,
                [e.target.name]: e.target.value
            }
        )
    }

    function submitForm(e) {
        e.preventDefault();

        onAddTodo(todo);

        setTodo({
            task: '',
            status: false,
        });
    }

    return (
        <form onSubmit={submitForm}>
            <input name="task" type="text" value={todo.task} onChange={changeTodo}/>
            <button>Add</button>
        </form>
    )
}

export default TodoForm;