import React, {useState, useContext} from 'react'
import UserContext from "../contextApi/UserContext.js"

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const {setUser} = useContext(UserContext)
    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({username, password})
    }

    return (
    <div>
        <h2>Login</h2>
        <input type='text' 
        value={username}
        onChange={(e)=>{
            if(e.target.value.trim() !== ""){
                setUsername(e.target.value)
            }
        }}
        placeholder='username'/>
        <input type='text'
        value={password}
        onChange={(e)=>{
            if(e.target.value.trim() !== ""){
                setPassword(e.target.value)
            }
        }}
        placeholder='password' />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login