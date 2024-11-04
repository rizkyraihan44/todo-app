export function saveData(currentTodo) {
    localStorage.setItem('todo-app', JSON.stringify({ todos: currentTodo }));
}

export function generateRandomId(length) {
    let id = '';
    for (let i = 0; i < length; i++) {
        id += Math.floor(Math.random() * 16).toString(16); // 16 untuk heksadesimal
    }
    return id;
}

export function getFilteredTodoList(todos, selectedTab) {
    if (selectedTab === 'Open') {
        return todos.filter((todo) => !todo.complete);
    } else if (selectedTab === 'complete') {
        return todos.filter((todo) => todo.complete);
    } else {
        return todos;
    }
}

export function handleKeyDown(event, inputValue, setInputValue, handleAddTodo) {
    if (event.key === 'Enter') {
        if (!inputValue) return;
        handleAddTodo(inputValue);
        setInputValue('');
    }
}
