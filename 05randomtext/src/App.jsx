import { useCallback, useEffect, useRef, useState } from 'react'
import "./index.css"
import { SquareAvatar } from './components/SquareArea'

function App() {

  const [length, setlength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const passwordRef = useRef(null)
  const [copyText, setCopyText]=useState('copy')


  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789";
    if(characterAllowed) str += "~`! @#$%^&*()-_+={}[]|\;:<>,./?";

    for(let i=1 ; i<=length ;i++){
      let char = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, characterAllowed, setPassword])
  
  const copyToClipboard = useCallback( ()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 101)
    setCopyText('copied')
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length, numberAllowed, characterAllowed, passwordGenerator])

  return (
  <div className='max-w-2xl h-auto mx-auto shadow-md rounded-lg px-6 py-4 my-8 bg-gray-700'>
  <h1 className='text-center text-white text-3xl py-3'>Password Generator</h1>
  <div className='flex items-center'>
    <input
      type="text"
      name={password}
      placeholder={password}
      readOnly
      ref={passwordRef}
      className='text-2xl py-2 pr-4 pl-5 border-none rounded-l-md bg-gray-200 flex-grow  text-black font-semibold'
    />
    <button 
    className='text-white bg-blue-600 text-2xl px-4 py-2 rounded-r-md ml-1'
    onClick={copyToClipboard}>
      {copyText || "copy"}
    </button>
  </div>


  <div className='flex flex-col sm:flex-row text-sm gap-x-4 mt-4'>
    <div className='flex items-center gap-x-2'>
      <input
        type="range"
        id='pointer-length'
        min={8}
        max={100}
        value={length}
        onChange={(e) => setlength(e.target.value)}
        className='h-1.5 bg-gray-300 rounded-lg appearance-none cursor-pointer
                   [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-blue-600 [&::-webkit-slider-thumb]:rounded-full
                   [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:bg-blue-600 [&::-moz-range-thumb]:rounded-full'
      />
      <label htmlFor="pointer-length" className='text-xl text-orange-300'>
        Length: {length}
      </label>
    </div>
    <div className='flex items-center gap-x-2 mt-2 sm:mt-0'>
      <input
        type="checkbox"
        name={numberAllowed}
        id='number-allow'
        onChange={()=> setNumberAllowed((prev => !prev))}
        className='rounded cursor-pointer text-blue-600 focus:ring-blue-500'
      />
      <label htmlFor="number-allow" className='text-white'>
        Add Numbers
      </label>
    </div>
    <div className='flex items-center gap-x-2 mt-2 sm:mt-0'>
      <input
        type="checkbox"
        name={characterAllowed}
        id="character-allow"
        onChange={() => {
          setCharacterAllowed(prev => !prev);
        }}
        className='rounded cursor-pointer text-blue-600 focus:ring-blue-500'
      />
      <label htmlFor="character-allow" className='text-white'>
        Add Characters
      </label>
    </div>
  </div>
</div>

  )
}

export default App
