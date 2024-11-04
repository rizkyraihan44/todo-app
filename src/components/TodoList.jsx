/* eslint-disable react/prop-types */

import TodoCard from "./TodoCard";

export function TodoList({
  selectedTab,
  handleDeleteTodo,
  handleCompleteTodo,
  getFilteredTodoList
}) {
  const filteredTodoList = getFilteredTodoList(selectedTab);
  return (
    <>
      {filteredTodoList.map((todo, todoIndex) => {
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
