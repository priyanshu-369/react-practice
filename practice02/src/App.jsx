import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import A from './Components/A/A.jsx'
import B from './Components/B/B.jsx'

//  lifted state way to share data between the sibling nodes that have same parents is given below
function App() {
  const [componentValue, setComponentValue] = useState(0)

  return (
    <>
     <h1>Vite + React tree Component App</h1>
     <A setComponentValue={setComponentValue} componentValue={componentValue}/>
     <B componentValue={componentValue}/>
    </>
  )
}

export default App
