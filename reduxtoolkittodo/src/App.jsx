import { useState } from 'react'
import AddTodo from './components/AddTodo.jsx'
import Todos from './components/Todos.jsx'


function App() {

  return (
          <div className='w-full bg-gray-600 flex items-center gap-5 flex-col h-lvh'>
            <AddTodo/>
            <Todos/>
          </div>

  )
}

export default App
