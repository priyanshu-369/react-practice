import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'
function Todos() {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  return (
    <div>
      {todos.map(todo=>(
        <div className=' w-3xl mt-5 flex justify-center gap-x-2' key={todo.id}>
          <input type="text"  
          placeholder={todo.text}
          readOnly
          className='bg-black/50 text-white text-2xl py-1 pl-2 rounded-sm w-full' />
          <button 
          className='p-2 text-white rounded-sm bg-red-600 '
          onClick={()=>{
          dispatch(removeTodo(todo.id))
          }}>
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}

export default Todos