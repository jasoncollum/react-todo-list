import React, { useContext } from 'react';
import { TodosContext } from './context/todos.context';
import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState';

function EditTodoForm({ id, task, toggleEditForm }) {
    const { editTodo } = useContext(TodosContext);
    const [value, handleChange, reset] = useInputState(task);
    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                editTodo(id, value);
                reset();
                toggleEditForm();
            }}
            style={{ marginLeft: '1rem', width: '50%' }}
        >
            <TextField
                value={value}
                onChange={handleChange}
                margin='normal'
                fullWidth
                autoFocus
            />
        </form>
    )
}
export default EditTodoForm;