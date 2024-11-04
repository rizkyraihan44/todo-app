import { useEffect, useState } from 'react';
import {
    generateRandomId,
    getFilteredTodoList,
    saveData,
} from '../utils/todoUtils';
const useTodos = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const db = JSON.parse(localStorage?.getItem('todo-app') ?? '{}');
        if (db.todos) {
            setTodos(db.todos);
        }
    }, []);

    function addTodo(newTodo) {
        const newTodoList = [
            ...todos,
            { id: generateRandomId(16), input: newTodo, complete: false },
        ];
        setTodos(newTodoList);
        saveData(newTodoList);
    }

    function completeTodo(index) {
        let newTodoList = [...todos];
        let completeTodo = todos[index];
        completeTodo.complete = !completeTodo.complete;
        newTodoList[index] = completeTodo;
        setTodos(newTodoList);
        saveData(newTodoList);
    }

    function deleteTodo(index) {
        let newTodoList = todos.filter((val, valIndex) => {
            return valIndex !== index;
        });
        setTodos(newTodoList);
        saveData(newTodoList);
    }

    return {
        todos,
        addTodo,
        completeTodo,
        deleteTodo,
        getFilteredTodoList: (selectedTab) =>
            getFilteredTodoList(todos, selectedTab),
    };
};

export default useTodos;
