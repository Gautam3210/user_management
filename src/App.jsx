
import './App.css'
import { Navbar } from './components/Navbar'
import { Outlet, Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addUsersList } from './store/store'


function App() {
      const dispatch = useDispatch()
      const navigate = useNavigate()
      useEffect(()=>{
        const fetchData = async ()=>{
            let {data} = await axios.get("https://reqres.in/api/users", {
              headers: {
                "x-api-key": "reqres_9973192f913f4b678d7a49d0f3badc43",
                "Accept": "application/json"
              }
            });

              // console.log(data)
              dispatch(addUsersList(data.data))
              navigate('/home')
        }
        fetchData();
    },[])

  return (
    <div>
      <Navbar/>
      <Outlet/>
      
    </div>
  )
}

export default App
