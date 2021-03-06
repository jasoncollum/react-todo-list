// import useLocalStorageState from './useLocalStorageState';
// import uuid from 'uuid/v4';

// export default initialTodos => {
//     const [todos, setTodos] = useLocalStorageState('todos', initialTodos);
//     return {
//         todos,
//         addTodo: newTodoText => {
//             setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }])
//         },
//         removeTodo: todoId => {
//             const filteredTodos = todos.filter(todo => todo.id !== todoId);
//             setTodos(filteredTodos);
//         },
//         toggleTodo: todoId => {
//             const updatedTodos = todos.map(todo =>
//                 todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
//             );
//             setTodos(updatedTodos);
//         },
//         editTodo: (todoId, editedTask) => {
//             const updatedTodos = todos.map(todo =>
//                 todo.id === todoId ? { ...todo, task: editedTask } : todo
//             );
//             setTodos(updatedTodos)
//         }
//     }
// }