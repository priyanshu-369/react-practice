import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
  
  const addValue = ()=>{
    if(counter === 20) return;
    console.log(counter)
    counter = counter + 1
    setCounter(counter)
  }

  const removeValue = () => {
    if(counter === 0) return;
    counter = counter - 1
    setCounter(counter)
  }
  return (
    <>
      <h1> counter program </h1>
      <h2> counter value: {counter} </h2>

      <button onClick={addValue}>Add value: {counter}</button>
      <br/>
      <br/>
      <button onClick={removeValue}>Remove value: {counter}</button>
    </>
  )
}

export default App
