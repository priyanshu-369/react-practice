import { useState } from 'react'
import TodoFrom from './components/FormUI/TodoFrom'
import TodoItem from './components/TodoItem/TodoItem'
import { TodoContext, TodoProvider, useTodo } from './context/index.js'

function App() {
  const [todos, setTodos] = useState([])
    const addTodo = (todo)=>{
        setTodos((prev)=>[...prev, {id:Date.now(),...todo }])
    }

    const updateTodo = (id, todo)=>{
        setTodos((prev)=>prev.map((prevTodo)=> (prevTodo.id === id? todo : prevTodo)))
    }

    const deleteTodo = (id)=>{
      setTodos((prev)=>prev.filter((prevTodo)=>(prevTodo.id !== id )))
    }

    // const toggleTodo = (id) =>{
    //   setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id === id ? !prevTodo.completed : prevTodo)))
    // }//here some improvement is needed when not work because it will instead of changing the completed value in the object it will change the whole object to just boolean value
    
    
    const toggleTodo = (id) =>{
      setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id === id ? {...prevTodo, completed:!prevTodo.complete} : prevTodo )))}
    
   
    return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleTodo}}>
    <div className="bg-[#172842]  min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoFrom/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {/* <TodoItem/> */}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
