import { useState } from 'react';

const useTodos = () => {
    const [todos, setTodos] = useState([]);

    function addTodo(newTodo) {
        const newTodoList = [...todos, { input: newTodo, complete: false }];
        setTodos(newTodoList);
    }

    function completeTodo(index) {
        let newTodoList = [...todos];
        let completeTodo = todos[index];
        completeTodo.complete = !completeTodo.complete;
        newTodoList[index] = completeTodo;
        setTodos(newTodoList);
    }

    function deleteTodo(index) {
        let newTodoList = todos.filter((val, valIndex) => {
            return valIndex !== index;
        });
        setTodos(newTodoList);
    }

    function getFilteredTodoList(selectedTab) {
        if (selectedTab === 'Open') {
            return todos.filter((todo) => !todo.complete);
        } else if (selectedTab === 'complete') {
            return todos.filter((todo) => todo.complete);
        } else {
            return todos;
        }
    }

    return {
        todos,
        addTodo,
        completeTodo,
        deleteTodo,
        getFilteredTodoList,
    };
};

export default useTodos;
