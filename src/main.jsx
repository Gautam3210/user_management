import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider, createBrowserRouter} from "react-router-dom" 
import {Provider} from 'react-redux'
import App from './App.jsx'
import { Home } from './pages/Home.jsx'
import UserInfo from './pages/UserInfo.jsx'
import store from './store/store.js'
import { AddUser } from './pages/AddUser.jsx'

const router = createBrowserRouter([{ 
    path: "/",
    element: <App/>,
    children:[
      {path:"/", element:<Home/>},
      {path:"/addUser", element: <AddUser/>},
      {path:"/userinfo/:id", element: <UserInfo/>}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </StrictMode>,
)
