/* eslint-disable react/prop-types */
const TodoCard = ({ todo, todoIndex, handleDeleteTodo, handleCompleteTodo }) => {

  return (
    <div className="card todo-item">
      <p>{todo.input}</p>
      <div className="todo-buttons">
        <button onClick={() => handleCompleteTodo(todoIndex)} disabled={todo.complete}>Done</button>
        <button onClick={() => handleDeleteTodo(todoIndex)}>Delete</button>
      </div>
    </div>
  )
}
export default TodoCard
