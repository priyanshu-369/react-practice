import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import NewCard from './components/NewCard'
function App() {
const stockPrice = [0.12, 0.34, 0.56, 0.35, 0.15]

  return (
    <div className='flex justify-center items-center space-x-1 h-screen '>
    {/* <Card name="billa" price="499" stock="0.25" src="https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?semt=ais_hybrid&w=740"/> */}
    {/* <Card name="bulla" price="399" stock="0.11" src="https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149611030.jpg"/> */}
    <NewCard price = "20000" canceledPrice = "25000" imageSource = "https://cdn.pixabay.com/photo/2024/05/20/10/34/ai-generated-8774740_1280.jpg" />
    <NewCard price = "30000" canceledPrice= "36000" imageSource ="https://images.unsplash.com/photo-1723609883849-8814c65d33e4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    </div>
  )
}

export default App
