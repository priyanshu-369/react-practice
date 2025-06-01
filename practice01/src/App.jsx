import React from "react";
import { useState } from "react";
import TagBox from "./Components/TagBox";


export default function App(){
  const [component, setComponent] = useState([])
  const [textValue, setText] = useState("")

  function injectComponent(e){
    if(e.key==="Enter" && e.target.value.trim() !== ""){
      setText(e.target.value)
      
       const newComponent = (
      <div className="flex items-center justify-between bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 max-w-md mx-auto shadow-sm mt-2">
      <p className="text-gray-800 text-base flex-1">{e.target.value}</p>
      <button className="ml-4 bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition">
        Clear
      </button>
    </div>
    )

    setComponent((prev)=>[...prev, newComponent])
    e.target.value = ""  
  }
    
  }

  return(
    <div className="h-full "> 
      <div className="flex  w-150  mt-5 mx-auto">
        <input type="text"
        className="h-6 px-2 py-5 w-full rounded-2xl border-2 bg-white border-gray-600 text-2xl" 
        onKeyDown={(e)=>{
          injectComponent(e)
        }} 
        placeholder="type something"/>
      </div>

      {component}
      
    </div>
  )
}
