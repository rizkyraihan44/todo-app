import Tabs from "./components/Tabs"
import TodoInput from "./components/TodoInput"
import { TodoList } from "./components/TodoList"
import Header from "./components/Header"
import { useState } from "react"
import useTodos from "./hooks/useTodos"

function App() {

  const { todos, addTodo, deleteTodo, completeTodo, getFilteredTodoList } = useTodos()
  const [selectedTab, setSelectedTab] = useState('All')
  return (
    <>
      <Header todos={todos} />
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} todos={todos} />
      <TodoList
        handleDeleteTodo={deleteTodo}
        handleCompleteTodo={completeTodo}
        selectedTab={selectedTab}
        todos={todos}
        getFilteredTodoList={getFilteredTodoList}
      />
      <TodoInput handleAddTodo={addTodo} />
    </>
  )
}

export default App
