import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   let [bgColor, setBackgroundColor] = useState('white');

  return (
    <div className='w-screen h-screen  flex justify-center items-end' style={{backgroundColor:bgColor}}>
    <div className='max-w-screen bg-gray-200 h-15 m-2 px-6 rounded-4xl flex  justify-center  wrap space-x-5'>
      <button className='bg-red-500 w-20 rounded-4xl my-3 text-white text-xl ' onClick={()=> setBackgroundColor('red')} >Red</button>
      <button className='bg-lime-500 w-20 rounded-4xl my-3 text-white text-xl ' onClick={()=> setBackgroundColor("green")}>Green</button>
      <button className='bg-blue-500 w-20 rounded-4xl my-3 text-white text-xl ' onClick={()=> setBackgroundColor("blue")}>Blue</button>
      <button className='bg-amber-500 w-22 rounded-4xl my-3 text-white text-xl ' onClick={()=> setBackgroundColor("yellow")}>Amber</button>
      <button className='bg-orange-500 w-22 rounded-4xl my-3 text-white text-xl ' onClick={()=> setBackgroundColor("orange")}>Orange</button>
      <button className='bg-purple-500 w-26 rounded-4xl my-3 text-white text-xl ' onClick={()=> setBackgroundColor("purple")}>Lavender</button>
      <button className='bg-gray-600 w-20 rounded-4xl my-3 text-white text-xl ' onClick={()=> setBackgroundColor("gray")}>Black</button>
    </div>
    </div>
  )
}

export default App
