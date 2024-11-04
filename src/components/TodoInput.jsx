/* eslint-disable react/prop-types */
import { useState } from 'react'
import { handleKeyDown } from '../utils/todoUtils'

const TodoInput = ({ handleAddTodo }) => {
  const [inputValue, setInputValue] = useState('')
  return (
    <div className='input-container'>
      <input
        type="text"
        placeholder="Add task"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e, inputValue, setInputValue, handleAddTodo)}
      />
      <button onClick={() => {
        if (!inputValue) return
        handleAddTodo(inputValue)
        setInputValue('')
      }}>
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  )
}

export default TodoInput