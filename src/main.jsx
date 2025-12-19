import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider, createBrowserRouter} from "react-router-dom" 

import App from './App.jsx'
import { Home } from './pages/Home.jsx'
import { About } from './pages/About.jsx'
import UserInfo from './pages/UserInfo.jsx'

const router = createBrowserRouter([{ 
    path: "/",
    element: <App/>,
    children:[
      {path:"/", element:<Home/>},
      {path:"/about", element: <About/>},
      {path:"/userinfo/:id", element: <UserInfo/>}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>,
)
