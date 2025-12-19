import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Home } from './pages/Home'
import { Navbar } from './components/Navbar'
import { Outlet, Link } from 'react-router-dom'
import { About } from './pages/About'

function App() {

  return (
    <div>
      <Navbar/>
      <Outlet/>
      
    </div>
  )
}

export default App
