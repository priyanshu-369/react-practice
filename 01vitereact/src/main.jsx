import React from 'react'
import { StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <h1> billa vite use karne aata hai !!!</h1>
    )
}
/*
const reactElement = {
    type: 'a',
    props: {
        href: "https://www.google.com/",
        target: "_blank"
    },
    children: 'Click me to visit google'
}

const anotherElement = (
    <a href="https://www.google.com/"> visit google billa!!!</a>
)
*/
const anotherUser = " hi bhaiya "
const reactElement = React.createElement(
   'a',
   { href: 'https://www.google.com/'},
   'click me to visit google',
   anotherUser
)

createRoot(document.getElementById('root'))
.render(

    <App/>
)
