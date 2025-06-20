import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import App from './App.jsx'
import store from './store/store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AuthLayout } from './component/index.js'
import {
    AddPost,
    AllPost,
    EditPost,
    Home,
    Login,
    Signup,
    Post,
} from "./pages/index.js"

const router = createBrowserRouter([{
  path:"/",
  element:<App/>,
  children:[
    {
      path:'/',
      element:<Home/>
    },
    {
      path:"/login",  
      element:(
        <AuthLayout authentication={false} >
          <Login />
        </AuthLayout>
      )
    },
    {
      path:"/signup",
      element:(
        <AuthLayout authentication={false}>
          <Signup />
        </AuthLayout>
      )
    },
    {
      path:"/all-posts",
      element:(
        <AuthLayout authentication={true}>
          <AllPost/>
        </AuthLayout>
      )
    },
    {
      path: "/add-post",
      element:(
        <AuthLayout authentication={true}>
          <AddPost/>
        </AuthLayout>
      )
    },
    {
      path: "/edit-post/:slug",
      element:(
        <AuthLayout authentication={true}>
          <EditPost/>
        </AuthLayout>
      )
    },
    {
      path:"/post/:slug",
      element:<Post />,
    },
  ],
},
])

createRoot(document.getElementById('root')).render(
 
 <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
)
