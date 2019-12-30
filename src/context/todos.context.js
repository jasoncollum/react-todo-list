import React, { createContext } from 'react';
import useTodoState from '../hooks/useTodoState';

const defaultTodos = [
    { id: 1, task: "Learn context", completed: false },
    { id: 2, task: "Code along", completed: true }
];

export const TodosContext = createContext();

export function TodosProvider(props) {
    const todosMethods = useTodoState(defaultTodos);
    return (
        <TodosContext.Provider value={todosMethods}>
            {props.children}
        </TodosContext.Provider>
    )
}