import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import HeroSection8 from './components/HeroSection8.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeroSection8/>
    <App />
  </StrictMode>,
)
