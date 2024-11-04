/* eslint-disable react/prop-types */

import TodoCard from "./TodoCard";

export function TodoList({
  selectedTab,
  handleDeleteTodo,
  handleCompleteTodo,
  getFilteredTodoList,
  todos
}) {
  const filteredTodoList = getFilteredTodoList(selectedTab);
  return (
    <>
      {filteredTodoList.map((todo) => {
        const todoIndex = todos.findIndex(val => val.input === todo.input)
        if (todoIndex === -1) return
        return (
          <TodoCard
            key={todoIndex}
            todoIndex={todoIndex}
            todo={todo}
            handleDeleteTodo={handleDeleteTodo}
            handleCompleteTodo={handleCompleteTodo}
          />
        )
      })}
    </>
  );
}
