import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/CardUI/Card'
import ThemeBtn from './components/ThemeBtn/ThemeBtn'
import { ThemeProvider } from './context/theme'
import CustomCursor from './components/Cursor/CustomCursor'

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const darkTheme= ()=>{
    setThemeMode("dark")
  }

  const lightTheme = ()=>{
    setThemeMode("light")
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  


  return (
  
  <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
            <div className="flex flex-wrap min-h-screen items-center">
              <CustomCursor/>
                <div className="w-full">
                  
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                      <ThemeBtn/>
                    </div>                 
                    <div className="w-full max-w-sm mx-auto">
                      <Card/>
                    </div>
                </div>
            </div>
    </ThemeProvider>
  )
}

export default App
