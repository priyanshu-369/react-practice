import React from 'react'

function A({setComponentValue, componentValue}) {
    
    
    return (
    <div>
        <h1>
            Component A has data: {componentValue}
        </h1>
        <button onClick={()=>{
            setComponentValue(prev=> prev+1)
        }} >
            click me
        </button>
    </div>
  )
}

export default A