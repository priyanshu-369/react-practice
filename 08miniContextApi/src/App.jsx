import UserContextAdapter from './contextApi/UserContextProvider.jsx'
import './App.css'
import Login from './components/Login.jsx'
import Profile from './components/Profile.jsx'
import UserContextProvider from './contextApi/UserContextProvider.jsx'

function App() {

  return (
    <UserContextProvider>
      <h1>Billa Lets Learn React In Project Driven Way</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>   
  )
}

export default App
/*
                            ┌───────────────────────┐
                            │     createContext()    │
                            │   (creates context)    │
                            └──────────┬────────────┘
                                       │
                                       ▼
                          ┌──────────────────────────┐
                          │    <AuthProvider>        │
                          │  (wraps your app,        │
                          │   provides global data)  │
                          └──────────┬───────────────┘
                                     │
                  ┌──────────────────┼──────────────────┐
                  ▼                  ▼                  ▼
           Component A         Component B         Component C
         (deeply nested)     (any component)       (any level)
                  │                  │
                  ▼                  ▼
      ┌────────────────────┐ ┌────────────────────┐
      │ useContext(Context)│ │ useContext(Context)│
      │ (access data like  │ │ (access user, auth │
      │  user, theme, etc) │ │  functions, etc.)  │
      └────────────────────┘ └────────────────────┘
*/